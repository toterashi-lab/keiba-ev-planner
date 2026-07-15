import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { EXPECTANCY_ENGINE_VERSION, normalizeMarket, selectProbability } from "../model/expectancy-engine-v2.mjs";
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

export function generateMarketEv() {
  const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
  try {
    const baseBatch = db.prepare(`select id from odds_ingestion_batches
      where status='complete' and source='JRA official odds' order by id desc limit 1`).get();
    const exoticBatch = db.prepare(`select id from odds_ingestion_batches
      where status='complete' and source='JRA official exotic odds' order by id desc limit 1`).get();
    if (!baseBatch || !exoticBatch) throw new Error("単勝・複勝または全券種の完了バッチがありません");

    const placeholders = TARGET_DATES.map(() => "?").join(",");
    const races = db.prepare(`select race_id,race_date,venue_code,race_number from complete_races
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
      history_starts: row.historyStarts,
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
      const horseProbabilities = normalize(Object.fromEntries(winRows.map((row) => [row.selection_key, 1 / row.odds_low])));
      const structuralBooks = buildFinishOrderProbabilityBooks(horseProbabilities);
      const modelRows = modelPredictionsByRace.get(race.race_id) ?? [];
      const hasCompleteModel = modelRows.length === winRows.length
        && Math.abs(modelRows.reduce((sum, row) => sum + row.win_probability, 0) - 1) <= 1e-6;
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
      predictions.push(makeAiPrediction(race, researchHorseProbabilities, names, raceCandidates, hasCompleteModel));
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

function makeAiPrediction(race, horseProbabilities, names, raceCandidates, abilityModelAvailable) {
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
    marks: ranked.slice(0, marks.length).map((row, index) => ({ mark: marks[index], ...row })),
    topTicket: topTicket ? { betType: topTicket.betType, method: topTicket.method, selection: topTicket.selection, expectedReturn: topTicket.adoptedExpectedReturn } : null,
    comment: `${ranked.length}頭の市場確率を比較。◎${ranked[0].horseName}は推定勝率${(ranked[0].probability * 100).toFixed(1)}%、○との差は${(gap * 100).toFixed(1)}ポイント。${scenario}シナリオで評価します。`,
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
  const calibrationError = calibrationErrorForBetType(betType);
  const conservativeAbilityExpectedReturn = rows.reduce((sum, row, index) => {
    const itemProbability = researchItemProbabilities?.[index] ?? researchProbability ?? itemProbabilities?.[index] ?? probability;
    return sum + row.odds_low * Math.max(0, itemProbability - calibrationError);
  }, 0) / rows.length;
  const displayNumbers = combinations ? [...new Set(combinations.flat())] : selection;
  const display = displayOverride ?? displayNumbers.map((number) => `${number} ${names.get(number) ?? ""}`.trim()).join("・");
  const useAbility = hasCompleteModel && VALIDATION_ARTIFACT?.researchProbabilityStatus === "research_pass";
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
    conservativeProbability: rows.length === 1 ? Math.max(0, (researchProbability ?? probability) - calibrationError) : null,
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
    externalValidationStatus: REFERENCE_EV_AUDIT?.status === "evaluation_only" ? "fail" : "insufficient",
    recommendationEligible: false,
    optimizationScenarios,
    comment: useAbility
      ? `対象レース前で学習を停止した能力モデルとJRA公式最終オッズで${method} ${rows.length}点を各100円計算。表示順位は券種別の校正誤差を確率から控除した保守期待値です。対象レースの結果・払戻は予測確率に使用していません。`
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

function calibrationErrorForBetType(betType) {
  const dbType = Object.entries(DB_TYPES).find(([, label]) => label === betType)?.[0];
  const value = Number(VALIDATION_ARTIFACT?.ticketCalibrationErrors?.[dbType]);
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

function loadReferenceEvAudit() {
  const auditPath = path.join("data", "jra-free-private", "models", "reference-ev-audit.json");
  if (!fs.existsSync(auditPath)) return null;
  const audit = JSON.parse(fs.readFileSync(auditPath, "utf8"));
  return audit.modelVersion === VALIDATION_ARTIFACT?.modelVersion ? audit : null;
}

function summarizeReferenceAudit() {
  const strategy = REFERENCE_EV_AUDIT?.strategies?.find((row) => row.name === "全券種・各レース各券種1位 EV>1");
  return strategy ? { status: "fail", sampleRaces: 72, bets: strategy.bets, hits: strategy.hits, roi: strategy.roi,
    reason: "72レース外部監査でROIゲート不合格。確率・期待値の表示は研究比較専用。" }
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
  return right.adoptedExpectedReturn - left.adoptedExpectedReturn;
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
