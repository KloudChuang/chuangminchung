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

1. **`data.js`** — plain JS, assigns all site content to `window.SITE`. Every piece of text is a bilingual node `{ zh, en }`. Top-level keys: `brand`, `nav`, `hero`, `about`, `works`, `exhibitions`, `academic`, `collab`, `contact`, `footer`.
2. **`components.jsx`** — shared building blocks and helpers: `Nav`, `Footer`, `Lightbox`, `Ocean` (animated background), `SectionHead`, hooks (`useReveal`, `useParallax`, `CountUp`), and two key helpers:
   - `IMG(id)` → `"assets/art/" + id + ".webp"` — all artwork is referenced by an **art id**, never a path.
   - `t(node, lang)` → returns `node[lang]` (falls back to `.zh`) — the i18n accessor used everywhere to read `{zh,en}` nodes.
3. **`pages.jsx`** — one component per route: `Home`, `About`, `Works`, `Exhibitions`, `Academic`, `Collab`, `Contact`. Reads from `SITE` and renders via `t(...)`.
4. **`app.jsx`** — `App` root: hash-based routing (`#home`, `#works`, …) via the `route` state and a `pages` map; `lang` state persisted to `localStorage["cmc-lang"]`; a shared `openLightbox(items, index)` callback passed down to pages that show galleries.

`styles.css` is a single global stylesheet (the visual identity is a dark ocean palette, theme color `#0c1622`).

## Common edits

- **Change any text / add an artwork's metadata** → edit `window.SITE` in `data.js`. Keep the `{ zh, en }` shape; missing `en` silently falls back to `zh`.
- **Add an artwork image** → drop a `.webp` into `assets/art/` named `<id>.webp`, then reference that `<id>` in `data.js` (e.g. `{ img: "art60", cat: "ocean", ... }`). The `cat` must match one of `works.cats[].id`; `THEME_REP`/`MARQUEE_A`/`MARQUEE_B` at the top of `pages.jsx` also reference art ids for the home page.
- **Add a route** → add a `{ id, zh, en }` entry to `SITE.nav`, write the page component in `pages.jsx`, and register it in the `pages` map in `app.jsx`.

Any edit to a `.jsx` file requires `npm run build` before it takes effect (and before pushing). Edits to `data.js` do not.

When adding/removing artwork ids, grep for the id across `data.js` and `pages.jsx` — a referenced id with no matching file in `assets/art/` renders a broken image.

- **SEO / structured data** → `index.html`'s `<head>` holds hand-maintained meta tags, Open Graph/Twitter cards, and a JSON-LD `@graph` (Person, WebSite, the current exhibition as `ExhibitionEvent`, representative `VisualArtwork`s). This duplicates some `data.js` content — when the featured exhibition changes, update the JSON-LD `ExhibitionEvent` (dates, venue, image) to match. `robots.txt` and `sitemap.xml` sit at the repo root.

## Deployment

Run `npm run build` first if you changed any `.jsx`, then deploy by pushing to `main`; the site is served statically from the repo (the compiled `.js` files must be committed). The GitHub remote authenticates via the SSH host alias `github-kloud` (configured in `~/.ssh/config`) — plain `git@github.com:…` is rejected. Remote is already set to `git@github-kloud:KloudChuang/chuangminchung.git`. The `uploads/` folder, `*.docx`, `.thumbnail`, and `PUSH.md` are gitignored working files — not part of the site.
