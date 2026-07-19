import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { generateLiveMarketEv, loadLatestCompleteLiveOdds, persistCandidateLedger, resolveLiveRaceProbability, resolveLiveTargetDates, resolveStoredRacecardTargetDates } from "./generate-live-market-ev.mjs";

const fixtureOutputDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-live-check-output-"));
const fixtureOutputPath = path.join(fixtureOutputDirectory, "live-market-ev.json");
const model = generateLiveMarketEv({ allowFixture: true, outputPath: fixtureOutputPath });
const noOddsFixture = createNoOddsModelFixture();
const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const structuredTypes = ["馬連", "ワイド", "馬単", "3連複", "3連単"];
const failures = [];
const futureDates = resolveLiveTargetDates({ racecardTargetDates: "2026-07-18,2026-07-19", today: "2026-07-15" });
const staleOddsFallback = resolveLiveTargetDates({ baseTargetDates: "2026-07-12", racecardTargetDates: "2026-07-18,2026-07-19", today: "2026-07-15" });
const currentOddsAndFutureRacecards = resolveLiveTargetDates({ baseTargetDates: "2026-07-18", racecardTargetDates: "2026-07-18,2026-07-19", today: "2026-07-18" });
const fixtureDates = resolveLiveTargetDates({ baseTargetDates: "2026-07-12", racecardTargetDates: "", today: "2026-07-15", allowFixture: true });
const recoveredRacecardDates = recoverEmptyBatchTargetDates();
const rollingBatchCoverage = verifyRollingBatchAggregation();
if (futureDates.join(",") !== "2026-07-18,2026-07-19") failures.push("multi-day racecard target path failed");
if (staleOddsFallback.join(",") !== "2026-07-18,2026-07-19") failures.push("stale odds fallback path failed");
if (currentOddsAndFutureRacecards.join(",") !== "2026-07-18,2026-07-19") failures.push("current odds and future racecard date merge failed");
if (fixtureDates.join(",") !== "2026-07-12") failures.push("fixture target path failed");
if (recoveredRacecardDates.join(",") !== "2026-07-18,2026-07-19") failures.push("empty racecard batch target-date recovery failed");
if (rollingBatchCoverage !== "r1:3/4,r2:5/6") failures.push(`rolling batch aggregation failed: ${rollingBatchCoverage}`);
const entries = [{ horse_number: 1 }, { horse_number: 2 }, { horse_number: 3 }];
const trained = [{ horse_number: 1, win_probability: 0.5 }, { horse_number: 2, win_probability: 0.3 }, { horse_number: 3, win_probability: 0.2 }];
const modelOnly = resolveLiveRaceProbability({ artifact: { researchProbabilityStatus: "research_pass" }, raceEntries: entries, trainedRows: trained, winRows: [] });
const unavailable = resolveLiveRaceProbability({ artifact: null, raceEntries: entries, trainedRows: [], winRows: [] });
const marketOnly = resolveLiveRaceProbability({ artifact: null, raceEntries: entries, trainedRows: [], winRows: [
  { selection_key: "1", odds_low: 2 }, { selection_key: "2", odds_low: 4 }, { selection_key: "3", odds_low: 5 },
] });
if (!modelOnly.hasModel || !modelOnly.abilityHorse || modelOnly.marketHorse !== null) failures.push("model-only prediction path failed");
if (unavailable.hasModel || unavailable.abilityHorse !== null) failures.push("missing probability gate failed");
if (marketOnly.hasModel || !marketOnly.marketHorse || !marketOnly.abilityHorse) failures.push("market-only prediction path failed");
if (Math.abs(Object.values(modelOnly.abilityHorse ?? {}).reduce((sum, value) => sum + value, 0) - 1) > 1e-9) failures.push("model-only probability sum failed");
if (noOddsFixture.status !== "ready" || noOddsFixture.predictions.length !== 2 || noOddsFixture.candidates.length !== 0
  || noOddsFixture.predictionCoverage?.targetRaces !== 2 || noOddsFixture.predictionCoverage?.modelOnlyRaces !== 2
  || noOddsFixture.reason !== "waiting_for_complete_odds") failures.push("no-odds multi-day integration failed");
const ledgerDatabase = new DatabaseSync(":memory:");
persistCandidateLedger(ledgerDatabase, model);
const persistedCandidates = ledgerDatabase.prepare("select count(*) count from live_ev_candidates").get().count;
ledgerDatabase.close();

