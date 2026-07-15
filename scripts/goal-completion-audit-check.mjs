import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { auditCompletedGoal } from "./goal-completion-audit.mjs";

const temp = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-goal-audit-"));
const artifactPath = path.join(temp, "model.json");
const marketOutputPath = path.join(temp, "market.json");
const generatorPath = path.join(temp, "generator.mjs");
const databaseAuditPath = path.join(temp, "database-audit.json");
const db = new DatabaseSync(":memory:");

try {
  db.exec(`
    create table complete_races(race_id text,race_date text);
    create table complete_race_entries(race_id text,horse_id text);
    create table complete_payouts(race_id text);
    create table model_runs(id integer primary key,model_version text);
    create table model_quality_gates(model_run_id integer,gate_name text,status text);
    create table live_ev_candidates(id integer primary key);
    create table live_ev_evaluations(candidate_id integer primary key);
    create table live_ev_validation_runs(id integer primary key);
    insert into complete_races values('r1','1996-01-01');
    insert into complete_race_entries values('r1','h1');
    insert into complete_payouts values('r1');
    insert into model_runs values(1,'unit-model');
  `);
  const requiredGates = ["no_target_leakage", "historical_feature_time_order", "prediction_probability_sum_error", "expected_calibration_error",
    "max_calibration_bin_error", "calibration", "walk_forward"];
  const insertGate = db.prepare("insert into model_quality_gates values(1,?,'pass')");
  for (const gate of requiredGates) insertGate.run(gate);

  const artifact = {
    modelVersion: "unit-model",
    researchProbabilityStatus: "research_pass",
    noTargetLeakage: true,
    featureTimePolicy: { policy: "strictly-before-race-start; same-start races update together", rows: 1, rowsWithPriorHistory: 1, violations: 0, coverage: 1 },
    activeFeatureIndexes: [10, 11],
    activeFeatureKeys: ["priorWinRate", "priorPlaceRate"],
    featureAdmission: {
      method: "group-ablation-on-each-walk-forward-fold",
      fallback: false,
      admittedGroups: ["horse_form"],
    },
    dataCoverage: { minDate: "1996-01-01", maxDate: "1996-01-01", races: 1 },
    folds: [
      { trainEnd: "2024-01-01", calibrationStart: "2024-01-09", calibrationEnd: "2024-06-30", testStart: "2024-07-08", featureAblation: [{ id: "horse_form", pass: true }] },
      { trainEnd: "2024-07-01", calibrationStart: "2024-07-09", calibrationEnd: "2024-12-31", testStart: "2025-01-08", featureAblation: [{ id: "horse_form", pass: true }] },
    ],
    metrics: { maxProbabilitySumError: 1e-12, meanEce: 0.01, meanMaxCalibrationBinError: 0.03, meanLogLoss: 1.2, meanUniformLogLoss: 2.1 },
  };
  fs.writeFileSync(artifactPath, JSON.stringify(artifact));

  const candidates = [];
  const predictions = [];
  const betTypes = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
  const structured = new Set(["馬連", "ワイド", "馬単", "3連複", "3連単"]);
  for (let raceNo = 1; raceNo <= 72; raceNo += 1) {
    predictions.push({ date: "2026-01-01", meetingName: "検査開催", raceNo });
    for (const betType of betTypes) {
      candidates.push(candidate(raceNo, betType, "1点"));
      if (structured.has(betType)) {
        candidates.push(candidate(raceNo, betType, "BOX"));
        candidates.push(candidate(raceNo, betType, "フォーメーション"));
      }
    }
  }
  fs.writeFileSync(marketOutputPath, JSON.stringify({ status: "ready", unitStakeYen: 100, candidates, predictions }));
  fs.writeFileSync(generatorPath, "export const preRaceOnly = true;\n");
  fs.writeFileSync(databaseAuditPath, JSON.stringify({ pass: true, races: 1, failedChecks: 0, incompleteCompleteJobs: 0,
    missingRaw: 0, corruptRaw: 0, orphanRaces: 0 }));
  const pipeline = path.join(temp, "pipeline");
  fs.writeFileSync(pipeline, "ok");

  const report = { readiness: { ready: true, coverage: { from: "1996-01", to: "2026-07", expectedMonths: 367 } }, checks: [], failures: [] };
  auditCompletedGoal(db, report, { artifactPath, marketOutputPath, generatorPath, databaseAuditPath, pipelineFiles: [pipeline] });
  if (report.failures.length || report.checks.length !== 18) throw new Error(`completion audit failed: ${report.failures.join(", ")}`);
  console.log(JSON.stringify({ status: "pass", checks: report.checks.length, races: predictions.length, candidates: candidates.length }, null, 2));
} finally {
  db.close();
  fs.rmSync(temp, { recursive: true, force: true });
}

function candidate(raceNo, betType, method) {
  return { date: "2026-01-01", meetingName: "検査開催", raceNo, betType, method, points: 1, totalInvestmentYen: 100,
    adoptedExpectedReturn: 1.05, optimizationScenarios: method === "1点" ? ["single_point"] : ["ability_probability", "component_ev"] };
}
