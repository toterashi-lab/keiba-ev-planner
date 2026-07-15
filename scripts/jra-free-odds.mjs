import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";
import { isPreRaceObservation } from "./race-time.mjs";

const ODDS_URL = "https://www.jra.go.jp/JRADB/accessO.html";
const LANDING_CNAME = "pw15oli00/6D";
const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = path.join(ROOT, "data", "jra-free-private");
const RAW_DIR = path.join(PRIVATE_DIR, "raw", "odds");
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const LOCK_PATH = path.join(PRIVATE_DIR, "odds.lock");
const USER_AGENT = "keiba-ev-planner/1.0 (personal research; low-rate official JRA odds fetcher)";
const PARSER_VERSION = "jra-odds-html-v1";

const command = process.argv[2] ?? "status";
const options = parseArgs(process.argv.slice(3));
const delayMs = Number(options.delay ?? 1500);
const liveMode = options.live === true || options.live === "true";
const liveSnapshotKind = liveMode ? String(options["snapshot-kind"] ?? "pre_race") : "closing_final";
const liveWindowMinutes = Number(options["window-minutes"] ?? 0);
const targetDates = new Set(String(options.dates ?? options.date ?? "")
  .split(",").map((value) => value.trim()).filter(Boolean));

fs.mkdirSync(RAW_DIR, { recursive: true });
let db;
if (command === "available") {
  if (!targetDates.size) throw new Error("--date YYYY-MM-DD is required");
  const count = await availableMeetingCount();
  console.log(JSON.stringify({ dates: [...targetDates], meetingCount: count }));
  if (count === 0) process.exitCode = 3;
} else {
  db = new DatabaseSync(DB_PATH);
  db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=10000;");
  initializeSchema();
  try {
    if (command === "capture") {
      await withLock(captureWinPlace);
    } else if (command === "audit") {
      const result = auditOdds();
      console.log(JSON.stringify(result, null, 2));
      if (!result.pass) process.exitCode = 2;
    } else if (command === "status") {
      console.log(JSON.stringify(statusReport(), null, 2));
    } else {
      throw new Error("Commands: available, capture, audit, status");
    }
  } finally {
    db.close();
  }
}

function initializeSchema() {
  db.exec(`
    create table if not exists odds_ingestion_batches (
      id integer primary key,
      source text not null,
      snapshot_kind text not null,
      target_dates text not null,
      status text not null check(status in ('running','complete','failed')),
      meeting_count integer not null default 0,
      race_count integer not null default 0,
      source_runner_count integer not null default 0,
      priced_runner_count integer not null default 0,
      started_at text not null,
      completed_at text,
      last_error text
    );
    create table if not exists odds_quality_checks (
      batch_id integer not null references odds_ingestion_batches(id) on delete cascade,
      check_name text not null,
      status text not null check(status in ('pass','fail')),
      actual_value integer,
      details text not null,
      checked_at text not null,
      primary key(batch_id, check_name)
    );
    create table if not exists odds_market_totals (
      batch_id integer not null references odds_ingestion_batches(id) on delete cascade,
      race_id text not null references races(race_id),
      bet_type text not null,
      vote_count integer not null check(vote_count >= 0),
      source_page_id integer not null references raw_pages(id),
      primary key(batch_id, race_id, bet_type)
    );
    create table if not exists live_odds_snapshots(
      id integer primary key,race_id text not null,bet_type text not null,selection_key text not null,
      odds real not null,odds_low real not null,odds_high real not null,snapshot_kind text not null,
      observed_at text not null,source_page_id integer not null,batch_id integer not null,
      unique(race_id,bet_type,selection_key,observed_at)
    );
    create table if not exists live_odds_market_totals(
      batch_id integer not null,race_id text not null,bet_type text not null,vote_count integer not null,
      source_page_id integer not null,primary key(batch_id,race_id,bet_type)
    );
  `);
  addColumnIfMissing("odds_snapshots", "odds_low", "real");
  addColumnIfMissing("odds_snapshots", "odds_high", "real");
  addColumnIfMissing("odds_snapshots", "snapshot_kind", "text");
  addColumnIfMissing("odds_snapshots", "batch_id", "integer references odds_ingestion_batches(id)");
  if (db.prepare("select count(*) count from sqlite_master where type='table' and name='live_races'").get().count) {
    addColumnIfMissing("live_races", "direction", "text");
    addColumnIfMissing("live_races", "weather", "text");
    addColumnIfMissing("live_races", "going", "text");
  }
  db.exec("create index if not exists odds_batch_idx on odds_snapshots(batch_id, race_id, bet_type)");
  upsertMetadata("odds_source", "JRA official odds");
  upsertMetadata("odds_source_url", ODDS_URL);
  upsertMetadata("odds_parser_version", PARSER_VERSION);
}

