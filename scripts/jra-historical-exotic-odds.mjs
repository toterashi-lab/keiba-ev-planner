import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";
import { parseExoticOdds } from "./jra-free-exotic-odds.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const RAW_DIR = path.join(PRIVATE_DIR, "raw");
const RUN_LOCK = path.join(PRIVATE_DIR, "historical-exotic-odds-run.lock");
const ODDS_URL = "https://www.jra.go.jp/JRADB/accessO.html";
const RESULT_URL = "https://www.jra.go.jp/JRADB/accessS.html";
const PARSER_VERSION = "jra-historical-exotic-odds-v1";
const USER_AGENT = "keiba-ev-planner/1.0 (personal research; low-rate official JRA historical exotic odds fetcher)";
const TYPE_BY_PREFIX = Object.freeze({ pw154ou: "quinella", pw155ou: "wide", pw156ou: "exacta", pw157ou: "trio", pw158ou: "trifecta" });
const TYPES = Object.values(TYPE_BY_PREFIX);

const command = process.argv[2] ?? "status";
const options = parseArgs(process.argv.slice(3));
const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");

try {
  initializeSchema();
  if (command === "init") {
    recoverInterrupted();
    console.log(JSON.stringify(status(), null, 2));
  } else if (command === "run") {
    await withLock(async () => {
      recoverInterrupted();
      const races = db.prepare(`select distinct j.race_id from historical_exotic_odds_jobs j
        join complete_races r on r.race_id=j.race_id
        where j.status in ('queued','failed') and j.attempts<12
        order by r.race_date desc,j.race_id desc limit ?`).all(Number(options.limit ?? 100));
      for (const race of races) {
        try { await ingestRace(race.race_id, Number(options.delay ?? 2500)); }
        catch (error) { console.error(`${race.race_id}: ${error.message}`); }
      }
    });
    console.log(JSON.stringify(status(), null, 2));
  } else if (command === "audit") {
    const report = audit();
    console.log(JSON.stringify(report, null, 2));
    if (!report.pass) process.exitCode = 2;
  } else if (command === "repair-raw") {
    console.log(JSON.stringify(requeueMissingRaw(), null, 2));
  } else if (command === "status") {
    console.log(JSON.stringify(status(), null, 2));
  } else {
    throw new Error("Commands: init, run, audit, repair-raw, status");
  }
} finally {
  db.close();
}

function initializeSchema() {
  db.exec(`
    create table if not exists historical_exotic_odds_jobs(
      race_id text not null,bet_type text not null,status text not null,
      attempts integer not null default 0,request_key text,price_count integer not null default 0,
      last_error text,started_at text,completed_at text,updated_at text not null,
      primary key(race_id,bet_type)
    );
    create table if not exists historical_exotic_odds(
      race_id text not null,bet_type text not null,selection_key text not null,
      odds_low real not null,odds_high real not null,observed_at text not null,
      time_basis text not null default 'historical_closing_reference' check(time_basis='historical_closing_reference'),source_page_id integer not null,
      primary key(race_id,bet_type,selection_key)
    );
    create index if not exists historical_exotic_jobs_status_idx on historical_exotic_odds_jobs(status,race_id,bet_type);
  `);
  addColumnIfMissing("historical_exotic_odds", "time_basis", "text not null default 'historical_closing_reference'");
}

