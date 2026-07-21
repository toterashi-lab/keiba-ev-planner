import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const DB_PATH = path.join(PRIVATE_DIR, "keiba.sqlite");
const OUTPUT_PATH = path.join(PRIVATE_DIR, "models", "live-ev-validation.json");
const UNIT_STAKE_YEN = 100;
const MAX_ODDS_AGE_SECONDS = 300;
const INITIAL_BANKROLL_YEN = 100_000;

export function evaluateLiveEvLedger(options = {}) {
  const database = options.database ?? new DatabaseSync(options.databasePath ?? DB_PATH);
  const ownsDatabase = !options.database;
  database.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  try {
    initializeSchema(database);
    const liveRacesAvailable = hasTable(database, "live_races");
    const candidateRows = database.prepare(`select c.*,r.race_date,${liveRacesAvailable ? "lr.start_time" : "null as start_time"}
      from live_ev_candidates c
      join complete_races r on r.race_id=c.race_id
      ${liveRacesAvailable ? "left join live_races lr on lr.race_id=c.race_id" : ""}
      where c.snapshot_kind='pre_race' order by c.race_id,c.generated_at,c.id`).all();
    const raceIds = [...new Set(candidateRows.map((row) => row.race_id))];
    const payoutRows = raceIds.length ? database.prepare(`select race_id,bet_type,selection_key,payout_yen
      from complete_payouts where race_id in (${raceIds.map(() => "?").join(",")})`).all(...raceIds) : [];
    const payoutsByRace = groupPayouts(payoutRows);
    const evaluatedAt = new Date().toISOString();
    const evaluations = [];
    const insert = database.prepare(`insert into live_ev_evaluations(
      candidate_id,timing_valid,odds_age_seconds,payout_yen,profit_yen,roi,evaluated_at
    ) values(?,?,?,?,?,?,?) on conflict(candidate_id) do update set
      timing_valid=excluded.timing_valid,odds_age_seconds=excluded.odds_age_seconds,payout_yen=excluded.payout_yen,
      profit_yen=excluded.profit_yen,roi=excluded.roi,evaluated_at=excluded.evaluated_at`);
    database.exec("begin immediate");
    try {
      for (const row of candidateRows) {
        const racePayouts = payoutsByRace.get(row.race_id);
        if (!racePayouts?.size) continue;
        const evaluation = evaluateCandidate(row, racePayouts, evaluatedAt);
        insert.run(row.id, evaluation.timingValid ? 1 : 0, evaluation.oddsAgeSeconds,
          evaluation.payoutYen, evaluation.profitYen, evaluation.roi, evaluatedAt);
        evaluations.push(evaluation);
      }
      database.exec("commit");
    } catch (error) {
      database.exec("rollback");
      throw error;
    }

    const recommendations = selectRecommendations(evaluations);
    const metrics = summarizeStrategy(recommendations);
    const byBetType = Object.fromEntries([...new Set(evaluations.map((row) => row.betType))].map((betType) => [
      betType, summarizeStrategy(selectRecommendations(evaluations.filter((row) => row.betType === betType))),
    ]));
    const resultedRaces = new Set(evaluations.map((row) => row.raceId)).size;
    const timelyRaces = new Set(evaluations.filter((row) => row.timingValid && row.oddsAgeSeconds <= MAX_ODDS_AGE_SECONDS).map((row) => row.raceId)).size;
    const coverage = resultedRaces ? timelyRaces / resultedRaces : 0;
    const report = {
      status: recommendations.length ? "evaluated" : "insufficient",
      generatedAt: evaluatedAt,
      policy: {
        strategy: "latest-within-five-minutes-highest-positive-ev-per-race",
        unitStakeYen: UNIT_STAKE_YEN,
        maximumOddsAgeSeconds: MAX_ODDS_AGE_SECONDS,
        initialBankrollYen: INITIAL_BANKROLL_YEN,
        confidenceInterval: "race-day-block-bootstrap-2000",
        modelRequirement: "research_pass",
      },
      coverage: { resultedRaces, timelyRaces, ratio: coverage },
      storedCandidates: candidateRows.length,
      evaluatedCandidates: evaluations.length,
      recommendations: recommendations.length,
      metrics,
      byBetType,
    };
    persistValidationRun(database, report, recommendations);
    updateQualityGates(database, report, recommendations);
    const outputPath = options.outputPath ?? OUTPUT_PATH;
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
    return report;
  } finally {
    if (ownsDatabase) database.close();
  }
}

function hasTable(database, tableName) {
  return database.prepare("select count(*) count from sqlite_master where type='table' and name=?").get(tableName).count === 1;
}

