import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const CSV_RELATIVE_PATH = path.join("imports", "kaggle-jra", "19860105-20210731_race_result.csv");
const CSV_PATH = path.join(PRIVATE_DIR, CSV_RELATIVE_PATH);
const REPORT_PATH = path.join(PRIVATE_DIR, "models", "kaggle-historical-win-odds-import.json");
const SOURCE_URL = "https://www.kaggle.com/datasets/takamotoki/jra-horse-racing-dataset";
const SOURCE_NAME = "takamotoki/JRA Horse Racing Dataset";
const LICENSE = "CC BY 4.0";
const PARSER_VERSION = "kaggle-jra-runner-win-odds-v1";
const FROM_DATE = "1996-01-01";
const TO_DATE = "1999-12-31";

const command = process.argv[2] ?? "status";
if (!fs.existsSync(DB_PATH)) throw new Error(`Database was not found: ${DB_PATH}`);
const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
initializeSchema();

try {
  if (command === "import") await importRows();
  else if (command === "audit") audit(true);
  else if (command === "status") audit(false);
  else throw new Error("Commands: import, audit, status");
} finally {
  db.close();
}

function initializeSchema() {
  db.exec(`create table if not exists historical_odds_external_sources(
    source_name text primary key,
    source_url text not null,
    license text not null,
    payload_sha256 text not null,
    raw_path text not null,
    parser_version text not null,
    target_from text not null,
    target_to text not null,
    imported_at text not null,
    matched_races integer not null,
    matched_prices integer not null,
    rejected_races integer not null
  )`);
}

async function importRows() {
  if (!fs.existsSync(CSV_PATH)) throw new Error(`Source CSV was not found: ${CSV_PATH}`);
  const expected = loadExpectedRaces();
  const sourceRows = new Map();
  const input = fs.createReadStream(CSV_PATH);
  const lines = readline.createInterface({ input, crlfDelay: Infinity });
  let indexes;
  let scannedRows = 0;
  let targetRows = 0;

  for await (const line of lines) {
    scannedRows += 1;
    const cells = parseCsvLine(line);
    if (!indexes) {
      indexes = requiredIndexes(cells);
      continue;
    }
    const raceDate = cells[indexes.raceDate];
    if (raceDate < FROM_DATE || raceDate > TO_DATE) continue;
    targetRows += 1;
    const raceId = `${raceDate.replaceAll("-", "")}-${cells[indexes.venue].padStart(2, "0")}-${cells[indexes.raceNo].padStart(2, "0")}`;
    const horseNumber = Number(cells[indexes.horseNumber]);
    const winOdds = Number(cells[indexes.winOdds]);
    if (!expected.has(raceId) || !Number.isInteger(horseNumber) || horseNumber < 1 || !Number.isFinite(winOdds) || winOdds < 1) continue;
    const race = sourceRows.get(raceId) ?? new Map();
    race.set(horseNumber, winOdds);
    sourceRows.set(raceId, race);
  }

  const accepted = [];
  const rejected = [];
  for (const [raceId, expectedHorses] of expected) {
    const prices = sourceRows.get(raceId) ?? new Map();
    const expectedNumbers = [...expectedHorses].sort((left, right) => left - right);
    const actualNumbers = [...prices.keys()].sort((left, right) => left - right);
    if (JSON.stringify(expectedNumbers) === JSON.stringify(actualNumbers)) accepted.push({ raceId, prices });
    else rejected.push({ raceId, expected: expectedNumbers.length, actual: actualNumbers.length });
  }

  const payloadSha256 = await hashFile(CSV_PATH);
  const importedAt = new Date().toISOString();
  const rawPageId = upsertRawPage(payloadSha256, importedAt);
  const insertOdds = db.prepare(`insert into historical_win_place_odds(
    race_id,horse_number,win_odds,place_odds_low,place_odds_high,observed_at,source_page_id
  ) values(?,?,?,null,null,?,?)
  on conflict(race_id,horse_number) do update set
    win_odds=excluded.win_odds,observed_at=excluded.observed_at,source_page_id=excluded.source_page_id`);
  const completeJob = db.prepare(`update historical_odds_jobs set status='complete',request_key=?,runner_count=?,
    win_price_count=?,place_price_count=0,last_error=null,completed_at=?,updated_at=? where race_id=?`);

  db.exec("begin immediate");
  try {
    db.prepare(`delete from historical_win_place_odds where race_id in (
      select race_id from complete_races where race_date between ? and ?
    )`).run(FROM_DATE, TO_DATE);
    let priceCount = 0;
    for (const { raceId, prices } of accepted) {
      for (const [horseNumber, winOdds] of prices) {
        insertOdds.run(raceId, horseNumber, winOdds, importedAt, rawPageId);
        priceCount += 1;
      }
      completeJob.run(`kaggle:${payloadSha256}`, prices.size, prices.size, importedAt, importedAt, raceId);
    }
    db.prepare(`insert into historical_odds_external_sources values(?,?,?,?,?,?,?,?,?,?,?,?)
      on conflict(source_name) do update set source_url=excluded.source_url,license=excluded.license,
      payload_sha256=excluded.payload_sha256,raw_path=excluded.raw_path,parser_version=excluded.parser_version,
      target_from=excluded.target_from,target_to=excluded.target_to,imported_at=excluded.imported_at,
      matched_races=excluded.matched_races,matched_prices=excluded.matched_prices,rejected_races=excluded.rejected_races`)
      .run(SOURCE_NAME, SOURCE_URL, LICENSE, payloadSha256, CSV_RELATIVE_PATH, PARSER_VERSION,
        FROM_DATE, TO_DATE, importedAt, accepted.length, priceCount, rejected.length);
    db.exec("commit");
  } catch (error) {
    db.exec("rollback");
    throw error;
  }

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  const report = { version: PARSER_VERSION, importedAt, source: SOURCE_NAME, sourceUrl: SOURCE_URL, license: LICENSE,
    payloadSha256, from: FROM_DATE, to: TO_DATE, scannedRows, targetRows, expectedRaces: expected.size,
    matchedRaces: accepted.length, matchedPrices: accepted.reduce((sum, row) => sum + row.prices.size, 0),
    rejectedRaces: rejected.length, rejected: rejected.slice(0, 100) };
  fs.writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  audit(true);
}

