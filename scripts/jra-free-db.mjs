import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { DatabaseSync } from "node:sqlite";

const BASE_URL = "https://www.jra.go.jp/JRADB/accessS.html";
const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = path.join(ROOT, "data", "jra-free-private");
const RAW_DIR = path.join(PRIVATE_DIR, "raw");
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const LOCK_PATH = path.join(PRIVATE_DIR, "worker.lock");
const RUN_LOCK_PATH = path.join(PRIVATE_DIR, "backfill-run.lock");
const SYNC_REQUEST_PATH = path.join(PRIVATE_DIR, "current-sync.request");
const USER_AGENT = "keiba-ev-planner/1.0 (personal research; low-rate official JRA archive fetcher)";
const PARSER_VERSION = "jra-html-v1";

const command = process.argv[2] ?? "status";
const options = parseArgs(process.argv.slice(3));
const forceRefresh = options.refresh === true || options.refresh === "true";
let activeIngestMonth = null;
let lastHeartbeatAt = 0;
fs.mkdirSync(RAW_DIR, { recursive: true });

const db = new DatabaseSync(DB_PATH);
db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=5000;");
initializeSchema();

try {
  if (command === "init") {
    seedBackfillJobs(options.from ?? "1996-01", options.to ?? currentMonth());
    console.log(JSON.stringify(statusReport(), null, 2));
  } else if (command === "ingest-month") {
    const month = options.month;
    if (!/^\d{4}-\d{2}$/.test(month ?? "")) throw new Error("--month YYYY-MM is required");
    await withLock(() => ingestMonth(month, Number(options.delay ?? 1500)));
    console.log(JSON.stringify(statusReport(), null, 2));
  } else if (command === "run") {
    await withLock(() => runQueue(Number(options.limit ?? 1), Number(options.delay ?? 1500)), RUN_LOCK_PATH, { recover: false });
    console.log(JSON.stringify(statusReport(), null, 2));
  } else if (command === "sync-current") {
    fs.writeFileSync(SYNC_REQUEST_PATH, JSON.stringify({ pid: process.pid, requestedAt: new Date().toISOString() }));
    try {
      await withLock(() => ingestMonth(currentMonth(), Number(options.delay ?? 1500)), LOCK_PATH, { waitMs: 30 * 60 * 1000 });
    } finally {
      fs.rmSync(SYNC_REQUEST_PATH, { force: true });
    }
    console.log(JSON.stringify(statusReport(), null, 2));
  } else if (command === "audit") {
    const result = auditDatabase();
    console.log(JSON.stringify(result, null, 2));
    if (!result.pass) process.exitCode = 2;
  } else if (command === "lock-self-check") {
    await lockSelfCheck();
  } else if (command === "status") {
    console.log(JSON.stringify(statusReport(), null, 2));
  } else {
    throw new Error("Commands: init, ingest-month, run, sync-current, audit, lock-self-check, status");
  }
} finally {
  db.close();
}

