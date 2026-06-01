/* AUTO-GENERATED from app.jsx by build.js — do not edit; edit the .jsx and run "npm run build". */
function App() {
  const [route, setRoute] = React.useState(() => (location.hash || "#home").slice(1));
  const [lang, setLang] = React.useState(() => localStorage.getItem("cmc-lang") || "zh");
  const [lb, setLb] = React.useState(null);
  const go = React.useCallback(id => {
    setRoute(id);
    history.replaceState(null, "", "#" + id);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  React.useEffect(() => {
    const h = () => setRoute((location.hash || "#home").slice(1));
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  React.useEffect(() => {
    localStorage.setItem("cmc-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }, [lang]);
  const openLightbox = React.useCallback((items, index) => setLb({
    items,
    index
  }), []);
  const pages = {
    home: React.createElement(Home, {
      lang: lang,
      go: go,
      openLightbox: openLightbox
    }),
    about: React.createElement(About, {
      lang: lang
    }),
    works: React.createElement(Works, {
      lang: lang,
      openLightbox: openLightbox
    }),
    exhibitions: React.createElement(Exhibitions, {
      lang: lang,
      openLightbox: openLightbox
    }),
    academic: React.createElement(Academic, {
      lang: lang
    }),
    collab: React.createElement(Collab, {
      lang: lang,
      go: go
    }),
    contact: React.createElement(Contact, {
      lang: lang
    })
  };
  return React.createElement(React.Fragment, null, React.createElement(Ocean, null), React.createElement("div", {
    className: "app"
  }, React.createElement(Nav, {
    route: route,
    go: go,
    lang: lang,
    setLang: setLang
  }), React.createElement("main", {
    key: route + lang
  }, pages[route] || pages.home), React.createElement(Footer, {
    lang: lang,
    go: go
  })), lb && React.createElement(Lightbox, {
    items: lb.items,
    index: lb.index,
    setIndex: i => setLb(s => ({
      ...s,
      index: i
    })),
    lang: lang,
    onClose: () => setLb(null)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));
