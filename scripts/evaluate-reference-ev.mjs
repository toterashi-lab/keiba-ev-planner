import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const PRIVATE_DIR = resolvePrivateDataDir(ROOT);
const MODEL_PATH = path.join("data", "model-outputs-2026-07-11-2026-07-12.json");
const OUTPUT_PATH = path.join(PRIVATE_DIR, "models", "reference-ev-audit.json");
const model = JSON.parse(fs.readFileSync(MODEL_PATH, "utf8"));
const db = new DatabaseSync(path.join(PRIVATE_DIR, "keiba.sqlite"), { readOnly: true });

try {
  const payouts = db.prepare(`select race_id,bet_type,selection_key,payout_yen from complete_payouts
    where race_id in (select race_id from complete_races where race_date in ('2026-07-11','2026-07-12'))`).all();
  const payoutMap = new Map(payouts.map((row) => [`${row.race_id}|${row.bet_type}|${row.selection_key}`, row.payout_yen]));
  const recommendations = model.predictions.map((prediction) => recommendationFromPrediction(prediction, payoutMap));
  if (recommendations.some((row) => row === null)) {
    throw new Error("Every AI prediction must contain one auditable top-ticket recommendation");
  }
  const auditedRecommendations = recommendations.filter(Boolean);
  const strategies = [
    evaluate("AI推奨・全レース", auditedRecommendations),
    ...[1, 1.1, 1.25, 1.5].map((threshold) => evaluate(`AI推奨・期待回収率>${threshold}`,
      auditedRecommendations.filter((row) => row.expectedReturn > threshold))),
    ...["単勝", "複勝", "馬連", "ワイド", "馬単", "3連複", "3連単"].map((betType) =>
      evaluate(`AI推奨・${betType}`, auditedRecommendations.filter((row) => row.betType === betType))),
  ];
  const report = {
    status: "evaluation_only",
    checkedAt: new Date().toISOString(),
    modelVersion: model.modelVersion,
    targetDates: ["2026-07-11", "2026-07-12"],
    evaluationScope: "ai_prediction_top_ticket_only",
    recommendationCoverage: {
      predictions: model.predictions.length,
      auditedRecommendations: auditedRecommendations.length,
      excludedCandidateRows: Math.max(0, (model.candidates?.length ?? 0) - auditedRecommendations.length),
    },
    leakagePolicy: "AI予想時点で確定した各レース1件のtopTicketだけを、予想生成後に結果・払戻と照合する。候補ランキングや券種別上位は購入想定に含めない。",
    sampleWarning: "72レースのみの外部監査であり、購入適格判定には使用しない。",
    recommendations: auditedRecommendations,
    strategies,
  };
  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify({
    output: OUTPUT_PATH,
    evaluationScope: report.evaluationScope,
    recommendations: auditedRecommendations.length,
    excludedCandidateRows: report.recommendationCoverage.excludedCandidateRows,
    strategies: strategies.filter((row) => row.bets).map((row) => ({
      name: row.name, bets: row.bets, hits: row.hits, investmentYen: row.investmentYen,
      payoutYen: row.payoutYen, roi: row.roi, maximumDrawdown: row.maximumDrawdown,
    })),
  }, null, 2));
} finally {
  db.close();
}

function recommendationFromPrediction(prediction, payoutMap) {
  const ticket = prediction.topTicket;
  if (!ticket || ticket.recommendationSource !== "ai_prediction_top_ticket"
    || !Array.isArray(ticket.ticketKeys) || !ticket.ticketKeys.length
    || !Number.isInteger(ticket.points) || ticket.points < 1
    || ticket.totalInvestmentYen !== ticket.points * 100) return null;
  const payoutYen = ticket.ticketKeys.reduce((sum, key) =>
    sum + (payoutMap.get(`${prediction.raceId}|${ticket.betType}|${key}`) ?? 0), 0);
  const investmentYen = ticket.totalInvestmentYen;
  return {
    recommendationSource: ticket.recommendationSource,
    date: prediction.date,
    meetingName: prediction.meetingName,
    raceNo: prediction.raceNo,
    raceId: prediction.raceId,
    betType: ticket.betType,
    method: ticket.method,
    selection: ticket.selection,
    ticketKeys: ticket.ticketKeys,
    points: ticket.points,
    investmentYen,
    payoutYen,
    netYen: payoutYen - investmentYen,
    hit: payoutYen > 0,
    expectedReturn: ticket.expectedReturn,
  };
}

function evaluate(name, recommendations) {
  let investmentYen = 0;
  let payoutYen = 0;
  let hits = 0;
  let equity = 0;
  let peak = 0;
  let maximumDrawdownYen = 0;
  const ordered = [...recommendations].sort((left, right) =>
    left.date.localeCompare(right.date) || left.raceId.localeCompare(right.raceId));
  for (const recommendation of ordered) {
    investmentYen += recommendation.investmentYen;
    payoutYen += recommendation.payoutYen;
    if (recommendation.hit) hits += 1;
    equity += recommendation.netYen;
    peak = Math.max(peak, equity);
    maximumDrawdownYen = Math.min(maximumDrawdownYen, equity - peak);
  }
  return {
    name,
    bets: ordered.length,
    hits,
    investmentYen,
    payoutYen,
    roi: investmentYen ? payoutYen / investmentYen : null,
    netYen: payoutYen - investmentYen,
    maximumDrawdownYen,
    maximumDrawdown: investmentYen ? maximumDrawdownYen / investmentYen : null,
  };
}
