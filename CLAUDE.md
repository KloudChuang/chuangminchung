# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static single-page bilingual (zh / en) portfolio site for the painter 莊明中 (Chuang Min-Chung), deployed at chuangminchung.com. React 18 (production UMD) is loaded from CDN in `index.html`. The `.jsx` files are the **source**; they are precompiled ahead of time to plain `.js` (classic React runtime, global scope) by `build.js`, so there is **no in-browser Babel** — the browser loads `components.js` / `pages.js` / `app.js` directly.

## Build & running locally

Edit the `.jsx` source, then recompile to the `.js` files the page actually loads:

```bash
npm install          # first time only — installs @babel/core + preset-react (devDeps, gitignored)
npm run build        # compiles components.jsx/pages.jsx/app.jsx → .js (runs build.js)
```

`data.js` is plain JS and is **not** compiled — edit it directly. The generated `.js` files carry an AUTO-GENERATED banner; never hand-edit them. They are committed (GitHub Pages serves them statically).

Serve over HTTP (opening via `file://` fails CORS for the scripts):

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

No tests, no linter.

## Architecture

Everything runs in the **global scope** — there are no `import`/`export`/modules. Files are loaded in this exact order (see `index.html`), and each later file depends on globals defined by the earlier ones:

1. **`data.js`** — plain JS, assigns all site content to `window.SITE`. Every piece of text is a bilingual node `{ zh, en }`. Top-level keys: `brand`, `nav`, `hero`, `about`, `guide` (home-page site map), `works`, `exhibitions`, `academic`, `collab`, `contact`, `footer`.
2. **`components.jsx`** — shared building blocks and helpers: `Nav` (scroll-progress bar + auto-hide on scroll down), `Footer`, `Lightbox`, `Ocean` (animated background: blobs, god-rays, caustics, canvas swell-wave bands + rising motes, and a scroll-driven "diving deeper" darkening overlay), `SectionHead`, hooks (`useReveal`, `useParallax`, `CountUp`), and two key helpers:
   - `IMG(id)` → `"assets/art/" + id + ".webp"` — all artwork is referenced by an **art id**, never a path.
   - `t(node, lang)` → returns `node[lang]` (falls back to `.zh`) — the i18n accessor used everywhere to read `{zh,en}` nodes.
3. **`pages.jsx`** — one component per route: `Home`, `About`, `Works`, `Exhibitions`, `Academic`, `Collab`, `Contact`, plus `VoyageGuide` (the home-page animated site map: an SVG route drawn by scroll via `pathLength="1"` + dashoffset, one stop per page, content from `SITE.guide`). Reads from `SITE` and renders via `t(...)`.
4. **`app.jsx`** — `App` root: hash-based routing (`#home`, `#works`, …) via the `route` state and a `pages` map; `lang` state persisted to `localStorage["cmc-lang"]`; a shared `openLightbox(items, index)` callback passed down to pages that show galleries.

`styles.css` is a single global stylesheet (the visual identity is a dark ocean palette, theme color `#0c1622`).

## Animation system

- **Scroll reveals** — elements with class `reveal` get `.in` added by `useReveal` (IntersectionObserver) when scrolled into view; same-batch elements auto-stagger 80 ms apart. Variants compose with `reveal`: `r-scale`, `r-left`, `r-right`, `r-rise`, `r-blur` (focus-in from blur), `r-clip` (curtain reveal).
  - **`r-clip` gotcha**: the clip-path is applied to the *inner `img`*, never to the observed `.reveal` element itself — Chrome's IntersectionObserver counts the target's own `clip-path` in the intersection rect, so a fully-clipped target reports ratio 0 and never reveals. Keep it that way.
