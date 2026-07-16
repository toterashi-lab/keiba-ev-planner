import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { EXPECTANCY_ENGINE_VERSION, normalizeMarket, selectProbability } from "../model/expectancy-engine-v2.mjs";
import { runExpectancyAgentEnsemble } from "../model/expectancy-agent-ensemble.mjs";
import { buildStructuredDefinitions } from "../model/structured-ticket-search.mjs";
import { buildFinishOrderProbabilityBooks, calibrateFinishOrderProbabilityBooks } from "../model/finish-order-probabilities.mjs";

await import(pathToFileURL(path.resolve("ticket-engine.js")).href);

const engine = globalThis.KEIBA_TICKET_ENGINE;
const [win, place, quinella, wide, exacta, trio, trifecta] = Object.keys(engine.SPECS);
const DB_TYPES = { win, place, quinella, wide, exacta, trio, trifecta };
const ORDERED = new Set(["win", "place", "exacta", "trifecta"]);
const TARGET_DATES = ["2026-07-11", "2026-07-12"];
const OUTPUT = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");
const VALIDATION_ARTIFACT = loadValidationArtifact();
const REFERENCE_EV_AUDIT = loadReferenceEvAudit();
const PAYOUT_PATTERNS = loadPayoutPatterns();

export function generateMarketEv() {
  const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
  try {
    const baseBatch = db.prepare(`select id from odds_ingestion_batches
      where status='complete' and source='JRA official odds' order by id desc limit 1`).get();
    const exoticBatch = db.prepare(`select id from odds_ingestion_batches
      where status='complete' and source='JRA official exotic odds' order by id desc limit 1`).get();
    if (!baseBatch || !exoticBatch) throw new Error("単勝・複勝または全券種の完了バッチがありません");

    const placeholders = TARGET_DATES.map(() => "?").join(",");
    const races = db.prepare(`select race_id,race_date,venue_code,race_number,race_class,surface,distance_m,weather,going from complete_races
      where race_date in (${placeholders}) order by race_date,venue_code,race_number`).all(...TARGET_DATES);
    if (races.length !== 72) throw new Error(`対象レース不足: ${races.length}/72`);
    const entries = db.prepare(`select e.race_id,e.horse_id,e.horse_number,h.name from complete_race_entries e
      join horses h on h.horse_id=e.horse_id where e.race_id in (select race_id from complete_races where race_date in (${placeholders}))
      order by e.race_id,e.horse_number`).all(...TARGET_DATES);
    const odds = db.prepare(`select race_id,bet_type,selection_key,odds_low,odds_high,observed_at from odds_snapshots
      where batch_id in (?,?) order by race_id,bet_type,selection_key`).all(baseBatch.id, exoticBatch.id);
    const horseNumbers = new Map(entries.map((row) => [`${row.race_id}|${row.horse_id}`, row.horse_number]));
    const modelPredictionRows = (VALIDATION_ARTIFACT?.predictions ?? []).map((row) => ({
      race_id: row.raceId, horse_number: horseNumbers.get(`${row.raceId}|${row.horseId}`), win_probability: row.probability,
      history_starts: row.historyStarts, agent_signals: row.agentSignals ?? null,
    })).filter((row) => Number.isInteger(row.horse_number));

    const namesByRace = group(entries, "race_id");
    const oddsByRace = group(odds, "race_id");
    const modelPredictionsByRace = group(modelPredictionRows, "race_id");
    const candidates = [];
    const predictions = [];
    const evaluatedByRace = {};
    const coverageCounts = Object.fromEntries(Object.values(DB_TYPES).map((label) => [label, 0]));

    for (const race of races) {
      const raceOdds = oddsByRace.get(race.race_id) ?? [];
      const byType = group(raceOdds, "bet_type");
      for (const type of Object.keys(DB_TYPES)) {
        if (!(byType.get(type)?.length > 0)) throw new Error(`${race.race_id} ${type} のオッズがありません`);
        coverageCounts[DB_TYPES[type]] += 1;
      }
      const names = new Map((namesByRace.get(race.race_id) ?? []).map((row) => [row.horse_number, row.name]));
      const winRows = byType.get("win");
      race.fieldSize = winRows.length;
      const horseProbabilities = normalize(Object.fromEntries(winRows.map((row) => [row.selection_key, 1 / row.odds_low])));
      const structuralBooks = buildFinishOrderProbabilityBooks(horseProbabilities);
      const pricedHorseNumbers = new Set(winRows.map((row) => Number(row.selection_key)));
      const modelRows = (modelPredictionsByRace.get(race.race_id) ?? []).filter((row) => pricedHorseNumbers.has(row.horse_number));
      const hasCompleteModel = modelRows.length === winRows.length
        && modelRows.every((row) => Number.isFinite(row.win_probability) && row.win_probability > 0)
        && modelRows.reduce((sum, row) => sum + row.win_probability, 0) > 0;
      const researchHorseProbabilities = hasCompleteModel
        ? credibilityPoolHorseProbabilities(horseProbabilities, modelRows)
        : horseProbabilities;
      const rawResearchStructuralBooks = buildFinishOrderProbabilityBooks(researchHorseProbabilities);
      const researchStructuralBooks = rawResearchStructuralBooks;
      const raceCandidates = [];
      let evaluated = 0;

      for (const [dbType, betType] of Object.entries(DB_TYPES)) {
        const rows = normalizeMarket(byType.get(dbType), dbType, winRows.length);
        const researchBook = ticketCredibilityPool(rows, researchStructuralBooks[dbType], modelRows, dbType);
        const singles = rows.map((row) => {
          const selection = row.selection_key.split("-").map(Number);
          const structural = structuralBooks[dbType].get(row.selection_key) ?? 0;
          const probability = selectProbability({ marketProbability: row.marketProbability, modelProbability: structural, validationArtifact: VALIDATION_ARTIFACT }).probability;
          const researchProbability = researchBook.get(row.selection_key) ?? probability;
          return makeCandidate(race, betType, "1点", selection, [row], probability, names, null, null, null, researchProbability, null, ["single_point"], hasCompleteModel);
        });
        evaluated += singles.length;
        raceCandidates.push(...singles.sort(byExpectedReturn).slice(0, 12));
        raceCandidates.push(...structuredCandidates(race, dbType, betType, rows, horseProbabilities, researchHorseProbabilities, structuralBooks[dbType], researchBook, names, hasCompleteModel));
      }
      evaluatedByRace[race.race_id] = evaluated;
      candidates.push(...raceCandidates);
      predictions.push(makeAiPrediction(race, researchHorseProbabilities, names, raceCandidates, hasCompleteModel,
        modelRows, horseProbabilities));
    }

    if (Object.values(coverageCounts).some((count) => count !== 72)) throw new Error(`券種カバレッジ不合格: ${JSON.stringify(coverageCounts)}`);
    if (candidates.some((candidate) => !Number.isFinite(candidate.conservativeExpectedReturn) || candidate.points < 1)) {
      throw new Error("期待値候補に不正値があります");
    }
    const result = {
      status: "ready",
      modelVersion: VALIDATION_ARTIFACT?.researchProbabilityStatus === "research_pass" ? VALIDATION_ARTIFACT.modelVersion : "expectancy-v2-market-baseline",
      calculationMode: VALIDATION_ARTIFACT?.researchProbabilityStatus === "research_pass" ? "oos_ability_model_with_market_benchmark" : "closing_market_validation",
      generatedAt: new Date().toISOString(),
      unitStakeYen: 100,
      logic: {
        engineVersion: EXPECTANCY_ENGINE_VERSION,
        formula: "hit_probability * decimal_odds",
        probabilityMode: VALIDATION_ARTIFACT?.researchProbabilityStatus === "research_pass" ? "ability_model" : "market_baseline",
        deploymentStatus: VALIDATION_ARTIFACT?.deploymentStatus ?? "benchmark_only",
        abilityModelStatus: VALIDATION_ARTIFACT?.researchProbabilityStatus ?? "not_trained",
        abilityExpectedReturnAvailable: modelPredictionRows.length > 0,
        scenarios: ["market_baseline", "ability_model", "calibration_error_lower_bound"],
        referenceWeekExternalAudit: summarizeReferenceAudit(),
        fixedBlendRemoved: true,
        validationArtifact: VALIDATION_ARTIFACT?.modelVersion ?? "insufficient",
      },
      oddsCoverage: Object.fromEntries(Object.keys(coverageCounts).map((key) => [key, "pass"])),
      coverageCounts,
      evaluatedByRace,
      evaluatedTotal: Object.values(evaluatedByRace).reduce((sum, count) => sum + count, 0),
      predictions,
      candidates,
    };
    fs.writeFileSync(OUTPUT, `${JSON.stringify(result, null, 2)}\n`, "utf8");
    return result;
  } finally {
    db.close();
  }
}

