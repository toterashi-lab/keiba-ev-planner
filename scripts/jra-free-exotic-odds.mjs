import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { isPreRaceObservation } from "./race-time.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = path.join(ROOT, "data", "jra-free-private");
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const RAW_DIR = path.join(PRIVATE_DIR, "raw", "odds-exotic");
const LOCK_PATH = path.join(PRIVATE_DIR, "odds-exotic.lock");
const ODDS_URL = "https://www.jra.go.jp/JRADB/accessO.html";
const PARSER_VERSION = "jra-exotic-odds-html-v1";
const USER_AGENT = "keiba-ev-planner/1.0 (personal research; low-rate official JRA odds fetcher)";
const TYPES = {
  pw154ou: { betType: "quinella", className: "umaren", ordered: false, legs: 2 },
  pw155ou: { betType: "wide", className: "wide", ordered: false, legs: 2, ranged: true },
  pw156ou: { betType: "exacta", className: "umatan", ordered: true, legs: 2 },
  pw157ou: { betType: "trio", className: "fuku3", ordered: false, legs: 3 },
  pw158ou: { betType: "trifecta", className: "tan3", ordered: true, legs: 3 },
};

export function parseExoticOdds(html, cname) {
  const prefix = Object.keys(TYPES).find((value) => cname.startsWith(value));
  const spec = TYPES[prefix];
  if (!spec) throw new Error(`未対応オッズページ: ${cname}`);
  const prices = spec.betType === "trifecta" ? parseTrifecta(html) : parseCaptionTables(html, spec);
  if (!prices.length) throw new Error(`${spec.betType}オッズが0件です: ${cname}`);
  return { ...spec, prices };
}

