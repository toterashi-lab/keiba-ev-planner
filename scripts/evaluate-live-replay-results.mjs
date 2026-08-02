import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "data", "live-replay-audit.js");
const require = createRequire(import.meta.url);
const policy = require("../forecast-policy.js");
const agentEngine = require("../agent-forecast-engine.js");
const { racecards, model } = loadInputs();

const completedResults = (racecards.results ?? []).filter(isComplete);
const predictionsByRaceId = new Map((model.predictions ?? []).map((prediction) => [prediction.raceId, prediction]));
const currentRecords = completedResults.map((result) => evaluateResult(result, predictionsByRaceId.get(result.raceId)));
const recordsByRace = new Map(loadPreviousRecords().map((record) => [record.raceId, record]));
for (const record of currentRecords) recordsByRace.set(record.raceId, record);
const records = [...recordsByRace.values()].sort((left, right) => String(left.date).localeCompare(String(right.date))
  || Number(left.raceNo) - Number(right.raceNo) || String(left.raceId).localeCompare(String(right.raceId)));
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
    confirmedResults: records.length,
    currentConfirmedResults: completedResults.length,
    matchedPredictions: records.filter((record) => record.predictionFound).length,
    evaluatedTickets: records.filter((record) => record.tickets?.length === 3).length,
    preRaceTimestamped: records.filter((record) => record.sourceClassification === "pre_race_timestamp_only").length,
    replayOnly: records.filter((record) => record.sourceClassification === "as_of_replay").length,
    immutableSnapshots: records.filter((record) => record.eligibleForActualPerformance).length,
  },
  summary,
  records,
};

assert.equal(completedResults.length, currentRecords.filter((record) => record.predictionFound).length, "今回の確定結果と予想の件数が一致しません");
assert.equal(completedResults.length, currentRecords.filter((record) => record.tickets?.length === 3).length, "今回の全確定結果に買い目を生成できませんでした");
fs.writeFileSync(OUTPUT_PATH, `window.KEIBA_LIVE_REPLAY_AUDIT = ${JSON.stringify(output, null, 2)};\n`, "utf8");
console.log(JSON.stringify({ status: "ready", output: OUTPUT_PATH, coverage: output.coverage, summary }, null, 2));

function loadInputs() {
  const sandbox = { window: {} };
  for (const name of ["live-racecards.js", "live-model-outputs.js"]) {
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, "data", name), "utf8"), sandbox, { filename: name });
  }
  return { racecards: sandbox.window.KEIBA_LIVE_RACECARDS ?? {}, model: sandbox.window.KEIBA_LIVE_MODEL_OUTPUTS ?? {} };
}

function loadPreviousRecords() {
  const parse = (source, filename) => {
    const sandbox = { window: {} };
    vm.runInNewContext(source, sandbox, { filename });
    return sandbox.window.KEIBA_LIVE_REPLAY_AUDIT?.records ?? [];
  };
  try {
    const current = parse(fs.readFileSync(OUTPUT_PATH, "utf8"), "live-replay-audit.js");
    if (current.length) return current;
  } catch {}
  try {
    return parse(execFileSync("git", ["show", "HEAD:data/live-replay-audit.js"], { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }), "HEAD:data/live-replay-audit.js");
  } catch { return []; }
}

