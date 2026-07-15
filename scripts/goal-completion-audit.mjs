import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { inspectBackfillReadiness } from "./backfill-readiness.mjs";

const PRIVATE_DIR = path.join("data", "jra-free-private");
const OUTPUT = path.join(PRIVATE_DIR, "models", "goal-completion-audit.json");
const ARTIFACT = path.join(PRIVATE_DIR, "models", "ability-softmax-v1.json");
const MARKET_OUTPUT = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");
const BET_TYPES = ["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"];
const STRUCTURED_TYPES = ["馬連", "ワイド", "馬単", "3連複", "3連単"];
if (import.meta.url === pathToFileURL(process.argv[1]).href) runAudit();

function runAudit() {
  const requireComplete = process.argv.includes("--require-complete");
  const db = new DatabaseSync(path.join(PRIVATE_DIR, "keiba.sqlite"), { readOnly: true });
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
    db.close();
  }
}

export function auditCompletedGoal(database, report, options = {}) {
  check(report, "backfill_month_continuity", report.readiness.ready, report.readiness.coverage);
  const coverage = database.prepare(`select min(race_date) minDate,max(race_date) maxDate,count(*) races,
    (select count(*) from complete_race_entries) runners,(select count(*) from complete_payouts) payouts
    from complete_races`).get();
  check(report, "normalized_database_nonempty", coverage.races > 0 && coverage.runners > 0 && coverage.payouts > 0, coverage);

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
  check(report, "walk_forward_folds", artifact.folds?.length >= 2
    && artifact.folds.every((fold) => fold.trainEnd < fold.calibrationStart && fold.calibrationEnd < fold.testStart), artifact.folds);
  check(report, "walk_forward_feature_admission",
    artifact.featureAdmission?.method === "group-ablation-on-each-walk-forward-fold"
      && artifact.featureAdmission?.fallback === false
      && artifact.featureAdmission?.admittedGroups?.length > 0
      && artifact.activeFeatureIndexes?.length > 0
      && artifact.activeFeatureKeys?.length === artifact.activeFeatureIndexes?.length
      && artifact.folds.every((fold) => Array.isArray(fold.featureAblation) && fold.featureAblation.length > 0), {
      featureAdmission: artifact.featureAdmission,
      activeFeatureKeys: artifact.activeFeatureKeys,
    });
  check(report, "probability_research_gate", artifact.researchProbabilityStatus === "research_pass", {
    status: artifact.researchProbabilityStatus, metrics: artifact.metrics,
  });
  check(report, "target_leakage_prevention", artifact.noTargetLeakage === true, { noTargetLeakage: artifact.noTargetLeakage });
  check(report, "probability_sum", artifact.metrics?.maxProbabilitySumError <= 1e-6, { value: artifact.metrics?.maxProbabilitySumError, threshold: 1e-6 });
  check(report, "calibration", artifact.metrics?.meanEce <= 0.025 && artifact.metrics?.meanMaxCalibrationBinError <= 0.075, {
    meanEce: artifact.metrics?.meanEce, meanMaxCalibrationBinError: artifact.metrics?.meanMaxCalibrationBinError,
  });
  check(report, "uniform_baseline_improvement", artifact.metrics?.meanLogLoss < artifact.metrics?.meanUniformLogLoss, {
    logLoss: artifact.metrics?.meanLogLoss, uniformLogLoss: artifact.metrics?.meanUniformLogLoss,
  });

  const run = database.prepare("select id from model_runs where model_version=? order by id desc limit 1").get(artifact.modelVersion);
  const passedGates = run ? database.prepare("select gate_name from model_quality_gates where model_run_id=? and status='pass'").all(run.id).map((row) => row.gate_name) : [];
  const requiredGates = ["no_target_leakage", "prediction_probability_sum_error", "expected_calibration_error", "max_calibration_bin_error", "calibration", "walk_forward"];
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
    if (rows.some((row) => row.points < 1 || row.totalInvestmentYen !== row.points * 100 || !Number.isFinite(row.adoptedExpectedReturn))) completeTicketCoverage = false;
  }
  check(report, "all_ticket_expectancy_rankings", completeTicketCoverage && market.unitStakeYen === 100, {
    races: raceKeys.length, betTypes: BET_TYPES.length, unitStakeYen: market.unitStakeYen, candidates: market.candidates?.length ?? 0,
  });

  const generator = fs.readFileSync(generatorPath, "utf8");
  const leakageTokens = ["race_results", "payouts", "finish_position", "payout_yen"].filter((token) => generator.includes(token));
  check(report, "expectancy_result_leakage", leakageTokens.length === 0, { leakageTokens });
  const pipelineFiles = options.pipelineFiles ?? ["scripts/jra-live-racecards.mjs", "scripts/jra-free-odds.mjs", "scripts/jra-free-exotic-odds.mjs",
    "scripts/predict-live-racecards.mjs", "scripts/generate-live-market-ev.mjs", "scripts/publish-live-web.ps1"]
  check(report, "automated_live_pipeline", pipelineFiles.every((file) => fs.existsSync(file)), { mode: "scheduled pre-race capture and publish" });
}

function check(report, name, pass, evidence) {
  report.checks.push({ name, status: pass ? "pass" : "fail", evidence });
  if (!pass) report.failures.push(name);
}

function writeReport(report) {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}
