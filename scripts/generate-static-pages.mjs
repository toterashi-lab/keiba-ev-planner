import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const origin = "https://umayomi-keiba.vercel.app";
const source = await fs.readFile(path.join(root, "index.html"), "utf8");
const context = { window: {} };
vm.createContext(context);
for (const file of ["data/meet-2026-07-11-2026-07-12.js", "data/results-2026-07-11-2026-07-12.js", "data/live-racecards.js"]) {
  vm.runInContext(await fs.readFile(path.join(root, file), "utf8"), context, { filename: file });
}
const edition = context.window.KEIBA_LIVE_RACECARDS?.meetings?.length ? context.window.KEIBA_LIVE_RACECARDS : context.window.KEIBA_REFERENCE_MEETINGS;
const resultIds = new Set((context.window.KEIBA_LIVE_RACECARDS?.results || []).map((row) => row.raceId));
const pages = [];

for (const page of [
  ["races", "全レースのAI競馬予想・競馬指数・買い目", "開催日と競馬場から、5人のAI予想家の競馬指数、単勝、馬連、3連複の買い目を確認できます。"],
  ["results", "AI競馬予想の結果・回収率アーカイブ", "AI予想と確定結果を比較し、的中、払戻、収支、回収率を日別に確認できます。"],
  ["season", "2026 AI競馬リーグ順位", "5人のAI予想家が仮想資金で競うシーズン順位と獲得資金率を公開します。"],
  ["agents", "5人のAI競馬予想家", "能力、穴馬、展開、数理、逆張りの5人のAI予想家と予想スタイルを紹介します。"],
]) await writeAppPage(page[0], `${page[1]}｜ウマヨミ`, page[2]);

const agentNames = { safety: "ミドリ", sniper: "レナ", pace: "ナギ", analyst: "リカ", contrarian: "ミカ" };
for (const [id, name] of Object.entries(agentNames)) {
  await writeAppPage(`agents/${id}`, `${name}のAI競馬予想プロフィール｜ウマヨミ`, `${name}の予想スタイル、得意条件、苦手条件、参考成績を紹介します。`);
}

for (const meeting of edition.meetings || []) {
  for (const track of meeting.tracks || []) {
    for (const race of track.races || []) {
      const slug = `${meeting.date}-${String(track.venueCode).padStart(2, "0")}-${String(race.no).padStart(2, "0")}`;
      const baseTitle = `${track.venueName}${race.no}R ${race.name}`;
      const description = `${meeting.date} ${baseTitle}のAI競馬予想。5人のAI予想家による競馬指数、印、単勝・馬連・3連複の買い目と予想根拠を掲載します。`;
      const ld = { "@context": "https://schema.org", "@type": "SportsEvent", name: baseTitle, startDate: `${meeting.date}T${race.start}:00+09:00`, eventStatus: resultIds.has(race.raceId) ? "https://schema.org/EventCompleted" : "https://schema.org/EventScheduled", location: { "@type": "Place", name: `${track.venueName}競馬場` }, organizer: { "@type": "Organization", name: "JRA" } };
      await writeAppPage(`race/${slug}`, `${baseTitle} AI予想・指数・買い目｜ウマヨミ`, description, ld);
      await writeAppPage(`result/${slug}`, `${baseTitle} AI予想結果・払戻｜ウマヨミ`, `${baseTitle}のAI予想と確定結果、的中、払戻、収支、MVP、反省会を掲載します。`, ld);
    }
  }
}

const guides = [
  { slug: "ai-keiba", title: "AI競馬予想とは", lead: "競馬AIが過去データから勝つ確率を考える仕組みを、専門用語を減らして説明します。", sections: [["AI予想で分かること","AI競馬予想は、過去の着順、競馬場、距離、脚質、騎手などを比べて各馬を評価します。ウマヨミでは5人のAIが別々の見方で予想し、同じ結論と意見の違いを表示します。"],["結果との比べ方","予想時点の印と買い目を残し、確定した着順と払戻を後から照合します。的中率や回収率は過去の結果であり、将来の利益を保証する数字ではありません。"]] },
  { slug: "keiba-index", title: "競馬指数と戦闘力の見方", lead: "ウマヨミの戦闘力は、AIが馬の評価を比べやすくした競馬指数です。", sections: [["戦闘力とは","戦闘力は競馬指数をゲーム風に表したものです。数字が高いほど、そのレース内でAI評価が高いことを示します。別のレースとの単純比較には使いません。"],["5人で数字が違う理由","能力、穴馬、展開、データ、市場評価のどこを重く見るかが違うためです。一致は有力な手掛かりですが、意見割れもレースの難しさを知る材料になります。"]] },
  { slug: "expected-value", title: "期待値とお宝度の見方", lead: "お宝度は、AI推定確率とオッズから考えた競馬期待値を分かりやすくした表示です。", sections: [["100円あたりの期待回収","同じ条件の馬券を何度も100円ずつ買った場合、平均でいくら戻るとAIが推定するかを表します。推定確率と現在オッズを掛けて計算します。"],["高ければ必ず当たるのか","いいえ。期待値は長期平均の推定で、1回の的中を保証しません。オッズの変化やデータ不足で評価も変わるため、正式な数値と注意点をレース詳細に併記します。"]] },
  { slug: "betting", title: "単勝・馬連・3連複の見方", lead: "ウマヨミは単勝、馬連、3連複を各1点100円として表示します。", sections: [["単勝と馬連","単勝は選んだ1頭が1着なら的中です。馬連は選んだ2頭が1着と2着に入れば、順番に関係なく的中です。"],["3連複BOX","選んだ馬から3頭が1着から3着に入れば、順番に関係なく的中です。5頭BOXは10点なので、各100円なら使った額は合計1,000円です。"]] },
];
for (const guide of guides) await writeGuide(guide);

