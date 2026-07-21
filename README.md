# AIデジタル競馬新聞

JRA公式データを発走前スナップショットとして保存し、5人の予想エージェント、買い目、結果、成績を時系列で検証する静的Webアプリです。購入・自動投票機能はありません。

## 収録範囲

- 画面の参考データ: 2026年7月11日・12日の72レース
- 長期DB: 1996年1月から再取得中。正確な進捗は`node scripts/jra-free-db.mjs status`で確認する。
- 正本データ: 公開リポジトリに含めないローカルSQLiteと原本HTML

出典はJRA公式番組・結果ページです。JRAおよびnetkeibaの公式サービスではありません。
無課金の長期蓄積コードは `scripts/jra-free-db.mjs`、公式単勝・複勝オッズ収集は `scripts/jra-free-odds.mjs`、検査仕様は `docs/free-data-pipeline.md` に収録しています。
期待値の研究根拠、4シナリオ、校正・時系列検証ゲートは `docs/expectancy-methodology.md` に収録しています。
原本HTMLとSQLite本体は個人利用のローカルDBにのみ保存し、この公開リポジトリには収録しません。

期待値候補は、全馬オッズ履歴、確率校正、時系列検証、オッズ鮮度、ドローダウンの全ゲートが合格するまで購入適格として扱いません。利益や回収率100%超を保証しません。

## 5エージェント

- 堅実派 セーフティ
- 穴狙い スナイパー
- 展開派 ペースメーカー
- 数理派 アナリスト
- 逆張り派 コントラリアン

予測、買い目、オッズ、根拠は公開時点で追記保存し、結果確定後にだけ精算・採点します。詳細は`docs/agent-system-audit.md`、`docs/agent-architecture.md`、`docs/prediction-calculation.md`、`docs/learning-methodology.md`、`docs/data-leak-prevention.md`を参照してください。

GitHub Pagesは `main` ブランチ直下を公開します。
