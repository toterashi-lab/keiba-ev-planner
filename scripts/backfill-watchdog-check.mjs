import fs from "node:fs";

const watcher = fs.readFileSync("scripts/watch-backfill.ps1", "utf8");
const installer = fs.readFileSync("scripts/install-backfill-watchdog-task.ps1", "utf8");
for (const token of ["backfill-watchdog.lock", "jra-free-db.mjs\" status", "jra-historical-win-place-odds.mjs\" status", "Results are complete; advancing historical odds", "workerHealth -eq \"healthy\"", "run-post-backfill-pipeline.ps1", "workerHealth -ne \"healthy\""]) {
  if (!watcher.includes(token)) throw new Error(`watchdog safety token missing: ${token}`);
}
for (const token of ["KeibaEV-Backfill-Watchdog", "-Minutes 5", "-MultipleInstances IgnoreNew", "-ExecutionTimeLimit (New-TimeSpan -Minutes 4)"]) {
  if (!installer.includes(token)) throw new Error(`watchdog task token missing: ${token}`);
}
console.log(JSON.stringify({ status: "pass", cadenceMinutes: 5, recovery: "pid-validated-pipeline" }));