function initializeSchema() {
  db.exec(`
    create table if not exists metadata (
      key text primary key,
      value text not null,
      updated_at text not null
    );
    create table if not exists backfill_jobs (
      month text primary key,
      status text not null check(status in ('queued','running','complete','failed')),
      attempts integer not null default 0,
      meeting_count integer not null default 0,
      race_count integer not null default 0,
      runner_count integer not null default 0,
      payout_count integer not null default 0,
      last_error text,
      started_at text,
      completed_at text,
      updated_at text not null
    );
    create table if not exists raw_pages (
      id integer primary key,
      request_key text not null unique,
      page_type text not null,
      source_url text not null,
      payload_sha256 text not null,
      raw_path text not null,
      http_status integer not null,
      parser_version text not null,
      fetched_at text not null,
      parsed_at text
    );
    create table if not exists meetings (
      meeting_id text primary key,
      race_date text not null,
      venue_code text not null,
      meeting_number integer not null,
      meeting_day integer not null,
      display_name text not null,
      source_cname text not null unique,
      source_page_id integer not null references raw_pages(id),
      updated_at text not null
    );
    create table if not exists races (
      race_id text primary key,
      meeting_id text not null references meetings(meeting_id),
      race_date text not null,
      venue_code text not null,
      race_number integer not null,
      race_name text,
      race_class text,
      surface text,
      distance_m integer,
      direction text,
      weather text,
      going text,
      start_time text,
      source_cname text not null unique,
      source_page_id integer not null references raw_pages(id),
      updated_at text not null,
      unique(race_date, venue_code, race_number)
    );
    create table if not exists horses (
      horse_id text primary key,
      name text not null,
      updated_at text not null
    );
    create table if not exists jockeys (
      jockey_id text primary key,
      name text not null,
      updated_at text not null
    );
    create table if not exists trainers (
      trainer_id text primary key,
      name text not null,
      updated_at text not null
    );
    create table if not exists race_entries (
      race_id text not null references races(race_id),
      horse_id text not null references horses(horse_id),
      gate_number integer,
      horse_number integer not null,
      sex_age text,
      carried_weight real,
      jockey_id text references jockeys(jockey_id),
      trainer_id text references trainers(trainer_id),
      body_weight integer,
      body_weight_delta integer,
      primary key(race_id, horse_id)
    );
    create table if not exists race_results (
      race_id text not null references races(race_id),
      horse_id text not null references horses(horse_id),
      finish_position integer,
      finish_text text not null,
      official_time text,
      margin text,
      corner_positions text,
      final_sectional real,
      popularity integer,
      primary key(race_id, horse_id)
    );
    create table if not exists payouts (
      race_id text not null references races(race_id),
      bet_type text not null,
      selection_key text not null,
      payout_yen integer not null,
      popularity integer,
      primary key(race_id, bet_type, selection_key)
    );
    create table if not exists quality_checks (
      month text not null,
      check_name text not null,
      status text not null check(status in ('pass','fail')),
      actual_value integer,
      details text not null,
      checked_at text not null,
      primary key(month, check_name)
    );
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
    create table if not exists odds_snapshots (
      id integer primary key,
      race_id text not null references races(race_id),
      bet_type text not null,
      selection_key text not null,
      odds real not null check(odds >= 1.0),
      odds_low real,
      odds_high real,
      snapshot_kind text,
      batch_id integer references odds_ingestion_batches(id),
      observed_at text not null,
      source_page_id integer references raw_pages(id),
      unique(race_id, bet_type, selection_key, observed_at)
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
      primary key(batch_id, race_id,bet_type)
    );
    create table if not exists model_runs (
      id integer primary key,
      model_name text not null,
      model_version text not null,
      train_start text not null,
      train_end text not null,
      validation_start text not null,
      validation_end text not null,
      metrics_json text not null,
      created_at text not null,
      unique(model_name, model_version)
    );
    create table if not exists model_quality_gates (
      model_run_id integer not null references model_runs(id),
      gate_name text not null,
      status text not null check(status in ('pass','fail','insufficient')),
      metric_value real,
      threshold_value real,
      details_json text not null,
      checked_at text not null,
      primary key(model_run_id, gate_name)
    );
    create table if not exists predictions (
      id integer primary key,
      race_id text not null references races(race_id),
      horse_id text not null references horses(horse_id),
      model_run_id integer not null references model_runs(id),
      as_of_time text not null,
      win_probability real not null check(win_probability between 0 and 1),
      unique(race_id, horse_id, model_run_id, as_of_time)
    );
    create table if not exists bet_candidates (
      id integer primary key,
      race_id text not null references races(race_id),
      horse_id text not null references horses(horse_id),
      model_run_id integer not null references model_runs(id),
      odds_snapshot_id integer not null references odds_snapshots(id),
      probability real not null,
      expected_return real not null,
      edge real not null,
      suggested_stake_yen integer not null,
      decision_status text not null,
      rationale_json text not null,
      created_at text not null
    );
    create table if not exists live_ev_candidates(
      id integer primary key,race_id text not null,snapshot_kind text not null,base_batch_id integer not null,exotic_batch_id integer not null,
      model_version text not null,calibration_status text not null,bet_type text not null,method text not null,selection_display text not null,
      ticket_key text not null,component_selection_keys_json text not null,component_odds_json text not null,
      component_market_probabilities_json text not null,component_ability_probabilities_json text not null,
      points integer not null check(points>0),total_investment_yen integer not null check(total_investment_yen=points*100),
      expected_return real not null,odds_observed_at text not null,generated_at text not null,
      unique(race_id,base_batch_id,exotic_batch_id,model_version,bet_type,method,ticket_key)
    );
    create table if not exists live_ev_evaluations(
      candidate_id integer primary key references live_ev_candidates(id) on delete cascade,
      timing_valid integer not null check(timing_valid in(0,1)),odds_age_seconds real,payout_yen integer not null,
      profit_yen integer not null,roi real not null,evaluated_at text not null
    );
    create table if not exists live_ev_validation_runs(
      id integer primary key,model_version text not null,generated_at text not null,metrics_json text not null
    );
    create index if not exists races_date_idx on races(race_date, venue_code, race_number);
    create index if not exists entries_horse_idx on race_entries(horse_id, race_id);
    create index if not exists raw_pages_type_idx on raw_pages(page_type, fetched_at);
    create view if not exists complete_meetings as
      select m.* from meetings m join backfill_jobs j on j.month=substr(m.race_date,1,7) and j.status='complete';
    create view if not exists complete_races as
      select r.* from races r join backfill_jobs j on j.month=substr(r.race_date,1,7) and j.status='complete';
    create view if not exists complete_race_entries as
      select e.* from race_entries e join complete_races r on r.race_id=e.race_id;
    create view if not exists complete_race_results as
      select x.* from race_results x join complete_races r on r.race_id=x.race_id;
    create view if not exists complete_payouts as
      select p.* from payouts p join complete_races r on r.race_id=p.race_id;
    create view if not exists complete_entry_quality as
      select e.race_id, e.horse_id,
        case when e.body_weight is not null then 1 else 0 end body_weight_available,
        case when x.popularity is not null then 1 else 0 end popularity_available,
        case when x.official_time is not null and trim(x.official_time)<>'' then 1 else 0 end official_time_available,
        case when e.jockey_id like 'NAME:%' then 0 else 1 end official_jockey_id_available,
        case when e.trainer_id like 'NAME:%' then 0 else 1 end official_trainer_id_available
      from complete_race_entries e join complete_race_results x
        on x.race_id=e.race_id and x.horse_id=e.horse_id;
  `);
  addColumnIfMissing("odds_snapshots", "odds_low", "real");
  addColumnIfMissing("odds_snapshots", "odds_high", "real");
  addColumnIfMissing("odds_snapshots", "snapshot_kind", "text");
  addColumnIfMissing("odds_snapshots", "batch_id", "integer references odds_ingestion_batches(id)");
  db.exec("create index if not exists odds_batch_idx on odds_snapshots(batch_id, race_id, bet_type)");
  upsertMetadata("source", "JRA official past race result search");
  upsertMetadata("source_url", BASE_URL);
  upsertMetadata("parser_version", PARSER_VERSION);
  upsertMetadata("raw_payload_encoding", "UTF-8 canonical HTML decoded from JRA Shift_JIS response");
  upsertMetadata("storage_scope", "local personal research; raw pages are not published");
  migrateCanonicalHashes();
}

function seedBackfillJobs(from, to) {
  const now = new Date().toISOString();
  const insert = db.prepare(`insert into backfill_jobs(month,status,updated_at)
    values(?, 'queued', ?) on conflict(month) do nothing`);
  for (const month of monthRange(from, to)) insert.run(month, now);
}

async function runQueue(limit, delayMs) {
  seedBackfillJobs(options.from ?? "1996-01", options.to ?? currentMonth());
  // Recover an interrupted month before taking the queue snapshot so it is retried first.
  await withLock(async () => {}, LOCK_PATH, { waitMs: 30 * 60 * 1000 });
  const jobs = db.prepare(`select month from backfill_jobs
    where status in ('queued','failed') and attempts < 12 order by month desc limit ?`).all(limit);
  for (const job of jobs) {
    try {
      await withLock(() => ingestMonth(job.month, delayMs));
    } catch (error) {
      console.error(`${job.month}: ${error.message}`);
    }
    await yieldToCurrentSync();
  }
}

async function yieldToCurrentSync(requestPath = SYNC_REQUEST_PATH) {
  while (fs.existsSync(requestPath)) {
    let requestedAt = 0;
    try { requestedAt = new Date(JSON.parse(fs.readFileSync(requestPath, "utf8")).requestedAt).getTime(); } catch {}
    if (!requestedAt || Date.now() - requestedAt > 35 * 60 * 1000) {
      fs.rmSync(requestPath, { force: true });
      break;
    }
    await sleep(1000);
  }
  await sleep(1000);
}