function makeAiPrediction(race, horseProbabilities, names, raceCandidates, abilityModelAvailable, modelRows, marketProbabilities) {
  const marks = ["◎", "○", "▲", "△", "☆"];
  const ranked = Object.entries(horseProbabilities)
    .map(([horseNumber, probability]) => ({ horseNumber: Number(horseNumber), horseName: names.get(Number(horseNumber)) ?? "", probability }))
    .sort((left, right) => right.probability - left.probability || left.horseNumber - right.horseNumber);
  const entropy = -ranked.reduce((sum, row) => sum + row.probability * Math.log(row.probability), 0);
  const concentration = 1 - entropy / Math.log(ranked.length);
  const gap = ranked[0].probability - ranked[1].probability;
  const confidenceScore = Math.min(1, concentration * 0.55 + Math.min(1, ranked[0].probability / 0.35) * 0.25 + Math.min(1, gap / 0.12) * 0.2);
  const confidence = confidenceScore >= 0.55 ? "高" : confidenceScore >= 0.35 ? "中" : "低";
  const scenario = ranked[0].probability >= 0.3 && gap >= 0.08 ? "本命軸" : gap <= 0.03 ? "混戦・広め" : "バランス";
  const topTicket = [...raceCandidates].sort(byExpectedReturn)[0] ?? null;
  const forecastPanel = buildForecastPanel({ horseProbabilities, marketProbabilities, modelRows, names });
  return {
    date: race.race_date,
    meetingName: meetingName(race),
    raceNo: race.race_number,
    raceId: race.race_id,
    modelVersion: abilityModelAvailable ? VALIDATION_ARTIFACT?.modelVersion : "expectancy-v2-market-baseline",
    predictionContext: abilityModelAvailable ? "out_of_sample_ability_model" : "closing_final_validation",
    status: "ready",
    confidence,
    confidenceScore,
    scenario,
    forecastPanel,
    masterConsensus: {
      agent: "chief-expectancy-agent",
      participatingForecasters: forecastPanel.filter((agent) => agent.status === "available").length,
      unavailableForecasters: forecastPanel.filter((agent) => agent.status !== "available").map((agent) => agent.id),
      topHorseNumber: ranked[0].horseNumber,
      topHorseName: ranked[0].horseName,
      disagreement: forecastDisagreement(forecastPanel),
    },
    marks: ranked.slice(0, marks.length).map((row, index) => ({ mark: marks[index], ...row })),
    topTicket: topTicket ? {
      recommendationSource: "ai_prediction_top_ticket",
      betType: topTicket.betType,
      method: topTicket.method,
      selection: topTicket.selection,
      points: topTicket.points,
      totalInvestmentYen: topTicket.totalInvestmentYen,
      ticketKeys: topTicket.ticketKeys,
      expectedReturn: topTicket.adoptedExpectedReturn,
      payoutVolatilityPrior: topTicket.payoutVolatilityPrior,
      chiefDecision: topTicket.chiefDecision,
    } : null,
    comment: `${forecastPanel.filter((agent) => agent.status === "available").length}予想家の印と根拠をマスターが統合。◎${ranked[0].horseName}は統合勝率${(ranked[0].probability * 100).toFixed(1)}%、○との差は${(gap * 100).toFixed(1)}ポイント。${scenario}シナリオで評価します。`,
  };
}

