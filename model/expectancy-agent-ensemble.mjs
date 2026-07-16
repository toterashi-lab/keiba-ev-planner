export const EXPECTANCY_AGENT_ENSEMBLE_VERSION = "expectancy-agent-ensemble-v1";

export function runExpectancyAgentEnsemble(input) {
  const assessments = {
    dataQuality: {
      agent: "data-quality-agent",
      status: input.oddsObservedAt && input.points > 0 ? "pass" : "fail",
      evidence: {
        oddsObservedAt: input.oddsObservedAt ?? null,
        points: input.points,
        modelVersion: input.modelVersion,
      },
    },
    abilityProbability: {
      agent: "ability-probability-agent",
      status: input.abilityModelStatus === "research_pass" ? "research_pass" : "baseline_only",
      expectedReturn: finite(input.abilityExpectedReturn),
      evidence: { calibrationStatus: input.calibrationStatus },
    },
    market: {
      agent: "market-odds-agent",
      status: finite(input.marketExpectedReturn) !== null ? "pass" : "fail",
      expectedReturn: finite(input.marketExpectedReturn),
      evidence: { oddsObservedAt: input.oddsObservedAt ?? null },
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
      status: input.points > 0 && input.totalInvestmentYen === input.points * 100 ? "pass" : "fail",
      evidence: {
        betType: input.betType,
        method: input.method,
        points: input.points,
        totalInvestmentYen: input.totalInvestmentYen,
      },
    },
    validationRisk: {
      agent: "validation-risk-agent",
      status: input.externalValidationStatus === "pass" && input.deploymentStatus === "eligible"
        ? "pass" : "blocked",
      conservativeExpectedReturn: finite(input.conservativeExpectedReturn),
      calibrationError: finite(input.calibrationError) ?? 0,
      evidence: {
        externalValidationStatus: input.externalValidationStatus,
        deploymentStatus: input.deploymentStatus,
      },
    },
  };

  const conservative = finite(input.conservativeExpectedReturn);
  const market = finite(input.marketExpectedReturn);
  const ability = finite(input.abilityExpectedReturn);
  const spread = market === null || ability === null ? null : Math.abs(ability - market);
  const hardFailures = [
    assessments.dataQuality.status !== "pass",
    assessments.ticketConstruction.status !== "pass",
    conservative === null,
  ].filter(Boolean).length;
  const purchaseEligible = hardFailures === 0
    && conservative > 1
    && assessments.validationRisk.status === "pass";
  const chiefDecision = {
    agent: "chief-expectancy-agent",
    version: EXPECTANCY_AGENT_ENSEMBLE_VERSION,
    status: purchaseEligible ? "purchase_eligible" : hardFailures ? "invalid" : "research_only",
    rankingExpectedReturn: conservative,
    purchaseEligible,
    agreementSpread: spread,
    confidence: confidence({ conservative, spread, calibrationError: input.calibrationError }),
    authorityPolicy: {
      expectedReturnAuthority: "validation-risk-agent-conservative-lower-bound",
      volatilityMayIncreaseExpectedReturn: false,
      targetAuditMayRetuneDecision: false,
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
  const parts = [
    `安全側期待回収率${conservative === null ? "算出不能" : `${(conservative * 100).toFixed(1)}%`}`,
    spread === null ? "市場・能力差は比較不能" : `市場・能力差${(spread * 100).toFixed(1)}pt`,
    `高配当傾向は${assessments.payoutVolatility.authority === "uncertainty_and_scenario_only" ? "荒れ度だけに使用" : "不正"}`,
  ];
  parts.push(purchaseEligible ? "全検証ゲート合格" : "外部ROI検証未合格のため購入不可");
  return parts.join("。");
}

function finite(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}
