/* =========================================================
   APP ROOT
   ========================================================= */
function App() {
  const [route, setRoute] = React.useState(() => (location.hash || "#home").slice(1));
  const [lang, setLang] = React.useState(() => localStorage.getItem("cmc-lang") || "zh");
  const [lb, setLb] = React.useState(null); // {items, index}

  const go = React.useCallback((id) => {
    setRoute(id);
    history.replaceState(null, "", "#" + id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    const h = () => setRoute((location.hash || "#home").slice(1));
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);

  React.useEffect(() => { localStorage.setItem("cmc-lang", lang); document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en"; }, [lang]);

  const openLightbox = React.useCallback((items, index) => setLb({ items, index }), []);

  const pages = {
    home: <Home lang={lang} go={go} openLightbox={openLightbox} />,
    about: <About lang={lang} />,
    works: <Works lang={lang} openLightbox={openLightbox} />,
    exhibitions: <Exhibitions lang={lang} openLightbox={openLightbox} />,
    academic: <Academic lang={lang} />,
    collab: <Collab lang={lang} go={go} />,
    contact: <Contact lang={lang} />,
  };

  return (
    <React.Fragment>
      <Ocean />
      <div className="app">
        <Nav route={route} go={go} lang={lang} setLang={setLang} />
        <main key={route + lang}>{pages[route] || pages.home}</main>
        <Footer lang={lang} go={go} />
      </div>
      {lb && (
        <Lightbox items={lb.items} index={lb.index}
          setIndex={(i) => setLb((s) => ({ ...s, index: i }))}
          lang={lang} onClose={() => setLb(null)} />
      )}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