if (model.status !== "ready") failures.push(`status is ${model.status}: ${model.reason ?? "unknown"}`);
if (model.unitStakeYen !== 100) failures.push("unit stake is not 100 yen");
if (!(model.evaluatedTotal > 0)) failures.push("no odds were evaluated");
if (!model.predictions?.length) failures.push("no AI predictions were generated");
if (persistedCandidates !== model.candidates.length) failures.push(`candidate ledger mismatch: ${persistedCandidates}/${model.candidates.length}`);
if (model.candidates.some((row) => row.baseBatchId !== model.baseBatchId || row.exoticBatchId !== model.exoticBatchId)) {
  failures.push("candidate-specific batch provenance failed");
}

const raceIds = [...new Set((model.candidates ?? []).map((row) => row.raceId))];
for (const raceId of raceIds) {
  const rows = model.candidates.filter((row) => row.raceId === raceId);
  for (const betType of betTypes) {
    if (!rows.some((row) => row.betType === betType)) failures.push(`${raceId}: ${betType} missing`);
  }
  for (const betType of structuredTypes) {
    if (!rows.some((row) => row.betType === betType && row.method === "BOX")) failures.push(`${raceId}: ${betType} BOX missing`);
    if (!rows.some((row) => row.betType === betType && row.method === "フォーメーション")) failures.push(`${raceId}: ${betType} formation missing`);
    const scenarios = new Set(rows.filter((row) => row.betType === betType && row.method !== "1点")
      .flatMap((row) => row.optimizationScenarios ?? []));
    if (!scenarios.has("ability_probability") || !scenarios.has("component_ev")) failures.push(`${raceId}: ${betType} optimization scenarios missing`);
  }
  if (rows.some((row) => row.status !== "ready"
    || !Number.isInteger(row.points) || row.points < 1
    || row.totalInvestmentYen !== row.points * 100
    || !Number.isFinite(row.conservativeExpectedReturn)
    || !Number.isFinite(row.abilityExpectedReturn)
    || !Number.isFinite(row.adoptedExpectedReturn)
    || row.chiefDecision?.agent !== "chief-expectancy-agent"
    || !row.agentVotes)) {
    failures.push(`${raceId}: invalid candidate value`);
  }
  const prediction = model.predictions.find((row) => row.raceId === raceId);
  if (!prediction || prediction.status !== "ready" || prediction.predictionContext !== "pre_race" || prediction.marks?.length !== 5) {
    failures.push(`${raceId}: invalid AI prediction`);
  }
  if (!Array.isArray(prediction?.forecastPanel) || prediction.forecastPanel.length < 3
    || prediction.masterConsensus?.agent !== "chief-expectancy-agent") failures.push(`${raceId}: live specialist forecast panel`);
  if (prediction.forecastPanel.filter((agent) => agent.persona === true).length !== 5
    || prediction.forecastPanel.filter((agent) => agent.persona === true && agent.status === "available").length < 3
    || prediction.forecastPanel.some((agent) => !["available", "unavailable"].includes(agent.status))) {
    failures.push(`${raceId}: live five specialist agents with explicit availability`);
  }
}

const source = fs.readFileSync("scripts/generate-live-market-ev.mjs", "utf8");
if (source.includes('if (!base) return waiting("live_win_place_odds")')) failures.push("no-odds model prediction path is blocked");
for (const forbidden of ["race_results", "payouts", "finish_position", "payout_yen"]) {
  if (source.includes(forbidden)) failures.push(`result leakage token: ${forbidden}`);
}

if (failures.length) {
  fs.rmSync(fixtureOutputDirectory, { recursive: true, force: true });
  for (const failure of failures) console.error(`NG ${failure}`);
  process.exit(1);
}

console.log(JSON.stringify({
  status: "pass",
  snapshotKind: model.snapshotKind,
  races: raceIds.length,
  evaluated: model.evaluatedTotal,
  candidates: model.candidates.length,
  betTypes: betTypes.length,
  unitStakeYen: model.unitStakeYen,
  persistedCandidates,
  modelOnlyPrediction: "pass",
  noOddsMultiDayPrediction: "pass",
  noOddsIntegration: { races: noOddsFixture.predictions.length, candidates: noOddsFixture.candidates.length },
  emptyBatchTargetDateRecovery: recoveredRacecardDates,
  rollingBatchCoverage,
  resultLeakage: "pass",
}, null, 2));
fs.rmSync(fixtureOutputDirectory, { recursive: true, force: true });

