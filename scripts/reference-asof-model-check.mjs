import fs from "node:fs";
import path from "node:path";
import { FEATURE_KEYS } from "./train-expectancy-model.mjs";
import { captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const privateDir = resolvePrivateDataDir(root);
const artifact = JSON.parse(fs.readFileSync(path.join(privateDir, "models", "reference-asof-model.json"), "utf8"));
const audit = JSON.parse(fs.readFileSync(path.join(privateDir, "models", "reference-ev-audit.json"), "utf8"));
const output = JSON.parse(fs.readFileSync(path.join("data", "model-outputs-2026-07-11-2026-07-12.json"), "utf8"));
const types = ["win", "place", "quinella", "wide", "exacta", "trio", "trifecta"];
const failures = [];

if (artifact.status !== "pass" || artifact.researchProbabilityStatus !== "research_pass" || !artifact.noTargetLeakage) failures.push("as-of artifact status");
if (artifact.deploymentStatus !== "benchmark_only") failures.push("deployment must stay benchmark-only");
if (artifact.split.trainEnd >= artifact.targetDates[0] || artifact.split.calibrationEnd >= artifact.targetDates[0]
  || artifact.split.embargoDays < 7) failures.push("time split or embargo");
if (artifact.counts.targetRaces !== 72 || artifact.counts.predictions !== 946 || artifact.predictions.length !== 946) failures.push("prediction coverage");
if (artifact.featureTimePolicy.violations !== 0 || artifact.featureTimePolicy.coverage !== 1) failures.push("feature timing");
const currentImplementation = captureModelImplementationSnapshot();
if (artifact.featureSelectionSource !== "reference-asof-group-ablation-v1"
  || artifact.featureSelectionSplit?.calibrationEnd >= artifact.targetDates[0]
  || !artifact.featureAblation?.some((group) => group.id === "pace_shape")) failures.push("as-of feature selection");
if (artifact.trainingImplementation?.fingerprint !== currentImplementation.fingerprint
  || artifact.featureKeys?.length !== FEATURE_KEYS.length
  || artifact.featureKeys.some((key, index) => key !== FEATURE_KEYS[index])
  || ![artifact.means, artifact.scales, artifact.weights].every((values) => values?.length === FEATURE_KEYS.length)
  || artifact.activeFeatureIndexes.some((index) => index < 0 || index >= FEATURE_KEYS.length)) failures.push("model artifact compatibility");

const byRace = group(artifact.predictions, (row) => row.raceId);
if (byRace.size !== 72) failures.push(`prediction races ${byRace.size}/72`);
for (const [raceId, rows] of byRace) {
  const total = rows.reduce((sum, row) => sum + row.probability, 0);
  if (Math.abs(total - 1) > 1e-9 || rows.some((row) => !(row.probability > 0 && row.probability < 1)
    || !Number.isInteger(row.historyStarts) || row.historyStarts < 0)) failures.push(`${raceId}: invalid probability/history`);
  if (rows.some((row) => !row.agentSignals
    || artifact.activeFeatureGroups.some((group) => row.agentSignals[group]?.status !== "available")
    || Object.values(row.agentSignals).some((signal) => signal.status === "available"
      && (!Number.isFinite(signal.contribution) || !Array.isArray(signal.topFactors))))) {
    failures.push(`${raceId}: specialist agent signals`);
  }
}

for (const type of types) {
  const bins = artifact.ticketCalibrationUncertainty?.[type];
  if (!Array.isArray(bins) || !bins.length || bins.at(-1).upper !== 1) { failures.push(`${type}: uncertainty bins`); continue; }
  if (bins.some((bin, index) => !(bin.count > 0) || !(bin.upper > bin.lower)
    || index > 0 && bin.lower !== bins[index - 1].upper
    || !Number.isFinite(bin.observedLower90) || !Number.isFinite(bin.downsideError90)
    || bin.observedLower90 < 0 || bin.observedLower90 > 1 || bin.downsideError90 < 0)) failures.push(`${type}: invalid uncertainty bin`);
}

if (audit.modelVersion !== artifact.modelVersion || audit.status !== "evaluation_only") failures.push("external audit version/status");
const primary = audit.strategies.find((row) => row.name === "AI推奨・全レース");
if (audit.evaluationScope !== "ai_prediction_top_ticket_only"
  || audit.recommendationCoverage?.auditedRecommendations !== 72
  || audit.recommendations?.length !== 72
  || audit.recommendations.some((row) => row.recommendationSource !== "ai_prediction_top_ticket")
  || !primary || primary.roi >= 1 || primary.bets !== 72) failures.push("AI recommendation external ROI gate");
if (output.modelVersion !== artifact.modelVersion || output.predictions.length !== 72
  || output.predictions.some((row) => row.modelVersion !== artifact.modelVersion || row.predictionContext !== "out_of_sample_ability_model")) failures.push("public prediction model coverage");
if (output.predictions.some((row) => !Array.isArray(row.forecastPanel) || row.forecastPanel.length < 10
  || row.masterConsensus?.agent !== "chief-expectancy-agent"
  || row.forecastPanel.filter((agent) => agent.status === "available").length < 3)) failures.push("specialist forecast panel");
if (output.logic.deploymentStatus !== "benchmark_only" || output.logic.referenceWeekExternalAudit?.status !== "fail") failures.push("public fail-closed gate");
if (output.candidates.some((row) => row.recommendationEligible !== false || row.externalValidationStatus !== "fail")) failures.push("candidate purchase gate");

if (failures.length) {
  for (const failure of failures) console.error(`NG ${failure}`);
  process.exit(1);
}
console.log(JSON.stringify({ status: "pass", modelVersion: artifact.modelVersion, races: byRace.size,
  predictions: artifact.predictions.length, ticketTypes: types.length, externalAudit: { bets: primary.bets, roi: primary.roi },
  deploymentStatus: artifact.deploymentStatus }, null, 2));

function group(rows, keyOf) { const result = new Map(); for (const row of rows) { const key = keyOf(row); if (!result.has(key)) result.set(key, []); result.get(key).push(row); } return result; }
