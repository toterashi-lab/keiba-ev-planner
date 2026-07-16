# Agent Hierarchy

## Level 0: Source and Arithmetic Observers

- official result and payout observer
- historical win/place odds observer
- live odds timestamp observer
- weather and going observer
- runner and change observer
- source completeness auditor
- odds provenance auditor
- 100-yen ticket arithmetic auditor

They report facts and quality only.

## Level 1: Feature and Probability Analysts

- draw and race-context analyst
- weather and going analyst
- body and carried-weight analyst
- recent-form analyst
- pace and running-style analyst
- course-suitability analyst
- jockey and trainer analyst
- field-strength analyst
- market-support analyst
- value-gap analyst
- ability probability analyst
- probability calibration analyst
- market benchmark analyst
- model-market disagreement analyst

Each analyst outputs horse-level score, top factors, missing evidence, and no more than five marks.

## Level 2: Specialist Forecasters

Specialists convert only their assigned feature contribution into a within-race probability ranking. Unsupported specialists abstain.

## Level 3: Independent Validation and Risk

This layer is independent from the forecasters and ticket constructor. Separate agents check chronology/leakage,
external ROI, sample adequacy, and drawdown. Missing evidence is blocked, never treated as a pass.

## Level 4: Chief Expectancy Agent

The chief merges specialist rankings with the calibrated ability probability and market probability. It alone selects the ranking expected return and purchase eligibility.

Constraints:

- historical payout lift is not a probability multiplier;
- final audit results cannot alter specialist weights;
- candidate rankings are not counted as purchased bets;
- conservative lower-bound EV is the ranking authority;
- unsupported specialists contribute zero votes, not neutral invented scores.
- a specialist cannot authorize a purchase;
- all independent audit agents must pass before the chief can authorize a purchase.
