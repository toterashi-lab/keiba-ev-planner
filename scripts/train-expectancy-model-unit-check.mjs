import { aggregateHistoricalMarketMetrics, aggregateTicketMetrics, buildTicketCalibrationUncertainty, evaluate, evaluateHistoricalMarketCalibration, evaluateTicketProbabilities, FEATURE_KEYS, fitHistoricalMarketCalibration, fitModel, fitTemperature, fitTicketCalibrationTemperatures, runFeatureAblation } from "./train-expectancy-model.mjs";

const races = Array.from({ length: 240 }, (_, raceIndex) => {
  const winnerIndex = raceIndex % 4;
  return {
    id: `synthetic-${raceIndex}`,
    date: "2025-01-01",
    winnerIndex,
    rows: Array.from({ length: 4 }, (_, runnerIndex) => {
      const values = Array(FEATURE_KEYS.length).fill(0);
      values[FEATURE_KEYS.indexOf("priorWinRate")] = runnerIndex === winnerIndex ? 0.8 : 0.05;
      values[FEATURE_KEYS.indexOf("priorPlaceRate")] = runnerIndex === winnerIndex ? 0.9 : 0.2;
      values[FEATURE_KEYS.indexOf("fieldRelativePriorWinRate")] = runnerIndex === winnerIndex ? 0.7 : -0.2;
      const finishOrder = [winnerIndex, ...[0, 1, 2, 3].filter((index) => index !== winnerIndex)];
      return { horseId: `horse-${raceIndex}-${runnerIndex}`, featureValues: values, target: { finishPosition: finishOrder.indexOf(runnerIndex) + 1 } };
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
const ticketCalibrationTemperatures = fitTicketCalibrationTemperatures(model, calibration, temperature);
const ticketMetrics = evaluateTicketProbabilities(model, test, temperature, ticketCalibrationTemperatures);
const historicalOdds = new Map(races.flatMap((race) => race.rows.map((row, index) => [
  `${race.id}|${row.horseId}`, index === race.winnerIndex ? 2.2 : 7 + index,
])));
const marketCalibration = fitHistoricalMarketCalibration(model, calibration, temperature, historicalOdds);
const marketMetrics = evaluateHistoricalMarketCalibration(model, test, temperature, historicalOdds, marketCalibration);
const aggregateMarket = aggregateHistoricalMarketMetrics([
  { marketCalibration, marketMetrics }, { marketCalibration, marketMetrics },
]);
if (marketMetrics.coverageRatio !== 1 || !Number.isFinite(aggregateMarket.pooled.logLoss)
  || marketCalibration.marketTemperature < 0.5 || marketCalibration.marketTemperature > 2.5
  || marketCalibration.marketWeight < 0 || marketCalibration.marketWeight > 1) {
  throw new Error(`Historical market calibration failed: ${JSON.stringify({ marketCalibration, marketMetrics })}`);
}
if (!(metrics.logLoss < metrics.uniformLogLoss)) throw new Error(`一様予測を改善できません: ${JSON.stringify(metrics)}`);
if (metrics.maxProbabilitySumError > 1e-12) throw new Error(`確率合計が1ではありません: ${metrics.maxProbabilitySumError}`);
if (metrics.ece > 0.025) throw new Error(`校正誤差が閾値を超えています: ${metrics.ece}`);
if (metrics.maxCalibrationBinError > 0.075) throw new Error(`最大校正bin誤差が閾値を超えています: ${metrics.maxCalibrationBinError}`);
for (const [type, value] of Object.entries(ticketMetrics.byType)) {
  if (!value.researchPass) throw new Error(`${type}の券種別確率検証に失敗しました: ${JSON.stringify(value)}`);
  if (value.maximumMassError > 1e-12) throw new Error(`${type}の確率質量が不正です: ${value.maximumMassError}`);
}
const aggregateTicket = aggregateTicketMetrics([{ ticketMetrics }, { ticketMetrics }]);
const uncertainty = buildTicketCalibrationUncertainty(aggregateTicket);
for (const type of Object.keys(ticketMetrics.byType)) {
  const sourceCount = ticketMetrics.byType[type].logCalibrationBins.reduce((sum, bin) => sum + bin.count, 0);
  const aggregateCount = aggregateTicket.byType[type].logCalibrationBins.reduce((sum, bin) => sum + bin.count, 0);
  if (aggregateCount !== sourceCount * 2) throw new Error(`${type}の対数校正帯が件数加重集計されていません`);
  if (!uncertainty[type].length || uncertainty[type].some((bin) => !Number.isFinite(bin.downsideError90) || bin.downsideError90 < 0)) {
    throw new Error(`${type}のWilson下方誤差が不正です`);
  }
}
console.log(JSON.stringify({ status: "pass", temperature, selectedGroups: ablation.selectedGroups, metrics: {
  logLoss: metrics.logLoss, uniformLogLoss: metrics.uniformLogLoss, brier: metrics.brier,
  ece: metrics.ece, maxCalibrationBinError: metrics.maxCalibrationBinError,
  maxProbabilitySumError: metrics.maxProbabilitySumError, calibrationMethod: metrics.calibrationMethod,
}, ticketTypes: Object.keys(ticketMetrics.byType).length, ticketCalibrationTemperatures,
historicalMarket: { coverageRatio: marketMetrics.coverageRatio, marketTemperature: marketCalibration.marketTemperature,
  marketWeight: marketCalibration.marketWeight, pooledLogLoss: aggregateMarket.pooled.logLoss },
wilsonUncertainty: "pass" }, null, 2));
