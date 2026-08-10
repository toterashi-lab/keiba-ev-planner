# Legacy runtime copy (2026-08-03)

Browser-format reference files that were previously left at `data/` root were moved to the private data archive.
They are not loaded by the current site, published, or used as the canonical reference dataset.

The normalized and audited reference snapshot remains in `../2026-07-11_2026-07-12/`.
The private copies are retained separately because five of the six files differ from that snapshot and must not be silently overwritten or discarded.

| File | SHA-256 |
| --- | --- |
| `closing-odds-2026-07-11-2026-07-12.js` | `0ee97098d6849f67d16bb8c2fbe850a51a4fd804e3615625ec49f61a10ac2a5c` |
| `meet-2026-07-11-2026-07-12.js` | `b76dfbe7302eec32d90e5a4115c18413d56943b73fb5c5abb72ef892e6cf3d73` |
| `model-outputs-2026-07-11-2026-07-12.js` | `e839b73ccce4559afcaf76cdbc7f007d100d3bcd31d432199e622c3793e928ba` |
| `reference-ev-audit.js` | `25f4b30c19c565df4bafb3b80e5faffdd244a3824f855d7c85eabc50bce8a13a` |
| `result-links-2026-07-11-2026-07-12.js` | `519001ad4fa18deff4403d2fc9e4163e1e9fb95da5b92e0031cacb86d4a64d59` |
| `results-2026-07-11-2026-07-12.js` | `a60e7022c3ffef9c4d2b48d38331f18bd59ea053c0e3f71e010264c8674e85b0` |
