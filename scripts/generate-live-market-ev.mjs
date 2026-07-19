import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { loadCompatibleModelArtifact } from "../model/model-artifact-compatibility.mjs";
import { runExpectancyAgentEnsemble } from "../model/expectancy-agent-ensemble.mjs";
import { EXPECTANCY_ENGINE_VERSION, normalizeMarket, selectProbability } from "../model/expectancy-engine-v2.mjs";
import { buildStructuredDefinitions } from "../model/structured-ticket-search.mjs";
import { buildFinishOrderProbabilityBooks, calibrateFinishOrderProbabilityBooks } from "../model/finish-order-probabilities.mjs";
import { isPreRaceObservation } from "./race-time.mjs";
import { FEATURE_KEYS } from "./train-expectancy-model.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

await import(pathToFileURL(path.resolve("ticket-engine.js")).href);
const engine = globalThis.KEIBA_TICKET_ENGINE;
const TYPES = { win: "単勝", place: "複勝", quinella: "馬連", wide: "ワイド", exacta: "馬単", trio: "3連複", trifecta: "3連単" };
const ORDERED = new Set(["win", "place", "exacta", "trifecta"]);
const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const OUTPUT = path.join(PRIVATE_DIR, "models", "live-market-ev.json");

export function generateLiveMarketEv(options = {}) {
  const outputPath = options.outputPath ?? OUTPUT;
  const db = new DatabaseSync(options.databasePath ?? path.join(PRIVATE_DIR, "keiba.sqlite"));
  db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  try {
    initializeLedgerSchema(db);
    const base = db.prepare(`select * from odds_ingestion_batches where status='complete' and source in (${options.allowFixture ? "'JRA official live odds','JRA official live odds fixture'" : "'JRA official live odds'"}) order by id desc limit 1`).get();
    const exotic = base ? db.prepare(`select * from odds_ingestion_batches where status='complete' and source in (${options.allowFixture ? "'JRA official live exotic odds','JRA official live exotic odds fixture'" : "'JRA official live exotic odds'"})
      and snapshot_kind=? and target_dates=? order by id desc limit 1`).get(base.snapshot_kind, base.target_dates) : null;
    const racecardBatch = db.prepare("select * from live_racecard_batches where status='complete' and race_count>0 order by id desc limit 1").get();
    const racecardTargetDates = resolveStoredRacecardTargetDates(db, racecardBatch);
    const targetDates = options.includeBatch === true
      ? racecardTargetDates
      : resolveLiveTargetDates({ baseTargetDates: base?.target_dates, racecardTargetDates,
        today: tokyoDate(), allowFixture: options.allowFixture === true });
    if (!targetDates.length) return waiting("live_racecards", outputPath);
    const datePlaceholders = targetDates.map(() => "?").join(",");
    const races = db.prepare(`select * from live_races where race_date in (${datePlaceholders}) order by race_date,venue_code,race_number`).all(...targetDates);
    const raceIds = races.map((race) => race.race_id);
    if (!raceIds.length) return waiting("live_racecards", outputPath);
    const odds = loadLatestCompleteLiveOdds(db, raceIds, { allowFixture: options.allowFixture === true });
    const placeholders = raceIds.map(() => "?").join(",");
    const entries = db.prepare(`select race_id,horse_id,horse_number,horse_name from live_entries where race_id in (${placeholders}) order by race_id,horse_number`).all(...raceIds);
    const artifact = options.artifact ?? loadArtifact(options.artifactPath);
    const hasPredictionTable = db.prepare("select count(*) count from sqlite_master where type='table' and name='live_predictions'").get().count === 1;
    const predictionColumns = hasPredictionTable
      ? new Set(db.prepare("pragma table_info(live_predictions)").all().map((row) => row.name))
      : new Set();
    const historyStartsSql = predictionColumns.has("history_starts") ? "p.history_starts" : "0";
    const featuresSql = predictionColumns.has("features_json") ? "p.features_json" : "null";
    const modelRows = artifact && hasPredictionTable ? db.prepare(`select p.race_id,e.horse_number,p.win_probability,${historyStartsSql} history_starts,${featuresSql} features_json
      from live_predictions p join live_entries e on e.race_id=p.race_id and e.horse_id=p.horse_id
      where p.model_version=? and p.race_id in (${placeholders})`).all(artifact.modelVersion, ...raceIds) : [];
    const oddsByRace = group(odds, "race_id");
    const entriesByRace = group(entries, "race_id");
    const modelByRace = group(modelRows, "race_id");
    const candidates = [];
    const predictions = [];
    const generatedAt = new Date().toISOString();
    const coverageCounts = Object.fromEntries(Object.values(TYPES).map((label) => [label, 0]));
    const evaluatedByRace = {};

    for (const race of races) {
      const raceOdds = oddsByRace.get(race.race_id) ?? [];
      const byType = group(raceOdds, "bet_type");
      const raceEntries = entriesByRace.get(race.race_id) ?? [];
      const names = new Map(raceEntries.map((row) => [row.horse_number, row.horse_name]));
      const winRows = byType.get("win") ?? [];
      const trainedRows = modelByRace.get(race.race_id) ?? [];
      const { hasModel, marketHorse, abilityHorse } = resolveLiveRaceProbability({ artifact, raceEntries, trainedRows, winRows });
      if (!abilityHorse) continue;
      const hasCompleteOdds = Object.keys(TYPES).every((type) => byType.get(type)?.length);
      if (!hasCompleteOdds) {
        predictions.push(aiPrediction(race, abilityHorse, names, [], artifact, hasModel, trainedRows, marketHorse, generatedAt, options.allowFixture === true));
        continue;
      }
      const marketBooks = buildFinishOrderProbabilityBooks(marketHorse);
      const rawAbilityBooks = buildFinishOrderProbabilityBooks(abilityHorse);
      const abilityBooks = artifact?.ticketProbabilityStatus === "research_pass"
        ? calibrateFinishOrderProbabilityBooks(rawAbilityBooks, artifact.ticketCalibrationTemperatures, raceEntries.length)
        : rawAbilityBooks;
      const raceBatchIds = resolveRaceBatchIds(raceOdds);
      if (!raceBatchIds) throw new Error(`${race.race_id}の単複・全券種バッチ対応が不正です`);
      const raceCandidates = [];
      let evaluated = 0;
      for (const [type, label] of Object.entries(TYPES)) {
        const rows = normalizeMarket(byType.get(type), type, winRows.length);
        coverageCounts[label] += 1;
        const researchBook = ticketCredibilityPool(rows, abilityBooks[type], trainedRows, type);
        const singles = rows.map((row) => {
          const marketStructural = marketBooks[type].get(row.selection_key) ?? row.marketProbability;
          const probability = selectProbability({ marketProbability: row.marketProbability, modelProbability: marketStructural, validationArtifact: artifact }).probability;
          const abilityProbability = researchBook.get(row.selection_key) ?? probability;
          return candidate(race, label, "1点", row.selection_key, [row], [probability], [abilityProbability], names, artifact, hasModel, raceBatchIds);
        });
        evaluated += singles.length;
        raceCandidates.push(...singles.sort(byAbilityEv).slice(0, 12));
        raceCandidates.push(...structured(race, type, label, rows, marketHorse, abilityHorse, marketBooks[type], researchBook, names, artifact, hasModel, raceBatchIds));
      }
      evaluatedByRace[race.race_id] = evaluated;
      candidates.push(...raceCandidates);
      predictions.push(aiPrediction(race, abilityHorse, names, raceCandidates, artifact, hasModel, trainedRows, marketHorse, generatedAt, options.allowFixture === true));
    }
    const result = {
      status: predictions.length ? "ready" : "waiting",
      reason: candidates.length ? null : predictions.length ? "waiting_for_complete_odds" : "ability_model_or_live_odds",
      generatedAt,
      snapshotKind: base?.snapshot_kind ?? "pre_race",
      targetDates,
      baseBatchId: base?.id ?? null,
      exoticBatchId: exotic?.id ?? null,
      oddsBatchIds: [...new Set(odds.map((row) => row.batch_id))].sort((left, right) => left - right),
      modelVersion: artifact?.modelVersion ?? "market-baseline",
      abilityModelStatus: artifact?.researchProbabilityStatus ?? "not_trained",
      deploymentStatus: "benchmark_only",
      engineVersion: EXPECTANCY_ENGINE_VERSION,
      unitStakeYen: 100,
      predictionCoverage: {
        targetRaces: races.length,
        predictedRaces: predictions.length,
        oddsReadyRaces: Object.keys(evaluatedByRace).length,
        modelOnlyRaces: predictions.filter((row) => row.topTicket === null && row.modelVersion !== "market-baseline").length,
      },
      coverageCounts,
      evaluatedByRace,
      evaluatedTotal: Object.values(evaluatedByRace).reduce((sum, value) => sum + value, 0),
      predictions,
      candidates,
    };
    if (!options.allowFixture) persistCandidateLedger(db, result);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
    return result;
  } finally { db.close(); }
}

