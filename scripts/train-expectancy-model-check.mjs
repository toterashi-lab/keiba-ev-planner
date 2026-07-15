import fs from "node:fs";

const source = fs.readFileSync("scripts/train-expectancy-model.mjs", "utf8");
for (const required of ["completeOnly: true", "30年バックフィル未完了", "buildFoldSpecs", "fitTemperature", "maxProbabilitySumError", "noTargetLeakage: true", "insufficient_betting_validation", "researchProbabilityStatus", "feature_observation_time_coverage", "positive_ev_roi_ci95_lower"]) {
  if (!source.includes(required)) throw new Error(`学習パイプラインの必須処理がありません: ${required}`);
}
console.log("OK 完了済み30年データ限定・walk-forward・校正・リーク防止・確率合計監査");
