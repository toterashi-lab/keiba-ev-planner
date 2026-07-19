window.KEIBA_LIVE_MODEL_OUTPUTS = {
  "status": "ready",
  "reason": "waiting_for_complete_odds",
  "generatedAt": "2026-07-19T07:08:14.417Z",
  "snapshotKind": "pre_race",
  "targetDates": [
    "2026-07-18",
    "2026-07-19"
  ],
  "baseBatchId": null,
  "exoticBatchId": null,
  "oddsBatchIds": [],
  "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
  "abilityModelStatus": "research_pass",
  "deploymentStatus": "benchmark_only",
  "engineVersion": "expectancy-engine-v3",
  "unitStakeYen": 100,
  "predictionCoverage": {
    "targetRaces": 72,
    "predictedRaces": 72,
    "oddsReadyRaces": 0,
    "modelOnlyRaces": 72
  },
  "coverageCounts": {
    "単勝": 0,
    "複勝": 0,
    "馬連": 0,
    "ワイド": 0,
    "馬単": 0,
    "3連複": 0,
    "3連単": 0
  },
  "evaluatedByRace": {},
  "evaluatedTotal": 0,
  "predictions": [
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 1,
      "raceId": "20260718-02-01",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.7017027472293678,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "ロジクラウン",
          "probability": 0.7017027472293678
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "イッペイ",
          "probability": 0.152707533358581
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "アートオブブライト",
          "probability": 0.09210745342812852
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ロードレスポンス",
          "probability": 0.02078212622281752
        },
        {
          "mark": "☆",
          "horseNumber": 8,
          "horseName": "ガーシュウィン",
          "probability": 0.017979006681303686
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロジクラウン",
              "score": 0.706106785699089
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イッペイ",
              "score": 0.34092656334974425
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アートオブブライト",
              "score": 0.30153651139495014
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ロードレスポンス",
              "score": 0.02184171537816472
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ガーシュウィン",
              "score": 0.020019687676180727
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ロジクラウンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "アートオブブライト",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イッペイ",
              "score": 0.32738095238095233
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ロジクラウン",
              "score": 0.2916666666666667
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "ガーシュウィン",
              "score": 0.19047619047619052
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "レインボースター",
              "score": 0.11309523809523808
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎アートオブブライトを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロジクラウン",
              "score": 0.13304437825168294
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イッペイ",
              "score": 0.08350771321858175
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ハイビスカス",
              "score": 0.07190333430693012
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ロードレスポンス",
              "score": 0.07135874343121189
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "レインボースター",
              "score": 0.07072360844914152
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ロジクラウンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "ロジクラウン"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全8頭中の1位勝率70.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 2,
      "raceId": "20260718-02-02",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.43527108230148936,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "メモリーデイズ",
          "probability": 0.43527108230148936
        },
        {
          "mark": "○",
          "horseNumber": 7,
          "horseName": "ドリームガッサン",
          "probability": 0.17253960884664477
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "チュラヴェール",
          "probability": 0.08016484272511311
        },
        {
          "mark": "△",
          "horseNumber": 10,
          "horseName": "コシタンタン",
          "probability": 0.07984334229186406
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "ペイシャクロス",
          "probability": 0.06818242021137362
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "メモリーデイズ",
              "score": 0.5329262034959681
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ドリームガッサン",
              "score": 0.3538174124169857
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ペイシャクロス",
              "score": 0.2859852398040595
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "チュラヴェール",
              "score": 0.06044048110465686
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "コシタンタン",
              "score": 0.06023150582304497
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎メモリーデイズを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "メモリーデイズ",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "チュラヴェール",
              "score": 0.3106060606060606
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ジェッディンデデン",
              "score": 0.2424242424242425
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "コシタンタン",
              "score": 0.2424242424242425
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "ドリームガッサン",
              "score": 0.22348484848484845
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎メモリーデイズを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "メモリーデイズ",
              "score": 0.09847432287886183
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "レディリリス",
              "score": 0.07436289260741773
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "クリーンブーケ",
              "score": 0.07267626205089804
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "ジャストキュート",
              "score": 0.06741269788698144
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "マーマレードスカイ",
              "score": 0.06707266531266777
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎メモリーデイズを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "メモリーデイズ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率43.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 3,
      "raceId": "20260718-02-03",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.22831765503820514,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 8,
          "horseName": "リバーソニック",
          "probability": 0.22831765503820514
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "ウインガネーシャ",
          "probability": 0.2001017284236775
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "ポップアップ",
          "probability": 0.18786409017861688
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "ザンテソーロ",
          "probability": 0.15978104054821374
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "ハイランダー",
          "probability": 0.06423210025358111
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リバーソニック",
              "score": 0.39840647577483335
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ウインガネーシャ",
              "score": 0.37173279014205696
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ポップアップ",
              "score": 0.3637783252827676
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ザンテソーロ",
              "score": 0.11219100968967226
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ハイランダー",
              "score": 0.05008419849816106
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎リバーソニックを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リバーソニック",
              "score": 0.5871212121212122
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "マーゴットデウス",
              "score": 0.35606060606060597
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ザンテソーロ",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "フェンリル",
              "score": 0.3106060606060606
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ジャストグレース",
              "score": 0.29166666666666663
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎リバーソニックを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リバーソニック",
              "score": 0.10977239380219654
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ゴールデンボブ",
              "score": 0.08327241964571397
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "フェンリル",
              "score": 0.0805306747197921
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ザンテソーロ",
              "score": 0.07927076810525922
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ハイランダー",
              "score": 0.07910463579745423
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎リバーソニックを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 8,
        "topHorseName": "リバーソニック"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率22.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 4,
      "raceId": "20260718-02-04",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.574701417724732,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 8,
          "horseName": "ホウオウザロイヤル",
          "probability": 0.574701417724732
        },
        {
          "mark": "○",
          "horseNumber": 3,
          "horseName": "スッサンエア",
          "probability": 0.09687322929695817
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "レッドアイスピア",
          "probability": 0.08296286273304229
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "ニシノオールワン",
          "probability": 0.0682260339485899
        },
        {
          "mark": "☆",
          "horseNumber": 6,
          "horseName": "ガルフコースト",
          "probability": 0.060174829597069365
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウザロイヤル",
              "score": 0.6235559215210759
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "スッサンエア",
              "score": 0.30463426570968943
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "レッドアイスピア",
              "score": 0.2955925274431441
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "ニシノオールワン",
              "score": 0.052680255399916776
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "ガルフコースト",
              "score": 0.04744697257142842
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ホウオウザロイヤルを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "スッサンエア",
              "score": 0.375
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ホウオウザロイヤル",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "エコロデュラン",
              "score": 0.31666666666666665
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "メカニックバレエ",
              "score": 0.31666666666666665
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "レッドアイスピア",
              "score": 0.2583333333333333
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎スッサンエアを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウザロイヤル",
              "score": 0.12015319147641641
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ニシノオールワン",
              "score": 0.09735927894023962
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ガルフコースト",
              "score": 0.0811339782245727
            },
            {
              "mark": "△",
              "horseNumber": 16,
              "horseName": "ヨドノサファイア",
              "score": 0.08110850166886859
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "オリヒメボシ",
              "score": 0.07663350057445051
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ホウオウザロイヤルを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 8,
        "topHorseName": "ホウオウザロイヤル"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率57.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 5,
      "raceId": "20260718-02-05",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.34141404902092964,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 8,
          "horseName": "ホウオウライセンス",
          "probability": 0.34141404902092964
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "イトシサ",
          "probability": 0.2676910892687165
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "ペガサスウィンド",
          "probability": 0.11213086594646755
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "バンダムソレール",
          "probability": 0.07816105746067444
        },
        {
          "mark": "☆",
          "horseNumber": 14,
          "horseName": "メイショウセンドウ",
          "probability": 0.0474050313402209
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウライセンス",
              "score": 0.47191913186360424
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イトシサ",
              "score": 0.4156658746913323
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "バンダムソレール",
              "score": 0.292471354016105
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "ペガサスウィンド",
              "score": 0.08121839619853724
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "メイショウセンドウ",
              "score": 0.039146603704476916
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ホウオウライセンスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "モンロワイヤル",
              "score": 0.4455128205128205
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イトシサ",
              "score": 0.3525641025641026
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "レースクイーン",
              "score": 0.3525641025641026
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "ホウオウライセンス",
              "score": 0.3333333333333333
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ペガサスウィンド",
              "score": 0.3141025641025641
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎モンロワイヤルを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウライセンス",
              "score": 0.11682278738315431
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "チャーチルデュース",
              "score": 0.09576139129666972
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "イトシサ",
              "score": 0.0860244588171886
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ルージュプルーヴ",
              "score": 0.08484977661512516
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "ダノンアクション",
              "score": 0.07807220869067111
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ホウオウライセンスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 8,
        "topHorseName": "ホウオウライセンス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率34.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 6,
      "raceId": "20260718-02-06",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.5150127767659591,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "ショウナンマルチ",
          "probability": 0.5150127767659591
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "トリニタリオ",
          "probability": 0.17693631609301025
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "コスモクラシック",
          "probability": 0.10616214841447373
        },
        {
          "mark": "△",
          "horseNumber": 11,
          "horseName": "ジュラトリー",
          "probability": 0.05637186064994085
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "グローリーバローズ",
          "probability": 0.030763100718433398
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンマルチ",
              "score": 0.5847583048978735
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "トリニタリオ",
              "score": 0.35667527212712324
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "コスモクラシック",
              "score": 0.31067206313607454
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ジュラトリー",
              "score": 0.044975042755794885
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "グローリーバローズ",
              "score": 0.02832934880031504
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ショウナンマルチを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "コスモクラシック",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ジュラトリー",
              "score": 0.3106060606060606
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ショウナンマルチ",
              "score": 0.2878787878787879
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "トリニタリオ",
              "score": 0.2689393939393939
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ファインブライト",
              "score": 0.24621212121212122
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎コスモクラシックを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンマルチ",
              "score": 0.11615552967133369
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ジュラトリー",
              "score": 0.0796490391575768
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "グローリーバローズ",
              "score": 0.07958648302511635
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "テンユウ",
              "score": 0.07588374950823736
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ホウショウリュウ",
              "score": 0.07401283590950239
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ショウナンマルチを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 12,
        "topHorseName": "ショウナンマルチ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率51.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 7,
      "raceId": "20260718-02-07",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.42137455492845,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 8,
          "horseName": "パラダイスフェイス",
          "probability": 0.42137455492845
        },
        {
          "mark": "○",
          "horseNumber": 11,
          "horseName": "ストロングボーイ",
          "probability": 0.27056211348013753
        },
        {
          "mark": "▲",
          "horseNumber": 7,
          "horseName": "グランセレスト",
          "probability": 0.11553387893452878
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "エンダードラゴン",
          "probability": 0.05147356866583623
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "タイセイデクスター",
          "probability": 0.0409771587277402
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "パラダイスフェイス",
              "score": 0.5238934607034925
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ストロングボーイ",
              "score": 0.417532040428756
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "タイセイデクスター",
              "score": 0.26830181983969775
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "グランセレスト",
              "score": 0.08343035464077704
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "エンダードラゴン",
              "score": 0.041791152966126885
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎パラダイスフェイスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "エンダードラゴン",
              "score": 0.40705128205128205
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ディアスポラ",
              "score": 0.34935897435897434
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ストロングボーイ",
              "score": 0.34935897435897434
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "グランセレスト",
              "score": 0.3333333333333333
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "パラダイスフェイス",
              "score": 0.3141025641025641
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎エンダードラゴンを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "パラダイスフェイス",
              "score": 0.10425020945156861
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ストロングボーイ",
              "score": 0.0949254143956831
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "エンダードラゴン",
              "score": 0.09050170066580955
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "ウィズマスタング",
              "score": 0.07729508090609838
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "ディアスポラ",
              "score": 0.07601630937564778
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎パラダイスフェイスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 8,
        "topHorseName": "パラダイスフェイス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率42.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 8,
      "raceId": "20260718-02-08",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.2488297778146639,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "アーレムアレス",
          "probability": 0.2488297778146639
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "ワンダフルデイズ",
          "probability": 0.22934084131601853
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "マイネルゼウス",
          "probability": 0.20391699264244473
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "バルドル",
          "probability": 0.1361058382146956
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "マテンロウオリジン",
          "probability": 0.08833563195552524
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ワンダフルデイズ",
              "score": 0.39073821352207866
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "マイネルゼウス",
              "score": 0.38254604521758906
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "バルドル",
              "score": 0.33013546150621875
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "アーレムアレス",
              "score": 0.17007268891286487
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "マテンロウオリジン",
              "score": 0.06575149410442474
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ワンダフルデイズを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "バルドル",
              "score": 0.35606060606060597
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "マイネルゼウス",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "メイショウテンク",
              "score": 0.31439393939393934
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "ワンダフルデイズ",
              "score": 0.2916666666666667
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "アーレムアレス",
              "score": 0.24621212121212122
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎バルドルを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "マイネルゼウス",
              "score": 0.10652033625548947
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "アーレムアレス",
              "score": 0.09364385765229277
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "アスクファイアモア",
              "score": 0.07895756167443255
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "マテンロウオリジン",
              "score": 0.07353392193972486
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "バルドル",
              "score": 0.07238172623343132
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎マイネルゼウスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "アーレムアレス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率24.9%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 9,
      "raceId": "20260718-02-09",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.386325534881697,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "ドッグウッド",
          "probability": 0.386325534881697
        },
        {
          "mark": "○",
          "horseNumber": 7,
          "horseName": "マイネルシンベリン",
          "probability": 0.16598324866892827
        },
        {
          "mark": "▲",
          "horseNumber": 2,
          "horseName": "アドミラルシップ",
          "probability": 0.1303383142834271
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "グランセゾン",
          "probability": 0.08891096327147674
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ディーリライズ",
          "probability": 0.07194331041452894
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ドッグウッド",
              "score": 0.5011115976731031
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "マイネルシンベリン",
              "score": 0.34955577830147
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "グランセゾン",
              "score": 0.2994587927931265
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "アドミラルシップ",
              "score": 0.09305323761756094
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "ディーリライズ",
              "score": 0.05509648510277714
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ドッグウッドを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ゴーゴータカシ",
              "score": 0.5
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "マイネルシンベリン",
              "score": 0.4166666666666667
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "グランセゾン",
              "score": 0.33333333333333337
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "マカナアネラ",
              "score": 0.3333333333333333
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "アドミラルシップ",
              "score": 0.3125
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ゴーゴータカシを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ドッグウッド",
              "score": 0.10936476607300265
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ホウオウペトリュス",
              "score": 0.08620072665031474
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ハミルトン",
              "score": 0.0808707145187364
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "アドミラルシップ",
              "score": 0.07981442864103849
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "コウギョク",
              "score": 0.07679136031285243
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ドッグウッドを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "ドッグウッド"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率38.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 10,
      "raceId": "20260718-02-10",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.4610199947869181,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "アパッシメント",
          "probability": 0.4610199947869181
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "マナボニート",
          "probability": 0.32095154319559677
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "フードマン",
          "probability": 0.11424232327237072
        },
        {
          "mark": "△",
          "horseNumber": 8,
          "horseName": "マジカルフェアリー",
          "probability": 0.037147481394611236
        },
        {
          "mark": "☆",
          "horseNumber": 6,
          "horseName": "バシレウスシチー",
          "probability": 0.017040181969171578
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "アパッシメント",
              "score": 0.5496629966114968
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "マナボニート",
              "score": 0.4502851697438045
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "フードマン",
              "score": 0.3159241767937076
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "マジカルフェアリー",
              "score": 0.032479196239830636
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "バシレウスシチー",
              "score": 0.019409451613294857
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎アパッシメントを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "マナボニート",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "アパッシメント",
              "score": 0.3055555555555555
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "バシレウスシチー",
              "score": 0.2361111111111111
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "マジカルフェアリー",
              "score": 0.2361111111111111
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "エクストラバック",
              "score": 0.2361111111111111
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎マナボニートを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "アパッシメント",
              "score": 0.12523089044345
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "フミサウンド",
              "score": 0.08240301022905322
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "マジカルフェアリー",
              "score": 0.0771225448862057
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "サンドロナイト",
              "score": 0.07520457719430762
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "フードマン",
              "score": 0.07516271234735551
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アパッシメントを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 10,
        "topHorseName": "アパッシメント"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全10頭中の1位勝率46.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 11,
      "raceId": "20260718-02-11",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.42810749987248203,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "ウェイワードアクト",
          "probability": 0.42810749987248203
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "レヴォントゥレット",
          "probability": 0.2117803234763462
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "ヒルノハンブルク",
          "probability": 0.19379601673793456
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "ラタフォレスト",
          "probability": 0.03333483543841186
        },
        {
          "mark": "☆",
          "horseNumber": 8,
          "horseName": "ハグ",
          "probability": 0.03314543559966551
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ウェイワードアクト",
              "score": 0.5282698749171133
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "レヴォントゥレット",
              "score": 0.37932387692629166
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ヒルノハンブルク",
              "score": 0.36763407754632405
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "ラタフォレスト",
              "score": 0.030000976368301045
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ハグ",
              "score": 0.029877866473115914
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ウェイワードアクトを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "オウギノカナメ",
              "score": 0.3958333333333333
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ヒルノハンブルク",
              "score": 0.35416666666666663
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ウェイワードアクト",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "テーオードレフォン",
              "score": 0.27083333333333337
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "マーブルロック",
              "score": 0.25000000000000006
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎オウギノカナメを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ウェイワードアクト",
              "score": 0.1217387445314743
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ヒルノハンブルク",
              "score": 0.09227313565131266
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ラタフォレスト",
              "score": 0.08752026692168513
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "レヴォントゥレット",
              "score": 0.07941299095782754
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ハグ",
              "score": 0.07877968073952951
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ウェイワードアクトを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 10,
        "topHorseName": "ウェイワードアクト"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率42.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "raceNo": 12,
      "raceId": "20260718-02-12",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.40304080766190786,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "ラミアメンテ",
          "probability": 0.40304080766190786
        },
        {
          "mark": "○",
          "horseNumber": 3,
          "horseName": "ハーモニーソング",
          "probability": 0.2132577423021172
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "バレンタインビスタ",
          "probability": 0.18637665772322654
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "ルージュベルベット",
          "probability": 0.0703614392133653
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ランプローグ",
          "probability": 0.05638437022989632
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ラミアメンテ",
              "score": 0.5119765249802402
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハーモニーソング",
              "score": 0.3802841991630428
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ルージュベルベット",
              "score": 0.28740160215535404
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "バレンタインビスタ",
              "score": 0.12947816085343059
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "ランプローグ",
              "score": 0.04498317398276594
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ラミアメンテを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "バレンタインビスタ",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ランプローグ",
              "score": 0.3106060606060606
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ハーモニーソング",
              "score": 0.2424242424242425
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "アルバニー",
              "score": 0.2424242424242425
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "ルージュベルベット",
              "score": 0.20075757575757575
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎バレンタインビスタを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ラミアメンテ",
              "score": 0.12015319147641641
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "エコロハート",
              "score": 0.08024939631400703
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ランプローグ",
              "score": 0.0798549455173898
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "メイショウハッケイ",
              "score": 0.07818678093561375
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "バレンタインビスタ",
              "score": 0.07762535607778061
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ラミアメンテを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 1,
        "topHorseName": "ラミアメンテ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率40.3%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 1,
      "raceId": "20260718-03-01",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.4721926641114571,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "ショウナンハーヴェ",
          "probability": 0.4721926641114571
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "エーアイクワイ",
          "probability": 0.21379661289685828
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "シュネーバレン",
          "probability": 0.10156872787223319
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "サリードゥ",
          "probability": 0.07034168833799993
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "ウインリスノアール",
          "probability": 0.03662784211225946
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンハーヴェ",
              "score": 0.5569252316724471
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "エーアイクワイ",
              "score": 0.3806344650496245
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "シュネーバレン",
              "score": 0.3076863397836182
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "サリードゥ",
              "score": 0.05405543075303329
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ウインリスノアール",
              "score": 0.03214143070630198
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ショウナンハーヴェを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "サリードゥ",
              "score": 0.375
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "エーアイクワイ",
              "score": 0.2916666666666667
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ショウナンハーヴェ",
              "score": 0.2916666666666667
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "プリンセスロッティ",
              "score": 0.2708333333333333
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "イサチルサリーレ",
              "score": 0.25
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎サリードゥを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンハーヴェ",
              "score": 0.11681024812982983
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "エーオープリマ",
              "score": 0.07029564784369226
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "サリードゥ",
              "score": 0.07026295257619587
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "エーアイクワイ",
              "score": 0.06876627335127017
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "シュネーバレン",
              "score": 0.0672607886540067
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ショウナンハーヴェを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 12,
        "topHorseName": "ショウナンハーヴェ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率47.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 2,
      "raceId": "20260718-03-02",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.44457609519652863,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "ビップヴィーナス",
          "probability": 0.44457609519652863
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "サノノキセキ",
          "probability": 0.33166607641658624
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "スクリプトール",
          "probability": 0.08167945079308712
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "ウィナーズチェック",
          "probability": 0.06868959210436572
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "カペラテソーロ",
          "probability": 0.03248386131237395
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ビップヴィーナス",
              "score": 0.5389744618777437
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "サノノキセキ",
              "score": 0.45724961633744765
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ウィナーズチェック",
              "score": 0.28631490153450434
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "スクリプトール",
              "score": 0.06142497634883996
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "カペラテソーロ",
              "score": 0.0294478431863764
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ビップヴィーナスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "サノノキセキ",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "スクリプトール",
              "score": 0.3020833333333333
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ファウナード",
              "score": 0.29166666666666663
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ビップヴィーナス",
              "score": 0.22916666666666666
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "フレンデル",
              "score": 0.22916666666666666
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎サノノキセキを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ビップヴィーナス",
              "score": 0.11155276985944529
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "サノノキセキ",
              "score": 0.0821681423852831
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ファウナード",
              "score": 0.07842616855482003
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "スクリプトール",
              "score": 0.07417883388574566
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ウィナーズチェック",
              "score": 0.06854279972756334
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ビップヴィーナスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "ビップヴィーナス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全9頭中の1位勝率44.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 3,
      "raceId": "20260718-03-03",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.6007502560034458,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "ゲンテン",
          "probability": 0.6007502560034458
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "ニンジャトットリ",
          "probability": 0.1106137191705313
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "ハングローズ",
          "probability": 0.0809141882558138
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "エクスペクタント",
          "probability": 0.05885737296686855
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "ジャガーライズ",
          "probability": 0.03807766306043493
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ゲンテン",
              "score": 0.6404876664022398
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ニンジャトットリ",
              "score": 0.31356558412751195
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ハングローズ",
              "score": 0.29426088903294556
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "エクスペクタント",
              "score": 0.04659062576179789
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ジャガーライズ",
              "score": 0.033083814322616034
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ゲンテンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "プリンセスダーコ",
              "score": 0.3416666666666667
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ニンジャトットリ",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ゲンテン",
              "score": 0.31666666666666665
            },
            {
              "mark": "△",
              "horseNumber": 14,
              "horseName": "イデアジュアンイハ",
              "score": 0.3
            },
            {
              "mark": "☆",
              "horseNumber": 15,
              "horseName": "セントリアン",
              "score": 0.2833333333333333
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎プリンセスダーコを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ゲンテン",
              "score": 0.12270372289786773
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "サクラボーベル",
              "score": 0.07754440805109349
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクスペクタント",
              "score": 0.07608455095539966
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "ジャガーライズ",
              "score": 0.07553263159097912
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ハングローズ",
              "score": 0.06778617495278619
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ゲンテンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "ゲンテン"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率60.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 4,
      "raceId": "20260718-03-04",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.31024436127929284,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "リーデレクオーレ",
          "probability": 0.31024436127929284
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "オンナキュヌヴィ",
          "probability": 0.15325136609277956
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "ラウンドヒル",
          "probability": 0.12234631103096903
        },
        {
          "mark": "△",
          "horseNumber": 9,
          "horseName": "エンジェルサン",
          "probability": 0.12052597998426677
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ウインドオブヘヴン",
          "probability": 0.08166869485086874
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "リーデレクオーレ",
              "score": 0.45165883483154035
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "オンナキュヌヴィ",
              "score": 0.3412800546269733
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "エンジェルサン",
              "score": 0.32000855365644
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ラウンドヒル",
              "score": 0.0878584355034632
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "ウインドオブヘヴン",
              "score": 0.061417984986398014
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎リーデレクオーレを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "エンジェルサン",
              "score": 0.35
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハイティー",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "リーデレクオーレ",
              "score": 0.31666666666666665
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ラウンドヒル",
              "score": 0.25
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ジーティートゥーリ",
              "score": 0.22499999999999998
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎エンジェルサンを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "リーデレクオーレ",
              "score": 0.10051554722179053
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハイティー",
              "score": 0.09736769413718142
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "オンナキュヌヴィ",
              "score": 0.07389920174425661
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ラウンドヒル",
              "score": 0.07221104438570192
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "フロステリオン",
              "score": 0.07189914597784457
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎リーデレクオーレを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 12,
        "topHorseName": "リーデレクオーレ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率31.0%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 5,
      "raceId": "20260718-03-05",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.5104464320475642,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "シルクドマルス",
          "probability": 0.5104464320475642
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "サウンズオーサム",
          "probability": 0.15663846902731182
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "マリナーヴァレイ",
          "probability": 0.10464852003582452
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "ドナリー",
          "probability": 0.07704620695268027
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "フェリシタル",
          "probability": 0.04394806842065042
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "シルクドマルス",
              "score": 0.5817901808309167
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "サウンズオーサム",
              "score": 0.34348167153441933
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ドナリー",
              "score": 0.2917467011859088
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "マリナーヴァレイ",
              "score": 0.07635487135661927
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "フェリシタル",
              "score": 0.0368995778067561
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎シルクドマルスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ドナリー",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "フェリシタル",
              "score": 0.32738095238095233
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "シルクドマルス",
              "score": 0.31547619047619047
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "モンサンアミュザン",
              "score": 0.30952380952380953
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "クレイターレイク",
              "score": 0.30952380952380953
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ドナリーを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "シルクドマルス",
              "score": 0.1097887611496523
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "マリナーヴァレイ",
              "score": 0.08721219922558894
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "フェリシタル",
              "score": 0.08150870697512488
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "クレイターレイク",
              "score": 0.07283449769294101
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "ウイニングレイ",
              "score": 0.07182133440659416
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎シルクドマルスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "シルクドマルス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率51.0%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 6,
      "raceId": "20260718-03-06",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.2902675888497496,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "スクイーズアウト",
          "probability": 0.2902675888497496
        },
        {
          "mark": "○",
          "horseNumber": 15,
          "horseName": "アラビアンドリーム",
          "probability": 0.2776358196242834
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "テンオンスゴールド",
          "probability": 0.09098602230568786
        },
        {
          "mark": "△",
          "horseNumber": 5,
          "horseName": "カシマライフウ",
          "probability": 0.07278484595929266
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "サンタピア",
          "probability": 0.06076037411768267
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "スクイーズアウト",
              "score": 0.43867393275233724
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "アラビアンドリーム",
              "score": 0.42212994942245086
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "サンタピア",
              "score": 0.28116090984316033
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "テンオンスゴールド",
              "score": 0.06747424783203045
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "カシマライフウ",
              "score": 0.05564348320687356
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎スクイーズアウトを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "アデルフィー",
              "score": 0.3511904761904762
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "テンオンスゴールド",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "スクイーズアウト",
              "score": 0.31547619047619047
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "オートカリテ",
              "score": 0.3095238095238095
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "ティンバーライン",
              "score": 0.25595238095238093
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎アデルフィーを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "スクイーズアウト",
              "score": 0.10111579090290246
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ベイツリー",
              "score": 0.08064911551996422
            },
            {
              "mark": "▲",
              "horseNumber": 15,
              "horseName": "アラビアンドリーム",
              "score": 0.08023110697736491
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "アデルフィー",
              "score": 0.07432777505483677
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "オートカリテ",
              "score": 0.07084207412379774
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎スクイーズアウトを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "スクイーズアウト"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率29.0%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 7,
      "raceId": "20260718-03-07",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.5532811255592249,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "アッシズオブローズ",
          "probability": 0.5532811255592249
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "スチールギターラグ",
          "probability": 0.07868481986583396
        },
        {
          "mark": "▲",
          "horseNumber": 13,
          "horseName": "マイネルリーヒム",
          "probability": 0.06584724659246334
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "セキテイリノ",
          "probability": 0.057459978398940764
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "ベルトラッキ",
          "probability": 0.05285622293210181
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アッシズオブローズ",
              "score": 0.6096327316134962
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "マイネルリーヒム",
              "score": 0.28446737695176777
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ブライトエアリー",
              "score": 0.27374460149974
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "スチールギターラグ",
              "score": 0.05947846624612541
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "セキテイリノ",
              "score": 0.04568231929264483
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎アッシズオブローズを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "セキテイリノ",
              "score": 0.475
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "スチールギターラグ",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "アッシズオブローズ",
              "score": 0.31666666666666665
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "マイネルオラクル",
              "score": 0.30833333333333335
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "ブライトエアリー",
              "score": 0.29166666666666663
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎セキテイリノを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アッシズオブローズ",
              "score": 0.12270372289786773
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "スチールギターラグ",
              "score": 0.07949821603375952
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ベルトラッキ",
              "score": 0.07928069085562213
            },
            {
              "mark": "△",
              "horseNumber": 14,
              "horseName": "サヴマ",
              "score": 0.07228085126300592
            },
            {
              "mark": "☆",
              "horseNumber": 15,
              "horseName": "シーサンタナ",
              "score": 0.07046258539882565
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アッシズオブローズを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 11,
        "topHorseName": "アッシズオブローズ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率55.3%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 8,
      "raceId": "20260718-03-08",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.41888632514799995,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "コックオーヴァン",
          "probability": 0.41888632514799995
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "サムハラ",
          "probability": 0.12861741134555174
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "ブライティアブーケ",
          "probability": 0.1223017780623515
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "ルシェロアズーリ",
          "probability": 0.07708614129485819
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ダノンゴーイチ",
          "probability": 0.0657513282571815
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コックオーヴァン",
              "score": 0.5222761113462
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブライティアブーケ",
              "score": 0.32116282240719507
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ココボロ",
              "score": 0.26124513956176
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "サムハラ",
              "score": 0.09193465070794196
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "ルシェロアズーリ",
              "score": 0.058439325174991154
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎コックオーヴァンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ルシェロアズーリ",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブライティアブーケ",
              "score": 0.31666666666666665
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "コックオーヴァン",
              "score": 0.31666666666666665
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "サムハラ",
              "score": 0.2833333333333333
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "シークレットイスラ",
              "score": 0.23333333333333328
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ルシェロアズーリを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コックオーヴァン",
              "score": 0.1024816669158699
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ブルズアイプリンス",
              "score": 0.08749981849084287
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ミセスリリー",
              "score": 0.07273174678082654
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ブライティアブーケ",
              "score": 0.07164118048292546
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "ルシェロアズーリ",
              "score": 0.07026295257619587
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎コックオーヴァンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 12,
        "topHorseName": "コックオーヴァン"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率41.9%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 9,
      "raceId": "20260718-03-09",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.32293278426863486,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "ドリームプレミア",
          "probability": 0.32293278426863486
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "リュクスパトロール",
          "probability": 0.2126551954595476
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "ノリマル",
          "probability": 0.20704876677572664
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "パッセージピーク",
          "probability": 0.08565652888619757
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "オブラプリーマ",
          "probability": 0.0672284211782839
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ドリームプレミア",
              "score": 0.45157297644127925
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "リュクスパトロール",
              "score": 0.3882258770487059
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ノリマル",
              "score": 0.37624836507088893
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "パッセージピーク",
              "score": 0.06401007710936175
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "オブラプリーマ",
              "score": 0.05203180709921787
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ドリームプレミアを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ノリマル",
              "score": 0.4962121212121212
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "オメガストリーム",
              "score": 0.3787878787878788
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "リュクスパトロール",
              "score": 0.33712121212121215
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "ドリームプレミア",
              "score": 0.31439393939393934
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ビリングス",
              "score": 0.2878787878787879
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ノリマルを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リュクスパトロール",
              "score": 0.10473674896204914
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ドリームプレミア",
              "score": 0.09122434622997351
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "オブラプリーマ",
              "score": 0.07861145823621592
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "パッセージピーク",
              "score": 0.07746852265608645
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "ノリマル",
              "score": 0.07234442442619667
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎リュクスパトロールを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "ドリームプレミア"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率32.3%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 10,
      "raceId": "20260718-03-10",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.19507594667361763,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "レッドベルダンス",
          "probability": 0.19507594667361763
        },
        {
          "mark": "○",
          "horseNumber": 15,
          "horseName": "モリノアミーゴ",
          "probability": 0.19067115067359713
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "オーケーマヒナ",
          "probability": 0.18018712289597816
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "グロスビーク",
          "probability": 0.09384884265937427
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "タケルハーロック",
          "probability": 0.08989857800394385
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "モリノアミーゴ",
              "score": 0.37393624793783814
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "レッドベルダンス",
              "score": 0.3684660320045181
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "オーケーマヒナ",
              "score": 0.3587882965490524
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "グロスビーク",
              "score": 0.06933508106192661
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "タケルハーロック",
              "score": 0.06676740903589684
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎モリノアミーゴを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "レッドベルダンス",
              "score": 0.34523809523809523
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "モリノアミーゴ",
              "score": 0.34523809523809523
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "オーケーマヒナ",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "ウインハルモニア",
              "score": 0.31547619047619047
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ピコシー",
              "score": 0.30952380952380953
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎レッドベルダンスを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "モリノアミーゴ",
              "score": 0.10491369249028747
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "グロスビーク",
              "score": 0.09625753615873626
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ヴァルドルチャ",
              "score": 0.0794538358508548
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "マナエトレ",
              "score": 0.0723786951078202
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ピコシー",
              "score": 0.07215759517471335
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎モリノアミーゴを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "レッドベルダンス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率19.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 11,
      "raceId": "20260718-03-11",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.4120680570943708,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "ミラビリスマジック",
          "probability": 0.4120680570943708
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "ワイドアラジン",
          "probability": 0.1445467527026194
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "コスモアンソロジー",
          "probability": 0.13548319409562343
        },
        {
          "mark": "△",
          "horseNumber": 8,
          "horseName": "ホウオウスーペリア",
          "probability": 0.07684285216904353
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "コンドゥイア",
          "probability": 0.05847533253845804
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ミラビリスマジック",
              "score": 0.517844237111341
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワイドアラジン",
              "score": 0.33562205592336924
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ホウオウスーペリア",
              "score": 0.2916145205765449
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "コスモアンソロジー",
              "score": 0.09639740949548856
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "コンドゥイア",
              "score": 0.04634229948333106
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ミラビリスマジックを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "アマイ",
              "score": 0.35
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "コスモアンソロジー",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "コンドゥイア",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 15,
              "horseName": "サヴォンリンナ",
              "score": 0.26666666666666666
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "ワイドアラジン",
              "score": 0.22499999999999998
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎アマイを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ミラビリスマジック",
              "score": 0.11981335192766679
            },
            {
              "mark": "○",
              "horseNumber": 16,
              "horseName": "フォルラニーニ",
              "score": 0.08353496868014447
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ホウオウスーペリア",
              "score": 0.08243365354585827
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "ヴォンフレ",
              "score": 0.08064911551996422
            },
            {
              "mark": "☆",
              "horseNumber": 15,
              "horseName": "サヴォンリンナ",
              "score": 0.07706668729344912
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ミラビリスマジックを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "ミラビリスマジック"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率41.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "raceNo": 12,
      "raceId": "20260718-03-12",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.4362369302468521,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "ロイヤルスパイア",
          "probability": 0.4362369302468521
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "ソニックブレイカー",
          "probability": 0.24445613640818697
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "アンプイットアップ",
          "probability": 0.132874414813743
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "ベルゼビュート",
          "probability": 0.05712783948741744
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "ディヴァインスカイ",
          "probability": 0.045083680625318444
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ロイヤルスパイア",
              "score": 0.5335540046604539
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ソニックブレイカー",
              "score": 0.40056315533198816
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "アンプイットアップ",
              "score": 0.3280350362955996
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "ベルゼビュート",
              "score": 0.04546642900015467
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ディヴァインスカイ",
              "score": 0.03763772573979032
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ロイヤルスパイアを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ソニックブレイカー",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ディヴァインスカイ",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ロイヤルスパイア",
              "score": 0.31666666666666665
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ベアアッコチャン",
              "score": 0.27499999999999997
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "アンプイットアップ",
              "score": 0.26666666666666666
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ソニックブレイカーを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ロイヤルスパイア",
              "score": 0.11594539269165065
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ソニックブレイカー",
              "score": 0.08527642892091619
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "エコロカディス",
              "score": 0.07637631032927993
            },
            {
              "mark": "△",
              "horseNumber": 16,
              "horseName": "アイアンナックル",
              "score": 0.07234442442619667
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "トワイライトサイト",
              "score": 0.06985965579445344
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ロイヤルスパイアを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "ロイヤルスパイア"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率43.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 1,
      "raceId": "20260718-10-01",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.24436735865467374,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "セイウンパシュート",
          "probability": 0.24436735865467374
        },
        {
          "mark": "○",
          "horseNumber": 11,
          "horseName": "タイセイレスポンス",
          "probability": 0.22866044806415337
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "セイフウサツキ",
          "probability": 0.20660678799554255
        },
        {
          "mark": "△",
          "horseNumber": 6,
          "horseName": "メイショウトム",
          "probability": 0.16626465985478614
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "コイヌール",
          "probability": 0.05298755881380675
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "セイウンパシュート",
              "score": 0.4088387831255379
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "セイフウサツキ",
              "score": 0.3759610788637693
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "メイショウトム",
              "score": 0.3497386955722776
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "タイセイレスポンス",
              "score": 0.15696262457503302
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "コイヌール",
              "score": 0.04277524656230772
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎セイウンパシュートを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "メイショウトム",
              "score": 0.35606060606060597
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "セイウンパシュート",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アドアプローズ",
              "score": 0.31439393939393934
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "コイヌール",
              "score": 0.2424242424242425
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "タイセイレスポンス",
              "score": 0.22348484848484848
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎メイショウトムを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "セイウンパシュート",
              "score": 0.09687043084330384
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "タイセイレスポンス",
              "score": 0.08798570771849291
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "セイフウサツキ",
              "score": 0.08178818122848285
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "トゥデイイズザデイ",
              "score": 0.07797556443103554
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "エーオーキング",
              "score": 0.07295915649963097
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎セイウンパシュートを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "セイウンパシュート"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率24.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 2,
      "raceId": "20260718-10-02",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.26405885352314434,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "ブレイクガール",
          "probability": 0.26405885352314434
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "プリメラエストレラ",
          "probability": 0.2375590583506217
        },
        {
          "mark": "▲",
          "horseNumber": 10,
          "horseName": "ニシノフランケン",
          "probability": 0.2095567203199967
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "アシャカブラーヴ",
          "probability": 0.06353797340122898
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "イザベル",
          "probability": 0.05885731457932746
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ブレイクガール",
              "score": 0.41330492145671044
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "プリメラエストレラ",
              "score": 0.39608005459457074
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ニシノフランケン",
              "score": 0.38621186820799785
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "アシャカブラーヴ",
              "score": 0.04963301604413217
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "イザベル",
              "score": 0.04659058780989618
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ブレイクガールを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "プリメラエストレラ",
              "score": 0.3666666666666667
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "プリマアルバ",
              "score": 0.3416666666666667
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "イザベル",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "ニシノフランケン",
              "score": 0.2916666666666667
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "アシャカブラーヴ",
              "score": 0.2833333333333333
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎プリメラエストレラを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ニシノフランケン",
              "score": 0.10285725364182045
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ブレイクガール",
              "score": 0.08256996449817555
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "フランヴィア",
              "score": 0.07748139285062622
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "プリマアルバ",
              "score": 0.07595863016275496
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "プリメラエストレラ",
              "score": 0.0747974247974248
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ニシノフランケンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "ブレイクガール"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全11頭中の1位勝率26.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 3,
      "raceId": "20260718-10-03",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.48611709166075556,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "サトノロザリー",
          "probability": 0.48611709166075556
        },
        {
          "mark": "○",
          "horseNumber": 14,
          "horseName": "メイワキラリ",
          "probability": 0.16389652418890222
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "モズオサキニ",
          "probability": 0.08906550512410716
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "メイショウマドンナ",
          "probability": 0.0701404465238735
        },
        {
          "mark": "☆",
          "horseNumber": 1,
          "horseName": "シュタルク",
          "probability": 0.04642888219171734
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノロザリー",
              "score": 0.5659761095794911
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "メイワキラリ",
              "score": 0.34819940738945304
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "モズオサキニ",
              "score": 0.29955924499733627
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "メイショウマドンナ",
              "score": 0.0539246235738511
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "シュタルク",
              "score": 0.0385121067579496
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎サトノロザリーを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノロザリー",
              "score": 0.37179487179487175
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "メイワキラリ",
              "score": 0.3525641025641026
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "スズカローズキング",
              "score": 0.27564102564102566
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "モズオサキニ",
              "score": 0.23397435897435898
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "メイショウマドンナ",
              "score": 0.23397435897435898
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎サトノロザリーを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノロザリー",
              "score": 0.11608302598559718
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "スズカローズキング",
              "score": 0.07246642246642246
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ディアデムドール",
              "score": 0.07240958691208989
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "アルウラメファ",
              "score": 0.07048272584535309
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "モズオサキニ",
              "score": 0.06993484023209807
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎サトノロザリーを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "サトノロザリー"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率48.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 4,
      "raceId": "20260718-10-04",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.3419299763628867,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "アトラクティーボ",
          "probability": 0.3419299763628867
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "スマイルスルー",
          "probability": 0.2496403708503059
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ヴァレッタカズマ",
          "probability": 0.19562240290696076
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "コンテナワールド",
          "probability": 0.10179223960328548
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "トーアモルペウス",
          "probability": 0.03779973816250873
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "アトラクティーボ",
              "score": 0.46392115130254297
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "スマイルスルー",
              "score": 0.40393290771936546
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ヴァレッタカズマ",
              "score": 0.3771545618895245
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "コンテナワールド",
              "score": 0.0744982890754689
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "トーアモルペウス",
              "score": 0.032903163138964006
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎アトラクティーボを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ヴァレッタカズマ",
              "score": 0.43452380952380953
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "コンテナワールド",
              "score": 0.3988095238095238
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "アトラクティーボ",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "トーアモルペウス",
              "score": 0.22023809523809523
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "オールザワールド",
              "score": 0.18452380952380953
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ヴァレッタカズマを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ヴァレッタカズマ",
              "score": 0.10213599016365531
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "スマイルスルー",
              "score": 0.08405305291901081
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "オールザワールド",
              "score": 0.0767341976488179
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "トーアモルペウス",
              "score": 0.07485795685795686
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "マテンロウジョイ",
              "score": 0.07378558511217903
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ヴァレッタカズマを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 7,
        "topHorseName": "アトラクティーボ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全8頭中の1位勝率34.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 5,
      "raceId": "20260718-10-05",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.781518020139365,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "ウインガラハッド",
          "probability": 0.781518020139365
        },
        {
          "mark": "○",
          "horseNumber": 3,
          "horseName": "ハマナスノサクコロ",
          "probability": 0.1164702886402419
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ナムラメアリー",
          "probability": 0.044355307894467906
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "タナコクシテンホウ",
          "probability": 0.032580673691826885
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "キシュウマミー",
          "probability": 0.012408469852025976
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ウインガラハッド",
              "score": 0.7579867130905873
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハマナスノサクコロ",
              "score": 0.31737235428282384
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ナムラメアリー",
              "score": 0.03716428346473747
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "タナコクシテンホウ",
              "score": 0.02951077123302081
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "キシュウマミー",
              "score": 0.016398838737150215
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ウインガラハッドを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "キシュウマミー",
              "score": 0.33333333333333337
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ウインガラハッド",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ナムラメアリー",
              "score": 0.2916666666666667
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "ハマナスノサクコロ",
              "score": 0.20833333333333331
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "タナコクシテンホウ",
              "score": 0.08333333333333334
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎キシュウマミーを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ウインガラハッド",
              "score": 0.11218493847055268
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハマナスノサクコロ",
              "score": 0.073012527414357
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "マルモタワー",
              "score": 0.07009926299567469
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "タナコクシテンホウ",
              "score": 0.06959245901828891
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ナムラメアリー",
              "score": 0.06878884734866714
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ウインガラハッドを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 1,
        "topHorseName": "ウインガラハッド"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全7頭中の1位勝率78.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 6,
      "raceId": "20260718-10-06",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.5120429550854679,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "キープシャイニング",
          "probability": 0.5120429550854679
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "キングズテイル",
          "probability": 0.13811683978406633
        },
        {
          "mark": "▲",
          "horseNumber": 13,
          "horseName": "ラクホマレ",
          "probability": 0.08909910512005152
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "リテラシー",
          "probability": 0.0749100858396684
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "ルクスドリーム",
          "probability": 0.06519780703726179
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "キープシャイニング",
              "score": 0.5828279208055542
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "キングズテイル",
              "score": 0.33144261252630974
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "リテラシー",
              "score": 0.2903582224624511
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "ラクホマレ",
              "score": 0.06624775166136682
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ルクスドリーム",
              "score": 0.0507119079075535
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎キープシャイニングを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "リテラシー",
              "score": 0.41666666666666663
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "キングズテイル",
              "score": 0.35416666666666663
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "キープシャイニング",
              "score": 0.3333333333333333
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "ゼンノゾンターク",
              "score": 0.2916666666666667
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "ムソウテンセイ",
              "score": 0.20833333333333331
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎リテラシーを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "キープシャイニング",
              "score": 0.11222383038504934
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "ラクホマレ",
              "score": 0.0984263870001656
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "コパノルーカス",
              "score": 0.08462443524496686
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "ルクスドリーム",
              "score": 0.07695595633451977
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "リテラシー",
              "score": 0.07548360765134927
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎キープシャイニングを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "キープシャイニング"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率51.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 7,
      "raceId": "20260718-10-07",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.49642470613463097,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "シュプリームレルム",
          "probability": 0.49642470613463097
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "ネッカーズルム",
          "probability": 0.15801119630228733
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "ゴールデンテティス",
          "probability": 0.11157379367959007
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "ワンダーリュクス",
          "probability": 0.04893915425998855
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "ヒロウッドテール",
          "probability": 0.04633852668206855
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "シュプリームレルム",
              "score": 0.5726760589875102
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ネッカーズルム",
              "score": 0.3443739442631534
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴールデンテティス",
              "score": 0.31418963255840016
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ワンダーリュクス",
              "score": 0.04014378360232589
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ヒロウッドテール",
              "score": 0.03845337567667789
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎シュプリームレルムを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ゴールデンテティス",
              "score": 0.34935897435897434
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ジリアート",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ネッカーズルム",
              "score": 0.2948717948717949
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "チヨ",
              "score": 0.2916666666666667
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ヒロウッドテール",
              "score": 0.2564102564102564
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ゴールデンテティスを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "シュプリームレルム",
              "score": 0.11701339222007077
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "エイシンミスリル",
              "score": 0.07877039141646872
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ジリアート",
              "score": 0.07525261468743653
            },
            {
              "mark": "△",
              "horseNumber": 14,
              "horseName": "ジージージェット",
              "score": 0.07291475047095686
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "ネッカーズルム",
              "score": 0.07088729519011706
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎シュプリームレルムを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "シュプリームレルム"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率49.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 8,
      "raceId": "20260718-10-08",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.5190907633084596,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 3,
          "horseName": "フウセン",
          "probability": 0.5190907633084596
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "ワンダフルボンド",
          "probability": 0.2210603174126365
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ノンブルドール",
          "probability": 0.1245152603201263
        },
        {
          "mark": "△",
          "horseNumber": 9,
          "horseName": "ゴールドアクセス",
          "probability": 0.05121046998914013
        },
        {
          "mark": "☆",
          "horseNumber": 1,
          "horseName": "ダノンアトラス",
          "probability": 0.025248603723553743
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "フウセン",
              "score": 0.5874089961504987
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ノンブルドール",
              "score": 0.32260158587474874
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ゴールドアクセス",
              "score": 0.2749534721596077
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ワンダフルボンド",
              "score": 0.15202253965154705
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ダノンアトラス",
              "score": 0.024744925753643263
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎フウセンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ノンブルドール",
              "score": 0.48611111111111105
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワンダフルボンド",
              "score": 0.3888888888888889
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "フウセン",
              "score": 0.375
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "スリーラーケン",
              "score": 0.375
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "パラディオン",
              "score": 0.2916666666666667
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ノンブルドールを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "フウセン",
              "score": 0.11924657096458045
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワンダフルボンド",
              "score": 0.10102483734996258
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ダノンアトラス",
              "score": 0.08916535592941328
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "ダノンハドソン",
              "score": 0.08741402648620318
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ノンブルドール",
              "score": 0.07788627143465852
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎フウセンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 3,
        "topHorseName": "フウセン"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全10頭中の1位勝率51.9%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 9,
      "raceId": "20260718-10-09",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.4130579096295864,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 16,
          "horseName": "カエリールークス",
          "probability": 0.4130579096295864
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "タカモリ",
          "probability": 0.17569249765090336
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "タカヨシ",
          "probability": 0.10327886257702243
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "リエーヴェ",
          "probability": 0.06906338718365948
        },
        {
          "mark": "☆",
          "horseNumber": 17,
          "horseName": "スイトーヨ",
          "probability": 0.04478540215445659
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "カエリールークス",
              "score": 0.5184876412592312
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "タカモリ",
              "score": 0.3558667901397538
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "タカヨシ",
              "score": 0.30879792734173117
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "リエーヴェ",
              "score": 0.053224535002711994
            },
            {
              "mark": "☆",
              "horseNumber": 17,
              "horseName": "スイトーヨ",
              "score": 0.037443844733730115
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎カエリールークスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "タカヨシ",
              "score": 0.3357843137254901
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "トシミチ",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "タカモリ",
              "score": 0.31862745098039214
            },
            {
              "mark": "△",
              "horseNumber": 16,
              "horseName": "カエリールークス",
              "score": 0.31862745098039214
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "ルーストカール",
              "score": 0.2892156862745098
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎タカヨシを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "カエリールークス",
              "score": 0.11726870343284286
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "スイトーヨ",
              "score": 0.0905907695538124
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "バミューダボーイ",
              "score": 0.07417582417582418
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "タカヨシ",
              "score": 0.07417582417582418
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "ワッザイカ",
              "score": 0.07371696733943219
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎カエリールークスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 16,
        "topHorseName": "カエリールークス"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全18頭中の1位勝率41.3%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 10,
      "raceId": "20260718-10-10",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.46361640819591043,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "ワイドクリーガー",
          "probability": 0.46361640819591043
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "コスモストーム",
          "probability": 0.15994267245705227
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "タマモジャスミン",
          "probability": 0.09912832821621548
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "ワンダーカモン",
          "probability": 0.09454950854689544
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "タガノヘラクレス",
          "probability": 0.07793283428346519
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ワイドクリーガー",
              "score": 0.5513506653273418
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "コスモストーム",
              "score": 0.3456294037637506
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ワンダーカモン",
              "score": 0.30312384722214863
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "タマモジャスミン",
              "score": 0.0727667466738734
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "タガノヘラクレス",
              "score": 0.0589896756175857
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ワイドクリーガーを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ワンダーカモン",
              "score": 0.678030303030303
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "コスモストーム",
              "score": 0.45075757575757575
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "タマモジャスミン",
              "score": 0.3787878787878788
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ワイドクリーガー",
              "score": 0.3598484848484848
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "タマモナポリ",
              "score": 0.21969696969696967
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ワンダーカモンを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ワイドクリーガー",
              "score": 0.11053053336137074
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ワンダーカモン",
              "score": 0.0887225144247581
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "タガノヘラクレス",
              "score": 0.07447421992175407
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "メイショウザンゲツ",
              "score": 0.07090982807820949
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ホウショウマリス",
              "score": 0.06917444758208344
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ワイドクリーガーを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "ワイドクリーガー"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率46.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 11,
      "raceId": "20260718-10-11",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.6877101336565817,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "コウセキ",
          "probability": 0.6877101336565817
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "ベイビーキッス",
          "probability": 0.08818966818986035
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "ロードトレイル",
          "probability": 0.060178927423721953
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "アイルシャイン",
          "probability": 0.052834801551087086
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "トーラスシャイン",
          "probability": 0.03391608911915342
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "コウセキ",
              "score": 0.6970115868767781
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ベイビーキッス",
              "score": 0.29898995099007586
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アイルシャイン",
              "score": 0.2760092876748732
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "ロードトレイル",
              "score": 0.047449636158752605
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "トーラスシャイン",
              "score": 0.030378791260783054
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎コウセキを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "コウセキ",
              "score": 0.3333333333333333
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ベイビーキッス",
              "score": 0.3106060606060606
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ロードトレイル",
              "score": 0.2878787878787879
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "ジュンヴァンケット",
              "score": 0.2878787878787879
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "トーラスシャイン",
              "score": 0.20075757575757575
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎コウセキを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "コウセキ",
              "score": 0.11556876772275487
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "リチャードバローズ",
              "score": 0.08439291119945708
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ロードトレイル",
              "score": 0.0812283798840271
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "ジュンヴァンケット",
              "score": 0.08083967894444581
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "エスペシャリー",
              "score": 0.07553528298476538
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎コウセキを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "コウセキ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率68.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "raceNo": 12,
      "raceId": "20260718-10-12",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.5759251745066594,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "バートラガッツ",
          "probability": 0.5759251745066594
        },
        {
          "mark": "○",
          "horseNumber": 7,
          "horseName": "ブラックレジェンド",
          "probability": 0.15717659834310874
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "ジューンセクレタ",
          "probability": 0.06424090591116288
        },
        {
          "mark": "△",
          "horseNumber": 8,
          "horseName": "アメリカンスタイル",
          "probability": 0.0479261403878568
        },
        {
          "mark": "☆",
          "horseNumber": 13,
          "horseName": "ヨカオウ",
          "probability": 0.04128323548208549
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "バートラガッツ",
              "score": 0.6243513634293286
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ブラックレジェンド",
              "score": 0.3438314555896873
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "モズプリヴェール",
              "score": 0.2677843495497191
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "ジューンセクレタ",
              "score": 0.050089922175589205
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "アメリカンスタイル",
              "score": 0.039485324585440254
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎バートラガッツを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ジューンセクレタ",
              "score": 0.4455128205128205
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "バートラガッツ",
              "score": 0.3333333333333333
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ブラックレジェンド",
              "score": 0.3141025641025641
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "アメリカンスタイル",
              "score": 0.2948717948717949
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ミッキーコンドル",
              "score": 0.27243589743589747
            }
          ],
          "opinion": "脚質・位置取り・想定ペースを重視。◎ジューンセクレタを最上位に評価。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "バートラガッツ",
              "score": 0.11983236800946868
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ミッキーコンドル",
              "score": 0.09270596729779235
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フランキーバローズ",
              "score": 0.08438850084920957
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "アメリカンスタイル",
              "score": 0.08387853981376818
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "ジューンセクレタ",
              "score": 0.077221638283293
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎バートラガッツを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "バートラガッツ"
      },
      "topTicket": null,
      "comment": "3人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率57.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 1,
      "raceId": "20260719-02-01",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.21606023590766243,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "ステラトップガン",
          "probability": 0.21606023590766243
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "リーゼントエース",
          "probability": 0.21117566583849626
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "リアルジャパン",
          "probability": 0.16052405256554478
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ショパンコンクール",
          "probability": 0.11609507393558118
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "タイフーンナイン",
          "probability": 0.10623067700811044
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ステラトップガン",
              "score": 0.14941351231433955
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "リーゼントエース",
              "score": 0.14623854176938153
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "リアルジャパン",
              "score": 0.11331499314196308
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ショパンコンクール",
              "score": 0.08443615703248673
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "タイフーンナイン",
              "score": 0.07802429902963076
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ステラトップガンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "リーゼントエース",
              "score": 0.08304142258127904
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "タイフーンナイン",
              "score": 0.08090386654680258
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ステラトップガン",
              "score": 0.07947184526575186
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "リアルジャパン",
              "score": 0.07588620273800435
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "アイルドフルール",
              "score": 0.0750518840675053
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎リーゼントエースを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 1,
        "topHorseName": "ステラトップガン"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全8頭中の1位勝率21.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 2,
      "raceId": "20260719-02-02",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.2079430064196972,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "ジャーナーリア",
          "probability": 0.2079430064196972
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "トルークマクト",
          "probability": 0.11877762480322394
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "エコロセレナ",
          "probability": 0.11599503564307832
        },
        {
          "mark": "△",
          "horseNumber": 6,
          "horseName": "ホワイトラバーズ",
          "probability": 0.10210218219288297
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "ミスチヴマリアンヌ",
          "probability": 0.0952170275418086
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ジャーナーリア",
              "score": 0.14413731314716216
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トルークマクト",
              "score": 0.08617981509645453
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "エコロセレナ",
              "score": 0.08437113214235989
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "ホワイトラバーズ",
              "score": 0.07534077739973291
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "ミスチヴマリアンヌ",
              "score": 0.07086542687653456
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ジャーナーリアを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ジャーナーリア",
              "score": 0.0785890012820849
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トルークマクト",
              "score": 0.07839448904489753
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "エコロセレナ",
              "score": 0.07639773310596969
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "ミスチヴマリアンヌ",
              "score": 0.07237626580209129
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "ホワイトラバーズ",
              "score": 0.06920227285510908
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ジャーナーリアを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 4,
        "topHorseName": "ジャーナーリア"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全10頭中の1位勝率20.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 3,
      "raceId": "20260719-02-03",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10679380760435737,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "ニシノモリミチ",
          "probability": 0.10679380760435737
        },
        {
          "mark": "○",
          "horseNumber": 11,
          "horseName": "ホウオウファラオ",
          "probability": 0.1053700753634897
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "サクセスゴールド",
          "probability": 0.0959510618987251
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "キセログラフィカ",
          "probability": 0.08673949943775663
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "スマートコーラル",
          "probability": 0.0815749088183316
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ニシノモリミチ",
              "score": 0.07839033391719126
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ホウオウファラオ",
              "score": 0.07746490796062729
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "サクセスゴールド",
              "score": 0.0713425492085303
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "キセログラフィカ",
              "score": 0.06535503360890078
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "スマートコーラル",
              "score": 0.06199804970627452
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ニシノモリミチを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ニシノモリミチ",
              "score": 0.08456828133557283
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ホウオウファラオ",
              "score": 0.08369775068123214
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "サクセスゴールド",
              "score": 0.08168825682006968
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "スマートコーラル",
              "score": 0.07972637463129402
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ルージュリヴィエラ",
              "score": 0.07797536867339457
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ニシノモリミチを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "ニシノモリミチ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率10.7%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 4,
      "raceId": "20260719-02-04",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.12794978365169693,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 3,
          "horseName": "ウインカトリーヌ",
          "probability": 0.12794978365169693
        },
        {
          "mark": "○",
          "horseNumber": 7,
          "horseName": "ギオンバヤシ",
          "probability": 0.1262748559498974
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "コスモブラック",
          "probability": 0.09642000098935977
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "コティノス",
          "probability": 0.09287913737579762
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "フローレンスフーガ",
          "probability": 0.08093243730382216
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ウインカトリーヌ",
              "score": 0.09214171834796198
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ギオンバヤシ",
              "score": 0.09105301534179229
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "コスモブラック",
              "score": 0.07164735961744283
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "コティノス",
              "score": 0.06934579826862743
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "フローレンスフーガ",
              "score": 0.06158044322184338
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ウインカトリーヌを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ギオンバヤシ",
              "score": 0.09290570182261852
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ウインカトリーヌ",
              "score": 0.08584600953137646
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "コティノス",
              "score": 0.08417318317659543
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "フローレンスフーガ",
              "score": 0.08116702552835474
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "コスモブラック",
              "score": 0.08042167791969583
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ギオンバヤシを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 3,
        "topHorseName": "ウインカトリーヌ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率12.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 5,
      "raceId": "20260719-02-05",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.12379533941336578,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "ロジアコース",
          "probability": 0.12379533941336578
        },
        {
          "mark": "○",
          "horseNumber": 14,
          "horseName": "ヒアカムズザサン",
          "probability": 0.10633526168502101
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "エコロルーク",
          "probability": 0.08988862642233653
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "サルトヴェローチェ",
          "probability": 0.08586467904280037
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "エコロヴァルド",
          "probability": 0.08470680661200256
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ロジアコース",
              "score": 0.08944132959304672
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "ヒアカムズザサン",
              "score": 0.07809227906962263
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "エコロルーク",
              "score": 0.06740196614887772
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "サルトヴェローチェ",
              "score": 0.06478640035217922
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "エコロヴァルド",
              "score": 0.06403378327216064
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ロジアコースを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ヒアカムズザサン",
              "score": 0.09563500672967541
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコロルーク",
              "score": 0.08955038779288356
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "サルトヴェローチェ",
              "score": 0.08931779730752774
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "ロジアコース",
              "score": 0.08897716580040989
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "フィオリアーモ",
              "score": 0.08239629190482957
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ヒアカムズザサンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "ロジアコース"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率12.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 6,
      "raceId": "20260719-02-06",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.0855405443477587,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "リアライズブルーム",
          "probability": 0.0855405443477587
        },
        {
          "mark": "○",
          "horseNumber": 3,
          "horseName": "ライトオブジアース",
          "probability": 0.08491724677877811
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "トゥルージョワ",
          "probability": 0.08351210198334261
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "コスモファーブロス",
          "probability": 0.08186694933684434
        },
        {
          "mark": "☆",
          "horseNumber": 15,
          "horseName": "チェサピークベイ",
          "probability": 0.07318474764816263
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "リアライズブルーム",
              "score": 0.06457571280040214
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ライトオブジアース",
              "score": 0.06417056938056474
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "トゥルージョワ",
              "score": 0.06325722526353167
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "コスモファーブロス",
              "score": 0.0621878760433078
            },
            {
              "mark": "☆",
              "horseNumber": 15,
              "horseName": "チェサピークベイ",
              "score": 0.056544444945664685
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎リアライズブルームを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "チェサピークベイ",
              "score": 0.08759702936237791
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "リアライズブルーム",
              "score": 0.08417318317659543
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "コスモファーブロス",
              "score": 0.08294163084017443
            },
            {
              "mark": "△",
              "horseNumber": 9,
              "horseName": "リネアベルタ",
              "score": 0.08227486766777475
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "クープグラッセ",
              "score": 0.07972415844020346
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎チェサピークベイを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 11,
        "topHorseName": "リアライズブルーム"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率8.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 7,
      "raceId": "20260719-02-07",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10580590465507479,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "ゴールドドレッサ",
          "probability": 0.10580590465507479
        },
        {
          "mark": "○",
          "horseNumber": 7,
          "horseName": "ジーティーアリア",
          "probability": 0.10511502582950338
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "ヴァレンティーニ",
          "probability": 0.10121361357706317
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "プリンセスアツコ",
          "probability": 0.08346845635437589
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "ゴールドヴィーナス",
          "probability": 0.07780660796232518
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ゴールドドレッサ",
              "score": 0.07774819700015759
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ジーティーアリア",
              "score": 0.07729912576353618
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ヴァレンティーニ",
              "score": 0.07476320779945003
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "プリンセスアツコ",
              "score": 0.0632288556047033
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ゴールドヴィーナス",
              "score": 0.059548654149870345
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ゴールドドレッサを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ジーティーアリア",
              "score": 0.08531986513217621
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ゴールドドレッサ",
              "score": 0.08199976896638589
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ストラニエーロ",
              "score": 0.07921166038451712
            },
            {
              "mark": "△",
              "horseNumber": 14,
              "horseName": "ヴァレンティーニ",
              "score": 0.07510320124292903
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "ゴールドヴィーナス",
              "score": 0.07440178727500978
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ジーティーアリアを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 10,
        "topHorseName": "ゴールドドレッサ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率10.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 8,
      "raceId": "20260719-02-08",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.15089301858966117,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "ワイドデコラシオン",
          "probability": 0.15089301858966117
        },
        {
          "mark": "○",
          "horseNumber": 3,
          "horseName": "イングラム",
          "probability": 0.14145936758705044
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "キャンドルマス",
          "probability": 0.13768853856383062
        },
        {
          "mark": "△",
          "horseNumber": 10,
          "horseName": "タイセイモノリス",
          "probability": 0.12551478163638188
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "プレザントトーン",
          "probability": 0.10518038061206073
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ワイドデコラシオン",
              "score": 0.10705482105763874
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "イングラム",
              "score": 0.10092294790594177
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "キャンドルマス",
              "score": 0.09847190904084888
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "タイセイモノリス",
              "score": 0.0905589670380072
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "プレザントトーン",
              "score": 0.07734160637219845
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ワイドデコラシオンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "キャンドルマス",
              "score": 0.09278649587598153
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワイドデコラシオン",
              "score": 0.08957541997720482
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "タイセイモノリス",
              "score": 0.0774030672958417
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "イングラム",
              "score": 0.07594930763984488
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "プレザントトーン",
              "score": 0.07424681295391626
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎キャンドルマスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 4,
        "topHorseName": "ワイドデコラシオン"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全10頭中の1位勝率15.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 9,
      "raceId": "20260719-02-09",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.1335716164172816,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "マドモアゼルアスク",
          "probability": 0.1335716164172816
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "マイスターヴェルク",
          "probability": 0.129478421277698
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "モンローウォーク",
          "probability": 0.10845649033066644
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "レーヴドロペラ",
          "probability": 0.09681416757332764
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "アストリル",
          "probability": 0.09240057053841305
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "マドモアゼルアスク",
              "score": 0.09579590964559201
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "マイスターヴェルク",
              "score": 0.09313533280486268
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "モンローウォーク",
              "score": 0.07947107768929217
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "レーヴドロペラ",
              "score": 0.07190356789702194
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "アストリル",
              "score": 0.06903472982432746
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎マドモアゼルアスクを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "マドモアゼルアスク",
              "score": 0.10574650210570807
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "モンローウォーク",
              "score": 0.0876913617198961
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "マイスターヴェルク",
              "score": 0.08312785785650144
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "ロートホルン",
              "score": 0.08074202937013131
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ハートメテオ",
              "score": 0.08021425168836367
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎マドモアゼルアスクを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 10,
        "topHorseName": "マドモアゼルアスク"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率13.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 10,
      "raceId": "20260719-02-10",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.18001123130006738,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 9,
          "horseName": "シーズザスローン",
          "probability": 0.18001123130006738
        },
        {
          "mark": "○",
          "horseNumber": 14,
          "horseName": "プライベートアイズ",
          "probability": 0.09329078286241031
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "テルアスワッド",
          "probability": 0.087654479216119
        },
        {
          "mark": "△",
          "horseNumber": 12,
          "horseName": "タガノエルー",
          "probability": 0.0767938002763245
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "メイショウタイピン",
          "probability": 0.0740851995363771
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "シーズザスローン",
              "score": 0.12598165931940278
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "プライベートアイズ",
              "score": 0.06961336783492568
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "テルアスワッド",
              "score": 0.06594977046483633
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "タガノエルー",
              "score": 0.058890329153969904
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "メイショウタイピン",
              "score": 0.057129738673004096
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎シーズザスローンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "シーズザスローン",
              "score": 0.09850864404392247
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "プライベートアイズ",
              "score": 0.08515164929944397
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "テルアスワッド",
              "score": 0.08459745592958166
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "ウインシャーガス",
              "score": 0.0840757825160074
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "ジュンラトゥール",
              "score": 0.08045584486513015
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎シーズザスローンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 9,
        "topHorseName": "シーズザスローン"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率18.0%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 11,
      "raceId": "20260719-02-11",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10622108209189696,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "シグレ",
          "probability": 0.10622108209189696
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "ノリヤンモーニン",
          "probability": 0.100369192257571
        },
        {
          "mark": "▲",
          "horseNumber": 12,
          "horseName": "ダイメイビッグボス",
          "probability": 0.09379607488275252
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "ダイシンドラゴン",
          "probability": 0.08067667633400276
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "アルテクィーン",
          "probability": 0.07687766969928302
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "シグレ",
              "score": 0.07801806233409199
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ノリヤンモーニン",
              "score": 0.07421433394178012
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ダイメイビッグボス",
              "score": 0.06994180764814811
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ダイシンドラゴン",
              "score": 0.06141419859146077
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "アルテクィーン",
              "score": 0.05894484427889294
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎シグレを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "シグレ",
              "score": 0.09502038839856541
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ダイメイビッグボス",
              "score": 0.08534338418174987
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ノリヤンモーニン",
              "score": 0.08513127918193096
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "アルテクィーン",
              "score": 0.0840757825160074
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "イモージェン",
              "score": 0.08375250752382024
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎シグレを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 11,
        "topHorseName": "シグレ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率10.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "raceNo": 12,
      "raceId": "20260719-02-12",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.12791744559750906,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "ホウオウヘッセン",
          "probability": 0.12791744559750906
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "ロードヴェルテクス",
          "probability": 0.10436341614407661
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ロードクラシコ",
          "probability": 0.09475018046924444
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "マグネシアブリック",
          "probability": 0.0862904919522425
        },
        {
          "mark": "☆",
          "horseNumber": 1,
          "horseName": "ザカリナン",
          "probability": 0.08387361591385376
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.09212069861273986
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ロードヴェルテクス",
              "score": 0.07681057946800877
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ロードクラシコ",
              "score": 0.07056197627936786
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "マグネシアブリック",
              "score": 0.0650631787433166
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ザカリナン",
              "score": 0.06349220931836391
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ホウオウヘッセンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.08027775738778185
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "マグネシアブリック",
              "score": 0.07989435832165255
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ロードヴェルテクス",
              "score": 0.07814032688683381
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "コモンスナイプ",
              "score": 0.07741237020135937
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "シャインズオンユー",
              "score": 0.07713717912917994
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ホウオウヘッセンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 4,
        "topHorseName": "ホウオウヘッセン"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率12.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 1,
      "raceId": "20260719-03-01",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.1927021439024554,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "ケンシロウワールド",
          "probability": 0.1927021439024554
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "ムーンベリル",
          "probability": 0.1355285161125187
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "スウィット",
          "probability": 0.11939278776240185
        },
        {
          "mark": "△",
          "horseNumber": 10,
          "horseName": "ユイノキャッツアイ",
          "probability": 0.1079948796044623
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "レオライジング",
          "probability": 0.08383248260715565
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ケンシロウワールド",
              "score": 0.13423075251095498
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ムーンベリル",
              "score": 0.09706789444749613
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "スウィット",
              "score": 0.08657967101992017
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "ユイノキャッツアイ",
              "score": 0.07917103071725946
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "レオライジング",
              "score": 0.06346547266901015
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ケンシロウワールドを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ムーンベリル",
              "score": 0.08344388841406382
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ケンシロウワールド",
              "score": 0.07826063328871628
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ドナビッグベン",
              "score": 0.0713828508200158
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "スウィット",
              "score": 0.07000804140125945
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "トムキャット",
              "score": 0.06951463394883695
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ムーンベリルを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "ケンシロウワールド"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全10頭中の1位勝率19.3%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 2,
      "raceId": "20260719-03-02",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10530240335083123,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "ジャストビコーズ",
          "probability": 0.10530240335083123
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "サトノスターライト",
          "probability": 0.08710221158435483
        },
        {
          "mark": "▲",
          "horseNumber": 13,
          "horseName": "アマンヘセル",
          "probability": 0.08565351737039503
        },
        {
          "mark": "△",
          "horseNumber": 16,
          "horseName": "クレアノア",
          "probability": 0.08329384842015414
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "ジャストマイウェイ",
          "probability": 0.07370760467837463
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ジャストビコーズ",
              "score": 0.07742092115239928
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "サトノスターライト",
              "score": 0.06559079650418961
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アマンヘセル",
              "score": 0.06464914526511574
            },
            {
              "mark": "△",
              "horseNumber": 16,
              "horseName": "クレアノア",
              "score": 0.06311536044745916
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "ジャストマイウェイ",
              "score": 0.056884302015302486
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ジャストビコーズを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "クレアノア",
              "score": 0.09195249069202611
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "サトノスターライト",
              "score": 0.09123541335881058
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アマンヘセル",
              "score": 0.08107392041226458
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ジャストビコーズ",
              "score": 0.08002392392692272
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "フジサン",
              "score": 0.07680139273662766
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎クレアノアを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "ジャストビコーズ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率10.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 3,
      "raceId": "20260719-03-03",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.18035085223261318,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "グランマエストロ",
          "probability": 0.18035085223261318
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "ペプチドドリーム",
          "probability": 0.08811506795689839
        },
        {
          "mark": "▲",
          "horseNumber": 10,
          "horseName": "レッドフリーマン",
          "probability": 0.07039939036265881
        },
        {
          "mark": "△",
          "horseNumber": 14,
          "horseName": "シャルムグリーン",
          "probability": 0.06915459048196143
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "チャチャット",
          "probability": 0.059394566856899055
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "グランマエストロ",
              "score": 0.12620241292555756
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ペプチドドリーム",
              "score": 0.06624915314634293
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "レッドフリーマン",
              "score": 0.05473396271008721
            },
            {
              "mark": "△",
              "horseNumber": 14,
              "horseName": "シャルムグリーン",
              "score": 0.05392484278763391
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "チャチャット",
              "score": 0.04758082743134336
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎グランマエストロを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "グランマエストロ",
              "score": 0.10011494688443418
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "チャチャット",
              "score": 0.08159889771974643
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "ランウェイミューズ",
              "score": 0.0800118714703722
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "レッドフリーマン",
              "score": 0.07872713073644534
            },
            {
              "mark": "☆",
              "horseNumber": 16,
              "horseName": "ブラーヴジャン",
              "score": 0.07571751839557131
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎グランマエストロを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "グランマエストロ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率18.0%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 4,
      "raceId": "20260719-03-04",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.0851026392310627,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "ウィッシュリスト",
          "probability": 0.0851026392310627
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "ユニバーサルラヴ",
          "probability": 0.08151866257775532
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "フェスティヴハート",
          "probability": 0.07275112949012869
        },
        {
          "mark": "△",
          "horseNumber": 14,
          "horseName": "マッドヘッドラブ",
          "probability": 0.07240260695873477
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "トラストレガート",
          "probability": 0.07061557753073767
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ウィッシュリスト",
              "score": 0.06429107447454974
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ユニバーサルラヴ",
              "score": 0.06196148964989994
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "フェスティヴハート",
              "score": 0.05626259314294262
            },
            {
              "mark": "△",
              "horseNumber": 14,
              "horseName": "マッドヘッドラブ",
              "score": 0.05603605349753658
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "トラストレガート",
              "score": 0.05487448436933847
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ウィッシュリストを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ハピネスドリーム",
              "score": 0.08214314885473915
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ユニバーサルラヴ",
              "score": 0.08024930242395996
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アルティソナンテ",
              "score": 0.07680139273662766
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "トラストレガート",
              "score": 0.07191875694397841
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "マッドヘッドラブ",
              "score": 0.07138712345673574
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ハピネスドリームを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 12,
        "topHorseName": "ウィッシュリスト"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率8.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 5,
      "raceId": "20260719-03-05",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.17615728148031246,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 9,
          "horseName": "ヴェルバーニア",
          "probability": 0.17615728148031246
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "ロワデュモンド",
          "probability": 0.10383080491834426
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "エンルートフライト",
          "probability": 0.09109750916502563
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "サンタンヌ",
          "probability": 0.07893203308484509
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "グランオギュール",
          "probability": 0.07648621497882307
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "ヴェルバーニア",
              "score": 0.12347659193656207
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ロワデュモンド",
              "score": 0.07646438217128274
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "エンルートフライト",
              "score": 0.06818773993162563
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "サンタンヌ",
              "score": 0.06028018047950828
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "グランオギュール",
              "score": 0.05869039871059398
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ヴェルバーニアを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "ヴェルバーニア",
              "score": 0.09214216917481437
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "サンタンヌ",
              "score": 0.08216373392075182
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "エンルートフライト",
              "score": 0.08002635319029623
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "グランオギュール",
              "score": 0.07737753420165973
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "マハロハ",
              "score": 0.07671379126730758
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ヴェルバーニアを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 9,
        "topHorseName": "ヴェルバーニア"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全13頭中の1位勝率17.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 6,
      "raceId": "20260719-03-06",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.11071230047307536,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "トランサルピナ",
          "probability": 0.11071230047307536
        },
        {
          "mark": "○",
          "horseNumber": 14,
          "horseName": "チャランダマルツ",
          "probability": 0.09038460042778895
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "グルーヴェンス",
          "probability": 0.08466834932718798
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "アイアムキレマスネ",
          "probability": 0.07870135621780944
        },
        {
          "mark": "☆",
          "horseNumber": 1,
          "horseName": "エリンヘラクレス",
          "probability": 0.07673812068491671
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トランサルピナ",
              "score": 0.08093735428185796
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "チャランダマルツ",
              "score": 0.0677243492524218
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "グルーヴェンス",
              "score": 0.06400878603703115
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "アイアムキレマスネ",
              "score": 0.060130240515935116
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "エリンヘラクレス",
              "score": 0.05885413741955484
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎トランサルピナを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "チャランダマルツ",
              "score": 0.08888775491626964
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "グルーヴェンス",
              "score": 0.07903236930467902
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "トランサルピナ",
              "score": 0.0763141712299959
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "ヴァンデエス",
              "score": 0.07438843323017823
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "アイアムキレマスネ",
              "score": 0.07175292183041161
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎チャランダマルツを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "トランサルピナ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率11.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 7,
      "raceId": "20260719-03-07",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.09639698677207563,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 15,
          "horseName": "テキサスバローズ",
          "probability": 0.09639698677207563
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "イントゥザウインド",
          "probability": 0.08902610879049516
        },
        {
          "mark": "▲",
          "horseNumber": 7,
          "horseName": "ユイノサダハル",
          "probability": 0.08093278593267152
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "ファイアリービート",
          "probability": 0.079966602737237
        },
        {
          "mark": "☆",
          "horseNumber": 14,
          "horseName": "スルーザゴールド",
          "probability": 0.07910160773158129
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テキサスバローズ",
              "score": 0.07163240037620813
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "イントゥザウインド",
              "score": 0.06684132968818084
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ユイノサダハル",
              "score": 0.061580669830595465
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "ファイアリービート",
              "score": 0.060952650753563035
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "スルーザゴールド",
              "score": 0.060390403999886814
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎テキサスバローズを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "イントゥザウインド",
              "score": 0.08387674218341762
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "テキサスバローズ",
              "score": 0.07282900220621334
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ユイノサダハル",
              "score": 0.07213366844475008
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "ファイアリービート",
              "score": 0.07116586305280287
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "リアルパラダイス",
              "score": 0.06768037058234494
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎イントゥザウインドを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 15,
        "topHorseName": "テキサスバローズ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率9.6%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 8,
      "raceId": "20260719-03-08",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.17162054320931647,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "ロスパレドネス",
          "probability": 0.17162054320931647
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "アメテュストス",
          "probability": 0.13437913620463973
        },
        {
          "mark": "▲",
          "horseNumber": 12,
          "horseName": "ミエノストロング",
          "probability": 0.08566111150110105
        },
        {
          "mark": "△",
          "horseNumber": 15,
          "horseName": "トーセンブリラーレ",
          "probability": 0.07832398586062937
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "ポッドロルフ",
          "probability": 0.06038751300001026
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロスパレドネス",
              "score": 0.12052771206041468
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "アメテュストス",
              "score": 0.0963207975073748
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ミエノストロング",
              "score": 0.06465408145007466
            },
            {
              "mark": "△",
              "horseNumber": 15,
              "horseName": "トーセンブリラーレ",
              "score": 0.05988494978376807
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ポッドロルフ",
              "score": 0.04822624242436565
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ロスパレドネスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロスパレドネス",
              "score": 0.09425499913701703
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "アメテュストス",
              "score": 0.08788789135029203
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ミエノストロング",
              "score": 0.07953162012187082
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "ピエナフェーヴル",
              "score": 0.07464639872509732
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ポッドロルフ",
              "score": 0.07341390784153415
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ロスパレドネスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 2,
        "topHorseName": "ロスパレドネス"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率17.2%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 9,
      "raceId": "20260719-03-09",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10428858164655604,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 3,
          "horseName": "ヴァンヴィーヴ",
          "probability": 0.10428858164655604
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "プリティディーヴァ",
          "probability": 0.09040500179818117
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "ポッドデスペア",
          "probability": 0.08158391603569642
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "ガラベイヤ",
          "probability": 0.07582311308383606
        },
        {
          "mark": "☆",
          "horseNumber": 13,
          "horseName": "ハッピーエンジェル",
          "probability": 0.07505134398398712
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ヴァンヴィーヴ",
              "score": 0.07676193704462039
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "プリティディーヴァ",
              "score": 0.06773761014317674
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ポッドデスペア",
              "score": 0.062003904397561656
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "ガラベイヤ",
              "score": 0.05825938247885242
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "ハッピーエンジェル",
              "score": 0.05775773256395061
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ヴァンヴィーヴを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "プリティディーヴァ",
              "score": 0.0931448411585719
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ヴァンヴィーヴ",
              "score": 0.08754970856513554
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ヴェントゥーラ",
              "score": 0.07949585859240516
            },
            {
              "mark": "△",
              "horseNumber": 2,
              "horseName": "ダンケルド",
              "score": 0.07912356307653269
            },
            {
              "mark": "☆",
              "horseNumber": 15,
              "horseName": "ロードトレゾール",
              "score": 0.07671379126730758
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎プリティディーヴァを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 3,
        "topHorseName": "ヴァンヴィーヴ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率10.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 10,
      "raceId": "20260719-03-10",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.2041752608008377,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "アロンズロッド",
          "probability": 0.2041752608008377
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "クラヴァンス",
          "probability": 0.15552537696957652
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "ジェットブレード",
          "probability": 0.08847811278801135
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "ルールーリマ",
          "probability": 0.07609316002348854
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "ゴーソーファー",
          "probability": 0.07602600459456092
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アロンズロッド",
              "score": 0.14168827849490348
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "クラヴァンス",
              "score": 0.11006585400458371
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ジェットブレード",
              "score": 0.06648513228656636
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "ルールーリマ",
              "score": 0.058434912989626525
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "ゴーソーファー",
              "score": 0.05839126196082358
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎アロンズロッドを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アロンズロッド",
              "score": 0.09717788394737124
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "クラヴァンス",
              "score": 0.09397159897722628
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ルールーリマ",
              "score": 0.07872713073644534
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "バードウォッチャー",
              "score": 0.07545197903037236
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "ゴーソーファー",
              "score": 0.07320983814607841
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アロンズロッドを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 4,
        "topHorseName": "アロンズロッド"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全12頭中の1位勝率20.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 11,
      "raceId": "20260719-03-11",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.09491654981843885,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "エコロアゼル",
          "probability": 0.09491654981843885
        },
        {
          "mark": "○",
          "horseNumber": 7,
          "horseName": "ガビーズシスター",
          "probability": 0.09185217331445719
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "ファムエレガンテ",
          "probability": 0.0821654355334154
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "メイショウホウレン",
          "probability": 0.08094799579247804
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ゲッティヴィラ",
          "probability": 0.07841197229771393
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "エコロアゼル",
              "score": 0.07067011635634422
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ガビーズシスター",
              "score": 0.06867827162875614
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ファムエレガンテ",
              "score": 0.06238189207107899
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "メイショウホウレン",
              "score": 0.061590556239469706
            },
            {
              "mark": "☆",
              "horseNumber": 10,
              "horseName": "ゲッティヴィラ",
              "score": 0.05994214096787304
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎エコロアゼルを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ガビーズシスター",
              "score": 0.0970953611062277
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "メイショウホウレン",
              "score": 0.08042976539366296
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ロードアウォード",
              "score": 0.08041710992014417
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "プレゼンティーア",
              "score": 0.07981394004070187
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "ファムエレガンテ",
              "score": 0.07915740668603265
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ガビーズシスターを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 5,
        "topHorseName": "エコロアゼル"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率9.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "raceNo": 12,
      "raceId": "20260719-03-12",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "pre_race",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.1310940512399767,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "アルデキングダム",
          "probability": 0.1310940512399767
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "ノーウェアマン",
          "probability": 0.10599755815427184
        },
        {
          "mark": "▲",
          "horseNumber": 15,
          "horseName": "ヘルヴェティオス",
          "probability": 0.09276602698709288
        },
        {
          "mark": "△",
          "horseNumber": 6,
          "horseName": "サムシングニュー",
          "probability": 0.08002955211391605
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "イサチルシーキング",
          "probability": 0.07919032845354723
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "アルデキングダム",
              "score": 0.09418549228034383
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ノーウェアマン",
              "score": 0.07787277177463567
            },
            {
              "mark": "▲",
              "horseNumber": 15,
              "horseName": "ヘルヴェティオス",
              "score": 0.06927227651596934
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "サムシングニュー",
              "score": 0.06099356784840441
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "イサチルシーキング",
              "score": 0.06044807246916468
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎アルデキングダムを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "アルデキングダム",
              "score": 0.08339636826721697
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "ヘルヴェティオス",
              "score": 0.08070246756154718
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ノーウェアマン",
              "score": 0.07361712288953957
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "エアトベーレ",
              "score": 0.07320983814607841
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "サムシングニュー",
              "score": 0.07273509788578662
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アルデキングダムを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 1,
        "topHorseName": "アルデキングダム"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全15頭中の1位勝率13.1%。発走前予想として保存対象。",
      "publishedAt": "2026-07-19T07:05:47.144Z"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 1,
      "raceId": "20260719-10-01",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.21126052592888273,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "バニーラビット",
          "probability": 0.21126052592888273
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "メイショウソウセキ",
          "probability": 0.12230607703071097
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "ブルーセルリアン",
          "probability": 0.10255576425243093
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "ニシノクードクール",
          "probability": 0.09980028427746734
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "ブランフォルテ",
          "probability": 0.08993812706372176
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "バニーラビット",
              "score": 0.14629370082813276
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "メイショウソウセキ",
              "score": 0.0884733090443211
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ブルーセルリアン",
              "score": 0.07563560573843908
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "ニシノクードクール",
              "score": 0.07384454375471275
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "ブランフォルテ",
              "score": 0.06743414156577812
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎バニーラビットを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "バニーラビット",
              "score": 0.09029192720900825
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "アウスヴァール",
              "score": 0.07957563075344948
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "メイショウソウセキ",
              "score": 0.07761618397410196
            },
            {
              "mark": "△",
              "horseNumber": 11,
              "horseName": "エイカイボクサー",
              "score": 0.0747906583311328
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ニシノクードクール",
              "score": 0.07258801551094328
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎バニーラビットを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 10,
        "topHorseName": "バニーラビット"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全11頭中の1位勝率21.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 2,
      "raceId": "20260719-10-02",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.1206071733778967,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "カルロット",
          "probability": 0.1206071733778967
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "ルナフィオーレ",
          "probability": 0.0802040324418711
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "トウカイジーク",
          "probability": 0.07265206808496137
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ショウナンライラ",
          "probability": 0.06628452231485293
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "ナデシコザクラ",
          "probability": 0.0636186764794258
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "カルロット",
              "score": 0.08736902166999183
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ルナフィオーレ",
              "score": 0.061106980061575195
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "トウカイジーク",
              "score": 0.05619820322958387
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ショウナンライラ",
              "score": 0.05205929847901339
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ナデシコザクラ",
              "score": 0.05032649868598575
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎カルロットを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "カルロット",
              "score": 0.0853172172454283
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ナデシコザクラ",
              "score": 0.08396213022972067
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "グレンセロース",
              "score": 0.08038960194463037
            },
            {
              "mark": "△",
              "horseNumber": 5,
              "horseName": "ルナフィオーレ",
              "score": 0.07980914530875192
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "トウカイジーク",
              "score": 0.07803240151747652
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎カルロットを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "カルロット"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全18頭中の1位勝率12.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 3,
      "raceId": "20260719-10-03",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.08772178716200671,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "スマイルガーデン",
          "probability": 0.08772178716200671
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "ブライトベリル",
          "probability": 0.08759633024311185
        },
        {
          "mark": "▲",
          "horseNumber": 16,
          "horseName": "エイシンキタールン",
          "probability": 0.08441420028127324
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "ヤマニンエルファバ",
          "probability": 0.07386473651267504
        },
        {
          "mark": "☆",
          "horseNumber": 14,
          "horseName": "エレーデサンライズ",
          "probability": 0.07137505544744627
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "スマイルガーデン",
              "score": 0.06599352062966334
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ブライトベリル",
              "score": 0.06591197363238167
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "エイシンキタールン",
              "score": 0.06384358915718658
            },
            {
              "mark": "△",
              "horseNumber": 7,
              "horseName": "ヤマニンエルファバ",
              "score": 0.05698643770759776
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "エレーデサンライズ",
              "score": 0.05536814501519905
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎スマイルガーデンを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ブライトベリル",
              "score": 0.08710573283464289
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ルージュマデイラ",
              "score": 0.08288198686314434
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "スマイルガーデン",
              "score": 0.07992342355996816
            },
            {
              "mark": "△",
              "horseNumber": 16,
              "horseName": "エイシンキタールン",
              "score": 0.07811364725092147
            },
            {
              "mark": "☆",
              "horseNumber": 15,
              "horseName": "デアアテナ",
              "score": 0.07730724630629754
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ブライトベリルを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "スマイルガーデン"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率8.8%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 4,
      "raceId": "20260719-10-04",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.14470281734657162,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "アラムシャピラス",
          "probability": 0.14470281734657162
        },
        {
          "mark": "○",
          "horseNumber": 14,
          "horseName": "アイスフォーク",
          "probability": 0.12633085689468385
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "アクティブヘイロー",
          "probability": 0.0982897163594635
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "ホウオウモチーヴ",
          "probability": 0.09423909320074228
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "ブルーザー",
          "probability": 0.07016799816418272
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アラムシャピラス",
              "score": 0.10303119024963052
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "アイスフォーク",
              "score": 0.09108941595590347
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "アクティブヘイロー",
              "score": 0.07286267460801024
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "ホウオウモチーヴ",
              "score": 0.07022976955484146
            },
            {
              "mark": "☆",
              "horseNumber": 12,
              "horseName": "ブルーザー",
              "score": 0.05458355778107775
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎アラムシャピラスを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アラムシャピラス",
              "score": 0.1030627349184136
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "アイスフォーク",
              "score": 0.09392200231675785
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ホウオウモチーヴ",
              "score": 0.08455684626593961
            },
            {
              "mark": "△",
              "horseNumber": 12,
              "horseName": "ブルーザー",
              "score": 0.0799578070976082
            },
            {
              "mark": "☆",
              "horseNumber": 13,
              "horseName": "ルクスディグニティ",
              "score": 0.07823086039860203
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アラムシャピラスを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 11,
        "topHorseName": "アラムシャピラス"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率14.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 5,
      "raceId": "20260719-10-05",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "中",
      "confidenceScore": 0.2829810734945677,
      "scenario": "本命軸",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "カローナ",
          "probability": 0.2829810734945677
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "ツーハーツ",
          "probability": 0.15456056153816805
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "レアアース",
          "probability": 0.13059503864081803
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "メイショウジェード",
          "probability": 0.10688927278482456
        },
        {
          "mark": "☆",
          "horseNumber": 8,
          "horseName": "ビエントゾンダ",
          "probability": 0.09661423305863771
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "カローナ",
              "score": 0.19291205674582798
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ツーハーツ",
              "score": 0.1094387239741682
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "レアアース",
              "score": 0.0938611340908907
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "メイショウジェード",
              "score": 0.07845238628449494
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "ビエントゾンダ",
              "score": 0.07177361046247349
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎カローナを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "カローナ",
              "score": 0.09084418996080514
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ビエントゾンダ",
              "score": 0.07996889103054576
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ユーダブルワン",
              "score": 0.07915782607715621
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "レイクイーン",
              "score": 0.07710793588656184
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "ツーハーツ",
              "score": 0.07613369411605367
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎カローナを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 1,
        "topHorseName": "カローナ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全8頭中の1位勝率28.3%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 6,
      "raceId": "20260719-10-06",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10386036145202324,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "サトノライトニング",
          "probability": 0.10386036145202324
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "アイアン",
          "probability": 0.10339085985390123
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "フレアオブセンス",
          "probability": 0.09435800670099173
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "テーオータウンズ",
          "probability": 0.09127151639457182
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "レッドフレーザー",
          "probability": 0.07710523691863001
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "サトノライトニング",
              "score": 0.07648359391817408
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "アイアン",
              "score": 0.07617841787939478
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "フレアオブセンス",
              "score": 0.0703070633300036
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "テーオータウンズ",
              "score": 0.06830084463083065
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "レッドフレーザー",
              "score": 0.05909276297146849
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎サトノライトニングを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "アイアン",
              "score": 0.09493593027287982
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "サトノライトニング",
              "score": 0.0859228137453944
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "フレアオブセンス",
              "score": 0.08404635925303781
            },
            {
              "mark": "△",
              "horseNumber": 1,
              "horseName": "テーオータウンズ",
              "score": 0.08397563263127987
            },
            {
              "mark": "☆",
              "horseNumber": 11,
              "horseName": "レッドフレーザー",
              "score": 0.07837952482319296
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アイアンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 10,
        "topHorseName": "サトノライトニング"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率10.4%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 7,
      "raceId": "20260719-10-07",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.14915894444356823,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "マウンテンバローズ",
          "probability": 0.14915894444356823
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "ウェルカムソング",
          "probability": 0.10247459410158268
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "アーリントンロウ",
          "probability": 0.09419897182622317
        },
        {
          "mark": "△",
          "horseNumber": 16,
          "horseName": "バーケンティン",
          "probability": 0.08981208613892348
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "アスクザアメリカン",
          "probability": 0.07155620082727246
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "マウンテンバローズ",
              "score": 0.10592767286267832
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ウェルカムソング",
              "score": 0.07558284514038771
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "アーリントンロウ",
              "score": 0.07020369066140403
            },
            {
              "mark": "△",
              "horseNumber": 16,
              "horseName": "バーケンティン",
              "score": 0.06735221496465923
            },
            {
              "mark": "☆",
              "horseNumber": 3,
              "horseName": "アスクザアメリカン",
              "score": 0.05548588951208608
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎マウンテンバローズを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "バーケンティン",
              "score": 0.09081237481841593
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "マウンテンバローズ",
              "score": 0.07949437324134369
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "アーリントンロウ",
              "score": 0.07872197844566435
            },
            {
              "mark": "△",
              "horseNumber": 4,
              "horseName": "ヒットザグラウンド",
              "score": 0.07871433057904031
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "ラブアイミー",
              "score": 0.07595055764999936
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎バーケンティンを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "マウンテンバローズ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率14.9%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 8,
      "raceId": "20260719-10-08",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.13508716216620478,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "ジャンシ",
          "probability": 0.13508716216620478
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "ドラムメジャー",
          "probability": 0.1002278164569182
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "サンライズジュピタ",
          "probability": 0.09319263909175107
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "ミヤフロント",
          "probability": 0.09072064330962593
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "アメリカンビヨンド",
          "probability": 0.08732066715399857
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ジャンシ",
              "score": 0.09678101438239209
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ドラムメジャー",
              "score": 0.0741224396713558
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "サンライズジュピタ",
              "score": 0.06954957438399717
            },
            {
              "mark": "△",
              "horseNumber": 13,
              "horseName": "ミヤフロント",
              "score": 0.06794277712561583
            },
            {
              "mark": "☆",
              "horseNumber": 4,
              "horseName": "アメリカンビヨンド",
              "score": 0.06573279262445804
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ジャンシを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アメリカンビヨンド",
              "score": 0.08662579256102092
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "ミヤフロント",
              "score": 0.08235943813024733
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ジャンシ",
              "score": 0.08104121526275238
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "サンライズジュピタ",
              "score": 0.08057903937132892
            },
            {
              "mark": "☆",
              "horseNumber": 9,
              "horseName": "ドラムメジャー",
              "score": 0.07931096422357209
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎アメリカンビヨンドを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 12,
        "topHorseName": "ジャンシ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全14頭中の1位勝率13.5%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 9,
      "raceId": "20260719-10-09",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.20705136804523042,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 3,
          "horseName": "タンテドヴィーヴル",
          "probability": 0.20705136804523042
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "キーウェーブ",
          "probability": 0.15076333440834588
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ハイディージェン",
          "probability": 0.14698973905354268
        },
        {
          "mark": "△",
          "horseNumber": 8,
          "horseName": "ユメハハテシナク",
          "probability": 0.11014473868887309
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "ヤマニンループ",
          "probability": 0.10218912961344997
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "タンテドヴィーヴル",
              "score": 0.14355774820375874
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "キーウェーブ",
              "score": 0.1069705263397838
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ハイディージェン",
              "score": 0.10451768935916171
            },
            {
              "mark": "△",
              "horseNumber": 8,
              "horseName": "ユメハハテシナク",
              "score": 0.08056843912212648
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "ヤマニンループ",
              "score": 0.07539729322310146
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎タンテドヴィーヴルを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "タンテドヴィーヴル",
              "score": 0.07908380794591514
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ユメハハテシナク",
              "score": 0.07636992850239292
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ヤマニンループ",
              "score": 0.07446625693592941
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "ゼンノインヴォーク",
              "score": 0.07433968981886037
            },
            {
              "mark": "☆",
              "horseNumber": 7,
              "horseName": "クスクス",
              "score": 0.07088809325788947
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎タンテドヴィーヴルを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 3,
        "topHorseName": "タンテドヴィーヴル"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全8頭中の1位勝率20.7%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 10,
      "raceId": "20260719-10-10",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.10139424918321238,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 13,
          "horseName": "レヴァンテシチー",
          "probability": 0.10139424918321238
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "サイモンシュバリエ",
          "probability": 0.07826381648314394
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "ジューンエオス",
          "probability": 0.07733812531479752
        },
        {
          "mark": "△",
          "horseNumber": 15,
          "horseName": "インザモーメント",
          "probability": 0.07646041452756595
        },
        {
          "mark": "☆",
          "horseNumber": 6,
          "horseName": "カミノレアル",
          "probability": 0.07449234819552047
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "レヴァンテシチー",
              "score": 0.07488062094344702
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "サイモンシュバリエ",
              "score": 0.05984583968840254
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ジューンエオス",
              "score": 0.05924414042897736
            },
            {
              "mark": "△",
              "horseNumber": 15,
              "horseName": "インザモーメント",
              "score": 0.05867362841727685
            },
            {
              "mark": "☆",
              "horseNumber": 6,
              "horseName": "カミノレアル",
              "score": 0.05739438530144729
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎レヴァンテシチーを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "インザモーメント",
              "score": 0.08616775740835192
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "レヴァンテシチー",
              "score": 0.08401669406541808
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ジューンエオス",
              "score": 0.07996889103054576
            },
            {
              "mark": "△",
              "horseNumber": 10,
              "horseName": "ナヴォーナ",
              "score": 0.07922605545594551
            },
            {
              "mark": "☆",
              "horseNumber": 14,
              "horseName": "カルパ",
              "score": 0.07719196272885544
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎インザモーメントを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 13,
        "topHorseName": "レヴァンテシチー"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全16頭中の1位勝率10.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 11,
      "raceId": "20260719-10-11",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "as_of_replay",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.11137693973808359,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "ガイアメンテ",
          "probability": 0.11137693973808359
        },
        {
          "mark": "○",
          "horseNumber": 13,
          "horseName": "カエルム",
          "probability": 0.09095226230646063
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "ジーティーアダマン",
          "probability": 0.09004519376375102
        },
        {
          "mark": "△",
          "horseNumber": 17,
          "horseName": "ジョバンニ",
          "probability": 0.08576980797644085
        },
        {
          "mark": "☆",
          "horseNumber": 1,
          "horseName": "ゼンダンハヤブサ",
          "probability": 0.06214254044635645
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ガイアメンテ",
              "score": 0.0813693698041133
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "カエルム",
              "score": 0.06809332947355838
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーアダマン",
              "score": 0.06750373492079714
            },
            {
              "mark": "△",
              "horseNumber": 17,
              "horseName": "ジョバンニ",
              "score": 0.06472473415904553
            },
            {
              "mark": "☆",
              "horseNumber": 1,
              "horseName": "ゼンダンハヤブサ",
              "score": 0.04936701026449067
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ガイアメンテを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ガイアメンテ",
              "score": 0.09834680389071503
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "カエルム",
              "score": 0.09344728465774434
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーアダマン",
              "score": 0.09171439986838703
            },
            {
              "mark": "△",
              "horseNumber": 17,
              "horseName": "ジョバンニ",
              "score": 0.08627953799754749
            },
            {
              "mark": "☆",
              "horseNumber": 8,
              "horseName": "サフィラ",
              "score": 0.08489712446862509
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ガイアメンテを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 6,
        "topHorseName": "ガイアメンテ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全18頭中の1位勝率11.1%。発走時点特徴量による後日再現で成績対象外。"
    },
    {
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "raceNo": 12,
      "raceId": "20260719-10-12",
      "modelVersion": "ability-softmax-v3-2026-07-18-a1398f04ec15",
      "generatedAt": "2026-07-19T07:08:14.417Z",
      "predictionContext": "pre_race",
      "status": "ready",
      "confidence": "低",
      "confidenceScore": 0.17292355755125036,
      "scenario": "混戦",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "ミッキージャンプ",
          "probability": 0.17292355755125036
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "ロングトールサリー",
          "probability": 0.16817716907155925
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "フレイムスター",
          "probability": 0.13643770097455346
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "ブリッツアロング",
          "probability": 0.11287575637334764
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "ヴィーナスバブル",
          "probability": 0.08927861076457627
        }
      ],
      "forecastPanel": [
        {
          "id": "agent_ability",
          "label": "能力AI",
          "persona": true,
          "personaTone": "ability",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ミッキージャンプ",
              "score": 0.1213746713826717
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ロングトールサリー",
              "score": 0.11828951887087248
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "フレイムスター",
              "score": 0.09765886460781872
            },
            {
              "mark": "△",
              "horseNumber": 3,
              "horseName": "ブリッツアロング",
              "score": 0.08234360061703494
            },
            {
              "mark": "☆",
              "horseNumber": 2,
              "horseName": "ヴィーナスバブル",
              "score": 0.06700545597133355
            }
          ],
          "opinion": "能力・近走・格の履歴を重視。◎ミッキージャンプを最上位に評価。"
        },
        {
          "id": "agent_pace",
          "label": "展開AI",
          "persona": true,
          "personaTone": "pace",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "脚質・位置取り・想定ペースを重視。必要データ待ち。"
        },
        {
          "id": "agent_data",
          "label": "データAI",
          "persona": true,
          "personaTone": "data",
          "status": "available",
          "confidence": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ミッキージャンプ",
              "score": 0.09016127923345596
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ロングトールサリー",
              "score": 0.08785268377333365
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "グラスベルグ",
              "score": 0.07908380794591514
            },
            {
              "mark": "△",
              "horseNumber": 6,
              "horseName": "オーシンエス",
              "score": 0.07509324922487629
            },
            {
              "mark": "☆",
              "horseNumber": 5,
              "horseName": "フレイムスター",
              "score": 0.07481229409117943
            }
          ],
          "opinion": "コース・距離・騎手・厩舎を重視。◎ミッキージャンプを最上位に評価。"
        },
        {
          "id": "agent_value",
          "label": "穴馬AI",
          "persona": true,
          "personaTone": "value",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "人気薄と能力に対する過小評価を重視。必要データ待ち。"
        },
        {
          "id": "agent_odds",
          "label": "オッズAI",
          "persona": true,
          "personaTone": "odds",
          "status": "unavailable",
          "marks": [],
          "confidence": 0,
          "opinion": "AI確率と市場確率の差を重視。必要データ待ち。"
        }
      ],
      "masterConsensus": {
        "agent": "chief-expectancy-agent",
        "participatingForecasters": 5,
        "topHorseNumber": 7,
        "topHorseName": "ミッキージャンプ"
      },
      "topTicket": null,
      "comment": "2人の専門AIを評価点と信頼度で統合。全9頭中の1位勝率17.3%。発走前予想として保存対象。",
      "publishedAt": "2026-07-19T07:05:47.144Z"
    }
  ],
  "candidates": []
};