async function ingestRace(raceId, delayMs) {
  const race = db.prepare(`select r.race_id,r.source_cname,r.source_page_id,p.raw_path
    from complete_races r join raw_pages p on p.id=r.source_page_id where r.race_id=?`).get(raceId);
  if (!race) throw new Error("Complete race source is missing");
  const pending = db.prepare(`select bet_type from historical_exotic_odds_jobs
    where race_id=? and status in ('queued','failed') and attempts<12 order by bet_type`).all(raceId);
  if (!pending.length) return;

  const resultHtml = fs.existsSync(path.join(PRIVATE_DIR, race.raw_path))
    ? readRaw(race.raw_path)
    : await fetchAndRestoreRaceSource(race, delayMs);
  const winPlaceCname = resultHtml.match(/['"](pw151ou[^'"\s)]+)['"]/)?.[1];
  if (!winPlaceCname) throw new Error("Official win/place odds link is missing");
  const winPlaceHtml = loadCachedWinPlace(raceId) ?? (await fetchPage(ODDS_URL, winPlaceCname, delayMs)).html;
  const cnames = new Map([...winPlaceHtml.matchAll(/['"](pw15(?:4|5|6|7|8)ou[^'"\s)]+)['"]/g)]
    .map((match) => [TYPE_BY_PREFIX[match[1].slice(0, 7)], match[1]]).filter(([type]) => type));
  const startedAt = new Date().toISOString();

  for (const { bet_type: betType } of pending) {
    db.prepare(`update historical_exotic_odds_jobs set status='running',attempts=attempts+1,
      last_error=null,started_at=?,completed_at=null,updated_at=? where race_id=? and bet_type=?`)
      .run(startedAt, startedAt, raceId, betType);
    try {
      const cname = cnames.get(betType);
      if (!cname) throw new Error(`Official ${betType} odds link is missing`);
      const fetched = await fetchPage(ODDS_URL, cname, delayMs);
      const parsed = parseExoticOdds(fetched.html, cname);
      if (parsed.betType !== betType || !parsed.prices.length) throw new Error(`Parsed market mismatch: ${betType}`);
      const unique = new Set(parsed.prices.map((row) => row.selectionKey));
      if (unique.size !== parsed.prices.length) throw new Error(`Duplicate selections: ${parsed.prices.length - unique.size}`);
      if (parsed.prices.some((row) => row.oddsLow < 1 || row.oddsHigh < row.oddsLow)) throw new Error("Invalid odds range");
      const sourcePageId = saveRaw(cname, betType, fetched);
      db.exec("begin immediate");
      try {
        db.prepare("delete from historical_exotic_odds where race_id=? and bet_type=?").run(raceId, betType);
        const insert = db.prepare("insert into historical_exotic_odds values(?,?,?,?,?,?,?,?)");
        for (const row of parsed.prices) insert.run(raceId, betType, row.selectionKey, row.oddsLow, row.oddsHigh, fetched.fetchedAt, "historical_closing_reference", sourcePageId);
        const completedAt = new Date().toISOString();
        db.prepare(`update historical_exotic_odds_jobs set status='complete',request_key=?,price_count=?,
          completed_at=?,updated_at=? where race_id=? and bet_type=?`)
          .run(`historical-exotic:${cname}`, parsed.prices.length, completedAt, completedAt, raceId, betType);
        db.exec("commit");
      } catch (error) { db.exec("rollback"); throw error; }
    } catch (error) {
      const failedAt = new Date().toISOString();
      db.prepare(`update historical_exotic_odds_jobs set status='failed',last_error=?,updated_at=?
        where race_id=? and bet_type=?`).run(String(error.stack ?? error).slice(0, 3000), failedAt, raceId, betType);
    }
  }
}

function addColumnIfMissing(table, column, definition) {
  const columns = db.prepare(`pragma table_info(${table})`).all().map((row) => row.name);
  if (!columns.includes(column)) db.exec(`alter table ${table} add column ${column} ${definition}`);
}

async function fetchAndRestoreRaceSource(race, delayMs) {
  const fetched = await fetchPage(RESULT_URL, race.source_cname, delayMs);
  const canonical = Buffer.from(fetched.html, "utf8");
  const hash = crypto.createHash("sha256").update(canonical).digest("hex");
  const relative = path.join("raw", "race", `${safeName(race.source_cname)}-${hash.slice(0, 12)}.html.gz`);
  atomicWrite(path.join(PRIVATE_DIR, relative), zlib.gzipSync(canonical, { level: 9 }));
  db.prepare(`update raw_pages set payload_sha256=?,raw_path=?,http_status=200,parser_version=?,fetched_at=?
    where id=?`).run(hash, relative, PARSER_VERSION, fetched.fetchedAt, race.source_page_id);
  return fetched.html;
}

async function fetchPage(url, cname, delayMs) {
  await sleep(delayMs);
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url, { method: "POST", headers: {
        "content-type": "application/x-www-form-urlencoded", "user-agent": USER_AGENT, accept: "text/html,application/xhtml+xml",
      }, body: `cname=${encodeURIComponent(cname)}`, signal: AbortSignal.timeout(30_000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = new TextDecoder("shift_jis").decode(await response.arrayBuffer());
      if (!/<title>[^<]*JRA/i.test(html)) throw new Error("Unexpected JRA response");
      return { html, fetchedAt: new Date().toISOString() };
    } catch (error) {
      lastError = error;
      if (attempt < 4) await sleep(Math.min(30_000, 2 ** attempt * 1000));
    }
  }
  throw new Error(`Fetch failed ${cname}: ${lastError?.message}`);
}

function saveRaw(cname, betType, fetched) {
  const canonical = Buffer.from(fetched.html, "utf8");
  const hash = crypto.createHash("sha256").update(canonical).digest("hex");
  const relative = path.join("raw", `historical-odds-${betType}`, `${safeName(cname)}-${hash.slice(0, 12)}.html.gz`);
  atomicWrite(path.join(PRIVATE_DIR, relative), zlib.gzipSync(canonical, { level: 9 }));
  return db.prepare(`insert into raw_pages(request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at,parsed_at)
    values(?,?,?,?,?,200,?,?,?) on conflict(request_key) do update set payload_sha256=excluded.payload_sha256,
    raw_path=excluded.raw_path,http_status=200,parser_version=excluded.parser_version,fetched_at=excluded.fetched_at,
    parsed_at=excluded.parsed_at returning id`).get(`historical-exotic:${cname}`, `historical-odds-${betType}`,
      ODDS_URL, hash, relative, PARSER_VERSION, fetched.fetchedAt, new Date().toISOString()).id;
}

