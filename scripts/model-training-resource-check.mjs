import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const reportPath = path.join("data", "jra-free-private", "models", "training-preflight.json");
const databasePath = path.join("data", "jra-free-private", "keiba.sqlite");
const report = fs.existsSync(reportPath) ? JSON.parse(fs.readFileSync(reportPath, "utf8")) : null;
const db = new DatabaseSync(databasePath, { readOnly: true });
let databaseRaces;
try { databaseRaces = db.prepare("select count(*) count from complete_races").get().count; } finally { db.close(); }

const totalMemoryMb = Math.round(os.totalmem() / 1024 / 1024);
const memoryLimitMb = Math.floor(totalMemoryMb * 0.7);
const ageMinutes = report ? (Date.now() - Date.parse(report.checkedAt)) / 60000 : Infinity;
const ticketTypes = Object.values(report?.ticketMetrics?.byType ?? {});
const checks = {
  currentDatabase: report?.coverage?.races === databaseRaces,
  recentPreflight: Number.isFinite(ageMinutes) && ageMinutes >= 0 && ageMinutes <= 180,
  numericalResearchGate: report?.status === "pass" && report?.researchSignal === "research_pass_candidate",
  featureTiming: report?.featureTiming?.violations === 0 && report?.featureTiming?.coverage === 1,
  allTicketTypes: ticketTypes.length === 7 && ticketTypes.every((metric) => metric.researchPass === true),
  memory: report?.projectedFullRssMb > 0 && report.projectedFullRssMb <= memoryLimitMb,
  runtime: report?.projectedFullRunMinutes > 0 && report.projectedFullRunMinutes <= 180,
};
const pass = Object.values(checks).every(Boolean);
console.log(JSON.stringify({ status: pass ? "pass" : "fail", checks, databaseRaces, preflightRaces: report?.coverage?.races ?? null,
  ageMinutes: Number.isFinite(ageMinutes) ? Number(ageMinutes.toFixed(1)) : null, projectedFullRunMinutes: report?.projectedFullRunMinutes ?? null,
  projectedFullRssMb: report?.projectedFullRssMb ?? null, totalMemoryMb, memoryLimitMb }, null, 2));
if (!pass) process.exitCode = 4;
