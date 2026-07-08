/* Regenerates the PRECACHE list inside ../sw.js from the files on disk.
   Run from the site root or the tools folder:  node tools/build-sw.js
   Do this whenever you ADD or REMOVE files (new week pages, a new
   subject folder, images…). Plain edits to existing files need nothing. */
"use strict";
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const swPath = path.join(root, "sw.js");

const KEEP = /\.(html|js|css|woff2|png|jpg|jpeg|gif|svg|webmanifest|json)$/i;
const SKIP = new Set(["sw.js"]);
const SKIP_NAMES = new Set(["_template.html"]);

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.relative(root, full).split(path.sep).join("/");
    if (fs.statSync(full).isDirectory()) {
      if (name === "tools" || name.startsWith(".")) continue;
      walk(full, out);
    } else if (KEEP.test(name) && !SKIP.has(rel) && !SKIP_NAMES.has(name)) {
      out.push(rel);
    }
  }
  return out;
}

const files = walk(root, []).sort();
const list = ['"./"'].concat(files.map(f => JSON.stringify(f))).join(",\n  ");

let sw = fs.readFileSync(swPath, "utf8");

// bump version: studyhub-vN -> studyhub-v(N+1)
sw = sw.replace(/studyhub-v(\d+)/, (m, n) => "studyhub-v" + (Number(n) + 1));
// replace the PRECACHE array
sw = sw.replace(/var PRECACHE = \[[\s\S]*?\];/, "var PRECACHE = [\n  " + list + "\n];");

fs.writeFileSync(swPath, sw);
console.log("sw.js updated: " + (files.length + 1) + " entries, cache bumped to " +
  sw.match(/studyhub-v\d+/)[0]);