async function ingestMonth(month, delayMs) {
  const startedAt = new Date().toISOString();
  activeIngestMonth = month;
  lastHeartbeatAt = 0;
  db.prepare(`insert into backfill_jobs(month,status,updated_at) values(?, 'queued', ?)
    on conflict(month) do nothing`).run(month, startedAt);
  const previousStatus = db.prepare("select status from backfill_jobs where month=?").get(month)?.status;
  const backup = previousStatus === "complete" ? createMonthBackup(month) : null;
  if (previousStatus !== "complete") purgeNormalizedMonth(month);
  db.prepare(`update backfill_jobs set status='running', attempts=attempts+1,
    started_at=?, completed_at=null, last_error=null, updated_at=? where month=?`)
    .run(startedAt, startedAt, month);

  try {
    const search = await loadSearchIndex(delayMs);
    const compact = month.replace("-", "");
    const yyMm = compact.slice(2);
    const hash = search.hashes.get(yyMm);
    if (!hash) throw new Error(`Official month token is absent: ${month}`);
    const prefix = compact >= currentMonth().replace("-", "") ? "pw01skl00" : "pw01skl10";
    const monthCname = `${prefix}${compact}/${hash}`;
    const monthPage = await fetchPage(monthCname, "month", delayMs);
    const meetings = parseMeetings(monthPage.html);
    if (!meetings.length) throw new Error(`No official meetings found: ${month}`);

    let raceCount = 0;
    let runnerCount = 0;
    let payoutCount = 0;
    for (const meeting of meetings) {
      const meetingPage = await fetchPage(meeting.cname, "meeting", delayMs);
      const raceCnames = parseCnames(meetingPage.html, "pw01sde");
      if (!raceCnames.length) throw new Error(`No races in ${meeting.displayName}`);
      upsertMeeting(meeting, meetingPage.id);
      for (const raceCname of raceCnames) {
        const racePage = await fetchPage(raceCname, "race", delayMs);
        const parsed = parseRace(racePage.html, raceCname, meeting);
        validateRace(parsed);
        saveRace(parsed, racePage.id);
        markParsed(racePage.id);
        raceCount += 1;
        runnerCount += parsed.runners.length;
        payoutCount += parsed.payouts.length;
      }
      markParsed(meetingPage.id);
    }
    markParsed(monthPage.id);

    const audit = auditMonth(month, meetings.length, raceCount, runnerCount, payoutCount);
    if (!audit.pass) throw new Error(`Quality gate failed: ${audit.failures.join(", ")}`);
    const completedAt = new Date().toISOString();
    db.prepare(`update backfill_jobs set status='complete', meeting_count=?, race_count=?,
      runner_count=?, payout_count=?, completed_at=?, updated_at=? where month=?`)
      .run(meetings.length, raceCount, runnerCount, payoutCount, completedAt, completedAt, month);
    activeIngestMonth = null;
    dropMonthBackup();
  } catch (error) {
    const failedAt = new Date().toISOString();
    if (backup) {
      restoreMonthBackup(month, backup);
      db.prepare(`update backfill_jobs set last_error=?, updated_at=? where month=?`)
        .run(`Refresh failed; previous complete snapshot restored. ${String(error.stack ?? error).slice(0, 3500)}`, failedAt, month);
    } else {
      purgeNormalizedMonth(month);
      db.prepare(`update backfill_jobs set status='failed', last_error=?, updated_at=? where month=?`)
        .run(String(error.stack ?? error).slice(0, 4000), failedAt, month);
    }
    activeIngestMonth = null;
    throw error;
  }
}

async function loadSearchIndex(delayMs) {
  const page = await fetchPage("pw01skl00999999/B3", "search-index", delayMs);
  const hashes = new Map([...page.html.matchAll(/objParam\["(\d{4})"\]="([0-9A-F]{2})"/g)]
    .map((match) => [match[1], match[2]]));
  if (hashes.size < 400 || !hashes.has("9601")) {
    throw new Error(`Official search token map is incomplete: ${hashes.size}`);
  }
  markParsed(page.id);
  return { ...page, hashes };
}

async function fetchPage(cname, pageType, delayMs) {
  touchWorkerHeartbeat();
  const cached = db.prepare(`select id, raw_path from raw_pages
    where request_key=? and parser_version=?`).get(cname, PARSER_VERSION);
  const refreshable = forceRefresh && (pageType === "search-index" || pageType === "month");
  if (!refreshable && cached && fs.existsSync(path.join(PRIVATE_DIR, cached.raw_path))) {
    const html = zlib.gunzipSync(fs.readFileSync(path.join(PRIVATE_DIR, cached.raw_path))).toString("utf8");
    if (!isJraErrorPage(html)) return { id: cached.id, html };
  }

  await sleep(delayMs);
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(BASE_URL, {
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
      const bytes = await response.arrayBuffer();
      const html = new TextDecoder("shift_jis").decode(bytes);
      if (isJraErrorPage(html)) {
        throw new Error("JRA returned an application error page with HTTP 200");
      }
      const canonicalBytes = Buffer.from(html, "utf8");
      const hash = crypto.createHash("sha256").update(canonicalBytes).digest("hex");
      const relative = path.join("raw", pageType, `${safeName(cname)}-${hash.slice(0, 12)}.html.gz`);
      const absolute = path.join(PRIVATE_DIR, relative);
      fs.mkdirSync(path.dirname(absolute), { recursive: true });
      atomicWrite(absolute, zlib.gzipSync(canonicalBytes, { level: 9 }));
      const fetchedAt = new Date().toISOString();
      const result = db.prepare(`insert into raw_pages(
        request_key,page_type,source_url,payload_sha256,raw_path,http_status,parser_version,fetched_at
      ) values(?,?,?,?,?,200,?,?) on conflict(request_key) do update set
        page_type=excluded.page_type, source_url=excluded.source_url,
        payload_sha256=excluded.payload_sha256, raw_path=excluded.raw_path,
        http_status=excluded.http_status, parser_version=excluded.parser_version,
        fetched_at=excluded.fetched_at, parsed_at=null returning id`).get(
        cname, pageType, BASE_URL, hash, path.relative(PRIVATE_DIR, absolute), PARSER_VERSION, fetchedAt,
      );
      if (cached?.raw_path && cached.raw_path !== path.relative(PRIVATE_DIR, absolute)) {
        fs.rmSync(path.join(PRIVATE_DIR, cached.raw_path), { force: true });
      }
      return { id: result.id, html };
    } catch (error) {
      lastError = error;
      if (attempt < 4) await sleep(Math.min(30_000, 2 ** attempt * 1000));
    }
  }
  throw new Error(`Fetch failed ${cname}: ${lastError?.message}`);
}

function parseMeetings(html) {
  const meetings = [];
  for (const match of html.matchAll(/<a[^>]*onclick="[^"]*'(pw01srl[^']+)'[^"]*"[^>]*>([\s\S]*?)<\/a>/g)) {
    const cname = match[1];
    const key = parseMeetingKey(cname);
    if (!key) continue;
    meetings.push({ ...key, cname, displayName: stripHtml(match[2]) });
  }
  return uniqueBy(meetings, (meeting) => meeting.cname);
}

