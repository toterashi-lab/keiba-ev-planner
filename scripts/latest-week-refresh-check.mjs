import assert from "node:assert/strict";
import fs from "node:fs";

const workflow = fs.readFileSync("scripts/refresh-latest-week.ps1", "utf8");
const installer = fs.readFileSync("scripts/install-latest-week-refresh-task.ps1", "utf8");
const audit = fs.readFileSync("scripts/audit-automation-tasks.ps1", "utf8");
const launcher = fs.readFileSync("scripts/run-powershell-hidden.vbs", "utf8");
const converter = fs.readFileSync("scripts/convert-automation-tasks-to-headless.ps1", "utf8");
const orderedSteps = [
  "current-results-sync",
  "database-status",
  "official-racecard-capture",
  "live-prediction",
  "prediction-snapshot",
  "live-prediction-export",
  "latest-week-export",
  "published-result-sync",
  "weekly-result-evaluation",
  "weekly-result-validation",
  "static-page-generation",
];

let cursor = -1;
for (const step of orderedSteps) {
  const index = workflow.indexOf(`\"${step}\"`);
  assert.ok(index > cursor, `${step} must run in the expected order`);
  cursor = index;
}
assert.match(workflow, /CreateNew/, "多重実行防止ロックが必要");
assert.match(workflow, /repositoryWasClean/, "作業中コードの自動公開防止が必要");
assert.match(workflow, /latest-week-refresh\.json/, "最終状態の保存が必要");
assert.match(installer, /-Daily -At \"20:00\"/, "毎日の更新時刻が必要");
assert.match(installer, /Saturday,Sunday -At \"17:30\"/, "週末の結果更新が必要");
assert.match(installer, /MultipleInstances IgnoreNew/, "タスク側でも多重実行を防ぐこと");
assert.match(installer, /wscript\.exe/, "画面を出さないタスク起動が必要");
assert.match(launcher, /shell\.Run\(command, 0, True\)/, "PowerShellを非表示で待機実行すること");
assert.equal((converter.match(/KeibaEV-/g) || []).length, 9, "既存9タスクをヘッドレスへ統一すること");
assert.ok(audit.includes("KeibaEV-Latest-Week-Refresh"), "自動化監査に最新週タスクを含めること");
assert.ok(audit.includes("headless"), "自動化監査で非表示起動を確認すること");

console.log("latest-week-refresh-check: PASS");
