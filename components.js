/* AUTO-GENERATED from components.jsx by build.js — do not edit; edit the .jsx and run "npm run build". */
const {
  useState,
  useEffect,
  useRef,
  useCallback
} = React;
const IMG = id => {
  if (!id) return "";
  return "assets/art/" + id + ".webp";
};
const t = (node, lang) => node && typeof node === "object" ? node[lang] ?? node.zh : node;
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver(entries => {
      let k = 0;
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        if (!el.style.transitionDelay) {
          const d = Math.min(k * 80, 480);
          el.style.transitionDelay = d + "ms";
          setTimeout(() => {
            el.style.transitionDelay = "";
          }, d + 1200);
        }
        el.classList.add("in");
        io.unobserve(el);
        k++;
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}
function Ocean() {
  const canvasRef = useRef(null);
  const depthRef = useRef(null);
  useEffect(() => {
    const el = depthRef.current;
    if (!el) return;
    let raf = 0;
    const apply = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      el.style.opacity = (p * 0.55).toFixed(3);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let w, h, raf;
    const motes = [];
    const N = 46;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function resize() {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
    }
    resize();
    const WAVES = [{
      y: .56,
      amp: 24,
      len: 1150,
      sp: .00028,
      amp2: 9,
      len2: 430,
      sp2: -.00046,
      col: "150,210,235",
      a: .055,
      ht: 170
    }, {
      y: .68,
      amp: 32,
      len: 1550,
      sp: .00020,
      amp2: 12,
      len2: 540,
      sp2: .00034,
      col: "250,210,140",
      a: .048,
      ht: 210
    }, {
      y: .81,
      amp: 40,
      len: 1950,
      sp: .00014,
      amp2: 15,
      len2: 660,
      sp2: -.00024,
      col: "150,210,235",
      a: .042,
      ht: 250
    }];
    const waveY = (wv, x, tm) => h * wv.y + Math.sin(x * (Math.PI * 2 / wv.len) + tm * wv.sp) * wv.amp + Math.sin(x * (Math.PI * 2 / wv.len2) + tm * wv.sp2) * wv.amp2;
    function drawWaves(tm) {
      for (const wv of WAVES) {
        ctx.beginPath();
        ctx.moveTo(-24, waveY(wv, -24, tm));
        for (let x = -24; x <= w + 24; x += 10) ctx.lineTo(x, waveY(wv, x, tm));
        ctx.strokeStyle = `rgba(${wv.col},${wv.a * 1.6})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        const top = h * wv.y - wv.amp - wv.amp2;
        const grd = ctx.createLinearGradient(0, top, 0, top + wv.ht);
        grd.addColorStop(0, `rgba(${wv.col},${wv.a})`);
        grd.addColorStop(1, `rgba(${wv.col},0)`);
        ctx.lineTo(w + 24, top + wv.ht);
        ctx.lineTo(-24, top + wv.ht);
        ctx.closePath();
        ctx.fillStyle = grd;
        ctx.fill();
      }
    }
    for (let i = 0; i < N; i++) {
      motes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.0 + 0.5,
        sp: Math.random() * 0.28 + 0.06,
        sw: Math.random() * 0.9 + 0.2,
        ph: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.5 ? 80 : 205,
        a: Math.random() * 0.5 + 0.18
      });
    }
    function draw(tm) {
      ctx.clearRect(0, 0, w, h);
      drawWaves(tm);
      for (const m of motes) {
        m.y -= m.sp;
        m.ph += 0.01;
        const x = m.x + Math.sin(m.ph) * m.sw * 8;
        if (m.y < -8) {
          m.y = h + 8;
          m.x = Math.random() * w;
        }
        const grd = ctx.createRadialGradient(x, m.y, 0, x, m.y, m.r * 4);
        const col = m.hue === 80 ? "250,210,140" : "150,210,235";
        grd.addColorStop(0, `rgba(${col},${m.a})`);
        grd.addColorStop(1, `rgba(${col},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(x, m.y, m.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return React.createElement("div", {
    id: "ocean"
  }, React.createElement("div", {
    className: "blob g"
  }), React.createElement("div", {
    className: "blob t"
  }), React.createElement("div", {
    className: "blob c"
  }), React.createElement("div", {
    className: "rays"
  }), React.createElement("svg", {
    id: "caustics",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none"
  }, React.createElement("filter", {
    id: "turb"
  }, React.createElement("feTurbulence", {
    type: "fractalNoise",
    baseFrequency: "0.012 0.016",
    numOctaves: "2",
    seed: "7",
    result: "n"
  }, React.createElement("animate", {
    attributeName: "baseFrequency",
    dur: "34s",
    values: "0.012 0.016;0.018 0.012;0.012 0.016",
    repeatCount: "indefinite"
  })), React.createElement("feColorMatrix", {
    in: "n",
    type: "matrix",
    values: "0 0 0 0 0.95   0 0 0 0 0.82   0 0 0 0 0.45   0 0 0 1.1 -0.45",
    result: "c"
  }), React.createElement("feComposite", {
    operator: "in",
    in: "c",
    in2: "SourceGraphic"
  })), React.createElement("rect", {
    width: "100%",
    height: "100%",
    filter: "url(#turb)"
  })), React.createElement("canvas", {
    id: "motes",
    ref: canvasRef
  }), React.createElement("div", {
    className: "vig"
  }), React.createElement("div", {
    className: "depth",
    ref: depthRef
  }));
}
function Nav({
  route,
  go,
  lang,
  setLang
}) {
  const [open, setOpen] = useState(false);
  const [hid, setHid] = useState(false);
  const barRef = useRef(null);
  const S = window.SITE;
  useEffect(() => {
    let lastY = window.scrollY,
      raf = 0;
    const apply = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      if (y > lastY + 4 && y > 180) setHid(true);else if (y < lastY - 4 || y <= 180) setHid(false);
      lastY = y;
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return React.createElement("header", {
    className: "nav" + (hid && !open ? " hid" : "")
  }, React.createElement("div", {
    className: "wrap nav-inner"
  }, React.createElement("div", {
    className: "brand",
    onClick: () => {
      go("home");
      setOpen(false);
    }
  }, React.createElement("span", {
    className: "zh"
  }, S.brand.zh), React.createElement("span", {
    className: "en"
  }, S.brand.en)), React.createElement("nav", {
    className: "menu" + (open ? " open" : "")
  }, S.nav.map(n => React.createElement("button", {
    key: n.id,
    className: "navlink" + (route === n.id ? " active" : ""),
    onClick: () => {
      go(n.id);
      setOpen(false);
    }
  }, t(n, lang)))), React.createElement("button", {
    className: "lang",
    onClick: () => setLang(lang === "zh" ? "en" : "zh")
  }, lang === "zh" ? "EN" : "中"), React.createElement("button", {
    className: "menu-btn",
    onClick: () => setOpen(!open),
    "aria-label": "menu"
  }, open ? "✕" : "☰")), React.createElement("span", {
    className: "nav-progress",
    ref: barRef
  }));
}
function Footer({
  lang,
  go
}) {
  const S = window.SITE;
  return React.createElement("footer", {
    className: "foot"
  }, React.createElement("div", {
    className: "wrap foot-inner"
  }, React.createElement("div", null, React.createElement("div", {
    className: "brand",
    style: {
      cursor: "pointer"
    },
    onClick: () => go("home")
  }, React.createElement("span", {
    className: "zh"
  }, S.brand.zh), React.createElement("span", {
    className: "en"
  }, S.brand.en)), React.createElement("div", {
    className: "sig",
    style: {
      marginTop: 12,
      maxWidth: "42ch"
    }
  }, t(S.footer.sig, lang)), React.createElement("div", {
    className: "sig",
    style: {
      marginTop: 8,
      opacity: .7
    }
  }, "\xA9 ", new Date().getFullYear(), " ", S.brand.zh, " Chuang Min-Chung \xB7 chuangminchung.com")), React.createElement("div", {
    className: "social"
  }, S.contact.lines.map((l, i) => React.createElement("a", {
    key: i,
    href: l.href,
    target: "_blank",
    rel: "noreferrer",
    title: t(l.k, lang)
  }, l.ic)))));
}
function Lightbox({
  items,
  index,
  setIndex,
  lang,
  onClose
}) {
  const item = items[index];
  const prev = useCallback(() => setIndex((index - 1 + items.length) % items.length), [index, items, setIndex]);
  const next = useCallback(() => setIndex((index + 1) % items.length), [index, items, setIndex]);
  useEffect(() => {
    const k = e => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [prev, next, onClose]);
  if (!item) return null;
  return React.createElement("div", {
    className: "lightbox",
    onClick: onClose
  }, React.createElement("button", {
    className: "lb-close",
    onClick: onClose
  }, "\u2715"), React.createElement("button", {
    className: "lb-nav prev",
    onClick: e => {
      e.stopPropagation();
      prev();
    }
  }, "\u2039"), React.createElement("button", {
    className: "lb-nav next",
    onClick: e => {
      e.stopPropagation();
      next();
    }
  }, "\u203A"), React.createElement("div", {
    className: "stage",
    onClick: e => e.stopPropagation()
  }, React.createElement("img", {
    src: IMG(item.img),
    alt: t(item, lang)
  }), React.createElement("div", {
    className: "meta"
  }, React.createElement("div", {
    className: "eyebrow"
  }, t(item.series, lang)), React.createElement("h3", null, t(item, lang)), (lang === "zh" ? item.en : item.zh) && React.createElement("div", {
    className: "en-t"
  }, lang === "zh" ? item.en : item.zh), t(item.note, lang) && React.createElement("p", null, t(item.note, lang)), (item.medium || item.size || item.yr && item.yr !== "—") && React.createElement("div", {
    className: "specs"
  }, item.medium && React.createElement("div", null, React.createElement("span", {
    className: "k"
  }, lang === "zh" ? "媒材" : "Medium"), React.createElement("span", {
    className: "v"
  }, t(item.medium, lang))), item.size && React.createElement("div", null, React.createElement("span", {
    className: "k"
  }, lang === "zh" ? "規格" : "Size"), React.createElement("span", {
    className: "v"
  }, item.size)), item.yr && item.yr !== "—" && React.createElement("div", null, React.createElement("span", {
    className: "k"
  }, lang === "zh" ? "年代" : "Year"), React.createElement("span", {
    className: "v"
  }, item.yr)), item.series && React.createElement("div", null, React.createElement("span", {
    className: "k"
  }, lang === "zh" ? "系列" : "Series"), React.createElement("span", {
    className: "v"
  }, t(item.series, lang)))))));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  lang,
  center
}) {
  return React.createElement("div", {
    className: "reveal",
    style: {
      textAlign: center ? "center" : "left",
      marginBottom: 44,
      ...(center ? {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      } : {})
    }
  }, eyebrow && React.createElement("div", {
    className: "eyebrow",
    style: center ? {
      justifyContent: "center"
    } : {}
  }, eyebrow), React.createElement("h2", {
    className: "title"
  }, title), lead && React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 16,
      ...(center ? {
        marginLeft: "auto",
        marginRight: "auto"
      } : {})
    }
  }, lead));
}
Object.assign(window, {
  Ocean,
  Nav,
  Footer,
  Lightbox,
  SectionHead,
  useReveal,
  IMG,
  t,
  CountUp,
  useParallax
});
function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const apply = () => {
      const els = document.querySelectorAll("[data-par]");
      const vh = window.innerHeight;
      const damp = window.innerWidth < 760 ? 0.45 : 1;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        let off = (center - vh / 2) / vh;
        if (off > 1.4) off = 1.4;
        if (off < -1.4) off = -1.4;
        const sp = parseFloat(el.getAttribute("data-par")) || 0;
        el.style.transform = `translate3d(0, ${(-off * sp * 26 * damp).toFixed(1)}px, 0)`;
      });
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  });
}
function CountUp({
  to,
  suffix = "",
  prefix = "",
  dur = 1500
}) {
  const [v, setV] = useState(to);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      const start = performance.now();
      const fallback = setTimeout(() => setV(to), dur + 400);
      const tick = now => {
        const p = Math.min(1, (now - start) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        setV(Math.round(to * e));
        if (p < 1) requestAnimationFrame(tick);else clearTimeout(fallback);
      };
      setV(0);
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(es => {
      if (es[0].isIntersecting) {
        run();
        io.disconnect();
      }
    }, {
      threshold: 0.4
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, dur]);
  return React.createElement("span", {
    ref: ref
  }, prefix, v, suffix);
}
Object.assign(window, {
  Ocean,
  Nav,
  Footer,
  Lightbox,
  SectionHead,
  useReveal,
  IMG,
  t,
  CountUp,
  useParallax
});
