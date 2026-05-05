export default function Index() {
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
              Рецепты из провинции Сычуань и Кантон. Горячее прямо из вока — доставляем за 45 минут по городу.
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

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТ НЕДЕЛИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/3d047a5a-26b3-4456-8c6f-8b9f09972328/files/121fc8fe-26f4-49de-85e7-482021c5028d.jpg"
                alt="Вонтон суп"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Вонтон суп</h3>
                  <span className="price">490 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Пельмени из свинины и креветок в насыщенном бульоне с имбирём и зелёным луком.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Острое
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3d047a5a-26b3-4456-8c6f-8b9f09972328/files/b477ad86-3ca4-4323-bacf-cadf7b6cf2d4.jpg"
                alt="Кун-пао курица"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Кун-пао курица</h3>
                  <span className="price">650 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Классика провинции Сычуань: курица, арахис, перец чили и соус из жареного чеснока.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/3d047a5a-26b3-4456-8c6f-8b9f09972328/files/59029e24-c886-416a-9037-4c32fb24c7a6.jpg"
                alt="Спринг-роллы"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Спринг-роллы</h3>
                  <span className="price">380 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Хрустящие роллы с капустой, морковью и грибами шиитаке. Подаём с кисло-сладким соусом.
                </p>
              </div>
            </div>
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
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Доставка
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Доставка</h4>
          <ul>
            <li>Ежедневно: 10:00 – 23:00</li>
            <li>Минимальный заказ: 500 ₽</li>
            <li>Доставка от 45 мин</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>Иркутск, мкр. Университетский, 43</li>
            <li>Ежедневно: 10:00 – 23:00</li>
            <li><a href="tel:+79500736888" style={{ color: "inherit", textDecoration: "none" }}>+7 950 073-68-88</a></li>
            <li><a href="mailto:sezonk@list.ru" style={{ color: "inherit", textDecoration: "none" }}>sezonk@list.ru</a></li>

          </ul>
        </div>
      </footer>
    </>
  );
}