function buildForecastPanel({ horseProbabilities, marketProbabilities, modelRows, names }) {
  const marks = ["◎", "○", "▲", "△", "☆"];
  const labels = {
    race_context: "枠・レース条件担当",
    weather_going: "天候・馬場担当",
    body_load: "馬体・斤量担当",
    horse_form: "近走能力担当",
    pace_shape: "展開・脚質担当",
    horse_suitability: "コース適性担当",
    connections: "騎手・厩舎担当",
    field_strength: "相手関係担当",
  };
  const byHorse = new Map(modelRows.map((row) => [row.horse_number, row]));
  const panel = Object.entries(labels).map(([id, label]) => {
    const values = [...byHorse].map(([horseNumber, row]) => ({
      horseNumber,
      horseName: names.get(horseNumber) ?? "",
      contribution: Number(row.agent_signals?.[id]?.contribution),
      topFactors: row.agent_signals?.[id]?.topFactors ?? [],
      signalStatus: row.agent_signals?.[id]?.status ?? "not_available",
    }));
    const available = values.length > 1 && values.every((row) => row.signalStatus === "available" && Number.isFinite(row.contribution));
    if (!available) return { id, label, status: "not_available", reason: "学習採用外または寄与データ未生成", marks: [] };
    const probabilities = softmax(values.map((row) => row.contribution));
    const ranked = values.map((row, index) => ({ ...row, score: probabilities[index] }))
      .sort((left, right) => right.score - left.score || left.horseNumber - right.horseNumber);
    return {
      id,
      label,
      status: "available",
      marks: ranked.slice(0, 5).map((row, index) => ({ mark: marks[index], ...row })),
      opinion: `${ranked[0].horseName}を最上位。主因は${factorSummary(ranked[0].topFactors)}。`,
    };
  });
  const marketRanked = Object.entries(marketProbabilities).map(([horseNumber, probability]) => ({
    horseNumber: Number(horseNumber), horseName: names.get(Number(horseNumber)) ?? "", score: probability,
  })).sort((left, right) => right.score - left.score || left.horseNumber - right.horseNumber);
  panel.push({
    id: "market",
    label: "市場評価担当",
    status: "available",
    marks: marketRanked.slice(0, 5).map((row, index) => ({ mark: marks[index], ...row })),
    opinion: `${marketRanked[0].horseName}が市場支持1位。オッズを集合知として独立評価。`,
  });
  const valueRanked = Object.entries(horseProbabilities).map(([horseNumber, probability]) => {
    const market = marketProbabilities[horseNumber] ?? 0;
    return { horseNumber: Number(horseNumber), horseName: names.get(Number(horseNumber)) ?? "",
      score: probability - market, abilityProbability: probability, marketProbability: market };
  }).sort((left, right) => right.score - left.score || left.horseNumber - right.horseNumber);
  panel.push({
    id: "value_gap",
    label: "妙味発見担当",
    status: "available",
    marks: valueRanked.slice(0, 5).map((row, index) => ({ mark: marks[index], ...row })),
    opinion: `${valueRanked[0].horseName}の能力・市場差が最大。ただし最終判断はオッズ込み安全側EVで行う。`,
  });
  return panel;
}

