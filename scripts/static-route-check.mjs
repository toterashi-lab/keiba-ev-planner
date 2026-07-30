import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const html = fs.readFileSync("index.html", "utf8");
for (const route of ["/races/", "/results/", "/season/", "/agents/"]) assert.ok(html.includes(`href="${route}"`), `${route}への内部リンク`);
assert.ok(!html.match(/href="#(?:home|races|results|performance|season)/), "主要ナビはハッシュに依存しない");
for (const file of ["races/index.html", "results/index.html", "season/index.html", "agents/index.html", "guides/ai-keiba/index.html", "guides/keiba-index/index.html", "guides/expected-value/index.html", "guides/betting/index.html"]) {
  assert.ok(fs.existsSync(file), `${file} が存在すること`);
  const page = fs.readFileSync(file, "utf8");
  assert.match(page, /<link rel="canonical" href="https:\/\/umayomi-keiba\.vercel\.app\//, `${file} canonical`);
}
const racePages = fs.readdirSync("race", { withFileTypes: true }).filter((entry) => entry.isDirectory());
const resultPages = fs.readdirSync("result", { withFileTypes: true }).filter((entry) => entry.isDirectory());
assert.equal(racePages.length, 72, "72レースの予想URL");
assert.equal(resultPages.length, 72, "72レースの結果URL");
for (const entry of [...racePages, ...resultPages]) assert.ok(fs.existsSync(path.join(entry === racePages.find((row) => row.name === entry.name) ? "race" : "result", entry.name, "index.html")) || fs.existsSync(path.join("race", entry.name, "index.html")) || fs.existsSync(path.join("result", entry.name, "index.html")));
for (const file of [`race/${racePages[0].name}/index.html`, `result/${resultPages[0].name}/index.html`, "agents/safety/index.html"]) {
  const page = fs.readFileSync(file, "utf8");
  assert.equal((page.match(/<h1(?:\s|>)/g) || []).length, 1, `${file} の主見出しは1つ`);
}
for (const agent of ["safety", "sniper", "pace", "analyst", "contrarian"]) {
  assert.ok(fs.existsSync(`agents/${agent}/index.html`), `${agent}の静的ページ`);
  for (const state of ["normal", "happy", "defeat", "angry", "awakened"]) assert.ok(fs.existsSync(`assets/characters/${agent}-${state}.webp`), `${agent}-${state}画像`);
}
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
assert.equal((sitemap.match(/<url>/g) || []).length, 158, "サイトマップ件数");
console.log("static-route-check: PASS (153 app pages, 4 guides, 25 character states)");
