export const MODEL_VALIDATION_POLICY = {
  version: "walk-forward-policy-v1",
  split: {
    strategy: "expanding-window-walk-forward",
    minimumTrainMonths: 60,
    calibrationMonths: 12,
    testMonths: 6,
    embargoDays: 7,
    groupingKey: "race_id",
  },
  probabilityGates: [
    gate("no_target_leakage", "equal", 1),
    gate("feature_observation_time_coverage", "gte", 0.995),
    gate("prediction_probability_sum_error", "lte", 0.000001),
    gate("log_loss_vs_market_delta", "lt", 0),
    gate("brier_score_vs_market_delta", "lt", 0),
    gate("expected_calibration_error", "lte", 0.025),
    gate("max_calibration_bin_error", "lte", 0.075),
  ],
  bettingGates: [
    gate("pre_race_odds_coverage", "gte", 0.995),
    gate("odds_freshness_p95_seconds", "lte", 300),
    gate("positive_ev_roi_ci95_lower", "gt", 1),
    gate("maximum_drawdown", "gte", -0.25),
    gate("minimum_bets", "gte", 1000),
    gate("minimum_race_days", "gte", 180),
  ],
  featureAdmission: {
    method: "group-ablation-on-each-walk-forward-fold",
    minimumLogLossImprovement: 0.0001,
    minimumFoldPassRate: 0.6,
    rejectOnCalibrationRegression: true,
    rejectOnLeakageOrTimestampFailure: true,
  },
  ranking: {
    primary: "conservative_expected_return",
    uncertainty: "block-bootstrap-by-race-day",
    calibrationBuckets: ["bet_type", "odds_band", "surface", "field_size", "season"],
  },
};

export function validatePolicy(policy = MODEL_VALIDATION_POLICY) {
  const names = [...policy.probabilityGates, ...policy.bettingGates].map((item) => item.name);
  if (new Set(names).size !== names.length) throw new Error("品質ゲート名が重複しています");
  if (!names.includes("no_target_leakage") || !names.includes("positive_ev_roi_ci95_lower")) throw new Error("必須品質ゲートがありません");
  if (policy.split.embargoDays < 1 || policy.split.testMonths < 1) throw new Error("時系列分割のembargo/test期間が不正です");
  if (policy.featureAdmission.minimumFoldPassRate <= 0.5) throw new Error("特徴量採用のfold合格率が緩すぎます");
  return true;
}

function gate(name, operator, threshold) { return { name, operator, threshold }; }