export function resolveLiveRaceProbability({ artifact, raceEntries, trainedRows, winRows }) {
  const marketHorse = winRows.length
    ? normalize(Object.fromEntries(winRows.map((row) => [row.selection_key, 1 / row.odds_low])))
    : null;
  const hasModel = artifact?.researchProbabilityStatus === "research_pass"
    && raceEntries.length > 1 && trainedRows.length === raceEntries.length;
  const abilityHorse = hasModel
    ? credibilityPoolHorseProbabilities(marketHorse, trainedRows)
    : marketHorse;
  return { hasModel, marketHorse, abilityHorse };
}

function credibilityPoolHorseProbabilities(marketProbabilities, modelRows) {
  if (!marketProbabilities) return normalize(Object.fromEntries(modelRows.map((row) => [row.horse_number, row.win_probability])));
  return normalize(Object.fromEntries(modelRows.map((row) => {
    const starts = Math.max(0, Number(row.history_starts) || 0);
    const credibility = starts / (starts + 13);
    const market = Math.max(1e-12, marketProbabilities[row.horse_number] ?? 0);
    const model = Math.max(1e-12, Number(row.win_probability));
    return [row.horse_number, Math.pow(model, credibility) * Math.pow(market, 1 - credibility)];
  })));
}

function ticketCredibilityPool(rows, modelBook, modelRows, betType) {
  const legs = betType === "win" || betType === "place" ? 1 : betType === "quinella" || betType === "wide" || betType === "exacta" ? 2 : 3;
  if (legs === 1) return modelBook;
  const starts = new Map(modelRows.map((row) => [row.horse_number, Math.max(0, Number(row.history_starts) || 0)]));
  const scores = rows.map((row) => {
    const horses = row.selection_key.split("-").map(Number);
    const history = horses.map((horse) => starts.get(horse) ?? 0);
    const effectiveStarts = history.every((value) => value > 0) ? history.length / history.reduce((sum, value) => sum + 1 / value, 0) : 0;
    const credibility = effectiveStarts / (effectiveStarts + 13 * legs);
    const market = Math.max(1e-15, row.marketProbability);
    const model = Math.max(1e-15, modelBook.get(row.selection_key) ?? market);
    return [row.selection_key, Math.pow(model, credibility) * Math.pow(market, 1 - credibility)];
  });
  const total = scores.reduce((sum, [, value]) => sum + value, 0);
  const targetMass = [...modelBook.values()].reduce((sum, value) => sum + value, 0);
  return new Map(scores.map(([key, value]) => [key, total > 0 ? value * targetMass / total : 0]));
}

