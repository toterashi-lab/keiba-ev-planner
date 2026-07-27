import fs from "node:fs";

const source = fs.readFileSync("scripts/build-public-demo.mjs", "utf8");
for (const token of [
  'const outDir = path.resolve(process.cwd(), "public")',
  'const sourceDir = path.resolve(import.meta.dirname, "..")',
  "if (outDir === sourceDir)",
  "公開生成の出力先がソース直下を指しています",
]) {
  if (!source.includes(token)) throw new Error(`public build safety guard is missing: ${token}`);
}
console.log(JSON.stringify({ status: "pass", sourceOverwriteGuard: true }));
