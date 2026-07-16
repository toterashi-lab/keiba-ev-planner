import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { inspectBackfillReadiness } from "./backfill-readiness.mjs";
import { captureModelDataSnapshot, captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";
import { isPreRaceObservation } from "./race-time.mjs";

const PRIVATE_DIR = path.join("data", "jra-free-private");
const OUTPUT = path.join(PRIVATE_DIR, "models", "goal-completion-audit.json");
const DATABASE_AUDIT = path.join(PRIVATE_DIR, "models", "database-audit.json");
const FIELD_AVAILABILITY_AUDIT = path.join(PRIVATE_DIR, "models", "field-availability-audit.json");
const PUBLICATION_RECEIPT = path.join(PRIVATE_DIR, "models", "publication-receipt.json");
const AUTOMATION_AUDIT = path.join(PRIVATE_DIR, "models", "automation-audit.json");
const PUBLICATION_MANIFEST = path.join("public", "data", "publication-manifest.json");
const PUBLIC_LIVE_RACECARDS = path.join("public", "data", "live-racecards.js");
const PUBLIC_LIVE_MODEL_OUTPUTS = path.join("public", "data", "live-model-outputs.js");
const ARTIFACT = path.join(PRIVATE_DIR, "models", "ability-softmax-v1.json");
const REFERENCE_ARTIFACT = path.join(PRIVATE_DIR, "models", "reference-asof-model.json");
const REFERENCE_EV_AUDIT = path.join(PRIVATE_DIR, "models", "reference-ev-audit.json");
const LIVE_OUTPUT = path.join(PRIVATE_DIR, "models", "live-market-ev.json");
const MARKET_OUTPUT = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");
const BET_TYPES = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const STRUCTURED_TYPES = ["馬連", "ワイド", "馬単", "3連複", "3連単"];
const REQUIRED_AUTOMATION_TASKS = ["KeibaEV-JRA-Free-Backfill", "KeibaEV-PostBackfill-Model", "KeibaEV-JRA-Current-Sync",
  "KeibaEV-JRA-Live-Racecards", "KeibaEV-JRA-Live-Odds", "KeibaEV-JRA-Live-Odds-Offset", "KeibaEV-Web-Publish"];
if (import.meta.url === pathToFileURL(process.argv[1]).href) runAudit();

function runAudit() {
  const requireComplete = process.argv.includes("--require-complete");
  const db = new DatabaseSync(path.join(PRIVATE_DIR, "keiba.sqlite"), { readOnly: true });
  db.exec("PRAGMA busy_timeout=30000; BEGIN");
  try {
    const readiness = inspectBackfillReadiness(db);
    const report = {
      status: readiness.ready ? "checking" : "pending_backfill",
      checkedAt: new Date().toISOString(),
      objective: "30-year audited JRA data, leakage-safe walk-forward ability model, and all-race/all-ticket expectancy rankings",
      readiness,
      checks: [],
      failures: [],
    };
    if (!readiness.ready) {
      writeReport(report);
      console.log(JSON.stringify({ status: report.status, complete: readiness.counts.complete ?? 0, expected: readiness.coverage.expectedMonths, pending: readiness.incompleteMonths.length }));
      if (requireComplete) process.exitCode = 5;
    } else {
      auditCompletedGoal(db, report);
      report.status = report.failures.length ? "failed" : "complete";
      writeReport(report);
      console.log(JSON.stringify({ status: report.status, checks: report.checks.length, failures: report.failures }, null, 2));
      if (report.failures.length) process.exitCode = 4;
    }
  } finally {
    db.exec("ROLLBACK");
    db.close();
  }
}

export function auditCompletedGoal(database, report, options = {}) {
  check(report, "backfill_month_continuity", report.readiness.ready, report.readiness.coverage);
  const coverage = database.prepare(`select min(race_date) minDate,max(race_date) maxDate,count(*) races,
    (select count(*) from complete_race_entries) runners,(select count(*) from complete_payouts) payouts
    from complete_races`).get();
  check(report, "normalized_database_nonempty", coverage.races > 0 && coverage.runners > 0 && coverage.payouts > 0, coverage);
  const historicalOddsReady = database.prepare(`select count(*) count from sqlite_master
    where type='table' and name='historical_odds_jobs'`).get().count === 1;
  const historicalOdds = historicalOddsReady ? database.prepare(`select
    count(*) total,
    sum(case when status='complete' then 1 else 0 end) complete,
    sum(case when status<>'complete' then 1 else 0 end) pending,
    (select count(distinct race_id) from historical_win_place_odds) pricedRaces,
    (select count(*) from historical_win_place_odds where win_odds is null or place_odds_low is null or place_odds_high is null) missingPrices
    from historical_odds_jobs`).get() : null;
  check(report, "historical_win_place_odds_complete", historicalOddsReady
    && historicalOdds.total === coverage.races
    && historicalOdds.complete === coverage.races
    && historicalOdds.pending === 0
    && historicalOdds.pricedRaces === coverage.races
    && historicalOdds.missingPrices === 0,
  historicalOdds ?? { status: "missing" });
  const databaseAuditPath = options.databaseAuditPath ?? DATABASE_AUDIT;
  const databaseAudit = fs.existsSync(databaseAuditPath) ? JSON.parse(fs.readFileSync(databaseAuditPath, "utf8")) : null;
  check(report, "raw_archive_hash_audit", databaseAudit?.pass === true
    && databaseAudit.races === coverage.races
    && databaseAudit.failedChecks === 0
    && databaseAudit.incompleteCompleteJobs === 0
    && databaseAudit.missingRaw === 0
    && databaseAudit.corruptRaw === 0
    && databaseAudit.orphanRaces === 0,
  databaseAudit ?? { path: databaseAuditPath, status: "missing" });
  const fieldAvailabilityAuditPath = options.fieldAvailabilityAuditPath ?? FIELD_AVAILABILITY_AUDIT;
  const fieldAvailabilityAudit = fs.existsSync(fieldAvailabilityAuditPath)
    ? JSON.parse(fs.readFileSync(fieldAvailabilityAuditPath, "utf8")) : null;
  check(report, "source_field_availability_audit", fieldAvailabilityAudit?.version === "field-availability-audit-v1"
    && fieldAvailabilityAudit.pass === true
    && fieldAvailabilityAudit.completeRunners === coverage.runners
    && fieldAvailabilityAudit.fields?.length === 3
    && fieldAvailabilityAudit.fields.every((field) => field.parserMissingRows === 0
      && field.missingRows === field.officiallyUnavailableRows),
  fieldAvailabilityAudit ?? { path: fieldAvailabilityAuditPath, status: "missing" });

  const artifactPath = options.artifactPath ?? ARTIFACT;
  const marketOutputPath = options.marketOutputPath ?? MARKET_OUTPUT;
  const generatorPath = options.generatorPath ?? "scripts/generate-market-ev.mjs";
  if (!fs.existsSync(artifactPath)) {
    check(report, "trained_model_artifact", false, { path: artifactPath });
    return;
  }
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  check(report, "model_database_coverage", artifact.dataCoverage?.races === coverage.races
    && artifact.dataCoverage?.minDate === coverage.minDate && artifact.dataCoverage?.maxDate === coverage.maxDate,
  { model: artifact.dataCoverage, database: coverage });
  const currentTrainingSnapshot = captureModelDataSnapshot(database);
  check(report, "model_data_snapshot_freshness", artifact.trainingSnapshot?.version === "model-data-snapshot-v1"
    && artifact.trainingSnapshot.fingerprint === currentTrainingSnapshot.fingerprint,
  { model: artifact.trainingSnapshot, database: currentTrainingSnapshot });
  const currentTrainingImplementation = captureModelImplementationSnapshot();
  check(report, "model_implementation_snapshot_freshness",
    artifact.trainingImplementation?.version === "model-implementation-snapshot-v1"
      && artifact.trainingImplementation.fingerprint === currentTrainingImplementation.fingerprint,
  { model: artifact.trainingImplementation, current: currentTrainingImplementation });
  check(report, "walk_forward_folds", artifact.folds?.length >= 2
    && artifact.folds.every((fold) => fold.trainEnd < fold.calibrationStart && fold.calibrationEnd < fold.testStart), artifact.folds);
  check(report, "walk_forward_feature_admission",
    artifact.featureAdmission?.method === "group-ablation-on-each-walk-forward-fold"
      && artifact.featureAdmission?.fallback === false
      && artifact.featureAdmission?.admittedGroups?.length > 0
      && artifact.activeFeatureIndexes?.length > 0
      && artifact.activeFeatureKeys?.length === artifact.activeFeatureIndexes?.length
      && artifact.folds.every((fold) => Array.isArray(fold.featureAblation) && fold.featureAblation.length > 0
        && fold.featureAblation.some((group) => group.id === "pace_shape")), {
      featureAdmission: artifact.featureAdmission,
      activeFeatureKeys: artifact.activeFeatureKeys,
      paceShapeEvaluatedInEveryFold: artifact.folds?.every((fold) => fold.featureAblation?.some((group) => group.id === "pace_shape")),
    });
  check(report, "probability_research_gate", artifact.researchProbabilityStatus === "research_pass", {
    status: artifact.researchProbabilityStatus, metrics: artifact.metrics,
  });
  check(report, "target_leakage_prevention", artifact.noTargetLeakage === true, { noTargetLeakage: artifact.noTargetLeakage });
  check(report, "historical_feature_time_order", artifact.featureTimePolicy?.violations === 0
    && artifact.featureTimePolicy?.coverage === 1
    && artifact.featureTimePolicy?.policy === "strictly-before-race-start; same-start races update together",
  artifact.featureTimePolicy);
  check(report, "probability_sum", artifact.metrics?.maxProbabilitySumError <= 1e-6, { value: artifact.metrics?.maxProbabilitySumError, threshold: 1e-6 });
  check(report, "calibration", artifact.metrics?.meanEce <= 0.025 && artifact.metrics?.meanMaxCalibrationBinError <= 0.075, {
    meanEce: artifact.metrics?.meanEce, meanMaxCalibrationBinError: artifact.metrics?.meanMaxCalibrationBinError,
  });
  check(report, "uniform_baseline_improvement", artifact.metrics?.meanLogLoss < artifact.metrics?.meanUniformLogLoss, {
    logLoss: artifact.metrics?.meanLogLoss, uniformLogLoss: artifact.metrics?.meanUniformLogLoss,
  });
  const ticketMetricTypes = Object.keys(artifact.ticketMetrics?.byType ?? {});
  check(report, "all_ticket_probability_walk_forward", artifact.ticketProbabilityStatus === "research_pass"
    && artifact.ticketCalibrationPolicy === "calibration-only-one-standard-error-most-regularized-temperature"
    && artifact.ticketMetrics?.method === "walk-forward-Plackett-Luce-all-ticket-candidate-calibration"
    && BET_TYPES.length === ticketMetricTypes.length
    && Object.values(artifact.ticketMetrics.byType).every((metric) => metric.researchPass === true
      && metric.meanWinnerLogLoss < metric.meanUniformWinnerLogLoss && metric.meanEce <= 0.025
      && metric.meanSupportedMaximumCalibrationBinError <= 0.1 && metric.maximumMassError <= 1e-8)
    && Object.values(artifact.ticketCalibrationTemperatures ?? {}).length === BET_TYPES.length
    && Object.values(artifact.ticketCalibrationTemperatures).every((temperature) => temperature >= 1), {
      status: artifact.ticketProbabilityStatus,
      temperatures: artifact.ticketCalibrationTemperatures,
      metrics: artifact.ticketMetrics,
    });
  const uncertaintyTypes = Object.keys(artifact.ticketCalibrationUncertainty ?? {});
  check(report, "ticket_probability_wilson_uncertainty", uncertaintyTypes.length === BET_TYPES.length
    && Object.values(artifact.ticketCalibrationUncertainty).every((bins) => Array.isArray(bins) && bins.length > 0
      && bins.at(-1).upper === 1 && bins.every((bin) => bin.count > 0
        && Number.isFinite(bin.observedLower90) && Number.isFinite(bin.downsideError90) && bin.downsideError90 >= 0)), {
      policy: "log-spaced probability bins with one-sided 90% Wilson lower bound",
      types: uncertaintyTypes,
    });

  const referenceArtifactPath = options.referenceArtifactPath ?? REFERENCE_ARTIFACT;
  const referenceAuditPath = options.referenceAuditPath ?? REFERENCE_EV_AUDIT;
  const referenceArtifact = fs.existsSync(referenceArtifactPath) ? JSON.parse(fs.readFileSync(referenceArtifactPath, "utf8")) : null;
  const referenceAudit = fs.existsSync(referenceAuditPath) ? JSON.parse(fs.readFileSync(referenceAuditPath, "utf8")) : null;
  const targetStart = referenceArtifact?.targetDates?.[0];
  const referenceUncertaintyTypes = Object.keys(referenceArtifact?.ticketCalibrationUncertainty ?? {});
  check(report, "reference_asof_model_integrity", referenceArtifact?.status === "pass"
    && referenceArtifact.researchProbabilityStatus === "research_pass"
    && referenceArtifact.deploymentStatus === "benchmark_only"
    && referenceArtifact.noTargetLeakage === true
    && referenceArtifact.featureSelectionSource === "reference-asof-group-ablation-v1"
    && referenceArtifact.featureSelectionSplit?.calibrationEnd < targetStart
    && referenceArtifact.featureAblation?.some((group) => group.id === "pace_shape")
    && referenceArtifact.trainingImplementation?.fingerprint === artifact.trainingImplementation?.fingerprint
    && Array.isArray(referenceArtifact.featureKeys) && referenceArtifact.featureKeys.length === artifact.featureKeys?.length
    && referenceArtifact.featureKeys.every((key, index) => key === artifact.featureKeys[index])
    && [referenceArtifact.means, referenceArtifact.scales, referenceArtifact.weights]
      .every((values) => Array.isArray(values) && values.length === referenceArtifact.featureKeys.length)
    && referenceArtifact.activeFeatureIndexes?.every((index) => Number.isInteger(index) && index >= 0 && index < referenceArtifact.featureKeys.length)
    && referenceArtifact.split?.trainEnd < referenceArtifact.split?.calibrationStart
    && referenceArtifact.split?.calibrationEnd < targetStart
    && referenceArtifact.split?.embargoDays >= 7
    && referenceArtifact.counts?.targetRaces === 72
    && referenceArtifact.counts?.predictions === referenceArtifact.predictions?.length
    && referenceUncertaintyTypes.length === BET_TYPES.length
    && Object.values(referenceArtifact.ticketCalibrationUncertainty).every((bins) => bins.length > 0
      && bins.at(-1).upper === 1 && bins.every((bin) => Number.isFinite(bin.downsideError90))), {
      path: referenceArtifactPath,
      modelVersion: referenceArtifact?.modelVersion,
      split: referenceArtifact?.split,
      counts: referenceArtifact?.counts,
      featureSelectionSource: referenceArtifact?.featureSelectionSource,
      featureSelectionSplit: referenceArtifact?.featureSelectionSplit,
      featureAblation: referenceArtifact?.featureAblation,
    });

  const run = database.prepare("select id from model_runs where model_version=? order by id desc limit 1").get(artifact.modelVersion);
  const passedGates = run ? database.prepare("select gate_name from model_quality_gates where model_run_id=? and status='pass'").all(run.id).map((row) => row.gate_name) : [];
  const requiredGates = ["no_target_leakage", "historical_feature_time_order", "prediction_probability_sum_error", "expected_calibration_error", "max_calibration_bin_error", "calibration", "walk_forward",
    "ticket_probability_win", "ticket_probability_place", "ticket_probability_quinella", "ticket_probability_wide",
    "ticket_probability_exacta", "ticket_probability_trio", "ticket_probability_trifecta"];
  check(report, "persisted_model_quality_gates", requiredGates.every((gate) => passedGates.includes(gate)), { requiredGates, passedGates });

  if (!fs.existsSync(marketOutputPath)) {
    check(report, "expectancy_output", false, { path: marketOutputPath });
    return;
  }
  const market = JSON.parse(fs.readFileSync(marketOutputPath, "utf8"));
  const raceKeys = [...new Set((market.candidates ?? []).map((row) => `${row.date}|${row.meetingName}|${row.raceNo}`))];
  check(report, "all_race_predictions", market.status === "ready" && raceKeys.length === 72 && market.predictions?.length === 72, {
    status: market.status, races: raceKeys.length, predictions: market.predictions?.length ?? 0,
  });
  let completeTicketCoverage = true;
  for (const key of raceKeys) {
    const rows = market.candidates.filter((row) => `${row.date}|${row.meetingName}|${row.raceNo}` === key);
    if (!BET_TYPES.every((type) => rows.some((row) => row.betType === type))) completeTicketCoverage = false;
    if (!STRUCTURED_TYPES.every((type) => rows.some((row) => row.betType === type && row.method === "BOX")
      && rows.some((row) => row.betType === type && row.method === "フォーメーション"))) completeTicketCoverage = false;
    if (!STRUCTURED_TYPES.every((type) => {
      const scenarios = new Set(rows.filter((row) => row.betType === type && row.method !== "1点")
        .flatMap((row) => row.optimizationScenarios ?? []));
      return scenarios.has("ability_probability") && scenarios.has("component_ev");
    })) completeTicketCoverage = false;
    if (rows.some((row) => row.points < 1 || row.totalInvestmentYen !== row.points * 100 || !Number.isFinite(row.adoptedExpectedReturn))) completeTicketCoverage = false;
  }
  check(report, "all_ticket_expectancy_rankings", completeTicketCoverage && market.unitStakeYen === 100, {
    races: raceKeys.length, betTypes: BET_TYPES.length, unitStakeYen: market.unitStakeYen, candidates: market.candidates?.length ?? 0,
  });
  const primaryExternalStrategy = referenceAudit?.strategies?.find((row) => row.name === "AI推奨・全レース");
  check(report, "reference_expectancy_external_audit", referenceAudit?.status === "evaluation_only"
    && referenceAudit.modelVersion === referenceArtifact?.modelVersion
    && referenceAudit.evaluationScope === "ai_prediction_top_ticket_only"
    && referenceAudit.recommendationCoverage?.auditedRecommendations === 72
    && referenceAudit.recommendationCoverage?.predictions === 72
    && referenceAudit.recommendations?.length === 72
    && referenceAudit.recommendations.every((row) => row.recommendationSource === "ai_prediction_top_ticket"
      && row.investmentYen === row.points * 100 && Array.isArray(row.ticketKeys) && row.ticketKeys.length === row.points)
    && primaryExternalStrategy?.bets === 72 && Number.isFinite(primaryExternalStrategy.roi)
    && market.modelVersion === referenceArtifact?.modelVersion
    && market.logic?.engineVersion === "expectancy-engine-v3"
    && market.logic?.deploymentStatus === "benchmark_only"
    && market.logic?.referenceWeekExternalAudit?.status === "fail"
    && market.candidates?.every((row) => row.modelVersion === referenceArtifact?.modelVersion
      && row.recommendationEligible === false && row.externalValidationStatus === "fail"), {
      path: referenceAuditPath,
      auditModelVersion: referenceAudit?.modelVersion,
      outputModelVersion: market.modelVersion,
      primaryStrategy: primaryExternalStrategy,
      evaluationScope: referenceAudit?.evaluationScope,
      recommendationCoverage: referenceAudit?.recommendationCoverage,
    });

  const publicationManifestPath = options.publicationManifestPath ?? PUBLICATION_MANIFEST;
  const publicationReceiptPath = options.publicationReceiptPath ?? PUBLICATION_RECEIPT;
  const liveOutputPath = options.liveOutputPath ?? LIVE_OUTPUT;
  const liveOutput = fs.existsSync(liveOutputPath) ? JSON.parse(fs.readFileSync(liveOutputPath, "utf8")) : null;
  const publicLiveRacecardsPath = options.publicLiveRacecardsPath ?? PUBLIC_LIVE_RACECARDS;
  const publicLiveModelOutputsPath = options.publicLiveModelOutputsPath ?? PUBLIC_LIVE_MODEL_OUTPUTS;
  const publicationManifestText = fs.existsSync(publicationManifestPath) ? fs.readFileSync(publicationManifestPath, "utf8") : null;
  const publicationManifest = publicationManifestText ? JSON.parse(publicationManifestText) : null;
  const publicationReceipt = fs.existsSync(publicationReceiptPath) ? JSON.parse(fs.readFileSync(publicationReceiptPath, "utf8")) : null;
  const manifestSha256 = publicationManifestText
    ? crypto.createHash("sha256").update(publicationManifestText).digest("hex") : null;
  const liveRacecardsSha256 = fs.existsSync(publicLiveRacecardsPath)
    ? crypto.createHash("sha256").update(fs.readFileSync(publicLiveRacecardsPath)).digest("hex") : null;
  const liveModelOutputsSha256 = fs.existsSync(publicLiveModelOutputsPath)
    ? crypto.createHash("sha256").update(fs.readFileSync(publicLiveModelOutputsPath)).digest("hex") : null;
  check(report, "verified_publication", publicationManifest?.version === "publication-manifest-v1"
    && publicationManifest.databaseRaces === coverage.races
    && publicationManifest.modelVersion === referenceArtifact?.modelVersion
    && publicationManifest.modelCoverageRaces === (referenceArtifact?.counts?.trainRaces + referenceArtifact?.counts?.calibrationRaces)
    && publicationManifest.expectancyCandidateCount === market.candidates.length
    && publicationManifest.expectancyPredictionCount === market.predictions.length
    && publicationManifest.liveRaceCount === liveOutput?.predictionCoverage?.targetRaces
    && publicationManifest.liveCandidateCount === liveOutput?.candidates?.length
    && publicationManifest.livePredictionCount === liveOutput?.predictions?.length
    && publicationManifest.liveRacecardsSha256 === liveRacecardsSha256
    && publicationManifest.liveModelOutputsSha256 === liveModelOutputsSha256
    && publicationReceipt?.status === "verified"
    && publicationReceipt.manifestId === publicationManifest.manifestId
    && publicationReceipt.remoteManifestId === publicationManifest.manifestId
    && publicationReceipt.manifestSha256 === manifestSha256
    && publicationReceipt.commit === publicationReceipt.remoteCommit
    && publicationReceipt.databaseRaces === coverage.races
    && publicationReceipt.modelVersion === referenceArtifact?.modelVersion
    && publicationReceipt.liveRaceCount === publicationManifest.liveRaceCount
    && publicationReceipt.liveCandidateCount === publicationManifest.liveCandidateCount
    && publicationReceipt.livePredictionCount === publicationManifest.livePredictionCount
    && publicationReceipt.liveRacecardsSha256 === liveRacecardsSha256
    && publicationReceipt.remoteLiveRacecardsSha256 === liveRacecardsSha256
    && publicationReceipt.liveModelOutputsSha256 === liveModelOutputsSha256
    && publicationReceipt.remoteLiveModelOutputsSha256 === liveModelOutputsSha256
    && Date.parse(publicationReceipt.publishedAt) >= Date.parse(publicationManifest.generatedAt), {
      manifest: publicationManifest,
      receipt: publicationReceipt,
      manifestSha256,
      liveRacecardsSha256,
      liveModelOutputsSha256,
    });

  const generator = fs.readFileSync(generatorPath, "utf8");
  const leakageTokens = ["race_results", "payouts", "finish_position", "payout_yen"].filter((token) => generator.includes(token));
  check(report, "expectancy_result_leakage", leakageTokens.length === 0, { leakageTokens });
  const ledgerTables = database.prepare(`select name from sqlite_master where type='table'
    and name in ('live_ev_candidates','live_ev_evaluations','live_ev_validation_runs') order by name`).all().map((row) => row.name);
  const liveGenerator = fs.readFileSync(options.liveGeneratorPath ?? "scripts/generate-live-market-ev.mjs", "utf8");
  const ledgerEvaluator = fs.readFileSync(options.ledgerEvaluatorPath ?? "scripts/evaluate-live-ev-ledger.mjs", "utf8");
  const ledgerImplementation = ledgerTables.length === 3
    && ["persistCandidateLedger", "componentSelectionKeys", "oddsObservedAt"].every((token) => liveGenerator.includes(token))
    && ["latest-within-five-minutes", "race-day-block-bootstrap-2000", "positive_ev_roi_ci95_lower"].every((token) => ledgerEvaluator.includes(token));
  check(report, "immutable_pre_race_expectancy_ledger", ledgerImplementation, { ledgerTables });
  const pipelineFiles = options.pipelineFiles ?? ["scripts/jra-live-racecards.mjs", "scripts/jra-free-odds.mjs", "scripts/jra-free-exotic-odds.mjs",
    "scripts/sync-jra-live-racecards.ps1", "scripts/predict-live-racecards.mjs", "scripts/generate-live-market-ev.mjs",
    "scripts/evaluate-live-ev-ledger.mjs", "scripts/publish-live-web.ps1", "scripts/live-pipeline-workflow-check.mjs"]
  check(report, "automated_live_pipeline", pipelineFiles.every((file) => fs.existsSync(file)), { mode: "scheduled pre-race capture and publish" });
  const liveCoverage = inspectLiveCoverage(database, artifact, liveOutput, { today: options.today });
  check(report, "live_all_race_all_ticket_coverage", liveCoverage.pass, { path: liveOutputPath, ...liveCoverage });
  const automationAuditPath = options.automationAuditPath ?? AUTOMATION_AUDIT;
  const automationAudit = fs.existsSync(automationAuditPath) ? JSON.parse(fs.readFileSync(automationAuditPath, "utf8")) : null;
  const automationTasks = new Map((automationAudit?.tasks ?? []).map((task) => [task.name, task]));
  const automationAgeMs = Date.now() - Date.parse(automationAudit?.checkedAt ?? "");
  const automationPass = automationAudit?.version === "automation-audit-v1" && automationAudit.pass === true
    && Number.isFinite(automationAgeMs) && automationAgeMs >= 0 && automationAgeMs <= 30 * 60 * 1000
    && REQUIRED_AUTOMATION_TASKS.every((name) => {
      const task = automationTasks.get(name);
      return task?.pass === true && task.exists === true && task.enabled === true && task.actionMatches === true && task.triggerCount > 0;
    });
  check(report, "automation_task_health", automationPass, {
    path: automationAuditPath,
    checkedAt: automationAudit?.checkedAt,
    ageSeconds: Number.isFinite(automationAgeMs) ? Math.round(automationAgeMs / 1000) : null,
    requiredTasks: REQUIRED_AUTOMATION_TASKS,
    tasks: automationAudit?.tasks ?? [],
  });
}

export function inspectLiveCoverage(database, artifact, liveOutput, options = {}) {
  const today = options.today ?? new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date());
  const batch = database.prepare("select * from live_racecard_batches where status='complete' and race_count>0 order by id desc limit 1").get();
  if (!batch || !liveOutput) return { pass: false, reason: !batch ? "missing_complete_racecard_batch" : "missing_live_output" };
  const targetDates = [...new Set((liveOutput.targetDates ?? []).filter((date) => typeof date === "string" && date >= today))].sort();
  if (!targetDates.length) return { pass: false, reason: "no_current_target_dates", today, outputTargetDates: liveOutput.targetDates ?? [] };
  const placeholders = targetDates.map(() => "?").join(",");
  const races = database.prepare(`select race_id,race_date,start_time from live_races where race_date in (${placeholders}) order by race_id`).all(...targetDates);
  const raceIds = races.map((race) => race.race_id);
  const raceById = new Map(races.map((race) => [race.race_id, race]));
  if (!raceIds.length) return { pass: false, reason: "no_target_races", today, targetDates };
  const racePlaceholders = raceIds.map(() => "?").join(",");
  const entries = database.prepare(`select race_id,horse_id from live_entries where race_id in (${racePlaceholders}) order by race_id,horse_id`).all(...raceIds);
  const predictionRows = database.prepare(`select race_id,horse_id,win_probability from live_predictions
    where model_version=? and race_id in (${racePlaceholders}) order by race_id,horse_id`).all(artifact.modelVersion, ...raceIds);
  const entryCounts = countsBy(entries, "race_id");
  const predictionCounts = countsBy(predictionRows, "race_id");
  const probabilitySums = new Map();
  for (const row of predictionRows) probabilitySums.set(row.race_id, (probabilitySums.get(row.race_id) ?? 0) + row.win_probability);
  const outputPredictions = liveOutput.predictions ?? [];
  const outputPredictionIds = new Set(outputPredictions.map((row) => row.raceId));
  const candidates = liveOutput.candidates ?? [];
  const candidateRaceIds = new Set(candidates.map((row) => row.raceId));
  const racesWithCompleteTickets = raceIds.filter((raceId) => {
    const rows = candidates.filter((row) => row.raceId === raceId);
    return BET_TYPES.every((type) => rows.some((row) => row.betType === type && row.method === "1点"))
      && STRUCTURED_TYPES.every((type) => rows.some((row) => row.betType === type && row.method === "BOX")
        && rows.some((row) => row.betType === type && row.method === "フォーメーション"));
  });
  const invalidCandidates = candidates.filter((row) => !raceIds.includes(row.raceId) || row.status !== "ready"
    || row.predictionContext !== "pre_race" || row.modelVersion !== artifact.modelVersion || !row.oddsObservedAt
    || !Number.isInteger(row.baseBatchId) || !Number.isInteger(row.exoticBatchId)
    || !isPreRaceObservation(raceById.get(row.raceId)?.race_date, raceById.get(row.raceId)?.start_time, row.oddsObservedAt)
    || !Number.isInteger(row.points) || row.points < 1 || row.totalInvestmentYen !== row.points * 100
    || !Number.isFinite(row.adoptedExpectedReturn));
  const predictionPass = raceIds.every((raceId) => entryCounts.get(raceId) >= 2
    && predictionCounts.get(raceId) === entryCounts.get(raceId)
    && Math.abs((probabilitySums.get(raceId) ?? 0) - 1) <= 1e-6
    && outputPredictionIds.has(raceId))
    && outputPredictions.length === raceIds.length
    && outputPredictions.every((row) => raceIds.includes(row.raceId) && row.status === "ready"
      && row.predictionContext === "pre_race" && row.modelVersion === artifact.modelVersion && row.marks?.length === 5);
  const ticketPass = racesWithCompleteTickets.length === raceIds.length && candidateRaceIds.size === raceIds.length
    && invalidCandidates.length === 0 && liveOutput.unitStakeYen === 100
    && liveOutput.predictionCoverage?.targetRaces === raceIds.length
    && liveOutput.predictionCoverage?.predictedRaces === raceIds.length
    && liveOutput.predictionCoverage?.oddsReadyRaces === raceIds.length
    && BET_TYPES.every((type) => liveOutput.coverageCounts?.[type] === raceIds.length);
  const timingPass = Date.parse(liveOutput.generatedAt) >= Date.parse(batch.completed_at)
    && liveOutput.snapshotKind === "pre_race";
  const pass = liveOutput.status === "ready" && liveOutput.abilityModelStatus === "research_pass"
    && liveOutput.modelVersion === artifact.modelVersion && predictionPass && ticketPass && timingPass;
  return {
    pass, today, batchId: batch.id, batchCompletedAt: batch.completed_at, targetDates,
    targetRaces: raceIds.length, entries: entries.length, databasePredictions: predictionRows.length,
    outputPredictions: outputPredictions.length, candidateRaces: candidateRaceIds.size,
    racesWithCompleteTickets: racesWithCompleteTickets.length, candidates: candidates.length,
    invalidCandidates: invalidCandidates.length, predictionPass, ticketPass, timingPass,
  };
}

function countsBy(rows, key) {
  const counts = new Map();
  for (const row of rows) counts.set(row[key], (counts.get(row[key]) ?? 0) + 1);
  return counts;
}

function check(report, name, pass, evidence) {
  report.checks.push({ name, status: pass ? "pass" : "fail", evidence });
  if (!pass) report.failures.push(name);
}

function writeReport(report) {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}
