# AIデジタル競馬新聞 期待値ロジック v5

## 目的

予想印と購入判断を分離する。全レースに予想印と参考買い目を掲載する一方、購入候補は外部検証済みの安全側期待値が基準を満たす場合だけ表示する。

## 3シナリオ

1. 市場基準: 控除率込みオッズから逆算した市場確率で計算する。
2. AI理論値: 対象レース以前のデータだけで学習した能力確率とオッズを掛ける。研究比較用であり、単独では購入判断に使わない。
3. 採用期待値: 券種・確率帯別の校正誤差とオッズ下振れを引いた下限値。ランキングと購入判定はこの値だけを使う。

## 改善順序

1. 残りの結果11か月を収録し、完全性監査を通す。
2. 全レースの発走前単勝・複勝オッズを収録する。
3. expanding-window walk-forwardで能力モデルと市場基準を比較する。
4. 単勝・複勝・馬連・ワイド・馬単・3連複・3連単を券種別に校正する。
5. 1点・BOX・フォーメーションを構成点へ展開し、総投資100円単位で比較する。
6. AIが事前保存した最上位買い目だけを外部期間で照合する。
7. ROI信頼区間下限、最大ドローダウン、日別安定性がすべて合格した場合だけ購入適格にする。

## 現在の判定

- 先週72レースの勝者log lossは市場`1.738`、市場・能力統合`1.795`、能力単独`2.129`だった。
- 統合モデルが市場を上回っていないため、AI理論値を採用期待値へ使用しない。
- AI推奨72件の回収率は`53.2%`で、購入適格ではない。
- 複勝のみの事後集計は`30件・93.3%`だが、最終監査週を見た後の券種固定は採用しない。

## 研究根拠

- William Benter, [Computer Based Horse Race Handicapping and Wagering Systems](https://datagolf.com/static/blogs/benter_paper.pdf)
- Smith and Vaughan Williams, [Forecasting horse race outcomes: New evidence on odds bias in UK betting markets](https://doi.org/10.1016/j.ijforecast.2009.12.014)
- Walsh and Joshi, [Machine learning for sports betting: should model selection be based on accuracy or calibration?](https://arxiv.org/abs/2303.06021)

高配当傾向は分散の説明にだけ使い、的中確率や期待値へ直接加算しない。最終監査期間を使った閾値調整、期待値の水増し、ROI 100%超の保証は禁止する。