function forecastDisagreement(panel) {
  const votes = panel.filter((agent) => agent.status === "available" && agent.marks[0])
    .map((agent) => agent.marks[0].horseNumber);
  return votes.length ? new Set(votes).size / votes.length : null;
}

function factorSummary(factors) {
  const labels = {
    priorWinRate: "過去勝率", priorPlaceRate: "過去複勝率", recent3WinRate: "近3走勝率",
    recent3PlaceRate: "近3走複勝率", lastFinishPercentile: "前走着順", daysSinceLastRace: "レース間隔",
    bodyWeightDelta: "馬体重増減", carriedWeightBodyRatio: "斤量体重比",
    jockeyWinRateSmoothed: "騎手勝率", trainerWinRateSmoothed: "調教師勝率",
    horseNumberFieldRatio: "馬番位置", gateNumberFieldRatio: "枠位置",
  };
  const top = (factors ?? []).filter((factor) => factor.contribution > 0).slice(0, 2);
  return top.length ? top.map((factor) => labels[factor.feature] ?? factor.feature).join("・") : "総合寄与";
}

function softmax(values) {
  const max = Math.max(...values);
  const exp = values.map((value) => Math.exp(value - max));
  const total = exp.reduce((sum, value) => sum + value, 0);
  return exp.map((value) => value / total);
}