function status() {
  const jobs = Object.fromEntries(db.prepare("select status,count(*) count from historical_exotic_odds_jobs group by status")
    .all().map((row) => [row.status, row.count]));
  const byType = Object.fromEntries(db.prepare(`select bet_type,count(distinct race_id) races,count(*) prices
    from historical_exotic_odds group by bet_type`).all().map((row) => [row.bet_type, { races: row.races, prices: row.prices }]));
  const total = Object.values(jobs).reduce((sum, value) => sum + value, 0);
  return { jobs, totalJobs: total, completeJobs: jobs.complete ?? 0,
    pendingJobs: (jobs.queued ?? 0) + (jobs.running ?? 0) + (jobs.failed ?? 0),
    progressPercent: total ? 100 * (jobs.complete ?? 0) / total : 0, byType };
}

function audit() {
  const invalidComplete = db.prepare(`select count(*) count from historical_exotic_odds_jobs j
    where j.status='complete' and (j.price_count<=0 or
      (select count(*) from historical_exotic_odds o where o.race_id=j.race_id and o.bet_type=j.bet_type)<>j.price_count)`).get().count;
  const invalidPrices = db.prepare(`select count(*) count from historical_exotic_odds
    where odds_low<1 or odds_high<odds_low or selection_key=''`).get().count;
  const report = status();
  return { pass: invalidComplete === 0 && invalidPrices === 0,
    invalidComplete, invalidPrices, sourceCoverageFrom: "2020-04-12", ...report };
}

function requeueMissingRaw() {
  const rows = db.prepare(`select j.race_id,j.bet_type,min(p.raw_path) raw_path
    from historical_exotic_odds_jobs j
    left join historical_exotic_odds o on o.race_id=j.race_id and o.bet_type=j.bet_type
    left join raw_pages p on p.id=o.source_page_id
    where j.status='complete' group by j.race_id,j.bet_type`).all();
  const missing = rows.filter((row) => !row.raw_path || !fs.existsSync(path.join(PRIVATE_DIR, row.raw_path)));
  const now = new Date().toISOString();
  const update = db.prepare(`update historical_exotic_odds_jobs set status='queued',attempts=0,
    last_error='Raw exotic odds archive repair required',updated_at=?
    where race_id=? and bet_type=? and status='complete'`);
  let queued = 0;
  db.exec("begin immediate");
  try {
    for (const row of missing) queued += Number(update.run(now, row.race_id, row.bet_type).changes);
    db.exec("commit");
  } catch (error) { db.exec("rollback"); throw error; }
  return { status: queued ? "repair_queued" : "complete", checkedCompleteJobs: rows.length,
    missingRawJobs: missing.length, queuedJobs: queued };
}

function recoverInterrupted() {
  const now = new Date().toISOString();
  db.prepare(`update historical_exotic_odds_jobs set status='queued',attempts=max(0,attempts-1),
    last_error='Recovered interrupted worker',updated_at=? where status='running'`).run(now);
}

async function withLock(task) {
  let handle;
  let acquired = false;
  try {
    handle = acquireLock(RUN_LOCK);
    acquired = true;
    fs.writeFileSync(handle, JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }));
    return await task();
  } finally {
    if (handle !== undefined) fs.closeSync(handle);
    if (acquired) fs.rmSync(RUN_LOCK, { force: true });
  }
}

function acquireLock(lockPath) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try { return fs.openSync(lockPath, "wx"); }
    catch (error) {
      if (error.code !== "EEXIST") throw error;
      const owner = readLockOwner(lockPath);
      if (owner?.pid && isProcessAlive(owner.pid)) throw new Error(`Historical exotic odds lock is owned by live pid ${owner.pid}`);
      fs.rmSync(lockPath, { force: true });
    }
  }
  throw new Error(`Historical exotic odds lock could not be acquired: ${lockPath}`);
}

function readLockOwner(lockPath) { try { return JSON.parse(fs.readFileSync(lockPath, "utf8")); } catch { return null; } }
function isProcessAlive(pid) { try { process.kill(Number(pid), 0); return true; } catch { return false; } }

function readRaw(relative) { return zlib.gunzipSync(fs.readFileSync(path.join(PRIVATE_DIR, relative))).toString("utf8"); }
function loadCachedWinPlace(raceId) {
  const row = db.prepare(`select p.raw_path from historical_win_place_odds o
    join raw_pages p on p.id=o.source_page_id where o.race_id=? limit 1`).get(raceId);
  return row?.raw_path && fs.existsSync(path.join(PRIVATE_DIR, row.raw_path)) ? readRaw(row.raw_path) : null;
}
function safeName(value) { return value.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 140); }
function atomicWrite(filePath, contents) { fs.mkdirSync(path.dirname(filePath), { recursive: true }); const partial = `${filePath}.${process.pid}.partial`; fs.writeFileSync(partial, contents); fs.renameSync(partial, filePath); }
function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }
function parseArgs(args) { const parsed = {}; for (let index = 0; index < args.length; index += 1) if (args[index].startsWith("--")) parsed[args[index].slice(2)] = args[index + 1]?.startsWith("--") ? true : args[++index] ?? true; return parsed; }
