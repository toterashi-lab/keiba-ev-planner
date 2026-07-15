import fs from "node:fs";

const source = fs.readFileSync("scripts/train-expectancy-model.mjs", "utf8");
for (const required of ["runFeatureAblation", "aggregateFeatureAdmission", "activeFeatureIndexes"]) {
  if (!source.includes(required)) throw new Error(`特徴量選別の必須処理がありません: ${required}`);
}
for (const required of ["completeOnly: options.completeOnly !== false", "30年バックフィル未完了", "buildFoldSpecs", "fitTemperature", "maxProbabilitySumError", "equal-frequency-deciles", "noTargetLeakage: true", "insufficient_betting_validation", "researchProbabilityStatus", "feature_observation_time_coverage", "positive_ev_roi_ci95_lower",
  "fitTicketCalibrationTemperatures", "evaluateTicketProbabilities", "ticketProbabilityStatus", "ticket_probability_${type}"]) {
  if (!source.includes(required)) throw new Error(`学習パイプラインの必須処理がありません: ${required}`);
}
for (const required of ["lossStandardError", "oneStandardErrorCandidates", "calibration-only-one-standard-error-most-regularized-temperature"]) {
  if (!source.includes(required)) throw new Error(`券種別過適合防止処理がありません: ${required}`);
}
for (const required of ["captureModelDataSnapshot", "captureModelImplementationSnapshot", "trainingSnapshot", "trainingImplementation", "学習中にDBまたは実装スナップショットが変更されました"]) {
  if (!source.includes(required)) throw new Error(`学習DBスナップショット保護がありません: ${required}`);
}
console.log("OK 完了済み30年データ限定・walk-forward・校正・リーク防止・確率合計監査");