export function resolveLiveTargetDates({ baseTargetDates, racecardTargetDates, today, allowFixture = false }) {
  const parse = (value) => [...new Set(String(value ?? "").split(",").map((date) => date.trim()).filter(Boolean))];
  const baseDates = parse(baseTargetDates).filter((date) => allowFixture || date >= today);
  const racecardDates = parse(racecardTargetDates).filter((date) => allowFixture || date >= today);
  return [...new Set([...baseDates, ...racecardDates])].sort();
}

export function resolveStoredRacecardTargetDates(database, batch) {
  if (!batch) return [];
  const stored = String(batch.target_dates ?? "").split(",").map((date) => date.trim()).filter(Boolean);
  if (stored.length) return [...new Set(stored)].sort();
  return database.prepare("select distinct race_date from live_races where batch_id=? order by race_date")
    .all(batch.id).map((row) => row.race_date);
}

export function loadLatestCompleteLiveOdds(database, raceIds, options = {}) {
  if (!raceIds.length) return [];
  const baseSources = options.allowFixture
    ? ["JRA official live odds", "JRA official live odds fixture"] : ["JRA official live odds"];
  const exoticSources = options.allowFixture
    ? ["JRA official live exotic odds", "JRA official live exotic odds fixture"] : ["JRA official live exotic odds"];
  const quote = (value) => `'${value.replaceAll("'", "''")}'`;
  const baseSql = baseSources.map(quote).join(",");
  const allSql = [...baseSources, ...exoticSources].map(quote).join(",");
  const placeholders = raceIds.map(() => "?").join(",");
  const snapshotGate = options.allowFixture ? "" : "and b.snapshot_kind='pre_race'";
  const eligible = database.prepare(`select s.race_id,s.bet_type,s.selection_key,s.odds_low,s.odds_high,s.observed_at,s.batch_id,
      case when b.source in (${baseSql}) then 'base' else 'exotic' end source_group,r.race_date,r.start_time
    from live_odds_snapshots s join odds_ingestion_batches b on b.id=s.batch_id join live_races r on r.race_id=s.race_id
    where b.status='complete' and b.source in (${allSql}) ${snapshotGate}
      and s.race_id in (${placeholders})
    order by s.race_id,s.bet_type,s.selection_key`).all(...raceIds)
    .filter((row) => options.allowFixture || isPreRaceObservation(row.race_date, row.start_time, row.observed_at));
  const latest = new Map();
  for (const row of eligible) {
    const key = `${row.race_id}|${row.source_group}`;
    latest.set(key, Math.max(latest.get(key) ?? 0, row.batch_id));
  }
  return eligible.filter((row) => row.batch_id === latest.get(`${row.race_id}|${row.source_group}`));
}

