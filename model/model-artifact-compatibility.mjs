import fs from "node:fs";
import { captureModelImplementationSnapshot } from "../scripts/model-data-snapshot.mjs";

export function inspectModelArtifactCompatibility(artifact, featureKeys, root = process.cwd()) {
  const currentImplementation = captureModelImplementationSnapshot(root);
  const artifactKeys = artifact?.featureKeys;
  const keysMatch = Array.isArray(artifactKeys) && artifactKeys.length === featureKeys.length
    && artifactKeys.every((key, index) => key === featureKeys[index]);
  const vectorLengthsMatch = [artifact?.means, artifact?.scales, artifact?.weights]
    .every((values) => Array.isArray(values) && values.length === featureKeys.length);
  const implementationMatches = artifact?.trainingImplementation?.version === "model-implementation-snapshot-v1"
    && artifact.trainingImplementation.fingerprint === currentImplementation.fingerprint;
  const activeIndexesValid = Array.isArray(artifact?.activeFeatureIndexes)
    && artifact.activeFeatureIndexes.length > 0
    && artifact.activeFeatureIndexes.every((index) => Number.isInteger(index) && index >= 0 && index < featureKeys.length);
  return {
    compatible: keysMatch && vectorLengthsMatch && implementationMatches && activeIndexesValid,
    keysMatch,
    vectorLengthsMatch,
    implementationMatches,
    activeIndexesValid,
    artifactModelVersion: artifact?.modelVersion ?? null,
    artifactImplementationFingerprint: artifact?.trainingImplementation?.fingerprint ?? null,
    currentImplementationFingerprint: currentImplementation.fingerprint,
  };
}

export function loadCompatibleModelArtifact(paths, featureKeys, root = process.cwd()) {
  const rejected = [];
  for (const artifactPath of paths) {
    if (!fs.existsSync(artifactPath)) continue;
    const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
    const compatibility = inspectModelArtifactCompatibility(artifact, featureKeys, root);
    if (compatibility.compatible) return { artifact, artifactPath, compatibility, rejected };
    rejected.push({ artifactPath, ...compatibility });
  }
  return { artifact: null, artifactPath: null, compatibility: null, rejected };
}