export function evaluateCandidate(row, racePayouts, evaluatedAt = new Date().toISOString()) {
  const selections = JSON.parse(row.component_selection_keys_json);
  const raceStart = raceStartTimestamp(row.race_date, row.start_time);
  const observed = new Date(row.odds_observed_at).getTime();
  const oddsAgeSeconds = Number.isFinite(raceStart) && Number.isFinite(observed) ? (raceStart - observed) / 1000 : null;
  const timingValid = oddsAgeSeconds != null && oddsAgeSeconds >= 0;
  const payoutYen = selections.reduce((sum, selection) => sum + (racePayouts.get(`${row.bet_type}|${selection}`) ?? 0), 0);
  const investmentYen = Number(row.total_investment_yen);
  return {
    candidateId: row.id,
    raceId: row.race_id,
    raceDate: row.race_date,
    betType: row.bet_type,
    method: row.method,
    ticketKey: row.ticket_key,
    modelVersion: row.model_version,
    calibrationStatus: row.calibration_status,
    generatedAt: row.generated_at,
    oddsObservedAt: row.odds_observed_at,
    oddsAgeSeconds,
    timingValid,
    expectedReturn: Number(row.expected_return),
    points: Number(row.points),
    investmentYen,
    payoutYen,
    profitYen: payoutYen - investmentYen,
    roi: investmentYen ? payoutYen / investmentYen : 0,
    evaluatedAt,
  };
}

export function selectRecommendations(evaluations) {
  const eligible = evaluations.filter((row) => row.timingValid && row.oddsAgeSeconds <= MAX_ODDS_AGE_SECONDS
    && row.calibrationStatus === "research_pass" && row.modelVersion !== "market-baseline" && row.expectedReturn > 1);
  const byRace = new Map();
  for (const row of eligible) {
    if (!byRace.has(row.raceId)) byRace.set(row.raceId, []);
    byRace.get(row.raceId).push(row);
  }
  return [...byRace.values()].map((rows) => {
    const latestGeneratedAt = rows.reduce((latest, row) => row.generatedAt > latest ? row.generatedAt : latest, "");
    return rows.filter((row) => row.generatedAt === latestGeneratedAt)
      .sort((left, right) => right.expectedReturn - left.expectedReturn || left.candidateId - right.candidateId)[0];
  }).sort((left, right) => left.raceDate.localeCompare(right.raceDate) || left.raceId.localeCompare(right.raceId));
}

export function summarizeStrategy(rows) {
  const investmentYen = rows.reduce((sum, row) => sum + row.investmentYen, 0);
  const payoutYen = rows.reduce((sum, row) => sum + row.payoutYen, 0);
  const days = groupDays(rows);
  const ages = rows.map((row) => row.oddsAgeSeconds).filter(Number.isFinite).sort((left, right) => left - right);
  return {
    decisions: rows.length,
    bets: rows.reduce((sum, row) => sum + row.points, 0),
    raceDays: days.length,
    investmentYen,
    payoutYen,
    profitYen: payoutYen - investmentYen,
    roi: investmentYen ? payoutYen / investmentYen : null,
    roiCi95Lower: days.length >= 2 ? bootstrapRoiLower(days, 2000) : null,
    maximumDrawdown: maximumDrawdown(rows, INITIAL_BANKROLL_YEN),
    oddsFreshnessP95Seconds: percentile(ages, 0.95),
  };
}

function initializeSchema(database) {
  database.exec(`create table if not exists live_ev_candidates(
    id integer primary key,race_id text not null,snapshot_kind text not null,base_batch_id integer not null,exotic_batch_id integer not null,
    model_version text not null,calibration_status text not null,bet_type text not null,method text not null,selection_display text not null,
    ticket_key text not null,component_selection_keys_json text not null,component_odds_json text not null,
    component_market_probabilities_json text not null,component_ability_probabilities_json text not null,
    points integer not null,total_investment_yen integer not null,expected_return real not null,odds_observed_at text not null,generated_at text not null,
    unique(race_id,base_batch_id,exotic_batch_id,model_version,bet_type,method,ticket_key)
  );
  create table if not exists live_ev_evaluations(
    candidate_id integer primary key references live_ev_candidates(id) on delete cascade,
    timing_valid integer not null check(timing_valid in(0,1)),odds_age_seconds real,payout_yen integer not null,
    profit_yen integer not null,roi real not null,evaluated_at text not null
  );
  create table if not exists live_ev_validation_runs(
    id integer primary key,model_version text not null,generated_at text not null,metrics_json text not null
  );`);
}

function persistValidationRun(database, report, recommendations) {
  const modelVersion = recommendations[0]?.modelVersion ?? "none";
  database.prepare("insert into live_ev_validation_runs(model_version,generated_at,metrics_json) values(?,?,?)")
    .run(modelVersion, report.generatedAt, JSON.stringify(report));
}

