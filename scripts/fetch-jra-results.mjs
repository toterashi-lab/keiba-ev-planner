import fs from "node:fs";

const args = globalThis.process?.argv ?? [];
const linkPath = args[2] ?? "data/result-links-2026-07-11-2026-07-12.json";
const outPath = args[3] ?? "data/results-2026-07-11-2026-07-12.json";
const jsPath = outPath.replace(/\.json$/, ".js");

const linkData = JSON.parse(fs.readFileSync(linkPath, "utf8"));
const results = [];

for (const link of linkData.raceLinks) {
  await sleep(Number(process.env.JRA_FETCH_DELAY_MS ?? 1000));
  const html = await fetchShiftJis(link.url);
  results.push({
    ...link,
    raceTitle: parseRaceTitle(html),
    startTime: stripHtml(html.match(/発走時刻：([^<]+)/)?.[1] ?? ""),
    weather: parseHeaderItem(html, "天候"),
    turfGoing: parseHeaderItem(html, "芝"),
    dirtGoing: parseHeaderItem(html, "ダート"),
    course: stripHtml(html.match(/コース：([\s\S]*?)<\/div>/)?.[1] ?? ""),
    winner: stripHtml(html.match(/<span class="win_name">([\s\S]*?)<\/span>/)?.[1] ?? ""),
    runners: parseRunners(html),
    refunds: parseRefunds(html),
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const data = {
  source: "JRA official race result pages",
  fetchedAt: new Date().toISOString(),
  linkPath,
  raceCount: results.length,
  runnerCount: results.reduce((total, race) => total + race.runners.length, 0),
  refundLineCount: results.reduce((total, race) => total + race.refunds.length, 0),
  results,
};

fs.writeFileSync(outPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
fs.writeFileSync(jsPath, `window.KEIBA_RESULTS = ${JSON.stringify(data, null, 2)};\n`, "utf8");
console.log(`Wrote ${data.raceCount} results, ${data.runnerCount} runners, and ${data.refundLineCount} refund lines to ${outPath} and ${jsPath}`);

function parseRaceTitle(html) {
  const area = html.match(/発走時刻：[\s\S]*?コース：/)?.[0] ?? "";
  return stripHtml(area.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? "");
}

function parseHeaderItem(html, label) {
  const area = html.match(/発走時刻：[\s\S]*?コース：/)?.[0] ?? "";
  const item = [...area.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
    .map((match) => stripHtml(match[1]))
    .find((text) => text.startsWith(label));
  return item ? item.slice(label.length).trim() : "";
}

function parseRunners(html) {
  const tableBody = html.match(/<th[^>]*class="place"[^>]*>着順<\/th>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/)?.[1] ?? "";
  const runners = [];
  for (const match of tableBody.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const row = match[1];
    const finishText = stripHtml(cell(row, "place"));
    const horseBlock = cell(row, "horse");
    const horseLink = horseBlock.match(/href="([^"]*pw01dud[^\"]+)"/i)?.[1] ?? "";
    const horseName = stripHtml(horseBlock);
    const horseNumber = numberOrNull(stripHtml(cell(row, "num")));
    if (!finishText || !horseName || horseNumber === null) continue;

    const wakuBlock = cell(row, "waku");
    const weightText = stripHtml(cell(row, "h_weight"));
    const weightMatch = weightText.match(/(\d+)(?:\(([+-]?\d+)\))?/);
    const jockeyBlock = cell(row, "jockey");
    const trainerBlock = cell(row, "trainer");
    runners.push({
      finishPosition: numberOrNull(finishText),
      finishText,
      gateNumber: numberOrNull(wakuBlock.match(/alt="枠(\d+)/)?.[1]),
      horseNumber,
      horseId: horseLink.match(/pw01dud([^/]+)/)?.[1] ?? null,
      horseName,
      sexAge: stripHtml(cell(row, "age")),
      carriedWeight: numberOrNull(stripHtml(cell(row, "weight"))),
      jockeyId: jockeyBlock.match(/pw04kmk([^/'\"]+)/)?.[1] ?? null,
      jockeyName: stripHtml(jockeyBlock),
      officialTime: stripHtml(cell(row, "time")),
      margin: stripHtml(cell(row, "margin")),
      cornerPositions: [...cell(row, "corner").matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)].map((item) => numberOrNull(stripHtml(item[1]))).filter((item) => item !== null),
      finalSectional: numberOrNull(stripHtml(cell(row, "f_time"))),
      bodyWeight: weightMatch ? Number(weightMatch[1]) : null,
      bodyWeightDelta: weightMatch?.[2] ? Number(weightMatch[2]) : null,
      trainerId: trainerBlock.match(/pw05cmk([^/'\"]+)/)?.[1] ?? null,
      trainerName: stripHtml(trainerBlock),
      popularity: numberOrNull(stripHtml(cell(row, "pop"))),
    });
  }
  return runners;
}

function cell(row, className) {
  return row.match(new RegExp(`<td[^>]*class="${className}"[^>]*>([\\s\\S]*?)<\\/td>`))?.[1] ?? "";
}

function numberOrNull(value) {
  const normalized = String(value ?? "").replaceAll(",", "").trim();
  if (!normalized) return null;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function parseRefunds(html) {
  const area = html.match(/<div class="refund_area[\s\S]*?<\/div>\s*<div class="horse_prof_area/)?.[0] ?? "";
  const refunds = [];
  for (const item of area.matchAll(/<li class="([^"]+)">([\s\S]*?)<\/li>/g)) {
    const betClass = item[1];
    const block = item[2];
    const betType = stripHtml(block.match(/<dt>([\s\S]*?)<\/dt>/)?.[1] ?? betClass);
    const linePattern = /<div class="num">([\s\S]*?)<\/div>\s*<div class="yen">([\s\S]*?)<\/div>\s*<div class="pop">([\s\S]*?)<\/div>/g;
    for (const lineMatch of block.matchAll(linePattern)) {
      const selection = stripHtml(lineMatch[1]);
      const payoutYen = Number(stripHtml(lineMatch[2]).replaceAll(",", "").replace(/[^\d]/g, ""));
      const popularityText = stripHtml(lineMatch[3]).replace(/[^\d]/g, "");
      const popularity = popularityText ? Number(popularityText) : null;
      if (selection && Number.isFinite(payoutYen)) {
        refunds.push({ betClass, betType, selection, payoutYen, popularity });
      }
    }
  }
  return refunds;
}

async function fetchShiftJis(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const bytes = await response.arrayBuffer();
  return new TextDecoder("shift_jis").decode(bytes);
}

function stripHtml(value) {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
