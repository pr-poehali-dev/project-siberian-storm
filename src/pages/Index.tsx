import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const GET_IMAGES_URL = "https://functions.poehali.dev/4b896819-afe5-4c96-a50d-801300e96afe";

type CartItem = {
  code: string;
  name: string;
  weight: string;
  price: number;
  qty: number;
};

const menuData = [
  {
    id: "1",
    category: "Салаты",
    items: [
      { code: "1-01", name: "Салат с папоротником", weight: "350г", price: 550 },
      { code: "1-02", name: "Салат со свиными ушами и огурцом", weight: "350г", price: 580 },
      { code: "1-03", name: "Домашний", weight: "350г", price: 550 },
      { code: "1-04", name: "Салат с языком", weight: "350г", price: 550 },
      { code: "1-05", name: "Салат со спаржей", weight: "400г", price: 680 },
      { code: "1-06", name: "Шпинат с арахисом", weight: "350г", price: 580 },
      { code: "1-07", name: "Гантофу с овощами", weight: "350г", price: 550 },
      { code: "1-08", name: "Салат с говядиной", weight: "350г", price: 580 },
      { code: "1-09", name: "Салат с курицей", weight: "350г", price: 550 },
      { code: "1-10", name: "Салат со свиной рулькой", weight: "350г", price: 680 },
    ],
  },
  {
    id: "2",
    category: "Гарниры",
    items: [
      { code: "2-01", name: "Паровой рис", weight: "200г", price: 150 },
      { code: "2-02", name: "Рис с соевым соусом", weight: "300г", price: 150 },
      { code: "2-03", name: "Рис с овощами", weight: "300г", price: 350 },
      { code: "2-04", name: "Рис с яйцом", weight: "300г", price: 350 },
      { code: "2-05", name: "Пельмени со свининой", weight: "10 шт", price: 450 },
      { code: "2-06", name: "Пельмени с говядиной", weight: "10 шт", price: 485 },
      { code: "2-07", name: "Пельмени с курицей", weight: "10 шт", price: 485 },
    ],
  },
  {
    id: "3",
    category: "Горячие блюда",
    items: [
      { code: "3-01", name: "Гуобоажоу по-китайски", weight: "400г", price: 680 },
      { code: "3-02", name: "Гуобоажоу по-русски", weight: "400г", price: 680 },
      { code: "3-03", name: "Свинина верёвочкой", weight: "400г", price: 680 },
      { code: "3-04", name: "Жареная свинина в кляре", weight: "400г", price: 680 },
      { code: "3-05", name: "Жареная свинина с ананасами", weight: "400г", price: 680 },
      { code: "3-06", name: "Жареные свиные рёбра", weight: "400г", price: 680 },
      { code: "3-07", name: "Рёбра в кисло-сладком соусе", weight: "400г", price: 680 },
      { code: "3-08", name: "Жареная свинина с кинзой", weight: "400г", price: 680 },
      { code: "3-09", name: "Грудинка Хуншао", weight: "400г", price: 680 },
      { code: "3-10", name: "Тушёная говядина с картошкой", weight: "400г", price: 780 },
      { code: "3-11", name: "Жареный острый перец с говядиной", weight: "400г", price: 780 },
      { code: "3-12", name: "Баранина с тмином", weight: "400г", price: 780 },
      { code: "3-13", name: "Баранина с луком", weight: "400г", price: 780 },
      { code: "3-14", name: "Куриное филе по Гунбао", weight: "400г", price: 680 },
      { code: "3-15", name: "Жареная крахмальная лапша", weight: "400г", price: 680 },
      { code: "3-16", name: "Мапо тофу", weight: "400г", price: 580 },
      { code: "3-17", name: "Тофу", weight: "400г", price: 580 },
      { code: "3-18", name: "Гантофу", weight: "400г", price: 680 },
      { code: "3-19", name: "Острая курица по-сычуански", weight: "400г", price: 680 },
      { code: "3-20", name: "Жареные баклажаны с картофелем и перцем", weight: "400г", price: 650 },
      { code: "3-21", name: "Жареные баклажаны с перцем", weight: "400г", price: 650 },
      { code: "3-22", name: "Баклажаны со свининой и перцем", weight: "400г", price: 680 },
      { code: "3-23", name: "Жареный карбонат в крахмале", weight: "400г", price: 680 },
      { code: "3-24", name: "Баклажаны в соусе", weight: "400г", price: 650 },
      { code: "3-25", name: "Куриные крылышки", weight: "400г", price: 680 },
      { code: "3-26", name: "Брокколи с чесноком", weight: "350г", price: 580 },
    ],
  },
  {
    id: "4",
    category: "Блюда на сковороде",
    items: [
      { code: "4-01", name: "Картофель с овощами на сковороде", weight: "400г", price: 650 },
      { code: "4-02", name: "Свинина на сковороде", weight: "400г", price: 680 },
      { code: "4-03", name: "Говядина на сковороде", weight: "400г", price: 780 },
      { code: "4-04", name: "Баранина на сковороде", weight: "400г", price: 780 },
      { code: "4-05", name: "Говяжий язык на сковороде", weight: "400г", price: 780 },
      { code: "4-06", name: "Курица на сковороде", weight: "400г", price: 680 },
    ],
  },
  {
    id: "5",
    category: "Морепродукты",
    items: [
      { code: "5-01", name: "Острые креветки", weight: "350г", price: 780 },
      { code: "5-02", name: "Мойва жареная", weight: "350г", price: 750 },
    ],
  },
  {
    id: "6",
    category: "Супы",
    items: [
      { code: "6-01", name: "Суп с говядиной и помидорами", weight: "500г", price: 580 },
      { code: "6-02", name: "Суп с тофу", weight: "500г", price: 580 },
      { code: "6-03", name: "Суп со свиной грудинкой и капустой", weight: "500г", price: 580 },
      { code: "6-04", name: "Том-Ям", weight: "380г", price: 600 },
    ],
  },
  {
    id: "7",
    category: "Лапша",
    items: [
      { code: "7-01", name: "Лапша с говядиной", weight: "450г", price: 450 },
      { code: "7-02", name: "Лапша острая", weight: "500г", price: 450 },
      { code: "7-03", name: "Лапша жареная со свининой", weight: "450г", price: 450 },
      { code: "7-04", name: "Лапша с морепродуктами", weight: "450г", price: 450 },
    ],
  },
  {
    id: "8",
    category: "Горячие закуски",
    items: [
      { code: "8-01", name: "Жареные креветки с огурцом", weight: "400г", price: 750 },
      { code: "8-02", name: "Яблоко в карамели", weight: "350г", price: 680 },
      { code: "8-03", name: "Банан в карамели", weight: "350г", price: 680 },
      { code: "8-04", name: "Курица в кляре", weight: "350г", price: 680 },
      { code: "8-05", name: "Картошка фри", weight: "150г", price: 300 },
      { code: "8-06", name: "Кольца кальмара", weight: "350г", price: 485 },
      { code: "8-07", name: "Крылышки", weight: "400г", price: 680 },
      { code: "8-08", name: "Фаршированные баклажаны", weight: "400г", price: 680 },
    ],
  },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dishImages, setDishImages] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(GET_IMAGES_URL)
      .then(r => r.json())
      .then(data => setDishImages(data.images || {}))
      .catch(() => {});
  }, []);

  const filtered = activeCategory === "all"
    ? menuData
    : menuData.filter((c) => c.id === activeCategory);

  const addToCart = (item: { code: string; name: string; weight: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.code === item.code);
      if (existing) return prev.map((c) => c.code === item.code ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (code: string) => {
    setCart((prev) => prev.filter((c) => c.code !== code));
  };

  const changeQty = (code: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) => c.code === code ? { ...c, qty: Math.max(1, c.qty + delta) } : c)
    );
  };

  const totalPrice = cart.reduce((sum, c) => sum + c.price * c.qty, 0);
  const totalCount = cart.reduce((sum, c) => sum + c.qty, 0);

  const sendToTelegram = () => {
    const lines = cart.map((c) => `• ${c.code} ${c.name} (${c.weight}) × ${c.qty} = ${c.price * c.qty} ₽`);
    const addressLine = address.trim() ? `\nАдрес доставки: ${address.trim()}` : "";
    const nameLine = name.trim() ? `\nИмя: ${name.trim()}` : "";
    const phoneLine = phone.trim() ? `\nТелефон: ${phone.trim()}` : "";
    const text = `Здравствуйте! Хочу заказать:\n\n${lines.join("\n")}\n\nИтого: ${totalPrice} ₽${addressLine}${nameLine}${phoneLine}`;
    window.open(`https://t.me/+79500736888?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">СЕЗОН</div>
        <nav>
          <a href="#menu">Меню</a>
          <a href="#about">О нас</a>
          <a href="#delivery">Доставка</a>
          <a href="#about">Контакты</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="tel:+79500736888" className="btn-cta" style={{ textDecoration: "none" }}>+7 950 073-68-88</a>
          <button
            onClick={() => setCartOpen(true)}
            style={{
              position: "relative",
              background: "var(--dark)",
              color: "white",
              border: "none",
              padding: "10px 14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontWeight: 800,
              fontSize: "13px",
            }}
          >
            <Icon name="ShoppingCart" size={18} />
            {totalCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                background: "var(--primary)",
                color: "white",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 900,
              }}>{totalCount}</span>
            )}
          </button>
        </div>
      </header>

      {/* Cart Drawer */}
      {cartOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", justifyContent: "flex-end" }}>
          <div onClick={() => setCartOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: "420px",
            background: "white",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderLeft: "var(--border)",
            zIndex: 1,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "var(--border)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, textTransform: "uppercase" }}>Корзина</h3>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <Icon name="X" size={22} />
              </button>
            </div>

            <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
              {cart.length === 0 ? (
                <p style={{ color: "#999", textAlign: "center", marginTop: "40px" }}>Корзина пуста</p>
              ) : (
                cart.map((item) => (
                  <div key={item.code} style={{ display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid #eee", paddingBottom: "14px", marginBottom: "14px" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: "14px" }}>{item.name}</div>
                      <div style={{ color: "#888", fontSize: "12px" }}>{item.weight} · {item.price} ₽/шт</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <button onClick={() => changeQty(item.code, -1)} style={{ width: "26px", height: "26px", border: "var(--border)", background: "white", cursor: "pointer", fontWeight: 900, fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                      <span style={{ fontWeight: 700, minWidth: "20px", textAlign: "center" }}>{item.qty}</span>
                      <button onClick={() => changeQty(item.code, 1)} style={{ width: "26px", height: "26px", border: "var(--border)", background: "white", cursor: "pointer", fontWeight: 900, fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                    </div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "16px", color: "var(--secondary)", minWidth: "70px", textAlign: "right" }}>
                      {item.price * item.qty} ₽
                    </div>
                    <button onClick={() => removeFromCart(item.code)} style={{ background: "none", border: "none", cursor: "pointer", color: "#bbb" }}>
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ padding: "20px 24px", borderTop: "var(--border)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                  <div>
                    <label style={{ display: "block", fontWeight: 800, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", letterSpacing: "0.05em" }}>Имя</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      style={{ width: "100%", padding: "10px 12px", border: "var(--border)", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontWeight: 800, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", letterSpacing: "0.05em" }}>Телефон</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 900 000-00-00"
                      style={{ width: "100%", padding: "10px 12px", border: "var(--border)", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontWeight: 800, fontSize: "12px", textTransform: "uppercase", marginBottom: "6px", letterSpacing: "0.05em" }}>
                    Адрес доставки
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Улица, дом, квартира"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "var(--border)",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                  <span style={{ fontWeight: 800, fontSize: "16px", textTransform: "uppercase" }}>Итого</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "22px", color: "var(--secondary)" }}>{totalPrice} ₽</span>
                </div>
                <button
                  onClick={sendToTelegram}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "var(--primary)",
                    color: "white",
                    border: "none",
                    fontWeight: 900,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  <Icon name="Send" size={16} />
                  Отправить заказ в Telegram
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              НАСТОЯЩИЙ
              <br />
              КИТАЙ <span>на дом</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Рецепты из провинции Сычуань и Кантон. Горячее прямо из вока — доставляем за 1,5 часа по городу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="tel:+79500736888" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                Заказать доставку
              </a>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: `url("https://cdn.poehali.dev/projects/3d047a5a-26b3-4456-8c6f-8b9f09972328/files/2460b918-737a-4143-91e4-1210cb780052.jpg") center center / cover` }}>
            <div className="sticker">
              ДОСТАВКА
              <br />
              45 МИН
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #КИТАЙСКАЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ВОК ВАУ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * УТИНАЯ ГРУДКА В АПЕЛЬСИНОВОМ СОУСЕ * ВОК С ЛАПШОЙ * ПЕЛЬМЕНИ ГЁДЗА * ДОСТАВКА ЗА 45 МИНУТ * ОСТРЕЕ НЕ БЫВАЕТ *
            УТИНАЯ ГРУДКА В АПЕЛЬСИНОВОМ СОУСЕ * ВОК С ЛАПШОЙ * ПЕЛЬМЕНИ ГЁДЗА * ДОСТАВКА ЗА 45 МИНУТ * ОСТРЕЕ НЕ БЫВАЕТ
          </div>
        </div>

        <section className="section-padding" id="menu">
          <div className="section-header">
            <h2 className="section-title">МЕНЮ</h2>
          </div>

          {/* Category tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
            <button
              onClick={() => setActiveCategory("all")}
              style={{
                padding: "8px 18px",
                fontWeight: 800,
                fontSize: "13px",
                textTransform: "uppercase",
                border: "var(--border)",
                background: activeCategory === "all" ? "var(--dark)" : "white",
                color: activeCategory === "all" ? "white" : "var(--dark)",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              Все
            </button>
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: "8px 18px",
                  fontWeight: 800,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  border: "var(--border)",
                  background: activeCategory === cat.id ? "var(--dark)" : "white",
                  color: activeCategory === cat.id ? "white" : "var(--dark)",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Menu categories */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {filtered.map((cat) => (
              <div key={cat.id}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  borderBottom: "var(--border)",
                  paddingBottom: "12px",
                  marginBottom: "0",
                  letterSpacing: "0.05em",
                }}>
                  {cat.category}
                </h3>
                <div>
                  {cat.items.map((item, idx) => (
                    <div
                      key={item.code}
                      style={{
                        borderBottom: "1px solid #e5e5e5",
                        background: idx % 2 === 0 ? "white" : "#fafafa",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "8px 0",
                      }}
                    >
                      <div style={{ flexShrink: 0 }}>
                        {dishImages[item.code] ? (
                          <img src={dishImages[item.code]} alt={item.name} style={{ width: "64px", height: "64px", objectFit: "cover", display: "block" }} />
                        ) : (
                          <div style={{ width: "64px", height: "64px", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Icon name="UtensilsCrossed" size={18} />
                          </div>
                        )}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ color: "#999", fontSize: "11px", fontWeight: 700, marginBottom: "2px" }}>{item.code}</div>
                        <div style={{ fontWeight: 600, fontSize: "15px", lineHeight: 1.3 }}>{item.name}</div>
                        <div style={{ color: "#888", fontSize: "12px", marginTop: "2px" }}>{item.weight}</div>
                      </div>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                        <span className="price" style={{ fontSize: "17px", fontWeight: 700 }}>{item.price} ₽</span>
                        <button
                          onClick={() => { addToCart(item); setCartOpen(true); }}
                          style={{
                            padding: "6px 12px",
                            background: "var(--primary)",
                            color: "white",
                            fontWeight: 800,
                            fontSize: "12px",
                            textTransform: "uppercase",
                            border: "2px solid var(--primary)",
                            cursor: "pointer",
                            transition: "0.2s",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = "white";
                            (e.currentTarget as HTMLButtonElement).style.color = "var(--primary)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLButtonElement).style.background = "var(--primary)";
                            (e.currentTarget as HTMLButtonElement).style.color = "white";
                          }}
                        >
                          <Icon name="Plus" size={13} />
                          В корзину
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВОСТОК ПРИЕХАЛ.</h2>
            <p className="vibe-text">
              Мы готовим по-настоящему: живой огонь, вок, никаких полуфабрикатов. Каждое блюдо собрано из свежих ингредиентов прямо перед доставкой. Привезём горячим — или вернём деньги.
            </p>
            <a href="#about" className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white", textDecoration: "none", display: "inline-block" }}>
              О нас
            </a>
          </div>
          <div className="vibe-img"></div>
        </section>

        {/* О нас */}
        <section className="section-padding" id="about">
          <div className="section-header">
            <h2 className="section-title">О НАС</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px", marginTop: "8px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              {[
                { icon: "MapPin", title: "Адрес", text: "мкрн Университетский, 43" },
                { icon: "Phone", title: "Телефон", text: "+7 950 073-68-88", href: "tel:+79500736888" },
                { icon: "Users", title: "Залы", text: "VIP-зал, общий зал, зал для банкетов" },
                { icon: "UtensilsCrossed", title: "Кухня", text: "Настоящая китайская кухня — живой огонь, вок, свежие ингредиенты" },
              ].map((card) => (
                <div key={card.title} style={{ border: "var(--border)", padding: "28px 24px", background: "white" }}>
                  <div style={{ marginBottom: "12px" }}>
                    <Icon name={card.icon} size={28} />
                  </div>
                  <h4 style={{ fontWeight: 800, textTransform: "uppercase", fontSize: "13px", letterSpacing: "0.05em", marginBottom: "8px" }}>{card.title}</h4>
                  {card.href ? (
                    <a href={card.href} style={{ color: "var(--dark)", textDecoration: "none", fontSize: "15px", fontWeight: 600 }}>{card.text}</a>
                  ) : (
                    <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.5 }}>{card.text}</p>
                  )}
                </div>
              ))}
            </div>
            <div style={{ background: "var(--dark)", color: "white", padding: "36px 40px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "13px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "#aaa" }}>Забронировать столик</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, lineHeight: 1.3 }}>
                Звоните и бронируйте — VIP-зал, общий зал или банкетный
              </p>
              <a href="tel:+79500736888" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: "8px", width: "fit-content" }}>
                +7 950 073-68-88
              </a>
            </div>
          </div>
        </section>

        {/* Доставка */}
        <section className="section-padding" id="delivery" style={{ background: "#fafafa" }}>
          <div className="section-header">
            <h2 className="section-title">ДОСТАВКА</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "8px" }}>
            {[
              { district: "Свердловский район", min: "от 2 000 ₽", icon: "MapPin" },
              { district: "Октябрьский район", min: "от 2 500 ₽", icon: "MapPin" },
              { district: "Ленинский и другие районы", min: "от 3 000 ₽", icon: "MapPin" },
            ].map((zone, i) => (
              <div key={i} style={{ border: "var(--border)", background: "white", padding: "28px 24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "var(--primary)" }} />
                <p style={{ fontWeight: 800, fontSize: "16px", marginBottom: "10px" }}>{zone.district}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", fontWeight: 700, color: "var(--secondary)" }}>{zone.min}</p>
                <p style={{ color: "#888", fontSize: "13px", marginTop: "6px" }}>минимальная сумма заказа</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="tel:+79500736888" className="btn-cta" style={{ background: "var(--primary)", color: "white", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Позвонить и заказать
            </a>
            <a href={`https://t.me/+79500736888`} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ background: "white", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Написать в Telegram
            </a>
          </div>
          <div style={{ marginTop: "20px", background: "white", border: "var(--border)", borderLeft: "4px solid var(--primary)", padding: "16px 20px", display: "inline-flex", alignItems: "center", gap: "12px" }}>
            <Icon name="Phone" size={20} />
            <p style={{ fontSize: "15px", color: "#333", margin: 0 }}>
              Если Telegram у вас нет — звоните <a href="tel:+79500736888" style={{ fontWeight: 800, color: "var(--primary)", textDecoration: "none" }}>8 950 073-68-88</a> и заказывайте
            </p>
          </div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @СЕЗОН
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=400&q=80"
                alt="Китайская еда 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=400&q=80"
                alt="Китайская еда 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=400&q=80"
                alt="Китайская еда 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=400&q=80"
                alt="Китайская еда 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">СЕЗОН</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Кафе китайской кухни с доставкой по городу. Настоящий вкус Востока — прямо к вашей двери.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#menu" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#delivery" style={{ color: "inherit", textDecoration: "none" }}>Доставка</a></li>
            <li><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li><a href="tel:+79500736888" style={{ color: "inherit", textDecoration: "none" }}>+7 950 073-68-88</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}