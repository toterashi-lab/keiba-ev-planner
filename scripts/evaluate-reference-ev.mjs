import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const MODEL_PATH = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");
const OUTPUT_PATH = path.join("data", "jra-free-private", "models", "reference-ev-audit.json");
const model = JSON.parse(fs.readFileSync(MODEL_PATH, "utf8"));
const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
try {
  const payouts = db.prepare(`select race_id,bet_type,selection_key,payout_yen from complete_payouts
    where race_id in (select race_id from complete_races where race_date in ('2026-07-11','2026-07-12'))`).all();
  const payoutMap = new Map(payouts.map((row) => [`${row.race_id}|${row.bet_type}|${row.selection_key}`, row.payout_yen]));
  const thresholds = [1, 1.1, 1.25, 1.5, 2];
  const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
  const byRaceType = group(model.candidates, (row) => `${row.raceId}|${row.betType}`);
  const strategies = [];
  for (const threshold of thresholds) {
    strategies.push(evaluate(`全券種・各レース各券種1位 EV>${threshold}`, [...byRaceType.values()]
      .map(topCandidate).filter((row) => row.adoptedExpectedReturn > threshold), payoutMap));
    for (const betType of betTypes) {
      strategies.push(evaluate(`${betType}・各レース1位 EV>${threshold}`, [...byRaceType.values()]
        .map(topCandidate).filter((row) => row.betType === betType && row.adoptedExpectedReturn > threshold), payoutMap));
    }
  }
  const byRace = group(model.candidates, (row) => row.raceId);
  for (const threshold of thresholds) strategies.push(evaluate(`全券種横断・各レース1位 EV>${threshold}`,
    [...byRace.values()].map(topCandidate).filter((row) => row.adoptedExpectedReturn > threshold), payoutMap));
  const report = {
    status: "evaluation_only",
    checkedAt: new Date().toISOString(),
    modelVersion: model.modelVersion,
    targetDates: ["2026-07-11", "2026-07-12"],
    leakagePolicy: "買い目と期待値を固定した後に結果・払戻を照合。結果はモデルまたは閾値の選択に再利用しない。",
    sampleWarning: "72レースのみの監査であり、購入適格判定には使用しない。",
    strategies,
  };
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({ output: OUTPUT_PATH, strategies: strategies.filter((row) => row.bets).map((row) => ({
    name: row.name, bets: row.bets, hits: row.hits, investmentYen: row.investmentYen, payoutYen: row.payoutYen,
    roi: row.roi, maximumDrawdown: row.maximumDrawdown,
  })) }, null, 2));
} finally { db.close(); }

function topCandidate(rows) { return [...rows].sort((left, right) => right.adoptedExpectedReturn - left.adoptedExpectedReturn || left.points - right.points)[0]; }
function evaluate(name, candidates, payoutMap) {
  let investmentYen = 0; let payoutYen = 0; let hits = 0; let equity = 0; let peak = 0; let maximumDrawdownYen = 0;
  const ordered = [...candidates].sort((left, right) => left.date.localeCompare(right.date) || left.raceId.localeCompare(right.raceId));
  for (const candidate of ordered) {
    const investment = candidate.points * 100;
    const payout = candidate.ticketKeys.reduce((sum, key) => sum + (payoutMap.get(`${candidate.raceId}|${candidate.betType}|${key}`) ?? 0), 0);
    investmentYen += investment; payoutYen += payout;
    if (payout > 0) hits += 1;
    equity += payout - investment; peak = Math.max(peak, equity); maximumDrawdownYen = Math.min(maximumDrawdownYen, equity - peak);
  }
  return { name, bets: ordered.length, hits, investmentYen, payoutYen, roi: investmentYen ? payoutYen / investmentYen : null,
    netYen: payoutYen - investmentYen, maximumDrawdownYen,
    maximumDrawdown: investmentYen ? maximumDrawdownYen / investmentYen : null };
}
function group(rows, keyOf) { const result = new Map(); for (const row of rows) { const key = keyOf(row); if (!result.has(key)) result.set(key, []); result.get(key).push(row); } return result; }
