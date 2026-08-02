import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
global.window = {};
require("../data/live-racecards.js");
require("../data/live-model-outputs.js");
require("../data/live-replay-audit.js");

const racecards = window.KEIBA_LIVE_RACECARDS ?? {};
const model = window.KEIBA_LIVE_MODEL_OUTPUTS ?? {};
const audit = window.KEIBA_LIVE_REPLAY_AUDIT ?? {};
const races = (racecards.meetings ?? []).flatMap((meeting) => (meeting.tracks ?? []).flatMap((track) =>
  (track.races ?? []).map((race) => ({ ...race, date: meeting.date, meetingName: track.meetingName, venueCode: track.venueCode }))));
const results = racecards.results ?? [];
const completeResults = results.filter(isComplete);
const predictions = model.predictions ?? [];
const records = audit.records ?? [];
const predictionByKey = new Map(predictions.map((prediction) => [raceKey(prediction.date, prediction.meetingName, prediction.raceNo), prediction]));
const resultByKey = new Map(results.map((result) => [raceKey(result.raceDate, result.meetingName, result.raceNo), result]));
const recordById = new Map(records.map((record) => [record.raceId, record]));

assert.ok(races.length > 0, "開催レースがありません");
assert.equal(new Set(races.map((race) => raceKey(race.date, race.meetingName, race.no))).size, races.length, "開催レースが重複しています");
assert.equal(new Set(results.map((result) => result.raceId)).size, results.length, "結果レースIDが重複しています");
assert.equal(new Set(predictions.map((prediction) => prediction.raceId)).size, predictions.length, "予想レースIDが重複しています");
assert.equal(new Set(records.map((record) => record.raceId)).size, records.length, "照合レースIDが重複しています");
assert.equal(predictions.length, races.length, "全開催レースに予想が必要です");
assert.equal(results.length, races.length, "全開催レースに発走前または確定結果の状態が必要です");

const agentTotals = new Map();
let totalAgentTickets = 0;
let totalInvestmentYen = 0;
let totalPayoutYen = 0;

for (const race of races) {
  const key = raceKey(race.date, race.meetingName, race.no);
  const prediction = predictionByKey.get(key);
  const result = resultByKey.get(key);
  assert.ok(prediction, `${key}: 予想がありません`);
  assert.ok(result, `${key}: レース状態がありません`);
  const raceId = result.raceId;

  const runnerNumbers = new Set((result.runners ?? []).map((runner) => Number(runner.horseNumber)));
  const markNumbers = (prediction.marks ?? []).map((mark) => Number(mark.horseNumber));
  assert.ok(markNumbers.length >= 5, `${raceId}: 上位5頭の予想がありません`);
  assert.equal(new Set(markNumbers).size, markNumbers.length, `${raceId}: 予想馬が重複しています`);
  assert.ok(markNumbers.every((number) => runnerNumbers.has(number)), `${raceId}: 出走馬以外が予想に含まれています`);
  if (!isComplete(result)) continue;

  const record = recordById.get(result.raceId);
  assert.ok(record, `${key}: 照合記録がありません`);

  const payoutByKey = new Map((result.refunds ?? []).map((refund) =>
    [`${refund.betType}|${canonical(refund.selection, refund.betType)}`, Number(refund.payoutYen)]));
  assert.ok(["単勝", "馬連", "3連複"].every((betType) =>
    [...payoutByKey.keys()].some((payoutKey) => payoutKey.startsWith(`${betType}|`))), `${raceId}: 必須券種の公式払戻がありません`);

  assert.equal(record.topPick, markNumbers[0], `${raceId}: 本命馬が予想と照合記録で一致しません`);
  assert.ok(Number.isInteger(record.topPickFinish) && record.topPickFinish > 0, `${raceId}: 本命馬の着順が未反映です`);
  assert.equal(record.agents?.length, 5, `${raceId}: 5人分の着順照合がありません`);
  assert.ok(record.agents.every((agent) => agent.status === "available" && agent.marks?.length === 3
    && agent.marks.every((mark) => (Number.isInteger(mark.finish) && mark.finish > 0)
      || (typeof mark.finishText === "string" && mark.finishText.length > 0))), `${raceId}: 予想家の印着順が未反映です`);

  const groups = record.agentTickets ?? [];
  assert.equal(groups.length, 5, `${raceId}: 5人分の馬券結果がありません`);
  assert.equal(new Set(groups.map((group) => group.agentId)).size, 5, `${raceId}: 予想家の馬券結果が重複しています`);
  for (const group of groups) {
    assert.equal(group.status, "available", `${raceId}/${group.agentId}: 利用不能状態です`);
    assert.deepEqual(group.tickets?.map((ticket) => ticket.betType), ["単勝", "馬連", "3連複"],
      `${raceId}/${group.agentId}: 3券種が揃っていません`);
    for (const ticket of group.tickets) {
      const keys = expandedKeys(ticket);
      const expectedPayoutYen = keys.reduce((sum, key) =>
        sum + (payoutByKey.get(`${ticket.betType}|${canonical(key, ticket.betType)}`) ?? 0), 0);
      assert.equal(ticket.points, keys.length, `${raceId}/${group.agentId}/${ticket.betType}: 点数が不一致です`);
      assert.equal(ticket.investmentYen, keys.length * 100, `${raceId}/${group.agentId}/${ticket.betType}: 投資額が不一致です`);
      assert.equal(ticket.payoutYen, expectedPayoutYen, `${raceId}/${group.agentId}/${ticket.betType}: 公式払戻との不一致です`);
      assert.equal(ticket.netYen, ticket.payoutYen - ticket.investmentYen,
        `${raceId}/${group.agentId}/${ticket.betType}: 収支が不一致です`);
      assert.equal(ticket.hit, ticket.payoutYen > 0, `${raceId}/${group.agentId}/${ticket.betType}: 的中表示が不一致です`);

      const totals = agentTotals.get(group.agentId) ?? { races: new Set(), tickets: 0, investmentYen: 0, payoutYen: 0 };
      totals.races.add(raceId);
      totals.tickets += 1;
      totals.investmentYen += ticket.investmentYen;
      totals.payoutYen += ticket.payoutYen;
      agentTotals.set(group.agentId, totals);
      totalAgentTickets += 1;
      totalInvestmentYen += ticket.investmentYen;
      totalPayoutYen += ticket.payoutYen;
    }
  }
}

