# Research Method

## Evidence Applied

- JRA's statutory return rates are 80% for win/place, 77.5% for quinella/wide, 75% for exacta/trio, and 72.5% for trifecta. Beating 100% therefore requires genuine probability information beyond the market and strict selection.
  - https://www.jra.go.jp/kouza/baken/index.html
- Calibration is more relevant than classification accuracy for value betting because EV depends on probability magnitude.
  - https://arxiv.org/abs/2303.06021
- Probability-estimation uncertainty materially changes optimal horse-race wagering; use lower bounds or chance constraints instead of plug-in probabilities alone.
  - https://arxiv.org/abs/1701.02814
- Coherent ranking-probability models are preferable for place and exotic tickets; improved fit does not automatically imply profit in Japanese data.
  - https://doi.org/10.1287/mnsc.41.6.1048
- Japanese win odds evolve toward final vote shares and display market information aggregation, so odds age and movement are model inputs, not incidental metadata.
  - https://arxiv.org/abs/2503.16470
- Favorite-longshot bias is a persistent empirical concern in racetrack markets. Any correction must be fitted and validated chronologically.
  - https://doi.org/10.1086/260600

## Historical Pattern Mining

Use all rows from `complete_races`, `complete_race_entries`, and `complete_payouts`.

1. Exclude the final external-audit period.
2. Define high payout separately for each ticket type from an older discovery period.
3. Build only pre-race conditions, such as venue, surface, distance, field size, race band, weather, going, and race class.
4. Analyze single conditions and limited interactions.
5. Apply minimum sample floors and empirical-Bayes shrinkage.
6. Retain a condition only when lift is above one in both discovery and later validation periods.
7. Feed retained conditions into scenario and uncertainty features, not directly into probability.

## ROI Validation

For each expanding-window fold:

1. Train ability probabilities.
2. Fit market blending and favorite-longshot correction.
3. Fit ticket-specific calibration.
4. Generate candidate tickets using odds available at the decision timestamp.
5. Store one AI recommendation or an abstention before results.
6. Settle only stored AI recommendations at 100 yen per point.
7. Aggregate by day for bootstrap confidence intervals.

Purchase eligibility requires at minimum:

- no target leakage;
- fresh odds;
- calibrated ticket probability;
- conservative EV above one;
- enough bets and race days;
- ROI 95% lower confidence bound above one;
- acceptable maximum drawdown.
