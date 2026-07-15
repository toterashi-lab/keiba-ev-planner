import fs from "node:fs";
import { DatabaseSync } from "node:sqlite";
import { generateLiveMarketEv, resolveLiveRaceProbability } from "./generate-live-market-ev.mjs";

const model = generateLiveMarketEv({ allowFixture: true });
const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const structuredTypes = ["馬連", "ワイド", "馬単", "3連複", "3連単"];
const failures = [];
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
for (const forbidden of ["race_results", "payouts", "finish_position", "payout_yen"]) {
  if (source.includes(forbidden)) failures.push(`result leakage token: ${forbidden}`);
}

if (failures.length) {
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
  resultLeakage: "pass",
}, null, 2));
