import path from "node:path";
import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
try {
  const counts = Object.fromEntries(db.prepare("select status,count(*) count from backfill_jobs group by status").all().map((row) => [row.status, row.count]));
  const totalMonths = Object.values(counts).reduce((sum, count) => sum + count, 0);
  const exhausted = db.prepare("select month,attempts,last_error from backfill_jobs where status='failed' and attempts>=12 order by month").all();
  const failedChecks = db.prepare("select month,check_name,details from quality_checks where status='fail' order by month,check_name").all();
  const report = { ready: totalMonths > 0 && (counts.complete ?? 0) === totalMonths && !exhausted.length && !failedChecks.length, expectedMonths: totalMonths, counts, exhausted, failedChecks };
  console.log(JSON.stringify(report));
  if (exhausted.length || failedChecks.length) process.exitCode = 3;
} finally {
  db.close();
}