function isJraErrorPage(html) {
  const title = stripHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  return /ＤＢ検索エラー|DB検索エラー|パラメータエラー|ご指定のページが見つかりません/.test(`${title} ${html}`);
}

function parseMeetingKey(cname) {
  const match = cname.match(/^pw01srl10(\d{2})(\d{4})(\d{2})(\d{2})(\d{8})\/[0-9A-F]{2}$/);
  if (!match) return null;
  return {
    meetingId: `${match[2]}-${match[1]}-${match[3]}-${match[4]}`,
    venueCode: match[1],
    year: Number(match[2]),
    meetingNumber: Number(match[3]),
    meetingDay: Number(match[4]),
    raceDate: isoDate(match[5]),
  };
}

function parseCnames(html, prefix) {
  const regex = new RegExp(`(?:CNAME=|['"])(` + prefix + `[^'"&\\s)]+)`, "g");
  return [...new Set([...html.matchAll(regex)].map((match) => match[1]))];
}

function parseRace(html, cname, meeting) {
  const key = parseRaceKey(cname);
  if (!key) throw new Error(`Invalid race key: ${cname}`);
  const header = html.match(/<div class="race_header[\s\S]*?<\/div>\s*<\/div>/)?.[0] ?? html;
  const raceName = stripHtml(
    html.match(/<span class="race_name">([\s\S]*?)<\/span>/)?.[1]
      ?? header.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1]
      ?? "",
  );
  const condition = stripHtml(
    html.match(/<div class="type">([\s\S]*?)<div class="cell course">/)?.[1]
      ?? header.match(/<div class="race_data_02">([\s\S]*?)<\/div>/)?.[1]
      ?? "",
  );
  const course = stripHtml(
    html.match(/<div class="cell course">([\s\S]*?)<\/div>/)?.[1]
      ?? header.match(/コース[：:]?([\s\S]*?)<\/li>/)?.[1]
      ?? "",
  );
  const fullText = stripHtml(header);
  const distance = Number((course.match(/([\d,]+)\s*メートル/)?.[1] ?? "").replaceAll(",", "")) || null;
  const surface = /障害/.test(course) ? "障害" : /芝/.test(course) ? "芝" : /ダート/.test(course) ? "ダート" : null;
  const runners = parseRunners(html);
  return {
    ...key,
    meetingId: meeting.meetingId,
    cname,
    raceName,
    raceClass: condition,
    surface,
    distanceM: distance,
    direction: course.match(/（([^）]*(?:右|左|直線)[^）]*)）/)?.[1] ?? null,
    weather: stripHtml(html.match(/<li class="weather">([\s\S]*?)<\/li>/)?.[1] ?? "").replace(/^天候/, "")
      || (fullText.match(/天候([晴曇雨雪小雨]+?)(?:芝|ダート|障害|馬場)/)?.[1] ?? null),
    going: stripHtml(html.match(/<li class="(?:turf|durt|dirt)">([\s\S]*?)<\/li>/)?.[1] ?? "")
      .replace(/^(?:芝|ダート|馬場)/, "")
      || (fullText.match(/(?:芝|ダート|馬場)(良|稍重|重|不良)/)?.[1] ?? null),
    startTime: fullText.match(/発走時刻\s*[：:]?\s*(\d{1,2}時\d{2}分)/)?.[1] ?? null,
    runners,
    payouts: parsePayouts(html),
  };
}

function parseRaceKey(cname) {
  const match = cname.match(/^pw01sde10(\d{2})(\d{4})(\d{2})(\d{2})(\d{2})(\d{8})\/[0-9A-F]{2}$/);
  if (!match) return null;
  return {
    raceId: `${match[6]}-${match[1]}-${match[5]}`,
    venueCode: match[1],
    raceDate: isoDate(match[6]),
    raceNumber: Number(match[5]),
  };
}

