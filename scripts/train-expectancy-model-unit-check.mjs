import { evaluate, fitModel, fitTemperature, runFeatureAblation } from "./train-expectancy-model.mjs";

const races = Array.from({ length: 240 }, (_, raceIndex) => {
  const winnerIndex = raceIndex % 4;
  return {
    id: `synthetic-${raceIndex}`,
    date: "2025-01-01",
    winnerIndex,
    rows: Array.from({ length: 4 }, (_, runnerIndex) => {
      const values = Array(29).fill(0);
      values[10] = runnerIndex === winnerIndex ? 0.8 : 0.05;
      values[11] = runnerIndex === winnerIndex ? 0.9 : 0.2;
      values[28] = runnerIndex === winnerIndex ? 0.7 : -0.2;
      return { featureValues: values };
    }),
  };
});

const train = races.slice(0, 160);
const calibration = races.slice(160, 200);
const test = races.slice(200);
const ablation = runFeatureAblation(train, calibration);
if (ablation.fallback) throw new Error("合成データで特徴量群を採用できませんでした");
if (!ablation.selectedGroups.some((group) => group === "horse_form" || group === "field_strength")) {
  throw new Error(`信号を含む特徴量群が採用されませんでした: ${JSON.stringify(ablation.selectedGroups)}`);
}
const model = fitModel(train, ablation.selectedFeatureIndexes);
const temperature = fitTemperature(model, calibration);
const metrics = evaluate(model, test, temperature);
if (!(metrics.logLoss < metrics.uniformLogLoss)) throw new Error(`一様予測を改善できません: ${JSON.stringify(metrics)}`);
if (metrics.maxProbabilitySumError > 1e-12) throw new Error(`確率合計が1ではありません: ${metrics.maxProbabilitySumError}`);
if (metrics.ece > 0.025) throw new Error(`校正誤差が閾値を超えています: ${metrics.ece}`);
if (metrics.maxCalibrationBinError > 0.075) throw new Error(`最大校正bin誤差が閾値を超えています: ${metrics.maxCalibrationBinError}`);
console.log(JSON.stringify({ status: "pass", temperature, selectedGroups: ablation.selectedGroups, metrics: {
  logLoss: metrics.logLoss, uniformLogLoss: metrics.uniformLogLoss, brier: metrics.brier,
  ece: metrics.ece, maxCalibrationBinError: metrics.maxCalibrationBinError,
  maxProbabilitySumError: metrics.maxProbabilitySumError, calibrationMethod: metrics.calibrationMethod,
} }, null, 2));
