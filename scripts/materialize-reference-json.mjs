import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const names = [
  "meet-2026-07-11-2026-07-12",
  "results-2026-07-11-2026-07-12",
  "closing-odds-2026-07-11-2026-07-12",
  "model-outputs-2026-07-11-2026-07-12",
];

const written = [];
for (const name of names) {
  const source = path.join(root, "data", `${name}.js`);
  const destination = path.join(root, "data", `${name}.json`);
  if (!fs.existsSync(source)) throw new Error(`参照データがありません: ${source}`);
  const text = fs.readFileSync(source, "utf8");
  const assignment = text.indexOf("=");
  if (assignment < 0) throw new Error(`参照データ形式が不正です: ${source}`);
  const value = JSON.parse(text.slice(assignment + 1).trim().replace(/;\s*$/, ""));
  fs.writeFileSync(destination, `${JSON.stringify(value)}\n`, "utf8");
  written.push(path.relative(root, destination));
}

console.log(JSON.stringify({ status: "ready", written }, null, 2));
