/* =========================================================
   Build step — precompile .jsx → .js (classic React runtime)
   Run:  npm run build   (after editing any *.jsx file)
   Output .js files are loaded by index.html as plain scripts,
   so the browser no longer needs @babel/standalone at runtime.
   ========================================================= */
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const FILES = ["components.jsx", "pages.jsx", "app.jsx"];

const options = {
  presets: [
    // classic runtime → emits React.createElement / React.Fragment,
    // which reference the global `React` (no import statements).
    ["@babel/preset-react", { runtime: "classic" }],
  ],
  comments: false,
  compact: false,
};

for (const file of FILES) {
  const src = path.join(__dirname, file);
  const out = src.replace(/\.jsx$/, ".js");
  const { code } = babel.transformFileSync(src, options);
  const banner = `/* AUTO-GENERATED from ${file} by build.js — do not edit; edit the .jsx and run "npm run build". */\n`;
  fs.writeFileSync(out, banner + code + "\n");
  console.log(`✓ ${file}  →  ${path.basename(out)}`);
}
