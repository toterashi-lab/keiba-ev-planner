import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";

const ACCESS_URL = "https://www.jra.go.jp/JRADB/accessD.html";
const LANDING_CNAME = "pw01dli00/F3";
const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = path.join(ROOT, "data", "jra-free-private");
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const RAW_DIR = path.join(PRIVATE_DIR, "raw", "racecards");
const LOCK_PATH = path.join(PRIVATE_DIR, "racecards.lock");
const PARSER_VERSION = "jra-racecard-html-v1";
const USER_AGENT = "keiba-ev-planner/1.0 (personal research; low-rate official JRA racecard fetcher)";

export function parseRaceCard(html, cname) {
  const key = parseRaceKey(cname);
  if (!key) throw new Error(`Invalid racecard cname: ${cname}`);
  const mainTable = html.match(/<table[^>]*class="[^"]*basic narrow-xy[^"]*"[^>]*>([\s\S]*?)<\/table>/i)?.[1] ?? "";
  const body = mainTable.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i)?.[1] ?? "";
  const entries = [];
  for (const match of body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const row = match[1];
    const horseNumber = numberOrNull(stripHtml(cell(row, "num")));
    const horseCell = cell(row, "horse");
    const horseLink = horseCell.match(/pw01dud([^/'"]+)/i)?.[1] ?? "";
    const horseName = stripHtml(horseCell.match(/<div class="name">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] ?? "");
    if (!horseNumber || !horseName) continue;
    const jockeyCell = cell(row, "jockey");
    const bodyText = stripHtml(horseCell.match(/<div class="cell weight">([\s\S]*?)<\/div>/i)?.[1] ?? "");
    const bodyMatch = bodyText.match(/(\d+)kg(?:\(([+-]?\d+)\))?/);
    const trainerBlock = horseCell.match(/<p class="trainer">([\s\S]*?)<\/p>/i)?.[1] ?? "";
    const sireName = stripHtml(horseCell.match(/<li class="sire"><span>[^<]*<\/span>([\s\S]*?)<\/li>/i)?.[1] ?? "");
    const damText = stripHtml(horseCell.match(/<li class="mare"><span>[^<]*<\/span>([\s\S]*?)<\/li>/i)?.[1] ?? "");
    entries.push({
      horseId: canonicalHorseId(horseLink) || `NAME:${horseName}`,
      horseName,
      horseNumber,
      gateNumber: numberOrNull(cell(row, "waku").match(/waku\/(\d+)\.png/i)?.[1]),
      sexAge: stripHtml(jockeyCell.match(/<p class="age">([\s\S]*?)<\/p>/i)?.[1] ?? ""),
      carriedWeight: numberOrNull(stripHtml(jockeyCell.match(/<p class="weight">([\s\S]*?)<\/p>/i)?.[1] ?? "")),
      jockeyId: jockeyCell.match(/pw04kmk([^/'"]+)/i)?.[1] ?? null,
      jockeyName: stripHtml(jockeyCell.match(/<p class="jockey">[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] ?? ""),
      trainerId: trainerBlock.match(/pw05cmk([^/'"]+)/i)?.[1] ?? null,
      trainerName: stripHtml(trainerBlock.match(/<a[^>]*>([\s\S]*?)<\/a>/i)?.[1] ?? ""),
      bodyWeight: bodyMatch ? Number(bodyMatch[1]) : null,
      bodyWeightDelta: bodyMatch?.[2] ? Number(bodyMatch[2]) : null,
      ownerName: stripHtml(horseCell.match(/<p class="owner">([\s\S]*?)<\/p>/i)?.[1] ?? ""),
      breederName: stripHtml(horseCell.match(/<p class="breeder">([\s\S]*?)<\/p>/i)?.[1] ?? ""),
      sireName,
      damName: damText.replace(/\(母の父：.*\)$/, "").trim(),
      damsireName: damText.match(/\(母の父：([^)]*)\)/)?.[1] ?? "",
    });
  }
  if (entries.length < 2) throw new Error(`Racecard entries missing: ${cname}`);
  const dateMeeting = stripHtml(html.match(/<div class="cell date">([\s\S]*?)<\/div>/i)?.[1] ?? "");
  const startText = stripHtml(html.match(/<div class="cell time">([\s\S]*?)<\/div>/i)?.[1] ?? "");
  const courseText = stripHtml(html.match(/<div class="cell course">([\s\S]*?)<\/div>/i)?.[1] ?? "");
  const category = stripHtml(html.match(/<div class="cell category">([\s\S]*?)<\/div>/i)?.[1] ?? "");
  const raceClass = stripHtml(html.match(/<div class="cell class">([\s\S]*?)<\/div>/i)?.[1] ?? "");
  const fullText = stripHtml(html);
  const meetingName = dateMeeting.match(/\s(\d+回.+\d+日)$/)?.[1] ?? dateMeeting;
  return {
    ...key,
    meetingName,
    raceName: stripHtml(html.match(/<span class="race_name">([\s\S]*?)<\/span>/i)?.[1] ?? ""),
    raceClass: [category, raceClass].filter(Boolean).join(" "),
    surface: category.includes("障害") ? "障害" : courseText.includes("ダート") ? "ダート" : "芝",
    distanceM: numberOrNull(courseText.replaceAll(",", "")),
    direction: courseText.match(/(右|左|直線)/)?.[1] ?? null,
    weather: stripHtml(html.match(/<li class="weather">([\s\S]*?)<\/li>/i)?.[1] ?? "").replace(/^天候/, "")
      || (fullText.match(/天候([晴曇雨雪小雨小雪]+?)(?:芝|ダート|障害|馬場)/)?.[1] ?? null),
    going: stripHtml(html.match(/<li class="(?:turf|durt|dirt)">([\s\S]*?)<\/li>/i)?.[1] ?? "").replace(/^(?:芝|ダート|馬場)/, "")
      || (fullText.match(/(?:芝|ダート|馬場)(良|稍重|重|不良)/)?.[1] ?? null),
    startTime: normalizeTime(startText),
    entries,
  };
}

export function parseRaceKey(cname) {
  const match = cname.match(/^pw01dde10(\d{2})(\d{4})(\d{2})(\d{2})(\d{2})(\d{8})/);
  if (!match) return null;
  return {
    venueCode: match[1],
    meetingNumber: Number(match[3]),
    meetingDay: Number(match[4]),
    raceNumber: Number(match[5]),
    raceDate: `${match[6].slice(0, 4)}-${match[6].slice(4, 6)}-${match[6].slice(6, 8)}`,
    raceId: `${match[6]}-${match[1]}-${match[5]}`,
  };
}

async function capture(options) {
  const db = new DatabaseSync(DB_PATH);
  db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  initializeSchema(db);
  const delayMs = Number(options.delay ?? 1500);
  const requestedDates = new Set(String(options.dates ?? options.date ?? "").split(",").map((value) => value.trim()).filter(Boolean));
  const futureOnly = options["future-only"] === true || options["future-only"] === "true";
  const limit = Number(options.limit ?? 9999);
  const startedAt = new Date().toISOString();
  const batch = db.prepare(`insert into live_racecard_batches(source,target_dates,status,started_at)
    values('JRA official racecards',?,'running',?) returning id`).get([...requestedDates].sort().join(","), startedAt);
  try {
    const landing = await fetchPage(db, LANDING_CNAME, "racecard-index", delayMs);
    const meetingLinks = uniqueCnames(landing.html, "pw01drl");
    const raceLinks = [];
    for (const meetingCname of meetingLinks) {
      const meetingDate = parseMeetingDate(meetingCname);
      if (requestedDates.size && !requestedDates.has(meetingDate)) continue;
      if (futureOnly && meetingDate < tokyoDate()) continue;
      const page = await fetchPage(db, meetingCname, "racecard-meeting", delayMs);
      raceLinks.push(...uniqueCnames(page.html, "pw01dde"));
    }
    const selected = [...new Set(raceLinks)].slice(0, limit);
    if (!selected.length) {
      db.prepare("update live_racecard_batches set status='empty',completed_at=? where id=?").run(new Date().toISOString(), batch.id);
      console.log(JSON.stringify({ status: "empty", availableMeetingDates: meetingLinks.map(parseMeetingDate).filter(Boolean) }));
      return { status: "empty" };
    }
    let entryCount = 0;
    for (const cname of selected) {
      const page = await fetchPage(db, cname, "racecard-race", delayMs);
      const race = parseRaceCard(page.html, cname);
      saveRacecard(db, batch.id, page.id, race, page.fetchedAt);
      entryCount += race.entries.length;
    }
    const capturedDates = [...new Set(selected.map((cname) => parseRaceKey(cname).raceDate))].sort();
    const distinctRaces = db.prepare("select count(distinct race_id) count from live_races where batch_id=?").get(batch.id).count;
    const storedEntries = db.prepare("select count(*) count from live_entries where batch_id=?").get(batch.id).count;
    const pass = distinctRaces === selected.length && storedEntries === entryCount && entryCount >= selected.length * 2;
    db.prepare(`update live_racecard_batches set target_dates=?,status=?,race_count=?,entry_count=?,completed_at=?,last_error=? where id=?`).run(
      capturedDates.join(","), pass ? "complete" : "failed", distinctRaces, storedEntries, new Date().toISOString(), pass ? null : "race or entry count mismatch", batch.id,
    );
    if (!pass) throw new Error(`Racecard quality gate failed: races=${distinctRaces}/${selected.length} entries=${storedEntries}/${entryCount}`);
    const result = { status: "complete", batchId: batch.id, races: distinctRaces, entries: storedEntries, dates: capturedDates };
    console.log(JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    db.prepare("update live_racecard_batches set status='failed',last_error=?,completed_at=? where id=?").run(String(error.stack ?? error).slice(0, 4000), new Date().toISOString(), batch.id);
    throw error;
  } finally { db.close(); }
}

function initializeSchema(db) {
  db.exec(`
    create table if not exists live_racecard_batches(
      id integer primary key,source text not null,target_dates text not null,status text not null check(status in ('running','complete','failed','empty')),
      race_count integer not null default 0,entry_count integer not null default 0,started_at text not null,completed_at text,last_error text
    );
    create table if not exists live_races(
      race_id text primary key,batch_id integer not null,race_date text not null,venue_code text not null,meeting_number integer,meeting_day integer,
      race_number integer not null,meeting_name text,race_name text,race_class text,surface text,distance_m integer,start_time text,
      source_page_id integer not null,observed_at text not null
    );
    create table if not exists live_entries(
      race_id text not null,horse_id text not null,batch_id integer not null,horse_name text not null,horse_number integer not null,gate_number integer,
      sex_age text,carried_weight real,jockey_id text,jockey_name text,trainer_id text,trainer_name text,body_weight integer,body_weight_delta integer,
      owner_name text,breeder_name text,sire_name text,dam_name text,damsire_name text,observed_at text not null,
      primary key(race_id,horse_id)
    );
    create index if not exists live_races_date_idx on live_races(race_date,venue_code,race_number);
    create index if not exists live_entries_horse_idx on live_entries(horse_id,race_id);
  `);
  addColumnIfMissing(db, "live_races", "direction", "text");
  addColumnIfMissing(db, "live_races", "weather", "text");
  addColumnIfMissing(db, "live_races", "going", "text");
}

function saveRacecard(db, batchId, sourcePageId, race, observedAt) {
  db.exec("begin immediate");
  try {
    db.prepare(`insert into live_races(race_id,batch_id,race_date,venue_code,meeting_number,meeting_day,race_number,
      meeting_name,race_name,race_class,surface,distance_m,start_time,source_page_id,observed_at,direction,weather,going)
      values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
      on conflict(race_id) do update set batch_id=excluded.batch_id,meeting_name=excluded.meeting_name,race_name=excluded.race_name,
      race_class=excluded.race_class,surface=excluded.surface,distance_m=excluded.distance_m,start_time=excluded.start_time,
      direction=coalesce(excluded.direction,live_races.direction),weather=coalesce(excluded.weather,live_races.weather),
      going=coalesce(excluded.going,live_races.going),source_page_id=excluded.source_page_id,observed_at=excluded.observed_at`).run(
        race.raceId, batchId, race.raceDate, race.venueCode, race.meetingNumber, race.meetingDay, race.raceNumber,
        race.meetingName, race.raceName, race.raceClass, race.surface, race.distanceM, race.startTime, sourcePageId, observedAt,
        race.direction, race.weather, race.going,
      );
    db.prepare("delete from live_entries where race_id=?").run(race.raceId);
    const insert = db.prepare(`insert into live_entries values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
    for (const entry of race.entries) insert.run(
      race.raceId, entry.horseId, batchId, entry.horseName, entry.horseNumber, entry.gateNumber, entry.sexAge, entry.carriedWeight,
      entry.jockeyId, entry.jockeyName, entry.trainerId, entry.trainerName, entry.bodyWeight, entry.bodyWeightDelta,
      entry.ownerName, entry.breederName, entry.sireName, entry.damName, entry.damsireName, observedAt,
    );
    db.exec("commit");
  } catch (error) { db.exec("rollback"); throw error; }
}

async function fetchPage(db, cname, pageType, delayMs) {
  await sleep(delayMs);
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(ACCESS_URL, { method: "POST", headers: { "content-type": "application/x-www-form-urlencoded", "user-agent": USER_AGENT }, body: `cname=${encodeURIComponent(cname)}`, signal: AbortSignal.timeout(30000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = new TextDecoder("shift_jis").decode(await response.arrayBuffer());
      if (!/<title>[^<]*JRA/i.test(html)) throw new Error("Unexpected JRA response");
      const canonical = Buffer.from(html, "utf8");
      const hash = crypto.createHash("sha256").update(canonical).digest("hex");
      const relative = path.join("raw", "racecards", pageType, `${safeName(cname)}-${hash.slice(0, 12)}.html.gz`);
      const absolute = path.join(PRIVATE_DIR, relative);
      fs.mkdirSync(path.dirname(absolute), { recursive: true });
      if (!fs.existsSync(absolute)) fs.writeFileSync(absolute, zlib.gzipSync(canonical, { level: 9 }));
      const fetchedAt = new Date().toISOString();
      const row = db.prepare(`insert into raw_pages(request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at,parsed_at)
        values(?,?,?,?,?,200,?,?,?) returning id`).get(`racecard:${cname}:${fetchedAt}`, pageType, ACCESS_URL, hash, relative, PARSER_VERSION, fetchedAt, fetchedAt);
      return { id: row.id, html, fetchedAt };
    } catch (error) { lastError = error; if (attempt < 4) await sleep(Math.min(30000, 2 ** attempt * 1000)); }
  }
  throw new Error(`Racecard fetch failed ${cname}: ${lastError?.message}`);
}

function uniqueCnames(html, prefix) {
  const quoted = [...html.matchAll(new RegExp(`[\"'](${prefix}[^\"'\\s)]+)[\"']`, "g"))].map((match) => match[1]);
  const query = [...html.matchAll(new RegExp(`CNAME=(${prefix}[^\"'&<\\s]+)`, "g"))].map((match) => match[1]);
  return [...new Set([...quoted, ...query])];
}
function parseMeetingDate(cname) { const value = cname.match(/(\d{8})\/[0-9A-F]{2}$/)?.[1]; return value ? `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}` : null; }
function canonicalHorseId(raw) { return raw ? `10${raw.slice(2)}` : null; }
function cell(row, className) { return row.match(new RegExp(`<td[^>]*class="[^"]*\\b${className}\\b[^"]*"[^>]*>([\\s\\S]*?)<\\/td>`, "i"))?.[1] ?? ""; }
function stripHtml(value) { return String(value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/\s+/g, " ").trim(); }
function numberOrNull(value) { const number = Number(String(value ?? "").match(/\d+(?:\.\d+)?/)?.[0]); return Number.isFinite(number) ? number : null; }
function normalizeTime(value) { const match = value.match(/(\d+)時(\d+)分/); return match ? `${match[1].padStart(2, "0")}:${match[2].padStart(2, "0")}` : value; }
function safeName(value) { return value.replace(/[^a-zA-Z0-9_-]+/g, "_"); }
function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }
function addColumnIfMissing(db, table, column, definition) {
  if (!db.prepare(`pragma table_info(${table})`).all().some((row) => row.name === column)) db.exec(`alter table ${table} add column ${column} ${definition}`);
}
function parseArgs(args) { const result = {}; for (let index = 0; index < args.length; index += 1) if (args[index].startsWith("--")) result[args[index].slice(2)] = args[index + 1]?.startsWith("--") ? true : args[++index] ?? true; return result; }

async function main() {
  const command = process.argv[2] ?? "capture";
  if (command !== "capture") throw new Error("Commands: capture");
  fs.mkdirSync(RAW_DIR, { recursive: true });
  let handle;
  try { handle = fs.openSync(LOCK_PATH, "wx"); await capture(parseArgs(process.argv.slice(3))); }
  finally { if (handle !== undefined) fs.closeSync(handle); fs.rmSync(LOCK_PATH, { force: true }); }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
