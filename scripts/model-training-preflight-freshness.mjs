import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

const root = path.resolve(import.meta.dirname, "..");
const privateDir = resolvePrivateDataDir(root);
const reportPath = path.join(privateDir, "models", "training-preflight.json");
const maxAgeHours = 24;
const maxRaceLag = 3000;

if (!fs.existsSync(reportPath)) stale("missing_report");
const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const db = new DatabaseSync(path.join(privateDir, "keiba.sqlite"), { readOnly: true });
try {
  const current = db.prepare("select count(*) races from complete_races").get();
  const ageHours = (Date.now() - new Date(report.checkedAt).getTime()) / 3_600_000;
  const raceLag = current.races - Number(report.coverage?.races ?? 0);
  const fresh = report.status === "pass"
    && Number.isFinite(ageHours) && ageHours >= 0 && ageHours <= maxAgeHours
    && raceLag >= 0 && raceLag <= maxRaceLag;
  console.log(JSON.stringify({
    status: fresh ? "fresh" : "stale",
    checkedAt: report.checkedAt,
    ageHours,
    reportRaces: report.coverage?.races ?? null,
    currentRaces: current.races,
    raceLag,
    maxAgeHours,
    maxRaceLag,
  }, null, 2));
  if (!fresh) process.exitCode = 10;
} finally {
  db.close();
}

function stale(reason) {
  console.log(JSON.stringify({ status: "stale", reason }, null, 2));
  process.exit(10);
}
