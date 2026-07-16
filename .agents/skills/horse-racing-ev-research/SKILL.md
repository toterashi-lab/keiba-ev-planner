---
name: horse-racing-ev-research
description: Research, audit, and improve horse-racing probability, expected-return, ticket selection, and walk-forward validation logic. Use for JRA historical-data analysis, calibration, favorite-longshot bias, finish-order probabilities, high-payout condition mining, AI recommendation policies, ROI audits, or leakage-safe model changes.
---

# Horse Racing EV Research

Use this workflow whenever changing probability or expected-return logic.

## Required Workflow

1. Read `references/research-method.md`.
2. Inspect the database status and use every row exposed by the quality-gated `complete_*` views.
3. Keep the final target period untouched. Discover conditions on older data and confirm them on a later holdout.
4. Select models primarily by log loss, Brier score, ECE, and calibration-bin downside error. Accuracy is secondary.
5. Compare the ability model with the parimutuel market. Correct favorite-longshot bias only with parameters fitted before the target period.
6. Derive place and exotic probabilities from a coherent finish-order model, then calibrate each ticket type on historical folds.
7. Treat high-payout patterns as volatility priors. Never add their lift directly to hit probability or EV.
8. Compute conservative EV from a lower probability bound and an odds downside scenario.
9. Permit abstention. A race can have an AI forecast without having a purchase recommendation.
10. Evaluate purchased cases using only the AI recommendation stored before the result. Exclude candidate rankings and retrospective alternatives.

## Acceptance Rules

- Never tune a threshold on the final audit week.
- Never claim that ROI above 100% is guaranteed.
- Require positive ROI confidence-interval lower bounds across multiple walk-forward folds before purchase eligibility.
- Report sample size, race days, bet count, maximum drawdown, and calibration by ticket type.
- Reject changes that improve target ROI while weakening pre-target walk-forward evidence.
- Keep IPAT purchase disabled until the deployment gates pass.

## Project Commands

```powershell
node scripts/jra-free-db.mjs status
node scripts/analyze-historical-payout-patterns.mjs
node scripts/historical-payout-patterns-check.mjs
node scripts/train-expectancy-model.mjs
node scripts/generate-market-ev.mjs
node scripts/evaluate-reference-ev.mjs
node scripts/reference-ev-scope-check.mjs
```

When the database backfill changes, rerun the pattern analysis and model pipeline from the full quality-gated database.
