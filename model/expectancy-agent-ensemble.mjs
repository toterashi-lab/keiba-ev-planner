export const EXPECTANCY_AGENT_ENSEMBLE_VERSION = "expectancy-agent-ensemble-v2";

export function runExpectancyAgentEnsemble(input) {
  const assessments = {
    sourceCompleteness: {
      agent: "source-completeness-agent",
      status: input.oddsObservedAt && input.points > 0 ? "pass" : "fail",
      evidence: { points: input.points, modelVersion: input.modelVersion },
    },
    oddsProvenance: {
      agent: "odds-provenance-agent",
      status: input.oddsObservedAt ? "pass" : "fail",
      evidence: { oddsObservedAt: input.oddsObservedAt ?? null },
    },
    ticketArithmetic: {
      agent: "ticket-arithmetic-agent",
      status: input.points > 0 && input.totalInvestmentYen === input.points * 100 ? "pass" : "fail",
      evidence: { points: input.points, totalInvestmentYen: input.totalInvestmentYen, unitStakeYen: 100 },
    },
    abilityModel: {
      agent: "ability-probability-agent",
      status: input.abilityModelStatus === "research_pass" ? "research_pass" : "baseline_only",
      expectedReturn: finite(input.abilityExpectedReturn),
      evidence: { modelVersion: input.modelVersion },
    },
    probabilityCalibration: {
      agent: "probability-calibration-agent",
      status: input.calibrationStatus === "pass" ? "pass" : "blocked",
      calibrationError: finite(input.calibrationError),
      evidence: { calibrationStatus: input.calibrationStatus },
    },
    marketBenchmark: {
      agent: "market-odds-agent",
      status: finite(input.marketExpectedReturn) !== null ? "pass" : "fail",
      expectedReturn: finite(input.marketExpectedReturn),
      evidence: { oddsObservedAt: input.oddsObservedAt ?? null },
    },
    modelMarketDisagreement: {
      agent: "model-market-disagreement-agent",
      status: absoluteSpread(input.abilityExpectedReturn, input.marketExpectedReturn) === null
        ? "not_available" : "available",
      spread: absoluteSpread(input.abilityExpectedReturn, input.marketExpectedReturn),
      authority: "confidence_downside_only",
    },
    raceContext: {
      agent: "race-context-agent",
      status: input.contextStatus ?? "available",
      evidence: input.contextEvidence ?? {},
    },
    payoutVolatility: {
      agent: "payout-volatility-agent",
      status: input.payoutVolatilityPrior?.status ?? "baseline",
      lift: finite(input.payoutVolatilityPrior?.lift) ?? 1,
      conditions: input.payoutVolatilityPrior?.conditions ?? [],
      authority: "uncertainty_and_scenario_only",
    },
    ticketConstruction: {
      agent: "ticket-construction-agent",
      status: input.points > 0 && input.method && input.betType ? "pass" : "fail",
      evidence: { betType: input.betType, method: input.method, points: input.points },
    },
    bankrollUnit: {
      agent: "bankroll-unit-agent",
      status: input.totalInvestmentYen === input.points * 100 ? "pass" : "fail",
      evidence: { unitStakeYen: 100, totalInvestmentYen: input.totalInvestmentYen },
    },
    chronologyLeakage: {
      agent: "chronology-leakage-agent",
      status: input.chronologyAuditStatus === "pass" ? "pass" : "blocked",
      evidence: { chronologyAuditStatus: input.chronologyAuditStatus ?? "not_evaluated" },
    },
    externalValidation: {
      agent: "external-roi-agent",
      status: input.externalValidationStatus === "pass" ? "pass" : "blocked",
      conservativeExpectedReturn: finite(input.conservativeExpectedReturn),
      evidence: { externalValidationStatus: input.externalValidationStatus },
    },
    sampleAdequacy: {
      agent: "sample-adequacy-agent",
      status: input.sampleSizeStatus === "pass" ? "pass" : "blocked",
      evidence: { sampleSizeStatus: input.sampleSizeStatus ?? "not_evaluated" },
    },
    drawdownRisk: {
      agent: "drawdown-risk-agent",
      status: input.drawdownStatus === "pass" ? "pass" : "blocked",
      evidence: {
        drawdownStatus: input.drawdownStatus ?? "not_evaluated",
        deploymentStatus: input.deploymentStatus,
      },
    },
  };

  const conservative = finite(input.conservativeExpectedReturn);
  const spread = absoluteSpread(input.abilityExpectedReturn, input.marketExpectedReturn);
  const hardFailures = [
    assessments.sourceCompleteness,
    assessments.oddsProvenance,
    assessments.ticketArithmetic,
    assessments.ticketConstruction,
    assessments.bankrollUnit,
  ].filter((assessment) => assessment.status !== "pass").length + (conservative === null ? 1 : 0);
  const researchGatesPassed = [
    assessments.probabilityCalibration,
    assessments.chronologyLeakage,
    assessments.externalValidation,
    assessments.sampleAdequacy,
    assessments.drawdownRisk,
  ].every((assessment) => assessment.status === "pass");
  const purchaseEligible = hardFailures === 0
    && conservative > 1
    && input.deploymentStatus === "eligible"
    && researchGatesPassed;
  const chiefDecision = {
    agent: "chief-expectancy-agent",
    version: EXPECTANCY_AGENT_ENSEMBLE_VERSION,
    status: purchaseEligible ? "purchase_eligible" : hardFailures ? "invalid" : "research_only",
    rankingExpectedReturn: conservative,
    purchaseEligible,
    agreementSpread: spread,
    confidence: confidence({ conservative, spread, calibrationError: input.calibrationError }),
    hierarchy: {
      level0Evidence: ["sourceCompleteness", "oddsProvenance", "ticketArithmetic"],
      level1Forecast: ["abilityModel", "probabilityCalibration", "marketBenchmark", "modelMarketDisagreement", "raceContext"],
      level2Ticket: ["payoutVolatility", "ticketConstruction", "bankrollUnit"],
      level3IndependentAudit: ["chronologyLeakage", "externalValidation", "sampleAdequacy", "drawdownRisk"],
      level4Authority: "chief-expectancy-agent",
    },
    authorityPolicy: {
      expectedReturnAuthority: "conservative-probability-and-odds-lower-bound",
      volatilityMayIncreaseExpectedReturn: false,
      targetAuditMayRetuneDecision: false,
      missingAuditMayPass: false,
      specialistMaySelectPurchase: false,
      unitStakeYen: 100,
    },
    rationale: rationale({ assessments, conservative, spread, purchaseEligible }),
  };
  return { assessments, chiefDecision };
}

