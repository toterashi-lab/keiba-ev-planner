import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const RAW_DIR = path.join(PRIVATE_DIR, "raw", "historical-odds-win-place");
const RUN_LOCK = path.join(PRIVATE_DIR, "historical-odds-run.lock");
const WORK_LOCK = path.join(PRIVATE_DIR, "historical-odds-worker.lock");
const RESULT_URL = "https://www.jra.go.jp/JRADB/accessS.html";
const ODDS_URL = "https://www.jra.go.jp/JRADB/accessO.html";
const PARSER_VERSION = "jra-historical-win-place-v1";
const USER_AGENT = "keiba-ev-planner/1.0 (personal research; low-rate official JRA historical odds fetcher)";

const command = process.argv[2] ?? "status";
const options = parseArgs(process.argv.slice(3));
const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
initializeSchema();
fs.mkdirSync(RAW_DIR, { recursive: true });

try {
  if (command === "init") {
    seedJobs();
    console.log(JSON.stringify(status(), null, 2));
  } else if (command === "run") {
    await withLock(RUN_LOCK, async () => {
      seedJobs();
      recoverInterrupted();
      const jobs = db.prepare(`select j.race_id from historical_odds_jobs j join complete_races r on r.race_id=j.race_id
        where j.status in ('queued','failed') and j.attempts<12 order by r.race_date desc,j.race_id desc limit ?`)
        .all(Number(options.limit ?? 100));
      for (const job of jobs) {
        try {
          await withLock(WORK_LOCK, () => ingest(job.race_id, Number(options.delay ?? 1500)));
        } catch (error) {
          console.error(`${job.race_id}: ${error.message}`);
        }
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
    create table if not exists historical_odds_jobs(
      race_id text primary key references races(race_id) on delete cascade,
      status text not null check(status in('queued','running','complete','failed')),
      attempts integer not null default 0,
      request_key text,
      runner_count integer not null default 0,
      win_price_count integer not null default 0,
      place_price_count integer not null default 0,
      last_error text,
      started_at text,
      completed_at text,
      updated_at text not null
    );
    create table if not exists historical_win_place_odds(
      race_id text not null references races(race_id) on delete cascade,
      horse_number integer not null,
      win_odds real check(win_odds>=1),
      place_odds_low real check(place_odds_low>=1),
      place_odds_high real check(place_odds_high>=place_odds_low),
      observed_at text not null,
      time_basis text not null default 'historical_closing_reference' check(time_basis='historical_closing_reference'),
      source_page_id integer not null references raw_pages(id),
      primary key(race_id,horse_number)
    );
    create index if not exists historical_odds_status_idx on historical_odds_jobs(status,race_id);
  `);
  addColumnIfMissing("historical_win_place_odds", "time_basis", "text not null default 'historical_closing_reference'");
}

function seedJobs() {
  const now = new Date().toISOString();
  db.prepare(`insert into historical_odds_jobs(race_id,status,updated_at)
    select race_id,'queued',? from complete_races where 1
    on conflict(race_id) do nothing`).run(now);
}

async function ingest(raceId, delayMs) {
  const now = new Date().toISOString();
  db.prepare(`update historical_odds_jobs set status='running',attempts=attempts+1,last_error=null,
    started_at=?,completed_at=null,updated_at=? where race_id=?`).run(now, now, raceId);
  try {
    const race = db.prepare(`select r.race_id,r.source_cname,r.source_page_id,p.raw_path from complete_races r
      join raw_pages p on p.id=r.source_page_id where r.race_id=?`).get(raceId);
    if (!race) throw new Error("Complete race source is missing");
    const resultHtml = fs.existsSync(path.join(PRIVATE_DIR, race.raw_path))
      ? readRaw(race.raw_path)
      : await fetchResultSource(race.source_cname, delayMs);
    const cname = resultHtml.match(/'(pw151ou[^']+)'/)?.[1];
    if (!cname) throw new Error("Official historical win/place CNAME is missing");
    const page = await fetchPage(cname, delayMs);
    const parsed = parseWinPlace(page.html);
    const expectedRows = db.prepare(`select e.horse_number,r.finish_text from complete_race_entries e
      left join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
      where e.race_id=? order by e.horse_number`).all(raceId);
    const expected = expectedRows.map((row) => row.horse_number);
    const saleEligible = expectedRows.filter((row) => !["取消", "除外"].includes(row.finish_text))
      .map((row) => row.horse_number);
    const actual = parsed.runners.map((row) => row.horseNumber).sort((left, right) => left - right);
    if (JSON.stringify(expected) !== JSON.stringify(actual)) {
      throw new Error(`Runner set mismatch: expected=${expected.length}, actual=${actual.length}`);
    }
    const priced = parsed.runners.filter((row) => row.win !== null && row.placeLow !== null && row.placeHigh !== null)
      .map((row) => row.horseNumber).sort((left, right) => left - right);
    if (JSON.stringify(saleEligible) !== JSON.stringify(priced)) {
      throw new Error(`Price coverage mismatch: saleEligible=${saleEligible.length}, priced=${priced.length}`);
    }
    const winCount = parsed.runners.filter((row) => row.win !== null).length;
    const placeCount = parsed.runners.filter((row) => row.placeLow !== null && row.placeHigh !== null).length;
    db.exec("begin immediate");
    try {
      db.prepare("delete from historical_win_place_odds where race_id=?").run(raceId);
      const insert = db.prepare("insert into historical_win_place_odds values(?,?,?,?,?,?,?,?)");
      for (const runner of parsed.runners.filter((row) => priced.includes(row.horseNumber))) {
        insert.run(raceId, runner.horseNumber, runner.win, runner.placeLow, runner.placeHigh,
          page.fetchedAt, "historical_closing_reference", page.id);
      }
      db.prepare("update raw_pages set parsed_at=? where id=?").run(new Date().toISOString(), page.id);
      const completedAt = new Date().toISOString();
      db.prepare(`update historical_odds_jobs set status='complete',request_key=?,runner_count=?,
        win_price_count=?,place_price_count=?,completed_at=?,updated_at=? where race_id=?`)
        .run(cname, saleEligible.length, winCount, placeCount, completedAt, completedAt, raceId);
      db.exec("commit");
    } catch (error) {
      db.exec("rollback");
      throw error;
    }
  } catch (error) {
    const failedAt = new Date().toISOString();
    db.prepare(`update historical_odds_jobs set status='failed',last_error=?,updated_at=? where race_id=?`)
      .run(String(error.stack ?? error).slice(0, 3000), failedAt, raceId);
    throw error;
  }
}

function addColumnIfMissing(table, column, definition) {
  const columns = db.prepare(`pragma table_info(${table})`).all().map((row) => row.name);
  if (!columns.includes(column)) db.exec(`alter table ${table} add column ${column} ${definition}`);
}

async function fetchResultSource(cname, delayMs) {
  await sleep(delayMs);
  const response = await fetch(RESULT_URL, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "user-agent": USER_AGENT,
      accept: "text/html,application/xhtml+xml",
    },
    body: `cname=${encodeURIComponent(cname)}`,
    signal: AbortSignal.timeout(30_000),
  });
  if (!response.ok) throw new Error(`Result source HTTP ${response.status}`);
  const html = new TextDecoder("shift_jis").decode(await response.arrayBuffer());
  if (/ＤＢ検索エラー|DB検索エラー|パラメータエラー/.test(html)) throw new Error("JRA result source returned an error page");
  return html;
}

async function fetchPage(cname, delayMs) {
  const cached = db.prepare("select * from raw_pages where request_key=?").get(cname);
  if (cached?.raw_path && fs.existsSync(path.join(PRIVATE_DIR, cached.raw_path))) {
    return { id: cached.id, html: readRaw(cached.raw_path), fetchedAt: cached.fetched_at };
  }
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
      if (!/class="odds_tan"/.test(html)) throw new Error("Historical odds table is absent");
      const canonical = Buffer.from(html, "utf8");
      const hash = crypto.createHash("sha256").update(canonical).digest("hex");
      const relative = path.join("raw", "historical-odds-win-place", `${safeName(cname)}-${hash.slice(0, 12)}.html.gz`);
      const absolute = path.join(PRIVATE_DIR, relative);
      atomicWrite(absolute, zlib.gzipSync(canonical, { level: 9 }));
      const fetchedAt = new Date().toISOString();
      const row = db.prepare(`insert into raw_pages(
        request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at
      ) values(?,?,?,?,?,200,?,?) on conflict(request_key) do update set
        page_type=excluded.page_type,source_url=excluded.source_url,payload_sha256=excluded.payload_sha256,
        raw_path=excluded.raw_path,http_status=excluded.http_status,parser_version=excluded.parser_version,
        fetched_at=excluded.fetched_at,parsed_at=null returning id`).get(
          cname, "historical-odds-win-place", ODDS_URL, hash, relative, PARSER_VERSION, fetchedAt,
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
  return { runners };
}

function status() {
  seedJobs();
  const jobs = Object.fromEntries(db.prepare("select status,count(*) count from historical_odds_jobs group by status")
    .all().map((row) => [row.status, row.count]));
  const totals = db.prepare(`select count(*) prices,count(distinct race_id) races,
    sum(case when win_odds is not null then 1 else 0 end) winPrices,
    sum(case when place_odds_low is not null and place_odds_high is not null then 1 else 0 end) placePrices
    from historical_win_place_odds`).get();
  const coverage = db.prepare(`select
    sum(case when j.status='complete' and j.runner_count=j.win_price_count
      and (select count(*) from historical_win_place_odds o where o.race_id=j.race_id)=j.runner_count then 1 else 0 end) completeWinRaces,
    sum(case when j.status='complete' and j.runner_count=j.win_price_count and j.runner_count=j.place_price_count
      and (select count(*) from historical_win_place_odds o where o.race_id=j.race_id
        and o.win_odds is not null and o.place_odds_low is not null and o.place_odds_high is not null)=j.runner_count then 1 else 0 end) completeWinPlaceRaces,
    sum(case when j.status='complete' and j.request_key like 'kaggle:%' and j.runner_count=j.win_price_count
      and j.place_price_count=0 and not exists(select 1 from historical_win_place_odds o
        where o.race_id=j.race_id and (o.win_odds is null or o.place_odds_low is not null or o.place_odds_high is not null)) then 1 else 0 end) auditedWinOnlyRaces
    from historical_odds_jobs j`).get();
  const total = Object.values(jobs).reduce((sum, value) => sum + value, 0);
  return {
    jobs,
    totalRaces: total,
    completeRaces: jobs.complete ?? 0,
    pendingRaces: (jobs.queued ?? 0) + (jobs.running ?? 0) + (jobs.failed ?? 0),
    progressPercent: total ? 100 * (jobs.complete ?? 0) / total : 0,
    coverage,
    ...totals,
  };
}

function audit() {
  const invalidComplete = db.prepare(`select count(*) count from historical_odds_jobs j where j.status='complete' and (
    j.runner_count<>j.win_price_count
    or (select count(*) from historical_win_place_odds o where o.race_id=j.race_id)<>j.runner_count
    or (j.runner_count<>j.place_price_count and not (
      j.request_key like 'kaggle:%' and j.place_price_count=0
      and not exists(select 1 from historical_win_place_odds o where o.race_id=j.race_id
        and (o.win_odds is null or o.place_odds_low is not null or o.place_odds_high is not null))
    )))`).get().count;
  const invalidPrices = db.prepare(`select count(*) count from historical_win_place_odds
    where win_odds<1 or place_odds_low<1 or place_odds_high<place_odds_low`).get().count;
  const unauditedMissingPlace = db.prepare(`select count(*) count from historical_win_place_odds o
    join historical_odds_jobs j on j.race_id=o.race_id
    where (o.place_odds_low is null or o.place_odds_high is null)
      and not (j.request_key like 'kaggle:%' and j.place_price_count=0)`).get().count;
  return { pass: invalidComplete === 0 && invalidPrices === 0 && unauditedMissingPlace === 0,
    invalidComplete, invalidPrices, unauditedMissingPlace, ...status() };
}

function requeueMissingRaw() {
  const rows = db.prepare(`select j.race_id,min(p.raw_path) raw_path from historical_odds_jobs j
    left join historical_win_place_odds o on o.race_id=j.race_id
    left join raw_pages p on p.id=o.source_page_id
    where j.status='complete' group by j.race_id`).all();
  const missing = rows.filter((row) => !row.raw_path || !fs.existsSync(path.join(PRIVATE_DIR, row.raw_path)));
  const now = new Date().toISOString();
  const update = db.prepare(`update historical_odds_jobs set status='queued',attempts=0,
    last_error='Raw odds archive repair required',updated_at=? where race_id=? and status='complete'`);
  let queued = 0;
  db.exec("begin immediate");
  try {
    for (const row of missing) queued += Number(update.run(now, row.race_id).changes);
    db.exec("commit");
  } catch (error) { db.exec("rollback"); throw error; }
  return { status: queued ? "repair_queued" : "complete", checkedCompleteRaces: rows.length,
    missingRawRaces: missing.length, queuedRaces: queued };
}

function recoverInterrupted() {
  const now = new Date().toISOString();
  db.prepare(`update historical_odds_jobs set status='queued',attempts=max(0,attempts-1),
    last_error='Recovered interrupted worker',updated_at=? where status='running'`).run(now);
}

async function withLock(lockPath, task) {
  let handle;
  let acquired = false;
  try {
    handle = acquireLock(lockPath);
    acquired = true;
    fs.writeFileSync(handle, JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }));
    return await task();
  } finally {
    if (handle !== undefined) fs.closeSync(handle);
    if (acquired) fs.rmSync(lockPath, { force: true });
  }
}

function acquireLock(lockPath) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      return fs.openSync(lockPath, "wx");
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      const owner = readLockOwner(lockPath);
      if (owner?.pid && isProcessAlive(owner.pid)) {
        throw new Error(`Historical odds lock is owned by live pid ${owner.pid}: ${lockPath}`);
      }
      fs.rmSync(lockPath, { force: true });
    }
  }
  throw new Error(`Historical odds lock could not be acquired: ${lockPath}`);
}

function readLockOwner(lockPath) {
  try { return JSON.parse(fs.readFileSync(lockPath, "utf8")); } catch { return null; }
}

function isProcessAlive(pid) {
  try { process.kill(Number(pid), 0); return true; } catch { return false; }
}

function readRaw(relative) {
  return zlib.gunzipSync(fs.readFileSync(path.join(PRIVATE_DIR, relative))).toString("utf8");
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

function safeName(value) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 140);
}

function atomicWrite(filePath, contents) {
  const partial = `${filePath}.${process.pid}.partial`;
  fs.writeFileSync(partial, contents);
  fs.renameSync(partial, filePath);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