function evaluateResult(result, prediction) {
  const tickets = prediction ? buildTickets(prediction, result) : [];
  const panels = completePanels(prediction);
  const payoutByKey = new Map((result.refunds ?? []).map((refund) => [`${refund.betType}|${canonical(refund.selection, refund.betType)}`, Number(refund.payoutYen) || 0]));
  const settledTickets = tickets.map((ticket) => {
    const payoutYen = ticket.ticketKeys.reduce((total, key) => total + (payoutByKey.get(`${ticket.betType}|${canonical(key, ticket.betType)}`) ?? 0), 0);
    return { betType: ticket.betType, method: ticket.method, selection: ticket.selection, ticketKeys: ticket.ticketKeys,
      points: ticket.points, unitStakeYen: 100, investmentYen: ticket.totalInvestmentYen, payoutYen,
      netYen: payoutYen - ticket.totalInvestmentYen, recoveryRate: ticket.totalInvestmentYen ? payoutYen / ticket.totalInvestmentYen : null, hit: payoutYen > 0 };
  });
  const investmentYen = settledTickets.length ? settledTickets.reduce((total, ticket) => total + ticket.investmentYen, 0) : null;
  const payoutYen = settledTickets.length ? settledTickets.reduce((total, ticket) => total + ticket.payoutYen, 0) : null;
  const finishByHorseNumber = Object.fromEntries((result.runners ?? []).map((runner) => [runner.horseNumber, Number(runner.finishPosition) || null]));
  const finishTextByHorseNumber = Object.fromEntries((result.runners ?? []).map((runner) => [runner.horseNumber, finishLabel(runner)]));
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
    topPickFinishText: finishTextByHorseNumber[prediction?.marks?.[0]?.horseNumber] ?? null,
    tickets: settledTickets,
    investmentYen,
    payoutYen,
    netYen: investmentYen == null || payoutYen == null ? null : payoutYen - investmentYen,
    recoveryRate: investmentYen ? payoutYen / investmentYen : null,
    hit: Number(payoutYen) > 0,
    finishByHorseNumber,
    finishTextByHorseNumber,
    agents: agentResults(panels, finishByHorseNumber, finishTextByHorseNumber),
    agentTickets: agentTicketResults(panels, payoutByKey),
  };
}

function completePanels(prediction) {
  return Object.values(agentEngine.buildAgents(prediction));
}

function buildTickets(prediction, result) {
  const tickets = policy.buildForecastTickets(prediction, 100);
  const volatility = policy.volatilityProfile({
    race: { fieldSize: result.runners?.length ?? 0 }, prediction, consensus: { split: false }, candidates: [],
  });
  return tickets;
}

function agentResults(panels, finishByHorseNumber, finishTextByHorseNumber) {
  return agentEngine.DEFINITIONS.map(({ agentId }) => {
    const panel = panels.find((candidate) => candidate.agentId === agentId);
    const marks = panel?.marks ?? [];
    return {
      agentId,
      status: panel?.status ?? "unavailable",
      topPick: marks[0]?.horseNumber ?? null,
      topPickFinish: finishByHorseNumber[marks[0]?.horseNumber] ?? null,
      topPickFinishText: finishTextByHorseNumber[marks[0]?.horseNumber] ?? null,
      marks: marks.slice(0, 3).map((mark) => ({ ...mark, finish: finishByHorseNumber[mark.horseNumber] ?? null,
        finishText: finishTextByHorseNumber[mark.horseNumber] ?? null })),
    };
  });
}

function agentTicketResults(panels, payoutByKey) {
  return agentEngine.DEFINITIONS.map(({ agentId }) => {
    const panel = panels.find((candidate) => candidate.agentId === agentId);
    if (panel?.status !== "available" || !panel.marks?.length) return { agentId, status: panel?.status ?? "unavailable", tickets: [] };
    const tickets = policy.buildForecastTickets({ marks: panel.marks }, 100).map((ticket) => {
      const payoutYen = ticket.ticketKeys.reduce((total, key) => total + (payoutByKey.get(`${ticket.betType}|${canonical(key, ticket.betType)}`) ?? 0), 0);
      return { betType: ticket.betType, method: ticket.method, selection: ticket.selection, ticketKeys: ticket.ticketKeys, points: ticket.points,
        investmentYen: ticket.totalInvestmentYen, payoutYen, netYen: payoutYen - ticket.totalInvestmentYen, hit: payoutYen > 0 };
    });
    return { agentId, status: "available", tickets };
  });
}

function summarize(rows) {
  const evaluated = rows.filter((row) => row.tickets?.length === 3 && row.investmentYen != null && row.payoutYen != null);
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

function finishLabel(runner) {
  const position = Number(runner?.finishPosition);
  if (Number.isInteger(position) && position > 0) return `${position}着`;
  return String(runner?.finishText || "結果なし");
}
