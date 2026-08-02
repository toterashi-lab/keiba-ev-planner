import crypto from "node:crypto";
import { agentFeatureValue, brierScore, logLoss } from "./agent-system.mjs";

export const LEARNING_POLICY = Object.freeze({ minimumSamples: 500, maximumWeightUpdate: 0.05, regularization: 0.1, recentWeightCap: 0.35, embargoDays: 7 });
export function chronologicalSplit(records, windows) { if (!(windows.trainEnd < windows.validationStart && windows.validationEnd < windows.testStart)) throw new Error("学習・検証・テスト期間が重複しています"); const sorted = [...records].sort((a, b) => stamp(a).localeCompare(stamp(b))); const train = sorted.filter((row) => between(stamp(row), windows.trainStart, windows.trainEnd)); const validation = sorted.filter((row) => between(stamp(row), windows.validationStart, windows.validationEnd)); const test = sorted.filter((row) => between(stamp(row), windows.testStart, windows.testEnd)); const ids = [...train, ...validation, ...test].map(identity); if (new Set(ids).size !== ids.length) throw new Error("分割間に同一レースが重複しています"); return { train, validation, test }; }
export function assertTrainingChronology(rows, predictionAt) { const future = rows.filter((row) => Date.parse(stamp(row)) >= Date.parse(predictionAt)); if (future.length) throw new Error(`予想時刻以後の学習データが${future.length}件含まれています`); return true; }
export function fitBinaryTemperature(rows, options = {}) { const minimumSamples = options.minimumSamples ?? LEARNING_POLICY.minimumSamples; if (rows.length < minimumSamples) return { status: "insufficient", sampleSize: rows.length, minimumSamples }; let best = { temperature: 1, logLoss: Infinity }; for (let temperature = 0.5; temperature <= 3.0001; temperature += 0.025) { const probabilities = rows.map((row) => temperatureScale(row.probability, temperature)); const loss = logLoss(probabilities, rows.map((row) => row.outcome)); if (loss < best.logLoss) best = { temperature: round(temperature, 3), logLoss: loss }; } const calibrated = rows.map((row) => temperatureScale(row.probability, best.temperature)); return { status: "fitted", ...best, sampleSize: rows.length, brierScore: brierScore(calibrated, rows.map((row) => row.outcome)), calibrationError: expectedCalibrationError(calibrated, rows.map((row) => row.outcome)) }; }
export function boundedWeightUpdate(currentWeights, gradients, options = {}) { const policy = { ...LEARNING_POLICY, ...options }; if ((options.sampleSize ?? 0) < policy.minimumSamples) return { status: "insufficient", weights: normalizeWeights(currentWeights), sampleSize: options.sampleSize ?? 0, minimumSamples: policy.minimumSamples }; const normalized = normalizeWeights(currentWeights); const updated = {}; for (const [feature, weight] of Object.entries(normalized)) { const regularized = Number(gradients[feature] ?? 0) - policy.regularization * Number(weight); const delta = clamp(regularized * Number(options.learningRate ?? .15), -policy.maximumWeightUpdate, policy.maximumWeightUpdate); updated[feature] = Math.max(0, Number(weight) + delta); } const total = Object.values(updated).reduce((sum, value) => sum + value, 0); if (!(total > 0)) throw new Error("更新後の特徴量重みがすべて0です"); return { status: "updated", weights: Object.fromEntries(Object.entries(updated).map(([key, value]) => [key, value / total])), gradients: { ...gradients } }; }
export function computeAgentWeightGradients(races, agent, options = {}) {
  const gradients = Object.fromEntries(Object.keys(agent.weights).map((feature) => [feature, 0]));
  if (!races.length) return gradients;
  const temperature = Number(options.softmaxTemperature ?? .18);
  for (const race of races) {
    const scored = race.entries.map((entry) => agentLinearScore(agent.weights, entry.features));
    const probabilities = softmax(scored.map((row) => row.score), temperature);
    for (let index = 0; index < race.entries.length; index += 1) {
      const error = Number(race.entries[index].outcome) - probabilities[index];
      for (const feature of Object.keys(gradients)) {
        const value = agentFeatureValue(race.entries[index].features, feature);
        if (value != null) gradients[feature] += error * value / race.entries.length;
      }
    }
  }
  const scale = Math.max(1, races.length);
  return Object.fromEntries(Object.entries(gradients).map(([feature, value]) => [feature, value / scale]));
}
export function evaluateAgentRaces(races, weights, options = {}) {
  if (!races.length) return { status: "insufficient", races: 0 };
  const temperature = Number(options.softmaxTemperature ?? .18);
  let top1Hits = 0, top3Hits = 0, loss = 0, brier = 0, horseRows = 0;
  for (const race of races) {
    const probabilities = softmax(race.entries.map((entry) => agentLinearScore(weights, entry.features).score), temperature);
    const ranked = probabilities.map((probability, index) => ({ probability, index })).sort((left, right) => right.probability - left.probability);
    const winner = race.entries.findIndex((entry) => Number(entry.outcome) === 1);
    if (winner < 0) continue;
    top1Hits += ranked[0]?.index === winner ? 1 : 0;
    top3Hits += ranked.slice(0, 3).some((row) => row.index === winner) ? 1 : 0;
    loss -= Math.log(Math.max(1e-12, probabilities[winner]));
    probabilities.forEach((probability, index) => { brier += (probability - (index === winner ? 1 : 0)) ** 2; horseRows += 1; });
  }
  return { status: "evaluated", races: races.length, top1Rate: top1Hits / races.length, top3Rate: top3Hits / races.length,
    logLoss: loss / races.length, brierScore: brier / horseRows };
}
export function evaluateLearningRows(rows, financialRows = rows) { if (!rows.length) return { status: "insufficient", sampleSize: 0 }; const probabilities = rows.map((row) => Number(row.probability)); const outcomes = rows.map((row) => Number(row.outcome)); const profits = financialRows.map((row) => Number(row.profitYen ?? 0)); const investmentYen = financialRows.reduce((sum, row) => sum + Number(row.investmentYen ?? 0), 0); const payoutYen = financialRows.reduce((sum, row) => sum + Number(row.payoutYen ?? 0), 0); return { status: "evaluated", sampleSize: rows.length, settledRaceCount: financialRows.length, brierScore: brierScore(probabilities, outcomes), logLoss: logLoss(probabilities, outcomes), calibrationError: expectedCalibrationError(probabilities, outcomes), investmentYen, payoutYen, roi: investmentYen ? (payoutYen - investmentYen) / investmentYen : null, recoveryRate: investmentYen ? payoutYen / investmentYen : null, hitRate: outcomes.reduce((sum, value) => sum + value, 0) / outcomes.length, maximumDrawdownYen: maximumDrawdown(profits), sharpeLike: sharpeLike(profits) }; }
export function buildVersionedArtifact({ agentId, parentVersion = null, weights, calibration, metrics, trainingWindow, createdAt = new Date().toISOString() }) { const body = { agentId, parentVersion, weights, calibration, metrics, trainingWindow, createdAt }; const artifactHash = crypto.createHash("sha256").update(stableJson(body)).digest("hex"); return { ...body, modelVersion: `${agentId}-${createdAt.slice(0, 10)}-${artifactHash.slice(0, 12)}`, artifactHash }; }
export function rollbackEvent(agentId, currentVersion, targetVersion, occurredAt = new Date().toISOString()) { if (!currentVersion || !targetVersion || currentVersion === targetVersion) throw new Error("ロールバック元と先を指定してください"); return { learningEventId: crypto.randomUUID(), agentId, eventType: "rollback", previousVersion: currentVersion, nextVersion: targetVersion, occurredAt, details: { reason: "検証指標またはデータ品質ゲートによるロールバック" } }; }
export function expectedCalibrationError(probabilities, outcomes, binCount = 10) { const bins = Array.from({ length: binCount }, () => []); probabilities.forEach((p, i) => bins[Math.min(binCount - 1, Math.floor(Number(p) * binCount))].push(i)); return bins.reduce((sum, indices) => { if (!indices.length) return sum; const confidence = average(indices.map((i) => probabilities[i])); const accuracy = average(indices.map((i) => outcomes[i])); return sum + indices.length / probabilities.length * Math.abs(confidence - accuracy); }, 0); }
export function maximumDrawdown(profits) { let equity = 0; let peak = 0; let drawdown = 0; for (const profit of profits) { equity += Number(profit); peak = Math.max(peak, equity); drawdown = Math.max(drawdown, peak - equity); } return drawdown; }
function sharpeLike(values) { if (values.length < 2) return null; const mean = average(values); const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (values.length - 1); return variance > 0 ? mean / Math.sqrt(variance) * Math.sqrt(values.length) : null; }
function temperatureScale(probability, temperature) { const p = clamp(Number(probability), 1e-9, 1 - 1e-9); const logit = Math.log(p / (1 - p)) / temperature; return 1 / (1 + Math.exp(-logit)); }
function stamp(row) { return String(row.raceDate ?? row.predictedAt ?? row.timestamp ?? ""); } function identity(row) { return `${row.raceId ?? ""}|${row.horseNumber ?? ""}|${row.agentId ?? ""}`; } function between(value, start, end) { return value >= start && value <= end; }
function average(values) { return values.length ? values.reduce((sum, value) => sum + Number(value), 0) / values.length : 0; } function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); } function round(value, digits) { const scale = 10 ** digits; return Math.round(value * scale) / scale; }
function stableJson(value) { if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`; if (value && typeof value === "object") return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`; return JSON.stringify(value); }
function normalizeWeights(weights) { const values=Object.entries(weights).map(([key,value])=>[key,Math.max(0,Number(value)||0)]);const total=values.reduce((sum,[,value])=>sum+value,0);if(!(total>0))throw new Error("特徴量重みがすべて0です");return Object.fromEntries(values.map(([key,value])=>[key,value/total])); }
function agentLinearScore(weights,features){let weighted=0,available=0;for(const[feature,weight]of Object.entries(normalizeWeights(weights))){const value=agentFeatureValue(features,feature);if(value==null)continue;weighted+=value*weight;available+=weight;}return{score:available?weighted/available:0,coverage:available};}
function softmax(values,temperature){const maximum=Math.max(...values);const exponents=values.map((value)=>Math.exp((value-maximum)/Math.max(.01,temperature)));const total=exponents.reduce((sum,value)=>sum+value,0);return exponents.map((value)=>value/total);}