assert.equal(agentTotals.size, completeResults.length ? 5 : 0, "確定レースの5人分累計成績が作れません");
for (const [agentId, totals] of agentTotals) {
  assert.equal(totals.races.size, completeResults.length, `${agentId}: 全確定レースが成績へ反映されていません`);
  assert.equal(totals.tickets, completeResults.length * 3, `${agentId}: 全3券種が成績へ反映されていません`);
  assert.equal(totals.investmentYen, completeResults.length * 1600, `${agentId}: 1レース1600円の投資額になっていません`);
}
assert.equal(totalAgentTickets, completeResults.length * 5 * 3, "確定レースの全予想家・全券種の照合数が不足しています");
assert.equal(totalInvestmentYen, completeResults.length * 5 * 1600, "確定レースの全予想家の投資額が不足しています");

console.log(JSON.stringify({
  status: "pass",
  races: races.length,
  predictedRaces: predictions.length,
  settledRaces: completeResults.length,
  agents: agentTotals.size,
  ticketTypes: 3,
  settledAgentTickets: totalAgentTickets,
  totalInvestmentYen,
  totalPayoutYen,
  netYen: totalPayoutYen - totalInvestmentYen,
  recoveryRate: totalInvestmentYen ? totalPayoutYen / totalInvestmentYen : null,
  reflectedResults: records.length,
}, null, 2));

function expandedKeys(ticket) {
  if (ticket.ticketKeys?.length) return ticket.ticketKeys.map((key) => canonical(key, ticket.betType));
  const numbers = String(ticket.selection ?? "").match(/\d+/g)?.map(Number) ?? [];
  if (ticket.betType === "単勝") return numbers.slice(0, 1).map(String);
  if (ticket.betType === "馬連") return combinations(numbers, 2).map((selection) => selection.sort((a, b) => a - b).join("-"));
  if (ticket.betType === "3連複") return combinations(numbers, 3).map((selection) => selection.sort((a, b) => a - b).join("-"));
  throw new Error(`未対応券種: ${ticket.betType}`);
}

function combinations(values, size, start = 0, selected = [], output = []) {
  if (selected.length === size) {
    output.push([...selected]);
    return output;
  }
  for (let index = start; index <= values.length - (size - selected.length); index += 1) {
    combinations(values, size, index + 1, [...selected, values[index]], output);
  }
  return output;
}

function canonical(value, betType) {
  const parts = String(value ?? "").match(/\d+/g)?.map(Number) ?? [];
  if (["馬連", "3連複"].includes(betType)) parts.sort((left, right) => left - right);
  return parts.join("-");
}

function isComplete(result) {
  return result?.status !== "pre_race" && (result.runners ?? []).some((runner) => Number(runner.finishPosition) === 1);
}

function raceKey(date, meetingName, raceNo) {
  return `${date}|${meetingName}|${Number(raceNo)}`;
}