function resolveRaceBatchIds(rows) {
  const base = [...new Set(rows.filter((row) => row.source_group === "base").map((row) => row.batch_id))];
  const exotic = [...new Set(rows.filter((row) => row.source_group === "exotic").map((row) => row.batch_id))];
  return base.length === 1 && exotic.length === 1 ? { baseBatchId: base[0], exoticBatchId: exotic[0] } : null;
}

function structured(race, type, label, rows, marketHorse, abilityHorse, marketBook, abilityBook, names, artifact, hasModel, batchIds) {
  if (type === "win" || type === "place") return [];
  const definitions = buildStructuredDefinitions({ legs: engine.SPECS[label].legs, rows, marketHorse, abilityHorse, abilityBook })
    .map((definition) => ({ ...definition, method: definition.method === "formation" ? "フォーメーション" : definition.method }));
  const rowMap = new Map(rows.map((row) => [row.selection_key, row]));
  return definitions.flatMap((definition) => {
    const combinations = engine.expandTicket({ betType: label, ...definition });
    const selected = combinations.map((selection) => rowMap.get(engine.selectionKey(selection, ORDERED.has(type))));
    if (selected.some((row) => !row)) return [];
    const marketProbabilities = combinations.map((selection, index) => {
      const key = engine.selectionKey(selection, ORDERED.has(type));
      return selectProbability({ marketProbability: selected[index].marketProbability, modelProbability: marketBook.get(key) ?? 0, validationArtifact: artifact }).probability;
    });
    const abilityProbabilities = combinations.map((selection, index) => abilityBook.get(engine.selectionKey(selection, ORDERED.has(type))) ?? marketProbabilities[index]);
    const display = definition.method === "BOX" ? `${definition.horses.join("-")} BOX` : definition.groups.map((group) => group.join(",")).join(" → ");
    return [candidate(race, label, definition.method, display, selected, marketProbabilities, abilityProbabilities, names, artifact, hasModel, batchIds, definition.optimizationScenarios)];
  });
}