- **Parallax** — elements with `data-par="<speed>"` are translated on scroll by `useParallax` (called per page, not in `App`). It sets inline `transform`, so **never put `data-par` and `reveal` on the same element** (the inline transform overwrites the reveal's CSS transform). Speeds are damped to 45 % under 760 px and disabled entirely under `prefers-reduced-motion`. Images that parallax inside a frame (`.poster img`, `.acad-feature img`, `.pullquote .bg`) are oversized ~120 % so edges never show.
- **Scroll-driven chrome** — Nav hides on scroll-down / reappears on scroll-up (never while the mobile menu is open) and carries a gold scroll-progress bar; the Ocean `depth` overlay darkens up to 55 % as you approach page bottom. All rAF-throttled `scroll` listeners with `{passive:true}`.
- **Reduced motion** — a global `prefers-reduced-motion` block in `styles.css` collapses all animations/transitions; the Ocean canvas draws a single static frame; parallax is skipped in JS.
- Hero elements cascade in via the `heroin` keyframes; route changes fade/rise via `.page`'s `floatIn`.

## Common edits

- **Change any text / add an artwork's metadata** → edit `window.SITE` in `data.js`. Keep the `{ zh, en }` shape; missing `en` silently falls back to `zh`.
- **Add an artwork image** → drop a `.webp` into `assets/art/` named `<id>.webp`, then reference that `<id>` in `data.js` (e.g. `{ img: "art60", cat: "ocean", ... }`). The `cat` must match one of `works.cats[].id`; `THEME_REP`/`MARQUEE_A`/`MARQUEE_B` at the top of `pages.jsx` and `SITE.guide.items[].img` also reference art ids for the home page.
  - **Two id namespaces**: `art##` are the original curated works; `inv###` are works imported from the 2025 `莊明中數位美術館清冊.docx` inventory (### = its source table row). Both live in `assets/art/`; pick the right prefix when adding more from either source. See the repo-root `CLAUDE.md` for the docx ingest pipeline.
- **Add a works category (theme)** → add `{ id, zh, en }` to `works.cats` in `data.js`, **and** add a representative art id to `THEME_REP` in `pages.jsx` for that `id` — every non-`all` cat is rendered as a Home "Series" tile via `IMG(THEME_REP[c.id])`, so a missing entry shows a broken tile. Also bump the hardcoded theme-count heading in `Works`/the Home showcase ("Seven Directions of the Gaze" / "七個凝視的方向"). Current themes: `early, ocean, butterfly, folk, ancient, rebirth, light`.
- **Works gallery sort** → the `Works` component has a client-side sort control (`featured` = `data.js` array order, `new`/`old` = by `yr`, parsed as the first 4-digit run). Sorting acts within the active category filter and feeds the same array into `openLightbox`, so prev/next follow the sorted order.
- **Add a route** → add a `{ id, zh, en }` entry to `SITE.nav`, write the page component in `pages.jsx`, and register it in the `pages` map in `app.jsx`.

Any edit to a `.jsx` file requires `npm run build` before it takes effect (and before pushing). Edits to `data.js` do not.

When adding/removing artwork ids, grep for the id across `data.js` and `pages.jsx` — a referenced id with no matching file in `assets/art/` renders a broken image. Full cross-check of every referenced id against the files on disk:

```bash
comm -3 <(grep -ohE '(img:\s*"|IMG\(")[a-z0-9_]+' data.js pages.jsx | grep -oE '[a-z0-9_]+$' | sort -u) \
        <(ls assets/art | sed 's/\.webp$//' | sort -u)
```

- **SEO / structured data** → `index.html`'s `<head>` holds hand-maintained meta tags, Open Graph/Twitter cards, and a JSON-LD `@graph` (Person, WebSite, the current exhibition as `ExhibitionEvent`, representative `VisualArtwork`s). This duplicates some `data.js` content — when the featured exhibition changes, update the JSON-LD `ExhibitionEvent` (dates, venue, image) to match. `robots.txt` and `sitemap.xml` sit at the repo root.

## Deployment

Run `npm run build` first if you changed any `.jsx`, then deploy by pushing to `main`; the site is served statically from the repo (the compiled `.js` files must be committed). The GitHub remote authenticates via the SSH host alias `github-kloud` (configured in `~/.ssh/config`) — plain `git@github.com:…` is rejected. Remote is already set to `git@github-kloud:KloudChuang/chuangminchung.git`. The `uploads/` folder, `*.docx`, `.thumbnail`, and `PUSH.md` are gitignored working files — not part of the site.
