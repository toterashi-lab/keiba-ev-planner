import assert from "node:assert/strict";
import fs from "node:fs";
import { isMainModule } from "./is-main-module.mjs";

assert.equal(isMainModule(import.meta.url), true, "リダイレクトされた作業パスでもCLI本体を検出すること");
assert.equal(isMainModule(import.meta.url, null), false, "import利用時はCLI本体として実行しないこと");

for (const file of fs.readdirSync("scripts").filter((name) => name.endsWith(".mjs"))) {
  if (file === "is-main-module-check.mjs") continue;
  const source = fs.readFileSync(`scripts/${file}`, "utf8");
  assert.ok(!source.includes("import.meta.url === pathToFileURL(process.argv[1]).href"), `${file}に旧パス比較が残っています`);
}

console.log("is-main-module-check: PASS");
