import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "data", "live-replay-audit.js");
const require = createRequire(import.meta.url);
const policy = require("../forecast-policy.js");
const { racecards, model } = loadInputs();

const completedResults = (racecards.results ?? []).filter(isComplete);
const predictionsByRaceId = new Map((model.predictions ?? []).map((prediction) => [prediction.raceId, prediction]));
const records = completedResults.map((result) => evaluateResult(result, predictionsByRaceId.get(result.raceId)));
const summary = summarize(records);
const output = {
  status: "replay_only",
  calculatedAt: new Date().toISOString(),
  label: "後日再現（本番成績に含めない）",
  policy: {
    source: "画面で表示する総合AI指数の買い目とJRA公式払戻の照合",
    unitStakeYen: 100,
    exclusion: "後日再現と、公開時刻のみが残る予想は、本番用の不変スナップショットがないため、本番成績・学習実績・エージェント成績には含めない",
    actualPerformance: "公開時点の不変スナップショットが保存・ロック・精算された記録のみ。今回の公開データには該当なし",
  },
  coverage: {
    confirmedResults: completedResults.length,
    matchedPredictions: records.filter((record) => record.predictionFound).length,
    evaluatedTickets: records.filter((record) => record.ticket).length,
    preRaceTimestamped: records.filter((record) => record.sourceClassification === "pre_race_timestamp_only").length,
    replayOnly: records.filter((record) => record.sourceClassification === "as_of_replay").length,
    immutableSnapshots: records.filter((record) => record.eligibleForActualPerformance).length,
  },
  summary,
  records,
};

assert.equal(output.coverage.confirmedResults, output.coverage.matchedPredictions, "確定結果と予想の件数が一致しません");
assert.equal(output.coverage.confirmedResults, output.coverage.evaluatedTickets, "全確定結果に買い目を生成できませんでした");
fs.writeFileSync(OUTPUT_PATH, `window.KEIBA_LIVE_REPLAY_AUDIT = ${JSON.stringify(output, null, 2)};\n`, "utf8");
console.log(JSON.stringify({ status: "ready", output: OUTPUT_PATH, coverage: output.coverage, summary }, null, 2));

function loadInputs() {
  const sandbox = { window: {} };
  for (const name of ["live-racecards.js", "live-model-outputs.js"]) {
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data", name), "utf8"), sandbox, { filename: name });
  }
  return { racecards: sandbox.window.KEIBA_LIVE_RACECARDS ?? {}, model: sandbox.window.KEIBA_LIVE_MODEL_OUTPUTS ?? {} };
}

function evaluateResult(result, prediction) {
  const ticket = prediction ? buildPrimaryTicket(prediction, result) : null;
  const payoutByKey = new Map((result.refunds ?? []).map((refund) => [`${refund.betType}|${canonical(refund.selection, refund.betType)}`, Number(refund.payoutYen) || 0]));
  const payoutYen = ticket ? ticket.ticketKeys.reduce((total, key) => total + (payoutByKey.get(`${ticket.betType}|${canonical(key, ticket.betType)}`) ?? 0), 0) : null;
  const investmentYen = ticket?.totalInvestmentYen ?? null;
  const finishByHorseNumber = Object.fromEntries((result.runners ?? []).map((runner) => [runner.horseNumber, Number(runner.finishPosition) || null]));
  return {
    raceId: result.raceId,
    date: result.raceDate,
    meetingName: result.meetingName,
    venueCode: result.venueCode,
    raceNo: result.raceNo,
    raceTitle: result.raceTitle,
    predictionFound: Boolean(prediction),
    predictionContext: prediction?.predictionContext ?? null,
    sourceClassification: prediction?.predictionContext === "pre_race" ? "pre_race_timestamp_only" : "as_of_replay",
    eligibleForActualPerformance: false,
    predictionGeneratedAt: prediction?.publishedAt ?? prediction?.generatedAt ?? null,
    marks: prediction?.marks ?? [],
    topPick: prediction?.marks?.[0]?.horseNumber ?? null,
    topPickFinish: finishByHorseNumber[prediction?.marks?.[0]?.horseNumber] ?? null,
    ticket: ticket ? {
      betType: ticket.betType,
      method: ticket.method,
      selection: ticket.selection,
      ticketKeys: ticket.ticketKeys,
      points: ticket.points,
      unitStakeYen: 100,
      investmentYen,
    } : null,
    investmentYen,
    payoutYen,
    netYen: investmentYen == null || payoutYen == null ? null : payoutYen - investmentYen,
    recoveryRate: investmentYen ? payoutYen / investmentYen : null,
    hit: Number(payoutYen) > 0,
    finishByHorseNumber,
    agents: agentResults(prediction?.forecastPanel ?? [], finishByHorseNumber),
  };
}

function buildPrimaryTicket(prediction, result) {
  const tickets = policy.buildForecastTickets(prediction, 100);
  const volatility = policy.volatilityProfile({
    race: { fieldSize: result.runners?.length ?? 0 }, prediction, consensus: { split: false }, candidates: [],
  });
  return policy.primaryForecastTicket(tickets, volatility);
}

function agentResults(panels, finishByHorseNumber) {
  const aliases = {
    safety: ["agent_ability", "ability", "persona_orthodox"],
    sniper: ["agent_value", "value", "persona_value"],
    pace: ["agent_pace", "pace", "persona_pace"],
    analyst: ["agent_data", "data", "persona_trackside"],
    contrarian: ["agent_odds", "odds", "persona_market"],
  };
  return Object.entries(aliases).map(([agentId, ids]) => {
    const panel = panels.find((candidate) => ids.includes(candidate.id) || ids.includes(candidate.personaTone));
    const marks = panel?.marks ?? [];
    return {
      agentId,
      status: panel?.status ?? "unavailable",
      topPick: marks[0]?.horseNumber ?? null,
      topPickFinish: finishByHorseNumber[marks[0]?.horseNumber] ?? null,
      marks: marks.slice(0, 3).map((mark) => ({ ...mark, finish: finishByHorseNumber[mark.horseNumber] ?? null })),
    };
  });
}

function summarize(rows) {
  const evaluated = rows.filter((row) => row.ticket && row.investmentYen != null && row.payoutYen != null);
  const investmentYen = evaluated.reduce((total, row) => total + row.investmentYen, 0);
  const payoutYen = evaluated.reduce((total, row) => total + row.payoutYen, 0);
  return {
    races: evaluated.length,
    hits: evaluated.filter((row) => row.hit).length,
    investmentYen,
    payoutYen,
    netYen: payoutYen - investmentYen,
    recoveryRate: investmentYen ? payoutYen / investmentYen : null,
  };
}

function canonical(value, betType) {
  const parts = String(value ?? "").match(/\d+/g)?.map(Number) ?? [];
  if (["馬連", "3連複"].includes(betType)) parts.sort((left, right) => left - right);
  return parts.join("-");
}

function isComplete(result) {
  return result?.status !== "pre_race" && (result.runners ?? []).some((runner) => Number(runner.finishPosition) === 1);
}
