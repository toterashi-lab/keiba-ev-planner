import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { inspectModelArtifactCompatibility, loadCompatibleModelArtifact } from "../model/model-artifact-compatibility.mjs";
import { captureModelImplementationSnapshot } from "./model-data-snapshot.mjs";
import { FEATURE_KEYS } from "./train-expectancy-model.mjs";

const implementation = captureModelImplementationSnapshot();
const compatibleArtifact = {
  modelVersion: "compatible-fixture",
  featureKeys: FEATURE_KEYS,
  activeFeatureIndexes: [0],
  means: FEATURE_KEYS.map(() => 0),
  scales: FEATURE_KEYS.map(() => 1),
  weights: FEATURE_KEYS.map(() => 0),
  trainingImplementation: implementation,
};
const current = inspectModelArtifactCompatibility(compatibleArtifact, FEATURE_KEYS);
if (!current.compatible) throw new Error(`Current artifact was rejected: ${JSON.stringify(current)}`);

const shifted = inspectModelArtifactCompatibility({ ...compatibleArtifact, featureKeys: [...FEATURE_KEYS].reverse() }, FEATURE_KEYS);
if (shifted.compatible || shifted.keysMatch) throw new Error("Shifted feature columns were accepted");
const stale = inspectModelArtifactCompatibility({ ...compatibleArtifact,
  trainingImplementation: { ...implementation, fingerprint: "stale" } }, FEATURE_KEYS);
if (stale.compatible || stale.implementationMatches) throw new Error("Stale implementation was accepted");

const directory = fs.mkdtempSync(path.join(os.tmpdir(), "keiba-model-compatibility-"));
try {
  const stalePath = path.join(directory, "stale.json");
  const compatiblePath = path.join(directory, "compatible.json");
  fs.writeFileSync(stalePath, JSON.stringify({ ...compatibleArtifact, featureKeys: [...FEATURE_KEYS].reverse() }));
  fs.writeFileSync(compatiblePath, JSON.stringify(compatibleArtifact));
  const selected = loadCompatibleModelArtifact([stalePath, compatiblePath], FEATURE_KEYS);
  if (selected.artifactPath !== compatiblePath || selected.rejected.length !== 1) {
    throw new Error(`Compatible fallback selection failed: ${JSON.stringify(selected)}`);
  }
} finally {
  fs.rmSync(directory, { recursive: true, force: true });
}

console.log(JSON.stringify({ status: "pass", featureKeys: FEATURE_KEYS.length,
  shiftedColumnsRejected: true, staleImplementationRejected: true, compatibleFallbackSelected: true }, null, 2));
