import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const source = path.join(root, "data", "model-outputs-2026-07-11-2026-07-12.json");
const destination = path.join(root, "data", "model-outputs-2026-07-11-2026-07-12.js");

if (!fs.existsSync(source)) throw new Error(`参照モデルJSONがありません: ${source}`);
const model = JSON.parse(fs.readFileSync(source, "utf8"));
if (model.status !== "ready" || model.predictions?.length !== 72 || !model.predictions.every((row) =>
  Array.isArray(row.allHorseProbabilities) && row.allHorseProbabilities.length > 0)) {
  throw new Error("全72レース・全頭確率を含む合格済み参照モデルではありません");
}

fs.writeFileSync(destination, `window.KEIBA_MODEL_OUTPUTS = ${JSON.stringify(model)};\n`, "utf8");
console.log(JSON.stringify({ status: "ready", predictions: model.predictions.length, destination: path.relative(root, destination) }));