function candidate(race, betType, method, selectionKey, rows, probabilities, abilityProbabilities, names, artifact, hasModel, batchIds, optimizationScenarios = ["single_point"]) {
  const marketEv = average(rows.map((row, index) => row.odds_low * probabilities[index]));
  const abilityEv = average(rows.map((row, index) => row.odds_low * abilityProbabilities[index]));
  const calibrationErrors = abilityProbabilities.map((probability) => calibrationDownsideError(artifact, betType, probability));
  const conservativeAbilityProbabilities = abilityProbabilities.map((probability, index) => Math.max(0, probability - calibrationErrors[index]));
  const conservativeAbilityEv = average(rows.map((row, index) => row.odds_low * conservativeAbilityProbabilities[index]));
  const display = method === "1点" ? selectionKey.split("-").map((number) => `${number} ${names.get(Number(number)) ?? ""}`.trim()).join("・") : selectionKey;
  const oddsObservedAt = rows.reduce((latest, row) => row.observed_at > latest ? row.observed_at : latest, "");
  const agentEnsemble = runExpectancyAgentEnsemble({
    oddsObservedAt,
    points: rows.length,
    totalInvestmentYen: rows.length * 100,
    modelVersion: artifact?.modelVersion ?? "market-baseline",
    betType,
    method,
    abilityModelStatus: artifact?.researchProbabilityStatus ?? "not_trained",
    calibrationStatus: hasModel ? "pass" : "benchmark",
    abilityExpectedReturn: abilityEv,
    marketExpectedReturn: marketEv,
    conservativeExpectedReturn: hasModel ? conservativeAbilityEv : marketEv,
    calibrationError: rows.length === 1 ? calibrationErrors[0] : average(calibrationErrors),
    externalValidationStatus: artifact?.deploymentStatus === "eligible" ? "pass" : "insufficient",
    deploymentStatus: artifact?.deploymentStatus ?? "benchmark_only",
    chronologyAuditStatus: hasModel ? "pass" : "not_evaluated",
    sampleSizeStatus: artifact?.deploymentStatus === "eligible" ? "pass" : "blocked",
    drawdownStatus: artifact?.deploymentStatus === "eligible" ? "pass" : "blocked",
    payoutVolatilityPrior: { status: "live_context_pending", lift: 1, conditions: [], usePolicy: "volatility_prior_only" },
    contextStatus: "available",
    contextEvidence: { direction: race.direction, weather: race.weather, going: race.going },
  });
  return {
    date: race.race_date, meetingName: race.meeting_name, raceNo: race.race_number, raceId: race.race_id,
    betType, method, selection: display, points: rows.length, totalInvestmentYen: rows.length * 100,
    odds: rows.length === 1 ? rows[0].odds_low : null,
    probability: rows.length === 1 ? probabilities[0] : null,
    abilityProbability: rows.length === 1 ? abilityProbabilities[0] : null,
    conservativeExpectedReturn: hasModel ? conservativeAbilityEv : marketEv, abilityExpectedReturn: abilityEv,
    adoptedExpectedReturn: hasModel ? conservativeAbilityEv : marketEv,
    abilityModelStatus: artifact?.researchProbabilityStatus ?? "not_trained",
    status: "ready", predictionContext: "pre_race", calculationMode: hasModel ? "ability_and_market_scenarios" : "market_baseline",
    oddsObservedAt, modelVersion: artifact?.modelVersion ?? "market-baseline",
    calibrationStatus: hasModel ? "pass" : "benchmark",
    calibrationError: rows.length === 1 ? calibrationErrors[0] : average(calibrationErrors),
    recommendationEligible: agentEnsemble.chiefDecision.purchaseEligible,
    agentVotes: compactAgentVotes(agentEnsemble.assessments),
    chiefDecision: compactChiefDecision(agentEnsemble.chiefDecision),
    baseBatchId: batchIds.baseBatchId,
    exoticBatchId: batchIds.exoticBatchId,
    optimizationScenarios,
    componentSelectionKeys: rows.map((row) => row.selection_key),
    componentOdds: rows.map((row) => row.odds_low),
    componentMarketProbabilities: probabilities,
    componentAbilityProbabilities: abilityProbabilities,
    componentConservativeAbilityProbabilities: conservativeAbilityProbabilities,
  };
}

