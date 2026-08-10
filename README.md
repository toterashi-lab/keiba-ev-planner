# ウマヨミ｜5人のAI予想家リーグ

5人のAI予想家を選び、作戦会議、馬券風バトルプラン、勝敗ドラマ、週ごとの結果を楽しむAI競馬エンターテインメントです。既存の予想、買い目、結果、成績の時系列検証は維持しています。購入・自動投票機能はありません。

## 中心体験

1. ロビーで今週の予想と最新週のAI結果を見る
2. 5人の作戦会議とエース指名を見る
3. 単勝、馬連5点、3連複5頭BOXを各100円の紙馬券風表示で確認する
4. 結果後にMVP、戦犯、覚醒AI、逆神AIと反省会を見る
5. 週ごとの履歴と次のレースを追う

週順位と勝敗ドラマは、`data/live-replay-audit.js`に保存された照合済みデータから決定的に生成します。実購入成績ではなく、公開済みの単勝・馬連・3連複を各100円として確定結果と照合した参考値です。開始資金や累積残高は使いません。

## 収録範囲

- 最新予想・結果画面: 2026年8月8日・9日の72レース
- 結果アーカイブ: 1996年1月5日から2026年8月9日までの完全レース105,668件（3,275開催日）
- 長期DB: 1996年1月から継続更新中。正確な進捗は`node scripts/jra-free-db.mjs status`で確認する。
- 正本データ: 公開リポジトリに含めないローカルSQLiteと原本HTML

出典はJRA公式番組・結果ページです。JRAおよびnetkeibaの公式サービスではありません。
無課金の長期蓄積コードは `scripts/jra-free-db.mjs`、公式単勝・複勝オッズ収集は `scripts/jra-free-odds.mjs`、検査仕様は `docs/free-data-pipeline.md` に収録しています。
期待値の研究根拠、4シナリオ、校正・時系列検証ゲートは `docs/expectancy-methodology.md` に収録しています。
原本HTMLとSQLite本体は個人利用のローカルDBにのみ保存し、この公開リポジトリには収録しません。
外部データの出典、ライセンス、取込範囲、監査方法は `docs/external-data-sources.md` に記録しています。

結果アーカイブは、実際の購入履歴ではなく、各レースより前の履歴だけで5人の順位を再現し、単勝1点、馬連5点、3連複5頭BOXを各100円として公式払戻と照合した参考成績です。公開用JSONは`data/historical-agent-archive/`へ月別に生成します。

```powershell
node --max-old-space-size=8192 scripts/generate-historical-agent-archive.mjs
node scripts/historical-agent-archive-check.mjs
node scripts/prediction-hit-rate-audit.mjs
```

的中率監査は全期間、2025年検証、2026年ホールドアウトを分け、5人の本命1着率・本命複勝率・予想の多様性を`data/prediction-hit-rate-audit.json`へ保存します。

期待値候補は、全馬オッズ履歴、確率校正、時系列検証、オッズ鮮度、ドローダウンの全ゲートが合格するまで購入適格として扱いません。利益や回収率100%超を保証しません。

## 公開サイト

- 本番URL: https://toterashi-lab.github.io/keiba-ev-planner/
- 一般閲覧: ログイン不要
- PV・訪問者・参照元: Vercel Web Analytics（プロジェクト所有者だけが管理画面で閲覧）
- SEO: 72レースの予想URL、72レースの結果URL、5人のプロフィールURL、4本の初心者ガイド、スポンサー方針、canonical、OGP、Twitter Card、SportsEvent／Article JSON-LD、`robots.txt`、159 URLの`sitemap.xml`を収録
- 静的ページ再生成: `node scripts/generate-static-pages.mjs`
- 36項目完了監査: `node scripts/entertainment-requirements-check.mjs`

## 5人のAI予想家

- ミドリ: 鉄壁の本命守護者。能力と安定性を重視
- レナ: 一撃必倒の穴馬ハンター。人気落ちと条件替わりを重視
- ナギ: 蒼風のレースナビゲーター。隊列、ペース、脚質を重視
- リカ: 数式で戦うデータ参謀。校正確率、誤差、条件別実績を重視
- ミカ: 常識を疑う逆張りクイーン。評価集中と市場の偏りを重視

各キャラクターは通常、勝利、敗北、怒り、覚醒の5状態を持ち、予想結果と直近成績から表示状態を決めます。

ホームには首位対決、連勝・連敗、波乱警報を表示し、週別結果ページでは直近8週の収支・回収率とSNS共有画像を確認できます。結果ページは勝利時の短い紙吹雪、全敗時の敗北演出を持ち、動きを減らす設定では停止します。

予測、買い目、オッズ、根拠は公開時点で追記保存し、結果確定後にだけ精算・採点します。詳細は`docs/agent-system-audit.md`、`docs/agent-architecture.md`、`docs/prediction-calculation.md`、`docs/learning-methodology.md`、`docs/data-leak-prevention.md`を参照してください。

各エージェントは共通データを使いますが、`agent-forecast-engine.js`で別々の特徴量配分と順位式を持ちます。画面の買い目は各人の印と連動し、単勝1点、馬連の予想スコア上位5点、3連複5頭BOXの10点を各100円で表示します。発走前の馬連オッズがない開催では、馬連を金額期待値とは表示しません。

Vercelはリポジトリ直下をログイン不要で公開します。GitHub Pages用の既存構成も維持しています。

## 最新週の自動更新

`scripts/refresh-latest-week.ps1`が、公式結果の同期、DB状態確認、次回出走表の取得、5人の予想生成、公開時点スナップショット、週別結果の再集計、静的ページ生成、公開を順番に実行します。長期オッズ蓄積の完了待ちで最新週を止めません。Windowsタスク`KeibaEV-Latest-Week-Refresh`は毎日20:00と土日17:30に実行し、翌週の公式出走表が取得できた時点でサイトの最新週を自動的に入れ替えます。

```powershell
powershell -ExecutionPolicy Bypass -File scripts/refresh-latest-week.ps1 -DryRun -SkipPublish
powershell -ExecutionPolicy Bypass -File scripts/audit-automation-tasks.ps1
```

未コミットの作業がある場合はデータ更新だけを行い、自動コミット・公開を停止します。全定期タスクは`wscript.exe`の非表示ランチャーを使うため、バックグラウンド動作中にコンソールウィンドウを表示しません。実行状況は公開リポジトリ外の`data/jra-free-private/models/latest-week-refresh.json`とログへ保存します。
