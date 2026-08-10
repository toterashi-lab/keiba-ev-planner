import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { isMainModule } from "./is-main-module.mjs";

const ROOT = path.resolve(import.meta.dirname, "..");
const ARCHIVE = path.join(ROOT, "data", "historical-agent-archive");
const OUTPUT = path.join(ROOT, "data", "prediction-hit-rate-audit.json");
const AGENTS = ["safety", "sniper", "pace", "analyst", "contrarian"];
const V1_BASELINE = {
  safety: { top1Rate: 0.2255316326, top3Rate: 0.5071358174 },
  sniper: { top1Rate: 0.1608638793, top3Rate: 0.3930385505 },
  pace: { top1Rate: 0.1330123953, top3Rate: 0.3398942421 },
  analyst: { top1Rate: 0.1742921042, top3Rate: 0.4186251469 },
  contrarian: { top1Rate: 0.0630377924, top3Rate: 0.2198551988 },
};

export function auditPredictionHitRate(options = {}) {
  const directory = options.archiveDirectory ?? ARCHIVE;
  const index = JSON.parse(fs.readFileSync(path.join(directory, "index.json"), "utf8"));
  const periods = Object.fromEntries(["all", "discovery", "validation", "holdout"].map((key) => [key, accumulator()]));
  for (const month of index.months) {
    const payload = JSON.parse(fs.readFileSync(path.join(directory, month.file), "utf8"));
    for (const day of payload.days) for (const race of day.races) {
      update(periods.all, race);
      update(periods[periodKey(day.date)], race);
    }
  }
  const metrics = Object.fromEntries(Object.entries(periods).map(([key, value]) => [key, finalize(value)]));
  const improvements = Object.fromEntries(AGENTS.map((agent) => [agent, {
    top1Points: 100 * (metrics.all.agents[agent].top1Rate - V1_BASELINE[agent].top1Rate),
    top3Points: 100 * (metrics.all.agents[agent].top3Rate - V1_BASELINE[agent].top3Rate),
  }]));
  const acceptance = {
    allAgentsTop1Improved: AGENTS.every((agent) => improvements[agent].top1Points > 0),
    allAgentsTop3Improved: AGENTS.every((agent) => improvements[agent].top3Points > 0),
    holdoutHasRaces: metrics.holdout.races > 0,
    archiveComplete: index.integrity?.allCompleteRacesArchived === true,
  };
  const result = { version: "prediction-hit-rate-audit-v1", generatedAt: index.generatedAt, archiveVersion: index.version,
    coverage: index.coverage, split: { discovery: "through 2024-12-31", validation: "2025-01-01 through 2025-12-31", holdout: "from 2026-01-01" },
    v1Baseline: V1_BASELINE, metrics, improvements, acceptance, status: Object.values(acceptance).every(Boolean) ? "pass" : "fail" };
  if (options.write !== false) fs.writeFileSync(options.outputPath ?? OUTPUT, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  return result;
}

function accumulator() {
  return { races: 0, uniqueTopPicks: 0, agents: Object.fromEntries(AGENTS.map((agent) => [agent, { races: 0, top1: 0, top3: 0 }])) };
}

function update(target, race) {
  const winner = Number(race[5]?.[0]?.[0]);
  const podium = new Set((race[5] ?? []).map((row) => Number(row[0])));
  if (!(winner > 0)) return;
  target.races += 1;
  const topPicks = [];
  (race[7] ?? []).forEach((agentRow, index) => {
    const agent = AGENTS[index];
    const top = Number(agentRow?.[0]?.[0]);
    if (!agent || !(top > 0)) return;
    topPicks.push(top);
    target.agents[agent].races += 1;
    target.agents[agent].top1 += top === winner ? 1 : 0;
    target.agents[agent].top3 += podium.has(top) ? 1 : 0;
  });
  target.uniqueTopPicks += new Set(topPicks).size;
}

function finalize(value) {
  return { races: value.races, meanUniqueTopPicks: value.races ? value.uniqueTopPicks / value.races : 0,
    agents: Object.fromEntries(AGENTS.map((agent) => { const row = value.agents[agent]; return [agent, { races: row.races,
      top1Rate: row.races ? row.top1 / row.races : 0, top3Rate: row.races ? row.top3 / row.races : 0 }]; })) };
}

function periodKey(date) {
  if (date <= "2024-12-31") return "discovery";
  if (date <= "2025-12-31") return "validation";
  return "holdout";
}

if (isMainModule(import.meta.url)) {
  const result = auditPredictionHitRate();
  console.log(JSON.stringify({ status: result.status, races: result.metrics.all.races, improvements: result.improvements,
    holdout: result.metrics.holdout }, null, 2));
  if (result.status !== "pass") process.exitCode = 1;
}
