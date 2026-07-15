import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { normalizeMarket, selectProbability } from "../model/expectancy-engine-v2.mjs";
import { buildStructuredDefinitions } from "../model/structured-ticket-search.mjs";
import { buildFinishOrderProbabilityBooks, calibrateFinishOrderProbabilityBooks } from "../model/finish-order-probabilities.mjs";
import { isPreRaceObservation } from "./race-time.mjs";

await import(pathToFileURL(path.resolve("ticket-engine.js")).href);
const engine = globalThis.KEIBA_TICKET_ENGINE;
const TYPES = { win: "単勝", place: "複勝", quinella: "馬連", wide: "ワイド", exacta: "馬単", trio: "3連複", trifecta: "3連単" };
const ORDERED = new Set(["win", "place", "exacta", "trifecta"]);
const OUTPUT = path.join("data", "jra-free-private", "models", "live-market-ev.json");

export function generateLiveMarketEv(options = {}) {
  const outputPath = options.outputPath ?? OUTPUT;
  const db = new DatabaseSync(options.databasePath ?? path.join("data", "jra-free-private", "keiba.sqlite"));
  db.exec("PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; PRAGMA busy_timeout=30000;");
  try {
    initializeLedgerSchema(db);
    const base = db.prepare(`select * from odds_ingestion_batches where status='complete' and source in (${options.allowFixture ? "'JRA official live odds','JRA official live odds fixture'" : "'JRA official live odds'"}) order by id desc limit 1`).get();
    const exotic = base ? db.prepare(`select * from odds_ingestion_batches where status='complete' and source in (${options.allowFixture ? "'JRA official live exotic odds','JRA official live exotic odds fixture'" : "'JRA official live exotic odds'"})
      and snapshot_kind=? and target_dates=? order by id desc limit 1`).get(base.snapshot_kind, base.target_dates) : null;
    const racecardBatch = db.prepare("select * from live_racecard_batches where status='complete' and race_count>0 order by id desc limit 1").get();
    const racecardTargetDates = resolveStoredRacecardTargetDates(db, racecardBatch);
    const targetDates = resolveLiveTargetDates({ baseTargetDates: base?.target_dates, racecardTargetDates,
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
    const modelRows = artifact ? db.prepare(`select p.race_id,e.horse_number,p.win_probability
      from live_predictions p join live_entries e on e.race_id=p.race_id and e.horse_id=p.horse_id
      where p.model_version=? and p.race_id in (${placeholders})`).all(artifact.modelVersion, ...raceIds) : [];
    const oddsByRace = group(odds, "race_id");
    const entriesByRace = group(entries, "race_id");
    const modelByRace = group(modelRows, "race_id");
    const candidates = [];
    const predictions = [];
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
        predictions.push(aiPrediction(race, abilityHorse, names, [], artifact, hasModel));
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
        const singles = rows.map((row) => {
          const marketStructural = marketBooks[type].get(row.selection_key) ?? row.marketProbability;
          const probability = selectProbability({ marketProbability: row.marketProbability, modelProbability: marketStructural, validationArtifact: artifact }).probability;
          const abilityProbability = abilityBooks[type].get(row.selection_key) ?? probability;
          return candidate(race, label, "1点", row.selection_key, [row], [probability], [abilityProbability], names, artifact, hasModel, raceBatchIds);
        });
        evaluated += singles.length;
        raceCandidates.push(...singles.sort(byAbilityEv).slice(0, 12));
        raceCandidates.push(...structured(race, type, label, rows, marketHorse, abilityHorse, marketBooks[type], abilityBooks[type], names, artifact, hasModel, raceBatchIds));
      }
      evaluatedByRace[race.race_id] = evaluated;
      candidates.push(...raceCandidates);
      predictions.push(aiPrediction(race, abilityHorse, names, raceCandidates, artifact, hasModel));
    }
    const result = {
      status: predictions.length ? "ready" : "waiting",
      reason: candidates.length ? null : predictions.length ? "waiting_for_complete_odds" : "ability_model_or_live_odds",
      generatedAt: new Date().toISOString(),
      snapshotKind: base?.snapshot_kind ?? "pre_race",
      targetDates,
      baseBatchId: base?.id ?? null,
      exoticBatchId: exotic?.id ?? null,
      oddsBatchIds: [...new Set(odds.map((row) => row.batch_id))].sort((left, right) => left - right),
      modelVersion: artifact?.modelVersion ?? "market-baseline",
      abilityModelStatus: artifact?.researchProbabilityStatus ?? "not_trained",
      deploymentStatus: "benchmark_only",
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
    ? normalize(Object.fromEntries(trainedRows.map((row) => [row.horse_number, row.win_probability])))
    : marketHorse;
  return { hasModel, marketHorse, abilityHorse };
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
  const display = method === "1点" ? selectionKey.split("-").map((number) => `${number} ${names.get(Number(number)) ?? ""}`.trim()).join("・") : selectionKey;
  return {
    date: race.race_date, meetingName: race.meeting_name, raceNo: race.race_number, raceId: race.race_id,
    betType, method, selection: display, points: rows.length, totalInvestmentYen: rows.length * 100,
    odds: rows.length === 1 ? rows[0].odds_low : null,
    probability: rows.length === 1 ? probabilities[0] : null,
    abilityProbability: rows.length === 1 ? abilityProbabilities[0] : null,
    conservativeExpectedReturn: marketEv, abilityExpectedReturn: abilityEv,
    adoptedExpectedReturn: hasModel ? abilityEv : marketEv,
    abilityModelStatus: artifact?.researchProbabilityStatus ?? "not_trained",
    status: "ready", predictionContext: "pre_race", calculationMode: hasModel ? "ability_and_market_scenarios" : "market_baseline",
    oddsObservedAt: rows.reduce((latest, row) => row.observed_at > latest ? row.observed_at : latest, ""), modelVersion: artifact?.modelVersion ?? "market-baseline",
    calibrationStatus: hasModel ? "pass" : "benchmark",
    baseBatchId: batchIds.baseBatchId,
    exoticBatchId: batchIds.exoticBatchId,
    optimizationScenarios,
    componentSelectionKeys: rows.map((row) => row.selection_key),
    componentOdds: rows.map((row) => row.odds_low),
    componentMarketProbabilities: probabilities,
    componentAbilityProbabilities: abilityProbabilities,
  };
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

function aiPrediction(race, probabilities, names, raceCandidates, artifact, hasModel) {
  const marks = ["◎", "○", "▲", "△", "☆"];
  const ranked = Object.entries(probabilities).map(([horseNumber, probability]) => ({ horseNumber: Number(horseNumber), horseName: names.get(Number(horseNumber)) ?? "", probability }))
    .sort((left, right) => right.probability - left.probability || left.horseNumber - right.horseNumber);
  const top = [...raceCandidates].sort(byAbilityEv)[0];
  return { date: race.race_date, meetingName: race.meeting_name, raceNo: race.race_number, raceId: race.race_id, modelVersion: artifact?.modelVersion ?? "market-baseline",
    predictionContext: "pre_race", status: "ready", confidence: ranked[0].probability >= 0.25 ? "中" : "低", confidenceScore: ranked[0].probability,
    scenario: ranked[0].probability - ranked[1].probability >= 0.08 ? "本命軸" : "混戦", marks: ranked.slice(0, 5).map((row, index) => ({ mark: marks[index], ...row })),
    topTicket: top ? { betType: top.betType, method: top.method, selection: top.selection, expectedReturn: top.adoptedExpectedReturn } : null,
    comment: `${hasModel ? "30年能力モデル" : "市場基準"}で全${ranked.length}頭を比較。1位推定勝率${(ranked[0].probability * 100).toFixed(1)}%。`, };
}

function waiting(reason, outputPath = OUTPUT) { const result = { status: "waiting", reason, generatedAt: new Date().toISOString(), candidates: [], predictions: [] }; fs.mkdirSync(path.dirname(outputPath), { recursive: true }); fs.writeFileSync(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8"); return result; }
function loadArtifact(artifactPath = path.join("data", "jra-free-private", "models", "ability-softmax-v1.json")) { return fs.existsSync(artifactPath) ? JSON.parse(fs.readFileSync(artifactPath, "utf8")) : null; }
function normalize(values) { const total = Object.values(values).reduce((sum, value) => sum + value, 0); return Object.fromEntries(Object.entries(values).map(([key, value]) => [key, value / total])); }
function group(rows, key) { const map = new Map(); for (const row of rows) { if (!map.has(row[key])) map.set(row[key], []); map.get(row[key]).push(row); } return map; }
function average(values) { return values.reduce((sum, value) => sum + value, 0) / values.length; }
function byAbilityEv(left, right) { return right.adoptedExpectedReturn - left.adoptedExpectedReturn; }
function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = generateLiveMarketEv({ allowFixture: process.argv.includes("--allow-fixture") });
  console.log(JSON.stringify({ status: result.status, races: Object.keys(result.evaluatedByRace ?? {}).length, evaluated: result.evaluatedTotal ?? 0, candidates: result.candidates.length }, null, 2));
}