function compactAgentVotes(assessments) {
  return Object.fromEntries(Object.entries(assessments).map(([id, value]) => [id, value.status]));
}

function compactChiefDecision(decision) {
  return {
    agent: decision.agent,
    version: decision.version,
    status: decision.status,
    rankingExpectedReturn: decision.rankingExpectedReturn,
    purchaseEligible: decision.purchaseEligible,
    agreementSpread: decision.agreementSpread,
    confidence: decision.confidence,
  };
}

function structuredCandidates(race, dbType, betType, rows, marketHorseProbabilities, abilityHorseProbabilities, structuralBook, researchStructuralBook, names, hasCompleteModel) {
  if (["win", "place"].includes(dbType)) return [];
  const legs = engine.SPECS[betType].legs;
  const tickets = buildStructuredDefinitions({ legs, rows, marketHorse: marketHorseProbabilities,
    abilityHorse: abilityHorseProbabilities, abilityBook: researchStructuralBook })
    .map((definition) => ({ ...definition, method: definition.method === "formation" ? "フォーメーション" : definition.method }));
  const rowMap = new Map(rows.map((row) => [row.selection_key, row]));
  return tickets.flatMap((ticket) => {
    const combinations = engine.expandTicket({ betType, ...ticket });
    const selectedRows = combinations.map((selection) => rowMap.get(engine.selectionKey(selection, ORDERED.has(dbType)))).filter(Boolean);
    if (!selectedRows.length || selectedRows.length !== combinations.length) return [];
    const probabilities = combinations.map((selection, index) => {
      const key = engine.selectionKey(selection, ORDERED.has(dbType));
      const structural = structuralBook.get(key) ?? 0;
      return selectProbability({ marketProbability: selectedRows[index].marketProbability, modelProbability: structural, validationArtifact: VALIDATION_ARTIFACT }).probability;
    });
    const researchProbabilities = combinations.map((selection, index) => {
      const key = engine.selectionKey(selection, ORDERED.has(dbType));
      return researchStructuralBook.get(key) ?? probabilities[index];
    });
    const probability = probabilities.reduce((sum, value) => sum + value, 0) / probabilities.length;
    const display = ticket.method === "BOX"
      ? `${ticket.horses.join("-")} BOX`
      : ticket.groups.map((group) => group.join(",")).join(" → ");
    return [makeCandidate(race, betType, ticket.method, combinations.flat(), selectedRows, probability, names, combinations, probabilities, display, null, researchProbabilities, ticket.optimizationScenarios, hasCompleteModel)];
  });
}

