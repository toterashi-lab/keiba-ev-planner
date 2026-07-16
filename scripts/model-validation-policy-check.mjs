import { MODEL_VALIDATION_POLICY, validatePolicy } from "../model/validation-policy.mjs";

validatePolicy();
if (MODEL_VALIDATION_POLICY.featureAdmission.absoluteEceSafeHarbor > 0.01
  || MODEL_VALIDATION_POLICY.featureAdmission.absoluteMaxCalibrationBinSafeHarbor > 0.05) {
  throw new Error("Feature calibration safe harbor is too permissive");
}
console.log(JSON.stringify({
  version: MODEL_VALIDATION_POLICY.version,
  probabilityGates: MODEL_VALIDATION_POLICY.probabilityGates.length,
  bettingGates: MODEL_VALIDATION_POLICY.bettingGates.length,
  featureAdmission: MODEL_VALIDATION_POLICY.featureAdmission.method,
  calibrationSafeHarbor: {
    ece: MODEL_VALIDATION_POLICY.featureAdmission.absoluteEceSafeHarbor,
    maxBinError: MODEL_VALIDATION_POLICY.featureAdmission.absoluteMaxCalibrationBinSafeHarbor,
  },
}, null, 2));
