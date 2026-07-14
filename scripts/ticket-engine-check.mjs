import fs from "node:fs";
import vm from "node:vm";

const context = { globalThis: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync("ticket-engine.js", "utf8"), context);
const engine = context.globalThis.KEIBA_TICKET_ENGINE;

check("馬連4頭BOX", engine.expandTicket({ betType: "馬連", method: "BOX", horses: [1, 2, 3, 4] }).length, 6);
check("馬単4頭BOX", engine.expandTicket({ betType: "馬単", method: "BOX", horses: [1, 2, 3, 4] }).length, 12);
check("3連複4頭BOX", engine.expandTicket({ betType: "3連複", method: "BOX", horses: [1, 2, 3, 4] }).length, 4);
check("3連単4頭BOX", engine.expandTicket({ betType: "3連単", method: "BOX", horses: [1, 2, 3, 4] }).length, 24);
check("馬単フォーメーション重複除外", engine.expandTicket({ betType: "馬単", method: "フォーメーション", groups: [[1, 2], [1, 2, 3]] }).length, 4);

const probabilities = { 1: 0.4, 2: 0.3, 3: 0.2, 4: 0.1 };
const trifectaTotal = engine.expandTicket({ betType: "3連単", method: "BOX", horses: [1, 2, 3, 4] })
  .reduce((sum, selection) => sum + engine.ticketProbability("3連単", selection, probabilities), 0);
close("3連単確率総和", trifectaTotal, 1);
close("馬連確率順序統合", engine.ticketProbability("馬連", [1, 2], probabilities), (0.4 * 0.3 / 0.6) + (0.3 * 0.4 / 0.7));

const evaluated = engine.evaluateTicket(
  { betType: "馬連", method: "BOX", horses: [1, 2, 3] },
  probabilities,
  { "1-2": 3, "1-3": 5, "2-3": 8 },
  { unitStake: 500 },
);
check("1点100円固定・複数点投資", evaluated.investment, 300);
check("固定購入単位", engine.UNIT_STAKE, 100);
check("複数点オッズ完全性", evaluated.status, "ready");
if (!(evaluated.expectedReturn > 0)) throw new Error("複数点期待回収率が計算されていません");
console.log(`OK 複数点期待回収率: ${(evaluated.expectedReturn * 100).toFixed(2)}%`);

const missing = engine.evaluateTicket({ betType: "3連複", method: "1点", selection: [1, 2, 3] }, probabilities, {});
check("オッズ欠損ゲート", missing.status, "missing_odds");

function check(name, actual, expected) {
  if (actual !== expected) throw new Error(`${name}: expected=${expected} actual=${actual}`);
  console.log(`OK ${name}: ${actual}`);
}

function close(name, actual, expected) {
  if (Math.abs(actual - expected) > 1e-10) throw new Error(`${name}: expected=${expected} actual=${actual}`);
  console.log(`OK ${name}: ${actual.toFixed(10)}`);
}
