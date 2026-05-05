import { useState } from "react";

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

  const filtered = activeCategory === "all"
    ? menuData
    : menuData.filter((c) => c.id === activeCategory);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">СЕЗОН</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Доставка</a>
          <a href="#">Контакты</a>
        </nav>
        <a href="tel:+79500736888" className="btn-cta" style={{ textDecoration: "none" }}>+7 950 073-68-88</a>
      </header>

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
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <tbody>
                    {cat.items.map((item, idx) => (
                      <tr
                        key={item.code}
                        style={{
                          borderBottom: "1px solid #e5e5e5",
                          background: idx % 2 === 0 ? "white" : "#fafafa",
                        }}
                      >
                        <td style={{ padding: "12px 8px", color: "#999", fontSize: "12px", fontWeight: 700, width: "60px" }}>
                          {item.code}
                        </td>
                        <td style={{ padding: "12px 8px", fontWeight: 600, fontSize: "15px" }}>
                          {item.name}
                        </td>
                        <td style={{ padding: "12px 8px", color: "#888", fontSize: "13px", textAlign: "right", whiteSpace: "nowrap" }}>
                          {item.weight}
                        </td>
                        <td style={{ padding: "12px 8px 12px 20px", textAlign: "right", whiteSpace: "nowrap" }}>
                          <span className="price" style={{ fontSize: "18px" }}>{item.price} ₽</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О нас
            </button>
          </div>
          <div className="vibe-img"></div>
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
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Меню</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Доставка</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Контакты</a></li>
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
