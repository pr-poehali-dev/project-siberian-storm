import json
import os
import urllib.request
import urllib.parse

def handler(event: dict, context) -> dict:
    """Получить все фото блюд из БД"""
    cors_headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors_headers, 'body': ''}

    import psycopg2
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    schema = os.environ.get('MAIN_DB_SCHEMA', 'public')
    cur.execute(f"SELECT code, image_url FROM {schema}.dish_images")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    images = {row[0]: row[1] for row in rows}

    return {
        'statusCode': 200,
        'headers': cors_headers,
        'body': json.dumps({'images': images}),
    }