const sitemapEntries = ["/", ...pages.map((page) => `/${page.path}/`), ...guides.map((guide) => `/guides/${guide.slug}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.map((url) => `  <url><loc>${origin}${url}</loc><changefreq>${url === "/" ? "daily" : "weekly"}</changefreq><priority>${url === "/" ? "1.0" : url.startsWith("/race/") ? "0.8" : "0.7"}</priority></url>`).join("\n")}\n</urlset>\n`;
await fs.writeFile(path.join(root, "sitemap.xml"), sitemap, "utf8");
console.log(JSON.stringify({ appPages: pages.length, guides: guides.length, sitemapEntries: sitemapEntries.length }, null, 2));

async function writeAppPage(relativePath, title, description, structuredData) {
  const url = `${origin}/${relativePath}/`;
  let html = source.replace("<head>", "<head>\n    <base href=\"/\" />")
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  const targetHeading = relativePath === "races" || relativePath.startsWith("race/") || relativePath.startsWith("result/") ? "races-title"
    : relativePath === "results" ? "results-title" : relativePath === "season" ? "season-title" : "performance-title";
  html = html.replace(/<h1 id="(home-title|races-title|results-title|performance-title|season-title)">([\s\S]*?)<\/h1>/g,
    (_, id, content) => id === targetHeading ? `<h1 id="${id}">${content}</h1>` : `<h2 id="${id}">${content}</h2>`);
  if (relativePath.startsWith("race/") || relativePath.startsWith("result/")) html = html.replace(/<h1 id="races-title">[\s\S]*?<\/h1>/, `<h1 id="races-title">${escapeHtml(title.split(" AI")[0])}</h1>`);
  if (relativePath.startsWith("agents/")) html = html.replace(/<h1 id="performance-title">[\s\S]*?<\/h1>/, `<h1 id="performance-title">${escapeHtml(title.split("のAI")[0])}</h1>`);
  if (structuredData) html = html.replace("</head>", `    <script type="application/ld+json">${JSON.stringify(structuredData).replaceAll("<", "\\u003c")}</script>\n  </head>`);
  await write(relativePath, html);
  pages.push({ path: relativePath, title });
}

async function writeGuide(guide) {
  const url = `${origin}/guides/${guide.slug}/`;
  const ld = { "@context":"https://schema.org", "@type":"Article", headline:guide.title, description:guide.lead, inLanguage:"ja", mainEntityOfPage:url, author:{"@type":"Organization",name:"ウマヨミ編集部"}, publisher:{"@type":"Organization",name:"ウマヨミ"} };
  const breadcrumb = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement:[{"@type":"ListItem",position:1,name:"ロビー",item:origin+"/"},{"@type":"ListItem",position:2,name:guide.title,item:url}] };
  const html = `<!doctype html><html lang="ja" data-theme="dark"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${escapeHtml(guide.title)}｜ウマヨミ</title><meta name="description" content="${escapeHtml(guide.lead)}"/><link rel="canonical" href="${url}"/><link rel="icon" type="image/png" href="/assets/agent-analyst.png"/><meta property="og:type" content="article"/><meta property="og:title" content="${escapeHtml(guide.title)}｜ウマヨミ"/><meta property="og:description" content="${escapeHtml(guide.lead)}"/><meta property="og:url" content="${url}"/><meta property="og:image" content="${origin}/assets/og-umayomi.png"/><meta name="twitter:card" content="summary_large_image"/><link rel="stylesheet" href="/styles.css"/><link rel="stylesheet" href="/league.css"/><link rel="stylesheet" href="/guide.css"/><script type="application/ld+json">${JSON.stringify(ld)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}</script></head><body><header class="topbar"><a class="brand" href="/"><span class="brand-mark">U</span><span><strong>ウマヨミ</strong><small>AI FORECAST LEAGUE</small></span></a><nav class="desktop-nav"><a href="/">ロビー</a><a href="/races/">レース</a><a href="/results/">勝敗</a><a href="/season/">リーグ</a><a href="/agents/">予想家</a></nav></header><main class="guide-main"><nav class="breadcrumb"><a href="/">ロビー</a><span>›</span><span>${escapeHtml(guide.title)}</span></nav><article class="guide-article"><span class="eyebrow">BEGINNER GUIDE</span><h1>${escapeHtml(guide.title)}</h1><p class="guide-lead">${escapeHtml(guide.lead)}</p>${guide.sections.map(([heading, text]) => `<section><h2>${escapeHtml(heading)}</h2><p>${escapeHtml(text)}</p></section>`).join("")}<aside><strong>大切なこと</strong><p>AI予想や期待値は推定であり、的中や利益を保証しません。馬券は20歳以上が自分で判断し、無理のない範囲で購入してください。</p></aside></article><nav class="guide-links"><a href="/guides/ai-keiba/">AI競馬予想</a><a href="/guides/keiba-index/">競馬指数</a><a href="/guides/expected-value/">期待値</a><a href="/guides/betting/">馬券の見方</a></nav></main><footer><strong>AI競馬エンターテインメント ウマヨミ</strong><p>5人のAI予想家による予想と結果を無料公開。</p></footer></body></html>`;
  await write(`guides/${guide.slug}`, html);
}

async function write(relativePath, html) {
  const directory = path.join(root, relativePath);
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, "index.html"), html, "utf8");
}
function escapeHtml(value) { return String(value).replace(/[&<>\"]/g, (character) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" })[character]); }
