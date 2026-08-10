import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export function isMainModule(metaUrl, argvPath = process.argv[1]) {
  if (!argvPath) return false;
  try {
    return fs.realpathSync(path.resolve(argvPath)).toLowerCase()
      === fs.realpathSync(fileURLToPath(metaUrl)).toLowerCase();
  } catch {
    return pathToFileURL(path.resolve(argvPath)).href === metaUrl;
  }
}
