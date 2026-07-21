import crypto from "node:crypto";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { AGENT_DEFINITIONS } from "../model/agent-system.mjs";
import { buildVersionedArtifact, boundedWeightUpdate, evaluateLearningRows, fitBinaryTemperature, LEARNING_POLICY } from "../model/agent-learning.mjs";
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
  const rows = loadSettledRows(database, agent.id);
  const calibration = fitBinaryTemperature(rows, LEARNING_POLICY);
  const metrics = evaluateLearningRows(rows);
  const window = trainingWindow(rows);
  if (calibration.status !== "fitted" || !window) return { agentId: agent.id, status: "insufficient", sampleSize: rows.length, minimumSamples: LEARNING_POLICY.minimumSamples, metrics };

  const current = database.prepare("select model_version from model_versions where agent_id=? and status='active' order by created_at desc limit 1").get(agent.id);
  const update = boundedWeightUpdate(agent.weights, {}, { sampleSize: rows.length });
  const artifact = buildVersionedArtifact({ agentId: agent.id, parentVersion: current?.model_version ?? null, weights: update.weights, calibration, metrics,
    trainingWindow: window, createdAt: now });
  const trainingRunId = crypto.randomUUID();
  database.exec("begin immediate");
  try {
    database.prepare(`insert into training_runs values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(trainingRunId, agent.id, now, now,
      artifact.trainingWindow.trainStart, artifact.trainingWindow.trainEnd, artifact.trainingWindow.validationStart, artifact.trainingWindow.validationEnd,
      artifact.trainingWindow.testStart, artifact.trainingWindow.testEnd, "completed", JSON.stringify({ settledHorseRows: rows.length }), JSON.stringify(metrics), current?.model_version ?? null, artifact.modelVersion);
    database.prepare("insert into model_versions values(?,?,?,?,?,?,?,?)").run(artifact.modelVersion, agent.id, trainingRunId, current?.model_version ?? null,
      artifact.artifactHash, JSON.stringify(artifact), "candidate", now);
    database.prepare("insert into calibration_models values(?,?,?,?,?,?,?,?)").run(crypto.randomUUID(), artifact.modelVersion, "win", "temperature", JSON.stringify(calibration), calibration.sampleSize, JSON.stringify(metrics), now);
    const weight = database.prepare("insert into feature_weights(model_version,feature_name,weight,source) values(?,?,?,?)");
    for (const [featureName, value] of Object.entries(update.weights)) weight.run(artifact.modelVersion, featureName, value, "bounded_walk_forward_update");
    database.prepare("insert into learning_events values(?,?,?,?,?,?,?,?)").run(crypto.randomUUID(), agent.id, trainingRunId, "candidate_created", current?.model_version ?? null, artifact.modelVersion, JSON.stringify({ calibration, metrics }), now);
    database.exec("commit");
  } catch (error) { database.exec("rollback"); throw error; }
  return { agentId: agent.id, status: "candidate_created", sampleSize: rows.length, modelVersion: artifact.modelVersion, metrics };
}

function loadSettledRows(database, agentId) {
  if (!hasResults(database)) return [];
  return database.prepare(`select p.race_id raceId,p.predicted_at predictedAt,p.agent_id agentId,h.horse_number horseNumber,h.calibrated_win_probability probability,
      case when r.finish_position=1 then 1 else 0 end outcome,s.investment_yen investmentYen,s.payout_yen payoutYen,s.profit_yen profitYen
    from agent_predictions p join current_agent_prediction_status state on state.prediction_id=p.prediction_id and state.status='settled'
    join prediction_horses h on h.prediction_id=p.prediction_id
    join complete_race_entries e on e.race_id=p.race_id and e.horse_number=h.horse_number
    join complete_race_results r on r.race_id=e.race_id and r.horse_id=e.horse_id
    join agent_race_scores s on s.prediction_id=p.prediction_id
    where p.agent_id=? order by p.predicted_at,p.race_id,h.horse_number`).all(agentId);
}

function trainingWindow(rows) {
  const dates = [...new Set(rows.map((row) => String(row.predictedAt).slice(0, 10)))].sort();
  if (dates.length < 3) return null;
  const validationIndex = Math.max(1, Math.floor(dates.length * 0.6));
  const testIndex = Math.max(validationIndex + 1, Math.floor(dates.length * 0.8));
  if (testIndex >= dates.length) return null;
  return { trainStart: dates[0], trainEnd: dates[validationIndex - 1], validationStart: dates[validationIndex], validationEnd: dates[testIndex - 1], testStart: dates[testIndex], testEnd: dates.at(-1) };
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
