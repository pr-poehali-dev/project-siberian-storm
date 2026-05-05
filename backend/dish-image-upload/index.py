import json
import os
import base64
import urllib.request
import urllib.parse
import hmac
import hashlib
import datetime
import psycopg2

def sign(key, msg):
    return hmac.new(key, msg.encode('utf-8'), hashlib.sha256).digest()

def get_signature_key(key, date_stamp, region, service):
    k_date = sign(('AWS4' + key).encode('utf-8'), date_stamp)
    k_region = sign(k_date, region)
    k_service = sign(k_region, service)
    k_signing = sign(k_service, 'aws4_request')
    return k_signing

def s3_put(bucket, key, data, content_type, access_key, secret_key):
    host = 'bucket.poehali.dev'
    endpoint = f'https://{host}'
    region = 'us-east-1'
    service = 's3'

    t = datetime.datetime.utcnow()
    amz_date = t.strftime('%Y%m%dT%H%M%SZ')
    date_stamp = t.strftime('%Y%m%d')

    canonical_uri = f'/{bucket}/{key}'
    canonical_querystring = ''
    payload_hash = hashlib.sha256(data).hexdigest()
    canonical_headers = f'content-type:{content_type}\nhost:{host}\nx-amz-content-sha256:{payload_hash}\nx-amz-date:{amz_date}\n'
    signed_headers = 'content-type;host;x-amz-content-sha256;x-amz-date'

    canonical_request = '\n'.join(['PUT', canonical_uri, canonical_querystring,
                                   canonical_headers, signed_headers, payload_hash])

    algorithm = 'AWS4-HMAC-SHA256'
    credential_scope = f'{date_stamp}/{region}/{service}/aws4_request'
    string_to_sign = '\n'.join([algorithm, amz_date, credential_scope,
                                 hashlib.sha256(canonical_request.encode()).hexdigest()])

    signing_key = get_signature_key(secret_key, date_stamp, region, service)
    signature = hmac.new(signing_key, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()

    auth_header = (f'{algorithm} Credential={access_key}/{credential_scope}, '
                   f'SignedHeaders={signed_headers}, Signature={signature}')

    req = urllib.request.Request(
        f'{endpoint}/{bucket}/{key}',
        data=data,
        method='PUT',
        headers={
            'Content-Type': content_type,
            'x-amz-date': amz_date,
            'x-amz-content-sha256': payload_hash,
            'Authorization': auth_header,
        }
    )
    with urllib.request.urlopen(req) as resp:
        return resp.status

def handler(event: dict, context) -> dict:
    """Загрузка фото блюда в S3 и сохранение ссылки в БД"""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    code = body.get('code')
    image_data = body.get('image')
    content_type = body.get('content_type', 'image/jpeg')

    if not code or not image_data:
        return {'statusCode': 400, 'headers': cors_headers, 'body': json.dumps({'error': 'code и image обязательны'})}

    image_bytes = base64.b64decode(image_data)
    ext = 'jpg' if 'jpeg' in content_type else content_type.split('/')[-1]
    key = f'dishes/{code}.{ext}'

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    secret_key = os.environ['AWS_SECRET_ACCESS_KEY']
    s3_put('files', key, image_bytes, content_type, access_key, secret_key)

    image_url = f"https://cdn.poehali.dev/projects/{access_key}/files/{key}"

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    code_safe = code.replace("'", "''")
    url_safe = image_url.replace("'", "''")
    cur.execute(f"""
        INSERT INTO {schema}.dish_images (code, image_url, updated_at)
        VALUES ('{code_safe}', '{url_safe}', NOW())
        ON CONFLICT (code) DO UPDATE SET image_url = '{url_safe}', updated_at = NOW()
    """)
    conn.commit()
    cur.close()
    conn.close()

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'url': image_url, 'code': code}),
    }
