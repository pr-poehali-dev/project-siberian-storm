import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const UPLOAD_URL = "https://functions.poehali.dev/5d4ec8f3-3da0-45c3-8c6a-caf0e9387a4d";
const GET_URL = "https://functions.poehali.dev/4b896819-afe5-4c96-a50d-801300e96afe";
const ADMIN_PASSWORD = "Qwerty38";

const menuData = [
  { id: "1", category: "Салаты", items: [
    { code: "1-01", name: "Салат с папоротником" },
    { code: "1-02", name: "Салат со свиными ушами и огурцом" },
    { code: "1-03", name: "Домашний" },
    { code: "1-04", name: "Салат с языком" },
    { code: "1-05", name: "Салат со спаржей" },
    { code: "1-06", name: "Шпинат с арахисом" },
    { code: "1-07", name: "Гантофу с овощами" },
    { code: "1-08", name: "Салат с говядиной" },
    { code: "1-09", name: "Салат с курицей" },
    { code: "1-10", name: "Салат со свиной рулькой" },
  ]},
  { id: "2", category: "Гарниры", items: [
    { code: "2-01", name: "Паровой рис" },
    { code: "2-02", name: "Рис с соевым соусом" },
    { code: "2-03", name: "Рис с овощами" },
    { code: "2-04", name: "Рис с яйцом" },
    { code: "2-05", name: "Пельмени со свининой" },
    { code: "2-06", name: "Пельмени с говядиной" },
    { code: "2-07", name: "Пельмени с курицей" },
  ]},
  { id: "3", category: "Горячие блюда", items: [
    { code: "3-01", name: "Гуобоажоу по-китайски" },
    { code: "3-02", name: "Гуобоажоу по-русски" },
    { code: "3-03", name: "Свинина верёвочкой" },
    { code: "3-04", name: "Жареная свинина в кляре" },
    { code: "3-05", name: "Жареная свинина с ананасами" },
    { code: "3-06", name: "Жареные свиные рёбра" },
    { code: "3-07", name: "Рёбра в кисло-сладком соусе" },
    { code: "3-08", name: "Жареная свинина с кинзой" },
    { code: "3-09", name: "Грудинка Хуншао" },
    { code: "3-10", name: "Тушёная говядина с картошкой" },
    { code: "3-11", name: "Жареный острый перец с говядиной" },
    { code: "3-12", name: "Баранина с тмином" },
    { code: "3-13", name: "Баранина с луком" },
    { code: "3-14", name: "Куриное филе по Гунбао" },
    { code: "3-15", name: "Жареная крахмальная лапша" },
    { code: "3-16", name: "Мапо тофу" },
    { code: "3-17", name: "Тофу" },
    { code: "3-18", name: "Гантофу" },
    { code: "3-19", name: "Острая курица по-сычуански" },
    { code: "3-20", name: "Жареные баклажаны с картофелем и перцем" },
    { code: "3-21", name: "Жареные баклажаны с перцем" },
    { code: "3-22", name: "Баклажаны со свининой и перцем" },
    { code: "3-23", name: "Жареный карбонат в крахмале" },
    { code: "3-24", name: "Баклажаны в соусе" },
    { code: "3-25", name: "Куриные крылышки" },
    { code: "3-26", name: "Брокколи с чесноком" },
  ]},
  { id: "4", category: "Блюда на сковороде", items: [
    { code: "4-01", name: "Картофель с овощами на сковороде" },
    { code: "4-02", name: "Свинина на сковороде" },
    { code: "4-03", name: "Говядина на сковороде" },
    { code: "4-04", name: "Баранина на сковороде" },
    { code: "4-05", name: "Говяжий язык на сковороде" },
    { code: "4-06", name: "Курица на сковороде" },
  ]},
  { id: "5", category: "Морепродукты", items: [
    { code: "5-01", name: "Острые креветки" },
    { code: "5-02", name: "Мойва жареная" },
  ]},
  { id: "6", category: "Супы", items: [
    { code: "6-01", name: "Суп с говядиной и помидорами" },
    { code: "6-02", name: "Суп с тофу" },
    { code: "6-03", name: "Суп со свиной грудинкой и капустой" },
    { code: "6-04", name: "Том-Ям" },
  ]},
  { id: "7", category: "Лапша", items: [
    { code: "7-01", name: "Лапша с говядиной" },
    { code: "7-02", name: "Лапша острая" },
    { code: "7-03", name: "Лапша жареная со свининой" },
    { code: "7-04", name: "Лапша с морепродуктами" },
  ]},
  { id: "8", category: "Горячие закуски", items: [
    { code: "8-01", name: "Жареные креветки с огурцом" },
    { code: "8-02", name: "Яблоко в карамели" },
    { code: "8-03", name: "Банан в карамели" },
    { code: "8-04", name: "Курица в кляре" },
    { code: "8-05", name: "Картошка фри" },
    { code: "8-06", name: "Кольца кальмара" },
    { code: "8-07", name: "Крылышки" },
    { code: "8-08", name: "Фаршированные баклажаны" },
  ]},
];

