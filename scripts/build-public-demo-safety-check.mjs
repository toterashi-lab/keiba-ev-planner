import fs from "node:fs";

const source = fs.readFileSync("scripts/build-public-demo.mjs", "utf8");
for (const token of [
  'const sourceDir = path.resolve(import.meta.dirname, "..")',
  "const outDir = sourceDir",
  'fs.mkdtempSync(path.join(os.tmpdir(), "keiba-public-stage-"))',
  "fs.cpSync(stageDir, outDir, { recursive: true, force: true })",
]) {
  if (!source.includes(token)) throw new Error(`public build safety guard is missing: ${token}`);
}
for (const forbidden of ["fs.rmSync(path.join(outDir", 'path.join(stageDir, ".gitignore")', 'path.join(stageDir, "README.md")']) {
  if (source.includes(forbidden)) throw new Error(`public build must preserve repository files: ${forbidden}`);
}
console.log(JSON.stringify({ status: "pass", inPlaceGeneration: true, repositoryFilesPreserved: true }));
