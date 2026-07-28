# GitHub Method Sources

## Purpose

Use this registry when introducing an external data-science method. A repository is evidence for an implementation pattern, not evidence that a horse-racing strategy is profitable.

## Approved Upstream Sources

| Method class | Upstream source | Local reviewer | Adoption rule |
| --- | --- | --- | --- |
| Chronological splits with a gap | `scikit-learn/scikit-learn` `TimeSeriesSplit` | chronology-leakage-agent | Preserve race-day ordering and embargo; never random-split races. |
| Probability calibration | `scikit-learn/scikit-learn` `calibration.py` | probability-calibration-agent | Fit only on the calibration slice and compare Brier, log loss, ECE, and downside calibration error on later dates. |
| Posterior and predictive uncertainty | `pymc-devs/pymc` | sample-adequacy-agent | Use intervals or lower bounds for EV; do not replace uncertainty with point-estimate ROI. |
| Reproducible experiment lineage | `mlflow/mlflow` | data-quality-agent | Preserve data hash, code hash, fold dates, parameters, metrics, and artifact hash for every candidate. |
| Hyperparameter search | `optuna/optuna` | validation-risk-agent | Search only inside each training fold; the final audit period may be evaluated once and never optimized. |

## Evidence Card

Create an evidence card before implementation with these fields:

```json
{
  "method_id": "temporal-calibration-v1",
  "upstream_repo": "owner/repo",
  "upstream_commit": "immutable-commit-sha",
  "license_checked": true,
  "claim": "what is being evaluated",
  "local_role": "probability-calibration-agent",
  "feature_flag": "off",
  "train_period": "YYYY-MM-DD..YYYY-MM-DD",
  "calibration_period": "YYYY-MM-DD..YYYY-MM-DD",
  "final_audit_period": "YYYY-MM-DD..YYYY-MM-DD",
  "acceptance_metrics": ["log_loss", "brier", "ece", "drawdown"],
  "status": "candidate"
}
```

## Rejection Rules

- Reject repositories that report only hit rate or retrospective ROI without timestamped odds and a stored pre-race recommendation.
- Reject code that cannot identify the source time of each feature or odds observation.
- Reject methods that improve one final week after tuning, but fail across expanding chronological folds.
- Do not use license-restricted source code directly. Reimplement the tested idea only when licensing and provenance allow it.

## Primary Links

- https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/model_selection/_split.py
- https://github.com/scikit-learn/scikit-learn/blob/main/sklearn/calibration.py
- https://github.com/pymc-devs/pymc
- https://github.com/mlflow/mlflow
- https://github.com/optuna/optuna
