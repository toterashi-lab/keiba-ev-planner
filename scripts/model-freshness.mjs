import fs from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { pathToFileURL } from "node:url";
import { captureModelDataSnapshot, captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";
import { resolvePrivateDataDir } from "./private-data-path.mjs";

export function inspectModelFreshness(database, artifact, currentImplementation = captureModelImplementationSnapshot()) {
  const current = captureModelDataSnapshot(database);
  const matches = artifact?.trainingSnapshot?.version === "model-data-snapshot-v1"
    && artifact.trainingSnapshot.fingerprint === current.fingerprint
    && artifact?.trainingImplementation?.version === "model-implementation-snapshot-v1"
    && artifact.trainingImplementation.fingerprint === currentImplementation.fingerprint;
  return { status: matches ? "fresh" : artifact ? "stale" : "missing", modelVersion: artifact?.modelVersion ?? null,
    artifactSnapshot: artifact?.trainingSnapshot ?? null, currentSnapshot: current,
    artifactImplementation: artifact?.trainingImplementation ?? null, currentImplementation };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const root = path.resolve(import.meta.dirname, "..");
  const privateDir = resolvePrivateDataDir(root);
  const artifactPath = path.join(privateDir, "models", "ability-softmax-v1.json");
  const databasePath = path.join(privateDir, "keiba.sqlite");
  const artifact = fs.existsSync(artifactPath) ? JSON.parse(fs.readFileSync(artifactPath, "utf8")) : null;
  const db = new DatabaseSync(databasePath, { readOnly: true });
  db.exec("PRAGMA busy_timeout=30000; BEGIN");
  try {
    const result = inspectModelFreshness(db, artifact);
    console.log(JSON.stringify(result, null, 2));
    if (result.status !== "fresh") process.exitCode = 10;
  } finally {
    db.exec("ROLLBACK");
    db.close();
  }
}