function updateQualityGates(database, report, recommendations) {
  const modelVersion = recommendations[0]?.modelVersion;
  if (!modelVersion) return;
  const run = database.prepare("select id from model_runs where model_version=? order by id desc limit 1").get(modelVersion);
  if (!run) return;
  const metrics = report.metrics;
  const coverage = report.coverage.ratio;
  const values = [
    ["pre_race_odds_coverage", coverage >= 0.995, coverage, 0.995],
    ["odds_freshness_p95_seconds", metrics.oddsFreshnessP95Seconds != null && metrics.oddsFreshnessP95Seconds <= 300, metrics.oddsFreshnessP95Seconds, 300],
    ["positive_ev_roi_ci95_lower", metrics.roiCi95Lower != null && metrics.roiCi95Lower > 1, metrics.roiCi95Lower, 1],
    ["maximum_drawdown", metrics.maximumDrawdown != null && metrics.maximumDrawdown >= -0.25, metrics.maximumDrawdown, -0.25],
    ["minimum_bets", metrics.bets >= 1000, metrics.bets, 1000],
    ["minimum_race_days", metrics.raceDays >= 180, metrics.raceDays, 180],
    ["late_odds_movement_coverage", coverage >= 0.995, coverage, 0.995],
    ["odds_coverage", coverage >= 0.995, coverage, 0.995],
    ["odds_freshness", metrics.oddsFreshnessP95Seconds != null && metrics.oddsFreshnessP95Seconds <= 300, metrics.oddsFreshnessP95Seconds, 300],
    ["drawdown", metrics.maximumDrawdown != null && metrics.maximumDrawdown >= -0.25, metrics.maximumDrawdown, -0.25],
  ];
  const now = report.generatedAt;
  const upsert = database.prepare(`insert into model_quality_gates(model_run_id,gate_name,status,metric_value,threshold_value,details_json,checked_at)
    values(?,?,?,?,?,?,?) on conflict(model_run_id,gate_name) do update set status=excluded.status,metric_value=excluded.metric_value,
    threshold_value=excluded.threshold_value,details_json=excluded.details_json,checked_at=excluded.checked_at`);
  for (const [name, pass, value, threshold] of values) {
    const sufficient = value != null && metrics.bets > 0;
    upsert.run(run.id, name, sufficient ? (pass ? "pass" : "fail") : "insufficient", value, threshold,
      JSON.stringify({ policy: report.policy, decisions: metrics.decisions, bets: metrics.bets, raceDays: metrics.raceDays }), now);
  }
}

function groupPayouts(rows) {
  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.race_id)) grouped.set(row.race_id, new Map());
    grouped.get(row.race_id).set(`${row.bet_type}|${row.selection_key}`, row.payout_yen);
  }
  return grouped;
}

function raceStartTimestamp(date, time) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? "") || !/^\d{2}:\d{2}$/.test(time ?? "")) return NaN;
  return new Date(`${date}T${time}:00+09:00`).getTime();
}

function groupDays(rows) {
  const grouped = new Map();
  for (const row of rows) {
    if (!grouped.has(row.raceDate)) grouped.set(row.raceDate, { investmentYen: 0, payoutYen: 0 });
    const day = grouped.get(row.raceDate);
    day.investmentYen += row.investmentYen;
    day.payoutYen += row.payoutYen;
  }
  return [...grouped.entries()].sort(([left], [right]) => left.localeCompare(right)).map(([, value]) => value);
}

function bootstrapRoiLower(days, samples) {
  const random = mulberry32(0x4b454942);
  const ratios = [];
  for (let sample = 0; sample < samples; sample += 1) {
    let investment = 0;
    let payout = 0;
    for (let index = 0; index < days.length; index += 1) {
      const day = days[Math.floor(random() * days.length)];
      investment += day.investmentYen;
      payout += day.payoutYen;
    }
    ratios.push(investment ? payout / investment : 0);
  }
  ratios.sort((left, right) => left - right);
  return percentile(ratios, 0.025);
}

function maximumDrawdown(rows, initialBankroll) {
  if (!rows.length) return null;
  let equity = initialBankroll;
  let peak = equity;
  let worst = 0;
  for (const row of rows) {
    equity += row.profitYen;
    peak = Math.max(peak, equity);
    worst = Math.min(worst, (equity - peak) / peak);
  }
  return worst;
}

function percentile(sorted, probability) {
  if (!sorted.length) return null;
  const position = (sorted.length - 1) * probability;
  const lower = Math.floor(position);
  const fraction = position - lower;
  const upperValue = sorted[lower + 1] ?? sorted[lower];
  return sorted[lower] + (upperValue - sorted[lower]) * fraction;
}

function mulberry32(seed) {
  return () => {
    seed |= 0;
    seed = seed + 0x6d2b79f5 | 0;
    let value = Math.imul(seed ^ seed >>> 15, 1 | seed);
    value = value + Math.imul(value ^ value >>> 7, 61 | value) ^ value;
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const report = evaluateLiveEvLedger();
  console.log(JSON.stringify({ status: report.status, storedCandidates: report.storedCandidates,
    evaluatedCandidates: report.evaluatedCandidates, recommendations: report.recommendations, metrics: report.metrics }, null, 2));
}
