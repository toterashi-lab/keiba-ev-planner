import crypto from "node:crypto";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { AGENT_DEFINITIONS } from "../model/agent-system.mjs";
import { buildVersionedArtifact, boundedWeightUpdate, chronologicalSplit, computeAgentWeightGradients, evaluateAgentRaces, evaluateLearningRows, fitBinaryTemperature, LEARNING_POLICY } from "../model/agent-learning.mjs";
import { initializeAgentSystemSchema, registerAgents } from "./agent-system-store.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const DATABASE_PATH = path.join(resolvePrivateDataDir(ROOT), "keiba.sqlite");

export function trainAgentModels(database, now = new Date().toISOString()) {
  initializeAgentSystemSchema(database);
  registerAgents(database, AGENT_DEFINITIONS, now);
  const reports = AGENT_DEFINITIONS.map((agent) => trainOne(database, agent, now));
  return { now, policy: LEARNING_POLICY, reports };
}

function trainOne(database, agent, now) {
  const rows = loadSettledHorseRows(database, agent.id);
  const raceScores = loadSettledRaceScores(database, agent.id);
  const learningRaces = loadSettledLearningRaces(database, agent.id);
  const metrics = evaluateLearningRows(rows, raceScores);
  const window = trainingWindow(learningRaces);
  const sampleSize = learningRaces.reduce((sum, race) => sum + race.entries.length, 0);
  if (sampleSize < LEARNING_POLICY.minimumSamples || !window) return { agentId: agent.id, status: "insufficient", sampleSize, settledRaceCount: learningRaces.length, minimumSamples: LEARNING_POLICY.minimumSamples, metrics };

  const split = chronologicalSplit(learningRaces, window);
  const current = database.prepare("select model_version,artifact_json from model_versions where agent_id=? and status='active' order by created_at desc limit 1").get(agent.id);
  const currentWeights = parseCurrentWeights(current, agent.weights);
  const gradients = computeAgentWeightGradients(split.train, { ...agent, weights: currentWeights });
  const trainingHorseRows = split.train.reduce((sum, race) => sum + race.entries.length, 0);
  const update = boundedWeightUpdate(currentWeights, gradients, { sampleSize: trainingHorseRows });
  const baselineValidation = evaluateAgentRaces(split.validation, currentWeights);
  const candidateValidation = evaluateAgentRaces(split.validation, update.weights);
  const baselineTest = evaluateAgentRaces(split.test, currentWeights);
  const candidateTest = evaluateAgentRaces(split.test, update.weights);
  const accepted = candidateValidation.logLoss <= baselineValidation.logLoss
    && candidateTest.logLoss <= baselineTest.logLoss
    && candidateValidation.top1Rate >= baselineValidation.top1Rate
    && candidateTest.top1Rate >= baselineTest.top1Rate;
  const calibrationRows = rows.filter((row) => String(row.predictedAt).slice(0, 10) >= window.validationStart
    && String(row.predictedAt).slice(0, 10) <= window.validationEnd);
  const calibration = fitBinaryTemperature(calibrationRows, { ...LEARNING_POLICY, minimumSamples: Math.max(50, Math.min(LEARNING_POLICY.minimumSamples, calibrationRows.length)) });
  const learningMetrics = { historicalOutput: metrics, baselineValidation, candidateValidation, baselineTest, candidateTest,
    accepted, acceptanceRule: "validation/test log-loss and top1 non-regression" };
  if (!accepted) {
    const rejectedRunId = crypto.randomUUID();
    database.exec("begin immediate");
    try {
      database.prepare(`insert into training_runs values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(rejectedRunId, agent.id, now, now,
        window.trainStart, window.trainEnd, window.validationStart, window.validationEnd, window.testStart, window.testEnd,
        "rejected", JSON.stringify({ settledHorseRows: rows.length, learningRaces: learningRaces.length }), JSON.stringify(learningMetrics), current?.model_version ?? null, null);
      database.prepare("insert into learning_events values(?,?,?,?,?,?,?,?)").run(crypto.randomUUID(), agent.id, rejectedRunId, "candidate_rejected",
        current?.model_version ?? null, null, JSON.stringify(learningMetrics), now);
      database.exec("commit");
    } catch (error) { database.exec("rollback"); throw error; }
    return { agentId: agent.id, status: "rejected", sampleSize, settledRaceCount: learningRaces.length, metrics: learningMetrics };
  }
  const artifact = buildVersionedArtifact({ agentId: agent.id, parentVersion: current?.model_version ?? null, weights: update.weights, calibration, metrics,
    trainingWindow: window, createdAt: now });
  const trainingRunId = crypto.randomUUID();
  database.exec("begin immediate");
  try {
    database.prepare(`insert into training_runs values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(trainingRunId, agent.id, now, now,
      artifact.trainingWindow.trainStart, artifact.trainingWindow.trainEnd, artifact.trainingWindow.validationStart, artifact.trainingWindow.validationEnd,
      artifact.trainingWindow.testStart, artifact.trainingWindow.testEnd, "completed", JSON.stringify({ settledHorseRows: rows.length, settledRaceScores: raceScores.length, learningRaces: learningRaces.length }), JSON.stringify(learningMetrics), current?.model_version ?? null, artifact.modelVersion);
    if (current?.model_version) database.prepare("update model_versions set status='retired' where model_version=? and status='active'").run(current.model_version);
    database.prepare("insert into model_versions values(?,?,?,?,?,?,?,?)").run(artifact.modelVersion, agent.id, trainingRunId, current?.model_version ?? null,
      artifact.artifactHash, JSON.stringify({ ...artifact, validation: learningMetrics }), "active", now);
    database.prepare("insert into calibration_models values(?,?,?,?,?,?,?,?)").run(crypto.randomUUID(), artifact.modelVersion, "win", "temperature", JSON.stringify(calibration), calibration.sampleSize, JSON.stringify(learningMetrics), now);
    const weight = database.prepare("insert into feature_weights(model_version,feature_name,weight,source) values(?,?,?,?)");
    for (const [featureName, value] of Object.entries(update.weights)) weight.run(artifact.modelVersion, featureName, value, "bounded_walk_forward_update");
    database.prepare("insert into learning_events values(?,?,?,?,?,?,?,?)").run(crypto.randomUUID(), agent.id, trainingRunId, "model_activated", current?.model_version ?? null, artifact.modelVersion, JSON.stringify({ calibration, metrics: learningMetrics }), now);
    database.exec("commit");
  } catch (error) { database.exec("rollback"); throw error; }
  return { agentId: agent.id, status: "activated", sampleSize, settledRaceCount: learningRaces.length, modelVersion: artifact.modelVersion, metrics: learningMetrics };
}

function loadSettledLearningRaces(database, agentId) {
  if (!hasResults(database)) return [];
  const rows = database.prepare(`select p.prediction_id predictionId,p.race_id raceId,p.predicted_at predictedAt,d.payload_json payloadJson,
      e.horse_number horseNumber,r.finish_position finishPosition
    from agent_predictions p join current_agent_prediction_status state on state.prediction_id=p.prediction_id and state.status='settled'
    join data_snapshots d on d.data_snapshot_id=p.data_snapshot_id and d.quality_status in('pass','warn')
    join complete_race_entries e on e.race_id=p.race_id
    join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
    where p.agent_id=? and p.initial_status='published' and d.observed_at<d.cutoff_at and p.odds_observed_at<=p.predicted_at
    order by p.predicted_at,p.race_id,e.horse_number`).all(agentId);
  const races = [];
  for (let start = 0; start < rows.length;) {
    let end = start + 1;
    while (end < rows.length && rows[end].predictionId === rows[start].predictionId) end += 1;
    const group = rows.slice(start, end);
    let payload;
    try { payload = JSON.parse(group[0].payloadJson); } catch { start = end; continue; }
    if (payload.hasTargetFields === true || Date.parse(payload.predictedAt) >= Date.parse(payload.cutoffAt)) { start = end; continue; }
    const features = new Map((payload.entries ?? []).map((entry) => [Number(entry.horseNumber), entry.features ?? {}]));
    const entries = group.map((row) => ({ horseNumber: Number(row.horseNumber), features: features.get(Number(row.horseNumber)) ?? {}, outcome: Number(row.finishPosition) === 1 ? 1 : 0 }));
    if (entries.length >= 2 && entries.filter((entry) => entry.outcome === 1).length === 1) races.push({ raceId: group[0].raceId,
      agentId, predictedAt: group[0].predictedAt, raceDate: String(group[0].predictedAt).slice(0, 10), entries });
    start = end;
  }
  return races;
}

function loadSettledHorseRows(database, agentId) {
  if (!hasResults(database)) return [];
  return database.prepare(`select p.prediction_id predictionId,p.race_id raceId,p.predicted_at predictedAt,p.agent_id agentId,h.horse_number horseNumber,h.calibrated_win_probability probability,
      case when r.finish_position=1 then 1 else 0 end outcome
    from agent_predictions p join current_agent_prediction_status state on state.prediction_id=p.prediction_id and state.status='settled'
    join prediction_horses h on h.prediction_id=p.prediction_id
    join complete_race_entries e on e.race_id=p.race_id and e.horse_number=h.horse_number
    join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
    where p.agent_id=? order by p.predicted_at,p.race_id,h.horse_number`).all(agentId);
}

function loadSettledRaceScores(database, agentId) {
  if (!hasResults(database)) return [];
  return database.prepare(`select p.prediction_id predictionId,p.race_id raceId,p.predicted_at predictedAt,
      s.investment_yen investmentYen,s.payout_yen payoutYen,s.profit_yen profitYen
    from agent_predictions p join current_agent_prediction_status state on state.prediction_id=p.prediction_id and state.status='settled'
    join agent_race_scores s on s.prediction_id=p.prediction_id
    where p.agent_id=? order by p.predicted_at,p.race_id`).all(agentId);
}

function trainingWindow(rows) {
  const dates = [...new Set(rows.map((row) => String(row.predictedAt).slice(0, 10)))].sort();
  if (dates.length < 3) return null;
  const validationIndex = Math.max(1, Math.floor(dates.length * 0.6));
  const testIndex = Math.max(validationIndex + 1, Math.floor(dates.length * 0.8));
  if (testIndex >= dates.length) return null;
  return { trainStart: dates[0], trainEnd: dates[validationIndex - 1], validationStart: dates[validationIndex], validationEnd: dates[testIndex - 1], testStart: dates[testIndex], testEnd: dates.at(-1) };
}

function parseCurrentWeights(current, fallback) {
  if (!current?.artifact_json) return fallback;
  try { return JSON.parse(current.artifact_json).weights ?? fallback; }
  catch { return fallback; }
}

function hasResults(database) {
  return database.prepare("select count(*) count from sqlite_master where type='view' and name='complete_race_results'").get().count === 1;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const database = new DatabaseSync(DATABASE_PATH);
  database.exec("pragma foreign_keys=on; pragma busy_timeout=30000;");
  try { console.log(JSON.stringify(trainAgentModels(database), null, 2)); }
  finally { database.close(); }
}