async function captureWinPlace() {
  if (!targetDates.size) throw new Error("--dates YYYY-MM-DD[,YYYY-MM-DD] is required");
  const startedAt = new Date().toISOString();
  const batch = db.prepare(`insert into odds_ingestion_batches(
    source,snapshot_kind,target_dates,status,started_at
  ) values(?,?,?,'running',?) returning id`).get(
    liveMode ? (liveSnapshotKind === "pre_race" ? "JRA official live odds" : "JRA official live odds fixture") : "JRA official odds", liveSnapshotKind,
    [...targetDates].sort().join(","), startedAt,
  );

  try {
    const landing = await fetchPage(LANDING_CNAME, "odds-index");
    const meetingCnames = parseCnames(landing.html, "pw15orl").filter((cname) => {
      const key = parseMeetingKey(cname);
      return key && targetDates.has(key.raceDate);
    });
    if (!meetingCnames.length) throw new Error("Official odds index has no meetings for requested dates");

    let raceCount = 0;
    let sourceRunnerCount = 0;
    let pricedRunnerCount = 0;
    let runnerSetMismatches = 0;
    let unmappedRaces = 0;
    let invalidOdds = 0;
    const seenRaceIds = new Set();

    for (const meetingCname of meetingCnames) {
      const meetingPage = await fetchPage(meetingCname, "odds-meeting");
      const raceCnames = parseCnames(meetingPage.html, "pw151ou");
      if (!raceCnames.length) throw new Error(`No win/place pages in ${meetingCname}`);
      for (const raceCname of raceCnames) {
        const key = parseRaceKey(raceCname);
        if (!key || !targetDates.has(key.raceDate) || seenRaceIds.has(key.raceId)) continue;
        seenRaceIds.add(key.raceId);
        const race = db.prepare(`select race_id${liveMode ? ",race_date,start_time" : ""} from ${liveMode ? "live_races" : "complete_races"} where race_id=?`).get(key.raceId);
        if (!race) {
          if (!liveMode) unmappedRaces += 1;
          continue;
        }
        if (liveMode && liveWindowMinutes > 0 && !withinWindow(race, liveWindowMinutes)) continue;

        const page = await fetchPage(raceCname, "odds-win-place");
        const parsed = parseWinPlace(page.html);
        const expectedNumbers = db.prepare(`select horse_number from ${liveMode ? "live_entries" : "complete_race_entries"}
          where race_id=? order by horse_number`).all(key.raceId).map((row) => row.horse_number);
        const sourceNumbers = parsed.runners.map((runner) => runner.horseNumber).sort((a, b) => a - b);
        if (JSON.stringify(expectedNumbers) !== JSON.stringify(sourceNumbers)) runnerSetMismatches += 1;

        db.exec("begin immediate");
        try {
          const observedAt = page.fetchedAt;
          if (liveMode) {
            const conditions = parseRaceConditions(page.html);
            db.prepare(`update live_races set direction=coalesce(?,direction),weather=coalesce(?,weather),going=coalesce(?,going),
              observed_at=case when ? is not null or ? is not null or ? is not null then ? else observed_at end where race_id=?`).run(
                conditions.direction, conditions.weather, conditions.going,
                conditions.direction, conditions.weather, conditions.going, observedAt, key.raceId,
              );
          }
          for (const runner of parsed.runners) {
            sourceRunnerCount += 1;
            if (runner.win !== null) {
              saveOdds(batch.id, key.raceId, "win", String(runner.horseNumber), runner.win, runner.win,
                observedAt, page.id);
              pricedRunnerCount += 1;
            }
            if (runner.placeLow !== null && runner.placeHigh !== null) {
              saveOdds(batch.id, key.raceId, "place", String(runner.horseNumber), runner.placeLow,
                runner.placeHigh, observedAt, page.id);
            }
            if ((runner.win !== null && runner.win < 1) || (runner.placeLow !== null &&
              (runner.placeLow < 1 || runner.placeHigh < runner.placeLow))) invalidOdds += 1;
          }
          for (const [betType, voteCount] of Object.entries(parsed.voteCounts)) {
            db.prepare(`insert into ${liveMode ? "live_odds_market_totals" : "odds_market_totals"} values(?,?,?,?,?)
              on conflict(batch_id,race_id,bet_type) do update set
              vote_count=excluded.vote_count,source_page_id=excluded.source_page_id`).run(
                batch.id, key.raceId, betType, voteCount, page.id,
              );
          }
          db.prepare("update raw_pages set parsed_at=? where id=?").run(new Date().toISOString(), page.id);
          db.exec("commit");
        } catch (error) {
          db.exec("rollback");
          throw error;
        }
        raceCount += 1;
      }
      db.prepare("update raw_pages set parsed_at=? where id=?").run(new Date().toISOString(), meetingPage.id);
    }
    db.prepare("update raw_pages set parsed_at=? where id=?").run(new Date().toISOString(), landing.id);

    const expectedRaceRows = db.prepare(`select race_date${liveMode ? ",start_time" : ""} from ${liveMode ? "live_races" : "complete_races"}
      where race_date in (${[...targetDates].map(() => "?").join(",")})`).all(...targetDates);
    const expectedRaceCount = liveMode && liveWindowMinutes > 0
      ? expectedRaceRows.filter((race) => withinWindow(race, liveWindowMinutes)).length
      : expectedRaceRows.length;
    if (liveMode && expectedRaceCount === 0) {
      db.prepare("delete from odds_ingestion_batches where id=?").run(batch.id);
      console.log(JSON.stringify({ status: "no_upcoming_races", dates: [...targetDates], windowMinutes: liveWindowMinutes }));
      return;
    }
    const checks = [
      ["meeting_pages_present", meetingCnames.length > 0, meetingCnames.length, "expected>0"],
      ["race_coverage", raceCount === expectedRaceCount, raceCount, `expected=${expectedRaceCount}`],
      ["race_mapping", unmappedRaces === 0, unmappedRaces, "expected=0"],
      ["runner_set_match", runnerSetMismatches === 0, runnerSetMismatches, "expected=0"],
      ["priced_runners_present", pricedRunnerCount > 0, pricedRunnerCount, "expected>0"],
      ["odds_domain", invalidOdds === 0, invalidOdds, "expected=0"],
    ];
    if (liveMode) {
      const timingRows = db.prepare(`select s.observed_at,r.race_date,r.start_time from live_odds_snapshots s
        join live_races r on r.race_id=s.race_id where s.batch_id=?`).all(batch.id);
      const invalidTiming = timingRows.filter((row) => !isPreRaceObservation(row.race_date, row.start_time, row.observed_at)).length;
      checks.push(["pre_race_observation_time", invalidTiming === 0, invalidTiming, "expected=0"]);
    }
    saveChecks(batch.id, checks);
    if (!checks.every((check) => check[1])) {
      throw new Error(`Odds quality gate failed: ${checks.filter((check) => !check[1]).map((check) => check[0]).join(", ")}`);
    }
    const completedAt = new Date().toISOString();
    db.prepare(`update odds_ingestion_batches set status='complete',meeting_count=?,race_count=?,
      source_runner_count=?,priced_runner_count=?,completed_at=? where id=?`).run(
        meetingCnames.length, raceCount, sourceRunnerCount, pricedRunnerCount, completedAt, batch.id,
      );
    console.log(JSON.stringify({ batchId: batch.id, ...statusReport() }, null, 2));
  } catch (error) {
    db.prepare(`update odds_ingestion_batches set status='failed',last_error=?,completed_at=? where id=?`).run(
      String(error.stack ?? error).slice(0, 4000), new Date().toISOString(), batch.id,
    );
    throw error;
  }
}

