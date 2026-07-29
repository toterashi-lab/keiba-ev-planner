import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const robots = fs.readFileSync(new URL("../robots.txt", import.meta.url), "utf8");
const sitemap = fs.readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
const manifest = JSON.parse(fs.readFileSync(new URL("../site.webmanifest", import.meta.url), "utf8"));
const vercel = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));

for (const required of [
  'rel="canonical" href="https://umayomi-keiba.vercel.app/"',
  'property="og:image" content="https://umayomi-keiba.vercel.app/assets/og-umayomi.png"',
  'name="twitter:card" content="summary_large_image"',
  'type="application/ld+json"',
  'src="/_vercel/insights/script.js"',
]) assert.ok(html.includes(required), `SEO要素がありません: ${required}`);

assert.ok(robots.includes("Allow: /") && robots.includes("sitemap.xml"));
assert.ok(sitemap.includes("https://umayomi-keiba.vercel.app/"));
assert.equal(manifest.lang, "ja");
assert.equal(manifest.display, "standalone");
assert.ok(vercel.headers?.some((rule) => rule.source === "/(.*)"));
assert.ok(fs.statSync(new URL("../assets/og-umayomi.png", import.meta.url)).size > 100_000);

console.log(JSON.stringify({ status: "pass", canonical: "https://umayomi-keiba.vercel.app/",
  analytics: "enabled", sitemapUrls: 1 }, null, 2));
