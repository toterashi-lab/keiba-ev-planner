import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { auditCompletedGoal, inspectLiveCoverage } from "./goal-completion-audit.mjs";
import { captureModelDataSnapshot, captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";

const temp = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-goal-audit-"));
const artifactPath = path.join(temp, "model.json");
const referenceArtifactPath = path.join(temp, "reference-model.json");
const referenceAuditPath = path.join(temp, "reference-audit.json");
const marketOutputPath = path.join(temp, "market.json");
const generatorPath = path.join(temp, "generator.mjs");
const databaseAuditPath = path.join(temp, "database-audit.json");
const fieldAvailabilityAuditPath = path.join(temp, "field-availability-audit.json");
const publicationManifestPath = path.join(temp, "publication-manifest.json");
const publicationReceiptPath = path.join(temp, "publication-receipt.json");
const automationAuditPath = path.join(temp, "automation-audit.json");
const liveOutputPath = path.join(temp, "live-market-ev.json");
const publicLiveRacecardsPath = path.join(temp, "live-racecards.js");
const publicLiveModelOutputsPath = path.join(temp, "live-model-outputs.js");
const db = new DatabaseSync(":memory:");

try {
  db.exec(`
    create table complete_races(race_id text,race_date text,source_page_id integer);
    create table complete_race_entries(race_id text,horse_id text);
    create table complete_race_results(race_id text,horse_id text);
    create table complete_payouts(race_id text);
    create table historical_odds_jobs(race_id text,status text,request_key text,runner_count integer,win_price_count integer,place_price_count integer);
    create table historical_win_place_odds(race_id text,horse_number integer,win_odds real,place_odds_low real,place_odds_high real,time_basis text);
    create table historical_exotic_odds_jobs(race_id text,bet_type text,status text,price_count integer);
    create table historical_exotic_odds(race_id text,bet_type text,selection_key text,odds_low real,odds_high real,time_basis text);
    create table model_runs(id integer primary key,model_version text);
    create table model_quality_gates(model_run_id integer,gate_name text,status text);
    create table agents(agent_id text primary key,active integer not null);
    create table data_snapshots(data_snapshot_id text primary key);
    create table agent_predictions(prediction_id text primary key,agent_id text not null);
    create table prediction_horses(prediction_id text,horse_number integer);
    create table recommended_bets(recommended_bet_id text primary key,prediction_id text);
    create table agent_race_scores(prediction_id text primary key,agent_id text not null);
    create trigger data_snapshots_immutable_update before update on data_snapshots begin select raise(abort,'append-only'); end;
    create trigger agent_predictions_immutable_update before update on agent_predictions begin select raise(abort,'append-only'); end;
    create trigger prediction_horses_immutable_update before update on prediction_horses begin select raise(abort,'append-only'); end;
    create trigger recommended_bets_immutable_update before update on recommended_bets begin select raise(abort,'append-only'); end;
    create table live_ev_candidates(id integer primary key);
    create table live_ev_evaluations(candidate_id integer primary key);
    create table live_ev_validation_runs(id integer primary key);
    create table live_racecard_batches(id integer primary key,target_dates text,status text,race_count integer,entry_count integer,completed_at text);
    create table live_races(race_id text primary key,batch_id integer,race_date text,start_time text);
    create table live_entries(race_id text,horse_id text,batch_id integer);
    create table live_predictions(race_id text,horse_id text,model_version text,win_probability real);
    insert into complete_races values('r1','1996-01-01',1);
    insert into complete_race_entries values('r1','h1');
    insert into complete_race_results values('r1','h1');
    insert into complete_payouts values('r1');
    insert into historical_odds_jobs values('r1','complete','pw151ou-fixture',1,1,1);
    insert into historical_win_place_odds values('r1',1,2.0,1.2,1.4,'historical_closing_reference');
    insert into historical_exotic_odds_jobs values('r1','quinella','complete',1);
    insert into historical_exotic_odds values('r1','quinella','1-2',3.0,3.0,'historical_closing_reference');
    insert into model_runs values(1,'unit-model');
    insert into live_racecard_batches values(1,'2099-01-01','complete',1,5,'2026-01-01T00:00:00.000Z');
    insert into live_races values('live-r1',1,'2099-01-01','12:00');
    insert into live_entries values('live-r1','lh1',1),('live-r1','lh2',1),('live-r1','lh3',1),('live-r1','lh4',1),('live-r1','lh5',1);
    insert into live_predictions values('live-r1','lh1','unit-model',0.30),('live-r1','lh2','unit-model',0.25),
      ('live-r1','lh3','unit-model',0.20),('live-r1','lh4','unit-model',0.15),('live-r1','lh5','unit-model',0.10);
  `);
  const requiredGates = ["no_target_leakage", "historical_feature_time_order", "prediction_probability_sum_error", "expected_calibration_error",
    "max_calibration_bin_error", "calibration", "walk_forward", "ticket_probability_win", "ticket_probability_place",
    "ticket_probability_quinella", "ticket_probability_wide", "ticket_probability_exacta", "ticket_probability_trio", "ticket_probability_trifecta"];
  const insertGate = db.prepare("insert into model_quality_gates values(1,?,'pass')");
  for (const gate of requiredGates) insertGate.run(gate);
  const agentIds = ["safety", "sniper", "pace", "analyst", "contrarian"];
  const insertAgent = db.prepare("insert into agents values(?,1)");
  const insertScore = db.prepare("insert into agent_race_scores values(?,?)");
  for (const agentId of agentIds) {
    insertAgent.run(agentId);
    insertScore.run(`prediction-${agentId}`, agentId);
  }

  const artifact = {
    modelVersion: "unit-model",
    researchProbabilityStatus: "research_pass",
    noTargetLeakage: true,
    featureTimePolicy: { policy: "strictly-before-race-start; same-start races update together", rows: 1, rowsWithPriorHistory: 1, violations: 0, coverage: 1 },
    activeFeatureIndexes: [10, 11],
    activeFeatureKeys: ["priorWinRate", "priorPlaceRate"],
    featureKeys: ["priorWinRate", "priorPlaceRate"],
    featureAdmission: {
      method: "group-ablation-on-each-walk-forward-fold",
      fallback: false,
      admittedGroups: ["horse_form"],
    },
    dataCoverage: { minDate: "1996-01-01", maxDate: "1996-01-01", races: 1 },
    trainingSnapshot: captureModelDataSnapshot(db),
    trainingImplementation: captureModelImplementationSnapshot(),
    folds: [
      { trainEnd: "2024-01-01", calibrationStart: "2024-01-09", calibrationEnd: "2024-06-30", testStart: "2024-07-08", featureAblation: [{ id: "horse_form", pass: true }, { id: "pace_shape", pass: false }] },
      { trainEnd: "2024-07-01", calibrationStart: "2024-07-09", calibrationEnd: "2024-12-31", testStart: "2025-01-08", featureAblation: [{ id: "horse_form", pass: true }, { id: "pace_shape", pass: false }] },
    ],
    metrics: { maxProbabilitySumError: 1e-12, meanEce: 0.01, meanMaxCalibrationBinError: 0.03, meanLogLoss: 1.2, meanUniformLogLoss: 2.1 },
    ticketProbabilityStatus: "research_pass",
    ticketCalibrationPolicy: "calibration-only-one-standard-error-most-regularized-temperature",
    ticketCalibrationTemperatures: { win: 1, place: 1.5, quinella: 1.5, wide: 1.5, exacta: 1.5, trio: 1.75, trifecta: 2 },
    ticketMetrics: { method: "walk-forward-Plackett-Luce-all-ticket-candidate-calibration", byType:
      Object.fromEntries(["win", "place", "quinella", "wide", "exacta", "trio", "trifecta"].map((type) => [type, {
        researchPass: true, meanWinnerLogLoss: 1, meanUniformWinnerLogLoss: 2, meanEce: 0.01,
        meanSupportedMaximumCalibrationBinError: 0.02, maximumMassError: 0,
      }])) },
    ticketCalibrationUncertainty: uncertaintyFixture(),
  };
  fs.writeFileSync(artifactPath, JSON.stringify(artifact));
  const referenceArtifact = {
    status: "pass", researchProbabilityStatus: "research_pass", deploymentStatus: "benchmark_only", noTargetLeakage: true,
    modelVersion: "unit-reference-model", targetDates: ["2026-01-01", "2026-01-02"],
    split: { trainEnd: "2024-12-31", calibrationStart: "2025-01-08", calibrationEnd: "2025-12-24", embargoDays: 7 },
    counts: { trainRaces: 1, calibrationRaces: 0, targetRaces: 72, predictions: 946 },
    featureKeys: artifact.featureKeys, activeFeatureIndexes: [0], means: [0, 0], scales: [1, 1], weights: [0, 0],
    trainingImplementation: artifact.trainingImplementation,
    featureSelectionSource: "reference-asof-group-ablation-v1",
    featureSelectionSplit: { trainEnd: "2024-12-31", calibrationStart: "2025-01-08", calibrationEnd: "2025-12-24" },
    featureAblation: [{ id: "horse_form", pass: true }, { id: "pace_shape", pass: false }],
    ticketCalibrationUncertainty: uncertaintyFixture(),
    predictions: Array.from({ length: 946 }, (_, index) => ({ raceId: `r${Math.floor(index / 14)}`, horseId: `h${index}`, probability: 0.1 })),
  };
  fs.writeFileSync(referenceArtifactPath, JSON.stringify(referenceArtifact));
  const recommendationFixture = Array.from({ length: 72 }, (_, index) => ({
    recommendationSource: "ai_prediction_top_ticket", raceId: `r${index + 1}`, betType: "単勝",
    ticketKeys: ["1"], points: 1, investmentYen: 100, payoutYen: 0, expectedReturn: 0.8,
  }));
  fs.writeFileSync(referenceAuditPath, JSON.stringify({ status: "evaluation_only", modelVersion: "unit-reference-model",
    evaluationScope: "ai_prediction_top_ticket_only",
    recommendationCoverage: { predictions: 72, auditedRecommendations: 72, excludedCandidateRows: 1152 },
    recommendations: recommendationFixture,
    strategies: [{ name: "AI推奨・全レース", bets: 72, hits: 1, roi: 0.5 }] }));

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
  fs.writeFileSync(marketOutputPath, JSON.stringify({ status: "ready", modelVersion: "unit-reference-model", unitStakeYen: 100,
    logic: { engineVersion: "expectancy-engine-v3", deploymentStatus: "benchmark_only", referenceWeekExternalAudit: { status: "fail" } },
    candidates, predictions }));
  const liveCandidates = [];
  for (const betType of betTypes) {
    liveCandidates.push(liveCandidate(betType, "1点"));
    if (structured.has(betType)) {
      liveCandidates.push(liveCandidate(betType, "BOX"));
      liveCandidates.push(liveCandidate(betType, "フォーメーション"));
    }
  }
  const liveOutput = {
    status: "ready", generatedAt: "2026-01-01T00:01:00.000Z", snapshotKind: "pre_race", targetDates: ["2099-01-01"],
    modelVersion: "unit-model", abilityModelStatus: "research_pass", unitStakeYen: 100,
    predictionCoverage: { targetRaces: 1, predictedRaces: 1, oddsReadyRaces: 1 },
    coverageCounts: Object.fromEntries(betTypes.map((type) => [type, 1])),
    predictions: [{ raceId: "live-r1", status: "ready", predictionContext: "pre_race", modelVersion: "unit-model", marks: [1, 2, 3, 4, 5] }],
    candidates: liveCandidates,
  };
  fs.writeFileSync(liveOutputPath, JSON.stringify(liveOutput));
  const liveRacecardsText = `window.KEIBA_LIVE_RACECARDS = ${JSON.stringify({ results: [{ raceId: "live-r1" }] }, null, 2)};\n`;
  const liveModelOutputsText = `window.KEIBA_LIVE_MODEL_OUTPUTS = ${JSON.stringify(liveOutput, null, 2)};\n`;
  fs.writeFileSync(publicLiveRacecardsPath, liveRacecardsText);
  fs.writeFileSync(publicLiveModelOutputsPath, liveModelOutputsText);
  const publicationManifest = { version: "publication-manifest-v1", generatedAt: "2026-01-01T00:00:00.000Z",
    databaseRaces: 1, modelVersion: "unit-reference-model", modelCoverageRaces: 1,
    expectancyCandidateCount: candidates.length, expectancyPredictionCount: predictions.length,
    liveRaceCount: 1, liveCandidateCount: liveCandidates.length, livePredictionCount: 1,
    liveRacecardsSha256: crypto.createHash("sha256").update(liveRacecardsText).digest("hex"),
    liveModelOutputsSha256: crypto.createHash("sha256").update(liveModelOutputsText).digest("hex"), manifestId: "unit-manifest" };
  const publicationManifestText = `${JSON.stringify(publicationManifest, null, 2)}\n`;
  fs.writeFileSync(publicationManifestPath, publicationManifestText);
  fs.writeFileSync(publicationReceiptPath, JSON.stringify({ status: "verified", publishedAt: "2026-01-01T00:01:00.000Z",
    commit: "abc", remoteCommit: "abc", manifestId: "unit-manifest", remoteManifestId: "unit-manifest",
    manifestSha256: crypto.createHash("sha256").update(publicationManifestText).digest("hex"), databaseRaces: 1, modelVersion: "unit-reference-model",
    liveRaceCount: 1, liveCandidateCount: liveCandidates.length, livePredictionCount: 1,
    liveRacecardsSha256: publicationManifest.liveRacecardsSha256, remoteLiveRacecardsSha256: publicationManifest.liveRacecardsSha256,
    liveModelOutputsSha256: publicationManifest.liveModelOutputsSha256, remoteLiveModelOutputsSha256: publicationManifest.liveModelOutputsSha256 }));
  fs.writeFileSync(generatorPath, "export const preRaceOnly = true;\n");
  fs.writeFileSync(databaseAuditPath, JSON.stringify({ pass: true, races: 1, failedChecks: 0, incompleteCompleteJobs: 0,
    missingRaw: 0, corruptRaw: 0, orphanRaces: 0 }));
  fs.writeFileSync(fieldAvailabilityAuditPath, JSON.stringify({ version: "field-availability-audit-v1", pass: true,
    completeRunners: 1, fields: ["body_weight", "popularity", "official_time"].map((field) => ({
      field, missingRows: 0, officiallyUnavailableRows: 0, parserMissingRows: 0,
    })) }));
  const automationTasks = ["KeibaEV-JRA-Free-Backfill", "KeibaEV-PostBackfill-Model", "KeibaEV-JRA-Current-Sync",
    "KeibaEV-JRA-Live-Racecards", "KeibaEV-JRA-Live-Odds", "KeibaEV-JRA-Live-Odds-Offset", "KeibaEV-Web-Publish"]
    .map((name) => ({ name, pass: true, exists: true, enabled: true, actionMatches: true,
      triggerCount: name.startsWith("KeibaEV-JRA-Live-Odds") ? 48 : 1 }));
  fs.writeFileSync(automationAuditPath, JSON.stringify({ version: "automation-audit-v1", checkedAt: new Date().toISOString(),
    pass: true, requiredTaskCount: automationTasks.length, tasks: automationTasks }));
  const pipeline = path.join(temp, "pipeline");
  fs.writeFileSync(pipeline, "ok");

  const report = { readiness: { ready: true, coverage: { from: "1996-01", to: "2026-07", expectedMonths: 367 } }, checks: [], failures: [] };
  auditCompletedGoal(db, report, { artifactPath, referenceArtifactPath, referenceAuditPath, marketOutputPath, generatorPath, databaseAuditPath,
    fieldAvailabilityAuditPath, publicationManifestPath, publicationReceiptPath, automationAuditPath, liveOutputPath,
    publicLiveRacecardsPath, publicLiveModelOutputsPath,
    today: "2026-01-01", pipelineFiles: [pipeline] });
  if (report.failures.length || report.checks.length !== 32) throw new Error(`completion audit failed: ${report.failures.join(", ")}`);
  const liveFixture = JSON.parse(fs.readFileSync(liveOutputPath, "utf8"));
  if (!inspectLiveCoverage(db, artifact, liveFixture, { today: "2026-01-01" }).pass) throw new Error("valid live coverage was rejected");
  const missingPrediction = structuredClone(liveFixture);
  missingPrediction.predictions = [];
  if (inspectLiveCoverage(db, artifact, missingPrediction, { today: "2026-01-01" }).pass) throw new Error("missing live prediction was accepted");
  const missingFormation = structuredClone(liveFixture);
  missingFormation.candidates = missingFormation.candidates.filter((row) => !(row.betType === "3連単" && row.method === "フォーメーション"));
  if (inspectLiveCoverage(db, artifact, missingFormation, { today: "2026-01-01" }).pass) throw new Error("missing formation was accepted");
  const staleOutput = structuredClone(liveFixture);
  staleOutput.generatedAt = "2025-12-31T23:59:59.000Z";
  if (inspectLiveCoverage(db, artifact, staleOutput, { today: "2026-01-01" }).pass) throw new Error("stale live output was accepted");
  const postStartOdds = structuredClone(liveFixture);
  postStartOdds.candidates[0].oddsObservedAt = "2099-01-01T03:00:00Z";
  if (inspectLiveCoverage(db, artifact, postStartOdds, { today: "2026-01-01" }).pass) throw new Error("post-start odds were accepted");
  console.log(JSON.stringify({ status: "pass", checks: report.checks.length, races: predictions.length, candidates: candidates.length,
    liveCoverageFailClosed: ["missing_prediction", "missing_formation", "stale_output", "post_start_odds"] }, null, 2));
} finally {
  db.close();
  fs.rmSync(temp, { recursive: true, force: true });
}

function candidate(raceNo, betType, method) {
  return { date: "2026-01-01", meetingName: "検査開催", raceNo, betType, method, points: 1, totalInvestmentYen: 100,
    adoptedExpectedReturn: 1.05, modelVersion: "unit-reference-model", recommendationEligible: false, externalValidationStatus: "fail",
    optimizationScenarios: method === "1点" ? ["single_point"] : ["ability_probability", "component_ev"] };
}

function uncertaintyFixture() {
  return Object.fromEntries(["win", "place", "quinella", "wide", "exacta", "trio", "trifecta"].map((type) => [type, [
    { index: 0, lower: 0, upper: 0.1, count: 100, predicted: 0.05, observed: 0.04, observedLower90: 0.02, downsideError90: 0.03 },
    { index: 1, lower: 0.1, upper: 1, count: 100, predicted: 0.2, observed: 0.2, observedLower90: 0.15, downsideError90: 0.05 },
  ]]));
}

function liveCandidate(betType, method) {
  return { raceId: "live-r1", betType, method, status: "ready", predictionContext: "pre_race", modelVersion: "unit-model",
    baseBatchId: 10, exoticBatchId: 11, oddsObservedAt: "2026-01-01T00:00:30.000Z",
    points: 1, totalInvestmentYen: 100, adoptedExpectedReturn: 1.05 };
}