function parseRunners(html) {
  const tableBody = html.match(/<th[^>]*class="place"[^>]*>着順<\/th>[\s\S]*?<tbody>([\s\S]*?)<\/tbody>/)?.[1] ?? "";
  const runners = [];
  for (const match of tableBody.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)) {
    const row = match[1];
    const finishText = stripHtml(cell(row, "place"));
    const horseBlock = cell(row, "horse");
    const horseName = stripHtml(horseBlock);
    const horseNumber = numberOrNull(stripHtml(cell(row, "num")));
    if (!finishText || !horseName || horseNumber === null) continue;
    const horseHref = horseBlock.match(/href="([^"]*pw01dud[^"]+)"/i)?.[1] ?? "";
    const jockeyBlock = cell(row, "jockey");
    const trainerBlock = cell(row, "trainer");
    const weightText = stripHtml(cell(row, "h_weight"));
    const weightMatch = weightText.match(/(\d+)(?:\(([+-]?\d+)\))?/);
    const horseId = horseHref.match(/pw01dud([^/'"]+)/)?.[1] ?? `NAME:${horseName}`;
    const jockeyName = stripHtml(jockeyBlock);
    const trainerName = stripHtml(trainerBlock);
    runners.push({
      horseId,
      horseName,
      finishPosition: numberOrNull(finishText),
      finishText,
      gateNumber: numberOrNull(cell(row, "waku").match(/alt="枠(\d+)/)?.[1]),
      horseNumber,
      sexAge: stripHtml(cell(row, "age")),
      carriedWeight: numberOrNull(stripHtml(cell(row, "weight"))),
      jockeyId: jockeyBlock.match(/pw04kmk([^/'"]+)/)?.[1] ?? (jockeyName ? `NAME:${jockeyName}` : null),
      jockeyName,
      trainerId: trainerBlock.match(/pw05cmk([^/'"]+)/)?.[1] ?? (trainerName ? `NAME:${trainerName}` : null),
      trainerName,
      officialTime: stripHtml(cell(row, "time")),
      margin: stripHtml(cell(row, "margin")),
      cornerPositions: [...cell(row, "corner").matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
        .map((item) => numberOrNull(stripHtml(item[1]))).filter((item) => item !== null),
      finalSectional: numberOrNull(stripHtml(cell(row, "f_time"))),
      bodyWeight: weightMatch ? Number(weightMatch[1]) : null,
      bodyWeightDelta: weightMatch?.[2] ? Number(weightMatch[2]) : null,
      popularity: numberOrNull(stripHtml(cell(row, "pop"))),
    });
  }
  return runners;
}

function parsePayouts(html) {
  const area = html.match(/<div class="refund_area[\s\S]*?(?:<div class="horse_prof_area|<div class="race_attention)/)?.[0] ?? "";
  const payouts = [];
  for (const item of area.matchAll(/<li class="([^"]+)">([\s\S]*?)<\/li>/g)) {
    const block = item[2];
    const betType = stripHtml(block.match(/<dt>([\s\S]*?)<\/dt>/)?.[1] ?? item[1]);
    const linePattern = /<div class="num">([\s\S]*?)<\/div>\s*<div class="yen">([\s\S]*?)<\/div>\s*<div class="pop">([\s\S]*?)<\/div>/g;
    for (const lineMatch of block.matchAll(linePattern)) {
      const selection = stripHtml(lineMatch[1]);
      const payoutYen = numberOrNull(stripHtml(lineMatch[2]));
      const popularity = numberOrNull(stripHtml(lineMatch[3]));
      if (selection && payoutYen !== null) payouts.push({ betType, selection, payoutYen, popularity });
    }
  }
  return uniqueBy(payouts, (payout) => `${payout.betType}|${payout.selection}`);
}

function validateRace(race) {
  if (!race.raceName) throw new Error(`Race name missing: ${race.raceId}`);
  if (!race.distanceM) throw new Error(`Distance missing: ${race.raceId}`);
  if (!race.surface) throw new Error(`Surface missing: ${race.raceId}`);
  if (!race.startTime) throw new Error(`Start time missing: ${race.raceId}`);
  if (!race.runners.length) throw new Error(`Runner rows missing: ${race.raceId}`);
  const numbers = race.runners.map((runner) => runner.horseNumber);
  if (new Set(numbers).size !== numbers.length) throw new Error(`Duplicate horse numbers: ${race.raceId}`);
  if (!race.runners.some((runner) => runner.finishPosition === 1)) throw new Error(`Winner missing: ${race.raceId}`);
  if (!race.payouts.length) throw new Error(`Payouts missing: ${race.raceId}`);
}

function upsertMeeting(meeting, sourcePageId) {
  db.prepare(`insert into meetings values(?,?,?,?,?,?,?,?,?) on conflict(meeting_id) do update set
    display_name=excluded.display_name, source_cname=excluded.source_cname,
    source_page_id=excluded.source_page_id, updated_at=excluded.updated_at`).run(
    meeting.meetingId, meeting.raceDate, meeting.venueCode, meeting.meetingNumber,
    meeting.meetingDay, meeting.displayName, meeting.cname, sourcePageId, new Date().toISOString(),
  );
}

function saveRace(race, sourcePageId) {
  const now = new Date().toISOString();
  db.exec("begin immediate");
  try {
    db.prepare(`insert into races values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) on conflict(race_id) do update set
      race_name=excluded.race_name, race_class=excluded.race_class, surface=excluded.surface,
      distance_m=excluded.distance_m, direction=excluded.direction, weather=excluded.weather,
      going=excluded.going, start_time=excluded.start_time, source_page_id=excluded.source_page_id,
      updated_at=excluded.updated_at`).run(
      race.raceId, race.meetingId, race.raceDate, race.venueCode, race.raceNumber,
      race.raceName, race.raceClass, race.surface, race.distanceM, race.direction,
      race.weather, race.going, race.startTime, race.cname, sourcePageId, now,
    );
    db.prepare("delete from race_entries where race_id=?").run(race.raceId);
    db.prepare("delete from race_results where race_id=?").run(race.raceId);
    db.prepare("delete from payouts where race_id=?").run(race.raceId);
    const horseUpsert = db.prepare(`insert into horses values(?,?,?) on conflict(horse_id)
      do update set name=excluded.name, updated_at=excluded.updated_at`);
    const jockeyUpsert = db.prepare(`insert into jockeys values(?,?,?) on conflict(jockey_id)
      do update set name=excluded.name, updated_at=excluded.updated_at`);
    const trainerUpsert = db.prepare(`insert into trainers values(?,?,?) on conflict(trainer_id)
      do update set name=excluded.name, updated_at=excluded.updated_at`);
    const entryInsert = db.prepare("insert into race_entries values(?,?,?,?,?,?,?,?,?,?)");
    const resultInsert = db.prepare("insert into race_results values(?,?,?,?,?,?,?,?,?)");
    for (const runner of race.runners) {
      horseUpsert.run(runner.horseId, runner.horseName, now);
      if (runner.jockeyId && runner.jockeyName) jockeyUpsert.run(runner.jockeyId, runner.jockeyName, now);
      if (runner.trainerId && runner.trainerName) trainerUpsert.run(runner.trainerId, runner.trainerName, now);
      entryInsert.run(race.raceId, runner.horseId, runner.gateNumber, runner.horseNumber,
        runner.sexAge, runner.carriedWeight, runner.jockeyId, runner.trainerId,
        runner.bodyWeight, runner.bodyWeightDelta);
      resultInsert.run(race.raceId, runner.horseId, runner.finishPosition, runner.finishText,
        runner.officialTime, runner.margin, JSON.stringify(runner.cornerPositions),
        runner.finalSectional, runner.popularity);
    }
    const payoutInsert = db.prepare("insert into payouts values(?,?,?,?,?)");
    for (const payout of race.payouts) {
      payoutInsert.run(race.raceId, payout.betType, payout.selection, payout.payoutYen, payout.popularity);
    }
    db.exec("commit");
  } catch (error) {
    db.exec("rollback");
    throw error;
  }
}

function auditMonth(month, expectedMeetings, expectedRaces, expectedRunners, expectedPayouts) {
  const start = `${month}-01`;
  const end = nextMonth(month) + "-01";
  const actual = db.prepare(`select
    (select count(*) from meetings where race_date>=? and race_date<?) meetings,
    (select count(*) from races where race_date>=? and race_date<?) races,
    (select count(*) from race_entries e join races r on r.race_id=e.race_id where r.race_date>=? and r.race_date<?) runners,
    (select count(*) from payouts p join races r on r.race_id=p.race_id where r.race_date>=? and r.race_date<?) payouts,
    (select count(*) from races r where r.race_date>=? and r.race_date<? and
      (r.race_name is null or trim(r.race_name)='' or r.distance_m is null or r.surface is null)) missing_race_core,
    (select count(*) from race_entries e join races r on r.race_id=e.race_id where r.race_date>=? and r.race_date<? and
      (e.horse_id is null or e.horse_number is null or e.jockey_id is null or e.trainer_id is null)) missing_entry_core,
    (select count(*) from races r where r.race_date>=? and r.race_date<? and not exists
      (select 1 from race_results x where x.race_id=r.race_id and x.finish_position=1)) missing_winners,
    (select count(*) from races r where r.race_date>=? and r.race_date<? and not exists
      (select 1 from payouts p where p.race_id=r.race_id)) missing_payouts`).get(
        start,end,start,end,start,end,start,end,start,end,start,end,start,end,start,end,
      );
  const checks = [
    ["meeting_count", actual.meetings === expectedMeetings, actual.meetings, `expected=${expectedMeetings}`],
    ["race_count", actual.races === expectedRaces, actual.races, `expected=${expectedRaces}`],
    ["runner_count", actual.runners === expectedRunners, actual.runners, `expected=${expectedRunners}`],
    ["payout_count", actual.payouts === expectedPayouts, actual.payouts, `expected=${expectedPayouts}`],
    ["race_core_complete", actual.missing_race_core === 0, actual.missing_race_core, "expected=0"],
    ["entry_core_complete", actual.missing_entry_core === 0, actual.missing_entry_core, "expected=0"],
    ["winner_complete", actual.missing_winners === 0, actual.missing_winners, "expected=0"],
    ["payout_complete", actual.missing_payouts === 0, actual.missing_payouts, "expected=0"],
  ];
  const now = new Date().toISOString();
  const upsert = db.prepare(`insert into quality_checks values(?,?,?,?,?,?) on conflict(month,check_name)
    do update set status=excluded.status,actual_value=excluded.actual_value,
    details=excluded.details,checked_at=excluded.checked_at`);
  for (const [name, pass, value, details] of checks) upsert.run(month, name, pass ? "pass" : "fail", value, details, now);
  return { pass: checks.every((check) => check[1]), failures: checks.filter((check) => !check[1]).map((check) => check[0]) };
}

function auditDatabase() {
  const failedChecks = db.prepare("select count(*) count from quality_checks where status='fail'").get().count;
  const incompleteCompleteJobs = db.prepare(`select count(*) count from backfill_jobs j where status='complete' and (
    (select count(*) from quality_checks q where q.month=j.month and q.status='pass') < 8
    or exists(select 1 from quality_checks q where q.month=j.month and q.status='fail'))`).get().count;
  let missingRaw = 0;
  let corruptRaw = 0;
  for (const row of db.prepare("select raw_path,payload_sha256 from raw_pages").all()) {
    const rawPath = path.join(PRIVATE_DIR, row.raw_path);
    if (!fs.existsSync(rawPath)) {
      missingRaw += 1;
      continue;
    }
    try {
      const canonical = zlib.gunzipSync(fs.readFileSync(rawPath));
      const actualHash = crypto.createHash("sha256").update(canonical).digest("hex");
      if (actualHash !== row.payload_sha256) corruptRaw += 1;
    } catch {
      corruptRaw += 1;
    }
  }
  const orphanRaces = db.prepare(`select count(*) count from races r where not exists
    (select 1 from race_entries e where e.race_id=r.race_id)`).get().count;
  const failedOddsChecks = db.prepare(`select count(*) count from odds_quality_checks q
    join odds_ingestion_batches b on b.id=q.batch_id where b.status='complete' and q.status='fail'`).get().count;
  const incompleteOddsBatches = db.prepare(`select count(*) count from odds_ingestion_batches b
    where b.status='complete' and (select count(*) from odds_quality_checks q
      where q.batch_id=b.id and q.status='pass') < 6`).get().count;
  const invalidOddsRanges = db.prepare(`select count(*) count from odds_snapshots
    where batch_id is not null and (odds_low < 1 or odds_high < odds_low or odds <> odds_low)`).get().count;
  const invalidEvCandidates = db.prepare(`select count(*) count from live_ev_candidates where
    points<1 or total_investment_yen<>points*100 or expected_return<0 or trim(odds_observed_at)=''
    or not json_valid(component_selection_keys_json) or json_array_length(component_selection_keys_json)<>points
    or not json_valid(component_odds_json) or json_array_length(component_odds_json)<>points
    or not json_valid(component_market_probabilities_json) or json_array_length(component_market_probabilities_json)<>points
    or not json_valid(component_ability_probabilities_json) or json_array_length(component_ability_probabilities_json)<>points`).get().count;
  const orphanEvEvaluations = db.prepare(`select count(*) count from live_ev_evaluations e
    where not exists(select 1 from live_ev_candidates c where c.id=e.candidate_id)`).get().count;
  const invalidEvEvaluations = db.prepare(`select count(*) count from live_ev_evaluations e join live_ev_candidates c on c.id=e.candidate_id
    where e.payout_yen<0 or e.profit_yen<>e.payout_yen-c.total_investment_yen
    or abs(e.roi-cast(e.payout_yen as real)/c.total_investment_yen)>0.000000001
    or (e.timing_valid=1 and (e.odds_age_seconds is null or e.odds_age_seconds<0))`).get().count;
  return {
    pass: failedChecks === 0 && incompleteCompleteJobs === 0 && missingRaw === 0 && corruptRaw === 0
      && orphanRaces === 0 && failedOddsChecks === 0 && incompleteOddsBatches === 0 && invalidOddsRanges === 0
      && invalidEvCandidates === 0 && orphanEvEvaluations === 0 && invalidEvEvaluations === 0,
    failedChecks,
    incompleteCompleteJobs,
    missingRaw,
    corruptRaw,
    orphanRaces,
    failedOddsChecks,
    incompleteOddsBatches,
    invalidOddsRanges,
    invalidEvCandidates,
    orphanEvEvaluations,
    invalidEvEvaluations,
    ...statusReport(),
  };
}

function migrateCanonicalHashes() {
  const marker = db.prepare("select value from metadata where key='canonical_hash_migrated'").get();
  if (marker?.value === "1") return;
  const update = db.prepare("update raw_pages set payload_sha256=? where id=?");
  db.exec("begin immediate");
  try {
    for (const row of db.prepare("select id,raw_path from raw_pages").all()) {
      const canonical = zlib.gunzipSync(fs.readFileSync(path.join(PRIVATE_DIR, row.raw_path)));
      update.run(crypto.createHash("sha256").update(canonical).digest("hex"), row.id);
    }
    db.exec("commit");
    upsertMetadata("canonical_hash_migrated", "1");
  } catch (error) {
    db.exec("rollback");
    throw error;
  }
}

function statusReport() {
  const jobs = Object.fromEntries(db.prepare("select status,count(*) count from backfill_jobs group by status")
    .all().map((row) => [row.status, row.count]));
  const totals = db.prepare(`select
    (select count(*) from complete_meetings) meetings,
    (select count(*) from complete_races) races,
    (select count(*) from complete_race_entries) runners,
    (select count(*) from complete_payouts) payouts,
    (select count(*) from races) stagingRaces,
    (select count(*) from raw_pages) rawPages,
    (select count(*) from odds_snapshots) oddsSnapshots,
    (select count(*) from odds_ingestion_batches where status='complete') completeOddsBatches,
    (select count(*) from model_runs) modelRuns,
    (select count(*) from complete_entry_quality where body_weight_available=0) missingBodyWeightRows,
    (select count(*) from complete_entry_quality where popularity_available=0) missingPopularityRows,
    (select count(*) from complete_entry_quality where official_time_available=0) missingOfficialTimeRows`).get();
  const latestComplete = db.prepare("select max(month) month from backfill_jobs where status='complete'").get().month;
  const earliestComplete = db.prepare("select min(month) month from backfill_jobs where status='complete'").get().month;
  const activeJobs = db.prepare(`select month,attempts,started_at,updated_at from backfill_jobs
    where status='running' order by started_at`).all();
  const failedJobs = db.prepare(`select month,attempts,last_error,updated_at from backfill_jobs
    where status='failed' order by updated_at desc`).all();
  const totalJobs = Object.values(jobs).reduce((sum, count) => sum + count, 0);
  const remainingMonths = (jobs.queued ?? 0) + (jobs.running ?? 0) + (jobs.failed ?? 0);
  const recentDurations = db.prepare(`select (julianday(completed_at)-julianday(started_at))*1440 minutes
    from backfill_jobs where status='complete' and started_at is not null and completed_at is not null
    and (julianday(completed_at)-julianday(started_at))*1440 between 0.5 and 60
    order by completed_at desc limit 24`).all().map((row) => row.minutes).sort((left, right) => left - right);
  const medianMinutesPerMonth = recentDurations.length ? median(recentDurations) : null;
  const estimatedHoursRemaining = medianMinutesPerMonth == null ? null : remainingMonths * medianMinutesPerMonth / 60;
  const estimatedCompletionAt = estimatedHoursRemaining == null ? null
    : new Date(Date.now() + estimatedHoursRemaining * 60 * 60 * 1000).toISOString();
  const runLockOwner = readLockOwner(RUN_LOCK_PATH);
  const runProcessAlive = Boolean(runLockOwner?.pid && isProcessAlive(runLockOwner.pid));
  const heartbeatAgeSeconds = activeJobs.length
    ? Math.max(0, (Date.now() - new Date(activeJobs[0].updated_at).getTime()) / 1000) : null;
  const workerHealth = classifyWorkerHealth(activeJobs.length, runProcessAlive, heartbeatAgeSeconds);
  const latestModel = db.prepare("select id from model_runs order by created_at desc limit 1").get();
  const requiredGates = ["calibration", "walk_forward", "odds_coverage", "odds_freshness", "drawdown"];
  const passedGates = latestModel ? db.prepare(`select gate_name from model_quality_gates
    where model_run_id=? and status='pass'`).all(latestModel.id).map((row) => row.gate_name) : [];
  const evBacktestReady = requiredGates.every((gate) => passedGates.includes(gate));
  return {
    database: DB_PATH,
    parserVersion: PARSER_VERSION,
    jobs,
    progressPercent: totalJobs ? ((jobs.complete ?? 0) / totalJobs) * 100 : 0,
    remainingMonths,
    medianMinutesPerMonth,
    estimatedHoursRemaining,
    estimatedCompletionAt,
    workerHealth,
    workerPid: runProcessAlive ? runLockOwner.pid : null,
    heartbeatAgeSeconds,
    activeJobs,
    failedJobs,
    ...totals,
    earliestComplete,
    latestComplete,
    evBacktestGate: evBacktestReady ? "candidate" : "insufficient",
    evBacktestReason: evBacktestReady
      ? "All required model and market gates passed."
      : "Calibration, walk-forward, odds coverage/freshness, and drawdown gates have not all passed.",
  };
}

function touchWorkerHeartbeat() {
  if (!activeIngestMonth || Date.now() - lastHeartbeatAt < 15_000) return;
  const now = new Date().toISOString();
  db.prepare("update backfill_jobs set updated_at=? where month=? and status='running'").run(now, activeIngestMonth);
  lastHeartbeatAt = Date.now();
}

async function withLock(task, lockPath = LOCK_PATH, options = {}) {
  fs.mkdirSync(PRIVATE_DIR, { recursive: true });
  let handle;
  const deadline = Date.now() + Number(options.waitMs ?? 0);
  while (!handle) {
    try {
      handle = fs.openSync(lockPath, "wx");
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
      const owner = readLockOwner(lockPath);
      if (owner?.pid && isProcessAlive(owner.pid)) {
        if (Date.now() >= deadline) throw new Error(`Another worker owns ${lockPath} (pid=${owner.pid})`);
        await sleep(1000);
        continue;
      }
      fs.rmSync(lockPath, { force: true });
    }
  }
  fs.writeFileSync(handle, JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString(), lockPath }));
  try {
    if (options.recover !== false) recoverInterruptedJobs();
    return await task();
  } finally {
    fs.closeSync(handle);
    fs.rmSync(lockPath, { force: true });
  }
}

function readLockOwner(lockPath = LOCK_PATH) {
  try {
    return JSON.parse(fs.readFileSync(lockPath, "utf8"));
  } catch {
    return null;
  }
}

async function lockSelfCheck() {
  const testPath = path.join(PRIVATE_DIR, `lock-self-check-${process.pid}.lock`);
  const requestPath = path.join(PRIVATE_DIR, `sync-request-self-check-${process.pid}.json`);
  let contentionDetected = false;
  await withLock(async () => {
    try {
      await withLock(async () => {}, testPath, { recover: false, waitMs: 25 });
    } catch (error) {
      contentionDetected = String(error.message).includes("Another worker owns");
    }
  }, testPath, { recover: false });
  if (!contentionDetected) throw new Error("Lock contention was not detected");
  await withLock(async () => {}, testPath, { recover: false });
  fs.writeFileSync(requestPath, JSON.stringify({ requestedAt: new Date().toISOString() }));
  setTimeout(() => fs.rmSync(requestPath, { force: true }), 50);
  const yieldStarted = Date.now();
  await yieldToCurrentSync(requestPath);
  const yieldedMs = Date.now() - yieldStarted;
  if (yieldedMs < 900) throw new Error(`Current sync priority yield was too short: ${yieldedMs}ms`);
  const workerHealthCases = classifyWorkerHealth(0, false, null) === "idle"
    && classifyWorkerHealth(1, false, 10) === "orphaned"
    && classifyWorkerHealth(1, true, 1801) === "stalled"
    && classifyWorkerHealth(1, true, 1799) === "healthy";
  if (!workerHealthCases) throw new Error("Worker health classification failed");
  if (median([1, 2, 3]) !== 2 || median([1, 2, 3, 4]) !== 2.5) throw new Error("ETA median calculation failed");
  console.log(JSON.stringify({ status: "pass", contentionDetected, reacquiredAfterRelease: true,
    currentSyncPriorityYield: true, workerHealthCases, etaMedianCases: true, yieldedMs }));
}

function isProcessAlive(pid) {
  try {
    process.kill(Number(pid), 0);
    return true;
  } catch {
    return false;
  }
}

function median(values) {
  const middle = Math.floor(values.length / 2);
  return values.length % 2 ? values[middle] : (values[middle - 1] + values[middle]) / 2;
}

function classifyWorkerHealth(activeCount, processAlive, heartbeatAgeSeconds) {
  if (!activeCount) return "idle";
  if (!processAlive) return "orphaned";
  return heartbeatAgeSeconds > 30 * 60 ? "stalled" : "healthy";
}

function recoverInterruptedJobs() {
  const now = new Date().toISOString();
  const interrupted = db.prepare("select month from backfill_jobs where status='running'").all();
  const backupExists = db.prepare(`select count(*) count from sqlite_master
    where type='table' and name='refresh_backup_job'`).get().count === 1;
  const backupJob = backupExists ? db.prepare("select * from refresh_backup_job limit 1").get() : null;
  for (const job of interrupted) {
    if (backupJob?.month === job.month && backupJob.status === "complete") {
      restoreMonthBackup(job.month, backupJob);
    } else {
      purgeNormalizedMonth(job.month);
    }
  }
  db.prepare(`update backfill_jobs set status='queued',attempts=max(attempts-1,0),
    last_error='Previous worker stopped before the monthly quality gate completed.',
    updated_at=? where status='running' or (status='failed'
      and last_error='Previous worker stopped before the monthly quality gate completed.')`).run(now);
}

function purgeNormalizedMonth(month) {
  const start = `${month}-01`;
  const end = `${nextMonth(month)}-01`;
  db.exec("begin immediate");
  try {
    for (const table of ["payouts", "race_results", "race_entries"]) {
      db.prepare(`delete from ${table} where race_id in
        (select race_id from races where race_date>=? and race_date<?)`).run(start, end);
    }
    db.prepare("delete from races where race_date>=? and race_date<?").run(start, end);
    db.prepare("delete from meetings where race_date>=? and race_date<?").run(start, end);
    db.exec("commit");
  } catch (error) {
    db.exec("rollback");
    throw error;
  }
}

function createMonthBackup(month) {
  const start = `${month}-01`;
  const end = `${nextMonth(month)}-01`;
  dropMonthBackup();
  db.exec(`
    create table refresh_backup_job as
      select * from backfill_jobs where month='${month}';
    create table refresh_backup_meetings as
      select * from meetings where race_date>='${start}' and race_date<'${end}';
    create table refresh_backup_races as
      select * from races where race_date>='${start}' and race_date<'${end}';
    create table refresh_backup_entries as
      select e.* from race_entries e join refresh_backup_races r on r.race_id=e.race_id;
    create table refresh_backup_results as
      select x.* from race_results x join refresh_backup_races r on r.race_id=x.race_id;
    create table refresh_backup_payouts as
      select p.* from payouts p join refresh_backup_races r on r.race_id=p.race_id;
    create table refresh_backup_quality as
      select * from quality_checks where month='${month}';
  `);
  return db.prepare("select * from backfill_jobs where month=?").get(month);
}

function restoreMonthBackup(month, job) {
  purgeNormalizedMonth(month);
  db.exec("begin immediate");
  try {
    db.exec(`
      insert into meetings select * from refresh_backup_meetings;
      insert into races select * from refresh_backup_races;
      insert into race_entries select * from refresh_backup_entries;
      insert into race_results select * from refresh_backup_results;
      insert into payouts select * from refresh_backup_payouts;
    `);
    db.prepare("delete from quality_checks where month=?").run(month);
    db.exec("insert into quality_checks select * from refresh_backup_quality");
    db.prepare(`update backfill_jobs set status='complete', meeting_count=?, race_count=?,
      runner_count=?, payout_count=?, completed_at=?, updated_at=? where month=?`).run(
        job.meeting_count, job.race_count, job.runner_count, job.payout_count,
        job.completed_at, new Date().toISOString(), month,
      );
    db.exec("commit");
  } catch (error) {
    db.exec("rollback");
    throw error;
  } finally {
    dropMonthBackup();
  }
}

function dropMonthBackup() {
  for (const table of ["job", "meetings", "races", "entries", "results", "payouts", "quality"]) {
    db.exec(`drop table if exists refresh_backup_${table}`);
  }
}

function markParsed(id) {
  db.prepare("update raw_pages set parsed_at=? where id=?").run(new Date().toISOString(), id);
}

function upsertMetadata(key, value) {
  db.prepare(`insert into metadata values(?,?,?) on conflict(key) do update set
    value=excluded.value,updated_at=excluded.updated_at`).run(key, value, new Date().toISOString());
}

function addColumnIfMissing(table, column, definition) {
  if (!db.prepare(`pragma table_info(${table})`).all().some((row) => row.name === column)) {
    db.exec(`alter table ${table} add column ${column} ${definition}`);
  }
}

function cell(row, className) {
  return row.match(new RegExp(`<td[^>]*class="${className}"[^>]*>([\\s\\S]*?)<\\/td>`))?.[1] ?? "";
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

function safeName(value) {
  return value.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 140);
}

function isoDate(compact) {
  return `${compact.slice(0, 4)}-${compact.slice(4, 6)}-${compact.slice(6, 8)}`;
}

function currentMonth() {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit" })
    .formatToParts(new Date());
  return `${parts.find((part) => part.type === "year").value}-${parts.find((part) => part.type === "month").value}`;
}

function nextMonth(month) {
  const [year, value] = month.split("-").map(Number);
  return value === 12 ? `${year + 1}-01` : `${year}-${String(value + 1).padStart(2, "0")}`;
}

function monthRange(from, to) {
  const values = [];
  for (let month = from; month <= to; month = nextMonth(month)) values.push(month);
  return values;
}

function parseArgs(args) {
  const parsed = {};
  for (let index = 0; index < args.length; index += 1) {
    const item = args[index];
    if (!item.startsWith("--")) continue;
    parsed[item.slice(2)] = args[index + 1]?.startsWith("--") ? true : args[++index] ?? true;
  }
  return parsed;
}

function uniqueBy(values, key) {
  return [...new Map(values.map((value) => [key(value), value])).values()];
}

function atomicWrite(filePath, contents) {
  const partial = `${filePath}.${process.pid}.partial`;
  fs.writeFileSync(partial, contents);
  fs.renameSync(partial, filePath);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
