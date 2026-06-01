/* AUTO-GENERATED from pages.jsx by build.js — do not edit; edit the .jsx and run "npm run build". */
const {
  useState: uS,
  useEffect: uE
} = React;
const THEME_REP = {
  ocean: "art18",
  butterfly: "art12",
  folk: "art42",
  ancient: "art57",
  rebirth: "art01"
};
const MARQUEE_A = ["art18", "art12", "art42", "art33", "art20", "art04", "art29", "art13"];
const MARQUEE_B = ["art30", "art22", "art47", "art39", "art17", "art09", "art40", "art57"];
function altWork(w, lang) {
  if (!w) return lang === "zh" ? "莊明中油畫作品" : "Painting by Chuang Ming-Chung";
  const other = lang === "zh" ? w.en : w.zh;
  return lang === "zh" ? `${w.zh}（${w.en}），${w.yr}　莊明中油畫作品` : `${w.en} (${w.zh}), ${w.yr} — painting by Chuang Ming-Chung`;
}
function Home({
  lang,
  go,
  openLightbox
}) {
  useReveal();
  useParallax();
  const S = window.SITE;
  const works = S.works.items;
  const byImg = id => works.find(w => w.img === id);
  const openWork = id => {
    const w = byImg(id);
    if (w) openLightbox(works, works.indexOf(w));
  };
  const featured = ["art18", "art42", "art33", "art12", "art20", "art04"];
  const lines = S.hero.manifesto[lang];
  const themes = S.works.cats.filter(c => c.id !== "all");
  const counts = {};
  works.forEach(w => {
    counts[w.cat] = (counts[w.cat] || 0) + 1;
  });
  const stats = [{
    to: 25,
    suffix: "+",
    zh: "次個展",
    en: "Solo Shows"
  }, {
    to: 100,
    suffix: "+",
    zh: "次聯展",
    en: "Group Shows"
  }, {
    to: 40,
    suffix: "",
    zh: "年創作生涯",
    en: "Years of Practice"
  }, {
    to: 10,
    suffix: "",
    zh: "冊創作專輯",
    en: "Published Albums"
  }];
  return React.createElement("div", {
    className: "page"
  }, React.createElement("section", {
    className: "hero wrap"
  }, React.createElement("div", {
    className: "hero-grid"
  }, React.createElement("div", null, React.createElement("div", {
    className: "en-name"
  }, S.brand.en), React.createElement("h1", null, S.brand.zh), React.createElement("div", {
    className: "lead",
    style: {
      marginBottom: 30,
      color: "var(--gold)",
      letterSpacing: ".06em"
    }
  }, t(S.brand.role, lang)), React.createElement("div", {
    className: "manifesto",
    dangerouslySetInnerHTML: {
      __html: lines.map(l => l.replace("<a>", '<span class="accent">').replace("</a>", "</span>")).join("<br/>")
    }
  }), React.createElement("div", {
    className: "btn-row"
  }, React.createElement("button", {
    className: "btn primary",
    onClick: () => go("works")
  }, lang === "zh" ? "瀏覽作品" : "Explore Works", " ", React.createElement("span", null, "\u2192")), React.createElement("button", {
    className: "btn",
    onClick: () => go("exhibitions")
  }, lang === "zh" ? "最新展覽" : "Current Show"))), React.createElement("div", {
    className: "hero-portrait"
  }, React.createElement("div", {
    className: "glow"
  }), React.createElement("div", {
    className: "frame",
    "data-par": "2"
  }, React.createElement("img", {
    src: IMG("p19"),
    alt: lang === "zh" ? "莊明中肖像——台灣當代油畫藝術家" : "Portrait of Chuang Ming-Chung, contemporary Taiwanese painter"
  })), React.createElement("div", {
    className: "hero-float",
    "data-par": "-2"
  }, React.createElement("img", {
    src: IMG("art29"),
    alt: altWork(byImg("art29"), lang)
  })))), React.createElement("div", {
    className: "cue"
  }, React.createElement("span", null, lang === "zh" ? "向下探索" : "Scroll"), React.createElement("span", {
    className: "line"
  }))), React.createElement("section", {
    className: "full",
    style: {
      padding: "10px 0 0"
    }
  }, React.createElement("div", {
    className: "marquee"
  }, React.createElement("div", {
    className: "marquee-track a"
  }, MARQUEE_A.concat(MARQUEE_A).map((id, i) => React.createElement("div", {
    className: "mq",
    key: "a" + i,
    onClick: () => openWork(id)
  }, React.createElement("img", {
    src: IMG(id),
    alt: altWork(byImg(id), lang),
    loading: "lazy"
  })))), React.createElement("div", {
    className: "marquee-track b"
  }, MARQUEE_B.concat(MARQUEE_B).map((id, i) => React.createElement("div", {
    className: "mq",
    key: "b" + i,
    onClick: () => openWork(id)
  }, React.createElement("img", {
    src: IMG(id),
    alt: altWork(byImg(id), lang),
    loading: "lazy"
  })))))), React.createElement("section", {
    className: "wrap statement"
  }, React.createElement("p", {
    className: "big reveal r-rise"
  }, lang === "zh" ? React.createElement(React.Fragment, null, "\u56DB\u5341\u5E74\u4F86\uFF0C\u5728\u6D41\u52D5\u7684", React.createElement("span", {
    className: "accent"
  }, "\u5149\u8207\u8272"), "\u4E4B\u9593\uFF0C", React.createElement("br", null), "\u51DD\u8996\u6D77\u6D0B\u3001\u8776\u821E\u3001\u53E4\u6587\u660E\u8207\u842C\u8C61\u4E4B\u7F8E\u3002") : React.createElement(React.Fragment, null, "For forty years, between flowing ", React.createElement("span", {
    className: "accent"
  }, "light and colour"), ",", React.createElement("br", null), "gazing at the ocean, the butterflies, ancient worlds \u2014 the beauty of all things.")), React.createElement("div", {
    className: "sub reveal"
  }, lang === "zh" ? "Chuang Ming-Chung · 莊明中" : "凝神靜氣，描繪萬象之美")), React.createElement("section", {
    className: "section wrap",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "精選作品 · Selected" : "Selected Works",
    title: lang === "zh" ? "流動的光與色" : "Flowing Light & Colour",
    lead: t(S.works.intro, lang),
    lang: lang
  }), React.createElement("div", {
    className: "featured-strip"
  }, featured.map((id, i) => {
    const wk = byImg(id);
    const span = [5, 4, 3, 4, 4, 4][i];
    const tall = i === 0;
    return React.createElement("div", {
      className: "tile reveal r-scale",
      key: id,
      style: {
        gridColumn: `span ${span}`,
        aspectRatio: tall ? "4/5" : "4/3",
        transitionDelay: i % 3 * 90 + "ms"
      },
      onClick: () => openWork(id)
    }, React.createElement("img", {
      src: IMG(id),
      alt: altWork(wk, lang)
    }), React.createElement("div", {
      className: "cap"
    }, React.createElement("div", {
      className: "t"
    }, t(wk, lang)), React.createElement("div", {
      className: "s"
    }, wk.yr)));
  })), React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 40
    },
    className: "reveal"
  }, React.createElement("button", {
    className: "btn",
    onClick: () => go("works")
  }, lang === "zh" ? "查看全部作品" : "View All Works", " ", React.createElement("span", null, "\u2192")))), React.createElement("section", {
    className: "section wrap",
    style: {
      paddingTop: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "創作主題 · Series" : "Series",
    title: lang === "zh" ? "六個凝視的方向" : "Six Directions of the Gaze",
    lang: lang
  }), React.createElement("div", {
    className: "themes"
  }, themes.map(c => React.createElement("div", {
    className: "theme reveal r-scale",
    key: c.id,
    onClick: () => {
      window.__worksCat = c.id;
      go("works");
    }
  }, React.createElement("img", {
    src: IMG(THEME_REP[c.id]),
    alt: (lang === "zh" ? c.zh + " 系列代表作品" : c.en + " series — representative work") + "｜莊明中 Chuang Ming-Chung",
    loading: "lazy"
  }), React.createElement("div", {
    className: "lab"
  }, React.createElement("span", {
    className: "zh"
  }, t(c, lang)), React.createElement("span", {
    className: "en"
  }, lang === "zh" ? c.en : c.zh), React.createElement("span", {
    className: "ct"
  }, (counts[c.id] || 0) + (lang === "zh" ? " 件作品" : " works"), " ", React.createElement("span", null, "\u2192"))))))), React.createElement("section", {
    className: "full",
    style: {
      background: "linear-gradient(180deg, transparent, oklch(0.10 0.025 250 / 0.5), transparent)"
    }
  }, React.createElement("div", {
    className: "wrap",
    style: {
      padding: "clamp(40px,6vw,80px) clamp(22px,5vw,64px)"
    }
  }, React.createElement("div", {
    className: "homestats"
  }, stats.map((s, i) => React.createElement("div", {
    className: "s reveal",
    key: i,
    style: {
      transitionDelay: i * 80 + "ms"
    }
  }, React.createElement("div", {
    className: "n"
  }, React.createElement(CountUp, {
    to: s.to,
    suffix: s.suffix
  })), React.createElement("div", {
    className: "l"
  }, t(s, lang)), React.createElement("div", {
    className: "en"
  }, lang === "zh" ? s.en : s.zh)))))), React.createElement("section", {
    className: "section wrap",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "pullquote reveal r-scale"
  }, React.createElement("img", {
    className: "bg",
    src: IMG("art20"),
    alt: altWork(byImg("art20"), lang),
    "data-par": "3",
    loading: "lazy"
  }), React.createElement("div", {
    className: "veil"
  }), React.createElement("div", {
    className: "inner"
  }, React.createElement("q", null, lang === "zh" ? "六十七件作品，宛如剛打開的珍珠寶盒——少見而珍貴。" : "Sixty-seven works, like a pearl casket just opened — rare and precious."), React.createElement("div", {
    className: "by"
  }, lang === "zh" ? "謝里法　藝術史家・畫家" : "Shaih Lifa — Art Historian & Painter")))), React.createElement("section", {
    className: "section wrap",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "glass reveal",
    style: {
      padding: "clamp(28px,4vw,48px)",
      display: "flex",
      gap: 28,
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
  }, React.createElement("div", {
    style: {
      flex: "1 1 360px"
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, lang === "zh" ? "現正展出 · Now Showing" : "Now Showing"), React.createElement("h2", {
    className: "title",
    style: {
      fontSize: "clamp(22px,2.6vw,32px)"
    }
  }, lang === "zh" ? S.exhibitions.featured.titleZh : S.exhibitions.featured.titleEn), React.createElement("div", {
    style: {
      color: "var(--text-dim)",
      marginTop: 10
    }
  }, t(S.exhibitions.featured.info[0].v, lang), " \xB7 ", t(S.exhibitions.featured.info[1].v, lang))), React.createElement("button", {
    className: "btn",
    onClick: () => go("exhibitions")
  }, lang === "zh" ? "展覽詳情" : "Details", " ", React.createElement("span", null, "\u2192")))), React.createElement("section", {
    className: "section wrap",
    style: {
      paddingTop: 0
    }
  }, React.createElement("div", {
    className: "glass cta-band reveal"
  }, React.createElement("div", {
    className: "glow2"
  }), React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: "center",
      position: "relative"
    }
  }, lang === "zh" ? "合作洽談 · Collaborate" : "Collaborate"), React.createElement("h2", {
    className: "title",
    style: {
      fontSize: "clamp(24px,3.2vw,40px)",
      maxWidth: "20ch",
      position: "relative"
    }
  }, lang === "zh" ? "讓藝術成為連結" : "Let art become a connection"), React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: 26,
      position: "relative"
    }
  }, React.createElement("button", {
    className: "btn primary",
    onClick: () => go("collab")
  }, lang === "zh" ? "合作方式" : "Ways to Collaborate", " ", React.createElement("span", null, "\u2192")), React.createElement("button", {
    className: "btn",
    onClick: () => go("contact")
  }, lang === "zh" ? "聯絡我們" : "Contact")))));
}
function About({
  lang
}) {
  useReveal();
  const A = window.SITE.about;
  return React.createElement("div", {
    className: "page wrap section"
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "關於藝術家 · About" : "About the Artist",
    title: lang === "zh" ? "台灣當代藝術的中流砥柱" : "A Pillar of Taiwan's Contemporary Art",
    lang: lang
  }), React.createElement("div", {
    className: "split"
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "portrait-card"
  }, React.createElement("img", {
    src: IMG("p39"),
    alt: lang === "zh" ? "莊明中藝術家肅像" : "Portrait of the artist Chuang Ming-Chung"
  })), React.createElement("div", {
    className: "glass",
    style: {
      padding: 26,
      marginTop: 18
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 14
    }
  }, t(A.education.title, lang)), React.createElement("div", {
    className: "timeline"
  }, A.education.items.map((e, i) => React.createElement("div", {
    className: "tl-item",
    key: i
  }, React.createElement("div", {
    className: "yr"
  }, e.yr), React.createElement("div", {
    className: "d",
    style: {
      color: "var(--foam)",
      fontSize: 16,
      marginTop: 2
    }
  }, t(e, lang))))))), React.createElement("div", {
    className: "prose reveal"
  }, React.createElement("p", {
    className: "firstline"
  }, t(A.intro, lang)), A.paras[lang].map((p, i) => React.createElement("p", {
    key: i
  }, p)))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "教育理念 · Philosophy" : "Philosophy",
    title: t(A.philosophyTitle, lang),
    lead: t(A.philosophyLead, lang),
    lang: lang
  }), React.createElement("div", {
    className: "pillars"
  }, A.pillars.map((p, i) => React.createElement("div", {
    className: "pillar glass reveal",
    key: i,
    style: {
      transitionDelay: i * 70 + "ms"
    }
  }, React.createElement("div", {
    className: "num"
  }, "0", i + 1), React.createElement("h3", null, t(p, lang)), React.createElement("div", {
    className: "en"
  }, lang === "zh" ? p.en : p.zh), React.createElement("p", null, t(p.d, lang)))))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "創作足跡 · Journeys" : "Journeys",
    title: t(A.journeyTitle, lang),
    lang: lang
  }), React.createElement("div", {
    className: "thumbrow reveal"
  }, A.journey.map((j, i) => React.createElement("div", {
    className: "t",
    key: i,
    title: t(j, lang)
  }, React.createElement("img", {
    src: IMG(j.img),
    alt: t(j, lang),
    loading: "lazy"
  }), React.createElement("div", {
    className: "thumbcap"
  }, t(j, lang)))))));
}
function Works({
  lang,
  openLightbox
}) {
  useReveal();
  const W = window.SITE.works;
  const [cat, setCat] = uS(window.__worksCat || "all");
  uE(() => {
    window.__worksCat = null;
  }, []);
  const items = W.items;
  const filtered = cat === "all" ? items : items.filter(i => i.cat === cat);
  return React.createElement("div", {
    className: "page wrap section"
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "作品 · Works" : "Works",
    title: lang === "zh" ? "畫作藝廊" : "The Gallery",
    lead: t(W.intro, lang),
    lang: lang
  }), React.createElement("div", {
    className: "filters reveal"
  }, W.cats.map(c => React.createElement("button", {
    key: c.id,
    className: "chip" + (cat === c.id ? " active" : ""),
    onClick: () => setCat(c.id)
  }, t(c, lang), React.createElement("span", {
    className: "en"
  }, lang === "zh" ? c.en : c.zh)))), React.createElement("div", {
    className: "masonry"
  }, filtered.map(wk => React.createElement("div", {
    className: "card reveal",
    key: wk.img,
    onClick: () => openLightbox(filtered, filtered.indexOf(wk))
  }, React.createElement("img", {
    src: IMG(wk.img),
    alt: altWork(wk, lang),
    loading: "lazy"
  }), React.createElement("div", {
    className: "overlay"
  }, React.createElement("div", {
    className: "zoom"
  }, "\u2922"), React.createElement("div", {
    className: "t"
  }, t(wk, lang)), React.createElement("div", {
    className: "s"
  }, (lang === "zh" ? wk.en : wk.zh) + " · " + wk.yr))))));
}
function Exhibitions({
  lang,
  openLightbox
}) {
  useReveal();
  const E = window.SITE.exhibitions;
  const F = E.featured;
  return React.createElement("div", {
    className: "page wrap section"
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "展覽與最新消息 · Exhibitions" : "Exhibitions & News",
    title: lang === "zh" ? "展覽現場" : "On View",
    lang: lang
  }), React.createElement("div", {
    className: "news-feature glass reveal"
  }, React.createElement("div", {
    className: "poster"
  }, React.createElement("img", {
    src: IMG(F.img),
    alt: (lang === "zh" ? F.titleZh : F.titleEn) + "｜展覽海報"
  })), React.createElement("div", {
    className: "body"
  }, React.createElement("span", {
    className: "badge"
  }, React.createElement("span", {
    className: "dot"
  }), lang === "zh" ? "現正展出" : "Now Showing"), React.createElement("h2", null, lang === "zh" ? F.titleZh : F.titleEn), React.createElement("p", {
    className: "lead",
    style: {
      fontSize: 16
    }
  }, lang === "zh" ? F.descZh : F.descEn), React.createElement("div", {
    className: "exinfo"
  }, F.info.map((r, i) => React.createElement("div", {
    className: "row",
    key: i
  }, React.createElement("div", {
    className: "k"
  }, t(r.k, lang)), React.createElement("div", {
    className: "v"
  }, t(r.v, lang))))))), React.createElement("div", {
    className: "news-feature glass reveal",
    style: {
      marginTop: 22
    }
  }, React.createElement("div", {
    className: "body",
    style: {
      order: 1
    }
  }, React.createElement("span", {
    className: "badge",
    style: {
      background: "transparent",
      color: "var(--cyan)",
      border: "1px solid var(--hairline-strong)"
    }
  }, lang === "zh" ? "歷史展覽" : "Past Exhibition"), React.createElement("h2", null, lang === "zh" ? E.second.titleZh : E.second.titleEn), React.createElement("p", {
    className: "lead",
    style: {
      fontSize: 16
    }
  }, lang === "zh" ? E.second.descZh : E.second.descEn), React.createElement("div", {
    className: "exinfo"
  }, E.second.info.map((r, i) => React.createElement("div", {
    className: "row",
    key: i
  }, React.createElement("div", {
    className: "k"
  }, t(r.k, lang)), React.createElement("div", {
    className: "v"
  }, t(r.v, lang)))))), React.createElement("div", {
    className: "poster",
    style: {
      order: 2
    }
  }, React.createElement("img", {
    src: IMG(E.second.img),
    alt: (lang === "zh" ? E.second.titleZh : E.second.titleEn) + "｜展覽海報"
  }))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "現場盛況 · Crowds" : "Opening Crowds",
    title: t(E.crowdTitle, lang),
    lead: t(E.crowdLead, lang),
    lang: lang
  }), React.createElement("div", {
    className: "crowd-grid"
  }, E.crowd.map((c, i) => {
    const lbItems = E.crowd.map(x => ({
      img: x.img,
      zh: x.zh,
      en: x.en,
      series: {
        zh: "展覽現場盛況",
        en: "Opening Crowds & Scale"
      },
      note: {
        zh: "",
        en: ""
      }
    }));
    return React.createElement("div", {
      className: "crowd-card reveal" + (i === 0 ? " lead" : ""),
      key: c.img,
      onClick: () => openLightbox(lbItems, i),
      title: t(c, lang)
    }, React.createElement("img", {
      src: IMG(c.img),
      alt: t(c, lang),
      loading: "lazy"
    }), React.createElement("div", {
      className: "crowd-cap"
    }, React.createElement("span", null, t(c, lang))));
  }))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 30
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "歷年展覽 · Timeline" : "Timeline",
    title: lang === "zh" ? "創作與展出歷程" : "Exhibition History",
    lang: lang
  }), React.createElement("div", {
    className: "ex-list reveal"
  }, E.timeline.map((row, i) => React.createElement("div", {
    className: "ex-row",
    key: i
  }, React.createElement("div", {
    className: "yr"
  }, row.yr), React.createElement("div", {
    className: "ti"
  }, t(row, lang), React.createElement("span", {
    className: "en"
  }, (lang === "zh" ? row.en : row.zh) + (t(row.venue, lang) ? "　·　" + t(row.venue, lang) : ""))), React.createElement("div", {
    className: "ty"
  }, t(row.ty, lang)))))), React.createElement("div", {
    className: "section",
    style: {
      paddingTop: 10
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "現場紀實 · Gallery" : "In the Gallery",
    title: t(E.galleryTitle, lang),
    lang: lang
  }), React.createElement("div", {
    className: "thumbrow reveal"
  }, E.gallery.map((g, gi) => {
    const lbItems = E.gallery.map(x => ({
      img: x.img,
      zh: x.zh,
      en: x.en,
      series: {
        zh: "展覽與創作現場",
        en: "Exhibitions & Studio"
      },
      note: {
        zh: "",
        en: ""
      }
    }));
    return React.createElement("div", {
      className: "t",
      key: g.img,
      onClick: () => openLightbox(lbItems, gi),
      title: t(g, lang)
    }, React.createElement("img", {
      src: IMG(g.img),
      alt: t(g, lang),
      loading: "lazy"
    }), React.createElement("div", {
      className: "thumbcap"
    }, t(g, lang)));
  }))));
}
function Academic({
  lang
}) {
  useReveal();
  const AC = window.SITE.academic;
  return React.createElement("div", {
    className: "page wrap section"
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "學術與評審 · Academic" : "Academic & Jury",
    title: lang === "zh" ? "專業眼光，為藝術把關" : "Professional Stewardship",
    lead: t(AC.intro, lang),
    lang: lang
  }), React.createElement("div", {
    className: "statband reveal",
    style: {
      marginBottom: 50
    }
  }, AC.stats.map((s, i) => React.createElement("div", {
    className: "stat glass",
    key: i
  }, React.createElement("div", {
    className: "n"
  }, s.n), React.createElement("div", {
    className: "l"
  }, t(s, lang)), React.createElement("div", {
    className: "en"
  }, lang === "zh" ? s.en : s.zh)))), React.createElement("div", {
    className: "acad-feature reveal r-scale"
  }, React.createElement("img", {
    src: IMG(AC.feature.img),
    alt: lang === "zh" ? AC.feature.capZh : AC.feature.capEn,
    loading: "lazy"
  }), React.createElement("div", {
    className: "veil"
  }), React.createElement("div", {
    className: "cap"
  }, lang === "zh" ? AC.feature.capZh : AC.feature.capEn)), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "評審與顧問 · Roles" : "Jury & Advisory",
    title: t(AC.rolesTitle, lang),
    lang: lang
  }), React.createElement("div", {
    className: "role-grid"
  }, AC.blocks.map((b, i) => React.createElement("div", {
    className: "role-card glass reveal",
    key: i,
    style: {
      transitionDelay: i * 70 + "ms"
    }
  }, React.createElement("div", {
    className: "role-ic"
  }, b.ic), React.createElement("div", {
    className: "role-en"
  }, lang === "zh" ? b.title.en : b.title.zh), React.createElement("h3", null, t(b.title, lang)), React.createElement("p", null, t(b.body, lang)))))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "公共典藏 · Collections" : "Collections",
    title: t(AC.collectionsTitle, lang),
    lead: t(AC.collectionsLead, lang),
    lang: lang
  }), React.createElement("div", {
    className: "coll-grid reveal"
  }, AC.collections.map((c, i) => React.createElement("div", {
    className: "coll-item",
    key: i
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("div", null, React.createElement("div", {
    className: "zh"
  }, t(c, lang)), React.createElement("div", {
    className: "en"
  }, lang === "zh" ? c.en : c.zh)))))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "學術交流 · Exchange" : "Exchange",
    title: t(AC.exchangeTitle, lang),
    lead: t(AC.exchangeLead, lang),
    lang: lang
  }), React.createElement("div", {
    className: "exchange-grid"
  }, AC.exchange.map((e, i) => React.createElement("div", {
    className: "exch-card glass reveal" + (i === 0 ? " feature" : ""),
    key: i,
    style: {
      transitionDelay: i % 2 * 80 + "ms"
    }
  }, React.createElement("div", {
    className: "exch-photo"
  }, React.createElement("img", {
    src: IMG(e.img),
    alt: t(e.title, lang),
    loading: "lazy"
  })), React.createElement("div", {
    className: "exch-body"
  }, React.createElement("h3", null, t(e.title, lang)), React.createElement("p", null, t(e.body, lang))))))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 0
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "藝評選粹 · Acclaim" : "Acclaim",
    title: t(AC.criticsTitle, lang),
    lang: lang
  }), React.createElement("div", {
    style: {
      display: "grid",
      gap: 18
    }
  }, AC.critics.map((c, i) => React.createElement("blockquote", {
    className: "quote-card glass reveal",
    key: i
  }, React.createElement("span", {
    className: "qmark"
  }, "\u201C"), React.createElement("p", null, t(c.quote, lang)), React.createElement("footer", null, "\u2014 ", t(c.who, lang)))))));
}
function Collab({
  lang,
  go
}) {
  useReveal();
  const C = window.SITE.collab;
  return React.createElement("div", {
    className: "page wrap section"
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "合作洽談 · Collaborate" : "Collaborate",
    title: lang === "zh" ? "讓藝術成為連結" : "Art as Connection",
    lead: t(C.intro, lang),
    lang: lang
  }), React.createElement("div", {
    className: "collab-grid"
  }, C.cards.map((c, i) => React.createElement("div", {
    className: "collab-card glass reveal",
    key: i,
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, React.createElement("div", {
    className: "ic"
  }, c.ic), React.createElement("div", null, React.createElement("h3", null, t(c, lang)), React.createElement("div", {
    className: "en"
  }, lang === "zh" ? c.en : c.zh)), React.createElement("p", null, t(c.d, lang))))), React.createElement("div", {
    className: "section",
    style: {
      paddingBottom: 20
    }
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "未來展望 · Vision" : "Vision",
    title: t(C.future.title, lang),
    lang: lang
  }), React.createElement("div", {
    className: "pillars"
  }, C.future.items.map((f, i) => React.createElement("div", {
    className: "pillar glass reveal",
    key: i,
    style: {
      transitionDelay: i * 70 + "ms"
    }
  }, React.createElement("div", {
    className: "num"
  }, "0", i + 1), React.createElement("h3", null, t(f, lang)), React.createElement("div", {
    className: "en"
  }, lang === "zh" ? f.en : f.zh), React.createElement("p", null, t(f.d, lang)))))), React.createElement("div", {
    className: "glass reveal",
    style: {
      padding: "clamp(32px,4vw,56px)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      justifyContent: "center"
    }
  }, lang === "zh" ? "開始合作 · Get in touch" : "Get in Touch"), React.createElement("h2", {
    className: "title",
    style: {
      fontSize: "clamp(24px,3vw,38px)",
      marginBottom: 18
    }
  }, lang === "zh" ? "期待與您相遇在藝術的旅程中" : "Let's meet on the journey of art"), React.createElement("button", {
    className: "btn primary",
    onClick: () => go("contact")
  }, lang === "zh" ? "聯絡我們" : "Contact Us", " ", React.createElement("span", null, "\u2192"))));
}
function Contact({
  lang
}) {
  useReveal();
  const C = window.SITE.contact;
  return React.createElement("div", {
    className: "page wrap section"
  }, React.createElement(SectionHead, {
    eyebrow: lang === "zh" ? "聯絡方式 · Contact" : "Contact",
    title: lang === "zh" ? "與我們聯繫" : "Reach Out",
    lang: lang
  }), React.createElement("div", {
    className: "contact-grid"
  }, React.createElement("div", {
    className: "reveal"
  }, React.createElement("p", {
    className: "lead",
    style: {
      marginBottom: 4
    }
  }, t(C.intro, lang)), React.createElement("div", {
    className: "contact-lines"
  }, C.lines.map((l, i) => React.createElement("a", {
    className: "cline glass",
    key: i,
    href: l.href,
    target: "_blank",
    rel: "noreferrer"
  }, React.createElement("div", {
    className: "ic"
  }, l.ic), React.createElement("div", null, React.createElement("div", {
    className: "k"
  }, t(l.k, lang)), React.createElement("div", {
    className: "v"
  }, l.v)))))), React.createElement("div", {
    className: "reveal"
  }, React.createElement("div", {
    className: "portrait-card"
  }, React.createElement("img", {
    src: IMG(C.img),
    alt: lang === "zh" ? "莊明中於工作室進行創作" : "Chuang Ming-Chung at work in the studio"
  })))));
}
Object.assign(window, {
  Home,
  About,
  Works,
  Exhibitions,
  Academic,
  Collab,
  Contact
});