function makeCandidate(race, betType, method, selection, rows, probability, names, combinations = null, itemProbabilities = null, displayOverride = null, researchProbability = null, researchItemProbabilities = null, optimizationScenarios = ["single_point"], hasCompleteModel = false) {
  const expectedReturn = rows.reduce((sum, row, index) => {
    const itemProbability = itemProbabilities?.[index] ?? probability;
    return sum + row.odds_low * itemProbability;
  }, 0) / rows.length;
  const abilityExpectedReturn = rows.reduce((sum, row, index) => {
    const itemProbability = researchItemProbabilities?.[index] ?? researchProbability ?? itemProbabilities?.[index] ?? probability;
    return sum + row.odds_low * itemProbability;
  }, 0) / rows.length;
  const itemCalibrationErrors = rows.map((row, index) => calibrationErrorForBetType(betType,
    researchItemProbabilities?.[index] ?? researchProbability ?? itemProbabilities?.[index] ?? probability));
  const calibrationError = Math.max(...itemCalibrationErrors, 0);
  const conservativeAbilityExpectedReturn = rows.reduce((sum, row, index) => {
    const itemProbability = researchItemProbabilities?.[index] ?? researchProbability ?? itemProbabilities?.[index] ?? probability;
    return sum + row.odds_low * Math.max(0, itemProbability - itemCalibrationErrors[index]);
  }, 0) / rows.length;
  const displayNumbers = combinations ? [...new Set(combinations.flat())] : selection;
  const display = displayOverride ?? displayNumbers.map((number) => `${number} ${names.get(number) ?? ""}`.trim()).join("・");
  const useAbility = hasCompleteModel && VALIDATION_ARTIFACT?.researchProbabilityStatus === "research_pass";
  const payoutPrior = payoutVolatilityPrior(race, betType);
  const externalValidationStatus = REFERENCE_EV_AUDIT?.status === "evaluation_only" ? "fail" : "insufficient";
  const deploymentStatus = VALIDATION_ARTIFACT?.deploymentStatus ?? "benchmark_only";
  const agentEnsemble = runExpectancyAgentEnsemble({
    oddsObservedAt: rows[0].observed_at,
    points: rows.length,
    totalInvestmentYen: rows.length * 100,
    modelVersion: useAbility ? VALIDATION_ARTIFACT.modelVersion : "expectancy-v2-market-baseline",
    betType,
    method,
    abilityModelStatus: useAbility ? "research_pass" : "not_available",
    calibrationStatus: useAbility ? "pass" : "benchmark",
    abilityExpectedReturn,
    marketExpectedReturn: expectedReturn,
    conservativeExpectedReturn: useAbility ? conservativeAbilityExpectedReturn : expectedReturn,
    calibrationError,
    externalValidationStatus,
    deploymentStatus,
    chronologyAuditStatus: useAbility ? "pass" : "not_evaluated",
    sampleSizeStatus: deploymentStatus === "eligible" ? "pass" : "blocked",
    drawdownStatus: deploymentStatus === "eligible" ? "pass" : "blocked",
    payoutVolatilityPrior: payoutPrior,
    contextStatus: "available",
    contextEvidence: {
      venueCode: race.venue_code,
      surface: race.surface,
      distanceM: race.distance_m,
      weather: race.weather,
      going: race.going,
      fieldSize: race.fieldSize,
    },
  });
  return {
    date: race.race_date,
    meetingName: meetingName(race),
    raceNo: race.race_number,
    raceId: race.race_id,
    betType,
    method,
    selection: display,
    points: rows.length,
    totalInvestmentYen: rows.length * 100,
    odds: rows.length === 1 ? rows[0].odds_low : null,
    ticketKeys: rows.map((row) => row.selection_key),
    probability: rows.length === 1 ? probability : null,
    conservativeProbability: rows.length === 1 ? Math.max(0, (researchProbability ?? probability) - itemCalibrationErrors[0]) : null,
    marketExpectedReturn: expectedReturn,
    conservativeExpectedReturn: useAbility ? conservativeAbilityExpectedReturn : expectedReturn,
    abilityProbability: rows.length === 1 ? (researchProbability ?? probability) : null,
    abilityExpectedReturn,
    adoptedExpectedReturn: useAbility ? conservativeAbilityExpectedReturn : expectedReturn,
    expectancyScenarios: { marketBaseline: expectedReturn, abilityModel: abilityExpectedReturn,
      calibrationErrorLowerBound: useAbility ? conservativeAbilityExpectedReturn : expectedReturn },
    calibrationError,
    abilityModelStatus: useAbility ? "research_pass" : "not_available",
    status: "ready",
    predictionContext: useAbility ? "out_of_sample_ability_model_with_market_benchmark" : "closing_final_validation",
    calculationMode: useAbility ? "ability_and_market_scenarios" : "closing_market_validation",
    oddsObservedAt: rows[0].observed_at,
    modelVersion: useAbility ? VALIDATION_ARTIFACT.modelVersion : "expectancy-v2-market-baseline",
    calibrationStatus: useAbility ? "pass" : "benchmark",
    externalValidationStatus,
    recommendationEligible: agentEnsemble.chiefDecision.purchaseEligible,
    payoutVolatilityPrior: payoutPrior,
    agentVotes: compactAgentVotes(agentEnsemble.assessments),
    chiefDecision: compactChiefDecision(agentEnsemble.chiefDecision),
    optimizationScenarios,
    comment: useAbility
      ? `対象レース前で学習を停止した能力モデルとJRA公式最終オッズで${method} ${rows.length}点を各100円計算。専門15エージェントを4階層で監査し、期待値統合エージェントだけが券種別の安全側期待値を順位決定に使います。${agentEnsemble.chiefDecision.rationale}`
      : `期待値v2の市場基準検証。JRA公式最終オッズで${method} ${rows.length}点を各100円計算。学習・校正ゲート未合格のため能力モデルは混合せず、払戻結果も確率算出に使用していません。`,
  };
}

