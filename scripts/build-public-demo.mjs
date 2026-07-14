import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const outDir = "public";
const dataDir = path.join(outDir, "data");
const programmeRaw = fs.readFileSync("data/meet-2026-07-11-2026-07-12.json", "utf8");
const resultsRaw = fs.readFileSync("data/results-2026-07-11-2026-07-12.json", "utf8");
const resultLinksRaw = fs.readFileSync("data/result-links-2026-07-11-2026-07-12.json", "utf8");
const programmeData = JSON.parse(programmeRaw);
const resultsData = JSON.parse(resultsRaw);
const resultLinksData = JSON.parse(resultLinksRaw);
const quality = JSON.parse(fs.readFileSync("data/quality-report-2026-07-11-2026-07-12.json", "utf8"));
const currentHash = crypto.createHash("sha256").update(programmeRaw + resultsRaw).digest("hex");
if (quality.status !== "pass" || !quality.gates.resultValidationReady || quality.inputHash !== currentHash) {
  throw new Error("公開停止: 品質検査が未合格または検査結果が古いため、前回正常版を保持します");
}
if (resultLinksData.raceCount !== resultsData.results.length || !sameSet(resultLinksData.raceLinks.map((race) => race.url), resultsData.results.map((race) => race.url))) {
  throw new Error("公開停止: 結果URL一覧と取得結果が一致しないため、前回正常版を保持します");
}

const stageDir = fs.mkdtempSync(path.join(process.cwd(), ".public-stage-"));
const stageDataDir = path.join(stageDir, "data");
fs.mkdirSync(stageDataDir, { recursive: true });
for (const file of ["index.html", "styles.css", "app.js"]) copy(file, path.join(stageDir, file));
fs.mkdirSync(path.join(stageDir, "docs"), { recursive: true });
fs.mkdirSync(path.join(stageDir, "scripts"), { recursive: true });
copy("schema.sql", path.join(stageDir, "schema.sql"));
copy("docs/free-data-pipeline.md", path.join(stageDir, "docs", "free-data-pipeline.md"));
for (const file of [
  "jra-free-db.mjs",
  "jra-free-odds.mjs",
  "capture-jra-closing-odds.ps1",
  "run-jra-free-backfill.ps1",
  "sync-jra-current.ps1",
  "fetch-jra-results.mjs",
  "validate-reference-dataset.mjs",
  "generate-reference-result-seed.mjs",
  "build-public-demo.mjs",
  "ev-logic-check.mjs",
]) copy(path.join("scripts", file), path.join(stageDir, "scripts", file));
writeBrowserData(path.join(stageDataDir, "meet-2026-07-11-2026-07-12.js"), "KEIBA_REFERENCE_MEETINGS", programmeData);
writeBrowserData(path.join(stageDataDir, "result-links-2026-07-11-2026-07-12.js"), "KEIBA_RESULT_LINKS", resultLinksData);
writeBrowserData(path.join(stageDataDir, "results-2026-07-11-2026-07-12.js"), "KEIBA_RESULTS", resultsData);

fs.writeFileSync(path.join(stageDir, ".nojekyll"), "", "utf8");
fs.writeFileSync(path.join(stageDir, ".gitignore"), ".DS_Store\nThumbs.db\n", "utf8");
fs.writeFileSync(path.join(stageDir, "README.md"), `# 競馬期待値ラボ

先週のJRA中央競馬72レースを使った、過去データ蓄積・期待値検証画面です。

## 収録範囲

- 2026年7月11日・12日
- 福島・小倉・函館
- 開催番組 72レース
- 勝馬 72レース
- 出走馬 ${resultsData.runnerCount}頭
- 払戻 ${resultsData.refundLineCount}件

出典はJRA公式番組・結果ページです。JRAおよびnetkeibaの公式サービスではありません。
無課金の長期蓄積コードは \`scripts/jra-free-db.mjs\`、公式単勝・複勝オッズ収集は \`scripts/jra-free-odds.mjs\`、検査仕様は \`docs/free-data-pipeline.md\` に収録しています。
原本HTMLとSQLite本体は個人利用のローカルDBにのみ保存し、この公開リポジトリには収録しません。

期待値候補は、全馬オッズ履歴、確率校正、時系列検証、オッズ鮮度、ドローダウンの全ゲートが合格するまで生成を停止します。

GitHub Pagesは \`main\` ブランチ直下を公開します。
`, "utf8");

if (fs.existsSync(outDir)) {
  for (const entry of fs.readdirSync(outDir)) {
    if (entry === ".git") continue;
    fs.rmSync(path.join(outDir, entry), { recursive: true, force: true });
  }
}

fs.mkdirSync(dataDir, { recursive: true });
fs.cpSync(stageDir, outDir, { recursive: true });
fs.rmSync(stageDir, { recursive: true, force: true });

console.log(`Built public real-data edition in ${outDir}`);

function copy(from, to) {
  fs.copyFileSync(from, to);
}

function writeBrowserData(file, globalName, value) {
  fs.writeFileSync(file, `window.${globalName} = ${JSON.stringify(value, null, 2)};\n`, "utf8");
}

function sameSet(left, right) {
  const expected = new Set(left);
  const actual = new Set(right);
  return expected.size === actual.size && expected.size === left.length && actual.size === right.length && [...expected].every((value) => actual.has(value));
}
