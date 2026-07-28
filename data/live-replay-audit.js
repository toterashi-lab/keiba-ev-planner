window.KEIBA_LIVE_REPLAY_AUDIT = {
  "status": "replay_only",
  "calculatedAt": "2026-07-28T23:53:26.206Z",
  "label": "後日再現（本番成績に含めない）",
  "policy": {
    "source": "画面で表示する総合AI指数の買い目とJRA公式払戻の照合",
    "unitStakeYen": 100,
    "exclusion": "後日再現と、公開時刻のみが残る予想は、本番用の不変スナップショットがないため、本番成績・学習実績・エージェント成績には含めない",
    "actualPerformance": "公開時点の不変スナップショットが保存・ロック・精算された記録のみ。今回の公開データには該当なし"
  },
  "coverage": {
    "confirmedResults": 72,
    "matchedPredictions": 72,
    "evaluatedTickets": 72,
    "preRaceTimestamped": 2,
    "replayOnly": 70,
    "immutableSnapshots": 0
  },
  "summary": {
    "races": 72,
    "hits": 48,
    "investmentYen": 151200,
    "payoutYen": 594440,
    "netYen": 443240,
    "recoveryRate": 3.9314814814814816
  },
  "records": [
    {
      "raceId": "20260718-02-01",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 1,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 120,
          "netYen": 20,
          "recoveryRate": 1.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-6-3-4-8 BOX",
          "ticketKeys": [
            "2-6",
            "2-3",
            "2-4",
            "2-8",
            "6-3",
            "6-4",
            "6-8",
            "3-4",
            "3-8",
            "4-8"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 130,
          "netYen": -870,
          "recoveryRate": 0.13,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-6-3-4-8 BOX",
          "ticketKeys": [
            "2-6-3",
            "2-6-4",
            "2-6-8",
            "2-3-4",
            "2-3-8",
            "2-4-8",
            "6-3-4",
            "6-3-8",
            "6-4-8",
            "3-4-8"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 290,
          "netYen": -710,
          "recoveryRate": 0.29,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 540,
      "netYen": -1560,
      "recoveryRate": 0.2571428571428571,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 1,
        "3": 3,
        "4": 5,
        "5": 7,
        "6": 2,
        "7": 6,
        "8": 4
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロジクラウン",
              "score": 0.706106785699089,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イッペイ",
              "score": 0.34092656334974425,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アートオブブライト",
              "score": 0.30153651139495014,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "アートオブブライト",
              "score": 0.3333333333333333,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イッペイ",
              "score": 0.32738095238095233,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ロジクラウン",
              "score": 0.2916666666666667,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロジクラウン",
              "score": 0.13304437825168294,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イッペイ",
              "score": 0.08350771321858175,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ハイビスカス",
              "score": 0.07190333430693012,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 120,
              "netYen": 20,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-6-3-4-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 130,
              "netYen": -870,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-6-3-4-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 290,
              "netYen": -710,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-6-2-8-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 130,
              "netYen": -870,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-6-2-8-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 290,
              "netYen": -710,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 120,
              "netYen": 20,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-6-7-4-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 130,
              "netYen": -870,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-6-7-4-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-02",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 2,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 850,
          "netYen": 750,
          "recoveryRate": 8.5,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-7-5-10-12 BOX",
          "ticketKeys": [
            "2-7",
            "2-5",
            "2-10",
            "2-12",
            "7-5",
            "7-10",
            "7-12",
            "5-10",
            "5-12",
            "10-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1050,
          "netYen": 50,
          "recoveryRate": 1.05,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-7-5-10-12 BOX",
          "ticketKeys": [
            "2-7-5",
            "2-7-10",
            "2-7-12",
            "2-5-10",
            "2-5-12",
            "2-10-12",
            "7-5-10",
            "7-5-12",
            "7-10-12",
            "5-10-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 9850,
          "netYen": 8850,
          "recoveryRate": 9.85,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 11750,
      "netYen": 9650,
      "recoveryRate": 5.595238095238095,
      "hit": true,
      "finishByHorseNumber": {
        "1": 12,
        "2": 1,
        "3": 7,
        "4": 11,
        "5": 6,
        "6": 8,
        "7": 2,
        "8": 9,
        "9": 5,
        "10": 4,
        "11": 10,
        "12": 3
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "メモリーデイズ",
              "score": 0.5329262034959681,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ドリームガッサン",
              "score": 0.3538174124169857,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ペイシャクロス",
              "score": 0.2859852398040595,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "メモリーデイズ",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "チュラヴェール",
              "score": 0.3106060606060606,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ジェッディンデデン",
              "score": 0.2424242424242425,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "メモリーデイズ",
              "score": 0.09847432287886183,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "レディリリス",
              "score": 0.07436289260741773,
              "finish": 12
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "クリーンブーケ",
              "score": 0.07267626205089804,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 850,
              "netYen": 750,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-7-12-5-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1050,
              "netYen": 50,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-7-12-5-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 9850,
              "netYen": 8850,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 850,
              "netYen": 750,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-5-3-10-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1050,
              "netYen": 50,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-5-3-10-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 850,
              "netYen": 750,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-1-8-9-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-1-8-9-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-03",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 8,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "8",
          "ticketKeys": [
            "8"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 470,
          "netYen": 370,
          "recoveryRate": 4.7,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "8-4-11-2-5 BOX",
          "ticketKeys": [
            "8-4",
            "8-11",
            "8-2",
            "8-5",
            "4-11",
            "4-2",
            "4-5",
            "11-2",
            "11-5",
            "2-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 880,
          "netYen": -120,
          "recoveryRate": 0.88,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "8-4-11-2-5 BOX",
          "ticketKeys": [
            "8-4-11",
            "8-4-2",
            "8-4-5",
            "8-11-2",
            "8-11-5",
            "8-2-5",
            "4-11-2",
            "4-11-5",
            "4-2-5",
            "11-2-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1190,
          "netYen": 190,
          "recoveryRate": 1.19,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 2540,
      "netYen": 440,
      "recoveryRate": 1.2095238095238094,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 4,
        "3": 6,
        "4": 2,
        "5": 5,
        "6": 12,
        "7": 10,
        "8": 1,
        "9": 7,
        "10": 11,
        "11": 3,
        "12": 9
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リバーソニック",
              "score": 0.39840647577483335,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ウインガネーシャ",
              "score": 0.37173279014205696,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ポップアップ",
              "score": 0.3637783252827676,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リバーソニック",
              "score": 0.5871212121212122,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "マーゴットデウス",
              "score": 0.35606060606060597,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ザンテソーロ",
              "score": 0.3333333333333333,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リバーソニック",
              "score": 0.10977239380219654,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ゴールデンボブ",
              "score": 0.08327241964571397,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "フェンリル",
              "score": 0.0805306747197921,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 470,
              "netYen": 370,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-4-11-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 880,
              "netYen": -120,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-4-11-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1190,
              "netYen": 190,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 470,
              "netYen": 370,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-3-2-9-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-3-2-9-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 470,
              "netYen": 370,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-10-9-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-10-9-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-04",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 8,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "8",
          "ticketKeys": [
            "8"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 220,
          "netYen": 120,
          "recoveryRate": 2.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "8-3-5-1-6 BOX",
          "ticketKeys": [
            "8-3",
            "8-5",
            "8-1",
            "8-6",
            "3-5",
            "3-1",
            "3-6",
            "5-1",
            "5-6",
            "1-6"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2920,
          "netYen": 1920,
          "recoveryRate": 2.92,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "8-3-5-1-6 BOX",
          "ticketKeys": [
            "8-3-5",
            "8-3-1",
            "8-3-6",
            "8-5-1",
            "8-5-6",
            "8-1-6",
            "3-5-1",
            "3-5-6",
            "3-1-6",
            "5-1-6"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 4860,
          "netYen": 3860,
          "recoveryRate": 4.86,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 8000,
      "netYen": 5900,
      "recoveryRate": 3.8095238095238093,
      "hit": true,
      "finishByHorseNumber": {
        "1": 7,
        "2": 6,
        "3": 3,
        "4": 8,
        "5": 2,
        "6": 5,
        "7": 10,
        "8": 1,
        "9": 14,
        "10": 9,
        "11": 13,
        "12": 11,
        "13": 15,
        "14": 12,
        "15": 4,
        "16": 16
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウザロイヤル",
              "score": 0.6235559215210759,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "スッサンエア",
              "score": 0.30463426570968943,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "レッドアイスピア",
              "score": 0.2955925274431441,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "スッサンエア",
              "score": 0.375,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ホウオウザロイヤル",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "エコロデュラン",
              "score": 0.31666666666666665,
              "finish": 14
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウザロイヤル",
              "score": 0.12015319147641641,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ニシノオールワン",
              "score": 0.09735927894023962,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ガルフコースト",
              "score": 0.0811339782245727,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 220,
              "netYen": 120,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-3-5-1-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2920,
              "netYen": 1920,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-3-5-1-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4860,
              "netYen": 3860,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-8-9-10-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2920,
              "netYen": 1920,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-8-9-10-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4860,
              "netYen": 3860,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 220,
              "netYen": 120,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-1-6-16-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-1-6-16-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-05",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 5,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 8,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "8",
          "ticketKeys": [
            "8"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 2450,
          "netYen": 2350,
          "recoveryRate": 24.5,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "8-6-9-2-14 BOX",
          "ticketKeys": [
            "8-6",
            "8-9",
            "8-2",
            "8-14",
            "6-9",
            "6-2",
            "6-14",
            "9-2",
            "9-14",
            "2-14"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 26010,
          "netYen": 25010,
          "recoveryRate": 26.01,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "8-6-9-2-14 BOX",
          "ticketKeys": [
            "8-6-9",
            "8-6-2",
            "8-6-14",
            "8-9-2",
            "8-9-14",
            "8-2-14",
            "6-9-2",
            "6-9-14",
            "6-2-14",
            "9-2-14"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 74210,
          "netYen": 73210,
          "recoveryRate": 74.21,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 102670,
      "netYen": 100570,
      "recoveryRate": 48.89047619047619,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 2,
        "3": 11,
        "4": 10,
        "5": 12,
        "6": 3,
        "7": 5,
        "8": 1,
        "9": 4,
        "10": 14,
        "11": 13,
        "12": 6,
        "13": 9,
        "14": 7
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウライセンス",
              "score": 0.47191913186360424,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イトシサ",
              "score": 0.4156658746913323,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "バンダムソレール",
              "score": 0.292471354016105,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "モンロワイヤル",
              "score": 0.4455128205128205,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "イトシサ",
              "score": 0.3525641025641026,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "レースクイーン",
              "score": 0.3525641025641026,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ホウオウライセンス",
              "score": 0.11682278738315431,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "チャーチルデュース",
              "score": 0.09576139129666972,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "イトシサ",
              "score": 0.0860244588171886,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 2450,
              "netYen": 2350,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-6-2-9-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 26010,
              "netYen": 25010,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-6-2-9-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 74210,
              "netYen": 73210,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-6-13-8-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-6-13-8-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 2450,
              "netYen": 2350,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-3-6-11-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-3-6-11-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-06",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 6,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 12,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "12",
          "ticketKeys": [
            "12"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 360,
          "netYen": 260,
          "recoveryRate": 3.6,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "12-2-6-11-10 BOX",
          "ticketKeys": [
            "12-2",
            "12-6",
            "12-11",
            "12-10",
            "2-6",
            "2-11",
            "2-10",
            "6-11",
            "6-10",
            "11-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 330,
          "netYen": -670,
          "recoveryRate": 0.33,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "12-2-6-11-10 BOX",
          "ticketKeys": [
            "12-2-6",
            "12-2-11",
            "12-2-10",
            "12-6-11",
            "12-6-10",
            "12-11-10",
            "2-6-11",
            "2-6-10",
            "2-11-10",
            "6-11-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2460,
          "netYen": 1460,
          "recoveryRate": 2.46,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 3150,
      "netYen": 1050,
      "recoveryRate": 1.5,
      "hit": true,
      "finishByHorseNumber": {
        "1": 10,
        "2": 2,
        "3": 12,
        "4": 7,
        "5": 9,
        "6": 3,
        "7": 4,
        "8": 8,
        "9": 11,
        "10": 5,
        "11": 6,
        "12": 1
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンマルチ",
              "score": 0.5847583048978735,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "トリニタリオ",
              "score": 0.35667527212712324,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "コスモクラシック",
              "score": 0.31067206313607454,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "コスモクラシック",
              "score": 0.3333333333333333,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ジュラトリー",
              "score": 0.3106060606060606,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ショウナンマルチ",
              "score": 0.2878787878787879,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンマルチ",
              "score": 0.11615552967133369,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ジュラトリー",
              "score": 0.0796490391575768,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "グローリーバローズ",
              "score": 0.07958648302511635,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 360,
              "netYen": 260,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-2-6-11-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 330,
              "netYen": -670,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-2-6-11-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2460,
              "netYen": 1460,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-11-12-2-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 330,
              "netYen": -670,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-11-12-2-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2460,
              "netYen": 1460,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 360,
              "netYen": 260,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-11-10-5-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-11-10-5-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-07",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 7,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 8,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "8",
          "ticketKeys": [
            "8"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 310,
          "netYen": 210,
          "recoveryRate": 3.1,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "8-11-7-1-2 BOX",
          "ticketKeys": [
            "8-11",
            "8-7",
            "8-1",
            "8-2",
            "11-7",
            "11-1",
            "11-2",
            "7-1",
            "7-2",
            "1-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 530,
          "netYen": -470,
          "recoveryRate": 0.53,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "8-11-7-1-2 BOX",
          "ticketKeys": [
            "8-11-7",
            "8-11-1",
            "8-11-2",
            "8-7-1",
            "8-7-2",
            "8-1-2",
            "11-7-1",
            "11-7-2",
            "11-1-2",
            "7-1-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 17700,
          "netYen": 16700,
          "recoveryRate": 17.7,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 18540,
      "netYen": 16440,
      "recoveryRate": 8.82857142857143,
      "hit": true,
      "finishByHorseNumber": {
        "1": 6,
        "2": 3,
        "3": 9,
        "4": 5,
        "5": 12,
        "6": 10,
        "7": 4,
        "8": 1,
        "9": 13,
        "10": 7,
        "11": 2,
        "12": 11,
        "13": 14,
        "14": 8
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "パラダイスフェイス",
              "score": 0.5238934607034925,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ストロングボーイ",
              "score": 0.417532040428756,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "タイセイデクスター",
              "score": 0.26830181983969775,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "エンダードラゴン",
              "score": 0.40705128205128205,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ディアスポラ",
              "score": 0.34935897435897434,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ストロングボーイ",
              "score": 0.34935897435897434,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "パラダイスフェイス",
              "score": 0.10425020945156861,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ストロングボーイ",
              "score": 0.0949254143956831,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "エンダードラゴン",
              "score": 0.09050170066580955,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 310,
              "netYen": 210,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-11-2-7-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 530,
              "netYen": -470,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-11-2-7-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 17700,
              "netYen": 16700,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-4-11-7-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 530,
              "netYen": -470,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-4-11-7-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 310,
              "netYen": 210,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-11-1-5-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 530,
              "netYen": -470,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-11-1-5-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-08",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 4,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-1-6-3-12 BOX",
          "ticketKeys": [
            "5-1",
            "5-6",
            "5-3",
            "5-12",
            "1-6",
            "1-3",
            "1-12",
            "6-3",
            "6-12",
            "3-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 9910,
          "netYen": 8910,
          "recoveryRate": 9.91,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-1-6-3-12 BOX",
          "ticketKeys": [
            "5-1-6",
            "5-1-3",
            "5-1-12",
            "5-6-3",
            "5-6-12",
            "5-3-12",
            "1-6-3",
            "1-6-12",
            "1-3-12",
            "6-3-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 39440,
          "netYen": 38440,
          "recoveryRate": 39.44,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 49350,
      "netYen": 47250,
      "recoveryRate": 23.5,
      "hit": true,
      "finishByHorseNumber": {
        "1": 2,
        "2": 9,
        "3": 3,
        "4": 6,
        "5": 4,
        "6": 1,
        "7": 7,
        "8": 11,
        "9": 8,
        "10": 10,
        "11": 12,
        "12": 5
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ワンダフルデイズ",
              "score": 0.39073821352207866,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "マイネルゼウス",
              "score": 0.38254604521758906,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "バルドル",
              "score": 0.33013546150621875,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "バルドル",
              "score": 0.35606060606060597,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "マイネルゼウス",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "メイショウテンク",
              "score": 0.31439393939393934,
              "finish": 10
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "マイネルゼウス",
              "score": 0.10652033625548947,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "アーレムアレス",
              "score": 0.09364385765229277,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "アスクファイアモア",
              "score": 0.07895756167443255,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-6-3-5-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 9910,
              "netYen": 8910,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-6-3-5-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 39440,
              "netYen": 38440,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-6-10-1-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 9910,
              "netYen": 8910,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-6-10-1-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 39440,
              "netYen": 38440,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 2460,
              "netYen": 2360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-5-7-12-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-5-7-12-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-09",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 9,
      "raceTitle": "湯浜特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 220,
          "netYen": 120,
          "recoveryRate": 2.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-7-2-4-10 BOX",
          "ticketKeys": [
            "5-7",
            "5-2",
            "5-4",
            "5-10",
            "7-2",
            "7-4",
            "7-10",
            "2-4",
            "2-10",
            "4-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 720,
          "netYen": -280,
          "recoveryRate": 0.72,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-7-2-4-10 BOX",
          "ticketKeys": [
            "5-7-2",
            "5-7-4",
            "5-7-10",
            "5-2-4",
            "5-2-10",
            "5-4-10",
            "7-2-4",
            "7-2-10",
            "7-4-10",
            "2-4-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2420,
          "netYen": 1420,
          "recoveryRate": 2.42,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 3360,
      "netYen": 1260,
      "recoveryRate": 1.6,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 4,
        "3": 10,
        "4": 3,
        "5": 1,
        "6": 11,
        "7": 2,
        "8": 13,
        "9": 12,
        "10": 5,
        "11": 7,
        "12": 6,
        "13": 9
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ドッグウッド",
              "score": 0.5011115976731031,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "マイネルシンベリン",
              "score": 0.34955577830147,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "グランセゾン",
              "score": 0.2994587927931265,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 9,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ゴーゴータカシ",
              "score": 0.5,
              "finish": 9
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "マイネルシンベリン",
              "score": 0.4166666666666667,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "グランセゾン",
              "score": 0.33333333333333337,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ドッグウッド",
              "score": 0.10936476607300265,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ホウオウペトリュス",
              "score": 0.08620072665031474,
              "finish": 10
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ハミルトン",
              "score": 0.0808707145187364,
              "finish": 13
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 220,
              "netYen": 120,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-7-4-2-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 720,
              "netYen": -280,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-7-4-2-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2420,
              "netYen": 1420,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-7-4-1-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-7-4-1-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 220,
              "netYen": 120,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-3-8-2-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-3-8-2-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-10",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 10,
      "raceTitle": "潮騒特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 10,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "10",
          "ticketKeys": [
            "10"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 510,
          "netYen": 410,
          "recoveryRate": 5.1,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "10-4-5-8-6 BOX",
          "ticketKeys": [
            "10-4",
            "10-5",
            "10-8",
            "10-6",
            "4-5",
            "4-8",
            "4-6",
            "5-8",
            "5-6",
            "8-6"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 560,
          "netYen": -440,
          "recoveryRate": 0.56,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "10-4-5-8-6 BOX",
          "ticketKeys": [
            "10-4-5",
            "10-4-8",
            "10-4-6",
            "10-5-8",
            "10-5-6",
            "10-8-6",
            "4-5-8",
            "4-5-6",
            "4-8-6",
            "5-8-6"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1020,
          "netYen": 20,
          "recoveryRate": 1.02,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 2090,
      "netYen": -10,
      "recoveryRate": 0.9952380952380953,
      "hit": true,
      "finishByHorseNumber": {
        "1": 9,
        "2": 10,
        "3": 8,
        "4": 2,
        "5": 3,
        "6": 4,
        "7": 6,
        "8": 5,
        "9": 7,
        "10": 1
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "アパッシメント",
              "score": 0.5496629966114968,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "マナボニート",
              "score": 0.4502851697438045,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "フードマン",
              "score": 0.3159241767937076,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "マナボニート",
              "score": 0.3333333333333333,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "アパッシメント",
              "score": 0.3055555555555555,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "バシレウスシチー",
              "score": 0.2361111111111111,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "アパッシメント",
              "score": 0.12523089044345,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "フミサウンド",
              "score": 0.08240301022905322,
              "finish": 9
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "マジカルフェアリー",
              "score": 0.0771225448862057,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 510,
              "netYen": 410,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-4-5-8-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 560,
              "netYen": -440,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-4-5-8-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1020,
              "netYen": 20,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-10-6-8-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 560,
              "netYen": -440,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-10-6-8-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 510,
              "netYen": 410,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-1-8-7-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-1-8-7-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-11",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 11,
      "raceTitle": "デルマーサラブレッドクラブ賞マリーンステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 10,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "10",
          "ticketKeys": [
            "10"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 370,
          "netYen": 270,
          "recoveryRate": 3.7,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "10-12-11-7-8 BOX",
          "ticketKeys": [
            "10-12",
            "10-11",
            "10-7",
            "10-8",
            "12-11",
            "12-7",
            "12-8",
            "11-7",
            "11-8",
            "7-8"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1610,
          "netYen": 610,
          "recoveryRate": 1.61,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "10-12-11-7-8 BOX",
          "ticketKeys": [
            "10-12-11",
            "10-12-7",
            "10-12-8",
            "10-11-7",
            "10-11-8",
            "10-7-8",
            "12-11-7",
            "12-11-8",
            "12-7-8",
            "11-7-8"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2190,
          "netYen": 1190,
          "recoveryRate": 2.19,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 4170,
      "netYen": 2070,
      "recoveryRate": 1.9857142857142858,
      "hit": true,
      "finishByHorseNumber": {
        "1": 9,
        "2": 13,
        "3": 4,
        "4": 5,
        "5": 10,
        "6": 6,
        "7": 8,
        "8": 7,
        "9": 11,
        "10": 1,
        "11": 3,
        "12": 2,
        "13": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ウェイワードアクト",
              "score": 0.5282698749171133,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "レヴォントゥレット",
              "score": 0.37932387692629166,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ヒルノハンブルク",
              "score": 0.36763407754632405,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "オウギノカナメ",
              "score": 0.3958333333333333,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ヒルノハンブルク",
              "score": 0.35416666666666663,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ウェイワードアクト",
              "score": 0.3333333333333333,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ウェイワードアクト",
              "score": 0.1217387445314743,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ヒルノハンブルク",
              "score": 0.09227313565131266,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ラタフォレスト",
              "score": 0.08752026692168513,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 370,
              "netYen": 270,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-12-11-7-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1610,
              "netYen": 610,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-12-11-7-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2190,
              "netYen": 1190,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-11-10-6-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-11-10-6-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 370,
              "netYen": 270,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-11-7-12-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1610,
              "netYen": 610,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-11-7-12-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2190,
              "netYen": 1190,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-02-12",
      "date": "2026-07-18",
      "meetingName": "1回函館11日",
      "venueCode": "HAKODATE",
      "raceNo": 12,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 1,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "1",
          "ticketKeys": [
            "1"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 690,
          "netYen": 590,
          "recoveryRate": 6.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "1-3-6-7-10 BOX",
          "ticketKeys": [
            "1-3",
            "1-6",
            "1-7",
            "1-10",
            "3-6",
            "3-7",
            "3-10",
            "6-7",
            "6-10",
            "7-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2860,
          "netYen": 1860,
          "recoveryRate": 2.86,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "1-3-6-7-10 BOX",
          "ticketKeys": [
            "1-3-6",
            "1-3-7",
            "1-3-10",
            "1-6-7",
            "1-6-10",
            "1-7-10",
            "3-6-7",
            "3-6-10",
            "3-7-10",
            "6-7-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 7180,
          "netYen": 6180,
          "recoveryRate": 7.18,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 10730,
      "netYen": 8630,
      "recoveryRate": 5.109523809523809,
      "hit": true,
      "finishByHorseNumber": {
        "1": 1,
        "2": 8,
        "3": 2,
        "4": 9,
        "5": 10,
        "6": 4,
        "7": 2,
        "8": 11,
        "9": 5,
        "10": 7,
        "11": 6,
        "12": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ラミアメンテ",
              "score": 0.5119765249802402,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハーモニーソング",
              "score": 0.3802841991630428,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ルージュベルベット",
              "score": 0.28740160215535404,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "バレンタインビスタ",
              "score": 0.3333333333333333,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ランプローグ",
              "score": 0.3106060606060606,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ハーモニーソング",
              "score": 0.2424242424242425,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ラミアメンテ",
              "score": 0.12015319147641641,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "エコロハート",
              "score": 0.08024939631400703,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ランプローグ",
              "score": 0.0798549455173898,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 690,
              "netYen": 590,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-3-7-6-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2860,
              "netYen": 1860,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-3-7-6-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 7180,
              "netYen": 6180,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-10-3-8-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-10-3-8-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 690,
              "netYen": 590,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-9-10-5-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-9-10-5-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-01",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 1,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 12,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "12",
          "ticketKeys": [
            "12"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 760,
          "netYen": 660,
          "recoveryRate": 7.6,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "12-5-8-4-3 BOX",
          "ticketKeys": [
            "12-5",
            "12-8",
            "12-4",
            "12-3",
            "5-8",
            "5-4",
            "5-3",
            "8-4",
            "8-3",
            "4-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1510,
          "netYen": 510,
          "recoveryRate": 1.51,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "12-5-8-4-3 BOX",
          "ticketKeys": [
            "12-5-8",
            "12-5-4",
            "12-5-3",
            "12-8-4",
            "12-8-3",
            "12-4-3",
            "5-8-4",
            "5-8-3",
            "5-4-3",
            "8-4-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1860,
          "netYen": 860,
          "recoveryRate": 1.86,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 4130,
      "netYen": 2030,
      "recoveryRate": 1.9666666666666666,
      "hit": true,
      "finishByHorseNumber": {
        "1": 9,
        "2": 8,
        "3": 4,
        "4": 6,
        "5": 2,
        "6": 7,
        "7": null,
        "8": 3,
        "9": 5,
        "10": 11,
        "11": 10,
        "12": 1,
        "13": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンハーヴェ",
              "score": 0.5569252316724471,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "エーアイクワイ",
              "score": 0.3806344650496245,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "シュネーバレン",
              "score": 0.3076863397836182,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "サリードゥ",
              "score": 0.375,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "エーアイクワイ",
              "score": 0.2916666666666667,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ショウナンハーヴェ",
              "score": 0.2916666666666667,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ショウナンハーヴェ",
              "score": 0.11681024812982983,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "エーオープリマ",
              "score": 0.07029564784369226,
              "finish": 8
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "サリードゥ",
              "score": 0.07026295257619587,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 760,
              "netYen": 660,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-5-8-4-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1510,
              "netYen": 510,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-5-8-4-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1860,
              "netYen": 860,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-5-12-11-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1510,
              "netYen": 510,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-5-12-11-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 760,
              "netYen": 660,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-2-4-5-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1510,
              "netYen": 510,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-2-4-5-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1860,
              "netYen": 860,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-02",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 2,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 200,
          "netYen": 100,
          "recoveryRate": 2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-1-9-3-4 BOX",
          "ticketKeys": [
            "2-1",
            "2-9",
            "2-3",
            "2-4",
            "1-9",
            "1-3",
            "1-4",
            "9-3",
            "9-4",
            "3-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 870,
          "netYen": -130,
          "recoveryRate": 0.87,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-1-9-3-4 BOX",
          "ticketKeys": [
            "2-1-9",
            "2-1-3",
            "2-1-4",
            "2-9-3",
            "2-9-4",
            "2-3-4",
            "1-9-3",
            "1-9-4",
            "1-3-4",
            "9-3-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 420,
          "netYen": -580,
          "recoveryRate": 0.42,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 1490,
      "netYen": -610,
      "recoveryRate": 0.7095238095238096,
      "hit": true,
      "finishByHorseNumber": {
        "1": 3,
        "2": 1,
        "3": 2,
        "4": 5,
        "5": 6,
        "6": 8,
        "7": 9,
        "8": 7,
        "9": 4
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ビップヴィーナス",
              "score": 0.5389744618777437,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "サノノキセキ",
              "score": 0.45724961633744765,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ウィナーズチェック",
              "score": 0.28631490153450434,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "サノノキセキ",
              "score": 0.3333333333333333,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "スクリプトール",
              "score": 0.3020833333333333,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ファウナード",
              "score": 0.29166666666666663,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ビップヴィーナス",
              "score": 0.11155276985944529,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "サノノキセキ",
              "score": 0.0821681423852831,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ファウナード",
              "score": 0.07842616855482003,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 200,
              "netYen": 100,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-1-3-9-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 870,
              "netYen": -130,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-1-3-9-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 420,
              "netYen": -580,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-9-8-2-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-9-8-2-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 200,
              "netYen": 100,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-1-8-9-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 870,
              "netYen": -130,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-1-8-9-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 420,
              "netYen": -580,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-03",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 370,
          "netYen": 270,
          "recoveryRate": 3.7,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-6-9-3-5 BOX",
          "ticketKeys": [
            "13-6",
            "13-9",
            "13-3",
            "13-5",
            "6-9",
            "6-3",
            "6-5",
            "9-3",
            "9-5",
            "3-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 690,
          "netYen": -310,
          "recoveryRate": 0.69,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-6-9-3-5 BOX",
          "ticketKeys": [
            "13-6-9",
            "13-6-3",
            "13-6-5",
            "13-9-3",
            "13-9-5",
            "13-3-5",
            "6-9-3",
            "6-9-5",
            "6-3-5",
            "9-3-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 490,
          "netYen": -510,
          "recoveryRate": 0.49,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 1550,
      "netYen": -550,
      "recoveryRate": 0.7380952380952381,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 12,
        "3": 4,
        "4": 11,
        "5": 6,
        "6": 2,
        "7": 13,
        "8": 16,
        "9": 3,
        "10": 14,
        "11": 15,
        "12": 7,
        "13": 1,
        "14": 9,
        "15": 5,
        "16": 10
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ゲンテン",
              "score": 0.6404876664022398,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ニンジャトットリ",
              "score": 0.31356558412751195,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ハングローズ",
              "score": 0.29426088903294556,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 8,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "プリンセスダーコ",
              "score": 0.3416666666666667,
              "finish": 8
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ニンジャトットリ",
              "score": 0.3333333333333333,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ゲンテン",
              "score": 0.31666666666666665,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ゲンテン",
              "score": 0.12270372289786773,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "サクラボーベル",
              "score": 0.07754440805109349,
              "finish": 12
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクスペクタント",
              "score": 0.07608455095539966,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 370,
              "netYen": 270,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-6-9-3-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 690,
              "netYen": -310,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-6-9-3-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 490,
              "netYen": -510,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-6-13-14-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 690,
              "netYen": -310,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-6-13-14-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 370,
              "netYen": 270,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-2-3-5-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-2-3-5-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-04",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 12,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "12",
          "ticketKeys": [
            "12"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 390,
          "netYen": 290,
          "recoveryRate": 3.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "12-4-11-9-10 BOX",
          "ticketKeys": [
            "12-4",
            "12-11",
            "12-9",
            "12-10",
            "4-11",
            "4-9",
            "4-10",
            "11-9",
            "11-10",
            "9-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1770,
          "netYen": 770,
          "recoveryRate": 1.77,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "12-4-11-9-10 BOX",
          "ticketKeys": [
            "12-4-11",
            "12-4-9",
            "12-4-10",
            "12-11-9",
            "12-11-10",
            "12-9-10",
            "4-11-9",
            "4-11-10",
            "4-9-10",
            "11-9-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 11320,
          "netYen": 10320,
          "recoveryRate": 11.32,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 13480,
      "netYen": 11380,
      "recoveryRate": 6.419047619047619,
      "hit": true,
      "finishByHorseNumber": {
        "1": 13,
        "2": 10,
        "3": 14,
        "4": 2,
        "5": 15,
        "6": 11,
        "7": 7,
        "8": 9,
        "9": 3,
        "10": 6,
        "11": 4,
        "12": 1,
        "13": 8,
        "14": 12,
        "15": 5,
        "16": 16
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "リーデレクオーレ",
              "score": 0.45165883483154035,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "オンナキュヌヴィ",
              "score": 0.3412800546269733,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "エンジェルサン",
              "score": 0.32000855365644,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "エンジェルサン",
              "score": 0.35,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハイティー",
              "score": 0.3333333333333333,
              "finish": 14
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "リーデレクオーレ",
              "score": 0.31666666666666665,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "リーデレクオーレ",
              "score": 0.10051554722179053,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハイティー",
              "score": 0.09736769413718142,
              "finish": 14
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "オンナキュヌヴィ",
              "score": 0.07389920174425661,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-4-9-11-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1770,
              "netYen": 770,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-4-9-11-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 11320,
              "netYen": 10320,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "9-3-12-11-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "9-3-12-11-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-3-4-11-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1770,
              "netYen": 770,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-3-4-11-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-05",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 5,
      "raceTitle": "メイクデビュー福島",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 270,
          "netYen": 170,
          "recoveryRate": 2.7,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-1-9-13-3 BOX",
          "ticketKeys": [
            "2-1",
            "2-9",
            "2-13",
            "2-3",
            "1-9",
            "1-13",
            "1-3",
            "9-13",
            "9-3",
            "13-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1510,
          "netYen": 510,
          "recoveryRate": 1.51,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-1-9-13-3 BOX",
          "ticketKeys": [
            "2-1-9",
            "2-1-13",
            "2-1-3",
            "2-9-13",
            "2-9-3",
            "2-13-3",
            "1-9-13",
            "1-9-3",
            "1-13-3",
            "9-13-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 3740,
          "netYen": 2740,
          "recoveryRate": 3.74,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 5520,
      "netYen": 3420,
      "recoveryRate": 2.6285714285714286,
      "hit": true,
      "finishByHorseNumber": {
        "1": 3,
        "2": 1,
        "3": 6,
        "4": 13,
        "5": 12,
        "6": 4,
        "7": 9,
        "8": 10,
        "9": 5,
        "10": 11,
        "11": 7,
        "12": 14,
        "13": 2,
        "14": 8,
        "15": 15
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "シルクドマルス",
              "score": 0.5817901808309167,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "サウンズオーサム",
              "score": 0.34348167153441933,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ドナリー",
              "score": 0.2917467011859088,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ドナリー",
              "score": 0.3333333333333333,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "フェリシタル",
              "score": 0.32738095238095233,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "シルクドマルス",
              "score": 0.31547619047619047,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "シルクドマルス",
              "score": 0.1097887611496523,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "マリナーヴァレイ",
              "score": 0.08721219922558894,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "フェリシタル",
              "score": 0.08150870697512488,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 270,
              "netYen": 170,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-1-13-9-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1510,
              "netYen": 510,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-1-13-9-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3740,
              "netYen": 2740,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-3-2-7-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1510,
              "netYen": 510,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-3-2-7-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 270,
              "netYen": 170,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-9-3-11-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-9-3-11-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-06",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 6,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 1790,
          "netYen": 1690,
          "recoveryRate": 17.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-15-1-5-3 BOX",
          "ticketKeys": [
            "2-15",
            "2-1",
            "2-5",
            "2-3",
            "15-1",
            "15-5",
            "15-3",
            "1-5",
            "1-3",
            "5-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 5010,
          "netYen": 4010,
          "recoveryRate": 5.01,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-15-1-5-3 BOX",
          "ticketKeys": [
            "2-15-1",
            "2-15-5",
            "2-15-3",
            "2-1-5",
            "2-1-3",
            "2-5-3",
            "15-1-5",
            "15-1-3",
            "15-5-3",
            "1-5-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 132910,
          "netYen": 131910,
          "recoveryRate": 132.91,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 139710,
      "netYen": 137610,
      "recoveryRate": 66.52857142857142,
      "hit": true,
      "finishByHorseNumber": {
        "1": 6,
        "2": 1,
        "3": 3,
        "4": 7,
        "5": 5,
        "6": 9,
        "7": 4,
        "8": 15,
        "9": 12,
        "10": 14,
        "11": 11,
        "12": 10,
        "13": 8,
        "14": 13,
        "15": 2
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "スクイーズアウト",
              "score": 0.43867393275233724,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "アラビアンドリーム",
              "score": 0.42212994942245086,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "サンタピア",
              "score": 0.28116090984316033,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 10,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "アデルフィー",
              "score": 0.3511904761904762,
              "finish": 10
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "テンオンスゴールド",
              "score": 0.3333333333333333,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "スクイーズアウト",
              "score": 0.31547619047619047,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "スクイーズアウト",
              "score": 0.10111579090290246,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ベイツリー",
              "score": 0.08064911551996422,
              "finish": 14
            },
            {
              "mark": "▲",
              "horseNumber": 15,
              "horseName": "アラビアンドリーム",
              "score": 0.08023110697736491,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 1790,
              "netYen": 1690,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-15-3-1-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 5010,
              "netYen": 4010,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-15-3-1-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 132910,
              "netYen": 131910,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-1-2-13-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-1-2-13-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 1790,
              "netYen": 1690,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-10-15-12-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 5010,
              "netYen": 4010,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-10-15-12-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-07",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 7,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 11,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "11",
          "ticketKeys": [
            "11"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 390,
          "netYen": 290,
          "recoveryRate": 3.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "11-8-13-1-12 BOX",
          "ticketKeys": [
            "11-8",
            "11-13",
            "11-1",
            "11-12",
            "8-13",
            "8-1",
            "8-12",
            "13-1",
            "13-12",
            "1-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 8160,
          "netYen": 7160,
          "recoveryRate": 8.16,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "11-8-13-1-12 BOX",
          "ticketKeys": [
            "11-8-13",
            "11-8-1",
            "11-8-12",
            "11-13-1",
            "11-13-12",
            "11-1-12",
            "8-13-1",
            "8-13-12",
            "8-1-12",
            "13-1-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 8550,
      "netYen": 6450,
      "recoveryRate": 4.071428571428571,
      "hit": true,
      "finishByHorseNumber": {
        "1": 4,
        "2": 10,
        "3": 14,
        "4": 11,
        "5": 6,
        "6": 16,
        "7": 3,
        "8": 5,
        "9": 9,
        "10": 15,
        "11": 1,
        "12": 7,
        "13": 2,
        "14": 12,
        "15": 13,
        "16": 8
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アッシズオブローズ",
              "score": 0.6096327316134962,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "マイネルリーヒム",
              "score": 0.28446737695176777,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ブライトエアリー",
              "score": 0.27374460149974,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "セキテイリノ",
              "score": 0.475,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "スチールギターラグ",
              "score": 0.3333333333333333,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "アッシズオブローズ",
              "score": 0.31666666666666665,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アッシズオブローズ",
              "score": 0.12270372289786773,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "スチールギターラグ",
              "score": 0.07949821603375952,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ベルトラッキ",
              "score": 0.07928069085562213,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-13-7-8-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 8160,
              "netYen": 7160,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-13-7-8-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 33470,
              "netYen": 32470,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-8-11-5-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-8-11-5-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-8-12-14-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-8-12-14-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-08",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 12,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "12",
          "ticketKeys": [
            "12"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 650,
          "netYen": 550,
          "recoveryRate": 6.5,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "12-1-11-13-10 BOX",
          "ticketKeys": [
            "12-1",
            "12-11",
            "12-13",
            "12-10",
            "1-11",
            "1-13",
            "1-10",
            "11-13",
            "11-10",
            "13-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 3430,
          "netYen": 2430,
          "recoveryRate": 3.43,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "12-1-11-13-10 BOX",
          "ticketKeys": [
            "12-1-11",
            "12-1-13",
            "12-1-10",
            "12-11-13",
            "12-11-10",
            "12-13-10",
            "1-11-13",
            "1-11-10",
            "1-13-10",
            "11-13-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 4080,
      "netYen": 1980,
      "recoveryRate": 1.9428571428571428,
      "hit": true,
      "finishByHorseNumber": {
        "1": 5,
        "2": 10,
        "3": 12,
        "4": null,
        "5": 7,
        "6": 11,
        "7": 3,
        "8": 9,
        "9": 13,
        "10": 4,
        "11": 2,
        "12": 1,
        "13": 6,
        "14": 8,
        "15": 15,
        "16": 14
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コックオーヴァン",
              "score": 0.5222761113462,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブライティアブーケ",
              "score": 0.32116282240719507,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ココボロ",
              "score": 0.26124513956176,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ルシェロアズーリ",
              "score": 0.3333333333333333,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブライティアブーケ",
              "score": 0.31666666666666665,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "コックオーヴァン",
              "score": 0.31666666666666665,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コックオーヴァン",
              "score": 0.1024816669158699,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ブルズアイプリンス",
              "score": 0.08749981849084287,
              "finish": 10
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ミセスリリー",
              "score": 0.07273174678082654,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 650,
              "netYen": 550,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-11-7-1-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3430,
              "netYen": 2430,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-11-7-1-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 167810,
              "netYen": 166810,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-11-12-1-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3430,
              "netYen": 2430,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-11-12-1-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 650,
              "netYen": 550,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-2-14-11-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3430,
              "netYen": 2430,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-2-14-11-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-09",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 9,
      "raceTitle": "開成山特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 3,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-8-11-2-10 BOX",
          "ticketKeys": [
            "5-8",
            "5-11",
            "5-2",
            "5-10",
            "8-11",
            "8-2",
            "8-10",
            "11-2",
            "11-10",
            "2-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2940,
          "netYen": 1940,
          "recoveryRate": 2.94,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-8-11-2-10 BOX",
          "ticketKeys": [
            "5-8-11",
            "5-8-2",
            "5-8-10",
            "5-11-2",
            "5-11-10",
            "5-2-10",
            "8-11-2",
            "8-11-10",
            "8-2-10",
            "11-2-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1870,
          "netYen": 870,
          "recoveryRate": 1.87,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 4810,
      "netYen": 2710,
      "recoveryRate": 2.2904761904761903,
      "hit": true,
      "finishByHorseNumber": {
        "1": 11,
        "2": 9,
        "3": 10,
        "4": 4,
        "5": 3,
        "6": 7,
        "7": 6,
        "8": 1,
        "9": 8,
        "10": 5,
        "11": 2,
        "12": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ドリームプレミア",
              "score": 0.45157297644127925,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "リュクスパトロール",
              "score": 0.3882258770487059,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ノリマル",
              "score": 0.37624836507088893,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ノリマル",
              "score": 0.4962121212121212,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "オメガストリーム",
              "score": 0.3787878787878788,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "リュクスパトロール",
              "score": 0.33712121212121215,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "リュクスパトロール",
              "score": 0.10473674896204914,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ドリームプレミア",
              "score": 0.09122434622997351,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "オブラプリーマ",
              "score": 0.07861145823621592,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-8-11-2-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2940,
              "netYen": 1940,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-8-11-2-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1870,
              "netYen": 870,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-7-8-5-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2940,
              "netYen": 1940,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-7-8-5-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1870,
              "netYen": 870,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 3010,
              "netYen": 2910,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-5-10-2-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2940,
              "netYen": 1940,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-5-10-2-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1870,
              "netYen": 870,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-10",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 10,
      "raceTitle": "米沢特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 3,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-15-14-3-12 BOX",
          "ticketKeys": [
            "6-15",
            "6-14",
            "6-3",
            "6-12",
            "15-14",
            "15-3",
            "15-12",
            "14-3",
            "14-12",
            "3-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 12210,
          "netYen": 11210,
          "recoveryRate": 12.21,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-15-14-3-12 BOX",
          "ticketKeys": [
            "6-15-14",
            "6-15-3",
            "6-15-12",
            "6-14-3",
            "6-14-12",
            "6-3-12",
            "15-14-3",
            "15-14-12",
            "15-3-12",
            "14-3-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 19870,
          "netYen": 18870,
          "recoveryRate": 19.87,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 32080,
      "netYen": 29980,
      "recoveryRate": 15.276190476190477,
      "hit": true,
      "finishByHorseNumber": {
        "1": 5,
        "2": 13,
        "3": 11,
        "4": 12,
        "5": 10,
        "6": 3,
        "7": 6,
        "8": 8,
        "9": 9,
        "10": 14,
        "11": 15,
        "12": 4,
        "13": 7,
        "14": 2,
        "15": 1
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "モリノアミーゴ",
              "score": 0.37393624793783814,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "レッドベルダンス",
              "score": 0.3684660320045181,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "オーケーマヒナ",
              "score": 0.3587882965490524,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "レッドベルダンス",
              "score": 0.34523809523809523,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "モリノアミーゴ",
              "score": 0.34523809523809523,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "オーケーマヒナ",
              "score": 0.3333333333333333,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "モリノアミーゴ",
              "score": 0.10491369249028747,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "グロスビーク",
              "score": 0.09625753615873626,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ヴァルドルチャ",
              "score": 0.0794538358508548,
              "finish": 14
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 1830,
              "netYen": 1730,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "15-6-14-3-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 12210,
              "netYen": 11210,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "15-6-14-3-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 19870,
              "netYen": 18870,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-15-14-5-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 12210,
              "netYen": 11210,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-15-14-5-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 19870,
              "netYen": 18870,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 1830,
              "netYen": 1730,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "15-3-10-4-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "15-3-10-4-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-11",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 11,
      "raceTitle": "阿武隈ステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 480,
          "netYen": 380,
          "recoveryRate": 4.8,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-4-5-8-9 BOX",
          "ticketKeys": [
            "13-4",
            "13-5",
            "13-8",
            "13-9",
            "4-5",
            "4-8",
            "4-9",
            "5-8",
            "5-9",
            "8-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 4940,
          "netYen": 3940,
          "recoveryRate": 4.94,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-4-5-8-9 BOX",
          "ticketKeys": [
            "13-4-5",
            "13-4-8",
            "13-4-9",
            "13-5-8",
            "13-5-9",
            "13-8-9",
            "4-5-8",
            "4-5-9",
            "4-8-9",
            "5-8-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 16060,
          "netYen": 15060,
          "recoveryRate": 16.06,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 21480,
      "netYen": 19380,
      "recoveryRate": 10.228571428571428,
      "hit": true,
      "finishByHorseNumber": {
        "1": 9,
        "2": 14,
        "3": 11,
        "4": 3,
        "5": 4,
        "6": 12,
        "7": 10,
        "8": 2,
        "9": 5,
        "10": 13,
        "11": 7,
        "12": 6,
        "13": 1,
        "14": 8,
        "15": 16,
        "16": 15
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ミラビリスマジック",
              "score": 0.517844237111341,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワイドアラジン",
              "score": 0.33562205592336924,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ホウオウスーペリア",
              "score": 0.2916145205765449,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 11,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "アマイ",
              "score": 0.35,
              "finish": 11
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "コスモアンソロジー",
              "score": 0.3333333333333333,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "コンドゥイア",
              "score": 0.3333333333333333,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ミラビリスマジック",
              "score": 0.11981335192766679,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 16,
              "horseName": "フォルラニーニ",
              "score": 0.08353496868014447,
              "finish": 15
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ホウオウスーペリア",
              "score": 0.08243365354585827,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 480,
              "netYen": 380,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-4-8-5-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4940,
              "netYen": 3940,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-4-8-5-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 16060,
              "netYen": 15060,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-5-9-15-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-5-9-15-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 480,
              "netYen": 380,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-16-8-12-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4940,
              "netYen": 3940,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-16-8-12-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-03-12",
      "date": "2026-07-18",
      "meetingName": "2回福島7日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 12,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 400,
          "netYen": 300,
          "recoveryRate": 4,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-2-8-13-3 BOX",
          "ticketKeys": [
            "6-2",
            "6-8",
            "6-13",
            "6-3",
            "2-8",
            "2-13",
            "2-3",
            "8-13",
            "8-3",
            "13-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 500,
          "netYen": -500,
          "recoveryRate": 0.5,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-2-8-13-3 BOX",
          "ticketKeys": [
            "6-2-8",
            "6-2-13",
            "6-2-3",
            "6-8-13",
            "6-8-3",
            "6-13-3",
            "2-8-13",
            "2-8-3",
            "2-13-3",
            "8-13-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2590,
          "netYen": 1590,
          "recoveryRate": 2.59,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 3490,
      "netYen": 1390,
      "recoveryRate": 1.661904761904762,
      "hit": true,
      "finishByHorseNumber": {
        "1": 14,
        "2": 2,
        "3": 7,
        "4": 5,
        "5": 6,
        "6": 1,
        "7": 10,
        "8": 3,
        "9": 8,
        "10": 15,
        "11": 13,
        "12": 9,
        "13": 4,
        "14": 12,
        "15": 16,
        "16": 11
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ロイヤルスパイア",
              "score": 0.5335540046604539,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ソニックブレイカー",
              "score": 0.40056315533198816,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "アンプイットアップ",
              "score": 0.3280350362955996,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ソニックブレイカー",
              "score": 0.3333333333333333,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ディヴァインスカイ",
              "score": 0.3333333333333333,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ロイヤルスパイア",
              "score": 0.31666666666666665,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ロイヤルスパイア",
              "score": 0.11594539269165065,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ソニックブレイカー",
              "score": 0.08527642892091619,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "エコロカディス",
              "score": 0.07637631032927993,
              "finish": 12
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 400,
              "netYen": 300,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-2-8-13-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 500,
              "netYen": -500,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-2-8-13-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2590,
              "netYen": 1590,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-3-6-4-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 500,
              "netYen": -500,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-3-6-4-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2590,
              "netYen": 1590,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 400,
              "netYen": 300,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-2-14-16-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 500,
              "netYen": -500,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-2-14-16-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-01",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 1,
      "raceTitle": "障害3歳以上未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 420,
          "netYen": 320,
          "recoveryRate": 4.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-11-9-6-7 BOX",
          "ticketKeys": [
            "2-11",
            "2-9",
            "2-6",
            "2-7",
            "11-9",
            "11-6",
            "11-7",
            "9-6",
            "9-7",
            "6-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1630,
          "netYen": 630,
          "recoveryRate": 1.63,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-11-9-6-7 BOX",
          "ticketKeys": [
            "2-11-9",
            "2-11-6",
            "2-11-7",
            "2-9-6",
            "2-9-7",
            "2-6-7",
            "11-9-6",
            "11-9-7",
            "11-6-7",
            "9-6-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2990,
          "netYen": 1990,
          "recoveryRate": 2.99,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 5040,
      "netYen": 2940,
      "recoveryRate": 2.4,
      "hit": true,
      "finishByHorseNumber": {
        "1": 12,
        "2": 1,
        "3": 6,
        "4": 7,
        "5": 8,
        "6": 2,
        "7": 5,
        "8": 10,
        "9": 3,
        "10": 9,
        "11": 4,
        "12": 11
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "セイウンパシュート",
              "score": 0.4088387831255379,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "セイフウサツキ",
              "score": 0.3759610788637693,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "メイショウトム",
              "score": 0.3497386955722776,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "メイショウトム",
              "score": 0.35606060606060597,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "セイウンパシュート",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アドアプローズ",
              "score": 0.31439393939393934,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "セイウンパシュート",
              "score": 0.09687043084330384,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "タイセイレスポンス",
              "score": 0.08798570771849291,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "セイフウサツキ",
              "score": 0.08178818122848285,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 420,
              "netYen": 320,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-9-6-11-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1630,
              "netYen": 630,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-9-6-11-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2990,
              "netYen": 1990,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-2-3-7-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1630,
              "netYen": 630,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-2-3-7-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 420,
              "netYen": 320,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-11-9-5-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-11-9-5-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-02",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 2,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-4-10-7-2 BOX",
          "ticketKeys": [
            "5-4",
            "5-10",
            "5-7",
            "5-2",
            "4-10",
            "4-7",
            "4-2",
            "10-7",
            "10-2",
            "7-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 350,
          "netYen": -650,
          "recoveryRate": 0.35,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-4-10-7-2 BOX",
          "ticketKeys": [
            "5-4-10",
            "5-4-7",
            "5-4-2",
            "5-10-7",
            "5-10-2",
            "5-7-2",
            "4-10-7",
            "4-10-2",
            "4-7-2",
            "10-7-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2000,
          "netYen": 1000,
          "recoveryRate": 2,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 2350,
      "netYen": 250,
      "recoveryRate": 1.119047619047619,
      "hit": true,
      "finishByHorseNumber": {
        "1": 5,
        "2": 4,
        "3": 10,
        "4": 3,
        "5": 2,
        "6": 11,
        "7": 7,
        "8": 8,
        "9": 6,
        "10": 1,
        "11": 9
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ブレイクガール",
              "score": 0.41330492145671044,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "プリメラエストレラ",
              "score": 0.39608005459457074,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ニシノフランケン",
              "score": 0.38621186820799785,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "プリメラエストレラ",
              "score": 0.3666666666666667,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "プリマアルバ",
              "score": 0.3416666666666667,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "イザベル",
              "score": 0.3333333333333333,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ニシノフランケン",
              "score": 0.10285725364182045,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ブレイクガール",
              "score": 0.08256996449817555,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "フランヴィア",
              "score": 0.07748139285062622,
              "finish": 11
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-4-10-7-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 350,
              "netYen": -650,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-4-10-7-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2000,
              "netYen": 1000,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-9-2-10-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-9-2-10-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 460,
              "netYen": 360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-5-6-9-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 350,
              "netYen": -650,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-5-6-9-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2000,
              "netYen": 1000,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-03",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 320,
          "netYen": 220,
          "recoveryRate": 3.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-14-5-7-1 BOX",
          "ticketKeys": [
            "2-14",
            "2-5",
            "2-7",
            "2-1",
            "14-5",
            "14-7",
            "14-1",
            "5-7",
            "5-1",
            "7-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1750,
          "netYen": 750,
          "recoveryRate": 1.75,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-14-5-7-1 BOX",
          "ticketKeys": [
            "2-14-5",
            "2-14-7",
            "2-14-1",
            "2-5-7",
            "2-5-1",
            "2-7-1",
            "14-5-7",
            "14-5-1",
            "14-7-1",
            "5-7-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 3510,
          "netYen": 2510,
          "recoveryRate": 3.51,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 5580,
      "netYen": 3480,
      "recoveryRate": 2.657142857142857,
      "hit": true,
      "finishByHorseNumber": {
        "1": 6,
        "2": 1,
        "3": 12,
        "4": 11,
        "5": 2,
        "6": 13,
        "7": 4,
        "8": 8,
        "9": 10,
        "10": 14,
        "11": 9,
        "12": 7,
        "13": 5,
        "14": 3
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノロザリー",
              "score": 0.5659761095794911,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "メイワキラリ",
              "score": 0.34819940738945304,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "モズオサキニ",
              "score": 0.29955924499733627,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノロザリー",
              "score": 0.37179487179487175,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "メイワキラリ",
              "score": 0.3525641025641026,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "スズカローズキング",
              "score": 0.27564102564102566,
              "finish": 12
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノロザリー",
              "score": 0.11608302598559718,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "スズカローズキング",
              "score": 0.07246642246642246,
              "finish": 12
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ディアデムドール",
              "score": 0.07240958691208989,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 320,
              "netYen": 220,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-14-5-7-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1750,
              "netYen": 750,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-14-5-7-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3510,
              "netYen": 2510,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 320,
              "netYen": 220,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-14-3-5-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1750,
              "netYen": 750,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-14-3-5-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3510,
              "netYen": 2510,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 320,
              "netYen": 220,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-3-13-12-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1750,
              "netYen": 750,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-3-13-12-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-04",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 4,
      "raceTitle": "ソレイユジャンプステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 7,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "7",
          "ticketKeys": [
            "7"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "7-4-5-2-3 BOX",
          "ticketKeys": [
            "7-4",
            "7-5",
            "7-2",
            "7-3",
            "4-5",
            "4-2",
            "4-3",
            "5-2",
            "5-3",
            "2-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 29400,
          "netYen": 28400,
          "recoveryRate": 29.4,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "7-4-5-2-3 BOX",
          "ticketKeys": [
            "7-4-5",
            "7-4-2",
            "7-4-3",
            "7-5-2",
            "7-5-3",
            "7-2-3",
            "4-5-2",
            "4-5-3",
            "4-2-3",
            "5-2-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 10340,
          "netYen": 9340,
          "recoveryRate": 10.34,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 39740,
      "netYen": 37640,
      "recoveryRate": 18.923809523809524,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 4,
        "3": 6,
        "4": 3,
        "5": 1,
        "6": 5,
        "7": 2,
        "8": 7
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "アトラクティーボ",
              "score": 0.46392115130254297,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "スマイルスルー",
              "score": 0.40393290771936546,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ヴァレッタカズマ",
              "score": 0.3771545618895245,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ヴァレッタカズマ",
              "score": 0.43452380952380953,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "コンテナワールド",
              "score": 0.3988095238095238,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "アトラクティーボ",
              "score": 0.3333333333333333,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ヴァレッタカズマ",
              "score": 0.10213599016365531,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "スマイルスルー",
              "score": 0.08405305291901081,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "オールザワールド",
              "score": 0.0767341976488179,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-4-5-2-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 29400,
              "netYen": 28400,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-4-5-2-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 10340,
              "netYen": 9340,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 8260,
              "netYen": 8160,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-2-7-3-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 29400,
              "netYen": 28400,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-2-7-3-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 8260,
              "netYen": 8160,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-4-6-3-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-4-6-3-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-05",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 5,
      "raceTitle": "メイクデビュー小倉",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 1,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "1",
          "ticketKeys": [
            "1"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 120,
          "netYen": 20,
          "recoveryRate": 1.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "1-3-5-2-4 BOX",
          "ticketKeys": [
            "1-3",
            "1-5",
            "1-2",
            "1-4",
            "3-5",
            "3-2",
            "3-4",
            "5-2",
            "5-4",
            "2-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 220,
          "netYen": -780,
          "recoveryRate": 0.22,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "1-3-5-2-4 BOX",
          "ticketKeys": [
            "1-3-5",
            "1-3-2",
            "1-3-4",
            "1-5-2",
            "1-5-4",
            "1-2-4",
            "3-5-2",
            "3-5-4",
            "3-2-4",
            "5-2-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 390,
          "netYen": -610,
          "recoveryRate": 0.39,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 730,
      "netYen": -1370,
      "recoveryRate": 0.3476190476190476,
      "hit": true,
      "finishByHorseNumber": {
        "1": 1,
        "2": 5,
        "3": 2,
        "4": 4,
        "5": 3,
        "6": 7,
        "7": 6
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ウインガラハッド",
              "score": 0.7579867130905873,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハマナスノサクコロ",
              "score": 0.31737235428282384,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ナムラメアリー",
              "score": 0.03716428346473747,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "キシュウマミー",
              "score": 0.33333333333333337,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ウインガラハッド",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ナムラメアリー",
              "score": 0.2916666666666667,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ウインガラハッド",
              "score": 0.11218493847055268,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ハマナスノサクコロ",
              "score": 0.073012527414357,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "マルモタワー",
              "score": 0.07009926299567469,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 120,
              "netYen": 20,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-3-5-2-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 220,
              "netYen": -780,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-3-5-2-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 390,
              "netYen": -610,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-1-5-3-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 220,
              "netYen": -780,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-1-5-3-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 390,
              "netYen": -610,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 120,
              "netYen": 20,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-3-6-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 220,
              "netYen": -780,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-3-6-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 390,
              "netYen": -610,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-06",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 6,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 340,
          "netYen": 240,
          "recoveryRate": 3.4,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-12-13-3-9 BOX",
          "ticketKeys": [
            "6-12",
            "6-13",
            "6-3",
            "6-9",
            "12-13",
            "12-3",
            "12-9",
            "13-3",
            "13-9",
            "3-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 400,
          "netYen": -600,
          "recoveryRate": 0.4,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-12-13-3-9 BOX",
          "ticketKeys": [
            "6-12-13",
            "6-12-3",
            "6-12-9",
            "6-13-3",
            "6-13-9",
            "6-3-9",
            "12-13-3",
            "12-13-9",
            "12-3-9",
            "13-3-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2570,
          "netYen": 1570,
          "recoveryRate": 2.57,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 3310,
      "netYen": 1210,
      "recoveryRate": 1.5761904761904761,
      "hit": true,
      "finishByHorseNumber": {
        "1": 7,
        "2": 6,
        "3": 3,
        "4": 9,
        "5": 12,
        "6": 1,
        "7": 8,
        "8": 4,
        "9": 5,
        "10": null,
        "11": 10,
        "12": 2,
        "13": 11
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "キープシャイニング",
              "score": 0.5828279208055542,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "キングズテイル",
              "score": 0.33144261252630974,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "リテラシー",
              "score": 0.2903582224624511,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "リテラシー",
              "score": 0.41666666666666663,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "キングズテイル",
              "score": 0.35416666666666663,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "キープシャイニング",
              "score": 0.3333333333333333,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "キープシャイニング",
              "score": 0.11222383038504934,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "ラクホマレ",
              "score": 0.0984263870001656,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "コパノルーカス",
              "score": 0.08462443524496686,
              "finish": null
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 340,
              "netYen": 240,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-12-3-13-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 400,
              "netYen": -600,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-12-3-13-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2570,
              "netYen": 1570,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-12-6-8-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 400,
              "netYen": -600,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-12-6-8-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2570,
              "netYen": 1570,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 340,
              "netYen": 240,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-13-10-9-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-13-10-9-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-07",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 7,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 280,
          "netYen": 180,
          "recoveryRate": 2.8,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-12-8-2-9 BOX",
          "ticketKeys": [
            "13-12",
            "13-8",
            "13-2",
            "13-9",
            "12-8",
            "12-2",
            "12-9",
            "8-2",
            "8-9",
            "2-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 990,
          "netYen": -10,
          "recoveryRate": 0.99,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-12-8-2-9 BOX",
          "ticketKeys": [
            "13-12-8",
            "13-12-2",
            "13-12-9",
            "13-8-2",
            "13-8-9",
            "13-2-9",
            "12-8-2",
            "12-8-9",
            "12-2-9",
            "8-2-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1350,
          "netYen": 350,
          "recoveryRate": 1.35,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 2620,
      "netYen": 520,
      "recoveryRate": 1.2476190476190476,
      "hit": true,
      "finishByHorseNumber": {
        "1": 14,
        "2": 4,
        "3": 12,
        "4": 6,
        "5": 13,
        "6": 9,
        "7": 8,
        "8": 2,
        "9": 5,
        "10": 11,
        "11": 10,
        "12": 3,
        "13": 1,
        "14": 7
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "シュプリームレルム",
              "score": 0.5726760589875102,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ネッカーズルム",
              "score": 0.3443739442631534,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴールデンテティス",
              "score": 0.31418963255840016,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "ゴールデンテティス",
              "score": 0.34935897435897434,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ジリアート",
              "score": 0.3333333333333333,
              "finish": 9
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ネッカーズルム",
              "score": 0.2948717948717949,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "シュプリームレルム",
              "score": 0.11701339222007077,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "エイシンミスリル",
              "score": 0.07877039141646872,
              "finish": 10
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ジリアート",
              "score": 0.07525261468743653,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 280,
              "netYen": 180,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-12-8-2-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 990,
              "netYen": -10,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-12-8-2-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1350,
              "netYen": 350,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-6-12-7-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-6-12-7-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 280,
              "netYen": 180,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-11-6-14-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-11-6-14-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-08",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 3,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "3",
          "ticketKeys": [
            "3"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 270,
          "netYen": 170,
          "recoveryRate": 2.7,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "3-4-5-9-1 BOX",
          "ticketKeys": [
            "3-4",
            "3-5",
            "3-9",
            "3-1",
            "4-5",
            "4-9",
            "4-1",
            "5-9",
            "5-1",
            "9-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 670,
          "netYen": -330,
          "recoveryRate": 0.67,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "3-4-5-9-1 BOX",
          "ticketKeys": [
            "3-4-5",
            "3-4-9",
            "3-4-1",
            "3-5-9",
            "3-5-1",
            "3-9-1",
            "4-5-9",
            "4-5-1",
            "4-9-1",
            "5-9-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 3650,
          "netYen": 2650,
          "recoveryRate": 3.65,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 4590,
      "netYen": 2490,
      "recoveryRate": 2.1857142857142855,
      "hit": true,
      "finishByHorseNumber": {
        "1": 5,
        "2": 9,
        "3": 1,
        "4": 4,
        "5": 2,
        "6": 8,
        "7": 10,
        "8": 7,
        "9": 3,
        "10": 6
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "フウセン",
              "score": 0.5874089961504987,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ノンブルドール",
              "score": 0.32260158587474874,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ゴールドアクセス",
              "score": 0.2749534721596077,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ノンブルドール",
              "score": 0.48611111111111105,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワンダフルボンド",
              "score": 0.3888888888888889,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "フウセン",
              "score": 0.375,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "フウセン",
              "score": 0.11924657096458045,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワンダフルボンド",
              "score": 0.10102483734996258,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ダノンアトラス",
              "score": 0.08916535592941328,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 270,
              "netYen": 170,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-5-9-4-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 670,
              "netYen": -330,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-5-9-4-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3650,
              "netYen": 2650,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-4-3-8-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 670,
              "netYen": -330,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-4-3-8-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 270,
              "netYen": 170,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-4-1-7-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 670,
              "netYen": -330,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-4-1-7-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-09",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 9,
      "raceTitle": "ひまわり賞",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 16,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "16",
          "ticketKeys": [
            "16"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 190,
          "netYen": 90,
          "recoveryRate": 1.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "16-10-8-3-17 BOX",
          "ticketKeys": [
            "16-10",
            "16-8",
            "16-3",
            "16-17",
            "10-8",
            "10-3",
            "10-17",
            "8-3",
            "8-17",
            "3-17"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 3710,
          "netYen": 2710,
          "recoveryRate": 3.71,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "16-10-8-3-17 BOX",
          "ticketKeys": [
            "16-10-8",
            "16-10-3",
            "16-10-17",
            "16-8-3",
            "16-8-17",
            "16-3-17",
            "10-8-3",
            "10-8-17",
            "10-3-17",
            "8-3-17"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 12490,
          "netYen": 11490,
          "recoveryRate": 12.49,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 16390,
      "netYen": 14290,
      "recoveryRate": 7.804761904761905,
      "hit": true,
      "finishByHorseNumber": {
        "1": 18,
        "2": 9,
        "3": 6,
        "4": 14,
        "5": 7,
        "6": 4,
        "7": 10,
        "8": 2,
        "9": 5,
        "10": 3,
        "11": 15,
        "12": 11,
        "13": 8,
        "14": 17,
        "15": 12,
        "16": 1,
        "17": 13,
        "18": 16
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "カエリールークス",
              "score": 0.5184876412592312,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "タカモリ",
              "score": 0.3558667901397538,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "タカヨシ",
              "score": 0.30879792734173117,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "タカヨシ",
              "score": 0.3357843137254901,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "トシミチ",
              "score": 0.3333333333333333,
              "finish": 15
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "タカモリ",
              "score": 0.31862745098039214,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "カエリールークス",
              "score": 0.11726870343284286,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "スイトーヨ",
              "score": 0.0905907695538124,
              "finish": 13
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "バミューダボーイ",
              "score": 0.07417582417582418,
              "finish": 18
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 190,
              "netYen": 90,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "16-10-8-3-17 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3710,
              "netYen": 2710,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "16-10-8-3-17 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 12490,
              "netYen": 11490,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "8-11-10-16-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3710,
              "netYen": 2710,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "8-11-10-16-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 12490,
              "netYen": 11490,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 190,
              "netYen": 90,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "16-17-1-8-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3710,
              "netYen": 2710,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "16-17-1-8-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-10",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 10,
      "raceTitle": "熊本城特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 500,
          "netYen": 400,
          "recoveryRate": 5,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-1-5-7-12 BOX",
          "ticketKeys": [
            "2-1",
            "2-5",
            "2-7",
            "2-12",
            "1-5",
            "1-7",
            "1-12",
            "5-7",
            "5-12",
            "7-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 810,
          "netYen": -190,
          "recoveryRate": 0.81,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-1-5-7-12 BOX",
          "ticketKeys": [
            "2-1-5",
            "2-1-7",
            "2-1-12",
            "2-5-7",
            "2-5-12",
            "2-7-12",
            "1-5-7",
            "1-5-12",
            "1-7-12",
            "5-7-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 4360,
          "netYen": 3360,
          "recoveryRate": 4.36,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 5670,
      "netYen": 3570,
      "recoveryRate": 2.7,
      "hit": true,
      "finishByHorseNumber": {
        "1": 2,
        "2": 1,
        "3": 11,
        "4": 8,
        "5": 4,
        "6": 7,
        "7": 3,
        "8": 9,
        "9": 10,
        "10": 5,
        "11": 12,
        "12": 6
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ワイドクリーガー",
              "score": 0.5513506653273418,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "コスモストーム",
              "score": 0.3456294037637506,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ワンダーカモン",
              "score": 0.30312384722214863,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ワンダーカモン",
              "score": 0.678030303030303,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "コスモストーム",
              "score": 0.45075757575757575,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "タマモジャスミン",
              "score": 0.3787878787878788,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ワイドクリーガー",
              "score": 0.11053053336137074,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ワンダーカモン",
              "score": 0.0887225144247581,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "タガノヘラクレス",
              "score": 0.07447421992175407,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 500,
              "netYen": 400,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-1-7-5-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 810,
              "netYen": -190,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-1-7-5-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4360,
              "netYen": 3360,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-1-5-2-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 810,
              "netYen": -190,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-1-5-2-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4360,
              "netYen": 3360,
              "hit": true
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 500,
              "netYen": 400,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-7-12-3-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-7-12-3-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-11",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 11,
      "raceTitle": "テレQ杯",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 180,
          "netYen": 80,
          "recoveryRate": 1.8,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-10-1-3-2 BOX",
          "ticketKeys": [
            "5-10",
            "5-1",
            "5-3",
            "5-2",
            "10-1",
            "10-3",
            "10-2",
            "1-3",
            "1-2",
            "3-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 2260,
          "netYen": 1260,
          "recoveryRate": 2.26,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-10-1-3-2 BOX",
          "ticketKeys": [
            "5-10-1",
            "5-10-3",
            "5-10-2",
            "5-1-3",
            "5-1-2",
            "5-3-2",
            "10-1-3",
            "10-1-2",
            "10-3-2",
            "1-3-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 4720,
          "netYen": 3720,
          "recoveryRate": 4.72,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 7160,
      "netYen": 5060,
      "recoveryRate": 3.4095238095238094,
      "hit": true,
      "finishByHorseNumber": {
        "1": 5,
        "2": 8,
        "3": 2,
        "4": 6,
        "5": 1,
        "6": 4,
        "7": 10,
        "8": 11,
        "9": 7,
        "10": 3,
        "11": 9,
        "12": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "コウセキ",
              "score": 0.6970115868767781,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ベイビーキッス",
              "score": 0.29898995099007586,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アイルシャイン",
              "score": 0.2760092876748732,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "コウセキ",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ベイビーキッス",
              "score": 0.3106060606060606,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ロードトレイル",
              "score": 0.2878787878787879,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "コウセキ",
              "score": 0.11556876772275487,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "リチャードバローズ",
              "score": 0.08439291119945708,
              "finish": 9
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ロードトレイル",
              "score": 0.0812283798840271,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 180,
              "netYen": 80,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-10-3-1-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2260,
              "netYen": 1260,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-10-3-1-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 4720,
              "netYen": 3720,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 180,
              "netYen": 80,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-10-1-12-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-10-1-12-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 180,
              "netYen": 80,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-11-1-12-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-11-1-12-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260718-10-12",
      "date": "2026-07-18",
      "meetingName": "2回小倉7日",
      "venueCode": "KOKURA",
      "raceNo": 12,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 160,
          "netYen": 60,
          "recoveryRate": 1.6,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-7-6-8-13 BOX",
          "ticketKeys": [
            "5-7",
            "5-6",
            "5-8",
            "5-13",
            "7-6",
            "7-8",
            "7-13",
            "6-8",
            "6-13",
            "8-13"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 550,
          "netYen": -450,
          "recoveryRate": 0.55,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-7-6-8-13 BOX",
          "ticketKeys": [
            "5-7-6",
            "5-7-8",
            "5-7-13",
            "5-6-8",
            "5-6-13",
            "5-8-13",
            "7-6-8",
            "7-6-13",
            "7-8-13",
            "6-8-13"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 710,
      "netYen": -1390,
      "recoveryRate": 0.3380952380952381,
      "hit": true,
      "finishByHorseNumber": {
        "1": 14,
        "2": 12,
        "3": 13,
        "4": 8,
        "5": 1,
        "6": 5,
        "7": 2,
        "8": 6,
        "9": 10,
        "10": 7,
        "11": 9,
        "12": 11,
        "13": 4,
        "14": 3
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "バートラガッツ",
              "score": 0.6243513634293286,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ブラックレジェンド",
              "score": 0.3438314555896873,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "モズプリヴェール",
              "score": 0.2677843495497191,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 5,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ジューンセクレタ",
              "score": 0.4455128205128205,
              "finish": 5
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "バートラガッツ",
              "score": 0.3333333333333333,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ブラックレジェンド",
              "score": 0.3141025641025641,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "バートラガッツ",
              "score": 0.11983236800946868,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ミッキーコンドル",
              "score": 0.09270596729779235,
              "finish": 14
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フランキーバローズ",
              "score": 0.08438850084920957,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 160,
              "netYen": 60,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-7-14-6-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 550,
              "netYen": -450,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-7-14-6-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2020,
              "netYen": 1020,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-5-7-8-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 550,
              "netYen": -450,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-5-7-8-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 160,
              "netYen": 60,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-1-10-8-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-1-10-8-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-01",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 1,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 1,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "1",
          "ticketKeys": [
            "1"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 170,
          "netYen": 70,
          "recoveryRate": 1.7,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "1-2-3-4-5 BOX",
          "ticketKeys": [
            "1-2",
            "1-3",
            "1-4",
            "1-5",
            "2-3",
            "2-4",
            "2-5",
            "3-4",
            "3-5",
            "4-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 510,
          "netYen": -490,
          "recoveryRate": 0.51,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "1-2-3-4-5 BOX",
          "ticketKeys": [
            "1-2-3",
            "1-2-4",
            "1-2-5",
            "1-3-4",
            "1-3-5",
            "1-4-5",
            "2-3-4",
            "2-3-5",
            "2-4-5",
            "3-4-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1260,
          "netYen": 260,
          "recoveryRate": 1.26,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 1940,
      "netYen": -160,
      "recoveryRate": 0.9238095238095239,
      "hit": true,
      "finishByHorseNumber": {
        "1": 1,
        "2": 8,
        "3": 3,
        "4": 5,
        "5": 2,
        "6": 6,
        "7": 7,
        "8": 4
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ステラトップガン",
              "score": 0.14941351231433955,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "リーゼントエース",
              "score": 0.14623854176938153,
              "finish": 8
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "リアルジャパン",
              "score": 0.11331499314196308,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 8,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "リーゼントエース",
              "score": 0.08304142258127904,
              "finish": 8
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "タイフーンナイン",
              "score": 0.08090386654680258,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ステラトップガン",
              "score": 0.07947184526575186,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 170,
              "netYen": 70,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-2-3-4-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 510,
              "netYen": -490,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-2-3-4-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1260,
              "netYen": 260,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-5-1-3-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 510,
              "netYen": -490,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-5-1-3-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1260,
              "netYen": 260,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-02",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 2,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 4,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "4",
          "ticketKeys": [
            "4"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "4-10-8-6-7 BOX",
          "ticketKeys": [
            "4-10",
            "4-8",
            "4-6",
            "4-7",
            "10-8",
            "10-6",
            "10-7",
            "8-6",
            "8-7",
            "6-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 880,
          "netYen": -120,
          "recoveryRate": 0.88,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "4-10-8-6-7 BOX",
          "ticketKeys": [
            "4-10-8",
            "4-10-6",
            "4-10-7",
            "4-8-6",
            "4-8-7",
            "4-6-7",
            "10-8-6",
            "10-8-7",
            "10-6-7",
            "8-6-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 880,
      "netYen": -1220,
      "recoveryRate": 0.41904761904761906,
      "hit": true,
      "finishByHorseNumber": {
        "1": 3,
        "2": 5,
        "3": 10,
        "4": 2,
        "5": 8,
        "6": 7,
        "7": 1,
        "8": 4,
        "9": 9,
        "10": 6
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ジャーナーリア",
              "score": 0.14413731314716216,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トルークマクト",
              "score": 0.08617981509645453,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "エコロセレナ",
              "score": 0.08437113214235989,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ジャーナーリア",
              "score": 0.0785890012820849,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トルークマクト",
              "score": 0.07839448904489753,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "エコロセレナ",
              "score": 0.07639773310596969,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-10-8-6-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 880,
              "netYen": -120,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-10-8-6-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-10-8-7-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 880,
              "netYen": -120,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-10-8-7-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-03",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 11,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-11-1-7-12 BOX",
          "ticketKeys": [
            "13-11",
            "13-1",
            "13-7",
            "13-12",
            "11-1",
            "11-7",
            "11-12",
            "1-7",
            "1-12",
            "7-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-11-1-7-12 BOX",
          "ticketKeys": [
            "13-11-1",
            "13-11-7",
            "13-11-12",
            "13-1-7",
            "13-1-12",
            "13-7-12",
            "11-1-7",
            "11-1-12",
            "11-7-12",
            "1-7-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 4,
        "2": 5,
        "3": 2,
        "4": 6,
        "5": 8,
        "6": 14,
        "7": 10,
        "8": 9,
        "9": 1,
        "10": 12,
        "11": 3,
        "12": 7,
        "13": 11,
        "14": 13
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 11,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ニシノモリミチ",
              "score": 0.07839033391719126,
              "finish": 11
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ホウオウファラオ",
              "score": 0.07746490796062729,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "サクセスゴールド",
              "score": 0.0713425492085303,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 11,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "ニシノモリミチ",
              "score": 0.08456828133557283,
              "finish": 11
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ホウオウファラオ",
              "score": 0.08369775068123214,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "サクセスゴールド",
              "score": 0.08168825682006968,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-11-1-7-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-11-1-7-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-11-1-12-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-11-1-12-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-04",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 3,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "3",
          "ticketKeys": [
            "3"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "3-7-9-13-12 BOX",
          "ticketKeys": [
            "3-7",
            "3-9",
            "3-13",
            "3-12",
            "7-9",
            "7-13",
            "7-12",
            "9-13",
            "9-12",
            "13-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "3-7-9-13-12 BOX",
          "ticketKeys": [
            "3-7-9",
            "3-7-13",
            "3-7-12",
            "3-9-13",
            "3-9-12",
            "3-13-12",
            "7-9-13",
            "7-9-12",
            "7-13-12",
            "9-13-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 5,
        "2": 6,
        "3": 2,
        "4": 12,
        "5": 7,
        "6": 8,
        "7": 4,
        "8": 1,
        "9": 9,
        "10": 10,
        "11": 3,
        "12": 11,
        "13": 13
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ウインカトリーヌ",
              "score": 0.09214171834796198,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ギオンバヤシ",
              "score": 0.09105301534179229,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "コスモブラック",
              "score": 0.07164735961744283,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ギオンバヤシ",
              "score": 0.09290570182261852,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ウインカトリーヌ",
              "score": 0.08584600953137646,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "コティノス",
              "score": 0.08417318317659543,
              "finish": 13
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-7-9-13-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-7-9-13-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-3-13-12-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-3-13-12-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-05",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 5,
      "raceTitle": "メイクデビュー函館",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 7,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-14-8-13-10 BOX",
          "ticketKeys": [
            "6-14",
            "6-8",
            "6-13",
            "6-10",
            "14-8",
            "14-13",
            "14-10",
            "8-13",
            "8-10",
            "13-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-14-8-13-10 BOX",
          "ticketKeys": [
            "6-14-8",
            "6-14-13",
            "6-14-10",
            "6-8-13",
            "6-8-10",
            "6-13-10",
            "14-8-13",
            "14-8-10",
            "14-13-10",
            "8-13-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 2,
        "2": 9,
        "3": 10,
        "4": 1,
        "5": 3,
        "6": 7,
        "7": 11,
        "8": 14,
        "9": 8,
        "10": 13,
        "11": 4,
        "12": 6,
        "13": 5,
        "14": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 7,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ロジアコース",
              "score": 0.08944132959304672,
              "finish": 7
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "ヒアカムズザサン",
              "score": 0.07809227906962263,
              "finish": 12
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "エコロルーク",
              "score": 0.06740196614887772,
              "finish": 14
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 12,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ヒアカムズザサン",
              "score": 0.09563500672967541,
              "finish": 12
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコロルーク",
              "score": 0.08955038779288356,
              "finish": 14
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "サルトヴェローチェ",
              "score": 0.08931779730752774,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-14-8-13-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-14-8-13-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "14-8-13-6-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "14-8-13-6-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-06",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 6,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 11,
      "topPickFinish": 11,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "11",
          "ticketKeys": [
            "11"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "11-3-14-1-15 BOX",
          "ticketKeys": [
            "11-3",
            "11-14",
            "11-1",
            "11-15",
            "3-14",
            "3-1",
            "3-15",
            "14-1",
            "14-15",
            "1-15"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "11-3-14-1-15 BOX",
          "ticketKeys": [
            "11-3-14",
            "11-3-1",
            "11-3-15",
            "11-14-1",
            "11-14-15",
            "11-1-15",
            "3-14-1",
            "3-14-15",
            "3-1-15",
            "14-1-15"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 1,
        "2": 4,
        "3": 8,
        "4": 10,
        "5": 5,
        "6": 9,
        "7": 13,
        "8": 6,
        "9": 2,
        "10": 3,
        "11": 11,
        "12": 7,
        "13": 16,
        "14": 14,
        "15": 15,
        "16": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 11,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "リアライズブルーム",
              "score": 0.06457571280040214,
              "finish": 11
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ライトオブジアース",
              "score": 0.06417056938056474,
              "finish": 8
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "トゥルージョワ",
              "score": 0.06325722526353167,
              "finish": 14
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 15,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "チェサピークベイ",
              "score": 0.08759702936237791,
              "finish": 15
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "リアライズブルーム",
              "score": 0.08417318317659543,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "コスモファーブロス",
              "score": 0.08294163084017443,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-3-14-1-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-3-14-1-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "15-11-1-9-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2000,
              "netYen": 1000,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "15-11-1-9-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-07",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 7,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 10,
      "topPickFinish": 3,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "10",
          "ticketKeys": [
            "10"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "10-7-14-4-3 BOX",
          "ticketKeys": [
            "10-7",
            "10-14",
            "10-4",
            "10-3",
            "7-14",
            "7-4",
            "7-3",
            "14-4",
            "14-3",
            "4-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "10-7-14-4-3 BOX",
          "ticketKeys": [
            "10-7-14",
            "10-7-4",
            "10-7-3",
            "10-14-4",
            "10-14-3",
            "10-4-3",
            "7-14-4",
            "7-14-3",
            "7-4-3",
            "14-4-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 9,
        "2": 6,
        "3": 13,
        "4": 1,
        "5": 8,
        "6": 2,
        "7": 7,
        "8": 12,
        "9": 4,
        "10": 3,
        "11": 11,
        "12": 10,
        "13": 14,
        "14": 5
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ゴールドドレッサ",
              "score": 0.07774819700015759,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ジーティーアリア",
              "score": 0.07729912576353618,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ヴァレンティーニ",
              "score": 0.07476320779945003,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 7,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ジーティーアリア",
              "score": 0.08531986513217621,
              "finish": 7
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ゴールドドレッサ",
              "score": 0.08199976896638589,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ストラニエーロ",
              "score": 0.07921166038451712,
              "finish": 11
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-7-14-4-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-7-14-4-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-10-11-14-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-10-11-14-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-08",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 4,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "4",
          "ticketKeys": [
            "4"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "4-3-6-10-2 BOX",
          "ticketKeys": [
            "4-3",
            "4-6",
            "4-10",
            "4-2",
            "3-6",
            "3-10",
            "3-2",
            "6-10",
            "6-2",
            "10-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "4-3-6-10-2 BOX",
          "ticketKeys": [
            "4-3-6",
            "4-3-10",
            "4-3-2",
            "4-6-10",
            "4-6-2",
            "4-10-2",
            "3-6-10",
            "3-6-2",
            "3-10-2",
            "6-10-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 4,
        "2": 8,
        "3": 5,
        "4": 2,
        "5": 3,
        "6": 9,
        "7": 6,
        "8": 1,
        "9": 7,
        "10": 10
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ワイドデコラシオン",
              "score": 0.10705482105763874,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "イングラム",
              "score": 0.10092294790594177,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "キャンドルマス",
              "score": 0.09847190904084888,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 9,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "キャンドルマス",
              "score": 0.09278649587598153,
              "finish": 9
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ワイドデコラシオン",
              "score": 0.08957541997720482,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "タイセイモノリス",
              "score": 0.0774030672958417,
              "finish": 10
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-3-6-10-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-3-6-10-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-4-10-3-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-4-10-3-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-09",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 9,
      "raceTitle": "かもめ島特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 10,
      "topPickFinish": 7,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "10",
          "ticketKeys": [
            "10"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "10-2-9-1-4 BOX",
          "ticketKeys": [
            "10-2",
            "10-9",
            "10-1",
            "10-4",
            "2-9",
            "2-1",
            "2-4",
            "9-1",
            "9-4",
            "1-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 480,
          "netYen": -520,
          "recoveryRate": 0.48,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "10-2-9-1-4 BOX",
          "ticketKeys": [
            "10-2-9",
            "10-2-1",
            "10-2-4",
            "10-9-1",
            "10-9-4",
            "10-1-4",
            "2-9-1",
            "2-9-4",
            "2-1-4",
            "9-1-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 480,
      "netYen": -1620,
      "recoveryRate": 0.22857142857142856,
      "hit": true,
      "finishByHorseNumber": {
        "1": 4,
        "2": 5,
        "3": 6,
        "4": 2,
        "5": 13,
        "6": 3,
        "7": 12,
        "8": 11,
        "9": 1,
        "10": 7,
        "11": 10,
        "12": 8,
        "13": 9
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 7,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "マドモアゼルアスク",
              "score": 0.09579590964559201,
              "finish": 7
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "マイスターヴェルク",
              "score": 0.09313533280486268,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "モンローウォーク",
              "score": 0.07947107768929217,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 7,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "マドモアゼルアスク",
              "score": 0.10574650210570807,
              "finish": 7
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "モンローウォーク",
              "score": 0.0876913617198961,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "マイスターヴェルク",
              "score": 0.08312785785650144,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-2-9-1-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 480,
              "netYen": -520,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-2-9-1-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-9-2-6-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-9-2-6-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-10",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 10,
      "raceTitle": "駒場特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 9,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "9",
          "ticketKeys": [
            "9"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 410,
          "netYen": 310,
          "recoveryRate": 4.1,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "9-14-3-12-11 BOX",
          "ticketKeys": [
            "9-14",
            "9-3",
            "9-12",
            "9-11",
            "14-3",
            "14-12",
            "14-11",
            "3-12",
            "3-11",
            "12-11"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 440,
          "netYen": -560,
          "recoveryRate": 0.44,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "9-14-3-12-11 BOX",
          "ticketKeys": [
            "9-14-3",
            "9-14-12",
            "9-14-11",
            "9-3-12",
            "9-3-11",
            "9-12-11",
            "14-3-12",
            "14-3-11",
            "14-12-11",
            "3-12-11"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1050,
          "netYen": 50,
          "recoveryRate": 1.05,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 1900,
      "netYen": -200,
      "recoveryRate": 0.9047619047619048,
      "hit": true,
      "finishByHorseNumber": {
        "1": 6,
        "2": 8,
        "3": 12,
        "4": 14,
        "5": 13,
        "6": 11,
        "7": 9,
        "8": 5,
        "9": 1,
        "10": 4,
        "11": 7,
        "12": 2,
        "13": 10,
        "14": 3
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "シーズザスローン",
              "score": 0.12598165931940278,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "プライベートアイズ",
              "score": 0.06961336783492568,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "テルアスワッド",
              "score": 0.06594977046483633,
              "finish": 12
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "シーズザスローン",
              "score": 0.09850864404392247,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "プライベートアイズ",
              "score": 0.08515164929944397,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "テルアスワッド",
              "score": 0.08459745592958166,
              "finish": 12
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 410,
              "netYen": 310,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "9-14-3-12-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 440,
              "netYen": -560,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "9-14-3-12-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1050,
              "netYen": 50,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 410,
              "netYen": 310,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "9-14-3-1-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "9-14-3-1-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-11",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 11,
      "raceTitle": "函館2歳ステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 11,
      "topPickFinish": 5,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "11",
          "ticketKeys": [
            "11"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "11-10-12-2-4 BOX",
          "ticketKeys": [
            "11-10",
            "11-12",
            "11-2",
            "11-4",
            "10-12",
            "10-2",
            "10-4",
            "12-2",
            "12-4",
            "2-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "11-10-12-2-4 BOX",
          "ticketKeys": [
            "11-10-12",
            "11-10-2",
            "11-10-4",
            "11-12-2",
            "11-12-4",
            "11-2-4",
            "10-12-2",
            "10-12-4",
            "10-2-4",
            "12-2-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 9,
        "2": 3,
        "3": 7,
        "4": 8,
        "5": 1,
        "6": 13,
        "7": 6,
        "8": 11,
        "9": 2,
        "10": 4,
        "11": 5,
        "12": 10,
        "13": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 5,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "シグレ",
              "score": 0.07801806233409199,
              "finish": 5
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ノリヤンモーニン",
              "score": 0.07421433394178012,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ダイメイビッグボス",
              "score": 0.06994180764814811,
              "finish": 10
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 5,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "シグレ",
              "score": 0.09502038839856541,
              "finish": 5
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ダイメイビッグボス",
              "score": 0.08534338418174987,
              "finish": 10
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ノリヤンモーニン",
              "score": 0.08513127918193096,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-10-12-2-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-10-12-2-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-12-10-4-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-12-10-4-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-02-12",
      "date": "2026-07-19",
      "meetingName": "1回函館12日",
      "venueCode": "HAKODATE",
      "raceNo": 12,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 4,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "4",
          "ticketKeys": [
            "4"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 330,
          "netYen": 230,
          "recoveryRate": 3.3,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "4-8-5-3-1 BOX",
          "ticketKeys": [
            "4-8",
            "4-5",
            "4-3",
            "4-1",
            "8-5",
            "8-3",
            "8-1",
            "5-3",
            "5-1",
            "3-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1600,
          "netYen": 600,
          "recoveryRate": 1.6,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "4-8-5-3-1 BOX",
          "ticketKeys": [
            "4-8-5",
            "4-8-3",
            "4-8-1",
            "4-5-3",
            "4-5-1",
            "4-3-1",
            "8-5-3",
            "8-5-1",
            "8-3-1",
            "5-3-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1890,
          "netYen": 890,
          "recoveryRate": 1.89,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 3820,
      "netYen": 1720,
      "recoveryRate": 1.819047619047619,
      "hit": true,
      "finishByHorseNumber": {
        "1": 2,
        "2": 5,
        "3": 3,
        "4": 1,
        "5": 7,
        "6": 12,
        "7": 6,
        "8": 8,
        "9": 4,
        "10": 11,
        "11": 13,
        "12": 14,
        "13": 9,
        "14": 10
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.09212069861273986,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ロードヴェルテクス",
              "score": 0.07681057946800877,
              "finish": 8
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ロードクラシコ",
              "score": 0.07056197627936786,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.08027775738778185,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "マグネシアブリック",
              "score": 0.07989435832165255,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ロードヴェルテクス",
              "score": 0.07814032688683381,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 330,
              "netYen": 230,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-8-5-3-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1600,
              "netYen": 600,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-8-5-3-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1890,
              "netYen": 890,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 330,
              "netYen": 230,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-3-8-2-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-3-8-2-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-01",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 1,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 9,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-1-3-10-9 BOX",
          "ticketKeys": [
            "2-1",
            "2-3",
            "2-10",
            "2-9",
            "1-3",
            "1-10",
            "1-9",
            "3-10",
            "3-9",
            "10-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-1-3-10-9 BOX",
          "ticketKeys": [
            "2-1-3",
            "2-1-10",
            "2-1-9",
            "2-3-10",
            "2-3-9",
            "2-10-9",
            "1-3-10",
            "1-3-9",
            "1-10-9",
            "3-10-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 1,
        "2": 9,
        "3": 5,
        "4": 6,
        "5": 4,
        "6": 2,
        "7": 10,
        "8": 8,
        "9": 7,
        "10": 3
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 9,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ケンシロウワールド",
              "score": 0.13423075251095498,
              "finish": 9
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ムーンベリル",
              "score": 0.09706789444749613,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "スウィット",
              "score": 0.08657967101992017,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ムーンベリル",
              "score": 0.08344388841406382,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ケンシロウワールド",
              "score": 0.07826063328871628,
              "finish": 9
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ドナビッグベン",
              "score": 0.0713828508200158,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-1-3-10-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-1-3-10-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 110,
              "netYen": 10,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-2-6-3-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 920,
              "netYen": -80,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-2-6-3-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-02",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 2,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 9,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-8-13-16-11 BOX",
          "ticketKeys": [
            "2-8",
            "2-13",
            "2-16",
            "2-11",
            "8-13",
            "8-16",
            "8-11",
            "13-16",
            "13-11",
            "16-11"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-8-13-16-11 BOX",
          "ticketKeys": [
            "2-8-13",
            "2-8-16",
            "2-8-11",
            "2-13-16",
            "2-13-11",
            "2-16-11",
            "8-13-16",
            "8-13-11",
            "8-16-11",
            "13-16-11"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 9,
        "3": 12,
        "4": 14,
        "5": 4,
        "6": 11,
        "7": 5,
        "8": 8,
        "9": 7,
        "10": 15,
        "11": 13,
        "12": 16,
        "13": 3,
        "14": 10,
        "15": 2,
        "16": 1
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 9,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ジャストビコーズ",
              "score": 0.07742092115239928,
              "finish": 9
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "サトノスターライト",
              "score": 0.06559079650418961,
              "finish": 8
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アマンヘセル",
              "score": 0.06464914526511574,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "クレアノア",
              "score": 0.09195249069202611,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "サトノスターライト",
              "score": 0.09123541335881058,
              "finish": 8
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アマンヘセル",
              "score": 0.08107392041226458,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-8-13-16-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-8-13-16-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 340,
              "netYen": 240,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "16-8-13-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "16-8-13-2-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-03",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 8,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-8-10-14-7 BOX",
          "ticketKeys": [
            "6-8",
            "6-10",
            "6-14",
            "6-7",
            "8-10",
            "8-14",
            "8-7",
            "10-14",
            "10-7",
            "14-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-8-10-14-7 BOX",
          "ticketKeys": [
            "6-8-10",
            "6-8-14",
            "6-8-7",
            "6-10-14",
            "6-10-7",
            "6-14-7",
            "8-10-14",
            "8-10-7",
            "8-14-7",
            "10-14-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 13,
        "2": 3,
        "3": 6,
        "4": 4,
        "5": 10,
        "6": 8,
        "7": 16,
        "8": 1,
        "9": 11,
        "10": 9,
        "11": 12,
        "12": 14,
        "13": 2,
        "14": 5,
        "15": 15,
        "16": 7
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 8,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "グランマエストロ",
              "score": 0.12620241292555756,
              "finish": 8
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ペプチドドリーム",
              "score": 0.06624915314634293,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "レッドフリーマン",
              "score": 0.05473396271008721,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 8,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "グランマエストロ",
              "score": 0.10011494688443418,
              "finish": 8
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "チャチャット",
              "score": 0.08159889771974643,
              "finish": 16
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "ランウェイミューズ",
              "score": 0.0800118714703722,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-8-10-14-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-8-10-14-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-7-4-10-16 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-7-4-10-16 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-04",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 12,
      "topPickFinish": 15,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "12",
          "ticketKeys": [
            "12"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "12-9-3-14-4 BOX",
          "ticketKeys": [
            "12-9",
            "12-3",
            "12-14",
            "12-4",
            "9-3",
            "9-14",
            "9-4",
            "3-14",
            "3-4",
            "14-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "12-9-3-14-4 BOX",
          "ticketKeys": [
            "12-9-3",
            "12-9-14",
            "12-9-4",
            "12-3-14",
            "12-3-4",
            "12-14-4",
            "9-3-14",
            "9-3-4",
            "9-14-4",
            "3-14-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 12,
        "2": 1,
        "3": 9,
        "4": 4,
        "5": 2,
        "6": 10,
        "7": 7,
        "8": 14,
        "9": 3,
        "10": 8,
        "11": 13,
        "12": 15,
        "13": 5,
        "14": 11,
        "15": 6
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 15,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ウィッシュリスト",
              "score": 0.06429107447454974,
              "finish": 15
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ユニバーサルラヴ",
              "score": 0.06196148964989994,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "フェスティヴハート",
              "score": 0.05626259314294262,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 8,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "ハピネスドリーム",
              "score": 0.08214314885473915,
              "finish": 8
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ユニバーサルラヴ",
              "score": 0.08024930242395996,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アルティソナンテ",
              "score": 0.07680139273662766,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-9-3-14-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-9-3-14-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-9-13-4-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-9-13-4-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-05",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 5,
      "raceTitle": "メイクデビュー福島",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 9,
      "topPickFinish": 3,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "9",
          "ticketKeys": [
            "9"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "9-5-11-2-4 BOX",
          "ticketKeys": [
            "9-5",
            "9-11",
            "9-2",
            "9-4",
            "5-11",
            "5-2",
            "5-4",
            "11-2",
            "11-4",
            "2-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1320,
          "netYen": 320,
          "recoveryRate": 1.32,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "9-5-11-2-4 BOX",
          "ticketKeys": [
            "9-5-11",
            "9-5-2",
            "9-5-4",
            "9-11-2",
            "9-11-4",
            "9-2-4",
            "5-11-2",
            "5-11-4",
            "5-2-4",
            "11-2-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1010,
          "netYen": 10,
          "recoveryRate": 1.01,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 2330,
      "netYen": 230,
      "recoveryRate": 1.1095238095238096,
      "hit": true,
      "finishByHorseNumber": {
        "1": 6,
        "2": 5,
        "3": 10,
        "4": 1,
        "5": 4,
        "6": 7,
        "7": 8,
        "8": 13,
        "9": 3,
        "10": 9,
        "11": 2,
        "12": 11,
        "13": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "ヴェルバーニア",
              "score": 0.12347659193656207,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ロワデュモンド",
              "score": 0.07646438217128274,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "エンルートフライト",
              "score": 0.06818773993162563,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "ヴェルバーニア",
              "score": 0.09214216917481437,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "サンタンヌ",
              "score": 0.08216373392075182,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "エンルートフライト",
              "score": 0.08002635319029623,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "9-5-11-2-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1320,
              "netYen": 320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "9-5-11-2-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1010,
              "netYen": 10,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "9-2-11-4-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1320,
              "netYen": 320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "9-2-11-4-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1010,
              "netYen": 10,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-06",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 6,
      "raceTitle": "メイクデビュー福島",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 9,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-14-6-13-1 BOX",
          "ticketKeys": [
            "2-14",
            "2-6",
            "2-13",
            "2-1",
            "14-6",
            "14-13",
            "14-1",
            "6-13",
            "6-1",
            "13-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 980,
          "netYen": -20,
          "recoveryRate": 0.98,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-14-6-13-1 BOX",
          "ticketKeys": [
            "2-14-6",
            "2-14-13",
            "2-14-1",
            "2-6-13",
            "2-6-1",
            "2-13-1",
            "14-6-13",
            "14-6-1",
            "14-13-1",
            "6-13-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 980,
      "netYen": -1120,
      "recoveryRate": 0.4666666666666667,
      "hit": true,
      "finishByHorseNumber": {
        "1": 14,
        "2": 9,
        "3": 7,
        "4": 11,
        "5": 8,
        "6": 2,
        "7": 15,
        "8": 4,
        "9": 10,
        "10": 3,
        "11": 16,
        "12": 5,
        "13": 13,
        "14": 1,
        "15": 6,
        "16": 12
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 9,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トランサルピナ",
              "score": 0.08093735428185796,
              "finish": 9
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "チャランダマルツ",
              "score": 0.0677243492524218,
              "finish": 1
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "グルーヴェンス",
              "score": 0.06400878603703115,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "チャランダマルツ",
              "score": 0.08888775491626964,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "グルーヴェンス",
              "score": 0.07903236930467902,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "トランサルピナ",
              "score": 0.0763141712299959,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-14-6-13-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 980,
              "netYen": -20,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-14-6-13-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 270,
              "netYen": 170,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "14-6-2-11-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 980,
              "netYen": -20,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "14-6-2-11-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-07",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 7,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 15,
      "topPickFinish": 11,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "15",
          "ticketKeys": [
            "15"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "15-4-7-13-14 BOX",
          "ticketKeys": [
            "15-4",
            "15-7",
            "15-13",
            "15-14",
            "4-7",
            "4-13",
            "4-14",
            "7-13",
            "7-14",
            "13-14"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "15-4-7-13-14 BOX",
          "ticketKeys": [
            "15-4-7",
            "15-4-13",
            "15-4-14",
            "15-7-13",
            "15-7-14",
            "15-13-14",
            "4-7-13",
            "4-7-14",
            "4-13-14",
            "7-13-14"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 14,
        "2": 10,
        "3": 1,
        "4": 13,
        "5": 4,
        "6": 9,
        "7": 2,
        "8": 5,
        "9": 7,
        "10": 6,
        "11": 8,
        "12": 12,
        "13": 3,
        "14": null,
        "15": 11
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 11,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テキサスバローズ",
              "score": 0.07163240037620813,
              "finish": 11
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "イントゥザウインド",
              "score": 0.06684132968818084,
              "finish": 13
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ユイノサダハル",
              "score": 0.061580669830595465,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 13,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "イントゥザウインド",
              "score": 0.08387674218341762,
              "finish": 13
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "テキサスバローズ",
              "score": 0.07282900220621334,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ユイノサダハル",
              "score": 0.07213366844475008,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "15-4-7-13-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "15-4-7-13-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-15-7-13-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-15-7-13-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-08",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 2,
      "topPickFinish": 12,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "2",
          "ticketKeys": [
            "2"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "2-8-12-15-5 BOX",
          "ticketKeys": [
            "2-8",
            "2-12",
            "2-15",
            "2-5",
            "8-12",
            "8-15",
            "8-5",
            "12-15",
            "12-5",
            "15-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "2-8-12-15-5 BOX",
          "ticketKeys": [
            "2-8-12",
            "2-8-15",
            "2-8-5",
            "2-12-15",
            "2-12-5",
            "2-15-5",
            "8-12-15",
            "8-12-5",
            "8-15-5",
            "12-15-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 15,
        "2": 12,
        "3": 2,
        "4": 13,
        "5": 9,
        "6": 3,
        "7": 5,
        "8": 11,
        "9": 4,
        "10": 16,
        "11": 7,
        "12": 14,
        "13": 1,
        "14": 6,
        "15": 10,
        "16": 8
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 12,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロスパレドネス",
              "score": 0.12052771206041468,
              "finish": 12
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "アメテュストス",
              "score": 0.0963207975073748,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ミエノストロング",
              "score": 0.06465408145007466,
              "finish": 14
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 12,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "ロスパレドネス",
              "score": 0.09425499913701703,
              "finish": 12
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "アメテュストス",
              "score": 0.08788789135029203,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ミエノストロング",
              "score": 0.07953162012187082,
              "finish": 14
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-8-12-15-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-8-12-15-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "2-8-12-13-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "2-8-12-13-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-09",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 9,
      "raceTitle": "南相馬特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 3,
      "topPickFinish": 6,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "3",
          "ticketKeys": [
            "3"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "3-10-14-1-13 BOX",
          "ticketKeys": [
            "3-10",
            "3-14",
            "3-1",
            "3-13",
            "10-14",
            "10-1",
            "10-13",
            "14-1",
            "14-13",
            "1-13"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "3-10-14-1-13 BOX",
          "ticketKeys": [
            "3-10-14",
            "3-10-1",
            "3-10-13",
            "3-14-1",
            "3-14-13",
            "3-1-13",
            "10-14-1",
            "10-14-13",
            "10-1-13",
            "14-1-13"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 3,
        "2": 4,
        "3": 6,
        "4": 15,
        "5": 10,
        "6": 11,
        "7": 9,
        "8": 2,
        "9": 12,
        "10": 13,
        "11": 7,
        "12": 14,
        "13": 1,
        "14": 16,
        "15": 5,
        "16": 8
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ヴァンヴィーヴ",
              "score": 0.07676193704462039,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "プリティディーヴァ",
              "score": 0.06773761014317674,
              "finish": 13
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ポッドデスペア",
              "score": 0.062003904397561656,
              "finish": 16
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 13,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "プリティディーヴァ",
              "score": 0.0931448411585719,
              "finish": 13
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ヴァンヴィーヴ",
              "score": 0.08754970856513554,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ヴェントゥーラ",
              "score": 0.07949585859240516,
              "finish": 11
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-10-14-1-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-10-14-1-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-3-6-2-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-3-6-2-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-10",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 10,
      "raceTitle": "猪苗代特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 4,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "4",
          "ticketKeys": [
            "4"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "4-10-1-7-2 BOX",
          "ticketKeys": [
            "4-10",
            "4-1",
            "4-7",
            "4-2",
            "10-1",
            "10-7",
            "10-2",
            "1-7",
            "1-2",
            "7-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 550,
          "netYen": -450,
          "recoveryRate": 0.55,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "4-10-1-7-2 BOX",
          "ticketKeys": [
            "4-10-1",
            "4-10-7",
            "4-10-2",
            "4-1-7",
            "4-1-2",
            "4-7-2",
            "10-1-7",
            "10-1-2",
            "10-7-2",
            "1-7-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 550,
      "netYen": -1550,
      "recoveryRate": 0.2619047619047619,
      "hit": true,
      "finishByHorseNumber": {
        "1": 10,
        "2": 12,
        "3": 7,
        "4": 2,
        "5": 6,
        "6": 3,
        "7": 1,
        "8": 8,
        "9": 9,
        "10": 4,
        "11": 11,
        "12": 5
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アロンズロッド",
              "score": 0.14168827849490348,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "クラヴァンス",
              "score": 0.11006585400458371,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ジェットブレード",
              "score": 0.06648513228656636,
              "finish": 10
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アロンズロッド",
              "score": 0.09717788394737124,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "クラヴァンス",
              "score": 0.09397159897722628,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ルールーリマ",
              "score": 0.07872713073644534,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-10-1-7-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 550,
              "netYen": -450,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-10-1-7-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-10-7-12-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 550,
              "netYen": -450,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-10-7-12-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-11",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 11,
      "raceTitle": "福島テレビ賞",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 5,
      "topPickFinish": 9,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "5",
          "ticketKeys": [
            "5"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "5-7-14-1-10 BOX",
          "ticketKeys": [
            "5-7",
            "5-14",
            "5-1",
            "5-10",
            "7-14",
            "7-1",
            "7-10",
            "14-1",
            "14-10",
            "1-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "5-7-14-1-10 BOX",
          "ticketKeys": [
            "5-7-14",
            "5-7-1",
            "5-7-10",
            "5-14-1",
            "5-14-10",
            "5-1-10",
            "7-14-1",
            "7-14-10",
            "7-1-10",
            "14-1-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 4,
        "2": 1,
        "3": 8,
        "4": 12,
        "5": 9,
        "6": 15,
        "7": 2,
        "8": 16,
        "9": 13,
        "10": 6,
        "11": 7,
        "12": 10,
        "13": 5,
        "14": 3,
        "15": 14,
        "16": 11
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 9,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "エコロアゼル",
              "score": 0.07067011635634422,
              "finish": 9
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "ガビーズシスター",
              "score": 0.06867827162875614,
              "finish": 2
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ファムエレガンテ",
              "score": 0.06238189207107899,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ガビーズシスター",
              "score": 0.0970953611062277,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "メイショウホウレン",
              "score": 0.08042976539366296,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ロードアウォード",
              "score": 0.08041710992014417,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-7-14-1-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-7-14-1-10 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-1-3-11-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-1-3-11-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-03-12",
      "date": "2026-07-19",
      "meetingName": "2回福島8日",
      "venueCode": "FUKUSHIMA",
      "raceNo": 12,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "pre_race",
      "sourceClassification": "pre_race_timestamp_only",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:05:47.144Z",
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
      "topPick": 1,
      "topPickFinish": 14,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "1",
          "ticketKeys": [
            "1"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "1-10-15-6-7 BOX",
          "ticketKeys": [
            "1-10",
            "1-15",
            "1-6",
            "1-7",
            "10-15",
            "10-6",
            "10-7",
            "15-6",
            "15-7",
            "6-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "1-10-15-6-7 BOX",
          "ticketKeys": [
            "1-10-15",
            "1-10-6",
            "1-10-7",
            "1-15-6",
            "1-15-7",
            "1-6-7",
            "10-15-6",
            "10-15-7",
            "10-6-7",
            "15-6-7"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 14,
        "2": 7,
        "3": 10,
        "4": 2,
        "5": 8,
        "6": 3,
        "7": 15,
        "8": 13,
        "9": 9,
        "10": 4,
        "11": 1,
        "12": 6,
        "13": 12,
        "14": 11,
        "15": 5
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 14,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "アルデキングダム",
              "score": 0.09418549228034383,
              "finish": 14
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ノーウェアマン",
              "score": 0.07787277177463567,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 15,
              "horseName": "ヘルヴェティオス",
              "score": 0.06927227651596934,
              "finish": 5
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 14,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "アルデキングダム",
              "score": 0.08339636826721697,
              "finish": 14
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "ヘルヴェティオス",
              "score": 0.08070246756154718,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ノーウェアマン",
              "score": 0.07361712288953957,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-10-15-6-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-10-15-6-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-15-10-11-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-15-10-11-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-01",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 1,
      "raceTitle": "障害3歳以上未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 10,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "10",
          "ticketKeys": [
            "10"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 980,
          "netYen": 880,
          "recoveryRate": 9.8,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "10-8-3-1-5 BOX",
          "ticketKeys": [
            "10-8",
            "10-3",
            "10-1",
            "10-5",
            "8-3",
            "8-1",
            "8-5",
            "3-1",
            "3-5",
            "1-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 7480,
          "netYen": 6480,
          "recoveryRate": 7.48,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "10-8-3-1-5 BOX",
          "ticketKeys": [
            "10-8-3",
            "10-8-1",
            "10-8-5",
            "10-3-1",
            "10-3-5",
            "10-1-5",
            "8-3-1",
            "8-3-5",
            "8-1-5",
            "3-1-5"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 5380,
          "netYen": 4380,
          "recoveryRate": 5.38,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 13840,
      "netYen": 11740,
      "recoveryRate": 6.59047619047619,
      "hit": true,
      "finishByHorseNumber": {
        "1": 7,
        "2": 11,
        "3": 8,
        "4": 5,
        "5": 2,
        "6": 10,
        "7": 6,
        "8": 3,
        "9": 4,
        "10": 1,
        "11": 9
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "バニーラビット",
              "score": 0.14629370082813276,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "メイショウソウセキ",
              "score": 0.0884733090443211,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ブルーセルリアン",
              "score": 0.07563560573843908,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "バニーラビット",
              "score": 0.09029192720900825,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "アウスヴァール",
              "score": 0.07957563075344948,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "メイショウソウセキ",
              "score": 0.07761618397410196,
              "finish": 3
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 980,
              "netYen": 880,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-8-3-1-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 7480,
              "netYen": 6480,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-8-3-1-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 5380,
              "netYen": 4380,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 980,
              "netYen": 880,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-9-8-11-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-9-8-11-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-02",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 2,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 6,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-5-1-4-9 BOX",
          "ticketKeys": [
            "6-5",
            "6-1",
            "6-4",
            "6-9",
            "5-1",
            "5-4",
            "5-9",
            "1-4",
            "1-9",
            "4-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-5-1-4-9 BOX",
          "ticketKeys": [
            "6-5-1",
            "6-5-4",
            "6-5-9",
            "6-1-4",
            "6-1-9",
            "6-4-9",
            "5-1-4",
            "5-1-9",
            "5-4-9",
            "1-4-9"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 13,
        "2": 1,
        "3": 2,
        "4": 4,
        "5": 3,
        "6": 6,
        "7": 9,
        "8": 14,
        "9": 5,
        "10": 18,
        "11": 15,
        "12": 17,
        "13": 10,
        "14": 12,
        "15": 8,
        "16": 7,
        "17": 11,
        "18": 16
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "カルロット",
              "score": 0.08736902166999183,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ルナフィオーレ",
              "score": 0.061106980061575195,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "トウカイジーク",
              "score": 0.05619820322958387,
              "finish": 13
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "カルロット",
              "score": 0.0853172172454283,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ナデシコザクラ",
              "score": 0.08396213022972067,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "グレンセロース",
              "score": 0.08038960194463037,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-5-1-4-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-5-1-4-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-9-3-5-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-9-3-5-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-03",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 12,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-1-16-7-14 BOX",
          "ticketKeys": [
            "13-1",
            "13-16",
            "13-7",
            "13-14",
            "1-16",
            "1-7",
            "1-14",
            "16-7",
            "16-14",
            "7-14"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-1-16-7-14 BOX",
          "ticketKeys": [
            "13-1-16",
            "13-1-7",
            "13-1-14",
            "13-16-7",
            "13-16-14",
            "13-7-14",
            "1-16-7",
            "1-16-14",
            "1-7-14",
            "16-7-14"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 15,
        "2": 9,
        "3": 4,
        "4": 14,
        "5": 16,
        "6": 3,
        "7": 5,
        "8": 10,
        "9": 13,
        "10": 8,
        "11": 7,
        "12": 1,
        "13": 12,
        "14": 2,
        "15": 6,
        "16": 11
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 12,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "スマイルガーデン",
              "score": 0.06599352062966334,
              "finish": 12
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "ブライトベリル",
              "score": 0.06591197363238167,
              "finish": 15
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "エイシンキタールン",
              "score": 0.06384358915718658,
              "finish": 11
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 15,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ブライトベリル",
              "score": 0.08710573283464289,
              "finish": 15
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ルージュマデイラ",
              "score": 0.08288198686314434,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "スマイルガーデン",
              "score": 0.07992342355996816,
              "finish": 12
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-1-16-7-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-1-16-7-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-3-13-16-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-3-13-16-15 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-04",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 11,
      "topPickFinish": 3,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "11",
          "ticketKeys": [
            "11"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "11-14-1-3-12 BOX",
          "ticketKeys": [
            "11-14",
            "11-1",
            "11-3",
            "11-12",
            "14-1",
            "14-3",
            "14-12",
            "1-3",
            "1-12",
            "3-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "11-14-1-3-12 BOX",
          "ticketKeys": [
            "11-14-1",
            "11-14-3",
            "11-14-12",
            "11-1-3",
            "11-1-12",
            "11-3-12",
            "14-1-3",
            "14-1-12",
            "14-3-12",
            "1-3-12"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 13,
        "2": 9,
        "3": 2,
        "4": 10,
        "5": 6,
        "6": 11,
        "7": 7,
        "8": 1,
        "9": 8,
        "10": 12,
        "11": 3,
        "12": 4,
        "13": 5,
        "14": null
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アラムシャピラス",
              "score": 0.10303119024963052,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "アイスフォーク",
              "score": 0.09108941595590347,
              "finish": null
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "アクティブヘイロー",
              "score": 0.07286267460801024,
              "finish": 13
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "アラムシャピラス",
              "score": 0.1030627349184136,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "アイスフォーク",
              "score": 0.09392200231675785,
              "finish": null
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ホウオウモチーヴ",
              "score": 0.08455684626593961,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-14-1-3-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-14-1-3-12 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "11-14-3-12-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "11-14-3-12-13 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-05",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 5,
      "raceTitle": "メイクデビュー小倉",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 1,
      "topPickFinish": 6,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "1",
          "ticketKeys": [
            "1"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "1-2-4-3-8 BOX",
          "ticketKeys": [
            "1-2",
            "1-4",
            "1-3",
            "1-8",
            "2-4",
            "2-3",
            "2-8",
            "4-3",
            "4-8",
            "3-8"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "1-2-4-3-8 BOX",
          "ticketKeys": [
            "1-2-4",
            "1-2-3",
            "1-2-8",
            "1-4-3",
            "1-4-8",
            "1-3-8",
            "2-4-3",
            "2-4-8",
            "2-3-8",
            "4-3-8"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 7,
        "3": 2,
        "4": 8,
        "5": 5,
        "6": 3,
        "7": 1,
        "8": 4
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "カローナ",
              "score": 0.19291205674582798,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ツーハーツ",
              "score": 0.1094387239741682,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "レアアース",
              "score": 0.0938611340908907,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "カローナ",
              "score": 0.09084418996080514,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ビエントゾンダ",
              "score": 0.07996889103054576,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "ユーダブルワン",
              "score": 0.07915782607715621,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-2-4-3-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-2-4-3-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "1-8-7-6-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "1-8-7-6-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-06",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 6,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 10,
      "topPickFinish": 11,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "10",
          "ticketKeys": [
            "10"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "10-5-4-1-11 BOX",
          "ticketKeys": [
            "10-5",
            "10-4",
            "10-1",
            "10-11",
            "5-4",
            "5-1",
            "5-11",
            "4-1",
            "4-11",
            "1-11"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "10-5-4-1-11 BOX",
          "ticketKeys": [
            "10-5-4",
            "10-5-1",
            "10-5-11",
            "10-4-1",
            "10-4-11",
            "10-1-11",
            "5-4-1",
            "5-4-11",
            "5-1-11",
            "4-1-11"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 8,
        "3": 5,
        "4": 9,
        "5": 7,
        "6": 2,
        "7": 14,
        "8": 13,
        "9": 4,
        "10": 11,
        "11": 3,
        "12": 12,
        "13": 1,
        "14": 10
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 11,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "サトノライトニング",
              "score": 0.07648359391817408,
              "finish": 11
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "アイアン",
              "score": 0.07617841787939478,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "フレアオブセンス",
              "score": 0.0703070633300036,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 7,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "アイアン",
              "score": 0.09493593027287982,
              "finish": 7
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "サトノライトニング",
              "score": 0.0859228137453944,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "フレアオブセンス",
              "score": 0.08404635925303781,
              "finish": 9
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "10-5-4-1-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "10-5-4-1-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "5-10-4-1-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "5-10-4-1-11 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-07",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 7,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 3,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-2-5-16-3 BOX",
          "ticketKeys": [
            "13-2",
            "13-5",
            "13-16",
            "13-3",
            "2-5",
            "2-16",
            "2-3",
            "5-16",
            "5-3",
            "16-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-2-5-16-3 BOX",
          "ticketKeys": [
            "13-2-5",
            "13-2-16",
            "13-2-3",
            "13-5-16",
            "13-5-3",
            "13-16-3",
            "2-5-16",
            "2-5-3",
            "2-16-3",
            "5-16-3"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 1,
        "2": 4,
        "3": 8,
        "4": 12,
        "5": 6,
        "6": 11,
        "7": 7,
        "8": null,
        "9": 5,
        "10": 2,
        "11": 9,
        "12": 13,
        "13": 3,
        "14": 10,
        "15": 16,
        "16": 15,
        "17": 14
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 3,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "マウンテンバローズ",
              "score": 0.10592767286267832,
              "finish": 3
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ウェルカムソング",
              "score": 0.07558284514038771,
              "finish": 4
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "アーリントンロウ",
              "score": 0.07020369066140403,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 15,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "バーケンティン",
              "score": 0.09081237481841593,
              "finish": 15
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "マウンテンバローズ",
              "score": 0.07949437324134369,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "アーリントンロウ",
              "score": 0.07872197844566435,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-2-5-16-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-2-5-16-3 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "16-13-5-4-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "16-13-5-4-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-08",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 12,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "12",
          "ticketKeys": [
            "12"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 5960,
          "netYen": 5860,
          "recoveryRate": 59.6,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "12-9-6-13-4 BOX",
          "ticketKeys": [
            "12-9",
            "12-6",
            "12-13",
            "12-4",
            "9-6",
            "9-13",
            "9-4",
            "6-13",
            "6-4",
            "13-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "12-9-6-13-4 BOX",
          "ticketKeys": [
            "12-9-6",
            "12-9-13",
            "12-9-4",
            "12-6-13",
            "12-6-4",
            "12-13-4",
            "9-6-13",
            "9-6-4",
            "9-13-4",
            "6-13-4"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 5960,
      "netYen": 3860,
      "recoveryRate": 2.8380952380952382,
      "hit": true,
      "finishByHorseNumber": {
        "1": 4,
        "2": 12,
        "3": 13,
        "4": 5,
        "5": 6,
        "6": 8,
        "7": 3,
        "8": 9,
        "9": 14,
        "10": 10,
        "11": 7,
        "12": 1,
        "13": 11,
        "14": 2
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ジャンシ",
              "score": 0.09678101438239209,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ドラムメジャー",
              "score": 0.0741224396713558,
              "finish": 14
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "サンライズジュピタ",
              "score": 0.06954957438399717,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 5,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アメリカンビヨンド",
              "score": 0.08662579256102092,
              "finish": 5
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "ミヤフロント",
              "score": 0.08235943813024733,
              "finish": 11
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ジャンシ",
              "score": 0.08104121526275238,
              "finish": 1
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 5960,
              "netYen": 5860,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "12-9-6-13-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "12-9-6-13-4 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "4-13-12-6-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "4-13-12-6-9 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-09",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 9,
      "raceTitle": "不知火特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 3,
      "topPickFinish": 2,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "3",
          "ticketKeys": [
            "3"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "3-1-5-8-2 BOX",
          "ticketKeys": [
            "3-1",
            "3-5",
            "3-8",
            "3-2",
            "1-5",
            "1-8",
            "1-2",
            "5-8",
            "5-2",
            "8-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "3-1-5-8-2 BOX",
          "ticketKeys": [
            "3-1-5",
            "3-1-8",
            "3-1-2",
            "3-5-8",
            "3-5-2",
            "3-8-2",
            "1-5-8",
            "1-5-2",
            "1-8-2",
            "5-8-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 5,
        "2": 4,
        "3": 2,
        "4": 7,
        "5": 8,
        "6": 3,
        "7": 1,
        "8": 6
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "タンテドヴィーヴル",
              "score": 0.14355774820375874,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "キーウェーブ",
              "score": 0.1069705263397838,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ハイディージェン",
              "score": 0.10451768935916171,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 2,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "タンテドヴィーヴル",
              "score": 0.07908380794591514,
              "finish": 2
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ユメハハテシナク",
              "score": 0.07636992850239292,
              "finish": 6
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ヤマニンループ",
              "score": 0.07446625693592941,
              "finish": 4
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-1-5-8-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-1-5-8-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "3-8-2-6-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 890,
              "netYen": -110,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "3-8-2-6-7 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 960,
              "netYen": -40,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-10",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 10,
      "raceTitle": "宮崎ステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 13,
      "topPickFinish": 5,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "13",
          "ticketKeys": [
            "13"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "13-12-1-15-6 BOX",
          "ticketKeys": [
            "13-12",
            "13-1",
            "13-15",
            "13-6",
            "12-1",
            "12-15",
            "12-6",
            "1-15",
            "1-6",
            "15-6"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "13-12-1-15-6 BOX",
          "ticketKeys": [
            "13-12-1",
            "13-12-15",
            "13-12-6",
            "13-1-15",
            "13-1-6",
            "13-15-6",
            "12-1-15",
            "12-1-6",
            "12-15-6",
            "1-15-6"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 0,
      "netYen": -2100,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 2,
        "2": 4,
        "3": 14,
        "4": 1,
        "5": 12,
        "6": 11,
        "7": 3,
        "8": 10,
        "9": 13,
        "10": 16,
        "11": 15,
        "12": 7,
        "13": 5,
        "14": 9,
        "15": 6,
        "16": 8
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 13,
          "topPickFinish": 5,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 13,
              "horseName": "レヴァンテシチー",
              "score": 0.07488062094344702,
              "finish": 5
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "サイモンシュバリエ",
              "score": 0.05984583968840254,
              "finish": 7
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ジューンエオス",
              "score": 0.05924414042897736,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 6,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "インザモーメント",
              "score": 0.08616775740835192,
              "finish": 6
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "レヴァンテシチー",
              "score": 0.08401669406541808,
              "finish": 5
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ジューンエオス",
              "score": 0.07996889103054576,
              "finish": 2
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "13",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "13-12-1-15-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "13-12-1-15-6 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "15-13-1-10-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "15-13-1-10-14 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-11",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 11,
      "raceTitle": "農林水産省賞典 小倉記念",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:08:14.417Z",
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
      "topPick": 6,
      "topPickFinish": 4,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "6",
          "ticketKeys": [
            "6"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "6-13-9-17-1 BOX",
          "ticketKeys": [
            "6-13",
            "6-9",
            "6-17",
            "6-1",
            "13-9",
            "13-17",
            "13-1",
            "9-17",
            "9-1",
            "17-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 5650,
          "netYen": 4650,
          "recoveryRate": 5.65,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "6-13-9-17-1 BOX",
          "ticketKeys": [
            "6-13-9",
            "6-13-17",
            "6-13-1",
            "6-9-17",
            "6-9-1",
            "6-17-1",
            "13-9-17",
            "13-9-1",
            "13-17-1",
            "9-17-1"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 0,
          "netYen": -1000,
          "recoveryRate": 0,
          "hit": false
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 5650,
      "netYen": 3550,
      "recoveryRate": 2.6904761904761907,
      "hit": true,
      "finishByHorseNumber": {
        "1": 1,
        "2": 9,
        "3": 5,
        "4": 14,
        "5": null,
        "6": 4,
        "7": 7,
        "8": 11,
        "9": 6,
        "10": 10,
        "11": 13,
        "12": 12,
        "13": 15,
        "14": 8,
        "15": 17,
        "16": 16,
        "17": 2,
        "18": 3
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ガイアメンテ",
              "score": 0.0813693698041133,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "カエルム",
              "score": 0.06809332947355838,
              "finish": 15
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーアダマン",
              "score": 0.06750373492079714,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 4,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "ガイアメンテ",
              "score": 0.09834680389071503,
              "finish": 4
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "カエルム",
              "score": 0.09344728465774434,
              "finish": 15
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーアダマン",
              "score": 0.09171439986838703,
              "finish": 6
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-13-9-17-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 5650,
              "netYen": 4650,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-13-9-17-1 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "6-13-9-17-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "6-13-9-17-8 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    },
    {
      "raceId": "20260719-10-12",
      "date": "2026-07-19",
      "meetingName": "2回小倉8日",
      "venueCode": "KOKURA",
      "raceNo": 12,
      "raceTitle": "筑紫特別",
      "predictionFound": true,
      "predictionContext": "pre_race",
      "sourceClassification": "pre_race_timestamp_only",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-07-19T07:05:47.144Z",
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
      "topPick": 7,
      "topPickFinish": 1,
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "7",
          "ticketKeys": [
            "7"
          ],
          "points": 1,
          "unitStakeYen": 100,
          "investmentYen": 100,
          "payoutYen": 220,
          "netYen": 120,
          "recoveryRate": 2.2,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "BOX",
          "selection": "7-4-5-3-2 BOX",
          "ticketKeys": [
            "7-4",
            "7-5",
            "7-3",
            "7-2",
            "4-5",
            "4-3",
            "4-2",
            "5-3",
            "5-2",
            "3-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 3570,
          "netYen": 2570,
          "recoveryRate": 3.57,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "BOX",
          "selection": "7-4-5-3-2 BOX",
          "ticketKeys": [
            "7-4-5",
            "7-4-3",
            "7-4-2",
            "7-5-3",
            "7-5-2",
            "7-3-2",
            "4-5-3",
            "4-5-2",
            "4-3-2",
            "5-3-2"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1170,
          "netYen": 170,
          "recoveryRate": 1.17,
          "hit": true
        }
      ],
      "investmentYen": 2100,
      "payoutYen": 4960,
      "netYen": 2860,
      "recoveryRate": 2.361904761904762,
      "hit": true,
      "finishByHorseNumber": {
        "1": 6,
        "2": 2,
        "3": 9,
        "4": 3,
        "5": 8,
        "6": 4,
        "7": 1,
        "8": 7,
        "9": 5
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ミッキージャンプ",
              "score": 0.1213746713826717,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ロングトールサリー",
              "score": 0.11828951887087248,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "フレイムスター",
              "score": 0.09765886460781872,
              "finish": 8
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ミッキージャンプ",
              "score": 0.09016127923345596,
              "finish": 1
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ロングトールサリー",
              "score": 0.08785268377333365,
              "finish": 3
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "グラスベルグ",
              "score": 0.07908380794591514,
              "finish": 7
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "topPick": null,
          "topPickFinish": null,
          "marks": []
        }
      ],
      "agentTickets": [
        {
          "agentId": "safety",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 220,
              "netYen": 120,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-4-5-3-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 3570,
              "netYen": 2570,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-4-5-3-2 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1170,
              "netYen": 170,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "pace",
          "status": "unavailable",
          "tickets": []
        },
        {
          "agentId": "analyst",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 220,
              "netYen": 120,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "BOX",
              "selection": "7-4-8-6-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "BOX",
              "selection": "7-4-8-6-5 BOX",
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "unavailable",
          "tickets": []
        }
      ]
    }
  ]
};
