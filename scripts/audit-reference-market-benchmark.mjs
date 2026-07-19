import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const MODEL_PATH = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");
const ABILITY_PATH = path.join(PRIVATE_DIR, "models", "reference-asof-model.json");
const OUTPUT_PATH = path.join(PRIVATE_DIR, "models", "reference-market-benchmark.json");

const model = JSON.parse(fs.readFileSync(MODEL_PATH, "utf8"));
const ability = JSON.parse(fs.readFileSync(ABILITY_PATH, "utf8"));
const db = new DatabaseSync(path.join(PRIVATE_DIR, "keiba.sqlite"), { readOnly: true });

try {
  const winners = new Map(db.prepare(`select rr.race_id,rr.horse_id,e.horse_number
    from complete_race_results rr
    join complete_race_entries e on e.race_id=rr.race_id and e.horse_id=rr.horse_id
    join complete_races r on r.race_id=rr.race_id
    where r.race_date in ('2026-07-11','2026-07-12') and rr.finish_position=1`).all()
    .map((row) => [row.race_id, row]));
  const horseNumbers = new Map(db.prepare(`select race_id,horse_id,horse_number from complete_race_entries
    where race_id in (select race_id from complete_races where race_date in ('2026-07-11','2026-07-12'))`).all()
    .map((row) => [`${row.race_id}|${row.horse_id}`, row.horse_number]));
  const rawProbabilities = new Map(ability.predictions.map((row) => [
    `${row.raceId}|${horseNumbers.get(`${row.raceId}|${row.horseId}`)}`,
    row.probability,
  ]));
  const winType = model.candidates.find((row) => row.odds != null)?.betType;
  const onePointMethod = model.candidates.find((row) => row.odds != null)?.method;
  const losses = { market: 0, pooled: 0, ability: 0 };
  let races = 0;

  for (const prediction of model.predictions) {
    const winner = winners.get(prediction.raceId);
    const candidate = model.candidates.find((row) =>
      row.raceId === prediction.raceId
      && row.betType === winType
      && row.method === onePointMethod
      && Number(row.ticketKeys?.[0]) === winner?.horse_number);
    const probabilities = {
      market: candidate?.marketExpectedReturn / candidate?.odds,
      pooled: candidate?.abilityProbability,
      ability: rawProbabilities.get(`${prediction.raceId}|${winner?.horse_number}`),
    };
    if (!Object.values(probabilities).every((value) => Number.isFinite(value) && value > 0)) {
      throw new Error(`${prediction.raceId}: probability benchmark input missing`);
    }
    for (const [key, probability] of Object.entries(probabilities)) losses[key] -= Math.log(probability);
    races += 1;
  }

  const logLoss = Object.fromEntries(Object.entries(losses).map(([key, value]) => [key, value / races]));
  const pooledImprovement = logLoss.market - logLoss.pooled;
  const report = {
    version: "reference-market-benchmark-v1",
    status: pooledImprovement >= 0.005 ? "pass" : "fail",
    checkedAt: new Date().toISOString(),
    modelVersion: model.modelVersion,
    targetDates: ["2026-07-11", "2026-07-12"],
    races,
    metric: "winner_log_loss",
    logLoss,
    pooledImprovement,
    abilityMaySetExpectedReturn: pooledImprovement >= 0.005,
    policy: "deployment_gate_only_no_target_retuning",
    reason: pooledImprovement >= 0.005
      ? "統合確率が市場確率を外部期間で上回った"
      : "統合確率が市場確率を上回っていないため、能力モデルをEV順位から除外",
  };
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
} finally {
  db.close();
}