async function availableMeetingCount() {
  await sleep(delayMs);
  const response = await fetch(ODDS_URL, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": USER_AGENT,
      accept: "text/html,application/xhtml+xml",
    },
    body: `cname=${encodeURIComponent(LANDING_CNAME)}`,
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Official odds availability probe failed: HTTP ${response.status}`);
  const html = new TextDecoder("shift_jis").decode(await response.arrayBuffer());
  return parseCnames(html, "pw15orl").filter((cname) => {
    const key = parseMeetingKey(cname);
    return key && targetDates.has(key.raceDate);
  }).length;
}

async function fetchPage(cname, pageType) {
  await sleep(delayMs);
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(ODDS_URL, {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "user-agent": USER_AGENT,
          accept: "text/html,application/xhtml+xml",
        },
        body: `cname=${encodeURIComponent(cname)}`,
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = new TextDecoder("shift_jis").decode(await response.arrayBuffer());
      if (!/<title>[^<]*JRA/i.test(html)) throw new Error("Unexpected JRA response");
      const canonical = Buffer.from(html, "utf8");
      const hash = crypto.createHash("sha256").update(canonical).digest("hex");
      const relative = path.join("raw", "odds", pageType, `${safeName(cname)}-${hash.slice(0, 12)}.html.gz`);
      const absolute = path.join(PRIVATE_DIR, relative);
      fs.mkdirSync(path.dirname(absolute), { recursive: true });
      atomicWrite(absolute, zlib.gzipSync(canonical, { level: 9 }));
      const fetchedAt = new Date().toISOString();
      const requestKey = `odds:${cname}:${fetchedAt}`;
      const row = db.prepare(`insert into raw_pages(
        request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at
      ) values(?,?,?,?,?,200,?,?) returning id`).get(
        requestKey, pageType, ODDS_URL, hash, relative, PARSER_VERSION, fetchedAt,
      );
      return { id: row.id, html, fetchedAt };
    } catch (error) {
      lastError = error;
      if (attempt < 4) await sleep(Math.min(30_000, 2 ** attempt * 1000));
    }
  }
  throw new Error(`Fetch failed ${cname}: ${lastError?.message}`);
}

function parseWinPlace(html) {
  const body = [...html.matchAll(/<tbody[^>]*>([\s\S]*?)<\/tbody>/gi)][0]?.[1] ?? "";
  const runners = [];
  for (const match of body.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const row = match[1];
    const horseNumber = numberOrNull(stripHtml(cell(row, "num")));
    if (horseNumber === null) continue;
    const win = numberOrNull(stripHtml(cell(row, "odds_tan")));
    const placeCell = cell(row, "odds_fuku");
    const placeLow = numberOrNull(stripHtml(placeCell.match(/class="min"[^>]*>([\s\S]*?)<\/span>/i)?.[1]));
    const placeHigh = numberOrNull(stripHtml(placeCell.match(/class="max"[^>]*>([\s\S]*?)<\/span>/i)?.[1]));
    runners.push({ horseNumber, win, placeLow, placeHigh });
  }
  if (!runners.length) throw new Error("Win/place table has no runner rows");
  const voteCounts = {};
  for (const match of html.matchAll(/<th[^>]*scope="row"[^>]*>([\s\S]*?)<\/th>\s*<td[^>]*>([\s\S]*?)<\/td>/gi)) {
    const label = stripHtml(match[1]);
    const count = numberOrNull(stripHtml(match[2]));
    if (label === "単勝" && count !== null) voteCounts.win = count;
    if (label === "複勝" && count !== null) voteCounts.place = count;
  }
  return { runners, voteCounts };
}

function parseRaceConditions(html) {
  const fullText = stripHtml(html);
  const course = stripHtml(html.match(/<div class="cell course">([\s\S]*?)<\/div>/i)?.[1] ?? "");
  return {
    direction: course.match(/(右|左|直線)/)?.[1] ?? null,
    weather: stripHtml(html.match(/<li class="weather">([\s\S]*?)<\/li>/i)?.[1] ?? "").replace(/^天候/, "")
      || (fullText.match(/天候([晴曇雨雪小雨小雪]+?)(?:芝|ダート|障害|馬場)/)?.[1] ?? null),
    going: stripHtml(html.match(/<li class="(?:turf|durt|dirt)">([\s\S]*?)<\/li>/i)?.[1] ?? "").replace(/^(?:芝|ダート|馬場)/, "")
      || (fullText.match(/(?:芝|ダート|馬場)(良|稍重|重|不良)/)?.[1] ?? null),
  };
}

function saveOdds(batchId, raceId, betType, selectionKey, low, high, observedAt, sourcePageId) {
  if (liveMode) {
    db.prepare(`insert into live_odds_snapshots(race_id,bet_type,selection_key,odds,odds_low,odds_high,snapshot_kind,observed_at,source_page_id,batch_id)
      values(?,?,?,?,?,?,?,?,?,?)`).run(raceId, betType, selectionKey, low, low, high, liveSnapshotKind, observedAt, sourcePageId, batchId);
    return;
  }
  db.prepare(`insert into odds_snapshots(
    race_id,bet_type,selection_key,odds,observed_at,source_page_id,odds_low,odds_high,snapshot_kind,batch_id
  ) values(?,?,?,?,?,?,?,?,?,?)`).run(
    raceId, betType, selectionKey, low, observedAt, sourcePageId, low, high, "closing_final", batchId,
  );
}

function saveChecks(batchId, checks) {
  const now = new Date().toISOString();
  const insert = db.prepare("insert or replace into odds_quality_checks values(?,?,?,?,?,?)");
  for (const [name, pass, value, details] of checks) {
    insert.run(batchId, name, pass ? "pass" : "fail", value, details, now);
  }
}

function auditOdds() {
  const failedChecks = db.prepare(`select count(*) count from odds_quality_checks q
    join odds_ingestion_batches b on b.id=q.batch_id where b.status='complete' and q.status='fail'`).get().count;
  const incompleteBatches = db.prepare(`select count(*) count from odds_ingestion_batches b
    where b.status='complete' and (select count(*) from odds_quality_checks q
      where q.batch_id=b.id and q.status='pass') < 6`).get().count;
  const invalidRanges = db.prepare(`select count(*) count from odds_snapshots
    where batch_id is not null and (odds_low < 1 or odds_high < odds_low or odds <> odds_low)`).get().count;
  const invalidLiveRanges = db.prepare(`select count(*) count from live_odds_snapshots
    where odds_low < 1 or odds_high < odds_low or odds <> odds_low`).get().count;
  let missingRaw = 0;
  let corruptRaw = 0;
  for (const row of db.prepare("select raw_path,payload_sha256 from raw_pages where parser_version=?").all(PARSER_VERSION)) {
    const absolute = path.join(PRIVATE_DIR, row.raw_path);
    if (!fs.existsSync(absolute)) { missingRaw += 1; continue; }
    try {
      const canonical = zlib.gunzipSync(fs.readFileSync(absolute));
      if (crypto.createHash("sha256").update(canonical).digest("hex") !== row.payload_sha256) corruptRaw += 1;
    } catch { corruptRaw += 1; }
  }
  return {
    pass: failedChecks === 0 && incompleteBatches === 0 && invalidRanges === 0 && invalidLiveRanges === 0 && missingRaw === 0 && corruptRaw === 0,
    failedChecks, incompleteBatches, invalidRanges, invalidLiveRanges, missingRaw, corruptRaw, ...statusReport(),
  };
}

function statusReport() {
  const batches = Object.fromEntries(db.prepare(`select status,count(*) count from odds_ingestion_batches
    group by status`).all().map((row) => [row.status, row.count]));
  const totals = db.prepare(`select
    (select count(*) from odds_snapshots where batch_id is not null) snapshots,
    (select count(distinct race_id) from odds_snapshots where batch_id is not null) races,
    (select count(*) from odds_snapshots where batch_id is not null and bet_type='win') winPrices,
    (select count(*) from odds_snapshots where batch_id is not null and bet_type='place') placePrices,
    (select count(*) from odds_market_totals) marketTotals,
    (select count(*) from live_odds_snapshots) liveSnapshots,
    (select count(distinct race_id) from live_odds_snapshots) liveRaces,
    (select count(*) from live_odds_market_totals) liveMarketTotals`).get();
  return { database: DB_PATH, parserVersion: PARSER_VERSION, batches, ...totals };
}

function parseMeetingKey(cname) {
  const match = cname.match(/^pw15orl10(\d{2})(\d{4})(\d{2})(\d{2})(\d{8})\/[0-9A-F]{2}$/);
  return match ? { raceDate: isoDate(match[5]) } : null;
}

function parseRaceKey(cname) {
  const match = cname.match(/^pw151ou10(\d{2})(\d{4})(\d{2})(\d{2})(\d{2})(\d{8})Z\/[0-9A-F]{2}$/);
  if (!match) return null;
  return { raceId: `${match[6]}-${match[1]}-${match[5]}`, raceDate: isoDate(match[6]) };
}

function parseCnames(html, prefix) {
  const regex = new RegExp(`(?:CNAME=|['"])(` + prefix + `[^'"&\\s)]+)`, "g");
  return [...new Set([...html.matchAll(regex)].map((match) => match[1]))];
}

async function withLock(task) {
  let handle;
  try {
    handle = fs.openSync(LOCK_PATH, "wx");
  } catch (error) {
    if (error.code !== "EEXIST") throw error;
    const owner = readLockOwner();
    if (owner?.pid && isProcessAlive(owner.pid)) throw new Error(`Another worker owns lock (pid=${owner.pid})`);
    fs.rmSync(LOCK_PATH, { force: true });
    handle = fs.openSync(LOCK_PATH, "wx");
  }
  fs.writeFileSync(handle, JSON.stringify({ pid: process.pid, task: "odds", startedAt: new Date().toISOString() }));
  try { return await task(); }
  finally { fs.closeSync(handle); fs.rmSync(LOCK_PATH, { force: true }); }
}

function addColumnIfMissing(table, column, definition) {
  if (!db.prepare(`pragma table_info(${table})`).all().some((row) => row.name === column)) {
    db.exec(`alter table ${table} add column ${column} ${definition}`);
  }
}

function upsertMetadata(key, value) {
  db.prepare(`insert into metadata values(?,?,?) on conflict(key) do update set
    value=excluded.value,updated_at=excluded.updated_at`).run(key, value, new Date().toISOString());
}

function cell(row, className) {
  return row.match(new RegExp(`<td[^>]*class="${className}"[^>]*>([\\s\\S]*?)<\\/td>`, "i"))?.[1] ?? "";
}

function stripHtml(value) {
  return String(value ?? "").replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function numberOrNull(value) {
  const normalized = String(value ?? "").replaceAll(",", "").replace(/[^\d.+-]/g, "").trim();
  if (!normalized) return null;
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function parseArgs(args) {
  const parsed = {};
  for (let index = 0; index < args.length; index += 1) {
    if (!args[index].startsWith("--")) continue;
    parsed[args[index].slice(2)] = args[index + 1]?.startsWith("--") ? true : args[++index] ?? true;
  }
  return parsed;
}

function readLockOwner() {
  try { return JSON.parse(fs.readFileSync(LOCK_PATH, "utf8")); } catch { return null; }
}

function isProcessAlive(pid) {
  try { process.kill(Number(pid), 0); return true; } catch { return false; }
}

function safeName(value) { return value.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 140); }
function isoDate(value) { return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`; }
function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function withinWindow(race, minutes) {
  const start = new Date(`${race.race_date}T${race.start_time}:00+09:00`).getTime();
  const now = Date.now();
  return start >= now && start <= now + minutes * 60000;
}
function atomicWrite(filePath, contents) {
  const partial = `${filePath}.${process.pid}.partial`;
  fs.writeFileSync(partial, contents);
  fs.renameSync(partial, filePath);
}