function parseCaptionTables(html, spec) {
  const tables = matchTables(html, spec.className);
  const prices = [];
  for (const table of tables) {
    const caption = stripHtml(table.match(/<caption[^>]*>([\s\S]*?)<\/caption>/i)?.[1] ?? "");
    const base = caption.split("-").map(Number).filter(Number.isFinite);
    for (const row of table.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
      const horse = numberOrNull(stripHtml(row[1].match(/<th[^>]*>([\s\S]*?)<\/th>/i)?.[1] ?? ""));
      const cell = row[1].match(/<td[^>]*>([\s\S]*?)<\/td>/i)?.[1] ?? "";
      const low = spec.ranged ? numberOrNull(stripHtml(cell.match(/class="min"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? "")) : numberOrNull(stripHtml(cell));
      const high = spec.ranged ? numberOrNull(stripHtml(cell.match(/class="max"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? "")) : low;
      if (horse === null || low === null || high === null || low < 1) continue;
      const selection = [...base, horse];
      if (selection.length !== spec.legs || new Set(selection).size !== selection.length) continue;
      const normalized = spec.ordered ? selection : [...selection].sort((a, b) => a - b);
      prices.push({ selectionKey: normalized.join("-"), oddsLow: low, oddsHigh: high });
    }
  }
  return uniquePrices(prices);
}

function parseTrifecta(html) {
  const starts = [...html.matchAll(/<div class="tan3_unit[^>]*>/gi)].map((match) => match.index);
  const prices = [];
  for (let index = 0; index < starts.length; index += 1) {
    const unit = html.slice(starts[index], starts[index + 1] ?? html.length);
    const first = numberOrNull(stripHtml(unit.match(/<h4[^>]*class="[^"]*sub_header[^"]*"[^>]*>([\s\S]*?)<\/h4>/i)?.[1].match(/class="num"[^>]*>([\s\S]*?)<\/span>/i)?.[1] ?? ""));
    if (first === null) continue;
    for (const item of unit.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
      if (!/class="[^"]*tan3/.test(item[1])) continue;
      const nums = [...item[1].matchAll(/<div class="num"[^>]*>(\d+)<\/div>/gi)].map((match) => Number(match[1]));
      const second = nums.find((number) => number !== first);
      if (!second) continue;
      for (const row of item[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
        const third = numberOrNull(stripHtml(row[1].match(/<th[^>]*>([\s\S]*?)<\/th>/i)?.[1] ?? ""));
        const odds = numberOrNull(stripHtml(row[1].match(/<td[^>]*>([\s\S]*?)<\/td>/i)?.[1] ?? ""));
        if (third === null || odds === null || odds < 1 || new Set([first, second, third]).size !== 3) continue;
        prices.push({ selectionKey: `${first}-${second}-${third}`, oddsLow: odds, oddsHigh: odds });
      }
    }
  }
  return uniquePrices(prices);
}

function matchTables(html, className) {
  const regex = new RegExp(`<table[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>[\\s\\S]*?<\\/table>`, "gi");
  return [...html.matchAll(regex)].map((match) => match[0]);
}

async function capture(options) {
  const dates = new Set(String(options.dates ?? options.date ?? "").split(",").map((value) => value.trim()).filter(Boolean));
  if (!dates.size) throw new Error("--dates YYYY-MM-DD[,YYYY-MM-DD] が必要です");
  const liveMode = options.live === "true" || options.live === true;
  const snapshotKind = liveMode ? String(options["snapshot-kind"] ?? "pre_race") : "closing_final";
  const source = liveMode ? (snapshotKind === "pre_race" ? "JRA official live exotic odds" : "JRA official live exotic odds fixture") : "JRA official exotic odds";
  const windowMinutes = Number(options["window-minutes"] ?? 0);
  fs.mkdirSync(RAW_DIR, { recursive: true });
  const database = new DatabaseSync(DB_PATH);
  database.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  const startedAt = new Date().toISOString();
  database.prepare(`update odds_ingestion_batches
    set status='failed', last_error='前回の全券種取得がプロセス中断により未完了', completed_at=?
    where source=? and status='running'`).run(startedAt, source);
  const batch = database.prepare(`insert into odds_ingestion_batches(source,snapshot_kind,target_dates,status,started_at)
    values(?,?,?,'running',?) returning id`).get(source, snapshotKind, [...dates].sort().join(","), startedAt);
  try {
    const pages = latestMeetingPages(database).flatMap((html) => parseCnames(html).filter((cname) => {
      const key = parseRaceKey(cname);
      return key && dates.has(key.raceDate);
    }));
    const candidateRaces = database.prepare(`select race_id,race_date${liveMode ? ",start_time" : ""} from ${liveMode ? "live_races" : "complete_races"}
      where race_date in (${[...dates].map(() => "?").join(",")})`).all(...dates)
      .filter((race) => !liveMode || windowMinutes <= 0 || withinWindow(race, windowMinutes));
    const candidateRaceIds = new Set(candidateRaces.map((race) => race.race_id));
    const uniquePages = [...new Set(pages)].filter((cname) => candidateRaceIds.has(parseRaceKey(cname)?.raceId));
    const expectedPages = candidateRaces.length * Object.keys(TYPES).length;
    if (liveMode && expectedPages === 0) {
      database.prepare("delete from odds_ingestion_batches where id=?").run(batch.id);
      console.log(JSON.stringify({ status: "no_upcoming_races", dates: [...dates], windowMinutes }));
      return;
    }
    if (uniquePages.length !== expectedPages) throw new Error(`全券種ページ不足: expected=${expectedPages} actual=${uniquePages.length}`);
    let priceCount = 0;
    for (let index = 0; index < uniquePages.length; index += 1) {
      const cname = uniquePages[index];
      const key = parseRaceKey(cname);
      const fetched = await fetchPage(cname, Number(options.delay ?? 250));
      const parsed = parseExoticOdds(fetched.html, cname);
      database.exec("begin immediate");
      try {
        const rawId = saveRaw(database, cname, parsed.betType, fetched);
        const insert = liveMode
          ? database.prepare(`insert into live_odds_snapshots(race_id,bet_type,selection_key,odds,odds_low,odds_high,snapshot_kind,observed_at,source_page_id,batch_id) values(?,?,?,?,?,?,?,?,?,?)`)
          : database.prepare(`insert into odds_snapshots(race_id,bet_type,selection_key,odds,observed_at,source_page_id,odds_low,odds_high,snapshot_kind,batch_id) values(?,?,?,?,?,?,?,?,?,?)`);
        for (const price of parsed.prices) {
          if (liveMode) insert.run(key.raceId, parsed.betType, price.selectionKey, price.oddsLow, price.oddsLow, price.oddsHigh, snapshotKind, fetched.fetchedAt, rawId, batch.id);
          else insert.run(key.raceId, parsed.betType, price.selectionKey, price.oddsLow, fetched.fetchedAt, rawId, price.oddsLow, price.oddsHigh, snapshotKind, batch.id);
          priceCount += 1;
        }
        database.exec("commit");
      } catch (error) { database.exec("rollback"); throw error; }
      if ((index + 1) % 20 === 0 || index + 1 === uniquePages.length) console.log(`取得 ${index + 1}/${uniquePages.length}ページ・${priceCount}オッズ`);
    }
    const checks = auditBatch(database, batch.id, expectedPages, liveMode ? "live_odds_snapshots" : "odds_snapshots");
    if (!checks.pass) throw new Error(`全券種監査失敗: ${JSON.stringify(checks)}`);
    database.prepare(`update odds_ingestion_batches set status='complete',race_count=?,priced_runner_count=?,completed_at=? where id=?`).run(
      expectedPages / Object.keys(TYPES).length, priceCount, new Date().toISOString(), batch.id,
    );
    console.log(JSON.stringify({ batchId: batch.id, ...checks }, null, 2));
  } catch (error) {
    database.prepare("update odds_ingestion_batches set status='failed',last_error=?,completed_at=? where id=?").run(String(error.stack ?? error).slice(0, 4000), new Date().toISOString(), batch.id);
    throw error;
  } finally { database.close(); }
}

function auditBatch(database, batchId, expectedPages, table = "odds_snapshots") {
  const rows = database.prepare(`select bet_type,count(*) count,count(distinct race_id) races,min(odds_low) minOdds from ${table} where batch_id=? group by bet_type`).all(batchId);
  const byType = Object.fromEntries(rows.map((row) => [row.bet_type, row]));
  const raceCount = expectedPages / Object.keys(TYPES).length;
  const details = database.prepare(`select bet_type,selection_key,odds_low,odds_high,source_page_id from ${table} where batch_id=?`).all(batchId);
  const distinctPages = new Set(details.map((row) => row.source_page_id)).size;
  const validKey = (row) => {
    const legs = Object.values(TYPES).find((spec) => spec.betType === row.bet_type)?.legs;
    const parts = row.selection_key.split("-").map(Number);
    return parts.length === legs && parts.every((value) => Number.isInteger(value) && value > 0) && new Set(parts).size === parts.length;
  };
  const checks = [
    ["exotic_page_coverage", distinctPages === expectedPages, distinctPages, `expected=${expectedPages}`],
    ["exotic_race_coverage", Object.values(TYPES).every(({ betType }) => byType[betType]?.races === raceCount), raceCount, JSON.stringify(byType)],
    ["exotic_bet_type_coverage", rows.length === Object.keys(TYPES).length, rows.length, `expected=${Object.keys(TYPES).length}`],
    ["exotic_odds_domain", details.every((row) => row.odds_low >= 1 && row.odds_high >= row.odds_low), details.length, "odds_low>=1 and odds_high>=odds_low"],
    ["exotic_selection_shape", details.every(validKey), details.length, "selection leg count and distinct positive horse numbers"],
    ["exotic_prices_present", Object.values(TYPES).every(({ betType }) => byType[betType]?.count > 0), details.length, "all five exotic bet types contain prices"],
  ];
  if (table === "live_odds_snapshots") {
    const timingRows = database.prepare(`select s.observed_at,r.race_date,r.start_time from live_odds_snapshots s
      join live_races r on r.race_id=s.race_id where s.batch_id=?`).all(batchId);
    const invalidTiming = timingRows.filter((row) => !isPreRaceObservation(row.race_date, row.start_time, row.observed_at)).length;
    checks.push(["pre_race_observation_time", invalidTiming === 0, invalidTiming, "expected=0"]);
  }
  const now = new Date().toISOString();
  const insert = database.prepare(`insert or replace into odds_quality_checks(batch_id,check_name,status,actual_value,details,checked_at) values(?,?,?,?,?,?)`);
  for (const [name, pass, value, checkDetails] of checks) insert.run(batchId, name, pass ? "pass" : "fail", value, checkDetails, now);
  return { pass: checks.every((check) => check[1]), expectedPages, raceCount, byType, checks: checks.map(([name, pass, value]) => ({ name, pass, value })) };
}

function latestMeetingPages(database) {
  const rows = database.prepare(`select raw_path from raw_pages where page_type='odds-meeting' and parser_version='jra-odds-html-v1' order by id desc limit 18`).all();
  if (!rows.length) throw new Error("保存済み開催ページがありません");
  return rows.map((row) => zlib.gunzipSync(fs.readFileSync(path.join(PRIVATE_DIR, row.raw_path))).toString("utf8"));
}

async function fetchPage(cname, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(ODDS_URL, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", "user-agent": USER_AGENT }, body: `cname=${encodeURIComponent(cname)}`, signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}: ${cname}`);
  const html = new TextDecoder("shift_jis").decode(await response.arrayBuffer());
  if (!/<title>[^<]*JRA/i.test(html)) throw new Error(`JRA応答形式不正: ${cname}`);
  return { html, fetchedAt: new Date().toISOString() };
}

function saveRaw(database, cname, betType, fetched) {
  const canonical = Buffer.from(fetched.html, "utf8");
  const hash = crypto.createHash("sha256").update(canonical).digest("hex");
  const relative = path.join("raw", "odds-exotic", betType, `${safeName(cname)}-${hash.slice(0, 12)}.html.gz`);
  const absolute = path.join(PRIVATE_DIR, relative);
  fs.mkdirSync(path.dirname(absolute), { recursive: true });
  fs.writeFileSync(absolute, zlib.gzipSync(canonical, { level: 9 }));
  return database.prepare(`insert into raw_pages(request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at,parsed_at)
    values(?,?,?,?,?,200,?,?,?) returning id`).get(`exotic:${cname}:${fetched.fetchedAt}`, `odds-${betType}`, ODDS_URL, hash, relative, PARSER_VERSION, fetched.fetchedAt, new Date().toISOString()).id;
}

function parseCnames(html) { return [...html.matchAll(/['"](pw15(?:4|5|6|7|8)ou[^'"\s)]+)['"]/g)].map((match) => match[1]); }
function parseRaceKey(cname) { const match = cname.match(/^pw15[45678]ou10(\d{2})(\d{4})(\d{2})(\d{2})(\d{2})(\d{8})Z(?:99)?\/[0-9A-F]{2}$/); return match ? { raceId: `${match[6]}-${match[1]}-${match[5]}`, raceDate: `${match[6].slice(0, 4)}-${match[6].slice(4, 6)}-${match[6].slice(6, 8)}` } : null; }
function uniquePrices(prices) { return [...new Map(prices.map((price) => [price.selectionKey, price])).values()]; }
function stripHtml(value) { return String(value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/,/g, "").replace(/\s+/g, " ").trim(); }
function numberOrNull(value) { const number = Number(String(value ?? "").match(/\d+(?:\.\d+)?/)?.[0]); return Number.isFinite(number) ? number : null; }
function safeName(value) { return value.replace(/[^a-zA-Z0-9_-]+/g, "_"); }
function withinWindow(race, minutes) { const start = new Date(`${race.race_date}T${race.start_time}:00+09:00`).getTime(); const now = Date.now(); return start >= now && start <= now + minutes * 60000; }

async function main() {
  const command = process.argv[2] ?? "capture";
  const args = process.argv.slice(3);
  const options = Object.fromEntries(args.flatMap((value, index) => value.startsWith("--") ? [[value.slice(2), args[index + 1]]] : []));
  if (command === "audit") {
    const database = new DatabaseSync(DB_PATH);
    try {
      const batch = database.prepare("select id,race_count from odds_ingestion_batches where source='JRA official exotic odds' and status='complete' order by id desc limit 1").get();
      if (!batch) throw new Error("Completed exotic odds batch was not found");
      const result = auditBatch(database, batch.id, batch.race_count * Object.keys(TYPES).length);
      console.log(JSON.stringify({ batchId: batch.id, ...result }, null, 2));
      if (!result.pass) process.exitCode = 2;
    } finally { database.close(); }
    return;
  }
  if (command !== "capture") throw new Error("Commands: capture, audit");
  let handle;
  try { handle = fs.openSync(LOCK_PATH, "wx"); fs.writeFileSync(handle, JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() })); await capture(options); }
  finally { if (handle !== undefined) fs.closeSync(handle); fs.rmSync(LOCK_PATH, { force: true }); }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
