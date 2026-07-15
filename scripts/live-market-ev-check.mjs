import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { generateLiveMarketEv, resolveLiveRaceProbability, resolveLiveTargetDates } from "./generate-live-market-ev.mjs";

const fixtureOutputDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-live-check-output-"));
const fixtureOutputPath = path.join(fixtureOutputDirectory, "live-market-ev.json");
const model = generateLiveMarketEv({ allowFixture: true, outputPath: fixtureOutputPath });
const noOddsFixture = createNoOddsModelFixture();
const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const structuredTypes = ["馬連", "ワイド", "馬単", "3連複", "3連単"];
const failures = [];
const futureDates = resolveLiveTargetDates({ racecardTargetDates: "2026-07-18,2026-07-19", today: "2026-07-15" });
const staleOddsFallback = resolveLiveTargetDates({ baseTargetDates: "2026-07-12", racecardTargetDates: "2026-07-18,2026-07-19", today: "2026-07-15" });
const fixtureDates = resolveLiveTargetDates({ baseTargetDates: "2026-07-12", racecardTargetDates: "", today: "2026-07-15", allowFixture: true });
if (futureDates.join(",") !== "2026-07-18,2026-07-19") failures.push("multi-day racecard target path failed");
if (staleOddsFallback.join(",") !== "2026-07-18,2026-07-19") failures.push("stale odds fallback path failed");
if (fixtureDates.join(",") !== "2026-07-12") failures.push("fixture target path failed");
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
const database = new DatabaseSync("data/jra-free-private/keiba.sqlite", { readOnly: true });
const persistedCandidates = model.baseBatchId ? database.prepare(`select count(*) count from live_ev_candidates
  where base_batch_id=? and exotic_batch_id=?`).get(model.baseBatchId, model.exoticBatchId).count : 0;
database.close();

if (model.status !== "ready") failures.push(`status is ${model.status}: ${model.reason ?? "unknown"}`);
if (model.unitStakeYen !== 100) failures.push("unit stake is not 100 yen");
if (!(model.evaluatedTotal > 0)) failures.push("no odds were evaluated");
if (!model.predictions?.length) failures.push("no AI predictions were generated");
if (persistedCandidates !== model.candidates.length) failures.push(`candidate ledger mismatch: ${persistedCandidates}/${model.candidates.length}`);

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
    || !Number.isFinite(row.adoptedExpectedReturn))) {
    failures.push(`${raceId}: invalid candidate value`);
  }
  const prediction = model.predictions.find((row) => row.raceId === raceId);
  if (!prediction || prediction.status !== "ready" || prediction.predictionContext !== "pre_race" || prediction.marks?.length !== 5) {
    failures.push(`${raceId}: invalid AI prediction`);
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
      create table live_races(race_id text primary key,race_date text,venue_code text,race_number integer,meeting_name text);
      create table live_entries(race_id text,horse_id text,horse_number integer,horse_name text);
      create table live_predictions(race_id text,horse_id text,model_version text,win_probability real);
      create table live_odds_snapshots(batch_id integer,race_id text,bet_type text,selection_key text,odds_low real,odds_high real,observed_at text);
      insert into live_racecard_batches values(1,'complete',2,'2099-01-03,2099-01-04');
      insert into live_races values('r1','2099-01-03','05',1,'検査開催1日'),('r2','2099-01-04','05',1,'検査開催2日');
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