function calibrationDownsideError(artifact, betType, probability) {
  const dbType = Object.entries(TYPES).find(([, label]) => label === betType)?.[0];
  const bins = artifact?.ticketCalibrationUncertainty?.[dbType] ?? [];
  const bin = bins.find((candidate) => probability <= candidate.upper) ?? bins.at(-1);
  return Number.isFinite(Number(bin?.downsideError90)) ? Math.max(0, Number(bin.downsideError90)) : 0;
}

function initializeLedgerSchema(db) {
  db.exec(`create table if not exists live_ev_candidates(
    id integer primary key,race_id text not null,snapshot_kind text not null,base_batch_id integer not null,exotic_batch_id integer not null,
    model_version text not null,calibration_status text not null,bet_type text not null,method text not null,selection_display text not null,
    ticket_key text not null,component_selection_keys_json text not null,component_odds_json text not null,
    component_market_probabilities_json text not null,component_ability_probabilities_json text not null,
    points integer not null check(points>0),total_investment_yen integer not null check(total_investment_yen=points*100),
    expected_return real not null,odds_observed_at text not null,generated_at text not null,
    unique(race_id,base_batch_id,exotic_batch_id,model_version,bet_type,method,ticket_key)
  );
  create index if not exists live_ev_candidates_evaluation_idx on live_ev_candidates(snapshot_kind,race_id,model_version,odds_observed_at);`);
}

export function persistCandidateLedger(db, result) {
  if (result.status !== "ready" || !result.candidates.length) return;
  initializeLedgerSchema(db);
  const insert = db.prepare(`insert into live_ev_candidates(
    race_id,snapshot_kind,base_batch_id,exotic_batch_id,model_version,calibration_status,bet_type,method,selection_display,ticket_key,
    component_selection_keys_json,component_odds_json,component_market_probabilities_json,component_ability_probabilities_json,
    points,total_investment_yen,expected_return,odds_observed_at,generated_at
  ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) on conflict do nothing`);
  db.exec("begin immediate");
  try {
    for (const row of result.candidates) {
      const ticketKey = row.componentSelectionKeys.join("|");
      if (!Number.isInteger(row.baseBatchId) || !Number.isInteger(row.exoticBatchId)) throw new Error(`${row.raceId}の候補バッチIDがありません`);
      insert.run(row.raceId, result.snapshotKind, row.baseBatchId, row.exoticBatchId, row.modelVersion,
        row.calibrationStatus, row.betType, row.method, row.selection, ticketKey,
        JSON.stringify(row.componentSelectionKeys), JSON.stringify(row.componentOdds),
        JSON.stringify(row.componentMarketProbabilities), JSON.stringify(row.componentAbilityProbabilities),
        row.points, row.totalInvestmentYen, row.adoptedExpectedReturn, row.oddsObservedAt, result.generatedAt);
    }
    db.exec("commit");
  } catch (error) {
    db.exec("rollback");
    throw error;
  }
}

