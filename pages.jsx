/* =========================================================
   PAGES
   ========================================================= */
const { useState: uS, useEffect: uE } = React;

/* ---------------- HOME ---------------- */
const THEME_REP = { ocean: "art18", butterfly: "art12", folk: "art42", ancient: "art57", rebirth: "art01" };
const MARQUEE_A = ["art18", "art12", "art42", "art33", "art20", "art04", "art29", "art13"];
const MARQUEE_B = ["art30", "art22", "art47", "art39", "art17", "art09", "art40", "art57"];

/* descriptive alt text for an artwork (SEO) */
function altWork(w, lang) {
  if (!w) return lang === "zh" ? "莊明中油畫作品" : "Painting by Chuang Ming-Chung";
  const other = lang === "zh" ? w.en : w.zh;
  return lang === "zh"
    ? `${w.zh}（${w.en}），${w.yr}　莊明中油畫作品`
    : `${w.en} (${w.zh}), ${w.yr} — painting by Chuang Ming-Chung`;
}

function Home({ lang, go, openLightbox }) {
  useReveal();
  useParallax();
  const S = window.SITE;
  const works = S.works.items;
  const byImg = (id) => works.find((w) => w.img === id);
  const openWork = (id) => { const w = byImg(id); if (w) openLightbox(works, works.indexOf(w)); };
  const featured = ["art18", "art42", "art33", "art12", "art20", "art04"];
  const lines = S.hero.manifesto[lang];
  const themes = S.works.cats.filter((c) => c.id !== "all");
  const counts = {};
  works.forEach((w) => { counts[w.cat] = (counts[w.cat] || 0) + 1; });
  const stats = [
    { to: 25, suffix: "+", zh: "次個展", en: "Solo Shows" },
    { to: 100, suffix: "+", zh: "次聯展", en: "Group Shows" },
    { to: 40, suffix: "", zh: "年創作生涯", en: "Years of Practice" },
    { to: 10, suffix: "", zh: "冊創作專輯", en: "Published Albums" },
  ];

  return (
    <div className="page">
      {/* hero */}
      <section className="hero wrap">
        <div className="hero-grid">
          <div>
            <div className="en-name">{S.brand.en}</div>
            <h1>{S.brand.zh}</h1>
            <div className="lead" style={{ marginBottom: 30, color: "var(--gold)", letterSpacing: ".06em" }}>
              {t(S.brand.role, lang)}
            </div>
            <div className="manifesto" dangerouslySetInnerHTML={{
              __html: lines.map((l) => l.replace("<a>", '<span class="accent">').replace("</a>", "</span>")).join("<br/>")
            }} />
            <div className="btn-row">
              <button className="btn primary" onClick={() => go("works")}>
                {lang === "zh" ? "瀏覽作品" : "Explore Works"} <span>→</span>
              </button>
              <button className="btn" onClick={() => go("exhibitions")}>
                {lang === "zh" ? "最新展覽" : "Current Show"}
              </button>
            </div>
          </div>
          <div className="hero-portrait">
            <div className="glow"></div>
            <div className="frame" data-par="2"><img src={IMG("p19")} alt={lang === "zh" ? "莊明中肖像——台灣當代油畫藝術家" : "Portrait of Chuang Ming-Chung, contemporary Taiwanese painter"} /></div>
            <div className="hero-float" data-par="-2"><img src={IMG("art29")} alt={altWork(byImg("art29"), lang)} /></div>
          </div>
        </div>
        <div className="cue">
          <span>{lang === "zh" ? "向下探索" : "Scroll"}</span>
          <span className="line"></span>
        </div>
      </section>

      {/* flowing marquee */}
      <section className="full" style={{ padding: "10px 0 0" }}>
        <div className="marquee">
          <div className="marquee-track a">
            {MARQUEE_A.concat(MARQUEE_A).map((id, i) => (
              <div className="mq" key={"a" + i} onClick={() => openWork(id)}><img src={IMG(id)} alt={altWork(byImg(id), lang)} loading="lazy" /></div>
            ))}
          </div>
          <div className="marquee-track b">
            {MARQUEE_B.concat(MARQUEE_B).map((id, i) => (
              <div className="mq" key={"b" + i} onClick={() => openWork(id)}><img src={IMG(id)} alt={altWork(byImg(id), lang)} loading="lazy" /></div>
            ))}
          </div>
        </div>
      </section>

      {/* big statement */}
      <section className="wrap statement">
        <p className="big reveal r-rise">
          {lang === "zh"
            ? <>四十年來，在流動的<span className="accent">光與色</span>之間，<br />凝視海洋、蝶舞、古文明與萬象之美。</>
            : <>For forty years, between flowing <span className="accent">light and colour</span>,<br />gazing at the ocean, the butterflies, ancient worlds — the beauty of all things.</>}
        </p>
        <div className="sub reveal">{lang === "zh" ? "Chuang Ming-Chung · 莊明中" : "凝神靜氣，描繪萬象之美"}</div>
      </section>

      {/* featured works strip */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={lang === "zh" ? "精選作品 · Selected" : "Selected Works"}
          title={lang === "zh" ? "流動的光與色" : "Flowing Light & Colour"}
          lead={t(S.works.intro, lang)} lang={lang} />
        <div className="featured-strip">
          {featured.map((id, i) => {
            const wk = byImg(id);
            const span = [5, 4, 3, 4, 4, 4][i];
            const tall = i === 0;
            return (
              <div className="tile reveal r-scale" key={id}
                style={{ gridColumn: `span ${span}`, aspectRatio: tall ? "4/5" : "4/3", transitionDelay: (i % 3 * 90) + "ms" }}
                onClick={() => openWork(id)}>
                <img src={IMG(id)} alt={altWork(wk, lang)} />
                <div className="cap">
                  <div className="t">{t(wk, lang)}</div>
                  <div className="s">{wk.yr}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }} className="reveal">
          <button className="btn" onClick={() => go("works")}>
            {lang === "zh" ? "查看全部作品" : "View All Works"} <span>→</span>
          </button>
        </div>
      </section>

      {/* theme / series showcase */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <SectionHead
          eyebrow={lang === "zh" ? "創作主題 · Series" : "Series"}
          title={lang === "zh" ? "六個凝視的方向" : "Six Directions of the Gaze"} lang={lang} />
        <div className="themes">
          {themes.map((c) => (
            <div className="theme reveal r-scale" key={c.id}
              onClick={() => { window.__worksCat = c.id; go("works"); }}>
              <img src={IMG(THEME_REP[c.id])} alt={(lang === "zh" ? c.zh + " 系列代表作品" : c.en + " series — representative work") + "｜莊明中 Chuang Ming-Chung"} loading="lazy" />
              <div className="lab">
                <span className="zh">{t(c, lang)}</span>
                <span className="en">{lang === "zh" ? c.en : c.zh}</span>
                <span className="ct">{(counts[c.id] || 0) + (lang === "zh" ? " 件作品" : " works")} <span>→</span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* count-up stats */}
      <section className="full" style={{ background: "linear-gradient(180deg, transparent, oklch(0.10 0.025 250 / 0.5), transparent)" }}>
        <div className="wrap" style={{ padding: "clamp(40px,6vw,80px) clamp(22px,5vw,64px)" }}>
          <div className="homestats">
            {stats.map((s, i) => (
              <div className="s reveal" key={i} style={{ transitionDelay: (i * 80) + "ms" }}>
                <div className="n"><CountUp to={s.to} suffix={s.suffix} /></div>
                <div className="l">{t(s, lang)}</div>
                <div className="en">{lang === "zh" ? s.en : s.zh}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* big pull-quote over painting */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="pullquote reveal r-scale">
          <img className="bg" src={IMG("art20")} alt={altWork(byImg("art20"), lang)} data-par="3" loading="lazy" />
          <div className="veil"></div>
          <div className="inner">
            <q>{lang === "zh"
              ? "六十七件作品，宛如剛打開的珍珠寶盒——少見而珍貴。"
              : "Sixty-seven works, like a pearl casket just opened — rare and precious."}</q>
            <div className="by">{lang === "zh" ? "謝里法　藝術史家・畫家" : "Shaih Lifa — Art Historian & Painter"}</div>
          </div>
        </div>
      </section>

      {/* current-show banner */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="glass reveal" style={{ padding: "clamp(28px,4vw,48px)", display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 360px" }}>
            <div className="eyebrow">{lang === "zh" ? "現正展出 · Now Showing" : "Now Showing"}</div>
            <h2 className="title" style={{ fontSize: "clamp(22px,2.6vw,32px)" }}>{lang === "zh" ? S.exhibitions.featured.titleZh : S.exhibitions.featured.titleEn}</h2>
            <div style={{ color: "var(--text-dim)", marginTop: 10 }}>
              {t(S.exhibitions.featured.info[0].v, lang)} · {t(S.exhibitions.featured.info[1].v, lang)}
            </div>
          </div>
          <button className="btn" onClick={() => go("exhibitions")}>{lang === "zh" ? "展覽詳情" : "Details"} <span>→</span></button>
        </div>
      </section>

      {/* CTA */}
      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="glass cta-band reveal">
          <div className="glow2"></div>
          <div className="eyebrow" style={{ justifyContent: "center", position: "relative" }}>{lang === "zh" ? "合作洽談 · Collaborate" : "Collaborate"}</div>
          <h2 className="title" style={{ fontSize: "clamp(24px,3.2vw,40px)", maxWidth: "20ch", position: "relative" }}>
            {lang === "zh" ? "讓藝術成為連結" : "Let art become a connection"}
          </h2>
          <div className="btn-row" style={{ marginTop: 26, position: "relative" }}>
            <button className="btn primary" onClick={() => go("collab")}>{lang === "zh" ? "合作方式" : "Ways to Collaborate"} <span>→</span></button>
            <button className="btn" onClick={() => go("contact")}>{lang === "zh" ? "聯絡我們" : "Contact"}</button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About({ lang }) {
  useReveal();
  const A = window.SITE.about;
  return (
    <div className="page wrap section">
      <SectionHead eyebrow={lang === "zh" ? "關於藝術家 · About" : "About the Artist"}
        title={lang === "zh" ? "台灣當代藝術的中流砥柱" : "A Pillar of Taiwan's Contemporary Art"} lang={lang} />
      <div className="split">
        <div className="reveal">
          <div className="portrait-card"><img src={IMG("p39")} alt={lang === "zh" ? "莊明中藝術家肅像" : "Portrait of the artist Chuang Ming-Chung"} /></div>
          <div className="glass" style={{ padding: 26, marginTop: 18 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{t(A.education.title, lang)}</div>
            <div className="timeline">
              {A.education.items.map((e, i) => (
                <div className="tl-item" key={i}>
                  <div className="yr">{e.yr}</div>
                  <div className="d" style={{ color: "var(--foam)", fontSize: 16, marginTop: 2 }}>{t(e, lang)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="prose reveal">
          <p className="firstline">{t(A.intro, lang)}</p>
          {A.paras[lang].map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>

      {/* philosophy */}
      <div className="section" style={{ paddingBottom: 0 }}>
        <SectionHead eyebrow={lang === "zh" ? "教育理念 · Philosophy" : "Philosophy"}
          title={t(A.philosophyTitle, lang)} lead={t(A.philosophyLead, lang)} lang={lang} />
        <div className="pillars">
          {A.pillars.map((p, i) => (
            <div className="pillar glass reveal" key={i} style={{ transitionDelay: (i * 70) + "ms" }}>
              <div className="num">0{i + 1}</div>
              <h3>{t(p, lang)}</h3>
              <div className="en">{lang === "zh" ? p.en : p.zh}</div>
              <p>{t(p.d, lang)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* creative journeys */}
      <div className="section" style={{ paddingBottom: 0 }}>
        <SectionHead eyebrow={lang === "zh" ? "創作足跡 · Journeys" : "Journeys"}
          title={t(A.journeyTitle, lang)} lang={lang} />
        <div className="thumbrow reveal" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {A.journey.map((j, i) => (
            <div className="t" key={i} title={t(j, lang)}>
              <img src={IMG(j.img)} alt={t(j, lang)} loading="lazy" />
              <div className="thumbcap">{t(j, lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- WORKS ---------------- */
function Works({ lang, openLightbox }) {
  useReveal();
  const W = window.SITE.works;
  const [cat, setCat] = uS(window.__worksCat || "all");
  uE(() => { window.__worksCat = null; }, []);
  const items = W.items;
  const filtered = cat === "all" ? items : items.filter((i) => i.cat === cat);
  return (
    <div className="page wrap section">
      <SectionHead eyebrow={lang === "zh" ? "作品 · Works" : "Works"}
        title={lang === "zh" ? "畫作藝廊" : "The Gallery"} lead={t(W.intro, lang)} lang={lang} />
      <div className="filters reveal">
        {W.cats.map((c) => (
          <button key={c.id} className={"chip" + (cat === c.id ? " active" : "")} onClick={() => setCat(c.id)}>
            {t(c, lang)}<span className="en">{lang === "zh" ? c.en : c.zh}</span>
          </button>
        ))}
      </div>
      <div className="masonry">
        {filtered.map((wk) => (
          <div className="card reveal" key={wk.img} onClick={() => openLightbox(filtered, filtered.indexOf(wk))}>
            <img src={IMG(wk.img)} alt={altWork(wk, lang)} loading="lazy" />
            <div className="overlay">
              <div className="zoom">⤢</div>
              <div className="t">{t(wk, lang)}</div>
              <div className="s">{(lang === "zh" ? wk.en : wk.zh) + " · " + wk.yr}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- EXHIBITIONS ---------------- */
function Exhibitions({ lang, openLightbox }) {
  useReveal();
  const E = window.SITE.exhibitions;
  const F = E.featured;
  return (
    <div className="page wrap section">
      <SectionHead eyebrow={lang === "zh" ? "展覽與最新消息 · Exhibitions" : "Exhibitions & News"}
        title={lang === "zh" ? "展覽現場" : "On View"} lang={lang} />

      <div className="news-feature glass reveal">
        <div className="poster"><img src={IMG(F.img)} alt={(lang === "zh" ? F.titleZh : F.titleEn) + "｜展覽海報"} /></div>
        <div className="body">
          <span className="badge"><span className="dot"></span>{lang === "zh" ? "現正展出" : "Now Showing"}</span>
          <h2>{lang === "zh" ? F.titleZh : F.titleEn}</h2>
          <p className="lead" style={{ fontSize: 16 }}>{lang === "zh" ? F.descZh : F.descEn}</p>
          <div className="exinfo">
            {F.info.map((r, i) => (
              <div className="row" key={i}>
                <div className="k">{t(r.k, lang)}</div>
                <div className="v">{t(r.v, lang)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* second / past exhibition */}
      <div className="news-feature glass reveal" style={{ marginTop: 22 }}>
        <div className="body" style={{ order: 1 }}>
          <span className="badge" style={{ background: "transparent", color: "var(--cyan)", border: "1px solid var(--hairline-strong)" }}>{lang === "zh" ? "歷史展覽" : "Past Exhibition"}</span>
          <h2>{lang === "zh" ? E.second.titleZh : E.second.titleEn}</h2>
          <p className="lead" style={{ fontSize: 16 }}>{lang === "zh" ? E.second.descZh : E.second.descEn}</p>
          <div className="exinfo">
            {E.second.info.map((r, i) => (
              <div className="row" key={i}>
                <div className="k">{t(r.k, lang)}</div>
                <div className="v">{t(r.v, lang)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="poster" style={{ order: 2 }}><img src={IMG(E.second.img)} alt={(lang === "zh" ? E.second.titleZh : E.second.titleEn) + "｜展覽海報"} /></div>
      </div>

      {/* timeline list */}
      <div className="section" style={{ paddingBottom: 30 }}>
        <SectionHead eyebrow={lang === "zh" ? "歷年展覽 · Timeline" : "Timeline"}
          title={lang === "zh" ? "創作與展出歷程" : "Exhibition History"} lang={lang} />
        <div className="ex-list reveal">
          {E.timeline.map((row, i) => (
            <div className="ex-row" key={i}>
              <div className="yr">{row.yr}</div>
              <div className="ti">{t(row, lang)}
                <span className="en">{(lang === "zh" ? row.en : row.zh) + (t(row.venue, lang) ? "　·　" + t(row.venue, lang) : "")}</span>
              </div>
              <div className="ty">{t(row.ty, lang)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* gallery grid */}
      <div className="section" style={{ paddingTop: 10 }}>
        <SectionHead eyebrow={lang === "zh" ? "現場紀實 · Gallery" : "In the Gallery"}
          title={t(E.galleryTitle, lang)} lang={lang} />
        <div className="thumbrow reveal" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
          {E.gallery.map((g, gi) => {
            const lbItems = E.gallery.map((x) => ({ img: x.img, zh: x.zh, en: x.en, series: { zh: "展覽與創作現場", en: "Exhibitions & Studio" }, note: { zh: "", en: "" } }));
            return (
              <div className="t" key={g.img} onClick={() => openLightbox(lbItems, gi)} title={t(g, lang)}>
                <img src={IMG(g.img)} alt={t(g, lang)} loading="lazy" />
                <div className="thumbcap">{t(g, lang)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------------- ACADEMIC ---------------- */
function Academic({ lang }) {
  useReveal();
  const AC = window.SITE.academic;
  return (
    <div className="page wrap section">
      <SectionHead eyebrow={lang === "zh" ? "學術與評審 · Academic" : "Academic & Jury"}
        title={lang === "zh" ? "專業眼光，為藝術把關" : "Professional Stewardship"} lead={t(AC.intro, lang)} lang={lang} />

      <div className="statband reveal" style={{ marginBottom: 50 }}>
        {AC.stats.map((s, i) => (
          <div className="stat glass" key={i}>
            <div className="n">{s.n}</div>
            <div className="l">{t(s, lang)}</div>
            <div className="en">{lang === "zh" ? s.en : s.zh}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gap: 18 }}>
        {AC.blocks.map((b, i) => (
          <div className="glass reveal" key={i}
            style={{ display: "grid", gridTemplateColumns: i % 2 ? "1.3fr 0.7fr" : "0.7fr 1.3fr", gap: 0, overflow: "hidden", borderRadius: 20 }}>
            <div style={{ order: i % 2 ? 2 : 1, padding: "clamp(28px,3.5vw,46px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="eyebrow">{lang === "zh" ? b.title.en : b.title.zh}</div>
              <h3 style={{ color: "var(--foam)", fontSize: "clamp(22px,2.4vw,30px)", margin: "4px 0 14px", letterSpacing: ".04em" }}>{t(b.title, lang)}</h3>
              <p style={{ color: "var(--text-dim)", fontSize: 16, margin: 0 }}>{t(b.body, lang)}</p>
            </div>
            <div style={{ order: i % 2 ? 1 : 2, position: "relative", minHeight: 240, overflow: "hidden" }}>
              <img src={IMG(b.img)} alt={(lang === "zh" ? t(b.title, lang) + "｜莊明中" : t(b.title, lang) + " — Chuang Ming-Chung")} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </div>

      {/* critical acclaim */}
      <div className="section" style={{ paddingBottom: 0 }}>
        <SectionHead eyebrow={lang === "zh" ? "藝評選粹 · Acclaim" : "Acclaim"}
          title={t(AC.criticsTitle, lang)} lang={lang} />
        <div style={{ display: "grid", gap: 18 }}>
          {AC.critics.map((c, i) => (
            <blockquote className="quote-card glass reveal" key={i}>
              <span className="qmark">“</span>
              <p>{t(c.quote, lang)}</p>
              <footer>— {t(c.who, lang)}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- COLLABORATION ---------------- */
function Collab({ lang, go }) {
  useReveal();
  const C = window.SITE.collab;
  return (
    <div className="page wrap section">
      <SectionHead eyebrow={lang === "zh" ? "合作洽談 · Collaborate" : "Collaborate"}
        title={lang === "zh" ? "讓藝術成為連結" : "Art as Connection"} lead={t(C.intro, lang)} lang={lang} />

      <div className="collab-grid">
        {C.cards.map((c, i) => (
          <div className="collab-card glass reveal" key={i} style={{ transitionDelay: (i * 60) + "ms" }}>
            <div className="ic">{c.ic}</div>
            <div>
              <h3>{t(c, lang)}</h3>
              <div className="en">{lang === "zh" ? c.en : c.zh}</div>
            </div>
            <p>{t(c.d, lang)}</p>
          </div>
        ))}
      </div>

      {/* future outlook */}
      <div className="section" style={{ paddingBottom: 20 }}>
        <SectionHead eyebrow={lang === "zh" ? "未來展望 · Vision" : "Vision"}
          title={t(C.future.title, lang)} lang={lang} />
        <div className="pillars">
          {C.future.items.map((f, i) => (
            <div className="pillar glass reveal" key={i} style={{ transitionDelay: (i * 70) + "ms" }}>
              <div className="num">0{i + 1}</div>
              <h3>{t(f, lang)}</h3>
              <div className="en">{lang === "zh" ? f.en : f.zh}</div>
              <p>{t(f.d, lang)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="glass reveal" style={{ padding: "clamp(32px,4vw,56px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="eyebrow" style={{ justifyContent: "center" }}>{lang === "zh" ? "開始合作 · Get in touch" : "Get in Touch"}</div>
        <h2 className="title" style={{ fontSize: "clamp(24px,3vw,38px)", marginBottom: 18 }}>
          {lang === "zh" ? "期待與您相遇在藝術的旅程中" : "Let's meet on the journey of art"}
        </h2>
        <button className="btn primary" onClick={() => go("contact")}>{lang === "zh" ? "聯絡我們" : "Contact Us"} <span>→</span></button>
      </div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact({ lang }) {
  useReveal();
  const C = window.SITE.contact;
  return (
    <div className="page wrap section">
      <SectionHead eyebrow={lang === "zh" ? "聯絡方式 · Contact" : "Contact"}
        title={lang === "zh" ? "與我們聯繫" : "Reach Out"} lang={lang} />
      <div className="contact-grid">
        <div className="reveal">
          <p className="lead" style={{ marginBottom: 4 }}>{t(C.intro, lang)}</p>
          <div className="contact-lines">
            {C.lines.map((l, i) => (
              <a className="cline glass" key={i} href={l.href} target="_blank" rel="noreferrer">
                <div className="ic">{l.ic}</div>
                <div>
                  <div className="k">{t(l.k, lang)}</div>
                  <div className="v">{l.v}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className="portrait-card"><img src={IMG(C.img)} alt={lang === "zh" ? "莊明中於工作室進行創作" : "Chuang Ming-Chung at work in the studio"} /></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Home, About, Works, Exhibitions, Academic, Collab, Contact });
