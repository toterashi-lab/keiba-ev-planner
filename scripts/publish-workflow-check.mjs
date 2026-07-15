import fs from "node:fs";

const source = fs.readFileSync("scripts/publish-web-status.ps1", "utf8");
const ordered = [
  '"scripts\\goal-completion-audit-check.mjs"',
  '"scripts\\audit-automation-tasks.ps1"',
  '"scripts\\jra-free-db.mjs" audit',
  '"scripts\\audit-field-availability.mjs"',
  '"scripts\\build-public-demo.mjs"',
  "if ($DryRun) { return }",
  "git push origin main",
  "Invoke-RestMethod",
  "publication-receipt.json",
  '"scripts\\goal-completion-audit.mjs"',
];
let previous = -1;
for (const token of ordered) {
  const position = source.indexOf(token, previous + 1);
  if (position < 0) throw new Error(`Publication workflow token is missing or out of order: ${token}`);
  previous = position;
}
for (const token of ["manifestId", "remoteManifestId", "manifestSha256", "remoteCommit", "remoteLiveRacecardsSha256", "remoteLiveModelOutputsSha256"]) {
  if (!source.includes(token)) throw new Error(`Publication verification field is missing: ${token}`);
}
for (const token of ["processStartedAt", "Get-Process -Id ([int]$existingOwner.pid)", "$sameProcess", "Remove-Item -LiteralPath $lockPath"]) {
  if (!source.includes(token)) throw new Error(`Stale publication lock recovery is missing: ${token}`);
}
console.log(JSON.stringify({
  status: "pass",
  orderedSteps: ordered.length,
  verificationFields: 6,
  staleLockRecovery: true,
}, null, 2));
