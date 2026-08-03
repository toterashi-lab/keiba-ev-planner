import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const robots = fs.readFileSync(new URL("../robots.txt", import.meta.url), "utf8");
const sitemap = fs.readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
const manifest = JSON.parse(fs.readFileSync(new URL("../site.webmanifest", import.meta.url), "utf8"));
const vercel = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));

for (const required of [
  'rel="canonical" href="https://toterashi-lab.github.io/keiba-ev-planner/"',
  'property="og:image" content="https://toterashi-lab.github.io/keiba-ev-planner/assets/og-umayomi.png"',
  'name="twitter:card" content="summary_large_image"',
  'type="application/ld+json"',
  'if (!location.hostname.endsWith("github.io"))',
  '"/_vercel/insights/script.js"',
]) assert.ok(html.includes(required), `SEO要素がありません: ${required}`);

assert.ok(robots.includes("Allow: /") && robots.includes("sitemap.xml"));
assert.ok(sitemap.includes("https://toterashi-lab.github.io/keiba-ev-planner/"));
assert.equal(manifest.lang, "ja");
assert.equal(manifest.display, "standalone");
assert.ok(vercel.headers?.some((rule) => rule.source === "/(.*)"));
assert.ok(fs.statSync(new URL("../assets/og-umayomi.png", import.meta.url)).size > 100_000);

console.log(JSON.stringify({ status: "pass", canonical: "https://toterashi-lab.github.io/keiba-ev-planner/",
  analytics: "conditional-vercel-only", sitemapUrls: sitemap.match(/<url>/g)?.length ?? 0 }, null, 2));