function createNoOddsModelFixture() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-live-no-odds-"));
  const databasePath = path.join(directory, "fixture.sqlite");
  const outputPath = path.join(directory, "live-market-ev.json");
  const fixture = new DatabaseSync(databasePath);
  try {
    fixture.exec(`
      create table odds_ingestion_batches(id integer primary key,status text,source text,snapshot_kind text,target_dates text);
      create table live_racecard_batches(id integer primary key,status text,race_count integer,target_dates text);
      create table live_races(race_id text primary key,batch_id integer,race_date text,venue_code text,race_number integer,meeting_name text,start_time text);
      create table live_entries(race_id text,horse_id text,horse_number integer,horse_name text);
      create table live_predictions(race_id text,horse_id text,model_version text,win_probability real);
      create table live_odds_snapshots(batch_id integer,race_id text,bet_type text,selection_key text,odds_low real,odds_high real,observed_at text);
      insert into live_racecard_batches values(1,'complete',2,'2099-01-03,2099-01-04');
      insert into live_races values('r1',1,'2099-01-03','05',1,'検査開催1日','12:00'),('r2',1,'2099-01-04','05',1,'検査開催2日','12:00');
      insert into live_entries values
        ('r1','h1',1,'馬1'),('r1','h2',2,'馬2'),('r1','h3',3,'馬3'),
        ('r2','h4',1,'馬4'),('r2','h5',2,'馬5'),('r2','h6',3,'馬6');
      insert into live_predictions values
        ('r1','h1','fixture-model',0.5),('r1','h2','fixture-model',0.3),('r1','h3','fixture-model',0.2),
        ('r2','h4','fixture-model',0.4),('r2','h5','fixture-model',0.35),('r2','h6','fixture-model',0.25);
    `);
  } finally { fixture.close(); }
  try {
    return generateLiveMarketEv({ databasePath, outputPath, artifact: { modelVersion: "fixture-model", researchProbabilityStatus: "research_pass" } });
  } finally { fs.rmSync(directory, { recursive: true, force: true }); }
}

function recoverEmptyBatchTargetDates() {
  const database = new DatabaseSync(":memory:");
  try {
    database.exec(`create table live_races(race_id text primary key,batch_id integer,race_date text);
      insert into live_races values('r1',7,'2026-07-19'),('r2',7,'2026-07-18'),('old',6,'2026-07-12');`);
    return resolveStoredRacecardTargetDates(database, { id: 7, target_dates: "" });
  } finally { database.close(); }
}

function verifyRollingBatchAggregation() {
  const database = new DatabaseSync(":memory:");
  try {
    database.exec(`
      create table odds_ingestion_batches(id integer primary key,source text,snapshot_kind text,status text);
      create table live_odds_snapshots(race_id text,bet_type text,selection_key text,odds_low real,odds_high real,observed_at text,batch_id integer,snapshot_kind text);
      create table live_races(race_id text primary key,race_date text,start_time text);
      insert into live_races values('r1','2026-01-01','12:00'),('r2','2026-01-01','13:00');
      insert into odds_ingestion_batches values
        (1,'JRA official live odds','pre_race','complete'),(2,'JRA official live exotic odds','pre_race','complete'),
        (3,'JRA official live odds','pre_race','complete'),(4,'JRA official live exotic odds','pre_race','complete'),
        (5,'JRA official live odds','pre_race','complete'),(6,'JRA official live exotic odds','pre_race','complete'),
        (7,'JRA official live odds','pre_race','failed'),(8,'JRA official live odds','pre_race','complete'),
        (9,'JRA official live exotic odds','pre_race','complete');
      insert into live_odds_snapshots values
        ('r1','win','1',3,3,'2026-01-01T01:00:00Z',1,'pre_race'),('r1','quinella','1-2',5,5,'2026-01-01T01:00:01Z',2,'pre_race'),
        ('r1','win','1',2.8,2.8,'2026-01-01T01:10:00Z',3,'pre_race'),('r1','quinella','1-2',4.8,4.8,'2026-01-01T01:10:01Z',4,'pre_race'),
        ('r2','win','1',4,4,'2026-01-01T02:00:00Z',5,'pre_race'),('r2','quinella','1-2',8,8,'2026-01-01T02:00:01Z',6,'pre_race'),
        ('r1','win','1',1.1,1.1,'2026-01-01T01:20:00Z',7,'pre_race'),
        ('r1','win','1',1.0,1.0,'2026-01-01T03:01:00Z',8,'pre_race'),
        ('r1','quinella','1-2',1.0,1.0,'2026-01-01T03:01:00Z',9,'pre_race');
    `);
    const rows = loadLatestCompleteLiveOdds(database, ["r1", "r2"]);
    const ids = new Map();
    for (const row of rows) {
      if (!ids.has(row.race_id)) ids.set(row.race_id, {});
      ids.get(row.race_id)[row.source_group] = row.batch_id;
    }
    return [...ids].map(([raceId, value]) => `${raceId}:${value.base}/${value.exotic}`).join(",");
  } finally { database.close(); }
}
