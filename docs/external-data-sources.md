# External data sources

## Kaggle JRA Horse Racing Dataset

- Source: `takamotoki/JRA Horse Racing Dataset`
- URL: <https://www.kaggle.com/datasets/takamotoki/jra-horse-racing-dataset>
- License shown by the distributor: CC BY 4.0
- Local payload SHA-256: `f3f585bf3ed7822e6a0a8d7d4bc6cb41c08c1026c17b210aaaba12e810c03f4e`
- Imported scope: final win odds from 1996-01-01 through 1999-12-31
- Imported coverage: 13,735 races and 175,455 runners

The importer accepts a race only when its runner-number set exactly matches the quality-gated JRA result database. Raw source files stay in the private data directory and are not published with the static site. Place odds are not present in this import, so these rows are explicitly recorded as audited win-only coverage and are not treated as complete win-place coverage.