function confidence({ conservative, spread, calibrationError }) {
  if (conservative === null) return "none";
  const error = Math.max(0, Number(calibrationError) || 0);
  if (spread !== null && spread <= 0.08 && error <= 0.02) return "high";
  if (spread !== null && spread <= 0.2 && error <= 0.05) return "medium";
  return "low";
}

function rationale({ assessments, conservative, spread, purchaseEligible }) {
  const blockedAudits = [
    assessments.probabilityCalibration,
    assessments.chronologyLeakage,
    assessments.externalValidation,
    assessments.sampleAdequacy,
    assessments.drawdownRisk,
  ].filter((assessment) => assessment.status !== "pass");
  const parts = [
    `安全側期待回収率${conservative === null ? "算出不能" : `${(conservative * 100).toFixed(1)}%`}`,
    spread === null ? "市場・能力差は比較不能" : `市場・能力差${(spread * 100).toFixed(1)}pt`,
    `高配当傾向は${assessments.payoutVolatility.authority === "uncertainty_and_scenario_only" ? "荒れ度だけに使用" : "不正"}`,
  ];
  parts.push(purchaseEligible ? "全予想採用基準合格" : `未合格監査${blockedAudits.length}件のため参考予想`);
  return parts.join("。");
}

function absoluteSpread(left, right) {
  const leftValue = finite(left);
  const rightValue = finite(right);
  return leftValue === null || rightValue === null ? null : Math.abs(leftValue - rightValue);
}

function finite(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}
