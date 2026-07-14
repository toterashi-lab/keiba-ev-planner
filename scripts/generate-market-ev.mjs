import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";

await import(pathToFileURL(path.resolve("ticket-engine.js")).href);

const engine = globalThis.KEIBA_TICKET_ENGINE;
const [win, place, quinella, wide, exacta, trio, trifecta] = Object.keys(engine.SPECS);
const DB_TYPES = { win, place, quinella, wide, exacta, trio, trifecta };
const ORDERED = new Set(["win", "place", "exacta", "trifecta"]);
const TARGET_DATES = ["2026-07-11", "2026-07-12"];
const OUTPUT = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");

export function generateMarketEv() {
  const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
  try {
    const baseBatch = db.prepare(`select id from odds_ingestion_batches
      where status='complete' and source!='JRA official exotic odds' order by id desc limit 1`).get();
    const exoticBatch = db.prepare(`select id from odds_ingestion_batches
      where status='complete' and source='JRA official exotic odds' order by id desc limit 1`).get();
    if (!baseBatch || !exoticBatch) throw new Error("単勝・複勝または全券種の完了バッチがありません");

    const placeholders = TARGET_DATES.map(() => "?").join(",");
    const races = db.prepare(`select race_id,race_date,venue_code,race_number from complete_races
      where race_date in (${placeholders}) order by race_date,venue_code,race_number`).all(...TARGET_DATES);
    if (races.length !== 72) throw new Error(`対象レース不足: ${races.length}/72`);
    const entries = db.prepare(`select e.race_id,e.horse_number,h.name from complete_race_entries e
      join horses h on h.horse_id=e.horse_id where e.race_id in (select race_id from complete_races where race_date in (${placeholders}))
      order by e.race_id,e.horse_number`).all(...TARGET_DATES);
    const odds = db.prepare(`select race_id,bet_type,selection_key,odds_low,odds_high,observed_at from odds_snapshots
      where batch_id in (?,?) order by race_id,bet_type,selection_key`).all(baseBatch.id, exoticBatch.id);

    const namesByRace = group(entries, "race_id");
    const oddsByRace = group(odds, "race_id");
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
      const structuralBooks = buildStructuralBooks(horseProbabilities);
      const raceCandidates = [];
      let evaluated = 0;

      for (const [dbType, betType] of Object.entries(DB_TYPES)) {
        const rows = byType.get(dbType);
        const marketTarget = outcomeMultiplicity(dbType, winRows.length);
        const inverseTotal = rows.reduce((sum, row) => sum + 1 / row.odds_low, 0);
        const singles = rows.map((row) => {
          const selection = row.selection_key.split("-").map(Number);
          const structural = structuralBooks[dbType].get(row.selection_key) ?? 0;
          const market = Math.min(1, marketTarget * (1 / row.odds_low) / inverseTotal);
          const probability = Math.min(1, 0.85 * market + 0.15 * structural);
          return makeCandidate(race, betType, "1点", selection, [row], probability, names);
        });
        evaluated += singles.length;
        raceCandidates.push(...singles.sort(byExpectedReturn).slice(0, 12));
        raceCandidates.push(...structuredCandidates(race, dbType, betType, rows, horseProbabilities, structuralBooks[dbType], names));
      }
      evaluatedByRace[race.race_id] = evaluated;
      candidates.push(...raceCandidates);
      predictions.push(makeAiPrediction(race, horseProbabilities, names, raceCandidates));
    }

    if (Object.values(coverageCounts).some((count) => count !== 72)) throw new Error(`券種カバレッジ不合格: ${JSON.stringify(coverageCounts)}`);
    if (candidates.some((candidate) => !Number.isFinite(candidate.conservativeExpectedReturn) || candidate.points < 1)) {
      throw new Error("期待値候補に不正値があります");
    }
    const result = {
      status: "ready",
      modelVersion: "closing-market-consistency-v1",
      calculationMode: "closing_market_validation",
      generatedAt: new Date().toISOString(),
      unitStakeYen: 100,
      probabilityBlend: { officialMarket: 0.85, winMarketPlackettLuce: 0.15 },
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

function makeAiPrediction(race, horseProbabilities, names, raceCandidates) {
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
    modelVersion: "closing-market-consistency-v1",
    predictionContext: "closing_final_validation",
    status: "ready",
    confidence,
    confidenceScore,
    scenario,
    marks: ranked.slice(0, marks.length).map((row, index) => ({ mark: marks[index], ...row })),
    topTicket: topTicket ? { betType: topTicket.betType, method: topTicket.method, selection: topTicket.selection, expectedReturn: topTicket.conservativeExpectedReturn } : null,
    comment: `${ranked.length}頭の市場確率を比較。◎${ranked[0].horseName}は推定勝率${(ranked[0].probability * 100).toFixed(1)}%、○との差は${(gap * 100).toFixed(1)}ポイント。${scenario}シナリオで評価します。`,
  };
}

function structuredCandidates(race, dbType, betType, rows, horseProbabilities, structuralBook, names) {
  if (["win", "place"].includes(dbType)) return [];
  const ranked = Object.entries(horseProbabilities).sort((a, b) => b[1] - a[1]).map(([number]) => Number(number));
  const tickets = [
    { method: "BOX", horses: ranked.slice(0, 3) },
    { method: "BOX", horses: ranked.slice(0, 4) },
  ];
  const legs = engine.SPECS[betType].legs;
  if (legs === 2) tickets.push({ method: "フォーメーション", groups: [[ranked[0]], ranked.slice(1, 5)] });
  if (legs === 3) tickets.push({ method: "フォーメーション", groups: [[ranked[0]], ranked.slice(1, 3), ranked.slice(1, 6)] });
  const rowMap = new Map(rows.map((row) => [row.selection_key, row]));
  const inverseTotal = rows.reduce((sum, row) => sum + 1 / row.odds_low, 0);
  const marketTarget = outcomeMultiplicity(dbType, ranked.length);
  return tickets.flatMap((ticket) => {
    const combinations = engine.expandTicket({ betType, ...ticket });
    const selectedRows = combinations.map((selection) => rowMap.get(engine.selectionKey(selection, ORDERED.has(dbType)))).filter(Boolean);
    if (!selectedRows.length || selectedRows.length !== combinations.length) return [];
    const probabilities = combinations.map((selection, index) => {
      const key = engine.selectionKey(selection, ORDERED.has(dbType));
      const structural = structuralBook.get(key) ?? 0;
      const market = Math.min(1, marketTarget * (1 / selectedRows[index].odds_low) / inverseTotal);
      return Math.min(1, 0.85 * market + 0.15 * structural);
    });
    const probability = probabilities.reduce((sum, value) => sum + value, 0) / probabilities.length;
    return [makeCandidate(race, betType, ticket.method, combinations.flat(), selectedRows, probability, names, combinations, probabilities)];
  });
}

function buildStructuralBooks(horseProbabilities) {
  const horses = Object.keys(horseProbabilities).map(Number);
  const books = Object.fromEntries(Object.keys(DB_TYPES).map((type) => [type, new Map()]));
  const add = (type, key, probability) => books[type].set(key, (books[type].get(key) ?? 0) + probability);
  const placeDepth = horses.length >= 8 ? 3 : 2;
  for (const first of horses) {
    const p1 = horseProbabilities[first];
    add("win", String(first), p1);
    for (const second of horses) {
      if (second === first) continue;
      const p2 = p1 * horseProbabilities[second] / (1 - horseProbabilities[first]);
      add("exacta", `${first}-${second}`, p2);
      add("quinella", [first, second].sort((a, b) => a - b).join("-"), p2);
      if (placeDepth === 2) {
        add("place", String(first), p2);
        add("place", String(second), p2);
        add("wide", [first, second].sort((a, b) => a - b).join("-"), p2);
      }
      for (const third of horses) {
        if (third === first || third === second) continue;
        const denominator = 1 - horseProbabilities[first] - horseProbabilities[second];
        const p3 = p2 * horseProbabilities[third] / denominator;
        add("trifecta", `${first}-${second}-${third}`, p3);
        add("trio", [first, second, third].sort((a, b) => a - b).join("-"), p3);
        if (placeDepth === 3) {
          for (const horse of [first, second, third]) add("place", String(horse), p3);
          for (const pair of [[first, second], [first, third], [second, third]]) add("wide", pair.sort((a, b) => a - b).join("-"), p3);
        }
      }
    }
  }
  return books;
}

function makeCandidate(race, betType, method, selection, rows, probability, names, combinations = null, itemProbabilities = null) {
  const expectedReturn = rows.reduce((sum, row, index) => {
    const itemProbability = itemProbabilities?.[index] ?? probability;
    return sum + row.odds_low * itemProbability;
  }, 0) / rows.length;
  const displayNumbers = combinations ? [...new Set(combinations.flat())] : selection;
  const display = displayNumbers.map((number) => `${number} ${names.get(number) ?? ""}`.trim()).join("・");
  return {
    date: race.race_date,
    meetingName: meetingName(race),
    raceNo: race.race_number,
    raceId: race.race_id,
    betType,
    method,
    selection: display,
    points: rows.length,
    odds: rows.length === 1 ? rows[0].odds_low : null,
    probability: rows.length === 1 ? probability : null,
    conservativeProbability: rows.length === 1 ? probability : null,
    conservativeExpectedReturn: expectedReturn,
    status: "ready",
    predictionContext: "closing_final_validation",
    calculationMode: "closing_market_validation",
    oddsObservedAt: rows[0].observed_at,
    modelVersion: "closing-market-consistency-v1",
    calibrationStatus: "benchmark",
    comment: `JRA公式最終オッズを使った市場整合検証。${method} ${rows.length}点を各100円で計算し、払戻結果は確率算出に使用していません。`,
  };
}

function outcomeMultiplicity(type, fieldSize) {
  const placeDepth = fieldSize >= 8 ? 3 : 2;
  if (type === "place") return placeDepth;
  if (type === "wide") return placeDepth === 3 ? 3 : 1;
  return 1;
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
  return right.conservativeExpectedReturn - left.conservativeExpectedReturn;
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