export default function Admin() {
  const [auth, setAuth] = useState(sessionStorage.getItem("admin_ok") === "1");
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);
  const [images, setImages] = useState<Record<string, string>>({});
  const [uploading, setUploading] = useState<Record<string, boolean>>({});
  const [success, setSuccess] = useState<Record<string, boolean>>({});
  const [search, setSearch] = useState("");
  const [bulkUploading, setBulkUploading] = useState(false);
  const [bulkProgress, setBulkProgress] = useState({ done: 0, total: 0 });
  const fileInputs = useRef<Record<string, HTMLInputElement | null>>({});
  const bulkInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!auth) return;
    fetch(GET_URL)
      .then(r => r.json())
      .then(data => setImages(data.images || {}));
  }, [auth]);

  const handleLogin = () => {
    if (pwInput === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_ok", "1");
      setAuth(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  if (!auth) {
    return (
      <div style={{ minHeight: "100vh", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "white", padding: "40px 36px", width: "320px" }}>
          <div style={{ fontWeight: 800, fontSize: "20px", letterSpacing: "0.05em", marginBottom: "8px" }}>СЕЗОН</div>
          <div style={{ color: "#888", fontSize: "13px", marginBottom: "28px" }}>Введите пароль для входа в админ-панель</div>
          <input
            type="password"
            value={pwInput}
            onChange={e => { setPwInput(e.target.value); setPwError(false); }}
            onKeyDown={e => e.key === "Enter" && handleLogin()}
            placeholder="Пароль"
            autoFocus
            style={{ width: "100%", padding: "12px", border: `2px solid ${pwError ? "#c8372d" : "#ddd"}`, fontSize: "15px", outline: "none", boxSizing: "border-box", marginBottom: "8px" }}
          />
          {pwError && <div style={{ color: "#c8372d", fontSize: "13px", marginBottom: "8px" }}>Неверный пароль</div>}
          <button
            onClick={handleLogin}
            style={{ width: "100%", padding: "12px", background: "#111", color: "white", border: "none", fontWeight: 700, fontSize: "14px", cursor: "pointer", marginTop: "4px" }}
          >
            Войти
          </button>
        </div>
      </div>
    );
  }

  const handleFileChange = async (code: string, file: File) => {
    setUploading(prev => ({ ...prev, [code]: true }));
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(",")[1];
      const res = await fetch(UPLOAD_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, image: base64, content_type: file.type }),
      });
      const data = await res.json();
      if (data.url) {
        setImages(prev => ({ ...prev, [code]: data.url }));
        setSuccess(prev => ({ ...prev, [code]: true }));
        setTimeout(() => setSuccess(prev => ({ ...prev, [code]: false })), 2000);
      }
      setUploading(prev => ({ ...prev, [code]: false }));
    };
    reader.readAsDataURL(file);
  };

  const handleBulkUpload = async (files: FileList) => {
    const allItems = menuData.flatMap(cat => cat.items.map(item => ({ ...item })));
    const matched: { code: string; file: File }[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const namePart = file.name.replace(/\.[^.]+$/, "").toLowerCase();
      const item = allItems.find(it =>
        it.code.toLowerCase() === namePart ||
        it.name.toLowerCase() === namePart
      );
      if (item) matched.push({ code: item.code, file });
    }

    if (matched.length === 0) {
      alert("Не найдено совпадений. Назовите файлы по коду блюда, например: 1-01.jpg, 2-03.jpg");
      return;
    }

    setBulkUploading(true);
    setBulkProgress({ done: 0, total: matched.length });

    for (let i = 0; i < matched.length; i++) {
      const { code, file } = matched[i];
      await new Promise<void>(resolve => {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64 = (e.target?.result as string).split(",")[1];
          const res = await fetch(UPLOAD_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, image: base64, content_type: file.type }),
          });
          const data = await res.json();
          if (data.url) setImages(prev => ({ ...prev, [code]: data.url }));
          setBulkProgress({ done: i + 1, total: matched.length });
          resolve();
        };
        reader.readAsDataURL(file);
      });
    }

    setBulkUploading(false);
  };

  const allItems = menuData.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.category }))
  );
  const filtered = search
    ? allItems.filter(i => i.name.toLowerCase().includes(search.toLowerCase()) || i.code.includes(search))
    : allItems;

  const uploaded = Object.keys(images).length;
  const total = allItems.length;

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "#111", color: "white", padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "0.05em" }}>СЕЗОН — Загрузка фото</div>
          <div style={{ color: "#aaa", fontSize: "13px", marginTop: "4px" }}>Загружено {uploaded} из {total} блюд</div>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a href="/" style={{ color: "#aaa", fontSize: "13px", textDecoration: "none" }}>← На сайт</a>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={bulkInputRef}
            style={{ display: "none" }}
            onChange={e => e.target.files && handleBulkUpload(e.target.files)}
          />
          <button
            onClick={() => bulkInputRef.current?.click()}
            disabled={bulkUploading}
            style={{ background: bulkUploading ? "#333" : "#c8372d", border: "none", color: "white", fontSize: "13px", fontWeight: 700, padding: "8px 18px", cursor: bulkUploading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "6px" }}
          >
            <Icon name="UploadCloud" size={15} />
            {bulkUploading ? `Загружаю ${bulkProgress.done}/${bulkProgress.total}...` : "Загрузить все сразу"}
          </button>
          <button
            onClick={() => { sessionStorage.removeItem("admin_ok"); setAuth(false); }}
            style={{ background: "transparent", border: "1px solid #555", color: "#aaa", fontSize: "13px", padding: "6px 14px", cursor: "pointer" }}
          >
            Выйти
          </button>
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "32px 16px" }}>
        <div style={{ marginBottom: "24px", position: "relative" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Поиск по названию или коду..."
            style={{ width: "100%", padding: "12px 16px 12px 44px", border: "2px solid #ddd", fontSize: "15px", outline: "none", boxSizing: "border-box", background: "white" }}
          />
          <Icon name="Search" size={18} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {filtered.map(item => (
            <div key={item.code} style={{ background: "white", border: "2px solid #e5e5e5", padding: "16px", position: "relative" }}>
              {images[item.code] ? (
                <img
                  src={images[item.code]}
                  alt={item.name}
                  style={{ width: "100%", height: "160px", objectFit: "cover", marginBottom: "12px", display: "block" }}
                />
              ) : (
                <div style={{ width: "100%", height: "160px", background: "#f0f0f0", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#bbb" }}>
                  <Icon name="ImageOff" size={32} />
                </div>
              )}
              <div style={{ fontSize: "11px", color: "#999", fontWeight: 700, marginBottom: "4px" }}>{item.code} · {item.category}</div>
              <div style={{ fontWeight: 700, fontSize: "15px", marginBottom: "12px", lineHeight: 1.3 }}>{item.name}</div>

              <input
                type="file"
                accept="image/*"
                ref={el => { fileInputs.current[item.code] = el; }}
                style={{ display: "none" }}
                onChange={e => e.target.files?.[0] && handleFileChange(item.code, e.target.files[0])}
              />
              <button
                onClick={() => fileInputs.current[item.code]?.click()}
                disabled={uploading[item.code]}
                style={{
                  width: "100%",
                  padding: "10px",
                  background: success[item.code] ? "#22c55e" : uploading[item.code] ? "#e5e5e5" : "var(--primary, #c8372d)",
                  color: uploading[item.code] ? "#999" : "white",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "13px",
                  cursor: uploading[item.code] ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                }}
              >
                {uploading[item.code] ? (
                  <><Icon name="Loader" size={14} /> Загружаю...</>
                ) : success[item.code] ? (
                  <><Icon name="Check" size={14} /> Готово!</>
                ) : images[item.code] ? (
                  <><Icon name="RefreshCw" size={14} /> Заменить фото</>
                ) : (
                  <><Icon name="Upload" size={14} /> Загрузить фото</>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}