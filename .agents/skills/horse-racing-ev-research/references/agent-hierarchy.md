# Agent Hierarchy

## Level 0: Source Observers

- official result and payout observer
- historical win/place odds observer
- live odds timestamp observer
- weather and going observer
- runner and change observer

They report facts and quality only.

## Level 1: Feature Analysts

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

Each analyst outputs horse-level score, top factors, missing evidence, and no more than five marks.

## Level 2: Specialist Forecasters

Specialists convert only their assigned feature contribution into a within-race probability ranking. Unsupported specialists abstain.

## Level 3: Validation and Risk

This layer checks calibration, uncertainty, odds age, data quality, historical ROI confidence intervals, and drawdown.

## Level 4: Chief Expectancy Agent

The chief merges specialist rankings with the calibrated ability probability and market probability. It alone selects the ranking expected return and purchase eligibility.

Constraints:

- historical payout lift is not a probability multiplier;
- final audit results cannot alter specialist weights;
- candidate rankings are not counted as purchased bets;
- conservative lower-bound EV is the ranking authority;
- unsupported specialists contribute zero votes, not neutral invented scores.