function aiPrediction(race, probabilities, names, raceCandidates, artifact, hasModel, trainedRows = [], marketHorse = null,
  generatedAt = new Date().toISOString(), allowFixture = false) {
  const marks = ["◎", "○", "▲", "△", "☆"];
  const ranked = Object.entries(probabilities).map(([horseNumber, probability]) => ({ horseNumber: Number(horseNumber), horseName: names.get(Number(horseNumber)) ?? "", probability }))
    .sort((left, right) => right.probability - left.probability || left.horseNumber - right.horseNumber);
  const top = [...raceCandidates].sort(byAbilityEv)[0];
  const specialistForecasts = buildLiveForecastPanel(probabilities, names, trainedRows, marketHorse);
  const predictionContext = allowFixture || isPreRaceObservation(race.race_date, race.start_time, generatedAt) ? "pre_race" : "as_of_replay";
  return { date: race.race_date, meetingName: race.meeting_name, raceNo: race.race_number, raceId: race.race_id, modelVersion: artifact?.modelVersion ?? "market-baseline",
    generatedAt, predictionContext, status: "ready", confidence: ranked[0].probability >= 0.25 ? "中" : "低", confidenceScore: ranked[0].probability,
    scenario: ranked[0].probability - ranked[1].probability >= 0.08 ? "本命軸" : "混戦", marks: ranked.slice(0, 5).map((row, index) => ({ mark: marks[index], ...row })),
    forecastPanel: specialistForecasts,
    masterConsensus: { agent: "chief-expectancy-agent", participatingForecasters: specialistForecasts.length,
      topHorseNumber: ranked[0].horseNumber, topHorseName: ranked[0].horseName },
    topTicket: top ? { betType: top.betType, method: top.method, selection: top.selection, expectedReturn: top.adoptedExpectedReturn,
      chiefDecision: top.chiefDecision } : null,
    comment: `${specialistForecasts.filter((agent) => agent.status === "available").length}人の専門AIを評価点と信頼度で統合。全${ranked.length}頭中の1位勝率${(ranked[0].probability * 100).toFixed(1)}%。${predictionContext === "pre_race" ? "発走前予想として保存対象。" : "発走時点特徴量による後日再現で成績対象外。"}`, };
}

function buildLiveForecastPanel(probabilities, names, trainedRows, marketHorse) {
  const marks = ["◎", "○", "▲", "△", "☆"];
  const features = new Map(trainedRows.map((row) => {
    try { return [Number(row.horse_number), JSON.parse(row.features_json ?? "{}")]; }
    catch { return [Number(row.horse_number), {}]; }
  }));
  const base = Object.entries(probabilities).map(([horseNumber, probability]) => ({
    horseNumber: Number(horseNumber), horseName: names.get(Number(horseNumber)) ?? "", probability,
    features: features.get(Number(horseNumber)) ?? {}, market: marketHorse?.[horseNumber] ?? null,
  }));
  const signal = (row, keys) => averageFinite(keys.map((key) => Number(row.features[key])));
  const scored = (scoreFn) => base.map((row) => ({ ...row, score: scoreFn(row) }))
    .filter((row) => Number.isFinite(row.score)).sort((a, b) => b.score - a.score || a.horseNumber - b.horseNumber);
  const ability = scored((row) => row.probability * .65 + finiteOr(signal(row, ["priorWinRateSmoothed", "recent3PlaceRate", "recent5PlaceRate"]), 0) * .35);
  const pace = scored((row) => row.features.paceHistoryStarts > 0
    ? signal(row, ["frontRunnerRateSmoothed", "recent3PositionGain", "priorAveragePositionGain", "recent3LateCornerPositionPercentile"]) : NaN);
  const data = scored((row) => signal(row, ["venueWinRateSmoothed", "distanceBandWinRateSmoothed", "surfaceWinRateSmoothed",
    "goingWinRateSmoothed", "jockeyWinRateSmoothed", "trainerWinRateSmoothed"]));
  const value = scored((row) => row.market > 0 ? row.probability / row.market
    + Math.max(0, finiteOr(signal(row, ["recent3PositionGain", "fieldRelativeSmoothedWinRate"]), 0)) : NaN);
  const odds = scored((row) => row.market > 0 ? Math.log(Math.max(1e-12, row.probability) / Math.max(1e-12, row.market)) : NaN);
  const rows = [
    specialist("agent_ability", "能力AI", "ability", ability, "能力・近走・格の履歴を重視", marks),
    specialist("agent_pace", "展開AI", "pace", pace, "脚質・位置取り・想定ペースを重視", marks),
    specialist("agent_data", "データAI", "data", data, "コース・距離・騎手・厩舎を重視", marks),
    specialist("agent_value", "穴馬AI", "value", value, "人気薄と能力に対する過小評価を重視", marks),
    specialist("agent_odds", "オッズAI", "odds", odds, "AI確率と市場確率の差を重視", marks),
  ];
  return rows;
}

