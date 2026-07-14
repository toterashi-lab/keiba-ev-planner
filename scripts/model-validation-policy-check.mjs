import { MODEL_VALIDATION_POLICY, validatePolicy } from "../model/validation-policy.mjs";

validatePolicy();
console.log(JSON.stringify({
  version: MODEL_VALIDATION_POLICY.version,
  probabilityGates: MODEL_VALIDATION_POLICY.probabilityGates.length,
  bettingGates: MODEL_VALIDATION_POLICY.bettingGates.length,
  featureAdmission: MODEL_VALIDATION_POLICY.featureAdmission.method,
}, null, 2));
