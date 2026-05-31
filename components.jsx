/* =========================================================
   COMPONENTS — background, nav, footer, lightbox, helpers
   ========================================================= */
const { useState, useEffect, useRef, useCallback } = React;

const IMG = (id) => {
  if (!id) return "";
  return "assets/art/" + id + ".webp";
};
const t = (node, lang) => (node && typeof node === "object" ? (node[lang] ?? node.zh) : node);

/* ---------- scroll reveal hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------- Ocean backdrop ---------- */
function Ocean() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    let w, h, raf;
    const motes = [];
    const N = 46;
    function resize() {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
    }
    resize();
    for (let i = 0; i < N; i++) {
      motes.push({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 2.0 + 0.5,
        sp: Math.random() * 0.28 + 0.06,
        sw: Math.random() * 0.9 + 0.2,
        ph: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.5 ? 80 : 205,
        a: Math.random() * 0.5 + 0.18,
      });
    }
    function draw(tm) {
      ctx.clearRect(0, 0, w, h);
      for (const m of motes) {
        m.y -= m.sp;
        m.ph += 0.01;
        const x = m.x + Math.sin(m.ph) * m.sw * 8;
        if (m.y < -8) { m.y = h + 8; m.x = Math.random() * w; }
        const grd = ctx.createRadialGradient(x, m.y, 0, x, m.y, m.r * 4);
        const col = m.hue === 80 ? "250,210,140" : "150,210,235";
        grd.addColorStop(0, `rgba(${col},${m.a})`);
        grd.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath(); ctx.arc(x, m.y, m.r * 4, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <div id="ocean">
      <div className="blob g"></div>
      <div className="blob t"></div>
      <div className="blob c"></div>
      <div className="rays"></div>
      <svg id="caustics" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <filter id="turb">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.016" numOctaves="2" seed="7" result="n">
            <animate attributeName="baseFrequency" dur="34s" values="0.012 0.016;0.018 0.012;0.012 0.016" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix in="n" type="matrix"
            values="0 0 0 0 0.95   0 0 0 0 0.82   0 0 0 0 0.45   0 0 0 1.1 -0.45" result="c" />
          <feComposite operator="in" in="c" in2="SourceGraphic" />
        </filter>
        <rect width="100%" height="100%" filter="url(#turb)"></rect>
      </svg>
      <canvas id="motes" ref={canvasRef}></canvas>
      <div className="vig"></div>
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav({ route, go, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const S = window.SITE;
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="brand" onClick={() => { go("home"); setOpen(false); }}>
          <span className="zh">{S.brand.zh}</span>
          <span className="en">{S.brand.en}</span>
        </div>
        <nav className={"menu" + (open ? " open" : "")}>
          {S.nav.map((n) => (
            <button key={n.id}
              className={"navlink" + (route === n.id ? " active" : "")}
              onClick={() => { go(n.id); setOpen(false); }}>
              {t(n, lang)}
            </button>
          ))}
        </nav>
        <button className="lang" onClick={() => setLang(lang === "zh" ? "en" : "zh")}>
          {lang === "zh" ? "EN" : "中"}
        </button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer({ lang, go }) {
  const S = window.SITE;
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <div>
          <div className="brand" style={{ cursor: "pointer" }} onClick={() => go("home")}>
            <span className="zh">{S.brand.zh}</span>
            <span className="en">{S.brand.en}</span>
          </div>
          <div className="sig" style={{ marginTop: 12, maxWidth: "42ch" }}>{t(S.footer.sig, lang)}</div>
          <div className="sig" style={{ marginTop: 8, opacity: .7 }}>© {new Date().getFullYear()} {S.brand.zh} Chuang Ming-Chung · chuangminchung.com</div>
        </div>
        <div className="social">
          {S.contact.lines.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer" title={t(l.k, lang)}>{l.ic}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ---------- Lightbox ---------- */
function Lightbox({ items, index, setIndex, lang, onClose }) {
  const item = items[index];
  const prev = useCallback(() => setIndex((index - 1 + items.length) % items.length), [index, items, setIndex]);
  const next = useCallback(() => setIndex((index + 1) % items.length), [index, items, setIndex]);
  useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [prev, next, onClose]);
  if (!item) return null;
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lb-close" onClick={onClose}>✕</button>
      <button className="lb-nav prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
      <button className="lb-nav next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
      <div className="stage" onClick={(e) => e.stopPropagation()}>
        <img src={IMG(item.img)} alt={t(item, lang)} />
        <div className="meta">
          <div className="eyebrow">{t(item.series, lang)}</div>
          <h3>{t(item, lang)}</h3>
          {(lang === "zh" ? item.en : item.zh) && <div className="en-t">{lang === "zh" ? item.en : item.zh}</div>}
          {t(item.note, lang) && <p>{t(item.note, lang)}</p>}
          {(item.medium || item.size || (item.yr && item.yr !== "—")) && (
            <div className="specs">
              {item.medium && <div><span className="k">{lang === "zh" ? "媒材" : "Medium"}</span><span className="v">{t(item.medium, lang)}</span></div>}
              {item.size && <div><span className="k">{lang === "zh" ? "規格" : "Size"}</span><span className="v">{item.size}</span></div>}
              {item.yr && item.yr !== "—" && <div><span className="k">{lang === "zh" ? "年代" : "Year"}</span><span className="v">{item.yr}</span></div>}
              {item.series && <div><span className="k">{lang === "zh" ? "系列" : "Series"}</span><span className="v">{t(item.series, lang)}</span></div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Section title ---------- */
function SectionHead({ eyebrow, title, lead, lang, center }) {
  return (
    <div className="reveal" style={{ textAlign: center ? "center" : "left", marginBottom: 44, ...(center ? { display:"flex", flexDirection:"column", alignItems:"center" } : {}) }}>
      {eyebrow && <div className="eyebrow" style={center ? { justifyContent:"center" } : {}}>{eyebrow}</div>}
      <h2 className="title">{title}</h2>
      {lead && <p className="lead" style={{ marginTop: 16, ...(center ? { marginLeft:"auto", marginRight:"auto" } : {}) }}>{lead}</p>}
    </div>
  );
}

Object.assign(window, { Ocean, Nav, Footer, Lightbox, SectionHead, useReveal, IMG, t, CountUp, useParallax });

/* ---------- scroll parallax: elements with [data-par] ---------- */
function useParallax() {
  useEffect(() => {
    let raf = 0;
    const apply = () => {
      const els = document.querySelectorAll("[data-par]");
      const vh = window.innerHeight;
      els.forEach((el) => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        let off = (center - vh / 2) / vh; // -1 (above) .. 1 (below)
        if (off > 1.4) off = 1.4; if (off < -1.4) off = -1.4; // clamp so far-offscreen elements don't fly
        const sp = parseFloat(el.getAttribute("data-par")) || 0;
        el.style.transform = `translate3d(0, ${(-off * sp * 26).toFixed(1)}px, 0)`;
      });
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  });
}

/* ---------- count-up number, animates when scrolled into view ---------- */
function CountUp({ to, suffix = "", prefix = "", dur = 1500 }) {
  const [v, setV] = useState(to);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let done = false;
    const run = () => {
      if (done) return; done = true;
      const start = performance.now();
      const fallback = setTimeout(() => setV(to), dur + 400);
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setV(Math.round(to * e));
        if (p < 1) requestAnimationFrame(tick); else clearTimeout(fallback);
      };
      setV(0);
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { run(); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, dur]);
  return <span ref={ref}>{prefix}{v}{suffix}</span>;
}

Object.assign(window, { Ocean, Nav, Footer, Lightbox, SectionHead, useReveal, IMG, t, CountUp, useParallax });
