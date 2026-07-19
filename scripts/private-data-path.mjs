import fs from "node:fs";
import path from "node:path";

export function resolvePrivateDataDir(root) {
  if (process.env.KEIBA_PRIVATE_DIR) return path.resolve(process.env.KEIBA_PRIVATE_DIR);
  const candidates = [
    path.join(root, "..", "data", "jra-free-private"),
    path.join(root, "data", "jra-free-private"),
  ];
  return candidates.find((candidate) => fs.existsSync(path.join(candidate, "keiba.sqlite"))) ?? candidates[0];
}
