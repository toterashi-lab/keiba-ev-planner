import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";

const DEFAULT_FROM = "1996-01";

export function inspectBackfillReadiness(db, options = {}) {
  const from = options.from ?? DEFAULT_FROM;
  const to = options.to ?? currentMonthJst();
  const expected = monthRange(from, to);
  const jobs = db.prepare(`select month,status,attempts,last_error,meeting_count,race_count,runner_count,payout_count,
    started_at,completed_at,updated_at from backfill_jobs order by month`).all();
  const byMonth = new Map(jobs.map((job) => [job.month, job]));
  const missingMonths = expected.filter((month) => !byMonth.has(month));
  const unexpectedMonths = jobs.map((job) => job.month).filter((month) => month < from || month > to);
  const incompleteMonths = expected.filter((month) => byMonth.get(month)?.status !== "complete");
  const exhausted = jobs.filter((job) => job.status === "failed" && job.attempts >= 12)
    .map(({ month, attempts, last_error }) => ({ month, attempts, last_error }));
  const failedChecks = db.prepare("select month,check_name,details from quality_checks where status='fail' order by month,check_name").all();
  const incompleteQuality = db.prepare(`select j.month,count(q.check_name) passed
    from backfill_jobs j left join quality_checks q on q.month=j.month and q.status='pass'
    where j.status='complete' group by j.month having count(q.check_name) < 8 order by j.month`).all();
  const counts = Object.fromEntries(db.prepare("select status,count(*) count from backfill_jobs group by status")
    .all().map((row) => [row.status, row.count]));
  const hardFailures = missingMonths.length + unexpectedMonths.length + exhausted.length + failedChecks.length + incompleteQuality.length;
  return {
    ready: incompleteMonths.length === 0 && hardFailures === 0,
    coverage: { from, to, expectedMonths: expected.length, registeredMonths: jobs.length },
    counts,
    missingMonths,
    unexpectedMonths,
    incompleteMonths,
    exhausted,
    failedChecks,
    incompleteQuality,
    hardFailures,
  };
}

function currentMonthJst() {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit" })
    .formatToParts(new Date());
  const value = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${value.year}-${value.month}`;
}

function monthRange(from, to) {
  const result = [];
  const cursor = new Date(`${from}-01T00:00:00Z`);
  const end = new Date(`${to}-01T00:00:00Z`);
  while (cursor <= end) {
    result.push(`${cursor.getUTCFullYear()}-${String(cursor.getUTCMonth() + 1).padStart(2, "0")}`);
    cursor.setUTCMonth(cursor.getUTCMonth() + 1);
  }
  return result;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const db = new DatabaseSync(path.join("data", "jra-free-private", "keiba.sqlite"), { readOnly: true });
  try {
    const report = inspectBackfillReadiness(db);
    console.log(JSON.stringify(report));
    if (report.hardFailures) process.exitCode = 3;
  } finally {
    db.close();
  }
}
