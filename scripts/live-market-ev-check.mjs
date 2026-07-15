import fs from "node:fs";
import { generateLiveMarketEv } from "./generate-live-market-ev.mjs";

const model = generateLiveMarketEv({ allowFixture: true });
const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const structuredTypes = ["馬連", "ワイド", "馬単", "3連複", "3連単"];
const failures = [];

if (model.status !== "ready") failures.push(`status is ${model.status}: ${model.reason ?? "unknown"}`);
if (model.unitStakeYen !== 100) failures.push("unit stake is not 100 yen");
if (!(model.evaluatedTotal > 0)) failures.push("no odds were evaluated");
if (!model.predictions?.length) failures.push("no AI predictions were generated");

const raceIds = [...new Set((model.candidates ?? []).map((row) => row.raceId))];
for (const raceId of raceIds) {
  const rows = model.candidates.filter((row) => row.raceId === raceId);
  for (const betType of betTypes) {
    if (!rows.some((row) => row.betType === betType)) failures.push(`${raceId}: ${betType} missing`);
  }
  for (const betType of structuredTypes) {
    if (!rows.some((row) => row.betType === betType && row.method === "BOX")) failures.push(`${raceId}: ${betType} BOX missing`);
    if (!rows.some((row) => row.betType === betType && row.method === "フォーメーション")) failures.push(`${raceId}: ${betType} formation missing`);
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
  resultLeakage: "pass",
}, null, 2));