function loadValidationArtifact() {
  const paths = [path.join("data", "jra-free-private", "models", "reference-asof-model.json"),
    path.join("data", "jra-free-private", "models", "ability-softmax-v1.json")];
  const artifactPath = paths.find((candidate) => fs.existsSync(candidate));
  if (!artifactPath) return null;
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
  return artifact.targetDates && !TARGET_DATES.every((date) => artifact.targetDates.includes(date)) ? null : artifact;
}

function calibrationErrorForBetType(betType, probability) {
  const dbType = Object.entries(DB_TYPES).find(([, label]) => label === betType)?.[0];
  const bins = VALIDATION_ARTIFACT?.ticketCalibrationUncertainty?.[dbType] ?? [];
  const bin = bins.find((candidate) => probability <= candidate.upper) ?? bins.at(-1);
  if (bin && Number.isFinite(Number(bin.downsideError90))) return Math.max(0, Number(bin.downsideError90));
  const value = Number(VALIDATION_ARTIFACT?.ticketCalibrationErrors?.[dbType]);
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

function loadReferenceEvAudit() {
  const auditPath = path.join("data", "jra-free-private", "models", "reference-ev-audit.json");
  if (!fs.existsSync(auditPath)) return null;
  const audit = JSON.parse(fs.readFileSync(auditPath, "utf8"));
  return audit.modelVersion === VALIDATION_ARTIFACT?.modelVersion ? audit : null;
}

function loadPayoutPatterns() {
  const file = path.join("data", "historical-payout-patterns.json");
  if (!fs.existsSync(file)) return { status: "missing", patterns: [] };
  const report = JSON.parse(fs.readFileSync(file, "utf8"));
  return report.status === "research_only" ? report : { status: "invalid", patterns: [] };
}

function payoutVolatilityPrior(race, betType) {
  const available = new Set([
    `venue=${race.venue_code}`,
    `surface=${String(race.surface ?? "").trim()}`,
    `distance=${distanceBucket(race.distance_m)}`,
    `field=${fieldBucket(race.fieldSize)}`,
    `raceBand=${raceBand(race.race_number)}`,
    `going=${String(race.going ?? "").trim()}`,
    `weather=${String(race.weather ?? "").trim()}`,
    `class=${classBucket(race.race_class)}`,
  ]);
  const matches = (PAYOUT_PATTERNS.patterns ?? []).filter((pattern) =>
    pattern.betType === betType && pattern.conditions.every((condition) => available.has(condition)));
  const strongest = matches.sort((left, right) => right.robustLift - left.robustLift)[0];
  return strongest ? {
    status: "matched_historical_pattern",
    lift: strongest.robustLift,
    conditions: strongest.conditions,
    discoveryCount: strongest.discovery.count,
    validationCount: strongest.validation.count,
    usePolicy: strongest.usePolicy,
  } : { status: "baseline", lift: 1, conditions: [], usePolicy: "volatility_prior_only" };
}

function summarizeReferenceAudit() {
  const strategy = REFERENCE_EV_AUDIT?.strategies?.find((row) => row.name === "AI推奨・全レース");
  return strategy ? { status: "fail", sampleRaces: 72, bets: strategy.bets, hits: strategy.hits, roi: strategy.roi,
    evaluationScope: REFERENCE_EV_AUDIT.evaluationScope,
    recommendations: REFERENCE_EV_AUDIT.recommendations,
    strategies: REFERENCE_EV_AUDIT.strategies,
    reason: "AI推奨買い目だけを対象にした72レース外部監査でROIゲート不合格。確率・期待値の表示は研究比較専用。" }
    : { status: "insufficient", sampleRaces: 0, reason: "外部期待値監査未完了" };
}

function credibilityPoolHorseProbabilities(marketProbabilities, modelRows) {
  const scores = Object.fromEntries(modelRows.map((row) => {
    const starts = Math.max(0, Number(row.history_starts) || 0);
    const modelCredibility = starts / (starts + 13);
    const market = Math.max(1e-12, marketProbabilities[row.horse_number] ?? 0);
    const model = Math.max(1e-12, Number(row.win_probability));
    return [row.horse_number, Math.pow(model, modelCredibility) * Math.pow(market, 1 - modelCredibility)];
  }));
  return normalize(scores);
}

function ticketCredibilityPool(rows, modelBook, modelRows, betType) {
  const legs = betType === "win" || betType === "place" ? 1 : betType === "quinella" || betType === "wide" || betType === "exacta" ? 2 : 3;
  if (legs === 1) return modelBook;
  const starts = new Map(modelRows.map((row) => [row.horse_number, Math.max(0, Number(row.history_starts) || 0)]));
  const scored = rows.map((row) => {
    const horses = row.selection_key.split("-").map(Number);
    const positive = horses.map((horse) => starts.get(horse) ?? 0).filter((value) => value > 0);
    const effectiveStarts = positive.length === horses.length
      ? horses.length / positive.reduce((sum, value) => sum + 1 / value, 0) : 0;
    const modelCredibility = effectiveStarts / (effectiveStarts + 13 * legs);
    const market = Math.max(1e-15, row.marketProbability);
    const model = Math.max(1e-15, modelBook.get(row.selection_key) ?? market);
    return [row.selection_key, Math.pow(model, modelCredibility) * Math.pow(market, 1 - modelCredibility)];
  });
  const targetMass = rows.reduce((sum, row) => sum + row.marketProbability, 0);
  const total = scored.reduce((sum, [, value]) => sum + value, 0);
  return new Map(scored.map(([key, value]) => [key, targetMass * value / total]));
}

function normalize(values) {
  const total = Object.values(values).reduce((sum, value) => sum + value, 0);
  return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value / total]));
}

