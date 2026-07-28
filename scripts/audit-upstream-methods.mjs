import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUTPUT_PATH = path.join(ROOT, "docs", "upstream-method-audit.json");
const SOURCES = [
  { repo: "scikit-learn/scikit-learn", purpose: "時系列分割と確率校正", use: "method_reference" },
  { repo: "pymc-devs/pymc", purpose: "予測不確実性", use: "method_reference_only" },
  { repo: "mlflow/mlflow", purpose: "実験系譜と成果物追跡", use: "method_reference" },
  { repo: "optuna/optuna", purpose: "時系列fold内の探索", use: "method_reference" },
];

const headers = { "accept": "application/vnd.github+json", "user-agent": "keiba-ev-planner-research" };
const sources = [];
for (const source of SOURCES) {
  const repository = await github(`/repos/${source.repo}`);
  const commit = await github(`/repos/${source.repo}/commits/${repository.default_branch}`);
  sources.push({
    ...source,
    url: repository.html_url,
    defaultBranch: repository.default_branch,
    commit: commit.sha,
    license: repository.license?.spdx_id ?? "NOASSERTION",
    archived: Boolean(repository.archived),
    fetchedAt: new Date().toISOString(),
    status: repository.archived ? "rejected" : "reference_only",
    directCodeImport: false,
  });
}
const audit = {
  version: "upstream-method-audit-v1",
  policy: "GitHubのコードや主張を直接採用せず、独自実装を時系列外部検証で採否判定する",
  sources,
};
fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(audit, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ outputPath: OUTPUT_PATH, sources: sources.map(({ repo, commit, license, status }) => ({ repo, commit, license, status })) }, null, 2));

async function github(pathname) {
  const response = await fetch(`https://api.github.com${pathname}`, { headers, signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`GitHub API ${pathname}: HTTP ${response.status}`);
  return response.json();
}