function specialist(id, label, tone, rows, stance, marks) {
  if (!rows.length) return { id, label, persona: true, personaTone: tone, status: "unavailable", marks: [],
    confidence: 0, opinion: `${stance}。必要データ待ち。` };
  const confidence = Math.min(1, rows.filter((row) => Object.keys(row.features).length > 0).length / rows.length);
  return { id, label, persona: true, personaTone: tone, status: "available", confidence,
    marks: rows.slice(0, 5).map((row, index) => ({ mark: marks[index], horseNumber: row.horseNumber,
      horseName: row.horseName, score: row.score })),
    opinion: `${stance}。◎${rows[0].horseName}を最上位に評価。` };
}

function averageFinite(values) {
  const finite = values.filter(Number.isFinite);
  return finite.length ? finite.reduce((sum, value) => sum + value, 0) / finite.length : NaN;
}
function finiteOr(value, fallback) { return Number.isFinite(value) ? value : fallback; }

function liveHorseEv(horseNumber, candidates, field) {
  return candidates.filter((row) => row.method === "1点"
    && Number(row.componentSelectionKeys?.[0]) === horseNumber)
    .reduce((best, row) => Math.max(best, Number(row[field]) || 0), 0);
}

function rankScore(horseNumber, rows) {
  const index = rows.findIndex((row) => row.horseNumber === horseNumber);
  return index < 0 || rows.length < 2 ? 0 : 1 - index / (rows.length - 1);
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

function waiting(reason, outputPath = OUTPUT) { const result = { status: "waiting", reason, generatedAt: new Date().toISOString(), candidates: [], predictions: [] }; fs.mkdirSync(path.dirname(outputPath), { recursive: true }); fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8"); return result; }
function loadArtifact(artifactPath) {
  const paths = artifactPath ? [artifactPath] : [
    path.join(PRIVATE_DIR, "models", "ability-softmax-v1.json"),
    path.join(PRIVATE_DIR, "models", "reference-asof-model.json"),
  ];
  return loadCompatibleModelArtifact(paths, FEATURE_KEYS).artifact;
}
function normalize(values) { const total = Object.values(values).reduce((sum, value) => sum + value, 0); return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value / total])); }
function group(rows, key) { const map = new Map(); for (const row of rows) { if (!map.has(row[key])) map.set(row[key], []); map.get(row[key]).push(row); } return map; }
function average(values) { return values.reduce((sum, value) => sum + value, 0) / values.length; }
function byAbilityEv(left, right) {
  return (right.chiefDecision?.rankingExpectedReturn ?? right.adoptedExpectedReturn)
    - (left.chiefDecision?.rankingExpectedReturn ?? left.adoptedExpectedReturn);
}
function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = generateLiveMarketEv({
    allowFixture: process.argv.includes("--allow-fixture"),
    includeBatch: process.argv.includes("--include-batch"),
  });
  console.log(JSON.stringify({ status: result.status, races: Object.keys(result.evaluatedByRace ?? {}).length, evaluated: result.evaluatedTotal ?? 0, candidates: result.candidates.length }, null, 2));
}