function distanceBucket(value) {
  const distance = Number(value);
  if (!(distance > 0)) return "";
  if (distance <= 1200) return "sprint";
  if (distance <= 1600) return "mile";
  if (distance <= 2200) return "middle";
  return "long";
}

function fieldBucket(value) {
  const size = Number(value);
  if (!(size > 0)) return "";
  if (size <= 7) return "small";
  if (size <= 12) return "medium";
  return "large";
}

function raceBand(value) {
  const number = Number(value);
  if (!(number > 0)) return "";
  if (number <= 4) return "early";
  if (number <= 8) return "middle";
  return "late";
}

function classBucket(value) {
  const text = String(value ?? "").trim();
  if (/新馬/.test(text)) return "maiden_debut";
  if (/未勝利/.test(text)) return "maiden";
  if (/障害/.test(text)) return "jump";
  if (/G[ⅠI1]|重賞|オープン|OP/.test(text)) return "open_graded";
  return text ? "conditions" : "";
}

function group(rows, key) {
  const map = new Map();
  for (const row of rows) {
    const value = row[key];
    if (!map.has(value)) map.set(value, []);
    map.get(value).push(row);
  }
  return map;
}

function byExpectedReturn(left, right) {
  return (right.chiefDecision?.rankingExpectedReturn ?? right.adoptedExpectedReturn)
    - (left.chiefDecision?.rankingExpectedReturn ?? left.adoptedExpectedReturn);
}

function meetingName(race) {
  const day = race.race_date === "2026-07-11" ? { "02": 9, "03": 5, "10": 5 } : { "02": 10, "03": 6, "10": 6 };
  const prefix = ({ "02": "1回函館", "03": "2回福島", "10": "2回小倉" })[race.venue_code];
  return prefix ? `${prefix}${day[race.venue_code]}日` : race.venue_code;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = generateMarketEv();
  console.log(JSON.stringify({ races: Object.keys(result.evaluatedByRace).length, evaluated: result.evaluatedTotal, candidates: result.candidates.length, coverage: result.coverageCounts }, null, 2));
}