function audit(failOnError) {
  const expected = db.prepare(`select count(*) races from complete_races where race_date between ? and ?`).get(FROM_DATE, TO_DATE).races;
  const actual = db.prepare(`select count(distinct o.race_id) races,count(*) prices from historical_win_place_odds o
    join complete_races r on r.race_id=o.race_id where r.race_date between ? and ? and o.win_odds is not null`).get(FROM_DATE, TO_DATE);
  const incomplete = db.prepare(`select count(*) count from historical_odds_jobs j join complete_races r on r.race_id=j.race_id
    where r.race_date between ? and ? and j.status<>'complete'`).get(FROM_DATE, TO_DATE).count;
  const mismatches = db.prepare(`select count(*) count from complete_races r where r.race_date between ? and ? and (
    (select count(*) from complete_race_entries e join complete_race_results x on x.race_id=e.race_id and x.horse_id=e.horse_id
      where e.race_id=r.race_id and coalesce(x.finish_text,'') not in ('取消','除外'))
    <>(select count(*) from historical_win_place_odds o where o.race_id=r.race_id and o.win_odds is not null)
  )`).get(FROM_DATE, TO_DATE).count;
  const source = db.prepare("select * from historical_odds_external_sources where source_name=?").get(SOURCE_NAME) ?? null;
  const pass = expected > 0 && actual.races === expected && incomplete === 0 && mismatches === 0
    && source?.license === LICENSE && source?.payload_sha256?.length === 64;
  const result = { pass, from: FROM_DATE, to: TO_DATE, expectedRaces: expected, pricedRaces: actual.races,
    prices: actual.prices, incompleteJobs: incomplete, runnerSetMismatches: mismatches, source };
  console.log(JSON.stringify(result, null, 2));
  if (!pass && failOnError) process.exitCode = 2;
}

function loadExpectedRaces() {
  const rows = db.prepare(`select r.race_id,e.horse_number from complete_races r
    join complete_race_entries e on e.race_id=r.race_id
    join complete_race_results x on x.race_id=e.race_id and x.horse_id=e.horse_id
    where r.race_date between ? and ? and coalesce(x.finish_text,'') not in ('取消','除外')
    order by r.race_id,e.horse_number`).all(FROM_DATE, TO_DATE);
  const races = new Map();
  for (const row of rows) {
    const horses = races.get(row.race_id) ?? new Set();
    horses.add(row.horse_number);
    races.set(row.race_id, horses);
  }
  return races;
}

function upsertRawPage(payloadSha256, importedAt) {
  const requestKey = `dataset:${SOURCE_NAME}:${payloadSha256}`;
  const existing = db.prepare("select id from raw_pages where request_key=?").get(requestKey);
  if (existing) return existing.id;
  return db.prepare(`insert into raw_pages(request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at,parsed_at)
    values(?,?,?,?,?,200,?,?,?) returning id`).get(requestKey, "dataset-historical-win-odds", SOURCE_URL,
      payloadSha256, CSV_RELATIVE_PATH, PARSER_VERSION, importedAt, importedAt).id;
}

function requiredIndexes(header) {
  const names = { raceDate: "レース日付", venue: "競馬場コード", raceNo: "レース番号", horseNumber: "馬番", winOdds: "単勝" };
  const indexes = Object.fromEntries(Object.entries(names).map(([key, name]) => [key, header.indexOf(name)]));
  const missing = Object.entries(indexes).filter(([, index]) => index < 0).map(([key]) => key);
  if (missing.length) throw new Error(`Required CSV columns are missing: ${missing.join(",")}`);
  return indexes;
}

function parseCsvLine(line) {
  const cells = [];
  let value = "";
  let quoted = false;
  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    if (character === '"') {
      if (quoted && line[index + 1] === '"') { value += '"'; index += 1; }
      else quoted = !quoted;
    } else if (character === "," && !quoted) {
      cells.push(value);
      value = "";
    } else value += character;
  }
  cells.push(value);
  return cells;
}

async function hashFile(filePath) {
  const hash = crypto.createHash("sha256");
  for await (const chunk of fs.createReadStream(filePath)) hash.update(chunk);
  return hash.digest("hex");
}
