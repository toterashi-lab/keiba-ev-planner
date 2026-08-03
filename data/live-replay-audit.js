window.KEIBA_LIVE_REPLAY_AUDIT = {
  "status": "replay_only",
  "calculatedAt": "2026-08-03T10:36:26.036Z",
  "label": "後日再現（本番成績に含めない）",
  "policy": {
    "source": "画面で表示する総合AI指数の買い目とJRA公式払戻の照合",
    "unitStakeYen": 100,
    "exclusion": "後日再現と、公開時刻のみが残る予想は、本番用の不変スナップショットがないため、本番成績・学習実績・エージェント成績には含めない",
    "actualPerformance": "公開時点の不変スナップショットが保存・ロック・精算された記録のみ。今回の公開データには該当なし"
  },
  "coverage": {
    "confirmedResults": 36,
    "currentConfirmedResults": 36,
    "matchedPredictions": 36,
    "evaluatedTickets": 36,
    "preRaceTimestamped": 0,
    "replayOnly": 36,
    "immutableSnapshots": 0
  },
  "summary": {
    "races": 36,
    "hits": 10,
    "investmentYen": 57600,
    "payoutYen": 11820,
    "netYen": -45780,
    "recoveryRate": 0.20520833333333333
  },
  "records": [
    {
      "raceId": "20260802-01-01",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 1,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 9,
          "horseName": "ドゥブルヴェ",
          "probability": 0.09150077072881528
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "ヨドノサファイア",
          "probability": 0.09124731430397812
        },
        {
          "mark": "▲",
          "horseNumber": 1,
          "horseName": "タガノシルフィー",
          "probability": 0.08180691764455698
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "レーヌペスカ",
          "probability": 0.08021612440946442
        },
        {
          "mark": "☆",
          "horseNumber": 14,
          "horseName": "テリオスリコ",
          "probability": 0.07874878535912055
        }
      ],
      "topPick": 9,
      "topPickFinish": 7,
      "topPickFinishText": "7着",
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
          "method": "期待順5点",
          "selection": "9-12 / 1-9 / 1-12 / 9-13 / 12-13",
          "ticketKeys": [
            "9-12",
            "1-9",
            "1-12",
            "9-13",
            "12-13"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-9-12-13-14 BOX",
          "ticketKeys": [
            "1-9-12",
            "9-12-13",
            "9-12-14",
            "1-9-13",
            "1-9-14",
            "9-13-14",
            "1-12-13",
            "1-12-14",
            "12-13-14",
            "1-13-14"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 2,
        "2": 12,
        "3": 5,
        "4": 13,
        "5": 1,
        "6": 4,
        "7": 10,
        "8": 3,
        "9": 7,
        "10": 14,
        "11": 11,
        "12": 6,
        "13": 8,
        "14": 9
      },
      "finishTextByHorseNumber": {
        "1": "2着",
        "2": "12着",
        "3": "5着",
        "4": "13着",
        "5": "1着",
        "6": "4着",
        "7": "10着",
        "8": "3着",
        "9": "7着",
        "10": "14着",
        "11": "11着",
        "12": "6着",
        "13": "8着",
        "14": "9着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヨドノサファイア",
              "score": 0.8982422251076273,
              "probability": 0.09124731430397812,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ドゥブルヴェ",
              "score": 0.8500000000000001,
              "probability": 0.09150077072881528,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "タガノシルフィー",
              "score": 0.7893352899950241,
              "probability": 0.08180691764455698,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 7,
          "topPickFinishText": "7着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "ドゥブルヴェ",
              "score": 0.77,
              "probability": 0.09150077072881528,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ヨドノサファイア",
              "score": 0.7296035935823179,
              "probability": 0.09124731430397812,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "タガノシルフィー",
              "score": 0.6335866522455422,
              "probability": 0.08180691764455698,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヨドノサファイア",
              "score": 0.872807398139222,
              "probability": 0.09124731430397812,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "タガノシルフィー",
              "score": 0.7428901959997553,
              "probability": 0.08180691764455698,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "ダノンルミエール",
              "score": 0.6863639873658046,
              "probability": 0.0773368963292656,
              "finish": 13,
              "finishText": "13着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヨドノサファイア",
              "score": 0.9509684948864133,
              "probability": 0.09124731430397812,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "タガノシルフィー",
              "score": 0.8158465669960712,
              "probability": 0.08180691764455698,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "レーヌペスカ",
              "score": 0.7485236256608373,
              "probability": 0.08021612440946442,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 7,
          "topPickFinishText": "7着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "ドゥブルヴェ",
              "score": 0.7466666666666667,
              "probability": 0.09150077072881528,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ヨドノサファイア",
              "score": 0.6868155142047417,
              "probability": 0.09124731430397812,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "ダノンルミエール",
              "score": 0.6070062449128111,
              "probability": 0.0773368963292656,
              "finish": 13,
              "finishText": "13着"
            }
          ]
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
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-12 / 1-12 / 1-9 / 12-13 / 9-13",
              "ticketKeys": [
                "9-12",
                "1-12",
                "1-9",
                "12-13",
                "9-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-9-12-13 BOX",
              "ticketKeys": [
                "1-9-12",
                "9-12-13",
                "4-9-12",
                "1-12-13",
                "1-4-12",
                "4-12-13",
                "1-9-13",
                "1-4-9",
                "4-9-13",
                "1-4-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-12 / 1-9 / 4-9 / 1-12 / 4-12",
              "ticketKeys": [
                "9-12",
                "1-9",
                "4-9",
                "1-12",
                "4-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-9-12-13 BOX",
              "ticketKeys": [
                "1-9-12",
                "4-9-12",
                "9-12-13",
                "1-4-9",
                "1-9-13",
                "4-9-13",
                "1-4-12",
                "1-12-13",
                "4-12-13",
                "1-4-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-12 / 4-12 / 12-13 / 1-4 / 1-13",
              "ticketKeys": [
                "1-12",
                "4-12",
                "12-13",
                "1-4",
                "1-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-9-12-13 BOX",
              "ticketKeys": [
                "1-4-12",
                "1-12-13",
                "1-9-12",
                "4-12-13",
                "4-9-12",
                "9-12-13",
                "1-4-13",
                "1-4-9",
                "1-9-13",
                "4-9-13"
              ],
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
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-12 / 12-13 / 4-12 / 1-13 / 1-4",
              "ticketKeys": [
                "1-12",
                "12-13",
                "4-12",
                "1-13",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-10-12-13 BOX",
              "ticketKeys": [
                "1-12-13",
                "1-4-12",
                "1-10-12",
                "4-12-13",
                "10-12-13",
                "4-10-12",
                "1-4-13",
                "1-10-13",
                "1-4-10",
                "4-10-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-12 / 4-9 / 1-9 / 4-12 / 9-13",
              "ticketKeys": [
                "9-12",
                "4-9",
                "1-9",
                "4-12",
                "9-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-9-12-13 BOX",
              "ticketKeys": [
                "4-9-12",
                "1-9-12",
                "9-12-13",
                "1-4-9",
                "4-9-13",
                "1-9-13",
                "1-4-12",
                "4-12-13",
                "1-12-13",
                "1-4-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-01",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 1,
      "raceTitle": "2歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "ノドゥス",
          "probability": 0.12915301789319147
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "ウィールズアップ",
          "probability": 0.11912493727236832
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "サノノキセキ",
          "probability": 0.11432655575314177
        },
        {
          "mark": "△",
          "horseNumber": 12,
          "horseName": "キミヘノメロディー",
          "probability": 0.09694387887494223
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "タイセイルミナス",
          "probability": 0.091851082286774
        }
      ],
      "topPick": 7,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 490,
          "netYen": 390,
          "recoveryRate": 4.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "7-10 / 4-7 / 4-10 / 7-12 / 7-11",
          "ticketKeys": [
            "7-10",
            "4-7",
            "4-10",
            "7-12",
            "7-11"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "4-7-10-11-12 BOX",
          "ticketKeys": [
            "4-7-10",
            "7-10-12",
            "7-10-11",
            "4-7-12",
            "4-7-11",
            "7-11-12",
            "4-10-12",
            "4-10-11",
            "10-11-12",
            "4-11-12"
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
      "investmentYen": 1600,
      "payoutYen": 490,
      "netYen": -1110,
      "recoveryRate": 0.30625,
      "hit": true,
      "finishByHorseNumber": {
        "1": 10,
        "2": 8,
        "3": 6,
        "4": 3,
        "5": 2,
        "6": 5,
        "7": 1,
        "8": 11,
        "9": 4,
        "10": 7,
        "11": 9,
        "12": 12
      },
      "finishTextByHorseNumber": {
        "1": "10着",
        "2": "8着",
        "3": "6着",
        "4": "3着",
        "5": "2着",
        "6": "5着",
        "7": "1着",
        "8": "11着",
        "9": "4着",
        "10": "7着",
        "11": "9着",
        "12": "12着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ノドゥス",
              "score": 0.9451592577520243,
              "probability": 0.12915301789319147,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "ウィールズアップ",
              "score": 0.8514832992246777,
              "probability": 0.11912493727236832,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "サノノキセキ",
              "score": 0.7920274904792973,
              "probability": 0.11432655575314177,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ノドゥス",
              "score": 0.7516177813951417,
              "probability": 0.12915301789319147,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "サノノキセキ",
              "score": 0.7070362683940326,
              "probability": 0.11432655575314177,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ウィールズアップ",
              "score": 0.6813951982247829,
              "probability": 0.11912493727236832,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ノドゥス",
              "score": 0.872891843411336,
              "probability": 0.12915301789319147,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "サノノキセキ",
              "score": 0.8164608904620101,
              "probability": 0.11432655575314177,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ウィールズアップ",
              "score": 0.7782065092544749,
              "probability": 0.11912493727236832,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ノドゥス",
              "score": 0.9397666531015518,
              "probability": 0.12915301789319147,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "サノノキセキ",
              "score": 0.8841050699249963,
              "probability": 0.11432655575314177,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ウィールズアップ",
              "score": 0.8423042292826852,
              "probability": 0.11912493727236832,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ノドゥス",
              "score": 0.7088237085268557,
              "probability": 0.12915301789319147,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "サノノキセキ",
              "score": 0.6721184509498392,
              "probability": 0.11432655575314177,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "ウィールズアップ",
              "score": 0.6382864913671336,
              "probability": 0.11912493727236832,
              "finish": 7,
              "finishText": "7着"
            }
          ]
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
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 490,
              "netYen": 390,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-10 / 4-7 / 4-10 / 7-11 / 7-12",
              "ticketKeys": [
                "7-10",
                "4-7",
                "4-10",
                "7-11",
                "7-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-7-10-11-12 BOX",
              "ticketKeys": [
                "4-7-10",
                "7-10-11",
                "7-10-12",
                "4-7-11",
                "4-7-12",
                "7-11-12",
                "4-10-11",
                "4-10-12",
                "10-11-12",
                "4-11-12"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 490,
              "netYen": 390,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-7 / 7-10 / 4-10 / 7-12 / 7-11",
              "ticketKeys": [
                "4-7",
                "7-10",
                "4-10",
                "7-12",
                "7-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-7-10-11-12 BOX",
              "ticketKeys": [
                "4-7-10",
                "4-7-12",
                "4-7-11",
                "7-10-12",
                "7-10-11",
                "7-11-12",
                "4-10-12",
                "4-10-11",
                "4-11-12",
                "10-11-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 490,
              "netYen": 390,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-7 / 7-10 / 4-10 / 7-11 / 4-11",
              "ticketKeys": [
                "4-7",
                "7-10",
                "4-10",
                "7-11",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-7-10-11 BOX",
              "ticketKeys": [
                "4-7-10",
                "4-7-11",
                "4-5-7",
                "7-10-11",
                "5-7-10",
                "5-7-11",
                "4-10-11",
                "4-5-10",
                "4-5-11",
                "5-10-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1220,
              "netYen": 220,
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
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 490,
              "netYen": 390,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-7 / 7-10 / 4-10 / 7-11 / 4-11",
              "ticketKeys": [
                "4-7",
                "7-10",
                "4-10",
                "7-11",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-7-10-11 BOX",
              "ticketKeys": [
                "4-7-10",
                "4-7-11",
                "4-5-7",
                "7-10-11",
                "5-7-10",
                "5-7-11",
                "4-10-11",
                "4-5-10",
                "4-5-11",
                "5-10-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1220,
              "netYen": 220,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 490,
              "netYen": 390,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-7 / 7-10 / 4-10 / 7-12 / 7-11",
              "ticketKeys": [
                "4-7",
                "7-10",
                "4-10",
                "7-12",
                "7-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-7-10-11-12 BOX",
              "ticketKeys": [
                "4-7-10",
                "4-7-12",
                "4-7-11",
                "7-10-12",
                "7-10-11",
                "7-11-12",
                "4-10-12",
                "4-10-11",
                "4-11-12",
                "10-11-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-01",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 1,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "ビクスバイト",
          "probability": 0.08640723873983748
        },
        {
          "mark": "○",
          "horseNumber": 17,
          "horseName": "ルーチェブリラーレ",
          "probability": 0.07431178380125635
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ワンダースアン",
          "probability": 0.06376276960073504
        },
        {
          "mark": "△",
          "horseNumber": 10,
          "horseName": "ワンダーデリエール",
          "probability": 0.06099729906791906
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "ダンツカレン",
          "probability": 0.06054661292979015
        }
      ],
      "topPick": 4,
      "topPickFinish": 2,
      "topPickFinishText": "2着",
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
          "method": "期待順5点",
          "selection": "4-17 / 4-5 / 4-10 / 4-11 / 5-17",
          "ticketKeys": [
            "4-17",
            "4-5",
            "4-10",
            "4-11",
            "5-17"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "4-5-10-11-17 BOX",
          "ticketKeys": [
            "4-5-17",
            "4-10-17",
            "4-11-17",
            "4-5-10",
            "4-5-11",
            "4-10-11",
            "5-10-17",
            "5-11-17",
            "10-11-17",
            "5-10-11"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 12,
        "2": 11,
        "3": 6,
        "4": 2,
        "5": 15,
        "6": 17,
        "7": 10,
        "8": 1,
        "9": 4,
        "10": 14,
        "11": 18,
        "12": 7,
        "13": 5,
        "14": 13,
        "15": 8,
        "16": 9,
        "17": 3,
        "18": 16
      },
      "finishTextByHorseNumber": {
        "1": "12着",
        "2": "11着",
        "3": "6着",
        "4": "2着",
        "5": "15着",
        "6": "17着",
        "7": "10着",
        "8": "1着",
        "9": "4着",
        "10": "14着",
        "11": "18着",
        "12": "7着",
        "13": "5着",
        "14": "13着",
        "15": "8着",
        "16": "9着",
        "17": "3着",
        "18": "16着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ビクスバイト",
              "score": 0.9500000000000001,
              "probability": 0.08640723873983748,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "ルーチェブリラーレ",
              "score": 0.8269960140931853,
              "probability": 0.07431178380125635,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ワンダースアン",
              "score": 0.7072751846489468,
              "probability": 0.06376276960073504,
              "finish": 15,
              "finishText": "15着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ビクスバイト",
              "score": 0.74,
              "probability": 0.08640723873983748,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "ルーチェブリラーレ",
              "score": 0.6750788708406446,
              "probability": 0.07431178380125635,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ワンダースアン",
              "score": 0.5589116801092877,
              "probability": 0.06376276960073504,
              "finish": 15,
              "finishText": "15着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ビクスバイト",
              "score": 0.8999999999999999,
              "probability": 0.08640723873983748,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "ルーチェブリラーレ",
              "score": 0.7962503547555492,
              "probability": 0.07431178380125635,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ワンダースアン",
              "score": 0.6456687660859799,
              "probability": 0.06376276960073504,
              "finish": 15,
              "finishText": "15着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ビクスバイト",
              "score": 0.9833333333333334,
              "probability": 0.08640723873983748,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "ルーチェブリラーレ",
              "score": 0.8704119176908881,
              "probability": 0.07431178380125635,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ワンダースアン",
              "score": 0.7139051203411159,
              "probability": 0.06376276960073504,
              "finish": 15,
              "finishText": "15着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "ビクスバイト",
              "score": 0.6933333333333334,
              "probability": 0.08640723873983748,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "ルーチェブリラーレ",
              "score": 0.6323678097167076,
              "probability": 0.07431178380125635,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "テンダーワーズ",
              "score": 0.5252692704473602,
              "probability": 0.059780298927563535,
              "finish": 9,
              "finishText": "9着"
            }
          ]
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
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-17 / 4-5 / 5-17 / 4-10 / 4-16",
              "ticketKeys": [
                "4-17",
                "4-5",
                "5-17",
                "4-10",
                "4-16"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-10-16-17 BOX",
              "ticketKeys": [
                "4-5-17",
                "4-10-17",
                "4-16-17",
                "4-5-10",
                "4-5-16",
                "4-10-16",
                "5-10-17",
                "5-16-17",
                "10-16-17",
                "5-10-16"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-17 / 4-5 / 4-16 / 4-10 / 5-17",
              "ticketKeys": [
                "4-17",
                "4-5",
                "4-16",
                "4-10",
                "5-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-10-16-17 BOX",
              "ticketKeys": [
                "4-5-17",
                "4-16-17",
                "4-10-17",
                "4-5-16",
                "4-5-10",
                "4-10-16",
                "5-16-17",
                "5-10-17",
                "10-16-17",
                "5-10-16"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-17 / 4-5 / 4-16 / 5-17 / 16-17",
              "ticketKeys": [
                "4-17",
                "4-5",
                "4-16",
                "5-17",
                "16-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-16-17 BOX",
              "ticketKeys": [
                "4-5-17",
                "4-16-17",
                "2-4-17",
                "4-5-16",
                "2-4-5",
                "2-4-16",
                "5-16-17",
                "2-5-17",
                "2-16-17",
                "2-5-16"
              ],
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
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-17 / 4-5 / 4-16 / 5-17 / 16-17",
              "ticketKeys": [
                "4-17",
                "4-5",
                "4-16",
                "5-17",
                "16-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-16-17 BOX",
              "ticketKeys": [
                "4-5-17",
                "4-16-17",
                "2-4-17",
                "4-5-16",
                "2-4-5",
                "2-4-16",
                "5-16-17",
                "2-5-17",
                "2-16-17",
                "2-5-16"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-17 / 4-16 / 4-5 / 4-10 / 16-17",
              "ticketKeys": [
                "4-17",
                "4-16",
                "4-5",
                "4-10",
                "16-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-10-16-17 BOX",
              "ticketKeys": [
                "4-16-17",
                "4-5-17",
                "4-10-17",
                "4-5-16",
                "4-10-16",
                "4-5-10",
                "5-16-17",
                "10-16-17",
                "5-10-17",
                "5-10-16"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-02",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 2,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 8,
          "horseName": "エグジスタンス",
          "probability": 0.09572807781461988
        },
        {
          "mark": "○",
          "horseNumber": 11,
          "horseName": "ショウナンバーボン",
          "probability": 0.09445356133736713
        },
        {
          "mark": "▲",
          "horseNumber": 9,
          "horseName": "ミアエッテ",
          "probability": 0.09401269941702953
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "アトリ",
          "probability": 0.08576765641020033
        },
        {
          "mark": "☆",
          "horseNumber": 14,
          "horseName": "メイショウタダツグ",
          "probability": 0.08160022985050332
        }
      ],
      "topPick": 8,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 390,
          "netYen": 290,
          "recoveryRate": 3.9,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "8-11 / 8-9 / 9-11 / 8-13 / 11-13",
          "ticketKeys": [
            "8-11",
            "8-9",
            "9-11",
            "8-13",
            "11-13"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 1170,
          "netYen": 670,
          "recoveryRate": 2.34,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "8-9-11-13-14 BOX",
          "ticketKeys": [
            "8-9-11",
            "8-11-13",
            "8-11-14",
            "8-9-13",
            "8-9-14",
            "8-13-14",
            "9-11-13",
            "9-11-14",
            "11-13-14",
            "9-13-14"
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
      "investmentYen": 1600,
      "payoutYen": 1560,
      "netYen": -40,
      "recoveryRate": 0.975,
      "hit": true,
      "finishByHorseNumber": {
        "1": 5,
        "2": 7,
        "3": 4,
        "4": 6,
        "5": 13,
        "6": 9,
        "7": 10,
        "8": 1,
        "9": 12,
        "10": 3,
        "11": 2,
        "12": 8,
        "13": 11,
        "14": 14
      },
      "finishTextByHorseNumber": {
        "1": "5着",
        "2": "7着",
        "3": "4着",
        "4": "6着",
        "5": "13着",
        "6": "9着",
        "7": "10着",
        "8": "1着",
        "9": "12着",
        "10": "3着",
        "11": "2着",
        "12": "8着",
        "13": "11着",
        "14": "14着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "エグジスタンス",
              "score": 0.9392270963863376,
              "probability": 0.09572807781461988,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ショウナンバーボン",
              "score": 0.793058549716128,
              "probability": 0.09445356133736713,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ミアエッテ",
              "score": 0.7403958278247978,
              "probability": 0.09401269941702953,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "エグジスタンス",
              "score": 0.7658549686727897,
              "probability": 0.09572807781461988,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ショウナンバーボン",
              "score": 0.726648775386067,
              "probability": 0.09445356133736713,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ミアエッテ",
              "score": 0.6852570240344777,
              "probability": 0.09401269941702953,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "エグジスタンス",
              "score": 0.8396717397634906,
              "probability": 0.09572807781461988,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "メイショウタダツグ",
              "score": 0.7141304865021738,
              "probability": 0.08160022985050332,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "グローリーバローズ",
              "score": 0.6709227260190324,
              "probability": 0.06694749294113288,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "エグジスタンス",
              "score": 0.886377200810372,
              "probability": 0.09572807781461988,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "メイショウタダツグ",
              "score": 0.7727933647239719,
              "probability": 0.08160022985050332,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "アトリ",
              "score": 0.7305473430872715,
              "probability": 0.08576765641020033,
              "finish": 11,
              "finishText": "11着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 8,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 8,
              "horseName": "エグジスタンス",
              "score": 0.727806624897053,
              "probability": 0.09572807781461988,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ショウナンバーボン",
              "score": 0.7034383814865012,
              "probability": 0.09445356133736713,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ミアエッテ",
              "score": 0.6623279489145721,
              "probability": 0.09401269941702953,
              "finish": 12,
              "finishText": "12着"
            }
          ]
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
              "ticketKeys": [
                "8"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "8-11 / 8-9 / 8-13 / 8-14 / 9-11",
              "ticketKeys": [
                "8-11",
                "8-9",
                "8-13",
                "8-14",
                "9-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 1170,
              "netYen": 670,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-11-13-14 BOX",
              "ticketKeys": [
                "8-9-11",
                "8-11-13",
                "8-11-14",
                "8-9-13",
                "8-9-14",
                "8-13-14",
                "9-11-13",
                "9-11-14",
                "11-13-14",
                "9-13-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "ticketKeys": [
                "8"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "8-11 / 8-9 / 8-10 / 9-11 / 8-14",
              "ticketKeys": [
                "8-11",
                "8-9",
                "8-10",
                "9-11",
                "8-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 1170,
              "netYen": 670,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-10-11-14 BOX",
              "ticketKeys": [
                "8-9-11",
                "8-10-11",
                "8-11-14",
                "8-9-10",
                "8-9-14",
                "8-10-14",
                "9-10-11",
                "9-11-14",
                "10-11-14",
                "9-10-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 6680,
              "netYen": 5680,
              "hit": true
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "ticketKeys": [
                "8"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "8-14 / 8-10 / 8-13 / 2-8 / 10-14",
              "ticketKeys": [
                "8-14",
                "8-10",
                "8-13",
                "2-8",
                "10-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-8-10-13-14 BOX",
              "ticketKeys": [
                "8-10-14",
                "8-13-14",
                "2-8-14",
                "8-10-13",
                "2-8-10",
                "2-8-13",
                "10-13-14",
                "2-10-14",
                "2-13-14",
                "2-10-13"
              ],
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
              "ticketKeys": [
                "8"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "8-14 / 8-13 / 8-10 / 13-14 / 2-8",
              "ticketKeys": [
                "8-14",
                "8-13",
                "8-10",
                "13-14",
                "2-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-8-10-13-14 BOX",
              "ticketKeys": [
                "8-13-14",
                "8-10-14",
                "2-8-14",
                "8-10-13",
                "2-8-13",
                "2-8-10",
                "10-13-14",
                "2-13-14",
                "2-10-14",
                "2-10-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "8",
              "ticketKeys": [
                "8"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 390,
              "netYen": 290,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "8-11 / 8-9 / 9-11 / 8-10 / 10-11",
              "ticketKeys": [
                "8-11",
                "8-9",
                "9-11",
                "8-10",
                "10-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 1170,
              "netYen": 670,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-10-11-14 BOX",
              "ticketKeys": [
                "8-9-11",
                "8-10-11",
                "8-11-14",
                "8-9-10",
                "8-9-14",
                "8-10-14",
                "9-10-11",
                "9-11-14",
                "10-11-14",
                "9-10-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 6680,
              "netYen": 5680,
              "hit": true
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-02",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 2,
      "raceTitle": "メイクデビュー新潟",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "リーチツモドライチ",
          "probability": 0.14939930309671065
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "グランシュレーム",
          "probability": 0.13577389163376616
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "サスケソルトバーン",
          "probability": 0.1194136806054981
        },
        {
          "mark": "△",
          "horseNumber": 9,
          "horseName": "イチザサンダー",
          "probability": 0.10057830488070481
        },
        {
          "mark": "☆",
          "horseNumber": 6,
          "horseName": "ラインホルト",
          "probability": 0.09416234033271474
        }
      ],
      "topPick": 5,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 530,
          "netYen": 430,
          "recoveryRate": 5.3,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "5-12 / 5-11 / 11-12 / 5-9 / 5-6",
          "ticketKeys": [
            "5-12",
            "5-11",
            "11-12",
            "5-9",
            "5-6"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "5-6-9-11-12 BOX",
          "ticketKeys": [
            "5-11-12",
            "5-9-12",
            "5-6-12",
            "5-9-11",
            "5-6-11",
            "5-6-9",
            "9-11-12",
            "6-11-12",
            "6-9-12",
            "6-9-11"
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
      "investmentYen": 1600,
      "payoutYen": 530,
      "netYen": -1070,
      "recoveryRate": 0.33125,
      "hit": true,
      "finishByHorseNumber": {
        "1": 10,
        "2": 4,
        "3": 5,
        "4": 9,
        "5": 1,
        "6": 3,
        "7": 7,
        "8": 12,
        "9": 11,
        "10": 2,
        "11": 8,
        "12": 6
      },
      "finishTextByHorseNumber": {
        "1": "10着",
        "2": "4着",
        "3": "5着",
        "4": "9着",
        "5": "1着",
        "6": "3着",
        "7": "7着",
        "8": "12着",
        "9": "11着",
        "10": "2着",
        "11": "8着",
        "12": "6着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "リーチツモドライチ",
              "score": 0.9500000000000001,
              "probability": 0.14939930309671065,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "グランシュレーム",
              "score": 0.8468094356707504,
              "probability": 0.13577389163376616,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "サスケソルトバーン",
              "score": 0.6486946634242193,
              "probability": 0.1194136806054981,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "リーチツモドライチ",
              "score": 0.74,
              "probability": 0.14939930309671065,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "グランシュレーム",
              "score": 0.66924756413354,
              "probability": 0.13577389163376616,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "サスケソルトバーン",
              "score": 0.6108438036767943,
              "probability": 0.1194136806054981,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "リーチツモドライチ",
              "score": 0.8999999999999999,
              "probability": 0.14939930309671065,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "グランシュレーム",
              "score": 0.7858120645805284,
              "probability": 0.13577389163376616,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ゼノスフィア",
              "score": 0.48264089338896293,
              "probability": 0.0689848426648146,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "リーチツモドライチ",
              "score": 0.9833333333333334,
              "probability": 0.14939930309671065,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "グランシュレーム",
              "score": 0.8588550289881658,
              "probability": 0.13577389163376616,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ゼノスフィア",
              "score": 0.5214173982644716,
              "probability": 0.0689848426648146,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "リーチツモドライチ",
              "score": 0.6933333333333334,
              "probability": 0.14939930309671065,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "グランシュレーム",
              "score": 0.6239742492090458,
              "probability": 0.13577389163376616,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "サスケソルトバーン",
              "score": 0.5889900281660831,
              "probability": 0.1194136806054981,
              "finish": 8,
              "finishText": "8着"
            }
          ]
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 530,
              "netYen": 430,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 5-11 / 11-12 / 5-9 / 9-12",
              "ticketKeys": [
                "5-12",
                "5-11",
                "11-12",
                "5-9",
                "9-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "5-6-9-11-12 BOX",
              "ticketKeys": [
                "5-11-12",
                "5-9-12",
                "5-6-12",
                "5-9-11",
                "5-6-11",
                "5-6-9",
                "9-11-12",
                "6-11-12",
                "6-9-12",
                "6-9-11"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 530,
              "netYen": 430,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 5-11 / 11-12 / 5-9 / 2-5",
              "ticketKeys": [
                "5-12",
                "5-11",
                "11-12",
                "5-9",
                "2-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-9-11-12 BOX",
              "ticketKeys": [
                "5-11-12",
                "5-9-12",
                "2-5-12",
                "5-9-11",
                "2-5-11",
                "2-5-9",
                "9-11-12",
                "2-11-12",
                "2-9-12",
                "2-9-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 530,
              "netYen": 430,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 3-5 / 2-5 / 3-12 / 2-12",
              "ticketKeys": [
                "5-12",
                "3-5",
                "2-5",
                "3-12",
                "2-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-11-12 BOX",
              "ticketKeys": [
                "3-5-12",
                "2-5-12",
                "5-11-12",
                "2-3-5",
                "3-5-11",
                "2-5-11",
                "2-3-12",
                "3-11-12",
                "2-11-12",
                "2-3-11"
              ],
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 530,
              "netYen": 430,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 3-5 / 2-5 / 3-12 / 2-12",
              "ticketKeys": [
                "5-12",
                "3-5",
                "2-5",
                "3-12",
                "2-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-5-12 BOX",
              "ticketKeys": [
                "3-5-12",
                "2-5-12",
                "1-5-12",
                "2-3-5",
                "1-3-5",
                "1-2-5",
                "2-3-12",
                "1-3-12",
                "1-2-12",
                "1-2-3"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 530,
              "netYen": 430,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 5-11 / 11-12 / 2-5 / 5-9",
              "ticketKeys": [
                "5-12",
                "5-11",
                "11-12",
                "2-5",
                "5-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-9-11-12 BOX",
              "ticketKeys": [
                "5-11-12",
                "2-5-12",
                "5-9-12",
                "2-5-11",
                "5-9-11",
                "2-5-9",
                "2-11-12",
                "9-11-12",
                "2-9-12",
                "2-9-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-02",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 2,
      "raceTitle": "メイクデビュー中京",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "ハイウェイワン",
          "probability": 0.23601760914218534
        },
        {
          "mark": "○",
          "horseNumber": 8,
          "horseName": "エコログレイス",
          "probability": 0.16451096988837696
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "オーリエイト",
          "probability": 0.14107289736537226
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ファンビッチャン",
          "probability": 0.136249328030044
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "アントラヴァースト",
          "probability": 0.08494405152205249
        }
      ],
      "topPick": 7,
      "topPickFinish": 5,
      "topPickFinishText": "5着",
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
          "method": "期待順5点",
          "selection": "7-8 / 5-7 / 4-7 / 5-8 / 4-8",
          "ticketKeys": [
            "7-8",
            "5-7",
            "4-7",
            "5-8",
            "4-8"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "2-4-5-7-8 BOX",
          "ticketKeys": [
            "5-7-8",
            "4-7-8",
            "2-7-8",
            "4-5-7",
            "2-5-7",
            "2-4-7",
            "4-5-8",
            "2-5-8",
            "2-4-8",
            "2-4-5"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 3,
        "2": 4,
        "3": 7,
        "4": 1,
        "5": 2,
        "6": 8,
        "7": 5,
        "8": 6
      },
      "finishTextByHorseNumber": {
        "1": "3着",
        "2": "4着",
        "3": "7着",
        "4": "1着",
        "5": "2着",
        "6": "8着",
        "7": "5着",
        "8": "6着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ハイウェイワン",
              "score": 0.9500000000000001,
              "probability": 0.23601760914218534,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコログレイス",
              "score": 0.7395652395704231,
              "probability": 0.16451096988837696,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "オーリエイト",
              "score": 0.6259093854868522,
              "probability": 0.14107289736537226,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ハイウェイワン",
              "score": 0.74,
              "probability": 0.23601760914218534,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコログレイス",
              "score": 0.6370915705910085,
              "probability": 0.16451096988837696,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "サンライズエイト",
              "score": 0.5075734693460014,
              "probability": 0.07912739266245968,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ハイウェイワン",
              "score": 0.8999999999999999,
              "probability": 0.23601760914218534,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコログレイス",
              "score": 0.7314490295002846,
              "probability": 0.16451096988837696,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "オーリエイト",
              "score": 0.5567797678239561,
              "probability": 0.14107289736537226,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ハイウェイワン",
              "score": 0.9833333333333334,
              "probability": 0.23601760914218534,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコログレイス",
              "score": 0.7983112702882628,
              "probability": 0.16451096988837696,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "オーリエイト",
              "score": 0.619286140942628,
              "probability": 0.14107289736537226,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ハイウェイワン",
              "score": 0.6933333333333334,
              "probability": 0.23601760914218534,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "エコログレイス",
              "score": 0.598681844708838,
              "probability": 0.16451096988837696,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "サンライズエイト",
              "score": 0.4991702260697966,
              "probability": 0.07912739266245968,
              "finish": 3,
              "finishText": "3着"
            }
          ]
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
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 5-7 / 4-7 / 5-8 / 4-8",
              "ticketKeys": [
                "7-8",
                "5-7",
                "4-7",
                "5-8",
                "4-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-7-8 BOX",
              "ticketKeys": [
                "5-7-8",
                "4-7-8",
                "2-7-8",
                "4-5-7",
                "2-5-7",
                "2-4-7",
                "4-5-8",
                "2-5-8",
                "2-4-8",
                "2-4-5"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 1-7 / 4-7 / 5-7 / 1-8",
              "ticketKeys": [
                "7-8",
                "1-7",
                "4-7",
                "5-7",
                "1-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-7-8 BOX",
              "ticketKeys": [
                "1-7-8",
                "4-7-8",
                "5-7-8",
                "1-4-7",
                "1-5-7",
                "4-5-7",
                "1-4-8",
                "1-5-8",
                "4-5-8",
                "1-4-5"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1960,
              "netYen": 960,
              "hit": true
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 5-7 / 4-7 / 1-7 / 5-8",
              "ticketKeys": [
                "7-8",
                "5-7",
                "4-7",
                "1-7",
                "5-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-7-8 BOX",
              "ticketKeys": [
                "5-7-8",
                "4-7-8",
                "1-7-8",
                "4-5-7",
                "1-5-7",
                "1-4-7",
                "4-5-8",
                "1-5-8",
                "1-4-8",
                "1-4-5"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1960,
              "netYen": 960,
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
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 5-7 / 4-7 / 1-7 / 5-8",
              "ticketKeys": [
                "7-8",
                "5-7",
                "4-7",
                "1-7",
                "5-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-7-8 BOX",
              "ticketKeys": [
                "5-7-8",
                "4-7-8",
                "1-7-8",
                "4-5-7",
                "1-5-7",
                "1-4-7",
                "4-5-8",
                "1-5-8",
                "1-4-8",
                "1-4-5"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1960,
              "netYen": 960,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 1-7 / 4-7 / 5-7 / 1-8",
              "ticketKeys": [
                "7-8",
                "1-7",
                "4-7",
                "5-7",
                "1-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-7-8 BOX",
              "ticketKeys": [
                "1-7-8",
                "4-7-8",
                "5-7-8",
                "1-4-7",
                "1-5-7",
                "4-5-7",
                "1-4-8",
                "1-5-8",
                "4-5-8",
                "1-4-5"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1960,
              "netYen": 960,
              "hit": true
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-03",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 3,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 3,
          "horseName": "ワンダーブリッツ",
          "probability": 0.12485632627387559
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "カンフージョン",
          "probability": 0.12082734271962861
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "ゴンフィンガー",
          "probability": 0.11415231778124954
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "モズヴイ",
          "probability": 0.1033927445312387
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "イントゥゴールデン",
          "probability": 0.09694334373741052
        }
      ],
      "topPick": 3,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 150,
          "netYen": 50,
          "recoveryRate": 1.5,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "3-10 / 3-8 / 8-10 / 1-3 / 1-10",
          "ticketKeys": [
            "3-10",
            "3-8",
            "8-10",
            "1-3",
            "1-10"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 180,
          "netYen": -320,
          "recoveryRate": 0.36,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-3-7-8-10 BOX",
          "ticketKeys": [
            "3-8-10",
            "1-3-10",
            "3-7-10",
            "1-3-8",
            "3-7-8",
            "1-3-7",
            "1-8-10",
            "7-8-10",
            "1-7-10",
            "1-7-8"
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
      "investmentYen": 1600,
      "payoutYen": 330,
      "netYen": -1270,
      "recoveryRate": 0.20625,
      "hit": true,
      "finishByHorseNumber": {
        "1": 9,
        "2": 6,
        "3": 1,
        "4": 5,
        "5": 3,
        "6": 8,
        "7": 10,
        "8": 2,
        "9": 7,
        "10": 11,
        "11": 4
      },
      "finishTextByHorseNumber": {
        "1": "9着",
        "2": "6着",
        "3": "1着",
        "4": "5着",
        "5": "3着",
        "6": "8着",
        "7": "10着",
        "8": "2着",
        "9": "7着",
        "10": "11着",
        "11": "4着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ワンダーブリッツ",
              "score": 0.9444049011905009,
              "probability": 0.12485632627387559,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ゴンフィンガー",
              "score": 0.8065620735921432,
              "probability": 0.11415231778124954,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "カンフージョン",
              "score": 0.783551105382363,
              "probability": 0.12082734271962861,
              "finish": 11,
              "finishText": "11着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ワンダーブリッツ",
              "score": 0.7534282371427977,
              "probability": 0.12485632627387559,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "カンフージョン",
              "score": 0.7193207210033397,
              "probability": 0.12082734271962861,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴンフィンガー",
              "score": 0.7102581923239064,
              "probability": 0.11415231778124954,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "モズヴイ",
              "score": 0.82671417029304,
              "probability": 0.1033927445312387,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ワンダーブリッツ",
              "score": 0.5144049011905009,
              "probability": 0.12485632627387559,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴンフィンガー",
              "score": 0.4408733275716409,
              "probability": 0.11415231778124954,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ワンダーブリッツ",
              "score": 0.9329774440478418,
              "probability": 0.12485632627387559,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "ゴンフィンガー",
              "score": 0.8933031672777733,
              "probability": 0.11415231778124954,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "モズヴイ",
              "score": 0.7431810953000051,
              "probability": 0.1033927445312387,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ワンダーブリッツ",
              "score": 0.7112376495237304,
              "probability": 0.12485632627387559,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "カンフージョン",
              "score": 0.6961666848602067,
              "probability": 0.12082734271962861,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴンフィンガー",
              "score": 0.6742730777276994,
              "probability": 0.11415231778124954,
              "finish": 2,
              "finishText": "2着"
            }
          ]
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
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 150,
              "netYen": 50,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-8 / 3-10 / 1-3 / 8-10 / 1-8",
              "ticketKeys": [
                "3-8",
                "3-10",
                "1-3",
                "8-10",
                "1-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 180,
              "netYen": -320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-7-8-10 BOX",
              "ticketKeys": [
                "3-8-10",
                "1-3-8",
                "3-7-8",
                "1-3-10",
                "3-7-10",
                "1-3-7",
                "1-8-10",
                "7-8-10",
                "1-7-8",
                "1-7-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 150,
              "netYen": 50,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-10 / 3-8 / 1-3 / 8-10 / 1-10",
              "ticketKeys": [
                "3-10",
                "3-8",
                "1-3",
                "8-10",
                "1-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 180,
              "netYen": -320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-7-8-10 BOX",
              "ticketKeys": [
                "3-8-10",
                "1-3-10",
                "3-7-10",
                "1-3-8",
                "3-7-8",
                "1-3-7",
                "1-8-10",
                "7-8-10",
                "1-7-10",
                "1-7-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-3 / 1-8 / 1-10 / 1-7 / 3-8",
              "ticketKeys": [
                "1-3",
                "1-8",
                "1-10",
                "1-7",
                "3-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 180,
              "netYen": -320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-7-8-10 BOX",
              "ticketKeys": [
                "1-3-8",
                "1-3-10",
                "1-3-7",
                "1-8-10",
                "1-7-8",
                "1-7-10",
                "3-8-10",
                "3-7-8",
                "3-7-10",
                "7-8-10"
              ],
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
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 150,
              "netYen": 50,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-8 / 1-3 / 1-8 / 3-5 / 3-10",
              "ticketKeys": [
                "3-8",
                "1-3",
                "1-8",
                "3-5",
                "3-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 180,
              "netYen": -320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-5-8-10 BOX",
              "ticketKeys": [
                "1-3-8",
                "3-5-8",
                "3-8-10",
                "1-3-5",
                "1-3-10",
                "3-5-10",
                "1-5-8",
                "1-8-10",
                "5-8-10",
                "1-5-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 920,
              "netYen": -80,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 150,
              "netYen": 50,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-10 / 3-8 / 8-10 / 1-3 / 1-10",
              "ticketKeys": [
                "3-10",
                "3-8",
                "8-10",
                "1-3",
                "1-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 180,
              "netYen": -320,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-7-8-10 BOX",
              "ticketKeys": [
                "3-8-10",
                "1-3-10",
                "3-7-10",
                "1-3-8",
                "3-7-8",
                "1-3-7",
                "1-8-10",
                "7-8-10",
                "1-7-10",
                "1-7-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-03",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 3,
      "raceTitle": "メイクデビュー新潟",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "コンフィアル",
          "probability": 0.13511550477241735
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "ファーストアライヴ",
          "probability": 0.1009566813070592
        },
        {
          "mark": "▲",
          "horseNumber": 7,
          "horseName": "マイネルリシャール",
          "probability": 0.1007632165882575
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ペアレンツハート",
          "probability": 0.08423060581754568
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "アンドレイア",
          "probability": 0.08405446017021176
        }
      ],
      "topPick": 12,
      "topPickFinish": 4,
      "topPickFinishText": "4着",
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
          "method": "期待順5点",
          "selection": "5-12 / 7-12 / 4-12 / 10-12 / 5-7",
          "ticketKeys": [
            "5-12",
            "7-12",
            "4-12",
            "10-12",
            "5-7"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "4-5-7-10-12 BOX",
          "ticketKeys": [
            "5-7-12",
            "4-5-12",
            "5-10-12",
            "4-7-12",
            "7-10-12",
            "4-10-12",
            "4-5-7",
            "5-7-10",
            "4-5-10",
            "4-7-10"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 9,
        "2": 12,
        "3": 5,
        "4": 8,
        "5": 2,
        "6": 11,
        "7": 6,
        "8": 10,
        "9": 7,
        "10": 13,
        "11": 3,
        "12": 4,
        "13": 1
      },
      "finishTextByHorseNumber": {
        "1": "9着",
        "2": "12着",
        "3": "5着",
        "4": "8着",
        "5": "2着",
        "6": "11着",
        "7": "6着",
        "8": "10着",
        "9": "7着",
        "10": "13着",
        "11": "3着",
        "12": "4着",
        "13": "1着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コンフィアル",
              "score": 0.9372873828482574,
              "probability": 0.13511550477241735,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "マイネルリシャール",
              "score": 0.705845301197534,
              "probability": 0.1007632165882575,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ファーストアライヴ",
              "score": 0.6734699908999195,
              "probability": 0.1009566813070592,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コンフィアル",
              "score": 0.7705102811641824,
              "probability": 0.13511550477241735,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ペアレンツハート",
              "score": 0.6678699078796458,
              "probability": 0.08423060581754568,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ファーストアライヴ",
              "score": 0.6317284599505271,
              "probability": 0.1009566813070592,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コンフィアル",
              "score": 0.8288093439502411,
              "probability": 0.13511550477241735,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ペアレンツハート",
              "score": 0.7200768790447345,
              "probability": 0.08423060581754568,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "マイネルリシャール",
              "score": 0.6315582551583626,
              "probability": 0.1007632165882575,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コンフィアル",
              "score": 0.8689197789676494,
              "probability": 0.13511550477241735,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ペアレンツハート",
              "score": 0.7698416019677053,
              "probability": 0.08423060581754568,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "マイネルリシャール",
              "score": 0.6914093011480378,
              "probability": 0.1007632165882575,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "コンフィアル",
              "score": 0.7340137082189099,
              "probability": 0.13511550477241735,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ペアレンツハート",
              "score": 0.6463229618468916,
              "probability": 0.08423060581754568,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ファーストアライヴ",
              "score": 0.6096641180910125,
              "probability": 0.1009566813070592,
              "finish": 2,
              "finishText": "2着"
            }
          ]
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
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-12 / 5-12 / 4-12 / 5-7 / 6-12",
              "ticketKeys": [
                "7-12",
                "5-12",
                "4-12",
                "5-7",
                "6-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-7-12 BOX",
              "ticketKeys": [
                "5-7-12",
                "4-7-12",
                "6-7-12",
                "4-5-12",
                "5-6-12",
                "4-6-12",
                "4-5-7",
                "5-6-7",
                "4-6-7",
                "4-5-6"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-12 / 5-12 / 7-12 / 11-12 / 4-5",
              "ticketKeys": [
                "4-12",
                "5-12",
                "7-12",
                "11-12",
                "4-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-7-11-12 BOX",
              "ticketKeys": [
                "4-5-12",
                "4-7-12",
                "4-11-12",
                "5-7-12",
                "5-11-12",
                "7-11-12",
                "4-5-7",
                "4-5-11",
                "4-7-11",
                "5-7-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-12 / 7-12 / 11-12 / 4-7 / 4-11",
              "ticketKeys": [
                "4-12",
                "7-12",
                "11-12",
                "4-7",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-7-11-12 BOX",
              "ticketKeys": [
                "4-7-12",
                "4-11-12",
                "4-6-12",
                "7-11-12",
                "6-7-12",
                "6-11-12",
                "4-7-11",
                "4-6-7",
                "4-6-11",
                "6-7-11"
              ],
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
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-12 / 7-12 / 4-7 / 11-12 / 4-11",
              "ticketKeys": [
                "4-12",
                "7-12",
                "4-7",
                "11-12",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-7-11-12 BOX",
              "ticketKeys": [
                "4-7-12",
                "4-11-12",
                "4-6-12",
                "7-11-12",
                "6-7-12",
                "6-11-12",
                "4-7-11",
                "4-6-7",
                "4-6-11",
                "6-7-11"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-12 / 5-12 / 11-12 / 4-5 / 7-12",
              "ticketKeys": [
                "4-12",
                "5-12",
                "11-12",
                "4-5",
                "7-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-7-11-12 BOX",
              "ticketKeys": [
                "4-5-12",
                "4-11-12",
                "4-7-12",
                "5-11-12",
                "5-7-12",
                "7-11-12",
                "4-5-11",
                "4-5-7",
                "4-7-11",
                "5-7-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-03",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 3,
      "raceTitle": "メイクデビュー中京",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "トゥーレジット",
          "probability": 0.14321809674997785
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "ベルコート",
          "probability": 0.11458687403193028
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "サウンドファイト",
          "probability": 0.11364363886659515
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "ムーンパッセ",
          "probability": 0.11071895585870621
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ジーティーマンフク",
          "probability": 0.10244739084503957
        }
      ],
      "topPick": 2,
      "topPickFinish": 2,
      "topPickFinishText": "2着",
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
          "method": "期待順5点",
          "selection": "2-6 / 2-4 / 1-2 / 2-10 / 4-6",
          "ticketKeys": [
            "2-6",
            "2-4",
            "1-2",
            "2-10",
            "4-6"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-2-4-6-10 BOX",
          "ticketKeys": [
            "2-4-6",
            "1-2-6",
            "2-6-10",
            "1-2-4",
            "2-4-10",
            "1-2-10",
            "1-4-6",
            "4-6-10",
            "1-6-10",
            "1-4-10"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 7,
        "2": 2,
        "3": 4,
        "4": 8,
        "5": 10,
        "6": 3,
        "7": 5,
        "8": 1,
        "9": 6,
        "10": 9
      },
      "finishTextByHorseNumber": {
        "1": "7着",
        "2": "2着",
        "3": "4着",
        "4": "8着",
        "5": "10着",
        "6": "3着",
        "7": "5着",
        "8": "1着",
        "9": "6着",
        "10": "9着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トゥーレジット",
              "score": 0.9448579827532303,
              "probability": 0.14321809674997785,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ベルコート",
              "score": 0.7996439530905858,
              "probability": 0.11458687403193028,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ムーンパッセ",
              "score": 0.6717998544223289,
              "probability": 0.11071895585870621,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トゥーレジット",
              "score": 0.7523408413922473,
              "probability": 0.14321809674997785,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ベルコート",
              "score": 0.7077579358053908,
              "probability": 0.11458687403193028,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "サウンドファイト",
              "score": 0.6085914435537169,
              "probability": 0.11364363886659515,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トゥーレジット",
              "score": 0.8712047034180895,
              "probability": 0.14321809674997785,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ベルコート",
              "score": 0.820106185422211,
              "probability": 0.11458687403193028,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ムーンパッセ",
              "score": 0.6299778601410376,
              "probability": 0.11071895585870621,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トゥーレジット",
              "score": 0.9370551781124058,
              "probability": 0.14321809674997785,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ベルコート",
              "score": 0.888575297339292,
              "probability": 0.11458687403193028,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "ムーンパッセ",
              "score": 0.6951641318738856,
              "probability": 0.11071895585870621,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "トゥーレジット",
              "score": 0.7097877885229965,
              "probability": 0.14321809674997785,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ベルコート",
              "score": 0.6722108713217988,
              "probability": 0.11458687403193028,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "サウンドファイト",
              "score": 0.5867870634547147,
              "probability": 0.11364363886659515,
              "finish": 8,
              "finishText": "8着"
            }
          ]
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
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 1-2 / 2-4 / 2-10 / 1-6",
              "ticketKeys": [
                "2-6",
                "1-2",
                "2-4",
                "2-10",
                "1-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-4-6-10 BOX",
              "ticketKeys": [
                "1-2-6",
                "2-4-6",
                "2-6-10",
                "1-2-4",
                "1-2-10",
                "2-4-10",
                "1-4-6",
                "1-6-10",
                "4-6-10",
                "1-4-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 2-4 / 4-6 / 1-2 / 2-3",
              "ticketKeys": [
                "2-6",
                "2-4",
                "4-6",
                "1-2",
                "2-3"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-4-6 BOX",
              "ticketKeys": [
                "2-4-6",
                "1-2-6",
                "2-3-6",
                "1-2-4",
                "2-3-4",
                "1-2-3",
                "1-4-6",
                "3-4-6",
                "1-3-6",
                "1-3-4"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 1-2 / 1-6 / 2-3 / 2-10",
              "ticketKeys": [
                "2-6",
                "1-2",
                "1-6",
                "2-3",
                "2-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-6-10 BOX",
              "ticketKeys": [
                "1-2-6",
                "2-3-6",
                "2-6-10",
                "1-2-3",
                "1-2-10",
                "2-3-10",
                "1-3-6",
                "1-6-10",
                "3-6-10",
                "1-3-10"
              ],
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
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 1-2 / 1-6 / 2-10 / 2-3",
              "ticketKeys": [
                "2-6",
                "1-2",
                "1-6",
                "2-10",
                "2-3"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-6-10 BOX",
              "ticketKeys": [
                "1-2-6",
                "2-6-10",
                "2-3-6",
                "1-2-10",
                "1-2-3",
                "2-3-10",
                "1-6-10",
                "1-3-6",
                "3-6-10",
                "1-3-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 2-4 / 4-6 / 2-3 / 1-2",
              "ticketKeys": [
                "2-6",
                "2-4",
                "4-6",
                "2-3",
                "1-2"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-4-6 BOX",
              "ticketKeys": [
                "2-4-6",
                "2-3-6",
                "1-2-6",
                "2-3-4",
                "1-2-4",
                "1-2-3",
                "3-4-6",
                "1-4-6",
                "1-3-6",
                "1-3-4"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-04",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 4,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "グランアルト",
          "probability": 0.1199461129039981
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "クオンタムスター",
          "probability": 0.11878018439805649
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "ランブリングマン",
          "probability": 0.11155390261351368
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "ワンダフルデイズ",
          "probability": 0.10453535799213097
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "ニヒトツーゼーア",
          "probability": 0.0894422722878596
        }
      ],
      "topPick": 4,
      "topPickFinish": 7,
      "topPickFinishText": "7着",
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
          "method": "期待順5点",
          "selection": "4-5 / 4-8 / 5-8 / 2-4 / 2-5",
          "ticketKeys": [
            "4-5",
            "4-8",
            "5-8",
            "2-4",
            "2-5"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "2-4-5-8-9 BOX",
          "ticketKeys": [
            "4-5-8",
            "2-4-5",
            "4-5-9",
            "2-4-8",
            "4-8-9",
            "2-4-9",
            "2-5-8",
            "5-8-9",
            "2-5-9",
            "2-8-9"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 12,
        "2": 4,
        "3": 11,
        "4": 7,
        "5": 2,
        "6": 3,
        "7": 5,
        "8": 13,
        "9": 10,
        "10": 1,
        "11": 8,
        "12": 6,
        "13": 9
      },
      "finishTextByHorseNumber": {
        "1": "12着",
        "2": "4着",
        "3": "11着",
        "4": "7着",
        "5": "2着",
        "6": "3着",
        "7": "5着",
        "8": "13着",
        "9": "10着",
        "10": "1着",
        "11": "8着",
        "12": "6着",
        "13": "9着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 7,
          "topPickFinishText": "7着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "グランアルト",
              "score": 0.9380916975325895,
              "probability": 0.1199461129039981,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "クオンタムスター",
              "score": 0.8947736461744787,
              "probability": 0.11878018439805649,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ワンダフルデイズ",
              "score": 0.7191732843888379,
              "probability": 0.10453535799213097,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 7,
          "topPickFinishText": "7着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "グランアルト",
              "score": 0.7685799259217853,
              "probability": 0.1199461129039981,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "クオンタムスター",
              "score": 0.7288308096824123,
              "probability": 0.11878018439805649,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ランブリングマン",
              "score": 0.6646113391041742,
              "probability": 0.11155390261351368,
              "finish": 13,
              "finishText": "13着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "クオンタムスター",
              "score": 0.8709515418072831,
              "probability": 0.11878018439805649,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "グランアルト",
              "score": 0.8333135061825011,
              "probability": 0.1199461129039981,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ワンダフルデイズ",
              "score": 0.6449581307804334,
              "probability": 0.10453535799213097,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "クオンタムスター",
              "score": 0.9487720228806288,
              "probability": 0.11878018439805649,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "グランアルト",
              "score": 0.8761586111266387,
              "probability": 0.1199461129039981,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ワンダフルデイズ",
              "score": 0.7058642929580974,
              "probability": 0.10453535799213097,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 7,
          "topPickFinishText": "7着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "グランアルト",
              "score": 0.731439901229047,
              "probability": 0.1199461129039981,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "クオンタムスター",
              "score": 0.6862971516903091,
              "probability": 0.11878018439805649,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ランブリングマン",
              "score": 0.6419438915727093,
              "probability": 0.11155390261351368,
              "finish": 13,
              "finishText": "13着"
            }
          ]
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
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-4 / 4-8 / 2-5 / 5-8",
              "ticketKeys": [
                "4-5",
                "2-4",
                "4-8",
                "2-5",
                "5-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-6-8 BOX",
              "ticketKeys": [
                "2-4-5",
                "4-5-8",
                "4-5-6",
                "2-4-8",
                "2-4-6",
                "4-6-8",
                "2-5-8",
                "2-5-6",
                "5-6-8",
                "2-6-8"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 4-8 / 5-8 / 2-4 / 4-6",
              "ticketKeys": [
                "4-5",
                "4-8",
                "5-8",
                "2-4",
                "4-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-6-8 BOX",
              "ticketKeys": [
                "4-5-8",
                "2-4-5",
                "4-5-6",
                "2-4-8",
                "4-6-8",
                "2-4-6",
                "2-5-8",
                "5-6-8",
                "2-5-6",
                "2-6-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 2-4 / 5-6 / 4-6",
              "ticketKeys": [
                "4-5",
                "2-5",
                "2-4",
                "5-6",
                "4-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-6-8 BOX",
              "ticketKeys": [
                "2-4-5",
                "4-5-6",
                "4-5-8",
                "2-5-6",
                "2-5-8",
                "5-6-8",
                "2-4-6",
                "2-4-8",
                "4-6-8",
                "2-6-8"
              ],
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 5-6 / 2-4 / 4-6",
              "ticketKeys": [
                "4-5",
                "2-5",
                "5-6",
                "2-4",
                "4-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-6-12 BOX",
              "ticketKeys": [
                "2-4-5",
                "4-5-6",
                "4-5-12",
                "2-5-6",
                "2-5-12",
                "5-6-12",
                "2-4-6",
                "2-4-12",
                "4-6-12",
                "2-6-12"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 4-8 / 5-8 / 4-6 / 2-4",
              "ticketKeys": [
                "4-5",
                "4-8",
                "5-8",
                "4-6",
                "2-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-6-8 BOX",
              "ticketKeys": [
                "4-5-8",
                "4-5-6",
                "2-4-5",
                "4-6-8",
                "2-4-8",
                "2-4-6",
                "5-6-8",
                "2-5-8",
                "2-5-6",
                "2-6-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-04",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 15,
          "horseName": "テルケンレンタッチ",
          "probability": 0.11105119210493503
        },
        {
          "mark": "○",
          "horseNumber": 11,
          "horseName": "グラムエッジ",
          "probability": 0.09747275123296202
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "アルティシエル",
          "probability": 0.09005150556247214
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "ウォーレーションズ",
          "probability": 0.08433486831198356
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "サトノクラシカル",
          "probability": 0.07746304008641625
        }
      ],
      "topPick": 15,
      "topPickFinish": 14,
      "topPickFinishText": "14着",
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
          "method": "期待順5点",
          "selection": "11-15 / 14-15 / 13-15 / 11-14 / 9-15",
          "ticketKeys": [
            "11-15",
            "14-15",
            "13-15",
            "11-14",
            "9-15"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "9-11-13-14-15 BOX",
          "ticketKeys": [
            "11-14-15",
            "11-13-15",
            "9-11-15",
            "13-14-15",
            "9-14-15",
            "9-13-15",
            "11-13-14",
            "9-11-14",
            "9-11-13",
            "9-13-14"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 9,
        "2": 8,
        "3": 10,
        "4": 5,
        "5": 4,
        "6": 12,
        "7": 11,
        "8": 2,
        "9": 1,
        "10": 3,
        "11": 6,
        "12": 13,
        "13": 7,
        "14": 15,
        "15": 14
      },
      "finishTextByHorseNumber": {
        "1": "9着",
        "2": "8着",
        "3": "10着",
        "4": "5着",
        "5": "4着",
        "6": "12着",
        "7": "11着",
        "8": "2着",
        "9": "1着",
        "10": "3着",
        "11": "6着",
        "12": "13着",
        "13": "7着",
        "14": "15着",
        "15": "14着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テルケンレンタッチ",
              "score": 0.9337403743327897,
              "probability": 0.11105119210493503,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "グラムエッジ",
              "score": 0.8299866830744402,
              "probability": 0.09747275123296202,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "アルティシエル",
              "score": 0.6556255699363511,
              "probability": 0.09005150556247214,
              "finish": 15,
              "finishText": "15着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テルケンレンタッチ",
              "score": 0.7790231016013047,
              "probability": 0.11105119210493503,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "サトノクラシカル",
              "score": 0.665615782171894,
              "probability": 0.07746304008641625,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "グラムエッジ",
              "score": 0.6604759883687551,
              "probability": 0.09747275123296202,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テルケンレンタッチ",
              "score": 0.8089460962636223,
              "probability": 0.11105119210493503,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "グラムエッジ",
              "score": 0.7632967483799896,
              "probability": 0.09747275123296202,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "サトノクラシカル",
              "score": 0.7137633363068596,
              "probability": 0.07746304008641625,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テルケンレンタッチ",
              "score": 0.8369967023284406,
              "probability": 0.11105119210493503,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "グラムエッジ",
              "score": 0.8314421696827728,
              "probability": 0.09747275123296202,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "サトノクラシカル",
              "score": 0.7622959098625741,
              "probability": 0.07746304008641625,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "テルケンレンタッチ",
              "score": 0.7453641354684063,
              "probability": 0.11105119210493503,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "サトノクラシカル",
              "score": 0.6449953364944317,
              "probability": 0.07746304008641625,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "グラムエッジ",
              "score": 0.6163048277774633,
              "probability": 0.09747275123296202,
              "finish": 6,
              "finishText": "6着"
            }
          ]
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
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-15 / 14-15 / 9-15 / 11-14 / 13-15",
              "ticketKeys": [
                "11-15",
                "14-15",
                "9-15",
                "11-14",
                "13-15"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "9-11-13-14-15 BOX",
              "ticketKeys": [
                "11-14-15",
                "9-11-15",
                "11-13-15",
                "9-14-15",
                "13-14-15",
                "9-13-15",
                "9-11-14",
                "11-13-14",
                "9-11-13",
                "9-13-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-15 / 11-15 / 14-15 / 8-15 / 9-11",
              "ticketKeys": [
                "9-15",
                "11-15",
                "14-15",
                "8-15",
                "9-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-11-14-15 BOX",
              "ticketKeys": [
                "9-11-15",
                "9-14-15",
                "8-9-15",
                "11-14-15",
                "8-11-15",
                "8-14-15",
                "9-11-14",
                "8-9-11",
                "8-9-14",
                "8-11-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-15 / 9-15 / 9-11 / 8-15 / 8-11",
              "ticketKeys": [
                "11-15",
                "9-15",
                "9-11",
                "8-15",
                "8-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-10-11-15 BOX",
              "ticketKeys": [
                "9-11-15",
                "8-11-15",
                "10-11-15",
                "8-9-15",
                "9-10-15",
                "8-10-15",
                "8-9-11",
                "9-10-11",
                "8-10-11",
                "8-9-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2250,
              "netYen": 1250,
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
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-15 / 9-15 / 9-11 / 8-15 / 8-11",
              "ticketKeys": [
                "11-15",
                "9-15",
                "9-11",
                "8-15",
                "8-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-10-11-15 BOX",
              "ticketKeys": [
                "9-11-15",
                "8-11-15",
                "10-11-15",
                "8-9-15",
                "9-10-15",
                "8-10-15",
                "8-9-11",
                "9-10-11",
                "8-10-11",
                "8-9-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 2250,
              "netYen": 1250,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-15 / 11-15 / 14-15 / 8-15 / 9-11",
              "ticketKeys": [
                "9-15",
                "11-15",
                "14-15",
                "8-15",
                "9-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-11-14-15 BOX",
              "ticketKeys": [
                "9-11-15",
                "9-14-15",
                "8-9-15",
                "11-14-15",
                "8-11-15",
                "8-14-15",
                "9-11-14",
                "8-9-11",
                "8-9-14",
                "8-11-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-04",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 4,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "ビービーシナジー",
          "probability": 0.09504600585459909
        },
        {
          "mark": "○",
          "horseNumber": 13,
          "horseName": "プレデンシア",
          "probability": 0.07772940563766913
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "ザキノフレンズ",
          "probability": 0.07392262701968046
        },
        {
          "mark": "△",
          "horseNumber": 15,
          "horseName": "ナムラロダン",
          "probability": 0.07206718094267954
        },
        {
          "mark": "☆",
          "horseNumber": 12,
          "horseName": "マクアケ",
          "probability": 0.06894660919594298
        }
      ],
      "topPick": 11,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 600,
          "netYen": 500,
          "recoveryRate": 6,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "11-13 / 8-11 / 11-15 / 11-12 / 8-13",
          "ticketKeys": [
            "11-13",
            "8-11",
            "11-15",
            "11-12",
            "8-13"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 1670,
          "netYen": 1170,
          "recoveryRate": 3.34,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "8-11-12-13-15 BOX",
          "ticketKeys": [
            "8-11-13",
            "11-13-15",
            "11-12-13",
            "8-11-15",
            "8-11-12",
            "11-12-15",
            "8-13-15",
            "8-12-13",
            "12-13-15",
            "8-12-15"
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
      "investmentYen": 1600,
      "payoutYen": 2270,
      "netYen": 670,
      "recoveryRate": 1.41875,
      "hit": true,
      "finishByHorseNumber": {
        "1": 14,
        "2": 8,
        "3": 13,
        "4": 9,
        "5": 11,
        "6": 7,
        "7": 12,
        "8": 6,
        "9": 10,
        "10": 3,
        "11": 1,
        "12": 4,
        "13": 5,
        "14": 15,
        "15": 2,
        "16": 16
      },
      "finishTextByHorseNumber": {
        "1": "14着",
        "2": "8着",
        "3": "13着",
        "4": "9着",
        "5": "11着",
        "6": "7着",
        "7": "12着",
        "8": "6着",
        "9": "10着",
        "10": "3着",
        "11": "1着",
        "12": "4着",
        "13": "5着",
        "14": "15着",
        "15": "2着",
        "16": "16着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ビービーシナジー",
              "score": 0.940524772982526,
              "probability": 0.09504600585459909,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "プレデンシア",
              "score": 0.8044378100656641,
              "probability": 0.07772940563766913,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ザキノフレンズ",
              "score": 0.6400462680091117,
              "probability": 0.07392262701968046,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ビービーシナジー",
              "score": 0.7627405448419375,
              "probability": 0.09504600585459909,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "プレデンシア",
              "score": 0.6563025365567509,
              "probability": 0.07772940563766913,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アステルディーヴァ",
              "score": 0.6454308032476236,
              "probability": 0.05979746642831493,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ビービーシナジー",
              "score": 0.8469387287021456,
              "probability": 0.09504600585459909,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "プレデンシア",
              "score": 0.7707781537040848,
              "probability": 0.07772940563766913,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アステルディーヴァ",
              "score": 0.6517558585250119,
              "probability": 0.05979746642831493,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ビービーシナジー",
              "score": 0.8980562901760674,
              "probability": 0.09504600585459909,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "プレデンシア",
              "score": 0.8437564029512923,
              "probability": 0.07772940563766913,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アステルディーヴァ",
              "score": 0.6878045934821571,
              "probability": 0.05979746642831493,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ビービーシナジー",
              "score": 0.7236540597892501,
              "probability": 0.09504600585459909,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "アステルディーヴァ",
              "score": 0.6342275853630981,
              "probability": 0.05979746642831493,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "プレデンシア",
              "score": 0.6135169990961502,
              "probability": 0.07772940563766913,
              "finish": 5,
              "finishText": "5着"
            }
          ]
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
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 600,
              "netYen": 500,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-13 / 8-11 / 11-12 / 11-15 / 8-13",
              "ticketKeys": [
                "11-13",
                "8-11",
                "11-12",
                "11-15",
                "8-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 1670,
              "netYen": 1170,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-11-12-13-15 BOX",
              "ticketKeys": [
                "8-11-13",
                "11-12-13",
                "11-13-15",
                "8-11-12",
                "8-11-15",
                "11-12-15",
                "8-12-13",
                "8-13-15",
                "12-13-15",
                "8-12-15"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 600,
              "netYen": 500,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-13 / 2-11 / 8-11 / 2-13 / 11-15",
              "ticketKeys": [
                "11-13",
                "2-11",
                "8-11",
                "2-13",
                "11-15"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 1670,
              "netYen": 1170,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-8-11-13-15 BOX",
              "ticketKeys": [
                "2-11-13",
                "8-11-13",
                "11-13-15",
                "2-8-11",
                "2-11-15",
                "8-11-15",
                "2-8-13",
                "2-13-15",
                "8-13-15",
                "2-8-15"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 600,
              "netYen": 500,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-13 / 2-11 / 11-12 / 2-13 / 12-13",
              "ticketKeys": [
                "11-13",
                "2-11",
                "11-12",
                "2-13",
                "12-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-11-12-13 BOX",
              "ticketKeys": [
                "2-11-13",
                "11-12-13",
                "4-11-13",
                "2-11-12",
                "2-4-11",
                "4-11-12",
                "2-12-13",
                "2-4-13",
                "4-12-13",
                "2-4-12"
              ],
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
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 600,
              "netYen": 500,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-13 / 2-11 / 11-12 / 2-13 / 12-13",
              "ticketKeys": [
                "11-13",
                "2-11",
                "11-12",
                "2-13",
                "12-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-11-12-13 BOX",
              "ticketKeys": [
                "2-11-13",
                "11-12-13",
                "4-11-13",
                "2-11-12",
                "2-4-11",
                "4-11-12",
                "2-12-13",
                "2-4-13",
                "4-12-13",
                "2-4-12"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 600,
              "netYen": 500,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-11 / 11-13 / 8-11 / 2-13 / 11-15",
              "ticketKeys": [
                "2-11",
                "11-13",
                "8-11",
                "2-13",
                "11-15"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 1670,
              "netYen": 1170,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-8-11-13-15 BOX",
              "ticketKeys": [
                "2-11-13",
                "2-8-11",
                "2-11-15",
                "8-11-13",
                "11-13-15",
                "8-11-15",
                "2-8-13",
                "2-13-15",
                "2-8-15",
                "8-13-15"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-05",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 5,
      "raceTitle": "メイクデビュー札幌",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 4,
          "horseName": "スワッグウォーク",
          "probability": 0.17421679561035475
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "グラブザクラウン",
          "probability": 0.13159463606447563
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "ボンジュールパリ",
          "probability": 0.12428226575636885
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "ジューンガレン",
          "probability": 0.10741504694124657
        },
        {
          "mark": "☆",
          "horseNumber": 3,
          "horseName": "オンザボー",
          "probability": 0.10300936415860622
        }
      ],
      "topPick": 4,
      "topPickFinish": 4,
      "topPickFinishText": "4着",
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
          "method": "期待順5点",
          "selection": "4-10 / 4-6 / 1-4 / 3-4 / 6-10",
          "ticketKeys": [
            "4-10",
            "4-6",
            "1-4",
            "3-4",
            "6-10"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-3-4-6-10 BOX",
          "ticketKeys": [
            "4-6-10",
            "1-4-10",
            "3-4-10",
            "1-4-6",
            "3-4-6",
            "1-3-4",
            "1-6-10",
            "3-6-10",
            "1-3-10",
            "1-3-6"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 7,
        "2": 1,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 10,
        "7": 2,
        "8": 8,
        "9": 6,
        "10": 9
      },
      "finishTextByHorseNumber": {
        "1": "7着",
        "2": "1着",
        "3": "3着",
        "4": "4着",
        "5": "5着",
        "6": "10着",
        "7": "2着",
        "8": "8着",
        "9": "6着",
        "10": "9着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "スワッグウォーク",
              "score": 0.9500000000000001,
              "probability": 0.17421679561035475,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "グラブザクラウン",
              "score": 0.7673095165326526,
              "probability": 0.13159463606447563,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ボンジュールパリ",
              "score": 0.69915296307938,
              "probability": 0.12428226575636885,
              "finish": 10,
              "finishText": "10着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "スワッグウォーク",
              "score": 0.74,
              "probability": 0.17421679561035475,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ボンジュールパリ",
              "score": 0.6323620147677229,
              "probability": 0.12428226575636885,
              "finish": 10,
              "finishText": "10着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "グラブザクラウン",
              "score": 0.6167781261408225,
              "probability": 0.13159463606447563,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "スワッグウォーク",
              "score": 0.8999999999999999,
              "probability": 0.17421679561035475,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "グラブザクラウン",
              "score": 0.7199877663312719,
              "probability": 0.13159463606447563,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ボンジュールパリ",
              "score": 0.7146036331228618,
              "probability": 0.12428226575636885,
              "finish": 10,
              "finishText": "10着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "スワッグウォーク",
              "score": 0.9833333333333334,
              "probability": 0.17421679561035475,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "グラブザクラウン",
              "score": 0.7916388050092485,
              "probability": 0.13159463606447563,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ボンジュールパリ",
              "score": 0.7771113713222195,
              "probability": 0.12428226575636885,
              "finish": 10,
              "finishText": "10着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "スワッグウォーク",
              "score": 0.6933333333333334,
              "probability": 0.17421679561035475,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ボンジュールパリ",
              "score": 0.597660336850252,
              "probability": 0.12428226575636885,
              "finish": 10,
              "finishText": "10着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "グラブザクラウン",
              "score": 0.5727878594550587,
              "probability": 0.13159463606447563,
              "finish": 9,
              "finishText": "9着"
            }
          ]
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
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-10 / 4-6 / 6-10 / 3-4 / 1-4",
              "ticketKeys": [
                "4-10",
                "4-6",
                "6-10",
                "3-4",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-6-10 BOX",
              "ticketKeys": [
                "4-6-10",
                "3-4-10",
                "1-4-10",
                "3-4-6",
                "1-4-6",
                "1-3-4",
                "3-6-10",
                "1-6-10",
                "1-3-10",
                "1-3-6"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 4-10 / 6-10 / 3-4 / 1-4",
              "ticketKeys": [
                "4-6",
                "4-10",
                "6-10",
                "3-4",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-6-10 BOX",
              "ticketKeys": [
                "4-6-10",
                "3-4-6",
                "1-4-6",
                "3-4-10",
                "1-4-10",
                "1-3-4",
                "3-6-10",
                "1-6-10",
                "1-3-6",
                "1-3-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-10 / 4-6 / 6-10 / 3-4 / 3-10",
              "ticketKeys": [
                "4-10",
                "4-6",
                "6-10",
                "3-4",
                "3-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-4-6-10 BOX",
              "ticketKeys": [
                "4-6-10",
                "3-4-10",
                "2-4-10",
                "3-4-6",
                "2-4-6",
                "2-3-4",
                "3-6-10",
                "2-6-10",
                "2-3-10",
                "2-3-6"
              ],
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
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-10 / 4-6 / 6-10 / 3-4 / 3-10",
              "ticketKeys": [
                "4-10",
                "4-6",
                "6-10",
                "3-4",
                "3-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-4-6-10 BOX",
              "ticketKeys": [
                "4-6-10",
                "3-4-10",
                "2-4-10",
                "3-4-6",
                "2-4-6",
                "2-3-4",
                "3-6-10",
                "2-6-10",
                "2-3-10",
                "2-3-6"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 4-10 / 3-4 / 6-10 / 1-4",
              "ticketKeys": [
                "4-6",
                "4-10",
                "3-4",
                "6-10",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-6-10 BOX",
              "ticketKeys": [
                "4-6-10",
                "3-4-6",
                "1-4-6",
                "3-4-10",
                "1-4-10",
                "1-3-4",
                "3-6-10",
                "1-6-10",
                "1-3-6",
                "1-3-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-05",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 5,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "レッドレガリア",
          "probability": 0.12699261590996674
        },
        {
          "mark": "○",
          "horseNumber": 17,
          "horseName": "フキョウワオン",
          "probability": 0.08680166248781214
        },
        {
          "mark": "▲",
          "horseNumber": 12,
          "horseName": "カルダモン",
          "probability": 0.06496762301139933
        },
        {
          "mark": "△",
          "horseNumber": 11,
          "horseName": "ビップマリク",
          "probability": 0.062230134257145034
        },
        {
          "mark": "☆",
          "horseNumber": 16,
          "horseName": "プラネタリーアワー",
          "probability": 0.06053822636797787
        }
      ],
      "topPick": 7,
      "topPickFinish": 3,
      "topPickFinishText": "3着",
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
          "method": "期待順5点",
          "selection": "7-17 / 7-12 / 7-11 / 7-16 / 12-17",
          "ticketKeys": [
            "7-17",
            "7-12",
            "7-11",
            "7-16",
            "12-17"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "7-11-12-16-17 BOX",
          "ticketKeys": [
            "7-12-17",
            "7-11-17",
            "7-16-17",
            "7-11-12",
            "7-12-16",
            "7-11-16",
            "11-12-17",
            "12-16-17",
            "11-16-17",
            "11-12-16"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 4,
        "2": 8,
        "3": 1,
        "4": 2,
        "5": 14,
        "6": 11,
        "7": 3,
        "8": 18,
        "9": 17,
        "10": 13,
        "11": 10,
        "12": 16,
        "13": 9,
        "14": 7,
        "15": 15,
        "16": 6,
        "17": 5,
        "18": 12
      },
      "finishTextByHorseNumber": {
        "1": "4着",
        "2": "8着",
        "3": "1着",
        "4": "2着",
        "5": "14着",
        "6": "11着",
        "7": "3着",
        "8": "18着",
        "9": "17着",
        "10": "13着",
        "11": "10着",
        "12": "16着",
        "13": "9着",
        "14": "7着",
        "15": "15着",
        "16": "6着",
        "17": "5着",
        "18": "12着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "レッドレガリア",
              "score": 0.9500000000000001,
              "probability": 0.12699261590996674,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "フキョウワオン",
              "score": 0.7285319043506677,
              "probability": 0.08680166248781214,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "カルダモン",
              "score": 0.506120433640689,
              "probability": 0.06496762301139933,
              "finish": 16,
              "finishText": "16着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "レッドレガリア",
              "score": 0.74,
              "probability": 0.12699261590996674,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "フキョウワオン",
              "score": 0.578589557844614,
              "probability": 0.08680166248781214,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "プラネタリーアワー",
              "score": 0.5427977102707788,
              "probability": 0.06053822636797787,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "レッドレガリア",
              "score": 0.8999999999999999,
              "probability": 0.12699261590996674,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "フキョウワオン",
              "score": 0.6635277014620102,
              "probability": 0.08680166248781214,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "プラネタリーアワー",
              "score": 0.564256644985435,
              "probability": 0.06053822636797787,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "レッドレガリア",
              "score": 0.9833333333333334,
              "probability": 0.12699261590996674,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "フキョウワオン",
              "score": 0.7299856778532183,
              "probability": 0.08680166248781214,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "プラネタリーアワー",
              "score": 0.6075351551963747,
              "probability": 0.06053822636797787,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "レッドレガリア",
              "score": 0.6933333333333334,
              "probability": 0.12699261590996674,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "フキョウワオン",
              "score": 0.5345663273911927,
              "probability": 0.08680166248781214,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 16,
              "horseName": "プラネタリーアワー",
              "score": 0.5212577588196624,
              "probability": 0.06053822636797787,
              "finish": 6,
              "finishText": "6着"
            }
          ]
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
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-17 / 7-12 / 7-16 / 7-11 / 12-17",
              "ticketKeys": [
                "7-17",
                "7-12",
                "7-16",
                "7-11",
                "12-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "7-11-12-16-17 BOX",
              "ticketKeys": [
                "7-12-17",
                "7-16-17",
                "7-11-17",
                "7-12-16",
                "7-11-12",
                "7-11-16",
                "12-16-17",
                "11-12-17",
                "11-16-17",
                "11-12-16"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-17 / 7-16 / 7-12 / 7-11 / 16-17",
              "ticketKeys": [
                "7-17",
                "7-16",
                "7-12",
                "7-11",
                "16-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "7-11-12-16-17 BOX",
              "ticketKeys": [
                "7-16-17",
                "7-12-17",
                "7-11-17",
                "7-12-16",
                "7-11-16",
                "7-11-12",
                "12-16-17",
                "11-16-17",
                "11-12-17",
                "11-12-16"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-17 / 7-16 / 1-7 / 16-17 / 7-18",
              "ticketKeys": [
                "7-17",
                "7-16",
                "1-7",
                "16-17",
                "7-18"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-7-16-17-18 BOX",
              "ticketKeys": [
                "7-16-17",
                "1-7-17",
                "7-17-18",
                "1-7-16",
                "7-16-18",
                "1-7-18",
                "1-16-17",
                "16-17-18",
                "1-17-18",
                "1-16-18"
              ],
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
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-17 / 7-16 / 1-7 / 16-17 / 7-18",
              "ticketKeys": [
                "7-17",
                "7-16",
                "1-7",
                "16-17",
                "7-18"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-7-16-17-18 BOX",
              "ticketKeys": [
                "7-16-17",
                "1-7-17",
                "7-17-18",
                "1-7-16",
                "7-16-18",
                "1-7-18",
                "1-16-17",
                "16-17-18",
                "1-17-18",
                "1-16-18"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-17 / 7-16 / 7-12 / 7-11 / 16-17",
              "ticketKeys": [
                "7-17",
                "7-16",
                "7-12",
                "7-11",
                "16-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "7-11-12-16-17 BOX",
              "ticketKeys": [
                "7-16-17",
                "7-12-17",
                "7-11-17",
                "7-12-16",
                "7-11-16",
                "7-11-12",
                "12-16-17",
                "11-16-17",
                "11-12-17",
                "11-12-16"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-05",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 5,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "クイーンズホリデー",
          "probability": 0.16561728262141148
        },
        {
          "mark": "○",
          "horseNumber": 2,
          "horseName": "デールエルバハリ",
          "probability": 0.16351680873001317
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "シャンドラテ",
          "probability": 0.11809833338097654
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "アンティスマ",
          "probability": 0.11271679697836494
        },
        {
          "mark": "☆",
          "horseNumber": 6,
          "horseName": "シャフメラン",
          "probability": 0.10919547671040597
        }
      ],
      "topPick": 7,
      "topPickFinish": 6,
      "topPickFinishText": "6着",
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
          "method": "期待順5点",
          "selection": "2-7 / 7-8 / 2-8 / 3-7 / 2-3",
          "ticketKeys": [
            "2-7",
            "7-8",
            "2-8",
            "3-7",
            "2-3"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "2-3-6-7-8 BOX",
          "ticketKeys": [
            "2-7-8",
            "2-3-7",
            "2-6-7",
            "3-7-8",
            "6-7-8",
            "3-6-7",
            "2-3-8",
            "2-6-8",
            "2-3-6",
            "3-6-8"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 5,
        "2": 3,
        "3": 1,
        "4": 8,
        "5": 4,
        "6": 7,
        "7": 6,
        "8": 9,
        "9": 2
      },
      "finishTextByHorseNumber": {
        "1": "5着",
        "2": "3着",
        "3": "1着",
        "4": "8着",
        "5": "4着",
        "6": "7着",
        "7": "6着",
        "8": "9着",
        "9": "2着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "クイーンズホリデー",
              "score": 0.9388635515654971,
              "probability": 0.16561728262141148,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "デールエルバハリ",
              "score": 0.8932270226878639,
              "probability": 0.16351680873001317,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "アンティスマ",
              "score": 0.6190875000870594,
              "probability": 0.11271679697836494,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "クイーンズホリデー",
              "score": 0.7667274762428071,
              "probability": 0.16561728262141148,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "デールエルバハリ",
              "score": 0.7285248764781606,
              "probability": 0.16351680873001317,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "シャンドラテ",
              "score": 0.574049591940787,
              "probability": 0.11809833338097654,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "デールエルバハリ",
              "score": 0.8701410594112562,
              "probability": 0.16351680873001317,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "クイーンズホリデー",
              "score": 0.8376358887667834,
              "probability": 0.16561728262141148,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "シャフメラン",
              "score": 0.5628916383712755,
              "probability": 0.10919547671040597,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "デールエルバハリ",
              "score": 0.9478066103864873,
              "probability": 0.16351680873001317,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "クイーンズホリデー",
              "score": 0.8831052974228064,
              "probability": 0.16561728262141148,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "シャフメラン",
              "score": 0.6179498077402567,
              "probability": 0.10919547671040597,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "クイーンズホリデー",
              "score": 0.728969968323743,
              "probability": 0.16561728262141148,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "デールエルバハリ",
              "score": 0.686107460684552,
              "probability": 0.16351680873001317,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "シャンドラテ",
              "score": 0.5528666881588726,
              "probability": 0.11809833338097654,
              "finish": 9,
              "finishText": "9着"
            }
          ]
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
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-7 / 3-7 / 7-8 / 2-3 / 2-8",
              "ticketKeys": [
                "2-7",
                "3-7",
                "7-8",
                "2-3",
                "2-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-6-7-8 BOX",
              "ticketKeys": [
                "2-3-7",
                "2-7-8",
                "2-6-7",
                "3-7-8",
                "3-6-7",
                "6-7-8",
                "2-3-8",
                "2-3-6",
                "2-6-8",
                "3-6-8"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-7 / 7-8 / 5-7 / 2-8 / 2-5",
              "ticketKeys": [
                "2-7",
                "7-8",
                "5-7",
                "2-8",
                "2-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-6-7-8 BOX",
              "ticketKeys": [
                "2-7-8",
                "2-5-7",
                "2-6-7",
                "5-7-8",
                "6-7-8",
                "5-6-7",
                "2-5-8",
                "2-6-8",
                "2-5-6",
                "5-6-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-7 / 2-6 / 2-3 / 6-7 / 2-5",
              "ticketKeys": [
                "2-7",
                "2-6",
                "2-3",
                "6-7",
                "2-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-6-7 BOX",
              "ticketKeys": [
                "2-6-7",
                "2-3-7",
                "2-5-7",
                "2-3-6",
                "2-5-6",
                "2-3-5",
                "3-6-7",
                "5-6-7",
                "3-5-7",
                "3-5-6"
              ],
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
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-7 / 2-6 / 2-3 / 6-7 / 3-7",
              "ticketKeys": [
                "2-7",
                "2-6",
                "2-3",
                "6-7",
                "3-7"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-6-7 BOX",
              "ticketKeys": [
                "2-6-7",
                "2-3-7",
                "2-5-7",
                "2-3-6",
                "2-5-6",
                "2-3-5",
                "3-6-7",
                "5-6-7",
                "3-5-7",
                "3-5-6"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-7 / 7-8 / 5-7 / 2-8 / 2-5",
              "ticketKeys": [
                "2-7",
                "7-8",
                "5-7",
                "2-8",
                "2-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-6-7-8 BOX",
              "ticketKeys": [
                "2-7-8",
                "2-5-7",
                "2-6-7",
                "5-7-8",
                "6-7-8",
                "5-6-7",
                "2-5-8",
                "2-6-8",
                "2-5-6",
                "5-6-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-06",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 6,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "ステラデルークス",
          "probability": 0.1584542609627607
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "グランセレスト",
          "probability": 0.14163239414770956
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "タイセイジェイド",
          "probability": 0.1366791476835127
        },
        {
          "mark": "△",
          "horseNumber": 10,
          "horseName": "セイントホース",
          "probability": 0.13360779929713623
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "カフジクロミエ",
          "probability": 0.09506239050871516
        }
      ],
      "topPick": 7,
      "topPickFinish": 8,
      "topPickFinishText": "8着",
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
          "method": "期待順5点",
          "selection": "6-7 / 7-8 / 7-10 / 6-8 / 6-10",
          "ticketKeys": [
            "6-7",
            "7-8",
            "7-10",
            "6-8",
            "6-10"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "6-7-8-10-11 BOX",
          "ticketKeys": [
            "6-7-8",
            "6-7-10",
            "6-7-11",
            "7-8-10",
            "7-8-11",
            "7-10-11",
            "6-8-10",
            "6-8-11",
            "6-10-11",
            "8-10-11"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 2,
        "2": 3,
        "3": 4,
        "4": 9,
        "5": 7,
        "6": 10,
        "7": 8,
        "8": 5,
        "9": null,
        "10": 1,
        "11": 6
      },
      "finishTextByHorseNumber": {
        "1": "2着",
        "2": "3着",
        "3": "4着",
        "4": "9着",
        "5": "7着",
        "6": "10着",
        "7": "8着",
        "8": "5着",
        "9": "除外",
        "10": "1着",
        "11": "6着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 8,
          "topPickFinishText": "8着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ステラデルークス",
              "score": 0.9439520253574716,
              "probability": 0.1584542609627607,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "タイセイジェイド",
              "score": 0.7708295047598476,
              "probability": 0.1366791476835127,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "グランセレスト",
              "score": 0.746331385440314,
              "probability": 0.14163239414770956,
              "finish": 10,
              "finishText": "10着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 8,
          "topPickFinishText": "8着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ステラデルークス",
              "score": 0.7545151391420682,
              "probability": 0.1584542609627607,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "グランセレスト",
              "score": 0.6902292096192939,
              "probability": 0.14163239414770956,
              "finish": 10,
              "finishText": "10着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アスクガンバーレ",
              "score": 0.6238014986901784,
              "probability": 0.06673590484628415,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 8,
          "topPickFinishText": "8着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ステラデルークス",
              "score": 0.8661313420018407,
              "probability": 0.1584542609627607,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "タイセイジェイド",
              "score": 0.7198785638596488,
              "probability": 0.1366791476835127,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アスクガンバーレ",
              "score": 0.5949789340617183,
              "probability": 0.06673590484628415,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 8,
          "topPickFinishText": "8着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ステラデルークス",
              "score": 0.9289015615505773,
              "probability": 0.1584542609627607,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "タイセイジェイド",
              "score": 0.7919939878602704,
              "probability": 0.1366791476835127,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アスクガンバーレ",
              "score": 0.6202130167401408,
              "probability": 0.06673590484628415,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 8,
          "topPickFinishText": "8着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "ステラデルークス",
              "score": 0.7126868521894244,
              "probability": 0.1584542609627607,
              "finish": 8,
              "finishText": "8着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "グランセレスト",
              "score": 0.6673403990886783,
              "probability": 0.14163239414770956,
              "finish": 10,
              "finishText": "10着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "アスクガンバーレ",
              "score": 0.6207092700146949,
              "probability": 0.06673590484628415,
              "finish": 3,
              "finishText": "3着"
            }
          ]
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
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 6-7 / 7-10 / 6-8 / 8-10",
              "ticketKeys": [
                "7-8",
                "6-7",
                "7-10",
                "6-8",
                "8-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "6-7-8-10-11 BOX",
              "ticketKeys": [
                "6-7-8",
                "7-8-10",
                "7-8-11",
                "6-7-10",
                "6-7-11",
                "7-10-11",
                "6-8-10",
                "6-8-11",
                "8-10-11",
                "6-10-11"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-7 / 2-7 / 7-8 / 7-10 / 2-6",
              "ticketKeys": [
                "6-7",
                "2-7",
                "7-8",
                "7-10",
                "2-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-6-7-8-10 BOX",
              "ticketKeys": [
                "2-6-7",
                "6-7-8",
                "6-7-10",
                "2-7-8",
                "2-7-10",
                "7-8-10",
                "2-6-8",
                "2-6-10",
                "6-8-10",
                "2-8-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 2-7 / 2-8 / 6-7 / 4-7",
              "ticketKeys": [
                "7-8",
                "2-7",
                "2-8",
                "6-7",
                "4-7"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-6-7-8 BOX",
              "ticketKeys": [
                "2-7-8",
                "6-7-8",
                "4-7-8",
                "2-6-7",
                "2-4-7",
                "4-6-7",
                "2-6-8",
                "2-4-8",
                "4-6-8",
                "2-4-6"
              ],
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
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "7-8 / 2-7 / 2-8 / 4-7 / 5-7",
              "ticketKeys": [
                "7-8",
                "2-7",
                "2-8",
                "4-7",
                "5-7"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-7-8 BOX",
              "ticketKeys": [
                "2-7-8",
                "4-7-8",
                "5-7-8",
                "2-4-7",
                "2-5-7",
                "4-5-7",
                "2-4-8",
                "2-5-8",
                "4-5-8",
                "2-4-5"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-7 / 2-7 / 2-6 / 7-8 / 7-10",
              "ticketKeys": [
                "6-7",
                "2-7",
                "2-6",
                "7-8",
                "7-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-6-7-8-10 BOX",
              "ticketKeys": [
                "2-6-7",
                "6-7-8",
                "6-7-10",
                "2-7-8",
                "2-7-10",
                "7-8-10",
                "2-6-8",
                "2-6-10",
                "6-8-10",
                "2-8-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-06",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 6,
      "raceTitle": "苗場特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 15,
          "horseName": "ロードソルスティス",
          "probability": 0.14554946818368192
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "ヘリオトロープ",
          "probability": 0.09059425224882821
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "マッドゲイル",
          "probability": 0.0803939946631527
        },
        {
          "mark": "△",
          "horseNumber": 9,
          "horseName": "フクチャントウメイ",
          "probability": 0.0759852734273136
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "ナイトスラッガー",
          "probability": 0.07343730526177339
        }
      ],
      "topPick": 15,
      "topPickFinish": 14,
      "topPickFinishText": "14着",
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
          "method": "期待順5点",
          "selection": "6-15 / 4-15 / 9-15 / 5-15 / 4-6",
          "ticketKeys": [
            "6-15",
            "4-15",
            "9-15",
            "5-15",
            "4-6"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "4-5-6-9-15 BOX",
          "ticketKeys": [
            "4-6-15",
            "6-9-15",
            "5-6-15",
            "4-9-15",
            "4-5-15",
            "5-9-15",
            "4-6-9",
            "4-5-6",
            "5-6-9",
            "4-5-9"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 1,
        "2": 6,
        "3": 10,
        "4": 7,
        "5": 3,
        "6": 5,
        "7": 9,
        "8": 13,
        "9": 8,
        "10": 2,
        "11": 4,
        "12": 12,
        "13": 11,
        "14": 15,
        "15": 14
      },
      "finishTextByHorseNumber": {
        "1": "1着",
        "2": "6着",
        "3": "10着",
        "4": "7着",
        "5": "3着",
        "6": "5着",
        "7": "9着",
        "8": "13着",
        "9": "8着",
        "10": "2着",
        "11": "4着",
        "12": "12着",
        "13": "11着",
        "14": "15着",
        "15": "14着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "ロードソルスティス",
              "score": 0.9388915061118358,
              "probability": 0.14554946818368192,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ヘリオトロープ",
              "score": 0.7107054233943685,
              "probability": 0.09059425224882821,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "マッドゲイル",
              "score": 0.6206896810322821,
              "probability": 0.0803939946631527,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "ロードソルスティス",
              "score": 0.7666603853315941,
              "probability": 0.14554946818368192,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ヘリオトロープ",
              "score": 0.6881010374787632,
              "probability": 0.09059425224882821,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "マッドゲイル",
              "score": 0.6248574072979848,
              "probability": 0.0803939946631527,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "ロードソルスティス",
              "score": 0.8377924342262807,
              "probability": 0.14554946818368192,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ヘリオトロープ",
              "score": 0.7725895370030473,
              "probability": 0.09059425224882821,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "マッドゲイル",
              "score": 0.6836645514235091,
              "probability": 0.0803939946631527,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "ロードソルスティス",
              "score": 0.8833568883398557,
              "probability": 0.14554946818368192,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ヘリオトロープ",
              "score": 0.8323123637705631,
              "probability": 0.09059425224882821,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "マッドゲイル",
              "score": 0.7376334705665645,
              "probability": 0.0803939946631527,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 15,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 15,
              "horseName": "ロードソルスティス",
              "score": 0.7288805137754587,
              "probability": 0.14554946818368192,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ヘリオトロープ",
              "score": 0.6590890922206687,
              "probability": 0.09059425224882821,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "マッドゲイル",
              "score": 0.5974945302906087,
              "probability": 0.0803939946631527,
              "finish": 7,
              "finishText": "7着"
            }
          ]
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
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-15 / 4-15 / 9-15 / 4-6 / 6-9",
              "ticketKeys": [
                "6-15",
                "4-15",
                "9-15",
                "4-6",
                "6-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-9-13-15 BOX",
              "ticketKeys": [
                "4-6-15",
                "6-9-15",
                "6-13-15",
                "4-9-15",
                "4-13-15",
                "9-13-15",
                "4-6-9",
                "4-6-13",
                "6-9-13",
                "4-9-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-15 / 4-15 / 9-15 / 4-6 / 6-9",
              "ticketKeys": [
                "6-15",
                "4-15",
                "9-15",
                "4-6",
                "6-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-9-13-15 BOX",
              "ticketKeys": [
                "4-6-15",
                "6-9-15",
                "6-13-15",
                "4-9-15",
                "4-13-15",
                "9-13-15",
                "4-6-9",
                "4-6-13",
                "6-9-13",
                "4-9-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-15 / 4-15 / 4-6 / 9-15 / 6-9",
              "ticketKeys": [
                "6-15",
                "4-15",
                "4-6",
                "9-15",
                "6-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-9-13-15 BOX",
              "ticketKeys": [
                "4-6-15",
                "6-9-15",
                "6-13-15",
                "4-9-15",
                "4-13-15",
                "9-13-15",
                "4-6-9",
                "4-6-13",
                "6-9-13",
                "4-9-13"
              ],
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
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-15 / 4-15 / 4-6 / 9-15 / 6-9",
              "ticketKeys": [
                "6-15",
                "4-15",
                "4-6",
                "9-15",
                "6-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-9-13-15 BOX",
              "ticketKeys": [
                "4-6-15",
                "6-9-15",
                "6-13-15",
                "4-9-15",
                "4-13-15",
                "9-13-15",
                "4-6-9",
                "4-6-13",
                "6-9-13",
                "4-9-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "15",
              "ticketKeys": [
                "15"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-15 / 4-15 / 9-15 / 4-6 / 6-9",
              "ticketKeys": [
                "6-15",
                "4-15",
                "9-15",
                "4-6",
                "6-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-9-13-15 BOX",
              "ticketKeys": [
                "4-6-15",
                "6-9-15",
                "6-13-15",
                "4-9-15",
                "4-13-15",
                "9-13-15",
                "4-6-9",
                "4-6-13",
                "6-9-13",
                "4-9-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-06",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 6,
      "raceTitle": "中京スポニチ賞",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 6,
          "horseName": "トミーバローズ",
          "probability": 0.16954769767271086
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "アイニードユー",
          "probability": 0.1685003900931066
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "トライアンフパス",
          "probability": 0.14027350205545913
        },
        {
          "mark": "△",
          "horseNumber": 8,
          "horseName": "タガノアンファン",
          "probability": 0.11793057133093773
        },
        {
          "mark": "☆",
          "horseNumber": 1,
          "horseName": "スターウェーブ",
          "probability": 0.09906656880877694
        }
      ],
      "topPick": 6,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 140,
          "netYen": 40,
          "recoveryRate": 1.4,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "4-6 / 3-6 / 3-4 / 6-8 / 4-8",
          "ticketKeys": [
            "4-6",
            "3-6",
            "3-4",
            "6-8",
            "4-8"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 230,
          "netYen": -270,
          "recoveryRate": 0.46,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-3-4-6-8 BOX",
          "ticketKeys": [
            "3-4-6",
            "4-6-8",
            "1-4-6",
            "3-6-8",
            "1-3-6",
            "1-6-8",
            "3-4-8",
            "1-3-4",
            "1-4-8",
            "1-3-8"
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
      "investmentYen": 1600,
      "payoutYen": 370,
      "netYen": -1230,
      "recoveryRate": 0.23125,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 9,
        "3": 6,
        "4": 2,
        "5": 3,
        "6": 1,
        "7": 7,
        "8": 4,
        "9": 5
      },
      "finishTextByHorseNumber": {
        "1": "8着",
        "2": "9着",
        "3": "6着",
        "4": "2着",
        "5": "3着",
        "6": "1着",
        "7": "7着",
        "8": "4着",
        "9": "5着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "トミーバローズ",
              "score": 0.9366723207113011,
              "probability": 0.16954769767271086,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "アイニードユー",
              "score": 0.8964937435954242,
              "probability": 0.1685003900931066,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "トライアンフパス",
              "score": 0.6623743535559484,
              "probability": 0.14027350205545913,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "トミーバローズ",
              "score": 0.7719864302928774,
              "probability": 0.16954769767271086,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "アイニードユー",
              "score": 0.7292413042734202,
              "probability": 0.1685003900931066,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "トライアンフパス",
              "score": 0.6221031001924787,
              "probability": 0.14027350205545913,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アイニードユー",
              "score": 0.8718838944806272,
              "probability": 0.1685003900931066,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "トミーバローズ",
              "score": 0.825364995983286,
              "probability": 0.16954769767271086,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "タガノアンファン",
              "score": 0.6496824228225669,
              "probability": 0.11793057133093773,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 4,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 4,
              "horseName": "アイニードユー",
              "score": 0.9498711372613186,
              "probability": 0.1685003900931066,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "トミーバローズ",
              "score": 0.8633842197350432,
              "probability": 0.16954769767271086,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "タガノアンファン",
              "score": 0.7083921354934456,
              "probability": 0.11793057133093773,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 6,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 6,
              "horseName": "トミーバローズ",
              "score": 0.7359819070571699,
              "probability": 0.16954769767271086,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "アイニードユー",
              "score": 0.6865834496732659,
              "probability": 0.1685003900931066,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "トライアンフパス",
              "score": 0.6000335848865068,
              "probability": 0.14027350205545913,
              "finish": 6,
              "finishText": "6着"
            }
          ]
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
              "ticketKeys": [
                "6"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 140,
              "netYen": 40,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 3-6 / 6-8 / 3-4 / 4-8",
              "ticketKeys": [
                "4-6",
                "3-6",
                "6-8",
                "3-4",
                "4-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 230,
              "netYen": -270,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-6-8 BOX",
              "ticketKeys": [
                "3-4-6",
                "4-6-8",
                "1-4-6",
                "3-6-8",
                "1-3-6",
                "1-6-8",
                "3-4-8",
                "1-3-4",
                "1-4-8",
                "1-3-8"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "ticketKeys": [
                "6"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 140,
              "netYen": 40,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 3-6 / 3-4 / 6-8 / 5-6",
              "ticketKeys": [
                "4-6",
                "3-6",
                "3-4",
                "6-8",
                "5-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 230,
              "netYen": -270,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-5-6-8 BOX",
              "ticketKeys": [
                "3-4-6",
                "4-6-8",
                "4-5-6",
                "3-6-8",
                "3-5-6",
                "5-6-8",
                "3-4-8",
                "3-4-5",
                "4-5-8",
                "3-5-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 470,
              "netYen": -530,
              "hit": true
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 4-8 / 6-8 / 4-5 / 5-6",
              "ticketKeys": [
                "4-6",
                "4-8",
                "6-8",
                "4-5",
                "5-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 230,
              "netYen": -270,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-6-8 BOX",
              "ticketKeys": [
                "4-6-8",
                "4-5-6",
                "1-4-6",
                "4-5-8",
                "1-4-8",
                "1-4-5",
                "5-6-8",
                "1-6-8",
                "1-5-6",
                "1-5-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 470,
              "netYen": -530,
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
              "selection": "4",
              "ticketKeys": [
                "4"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 4-8 / 6-8 / 4-5 / 5-6",
              "ticketKeys": [
                "4-6",
                "4-8",
                "6-8",
                "4-5",
                "5-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 230,
              "netYen": -270,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-6-8 BOX",
              "ticketKeys": [
                "4-6-8",
                "4-5-6",
                "1-4-6",
                "4-5-8",
                "1-4-8",
                "1-4-5",
                "5-6-8",
                "1-6-8",
                "1-5-6",
                "1-5-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 470,
              "netYen": -530,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "6",
              "ticketKeys": [
                "6"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 140,
              "netYen": 40,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-6 / 3-6 / 5-6 / 3-4 / 6-8",
              "ticketKeys": [
                "4-6",
                "3-6",
                "5-6",
                "3-4",
                "6-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 230,
              "netYen": -270,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-5-6-8 BOX",
              "ticketKeys": [
                "3-4-6",
                "4-5-6",
                "4-6-8",
                "3-5-6",
                "3-6-8",
                "5-6-8",
                "3-4-5",
                "3-4-8",
                "4-5-8",
                "3-5-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 470,
              "netYen": -530,
              "hit": true
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-07",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 7,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "ゴールデンボブ",
          "probability": 0.10530954628352857
        },
        {
          "mark": "○",
          "horseNumber": 1,
          "horseName": "アールグレイ",
          "probability": 0.0980590112391116
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "デルマアサマ",
          "probability": 0.09154198267285105
        },
        {
          "mark": "△",
          "horseNumber": 2,
          "horseName": "フクチャンブラック",
          "probability": 0.08958215073956154
        },
        {
          "mark": "☆",
          "horseNumber": 11,
          "horseName": "デイズインザサン",
          "probability": 0.0834366257011151
        }
      ],
      "topPick": 5,
      "topPickFinish": 11,
      "topPickFinishText": "11着",
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
          "method": "期待順5点",
          "selection": "1-5 / 5-6 / 2-5 / 1-6 / 5-11",
          "ticketKeys": [
            "1-5",
            "5-6",
            "2-5",
            "1-6",
            "5-11"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-2-5-6-11 BOX",
          "ticketKeys": [
            "1-5-6",
            "1-2-5",
            "1-5-11",
            "2-5-6",
            "5-6-11",
            "2-5-11",
            "1-2-6",
            "1-6-11",
            "1-2-11",
            "2-6-11"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 8,
        "3": 10,
        "4": 1,
        "5": 11,
        "6": 12,
        "7": 5,
        "8": 9,
        "9": 2,
        "10": 7,
        "11": 4,
        "12": 3
      },
      "finishTextByHorseNumber": {
        "1": "6着",
        "2": "8着",
        "3": "10着",
        "4": "1着",
        "5": "11着",
        "6": "12着",
        "7": "5着",
        "8": "9着",
        "9": "2着",
        "10": "7着",
        "11": "4着",
        "12": "3着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 11,
          "topPickFinishText": "11着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ゴールデンボブ",
              "score": 0.941971402692424,
              "probability": 0.10530954628352857,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "アールグレイ",
              "score": 0.8656136616558646,
              "probability": 0.0980590112391116,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "デルマアサマ",
              "score": 0.6846655798254242,
              "probability": 0.09154198267285105,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 11,
          "topPickFinishText": "11着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ゴールデンボブ",
              "score": 0.7592686335381824,
              "probability": 0.10530954628352857,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "アールグレイ",
              "score": 0.7221371603888884,
              "probability": 0.0980590112391116,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "デルマアサマ",
              "score": 0.6406248725553599,
              "probability": 0.09154198267285105,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "アールグレイ",
              "score": 0.8552627426316114,
              "probability": 0.0980590112391116,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ゴールデンボブ",
              "score": 0.8550398550775742,
              "probability": 0.10530954628352857,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フォーティンブラス",
              "score": 0.6629756091800552,
              "probability": 0.08287632666892043,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "アールグレイ",
              "score": 0.9302352504417642,
              "probability": 0.0980590112391116,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ゴールデンボブ",
              "score": 0.9110759575651491,
              "probability": 0.10530954628352857,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フォーティンブラス",
              "score": 0.7129424051019633,
              "probability": 0.08287632666892043,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 11,
          "topPickFinishText": "11着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ゴールデンボブ",
              "score": 0.7190248447175767,
              "probability": 0.10530954628352857,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "アールグレイ",
              "score": 0.681728144812735,
              "probability": 0.0980590112391116,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "デルマアサマ",
              "score": 0.6183371995824698,
              "probability": 0.09154198267285105,
              "finish": 12,
              "finishText": "12着"
            }
          ]
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 5-6 / 1-6 / 2-5 / 5-10",
              "ticketKeys": [
                "1-5",
                "5-6",
                "1-6",
                "2-5",
                "5-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-5-6-10 BOX",
              "ticketKeys": [
                "1-5-6",
                "1-2-5",
                "1-5-10",
                "2-5-6",
                "5-6-10",
                "2-5-10",
                "1-2-6",
                "1-6-10",
                "1-2-10",
                "2-6-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 5-6 / 5-10 / 1-6 / 2-5",
              "ticketKeys": [
                "1-5",
                "5-6",
                "5-10",
                "1-6",
                "2-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-5-6-10 BOX",
              "ticketKeys": [
                "1-5-6",
                "1-5-10",
                "1-2-5",
                "5-6-10",
                "2-5-6",
                "2-5-10",
                "1-6-10",
                "1-2-6",
                "1-2-10",
                "2-6-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 1-10 / 5-10 / 1-9 / 5-9",
              "ticketKeys": [
                "1-5",
                "1-10",
                "5-10",
                "1-9",
                "5-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-5-7-9-10 BOX",
              "ticketKeys": [
                "1-5-10",
                "1-5-9",
                "1-5-7",
                "1-9-10",
                "1-7-10",
                "1-7-9",
                "5-9-10",
                "5-7-10",
                "5-7-9",
                "7-9-10"
              ],
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
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 1-10 / 5-10 / 1-7 / 1-9",
              "ticketKeys": [
                "1-5",
                "1-10",
                "5-10",
                "1-7",
                "1-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-5-7-9-10 BOX",
              "ticketKeys": [
                "1-5-10",
                "1-5-7",
                "1-5-9",
                "1-7-10",
                "1-9-10",
                "1-7-9",
                "5-7-10",
                "5-9-10",
                "5-7-9",
                "7-9-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 5-6 / 5-10 / 1-6 / 2-5",
              "ticketKeys": [
                "1-5",
                "5-6",
                "5-10",
                "1-6",
                "2-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-5-6-10 BOX",
              "ticketKeys": [
                "1-5-6",
                "1-5-10",
                "1-2-5",
                "5-6-10",
                "2-5-6",
                "2-5-10",
                "1-6-10",
                "1-2-6",
                "1-2-10",
                "2-6-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-07",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 7,
      "raceTitle": "アイビスサマーダッシュ",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 16,
          "horseName": "アメリカンステージ",
          "probability": 0.13962366008614782
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "カウンターセブン",
          "probability": 0.09977767302797079
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "カウスリップ",
          "probability": 0.0834997830104992
        },
        {
          "mark": "△",
          "horseNumber": 15,
          "horseName": "アタリダイキチ",
          "probability": 0.08024820210194598
        },
        {
          "mark": "☆",
          "horseNumber": 17,
          "horseName": "ビッグシーザー",
          "probability": 0.07005595325341518
        }
      ],
      "topPick": 16,
      "topPickFinish": 5,
      "topPickFinishText": "5着",
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
          "payoutYen": 0,
          "netYen": -100,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "9-16 / 4-16 / 15-16 / 16-17 / 4-9",
          "ticketKeys": [
            "9-16",
            "4-16",
            "15-16",
            "16-17",
            "4-9"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "4-9-15-16-17 BOX",
          "ticketKeys": [
            "4-9-16",
            "9-15-16",
            "9-16-17",
            "4-15-16",
            "4-16-17",
            "15-16-17",
            "4-9-15",
            "4-9-17",
            "9-15-17",
            "4-15-17"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 7,
        "2": 11,
        "3": 15,
        "4": 3,
        "5": 8,
        "6": 1,
        "7": 12,
        "8": 17,
        "9": 14,
        "10": 6,
        "11": 2,
        "12": 13,
        "13": 9,
        "14": 10,
        "15": 16,
        "16": 5,
        "17": 4
      },
      "finishTextByHorseNumber": {
        "1": "7着",
        "2": "11着",
        "3": "15着",
        "4": "3着",
        "5": "8着",
        "6": "1着",
        "7": "12着",
        "8": "17着",
        "9": "14着",
        "10": "6着",
        "11": "2着",
        "12": "13着",
        "13": "9着",
        "14": "10着",
        "15": "16着",
        "16": "5着",
        "17": "4着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "アメリカンステージ",
              "score": 0.9500000000000001,
              "probability": 0.13962366008614782,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "カウンターセブン",
              "score": 0.6570440290220987,
              "probability": 0.09977767302797079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カウスリップ",
              "score": 0.629962719338677,
              "probability": 0.0834997830104992,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "アメリカンステージ",
              "score": 0.74,
              "probability": 0.13962366008614782,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "カウンターセブン",
              "score": 0.6181783876816259,
              "probability": 0.09977767302797079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ピューロマジック",
              "score": 0.5463793664510295,
              "probability": 0.05085361482293683,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "アメリカンステージ",
              "score": 0.8999999999999999,
              "probability": 0.13962366008614782,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 17,
              "horseName": "ビッグシーザー",
              "score": 0.5677952415922336,
              "probability": 0.07005595325341518,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カウスリップ",
              "score": 0.5636532294219921,
              "probability": 0.0834997830104992,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "アメリカンステージ",
              "score": 0.9833333333333334,
              "probability": 0.13962366008614782,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "カウスリップ",
              "score": 0.6272224524615856,
              "probability": 0.0834997830104992,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 17,
              "horseName": "ビッグシーザー",
              "score": 0.6123451921690583,
              "probability": 0.07005595325341518,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 16,
          "topPickFinish": 5,
          "topPickFinishText": "5着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 16,
              "horseName": "アメリカンステージ",
              "score": 0.6933333333333334,
              "probability": 0.13962366008614782,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "カウンターセブン",
              "score": 0.5963309650287506,
              "probability": 0.09977767302797079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ピューロマジック",
              "score": 0.5396592339502503,
              "probability": 0.05085361482293683,
              "finish": 1,
              "finishText": "1着"
            }
          ]
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
              "ticketKeys": [
                "16"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-16 / 4-16 / 16-17 / 15-16 / 4-9",
              "ticketKeys": [
                "9-16",
                "4-16",
                "16-17",
                "15-16",
                "4-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-9-15-16-17 BOX",
              "ticketKeys": [
                "4-9-16",
                "9-16-17",
                "9-15-16",
                "4-16-17",
                "4-15-16",
                "15-16-17",
                "4-9-17",
                "4-9-15",
                "9-15-17",
                "4-15-17"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "ticketKeys": [
                "16"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-16 / 6-16 / 16-17 / 4-16 / 6-9",
              "ticketKeys": [
                "9-16",
                "6-16",
                "16-17",
                "4-16",
                "6-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-9-16-17 BOX",
              "ticketKeys": [
                "6-9-16",
                "9-16-17",
                "4-9-16",
                "6-16-17",
                "4-6-16",
                "4-16-17",
                "6-9-17",
                "4-6-9",
                "4-9-17",
                "4-6-17"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "ticketKeys": [
                "16"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "16-17 / 4-16 / 6-16 / 11-16 / 4-17",
              "ticketKeys": [
                "16-17",
                "4-16",
                "6-16",
                "11-16",
                "4-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-11-16-17 BOX",
              "ticketKeys": [
                "4-16-17",
                "6-16-17",
                "11-16-17",
                "4-6-16",
                "4-11-16",
                "6-11-16",
                "4-6-17",
                "4-11-17",
                "6-11-17",
                "4-6-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 92420,
              "netYen": 91420,
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
              "ticketKeys": [
                "16"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-16 / 16-17 / 6-16 / 11-16 / 4-17",
              "ticketKeys": [
                "4-16",
                "16-17",
                "6-16",
                "11-16",
                "4-17"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-6-11-16-17 BOX",
              "ticketKeys": [
                "4-16-17",
                "4-6-16",
                "4-11-16",
                "6-16-17",
                "11-16-17",
                "6-11-16",
                "4-6-17",
                "4-11-17",
                "4-6-11",
                "6-11-17"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 92420,
              "netYen": 91420,
              "hit": true
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "16",
              "ticketKeys": [
                "16"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-16 / 6-16 / 16-17 / 6-9 / 11-16",
              "ticketKeys": [
                "9-16",
                "6-16",
                "16-17",
                "6-9",
                "11-16"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "6-9-11-16-17 BOX",
              "ticketKeys": [
                "6-9-16",
                "9-16-17",
                "9-11-16",
                "6-16-17",
                "6-11-16",
                "11-16-17",
                "6-9-17",
                "6-9-11",
                "9-11-17",
                "6-11-17"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-07",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 7,
      "raceTitle": "名鉄杯",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "ソーニーイシュー",
          "probability": 0.15114783787698227
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "クールミラボー",
          "probability": 0.14354915352952882
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "タイトニット",
          "probability": 0.13751938651486698
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ハビレ",
          "probability": 0.11344035863017825
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "サイモンザナドゥ",
          "probability": 0.10932271696649284
        }
      ],
      "topPick": 5,
      "topPickFinish": 9,
      "topPickFinishText": "9着",
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
          "method": "期待順5点",
          "selection": "5-9 / 3-5 / 3-9 / 4-5 / 5-7",
          "ticketKeys": [
            "5-9",
            "3-5",
            "3-9",
            "4-5",
            "5-7"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "3-4-5-7-9 BOX",
          "ticketKeys": [
            "3-5-9",
            "4-5-9",
            "5-7-9",
            "3-4-5",
            "3-5-7",
            "4-5-7",
            "3-4-9",
            "3-7-9",
            "4-7-9",
            "3-4-7"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 5,
        "2": 8,
        "3": 6,
        "4": 4,
        "5": 9,
        "6": 7,
        "7": 3,
        "8": 2,
        "9": 1
      },
      "finishTextByHorseNumber": {
        "1": "5着",
        "2": "8着",
        "3": "6着",
        "4": "4着",
        "5": "9着",
        "6": "7着",
        "7": "3着",
        "8": "2着",
        "9": "1着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "クールミラボー",
              "score": 0.8620651568909314,
              "probability": 0.14354915352952882,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ソーニーイシュー",
              "score": 0.8500000000000001,
              "probability": 0.15114783787698227,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "タイトニット",
              "score": 0.8040304161157209,
              "probability": 0.13751938651486698,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ソーニーイシュー",
              "score": 0.77,
              "probability": 0.15114783787698227,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "タイトニット",
              "score": 0.7098740372719499,
              "probability": 0.13751938651486698,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "クールミラボー",
              "score": 0.7007108212902627,
              "probability": 0.14354915352952882,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "タイトニット",
              "score": 0.8229551324164771,
              "probability": 0.13751938651486698,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "クールミラボー",
              "score": 0.7723400273494445,
              "probability": 0.14354915352952882,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "ハビレ",
              "score": 0.5975068703013332,
              "probability": 0.11344035863017825,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "タイトニット",
              "score": 0.8917650899364767,
              "probability": 0.13751938651486698,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "クールミラボー",
              "score": 0.8247541531092833,
              "probability": 0.14354915352952882,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "ハビレ",
              "score": 0.663198927037208,
              "probability": 0.11344035863017825,
              "finish": 4,
              "finishText": "4着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "ソーニーイシュー",
              "score": 0.7466666666666667,
              "probability": 0.15114783787698227,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "タイトニット",
              "score": 0.6740876387027678,
              "probability": 0.13751938651486698,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "クールミラボー",
              "score": 0.6604390673747149,
              "probability": 0.14354915352952882,
              "finish": 1,
              "finishText": "1着"
            }
          ]
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
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 450,
              "netYen": 350,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-9 / 3-9 / 3-5 / 4-9 / 4-5",
              "ticketKeys": [
                "5-9",
                "3-9",
                "3-5",
                "4-9",
                "4-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-5-7-9 BOX",
              "ticketKeys": [
                "3-5-9",
                "4-5-9",
                "5-7-9",
                "3-4-9",
                "3-7-9",
                "4-7-9",
                "3-4-5",
                "3-5-7",
                "4-5-7",
                "3-4-7"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-5 / 5-9 / 3-9 / 2-5 / 2-3",
              "ticketKeys": [
                "3-5",
                "5-9",
                "3-9",
                "2-5",
                "2-3"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-5-9 BOX",
              "ticketKeys": [
                "3-5-9",
                "2-3-5",
                "1-3-5",
                "2-5-9",
                "1-5-9",
                "1-2-5",
                "2-3-9",
                "1-3-9",
                "1-2-3",
                "1-2-9"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-9 / 3-4 / 2-3 / 4-9 / 2-9",
              "ticketKeys": [
                "3-9",
                "3-4",
                "2-3",
                "4-9",
                "2-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-4-5-9 BOX",
              "ticketKeys": [
                "3-4-9",
                "2-3-9",
                "3-5-9",
                "2-3-4",
                "3-4-5",
                "2-3-5",
                "2-4-9",
                "4-5-9",
                "2-5-9",
                "2-4-5"
              ],
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
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-9 / 3-4 / 2-3 / 4-9 / 2-9",
              "ticketKeys": [
                "3-9",
                "3-4",
                "2-3",
                "4-9",
                "2-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-4-9 BOX",
              "ticketKeys": [
                "3-4-9",
                "2-3-9",
                "1-3-9",
                "2-3-4",
                "1-3-4",
                "1-2-3",
                "2-4-9",
                "1-4-9",
                "1-2-9",
                "1-2-4"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-5 / 5-9 / 3-9 / 2-5 / 1-5",
              "ticketKeys": [
                "3-5",
                "5-9",
                "3-9",
                "2-5",
                "1-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-3-5-9 BOX",
              "ticketKeys": [
                "3-5-9",
                "2-3-5",
                "1-3-5",
                "2-5-9",
                "1-5-9",
                "1-2-5",
                "2-3-9",
                "1-3-9",
                "1-2-3",
                "1-2-9"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-08",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 8,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 2,
          "horseName": "サトノワーグナー",
          "probability": 0.13352362502007967
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "ロードクラシコ",
          "probability": 0.11832818328917188
        },
        {
          "mark": "▲",
          "horseNumber": 13,
          "horseName": "ディーズメンフィス",
          "probability": 0.10854105805334587
        },
        {
          "mark": "△",
          "horseNumber": 11,
          "horseName": "ダブルチャレンジ",
          "probability": 0.07929112884317258
        },
        {
          "mark": "☆",
          "horseNumber": 14,
          "horseName": "ジーティーエスピ",
          "probability": 0.0682930017330147
        }
      ],
      "topPick": 2,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 460,
          "netYen": 360,
          "recoveryRate": 4.6,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "2-6 / 2-13 / 6-13 / 2-11 / 6-11",
          "ticketKeys": [
            "2-6",
            "2-13",
            "6-13",
            "2-11",
            "6-11"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "2-6-11-13-14 BOX",
          "ticketKeys": [
            "2-6-13",
            "2-6-11",
            "2-6-14",
            "2-11-13",
            "2-13-14",
            "2-11-14",
            "6-11-13",
            "6-13-14",
            "6-11-14",
            "11-13-14"
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
      "investmentYen": 1600,
      "payoutYen": 460,
      "netYen": -1140,
      "recoveryRate": 0.2875,
      "hit": true,
      "finishByHorseNumber": {
        "1": 2,
        "2": 1,
        "3": 9,
        "4": 13,
        "5": 7,
        "6": 12,
        "7": 10,
        "8": 11,
        "9": 14,
        "10": 8,
        "11": 5,
        "12": 4,
        "13": 6,
        "14": 3
      },
      "finishTextByHorseNumber": {
        "1": "2着",
        "2": "1着",
        "3": "9着",
        "4": "13着",
        "5": "7着",
        "6": "12着",
        "7": "10着",
        "8": "11着",
        "9": "14着",
        "10": "8着",
        "11": "5着",
        "12": "4着",
        "13": "6着",
        "14": "3着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノワーグナー",
              "score": 0.9500000000000001,
              "probability": 0.13352362502007967,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ロードクラシコ",
              "score": 0.8309804906616604,
              "probability": 0.11832818328917188,
              "finish": 12,
              "finishText": "12着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ディーズメンフィス",
              "score": 0.751796864099717,
              "probability": 0.10854105805334587,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノワーグナー",
              "score": 0.74,
              "probability": 0.13352362502007967,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ロードクラシコ",
              "score": 0.6704196573568904,
              "probability": 0.11832818328917188,
              "finish": 12,
              "finishText": "12着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ディーズメンフィス",
              "score": 0.6601012767463957,
              "probability": 0.10854105805334587,
              "finish": 6,
              "finishText": "6着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノワーグナー",
              "score": 0.8999999999999999,
              "probability": 0.13352362502007967,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "ディーズメンフィス",
              "score": 0.7577910904899022,
              "probability": 0.10854105805334587,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ロードクラシコ",
              "score": 0.7506961335043364,
              "probability": 0.11832818328917188,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノワーグナー",
              "score": 0.9833333333333334,
              "probability": 0.13352362502007967,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 13,
              "horseName": "ディーズメンフィス",
              "score": 0.82434431420481,
              "probability": 0.10854105805334587,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "ロードクラシコ",
              "score": 0.8090751510646775,
              "probability": 0.11832818328917188,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 2,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 2,
              "horseName": "サトノワーグナー",
              "score": 0.6933333333333334,
              "probability": 0.13352362502007967,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "ロードクラシコ",
              "score": 0.6285406585182383,
              "probability": 0.11832818328917188,
              "finish": 12,
              "finishText": "12着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ディーズメンフィス",
              "score": 0.6233229890697357,
              "probability": 0.10854105805334587,
              "finish": 6,
              "finishText": "6着"
            }
          ]
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
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 460,
              "netYen": 360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 2-13 / 6-13 / 2-11 / 6-11",
              "ticketKeys": [
                "2-6",
                "2-13",
                "6-13",
                "2-11",
                "6-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-6-10-11-13 BOX",
              "ticketKeys": [
                "2-6-13",
                "2-6-11",
                "2-6-10",
                "2-11-13",
                "2-10-13",
                "2-10-11",
                "6-11-13",
                "6-10-13",
                "6-10-11",
                "10-11-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 460,
              "netYen": 360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 2-13 / 6-13 / 1-2 / 1-6",
              "ticketKeys": [
                "2-6",
                "2-13",
                "6-13",
                "1-2",
                "1-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2240,
              "netYen": 1740,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-6-11-13 BOX",
              "ticketKeys": [
                "2-6-13",
                "1-2-6",
                "2-6-11",
                "1-2-13",
                "2-11-13",
                "1-2-11",
                "1-6-13",
                "6-11-13",
                "1-6-11",
                "1-11-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 460,
              "netYen": 360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-13 / 2-6 / 6-13 / 1-2 / 2-10",
              "ticketKeys": [
                "2-13",
                "2-6",
                "6-13",
                "1-2",
                "2-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2240,
              "netYen": 1740,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-6-10-13 BOX",
              "ticketKeys": [
                "2-6-13",
                "1-2-13",
                "2-10-13",
                "1-2-6",
                "2-6-10",
                "1-2-10",
                "1-6-13",
                "6-10-13",
                "1-10-13",
                "1-6-10"
              ],
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
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 460,
              "netYen": 360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-13 / 2-6 / 6-13 / 1-2 / 2-10",
              "ticketKeys": [
                "2-13",
                "2-6",
                "6-13",
                "1-2",
                "2-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2240,
              "netYen": 1740,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-6-10-13 BOX",
              "ticketKeys": [
                "2-6-13",
                "1-2-13",
                "2-10-13",
                "1-2-6",
                "2-6-10",
                "1-2-10",
                "1-6-13",
                "6-10-13",
                "1-10-13",
                "1-6-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "2",
              "ticketKeys": [
                "2"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 460,
              "netYen": 360,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-6 / 2-13 / 6-13 / 1-2 / 1-6",
              "ticketKeys": [
                "2-6",
                "2-13",
                "6-13",
                "1-2",
                "1-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2240,
              "netYen": 1740,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-6-11-13 BOX",
              "ticketKeys": [
                "2-6-13",
                "1-2-6",
                "2-6-11",
                "1-2-13",
                "2-11-13",
                "1-2-11",
                "1-6-13",
                "6-11-13",
                "1-6-11",
                "1-11-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-08",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 8,
      "raceTitle": "五頭連峰特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 14,
          "horseName": "ノーブルクラウド",
          "probability": 0.12024217019567379
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "ノーザンタイタン",
          "probability": 0.09895313148497575
        },
        {
          "mark": "▲",
          "horseNumber": 11,
          "horseName": "ルンベーラ",
          "probability": 0.09068198801230207
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ファストフォワード",
          "probability": 0.08835679059622843
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "トランスマーレ",
          "probability": 0.08078434323569135
        }
      ],
      "topPick": 14,
      "topPickFinish": 14,
      "topPickFinishText": "14着",
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "14",
          "ticketKeys": [
            "14"
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
          "method": "期待順5点",
          "selection": "12-14 / 11-14 / 4-14 / 5-14 / 11-12",
          "ticketKeys": [
            "12-14",
            "11-14",
            "4-14",
            "5-14",
            "11-12"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "4-5-11-12-14 BOX",
          "ticketKeys": [
            "11-12-14",
            "4-12-14",
            "5-12-14",
            "4-11-14",
            "5-11-14",
            "4-5-14",
            "4-11-12",
            "5-11-12",
            "4-5-12",
            "4-5-11"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 2,
        "2": 4,
        "3": 5,
        "4": 1,
        "5": 7,
        "6": 12,
        "7": 6,
        "8": 3,
        "9": 8,
        "10": 11,
        "11": 10,
        "12": 9,
        "13": 13,
        "14": 14
      },
      "finishTextByHorseNumber": {
        "1": "2着",
        "2": "4着",
        "3": "5着",
        "4": "1着",
        "5": "7着",
        "6": "12着",
        "7": "6着",
        "8": "3着",
        "9": "8着",
        "10": "11着",
        "11": "10着",
        "12": "9着",
        "13": "13着",
        "14": "14着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ノーブルクラウド",
              "score": 0.9427116678305678,
              "probability": 0.12024217019567379,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ノーザンタイタン",
              "score": 0.7999504626033064,
              "probability": 0.09895313148497575,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 11,
              "horseName": "ルンベーラ",
              "score": 0.6271243404805107,
              "probability": 0.09068198801230207,
              "finish": 10,
              "finishText": "10着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ノーブルクラウド",
              "score": 0.7574919972066373,
              "probability": 0.12024217019567379,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ノーザンタイタン",
              "score": 0.6410066092057297,
              "probability": 0.09895313148497575,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "キアラメンテ",
              "score": 0.6280347298072939,
              "probability": 0.055536539969152296,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ノーブルクラウド",
              "score": 0.8591853398511796,
              "probability": 0.12024217019567379,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ノーザンタイタン",
              "score": 0.7274479425006214,
              "probability": 0.09895313148497575,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 1,
              "horseName": "キアラメンテ",
              "score": 0.6060911657441465,
              "probability": 0.055536539969152296,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ノーブルクラウド",
              "score": 0.9177383438084433,
              "probability": 0.12024217019567379,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ノーザンタイタン",
              "score": 0.7904862127259799,
              "probability": 0.09895313148497575,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "リポサンテ",
              "score": 0.6345474953214519,
              "probability": 0.06792396832965726,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ノーブルクラウド",
              "score": 0.7166559962755165,
              "probability": 0.12024217019567379,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 1,
              "horseName": "キアラメンテ",
              "score": 0.6233550394628921,
              "probability": 0.055536539969152296,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 12,
              "horseName": "ノーザンタイタン",
              "score": 0.5979050555831081,
              "probability": 0.09895313148497575,
              "finish": 9,
              "finishText": "9着"
            }
          ]
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
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "12-14 / 11-14 / 4-14 / 11-12 / 5-14",
              "ticketKeys": [
                "12-14",
                "11-14",
                "4-14",
                "11-12",
                "5-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-11-12-14 BOX",
              "ticketKeys": [
                "11-12-14",
                "4-12-14",
                "5-12-14",
                "4-11-14",
                "5-11-14",
                "4-5-14",
                "4-11-12",
                "5-11-12",
                "4-5-12",
                "4-5-11"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "12-14 / 1-14 / 8-14 / 11-14 / 1-12",
              "ticketKeys": [
                "12-14",
                "1-14",
                "8-14",
                "11-14",
                "1-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-8-11-12-14 BOX",
              "ticketKeys": [
                "1-12-14",
                "8-12-14",
                "11-12-14",
                "1-8-14",
                "1-11-14",
                "8-11-14",
                "1-8-12",
                "1-11-12",
                "8-11-12",
                "1-8-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "12-14 / 1-14 / 8-14 / 1-12 / 8-12",
              "ticketKeys": [
                "12-14",
                "1-14",
                "8-14",
                "1-12",
                "8-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-7-8-12-14 BOX",
              "ticketKeys": [
                "1-12-14",
                "8-12-14",
                "7-12-14",
                "1-8-14",
                "1-7-14",
                "7-8-14",
                "1-8-12",
                "1-7-12",
                "7-8-12",
                "1-7-8"
              ],
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
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "12-14 / 8-14 / 1-14 / 8-12 / 1-12",
              "ticketKeys": [
                "12-14",
                "8-14",
                "1-14",
                "8-12",
                "1-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-7-8-12-14 BOX",
              "ticketKeys": [
                "8-12-14",
                "1-12-14",
                "7-12-14",
                "1-8-14",
                "7-8-14",
                "1-7-14",
                "1-8-12",
                "7-8-12",
                "1-7-12",
                "1-7-8"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-14 / 12-14 / 8-14 / 11-14 / 1-12",
              "ticketKeys": [
                "1-14",
                "12-14",
                "8-14",
                "11-14",
                "1-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-8-11-12-14 BOX",
              "ticketKeys": [
                "1-12-14",
                "1-8-14",
                "1-11-14",
                "8-12-14",
                "11-12-14",
                "8-11-14",
                "1-8-12",
                "1-11-12",
                "1-8-11",
                "8-11-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-08",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 8,
      "raceTitle": "浜松特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "ジャンシ",
          "probability": 0.1585732398691699
        },
        {
          "mark": "○",
          "horseNumber": 3,
          "horseName": "ルクスレイモンド",
          "probability": 0.15543163446905753
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "サンマルノヴェル",
          "probability": 0.11003672173290469
        },
        {
          "mark": "△",
          "horseNumber": 10,
          "horseName": "カツラノキサノキ",
          "probability": 0.10836900832256409
        },
        {
          "mark": "☆",
          "horseNumber": 7,
          "horseName": "シルフズミスチーフ",
          "probability": 0.08666582352243672
        }
      ],
      "topPick": 11,
      "topPickFinish": 4,
      "topPickFinishText": "4着",
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
          "method": "期待順5点",
          "selection": "3-11 / 5-11 / 10-11 / 3-5 / 3-10",
          "ticketKeys": [
            "3-11",
            "5-11",
            "10-11",
            "3-5",
            "3-10"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "3-5-7-10-11 BOX",
          "ticketKeys": [
            "3-5-11",
            "3-10-11",
            "3-7-11",
            "5-10-11",
            "5-7-11",
            "7-10-11",
            "3-5-10",
            "3-5-7",
            "3-7-10",
            "5-7-10"
          ],
          "points": 10,
          "unitStakeYen": 100,
          "investmentYen": 1000,
          "payoutYen": 1450,
          "netYen": 450,
          "recoveryRate": 1.45,
          "hit": true
        }
      ],
      "investmentYen": 1600,
      "payoutYen": 1450,
      "netYen": -150,
      "recoveryRate": 0.90625,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 5,
        "3": 3,
        "4": 11,
        "5": 1,
        "6": 6,
        "7": 2,
        "8": 9,
        "9": 7,
        "10": 10,
        "11": 4
      },
      "finishTextByHorseNumber": {
        "1": "8着",
        "2": "5着",
        "3": "3着",
        "4": "11着",
        "5": "1着",
        "6": "6着",
        "7": "2着",
        "8": "9着",
        "9": "7着",
        "10": "10着",
        "11": "4着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ジャンシ",
              "score": 0.9352228801659567,
              "probability": 0.1585732398691699,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ルクスレイモンド",
              "score": 0.8855769004589563,
              "probability": 0.15543163446905753,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "カツラノキサノキ",
              "score": 0.6215317030042349,
              "probability": 0.10836900832256409,
              "finish": 10,
              "finishText": "10着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ジャンシ",
              "score": 0.7754650876017042,
              "probability": 0.1585732398691699,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ルクスレイモンド",
              "score": 0.6948237078544454,
              "probability": 0.15543163446905753,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "シルフズミスチーフ",
              "score": 0.6496866702163125,
              "probability": 0.08666582352243672,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ルクスレイモンド",
              "score": 0.8304060284115914,
              "probability": 0.15543163446905753,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ジャンシ",
              "score": 0.8172481289293569,
              "probability": 0.1585732398691699,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "シルフズミスチーフ",
              "score": 0.6727248583231547,
              "probability": 0.08666582352243672,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 3,
          "topPickFinish": 3,
          "topPickFinishText": "3着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 3,
              "horseName": "ルクスレイモンド",
              "score": 0.9088111088734718,
              "probability": 0.15543163446905753,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ジャンシ",
              "score": 0.8503392548269428,
              "probability": 0.1585732398691699,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "シルフズミスチーフ",
              "score": 0.713498414452805,
              "probability": 0.08666582352243672,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "ジャンシ",
              "score": 0.7406201168022722,
              "probability": 0.1585732398691699,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ルクスレイモンド",
              "score": 0.6485630176800588,
              "probability": 0.15543163446905753,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 7,
              "horseName": "シルフズミスチーフ",
              "score": 0.6348808162776772,
              "probability": 0.08666582352243672,
              "finish": 2,
              "finishText": "2着"
            }
          ]
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
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-11 / 10-11 / 5-11 / 3-10 / 3-5",
              "ticketKeys": [
                "3-11",
                "10-11",
                "5-11",
                "3-10",
                "3-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-5-7-10-11 BOX",
              "ticketKeys": [
                "3-10-11",
                "3-5-11",
                "3-7-11",
                "5-10-11",
                "7-10-11",
                "5-7-11",
                "3-5-10",
                "3-7-10",
                "3-5-7",
                "5-7-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1450,
              "netYen": 450,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-11 / 7-11 / 3-7 / 5-11 / 3-5",
              "ticketKeys": [
                "3-11",
                "7-11",
                "3-7",
                "5-11",
                "3-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-7-11 BOX",
              "ticketKeys": [
                "3-7-11",
                "3-5-11",
                "2-3-11",
                "5-7-11",
                "2-7-11",
                "2-5-11",
                "3-5-7",
                "2-3-7",
                "2-3-5",
                "2-5-7"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1450,
              "netYen": 450,
              "hit": true
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "3",
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-11 / 3-7 / 7-11 / 3-10 / 10-11",
              "ticketKeys": [
                "3-11",
                "3-7",
                "7-11",
                "3-10",
                "10-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-7-10-11 BOX",
              "ticketKeys": [
                "3-7-11",
                "3-10-11",
                "2-3-11",
                "3-7-10",
                "2-3-7",
                "2-3-10",
                "7-10-11",
                "2-7-11",
                "2-10-11",
                "2-7-10"
              ],
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
              "ticketKeys": [
                "3"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-11 / 3-7 / 7-11 / 3-10 / 10-11",
              "ticketKeys": [
                "3-11",
                "3-7",
                "7-11",
                "3-10",
                "10-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-7-10-11 BOX",
              "ticketKeys": [
                "3-7-11",
                "3-10-11",
                "2-3-11",
                "3-7-10",
                "2-3-7",
                "2-3-10",
                "7-10-11",
                "2-7-11",
                "2-10-11",
                "2-7-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "3-11 / 7-11 / 3-7 / 5-11 / 2-11",
              "ticketKeys": [
                "3-11",
                "7-11",
                "3-7",
                "5-11",
                "2-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-7-11 BOX",
              "ticketKeys": [
                "3-7-11",
                "3-5-11",
                "2-3-11",
                "5-7-11",
                "2-7-11",
                "2-5-11",
                "3-5-7",
                "2-3-7",
                "2-3-5",
                "2-5-7"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 1450,
              "netYen": 450,
              "hit": true
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-09",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 9,
      "raceTitle": "3歳以上2勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "パールフロント",
          "probability": 0.14550617441787703
        },
        {
          "mark": "○",
          "horseNumber": 12,
          "horseName": "ビーマックス",
          "probability": 0.1278374926268736
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "アイアムイチバン",
          "probability": 0.10999638123680872
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "ララアヴリル",
          "probability": 0.09220724387219406
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "デアプリームス",
          "probability": 0.08939008269291544
        }
      ],
      "topPick": 5,
      "topPickFinish": 2,
      "topPickFinishText": "2着",
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
          "method": "期待順5点",
          "selection": "5-12 / 5-8 / 8-12 / 5-7 / 2-5",
          "ticketKeys": [
            "5-12",
            "5-8",
            "8-12",
            "5-7",
            "2-5"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 2860,
          "netYen": 2360,
          "recoveryRate": 5.72,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "2-5-7-8-12 BOX",
          "ticketKeys": [
            "5-8-12",
            "5-7-12",
            "2-5-12",
            "5-7-8",
            "2-5-8",
            "2-5-7",
            "7-8-12",
            "2-8-12",
            "2-7-12",
            "2-7-8"
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
      "investmentYen": 1600,
      "payoutYen": 2860,
      "netYen": 1260,
      "recoveryRate": 1.7875,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 5,
        "3": 12,
        "4": 7,
        "5": 2,
        "6": 11,
        "7": 9,
        "8": 1,
        "9": 10,
        "10": 3,
        "11": 6,
        "12": 4
      },
      "finishTextByHorseNumber": {
        "1": "8着",
        "2": "5着",
        "3": "12着",
        "4": "7着",
        "5": "2着",
        "6": "11着",
        "7": "9着",
        "8": "1着",
        "9": "10着",
        "10": "3着",
        "11": "6着",
        "12": "4着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "パールフロント",
              "score": 0.9500000000000001,
              "probability": 0.14550617441787703,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ビーマックス",
              "score": 0.8226662089679633,
              "probability": 0.1278374926268736,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "アイアムイチバン",
              "score": 0.6271091088737748,
              "probability": 0.10999638123680872,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "パールフロント",
              "score": 0.74,
              "probability": 0.14550617441787703,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ビーマックス",
              "score": 0.6769801562373297,
              "probability": 0.1278374926268736,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "アイアムイチバン",
              "score": 0.592828268180893,
              "probability": 0.10999638123680872,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "パールフロント",
              "score": 0.8999999999999999,
              "probability": 0.14550617441787703,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ビーマックス",
              "score": 0.7234214461539937,
              "probability": 0.1278374926268736,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デアプリームス",
              "score": 0.610712475092528,
              "probability": 0.08939008269291544,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "パールフロント",
              "score": 0.9833333333333334,
              "probability": 0.14550617441787703,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ビーマックス",
              "score": 0.7677319784117033,
              "probability": 0.1278374926268736,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デアプリームス",
              "score": 0.6599385770604892,
              "probability": 0.08939008269291544,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "パールフロント",
              "score": 0.6933333333333334,
              "probability": 0.14550617441787703,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ビーマックス",
              "score": 0.6383780285337292,
              "probability": 0.1278374926268736,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "アイアムイチバン",
              "score": 0.5713118872526536,
              "probability": 0.10999638123680872,
              "finish": 1,
              "finishText": "1着"
            }
          ]
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 5-8 / 2-5 / 8-12 / 5-7",
              "ticketKeys": [
                "5-12",
                "5-8",
                "2-5",
                "8-12",
                "5-7"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2860,
              "netYen": 2360,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-7-8-12 BOX",
              "ticketKeys": [
                "5-8-12",
                "2-5-12",
                "5-7-12",
                "2-5-8",
                "5-7-8",
                "2-5-7",
                "2-8-12",
                "7-8-12",
                "2-7-12",
                "2-7-8"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 5-8 / 2-5 / 8-12 / 2-12",
              "ticketKeys": [
                "5-12",
                "5-8",
                "2-5",
                "8-12",
                "2-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2860,
              "netYen": 2360,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-8-11-12 BOX",
              "ticketKeys": [
                "5-8-12",
                "2-5-12",
                "5-11-12",
                "2-5-8",
                "5-8-11",
                "2-5-11",
                "2-8-12",
                "8-11-12",
                "2-11-12",
                "2-8-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 2-5 / 5-11 / 2-12 / 3-5",
              "ticketKeys": [
                "5-12",
                "2-5",
                "5-11",
                "2-12",
                "3-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-11-12 BOX",
              "ticketKeys": [
                "2-5-12",
                "5-11-12",
                "3-5-12",
                "2-5-11",
                "2-3-5",
                "3-5-11",
                "2-11-12",
                "2-3-12",
                "3-11-12",
                "2-3-11"
              ],
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 2-5 / 5-11 / 3-5 / 2-12",
              "ticketKeys": [
                "5-12",
                "2-5",
                "5-11",
                "3-5",
                "2-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-3-5-11-12 BOX",
              "ticketKeys": [
                "2-5-12",
                "5-11-12",
                "3-5-12",
                "2-5-11",
                "2-3-5",
                "3-5-11",
                "2-11-12",
                "2-3-12",
                "3-11-12",
                "2-3-11"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-12 / 5-8 / 2-5 / 8-12 / 2-12",
              "ticketKeys": [
                "5-12",
                "5-8",
                "2-5",
                "8-12",
                "2-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 2860,
              "netYen": 2360,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-5-8-11-12 BOX",
              "ticketKeys": [
                "5-8-12",
                "2-5-12",
                "5-11-12",
                "2-5-8",
                "5-8-11",
                "2-5-11",
                "2-8-12",
                "8-11-12",
                "2-11-12",
                "2-8-11"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-09",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 9,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 14,
          "horseName": "ベルウッドピース",
          "probability": 0.13244826167279583
        },
        {
          "mark": "○",
          "horseNumber": 10,
          "horseName": "サトノフェンサー",
          "probability": 0.11909598220008874
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "イーグルロック",
          "probability": 0.09657133601134549
        },
        {
          "mark": "△",
          "horseNumber": 12,
          "horseName": "セントゴーデンス",
          "probability": 0.08598672877884161
        },
        {
          "mark": "☆",
          "horseNumber": 15,
          "horseName": "カシノスパーク",
          "probability": 0.08199728437646203
        }
      ],
      "topPick": 14,
      "topPickFinish": 15,
      "topPickFinishText": "15着",
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "14",
          "ticketKeys": [
            "14"
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
          "method": "期待順5点",
          "selection": "10-14 / 8-14 / 8-10 / 12-14 / 14-15",
          "ticketKeys": [
            "10-14",
            "8-14",
            "8-10",
            "12-14",
            "14-15"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "8-10-12-14-15 BOX",
          "ticketKeys": [
            "8-10-14",
            "10-12-14",
            "10-14-15",
            "8-12-14",
            "8-14-15",
            "12-14-15",
            "8-10-12",
            "8-10-15",
            "10-12-15",
            "8-12-15"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 7,
        "2": 3,
        "3": 9,
        "4": 10,
        "5": 4,
        "6": 1,
        "7": 6,
        "8": 14,
        "9": 11,
        "10": 13,
        "11": 12,
        "12": 5,
        "13": 2,
        "14": 15,
        "15": 8
      },
      "finishTextByHorseNumber": {
        "1": "7着",
        "2": "3着",
        "3": "9着",
        "4": "10着",
        "5": "4着",
        "6": "1着",
        "7": "6着",
        "8": "14着",
        "9": "11着",
        "10": "13着",
        "11": "12着",
        "12": "5着",
        "13": "2着",
        "14": "15着",
        "15": "8着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ベルウッドピース",
              "score": 0.944908160785584,
              "probability": 0.13244826167279583,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "サトノフェンサー",
              "score": 0.8407836590632424,
              "probability": 0.11909598220008874,
              "finish": 13,
              "finishText": "13着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "イーグルロック",
              "score": 0.6141624009578145,
              "probability": 0.09657133601134549,
              "finish": 14,
              "finishText": "14着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ベルウッドピース",
              "score": 0.7522204141145983,
              "probability": 0.13244826167279583,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "サトノフェンサー",
              "score": 0.6685235970952446,
              "probability": 0.11909598220008874,
              "finish": 13,
              "finishText": "13着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ウリズンベー",
              "score": 0.6327636312631083,
              "probability": 0.0671966465417604,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ベルウッドピース",
              "score": 0.8714857003992705,
              "probability": 0.13244826167279583,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "サトノフェンサー",
              "score": 0.7742354332119974,
              "probability": 0.11909598220008874,
              "finish": 13,
              "finishText": "13着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ウリズンベー",
              "score": 0.6185045320656594,
              "probability": 0.0671966465417604,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ベルウッドピース",
              "score": 0.9375067804035897,
              "probability": 0.13244826167279583,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "サトノフェンサー",
              "score": 0.8429617515228666,
              "probability": 0.11909598220008874,
              "finish": 13,
              "finishText": "13着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ウリズンベー",
              "score": 0.6482196810305468,
              "probability": 0.0671966465417604,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 14,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 14,
              "horseName": "ベルウッドピース",
              "score": 0.7096272188194644,
              "probability": 0.13244826167279583,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 2,
              "horseName": "ウリズンベー",
              "score": 0.6263106028727762,
              "probability": 0.0671966465417604,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "サトノフェンサー",
              "score": 0.6242491010388342,
              "probability": 0.11909598220008874,
              "finish": 13,
              "finishText": "13着"
            }
          ]
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
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-14 / 8-14 / 8-10 / 12-14 / 10-12",
              "ticketKeys": [
                "10-14",
                "8-14",
                "8-10",
                "12-14",
                "10-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-10-12-14-15 BOX",
              "ticketKeys": [
                "8-10-14",
                "10-12-14",
                "10-14-15",
                "8-12-14",
                "8-14-15",
                "12-14-15",
                "8-10-12",
                "8-10-15",
                "10-12-15",
                "8-12-15"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-14 / 2-14 / 8-14 / 2-10 / 8-10",
              "ticketKeys": [
                "10-14",
                "2-14",
                "8-14",
                "2-10",
                "8-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-8-10-12-14 BOX",
              "ticketKeys": [
                "2-10-14",
                "8-10-14",
                "10-12-14",
                "2-8-14",
                "2-12-14",
                "8-12-14",
                "2-8-10",
                "2-10-12",
                "8-10-12",
                "2-8-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-14 / 2-14 / 2-10 / 5-14 / 4-14",
              "ticketKeys": [
                "10-14",
                "2-14",
                "2-10",
                "5-14",
                "4-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-10-14 BOX",
              "ticketKeys": [
                "2-10-14",
                "5-10-14",
                "4-10-14",
                "2-5-14",
                "2-4-14",
                "4-5-14",
                "2-5-10",
                "2-4-10",
                "4-5-10",
                "2-4-5"
              ],
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
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-14 / 2-14 / 2-10 / 5-14 / 4-14",
              "ticketKeys": [
                "10-14",
                "2-14",
                "2-10",
                "5-14",
                "4-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-5-10-14 BOX",
              "ticketKeys": [
                "2-10-14",
                "5-10-14",
                "4-10-14",
                "2-5-14",
                "2-4-14",
                "4-5-14",
                "2-5-10",
                "2-4-10",
                "4-5-10",
                "2-4-5"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "14",
              "ticketKeys": [
                "14"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "2-14 / 10-14 / 8-14 / 2-10 / 2-8",
              "ticketKeys": [
                "2-14",
                "10-14",
                "8-14",
                "2-10",
                "2-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-8-10-12-14 BOX",
              "ticketKeys": [
                "2-10-14",
                "2-8-14",
                "2-12-14",
                "8-10-14",
                "10-12-14",
                "8-12-14",
                "2-8-10",
                "2-10-12",
                "2-8-12",
                "8-10-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-09",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 9,
      "raceTitle": "障害3歳以上未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 7,
          "horseName": "テーオーレガシー",
          "probability": 0.13495715428592162
        },
        {
          "mark": "○",
          "horseNumber": 5,
          "horseName": "オンクラウドナイン",
          "probability": 0.12998977904551703
        },
        {
          "mark": "▲",
          "horseNumber": 6,
          "horseName": "セイフウサツキ",
          "probability": 0.11888970697547686
        },
        {
          "mark": "△",
          "horseNumber": 4,
          "horseName": "ボールドハーテッド",
          "probability": 0.10593748415514963
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "メイショウヘール",
          "probability": 0.09650854872384368
        }
      ],
      "topPick": 7,
      "topPickFinish": 4,
      "topPickFinishText": "4着",
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
          "method": "期待順5点",
          "selection": "5-7 / 6-7 / 5-6 / 4-7 / 4-5",
          "ticketKeys": [
            "5-7",
            "6-7",
            "5-6",
            "4-7",
            "4-5"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "2-4-5-6-7 BOX",
          "ticketKeys": [
            "5-6-7",
            "4-5-7",
            "2-5-7",
            "4-6-7",
            "2-6-7",
            "2-4-7",
            "4-5-6",
            "2-5-6",
            "2-4-5",
            "2-4-6"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 5,
        "3": 8,
        "4": 1,
        "5": 9,
        "6": 3,
        "7": 4,
        "8": 2,
        "9": 7,
        "10": null
      },
      "finishTextByHorseNumber": {
        "1": "6着",
        "2": "5着",
        "3": "8着",
        "4": "1着",
        "5": "9着",
        "6": "3着",
        "7": "4着",
        "8": "2着",
        "9": "7着",
        "10": "中止"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "テーオーレガシー",
              "score": 0.9500000000000001,
              "probability": 0.13495715428592162,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "セイフウサツキ",
              "score": 0.7840536938946949,
              "probability": 0.11888970697547686,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "オンクラウドナイン",
              "score": 0.7812374824582263,
              "probability": 0.12998977904551703,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "テーオーレガシー",
              "score": 0.74,
              "probability": 0.13495715428592162,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "オンクラウドナイン",
              "score": 0.7175249842645793,
              "probability": 0.12998977904551703,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "セイフウサツキ",
              "score": 0.6527124515378007,
              "probability": 0.11888970697547686,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "テーオーレガシー",
              "score": 0.8999999999999999,
              "probability": 0.13495715428592162,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "セイフウサツキ",
              "score": 0.760086374307031,
              "probability": 0.11888970697547686,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴールデンステップ",
              "score": 0.565769895057096,
              "probability": 0.09491238106349678,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 7,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 7,
              "horseName": "テーオーレガシー",
              "score": 0.9833333333333334,
              "probability": 0.13495715428592162,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "セイフウサツキ",
              "score": 0.8309585084699337,
              "probability": 0.11888970697547686,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ゴールデンステップ",
              "score": 0.6160314883866461,
              "probability": 0.09491238106349678,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "オンクラウドナイン",
              "score": 0.6943833169985493,
              "probability": 0.12998977904551703,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 7,
              "horseName": "テーオーレガシー",
              "score": 0.6933333333333334,
              "probability": 0.13495715428592162,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 6,
              "horseName": "セイフウサツキ",
              "score": 0.6115283500818336,
              "probability": 0.11888970697547686,
              "finish": 3,
              "finishText": "3着"
            }
          ]
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
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-7 / 5-7 / 5-6 / 4-7 / 7-8",
              "ticketKeys": [
                "6-7",
                "5-7",
                "5-6",
                "4-7",
                "7-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-7-8 BOX",
              "ticketKeys": [
                "5-6-7",
                "4-6-7",
                "6-7-8",
                "4-5-7",
                "5-7-8",
                "4-7-8",
                "4-5-6",
                "5-6-8",
                "4-6-8",
                "4-5-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 590,
              "netYen": -410,
              "hit": true
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-7 / 6-7 / 5-6 / 4-7 / 4-5",
              "ticketKeys": [
                "5-7",
                "6-7",
                "5-6",
                "4-7",
                "4-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-7-8 BOX",
              "ticketKeys": [
                "5-6-7",
                "4-5-7",
                "5-7-8",
                "4-6-7",
                "6-7-8",
                "4-7-8",
                "4-5-6",
                "5-6-8",
                "4-5-8",
                "4-6-8"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 590,
              "netYen": -410,
              "hit": true
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-7 / 7-8 / 7-9 / 5-7 / 6-8",
              "ticketKeys": [
                "6-7",
                "7-8",
                "7-9",
                "5-7",
                "6-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "5-6-7-8-9 BOX",
              "ticketKeys": [
                "6-7-8",
                "6-7-9",
                "5-6-7",
                "7-8-9",
                "5-7-8",
                "5-7-9",
                "6-8-9",
                "5-6-8",
                "5-6-9",
                "5-8-9"
              ],
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
              "selection": "7",
              "ticketKeys": [
                "7"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "6-7 / 7-8 / 7-9 / 6-8 / 7-10",
              "ticketKeys": [
                "6-7",
                "7-8",
                "7-9",
                "6-8",
                "7-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "6-7-8-9-10 BOX",
              "ticketKeys": [
                "6-7-8",
                "6-7-9",
                "6-7-10",
                "7-8-9",
                "7-8-10",
                "7-9-10",
                "6-8-9",
                "6-8-10",
                "6-9-10",
                "8-9-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-7 / 5-6 / 6-7 / 4-5 / 4-7",
              "ticketKeys": [
                "5-7",
                "5-6",
                "6-7",
                "4-5",
                "4-7"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-7-9 BOX",
              "ticketKeys": [
                "5-6-7",
                "4-5-7",
                "5-7-9",
                "4-5-6",
                "5-6-9",
                "4-5-9",
                "4-6-7",
                "6-7-9",
                "4-7-9",
                "4-6-9"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-10",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 10,
      "raceTitle": "ポプラステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "シーズザスローン",
          "probability": 0.17431824220130834
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "チャーリー",
          "probability": 0.171703222456557
        },
        {
          "mark": "▲",
          "horseNumber": 10,
          "horseName": "フルールドール",
          "probability": 0.13830848727302503
        },
        {
          "mark": "△",
          "horseNumber": 8,
          "horseName": "ヘニーガイスト",
          "probability": 0.1338013964665406
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "アイウィル",
          "probability": 0.09194775830668815
        }
      ],
      "topPick": 5,
      "topPickFinish": 4,
      "topPickFinishText": "4着",
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
          "method": "期待順5点",
          "selection": "5-6 / 5-10 / 6-10 / 5-8 / 6-8",
          "ticketKeys": [
            "5-6",
            "5-10",
            "6-10",
            "5-8",
            "6-8"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "5-6-8-9-10 BOX",
          "ticketKeys": [
            "5-6-10",
            "5-6-8",
            "5-6-9",
            "5-8-10",
            "5-9-10",
            "5-8-9",
            "6-8-10",
            "6-9-10",
            "6-8-9",
            "8-9-10"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 2,
        "2": 8,
        "3": 10,
        "4": 6,
        "5": 4,
        "6": 5,
        "7": 7,
        "8": 1,
        "9": 3,
        "10": 9
      },
      "finishTextByHorseNumber": {
        "1": "2着",
        "2": "8着",
        "3": "10着",
        "4": "6着",
        "5": "4着",
        "6": "5着",
        "7": "7着",
        "8": "1着",
        "9": "3着",
        "10": "9着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "シーズザスローン",
              "score": 0.9500000000000001,
              "probability": 0.17431824220130834,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "チャーリー",
              "score": 0.8777048954835078,
              "probability": 0.171703222456557,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フルールドール",
              "score": 0.7361880396438963,
              "probability": 0.13830848727302503,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "シーズザスローン",
              "score": 0.74,
              "probability": 0.17431824220130834,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "チャーリー",
              "score": 0.7216281471997409,
              "probability": 0.171703222456557,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ヘニーガイスト",
              "score": 0.6272874377193313,
              "probability": 0.1338013964665406,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "シーズザスローン",
              "score": 0.8999999999999999,
              "probability": 0.17431824220130834,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "チャーリー",
              "score": 0.7747780094967706,
              "probability": 0.171703222456557,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フルールドール",
              "score": 0.7048659786985595,
              "probability": 0.13830848727302503,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "シーズザスローン",
              "score": 0.9833333333333334,
              "probability": 0.17431824220130834,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "チャーリー",
              "score": 0.8179616481419789,
              "probability": 0.171703222456557,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "フルールドール",
              "score": 0.7732954320116165,
              "probability": 0.13830848727302503,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "シーズザスローン",
              "score": 0.6933333333333334,
              "probability": 0.17431824220130834,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "チャーリー",
              "score": 0.6836750673299036,
              "probability": 0.171703222456557,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "ヘニーガイスト",
              "score": 0.5943666877547144,
              "probability": 0.1338013964665406,
              "finish": 1,
              "finishText": "1着"
            }
          ]
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-6 / 5-10 / 6-10 / 5-8 / 6-8",
              "ticketKeys": [
                "5-6",
                "5-10",
                "6-10",
                "5-8",
                "6-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "5-6-8-9-10 BOX",
              "ticketKeys": [
                "5-6-10",
                "5-6-8",
                "5-6-9",
                "5-8-10",
                "5-9-10",
                "5-8-9",
                "6-8-10",
                "6-9-10",
                "6-8-9",
                "8-9-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-6 / 5-8 / 6-8 / 5-10 / 6-10",
              "ticketKeys": [
                "5-6",
                "5-8",
                "6-8",
                "5-10",
                "6-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-8-10 BOX",
              "ticketKeys": [
                "5-6-8",
                "5-6-10",
                "4-5-6",
                "5-8-10",
                "4-5-8",
                "4-5-10",
                "6-8-10",
                "4-6-8",
                "4-6-10",
                "4-8-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-6 / 5-10 / 5-8 / 6-10 / 6-8",
              "ticketKeys": [
                "5-6",
                "5-10",
                "5-8",
                "6-10",
                "6-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-8-10 BOX",
              "ticketKeys": [
                "5-6-10",
                "5-6-8",
                "4-5-6",
                "5-8-10",
                "4-5-10",
                "4-5-8",
                "6-8-10",
                "4-6-10",
                "4-6-8",
                "4-8-10"
              ],
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-6 / 5-10 / 5-8 / 6-10 / 6-8",
              "ticketKeys": [
                "5-6",
                "5-10",
                "5-8",
                "6-10",
                "6-8"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-8-10 BOX",
              "ticketKeys": [
                "5-6-10",
                "5-6-8",
                "4-5-6",
                "5-8-10",
                "4-5-10",
                "4-5-8",
                "6-8-10",
                "4-6-10",
                "4-6-8",
                "4-8-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "5-6 / 5-8 / 6-8 / 5-10 / 6-10",
              "ticketKeys": [
                "5-6",
                "5-8",
                "6-8",
                "5-10",
                "6-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "4-5-6-8-10 BOX",
              "ticketKeys": [
                "5-6-8",
                "5-6-10",
                "4-5-6",
                "5-8-10",
                "4-5-8",
                "4-5-10",
                "6-8-10",
                "4-6-8",
                "4-6-10",
                "4-8-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-10",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 10,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 11,
          "horseName": "カンレイスター",
          "probability": 0.09358576019723504
        },
        {
          "mark": "○",
          "horseNumber": 14,
          "horseName": "ゴールドシャーク",
          "probability": 0.0901837376636165
        },
        {
          "mark": "▲",
          "horseNumber": 10,
          "horseName": "トモジャオーリー",
          "probability": 0.08902088079366385
        },
        {
          "mark": "△",
          "horseNumber": 7,
          "horseName": "フュルスティン",
          "probability": 0.08627916149557655
        },
        {
          "mark": "☆",
          "horseNumber": 13,
          "horseName": "ハヌル",
          "probability": 0.08250921040579924
        }
      ],
      "topPick": 11,
      "topPickFinish": 2,
      "topPickFinishText": "2着",
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
          "method": "期待順5点",
          "selection": "11-14 / 10-11 / 7-11 / 10-14 / 7-14",
          "ticketKeys": [
            "11-14",
            "10-11",
            "7-11",
            "10-14",
            "7-14"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "7-10-11-13-14 BOX",
          "ticketKeys": [
            "10-11-14",
            "7-11-14",
            "11-13-14",
            "7-10-11",
            "10-11-13",
            "7-11-13",
            "7-10-14",
            "10-13-14",
            "7-13-14",
            "7-10-13"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 11,
        "2": 8,
        "3": 3,
        "4": 1,
        "5": 6,
        "6": 13,
        "7": 9,
        "8": 7,
        "9": 12,
        "10": 5,
        "11": 2,
        "12": 10,
        "13": 4,
        "14": 14
      },
      "finishTextByHorseNumber": {
        "1": "11着",
        "2": "8着",
        "3": "3着",
        "4": "1着",
        "5": "6着",
        "6": "13着",
        "7": "9着",
        "8": "7着",
        "9": "12着",
        "10": "5着",
        "11": "2着",
        "12": "10着",
        "13": "4着",
        "14": "14着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "カンレイスター",
              "score": 0.9414572391918676,
              "probability": 0.09358576019723504,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トモジャオーリー",
              "score": 0.8204891650350885,
              "probability": 0.08902088079366385,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ゴールドシャーク",
              "score": 0.7817602237647528,
              "probability": 0.0901837376636165,
              "finish": 14,
              "finishText": "14着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "カンレイスター",
              "score": 0.7605026259395178,
              "probability": 0.09358576019723504,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "ゴールドシャーク",
              "score": 0.7179810471189062,
              "probability": 0.0901837376636165,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "トモジャオーリー",
              "score": 0.6701662625791746,
              "probability": 0.08902088079366385,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "カンレイスター",
              "score": 0.8521605394744585,
              "probability": 0.09358576019723504,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トモジャオーリー",
              "score": 0.7883487877091658,
              "probability": 0.08902088079366385,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "レゲンデ",
              "score": 0.6810165271532114,
              "probability": 0.06890946705436418,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "カンレイスター",
              "score": 0.9064484860601415,
              "probability": 0.09358576019723504,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "トモジャオーリー",
              "score": 0.8621334086370828,
              "probability": 0.08902088079366385,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "レゲンデ",
              "score": 0.722638722801442,
              "probability": 0.06890946705436418,
              "finish": 12,
              "finishText": "12着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 11,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 11,
              "horseName": "カンレイスター",
              "score": 0.7206701679193571,
              "probability": 0.09358576019723504,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "ゴールドシャーク",
              "score": 0.6948532971061123,
              "probability": 0.0901837376636165,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "レゲンデ",
              "score": 0.6411944112269552,
              "probability": 0.06890946705436418,
              "finish": 12,
              "finishText": "12着"
            }
          ]
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
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-11 / 11-14 / 10-14 / 7-11 / 11-13",
              "ticketKeys": [
                "10-11",
                "11-14",
                "10-14",
                "7-11",
                "11-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "7-10-11-13-14 BOX",
              "ticketKeys": [
                "10-11-14",
                "7-10-11",
                "10-11-13",
                "7-11-14",
                "11-13-14",
                "7-11-13",
                "7-10-14",
                "10-13-14",
                "7-10-13",
                "7-13-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-14 / 10-11 / 9-11 / 10-14 / 7-11",
              "ticketKeys": [
                "11-14",
                "10-11",
                "9-11",
                "10-14",
                "7-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "7-9-10-11-14 BOX",
              "ticketKeys": [
                "10-11-14",
                "9-11-14",
                "7-11-14",
                "9-10-11",
                "7-10-11",
                "7-9-11",
                "9-10-14",
                "7-10-14",
                "7-9-14",
                "7-9-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-11 / 9-11 / 9-10 / 2-11 / 4-11",
              "ticketKeys": [
                "10-11",
                "9-11",
                "9-10",
                "2-11",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 17960,
              "netYen": 17460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-9-10-11 BOX",
              "ticketKeys": [
                "9-10-11",
                "2-10-11",
                "4-10-11",
                "2-9-11",
                "4-9-11",
                "2-4-11",
                "2-9-10",
                "4-9-10",
                "2-4-10",
                "2-4-9"
              ],
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
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-11 / 9-11 / 9-10 / 4-11 / 2-11",
              "ticketKeys": [
                "10-11",
                "9-11",
                "9-10",
                "4-11",
                "2-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 17960,
              "netYen": 17460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-4-9-10-11 BOX",
              "ticketKeys": [
                "9-10-11",
                "4-10-11",
                "2-10-11",
                "4-9-11",
                "2-9-11",
                "2-4-11",
                "4-9-10",
                "2-9-10",
                "2-4-10",
                "2-4-9"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "11",
              "ticketKeys": [
                "11"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "11-14 / 9-11 / 10-11 / 9-14 / 10-14",
              "ticketKeys": [
                "11-14",
                "9-11",
                "10-11",
                "9-14",
                "10-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "7-9-10-11-14 BOX",
              "ticketKeys": [
                "9-11-14",
                "10-11-14",
                "7-11-14",
                "9-10-11",
                "7-9-11",
                "7-10-11",
                "9-10-14",
                "7-9-14",
                "7-10-14",
                "7-9-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-10",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 10,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 9,
          "horseName": "アメリカンイズム",
          "probability": 0.1345060427508649
        },
        {
          "mark": "○",
          "horseNumber": 11,
          "horseName": "ブームバップビート",
          "probability": 0.12828500769423162
        },
        {
          "mark": "▲",
          "horseNumber": 3,
          "horseName": "エクストラプッシュ",
          "probability": 0.1068391816999758
        },
        {
          "mark": "△",
          "horseNumber": 13,
          "horseName": "スナークシャラク",
          "probability": 0.09360382276597555
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "スターシップ",
          "probability": 0.08480424412223063
        }
      ],
      "topPick": 9,
      "topPickFinish": 9,
      "topPickFinishText": "9着",
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
          "method": "期待順5点",
          "selection": "9-11 / 3-9 / 3-11 / 9-13 / 11-13",
          "ticketKeys": [
            "9-11",
            "3-9",
            "3-11",
            "9-13",
            "11-13"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "3-4-9-11-13 BOX",
          "ticketKeys": [
            "3-9-11",
            "9-11-13",
            "4-9-11",
            "3-9-13",
            "3-4-9",
            "4-9-13",
            "3-11-13",
            "3-4-11",
            "4-11-13",
            "3-4-13"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 14,
        "2": 5,
        "3": 13,
        "4": 1,
        "5": 8,
        "6": 12,
        "7": 2,
        "8": 10,
        "9": 9,
        "10": 11,
        "11": 3,
        "12": 7,
        "13": 6,
        "14": 4
      },
      "finishTextByHorseNumber": {
        "1": "14着",
        "2": "5着",
        "3": "13着",
        "4": "1着",
        "5": "8着",
        "6": "12着",
        "7": "2着",
        "8": "10着",
        "9": "9着",
        "10": "11着",
        "11": "3着",
        "12": "7着",
        "13": "6着",
        "14": "4着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "アメリカンイズム",
              "score": 0.9500000000000001,
              "probability": 0.1345060427508649,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブームバップビート",
              "score": 0.872018595225535,
              "probability": 0.12828500769423162,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクストラプッシュ",
              "score": 0.7345767410131941,
              "probability": 0.1068391816999758,
              "finish": 13,
              "finishText": "13着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "アメリカンイズム",
              "score": 0.74,
              "probability": 0.1345060427508649,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブームバップビート",
              "score": 0.6839070458509532,
              "probability": 0.12828500769423162,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクストラプッシュ",
              "score": 0.582442909706818,
              "probability": 0.1068391816999758,
              "finish": 13,
              "finishText": "13着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "アメリカンイズム",
              "score": 0.8999999999999999,
              "probability": 0.1345060427508649,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブームバップビート",
              "score": 0.8178933048645427,
              "probability": 0.12828500769423162,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクストラプッシュ",
              "score": 0.6767836112466671,
              "probability": 0.1068391816999758,
              "finish": 13,
              "finishText": "13着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "アメリカンイズム",
              "score": 0.9833333333333334,
              "probability": 0.1345060427508649,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブームバップビート",
              "score": 0.8966277720262593,
              "probability": 0.12828500769423162,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクストラプッシュ",
              "score": 0.747174951340005,
              "probability": 0.1068391816999758,
              "finish": 13,
              "finishText": "13着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 9,
          "topPickFinishText": "9着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "アメリカンイズム",
              "score": 0.6933333333333334,
              "probability": 0.1345060427508649,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "○",
              "horseNumber": 11,
              "horseName": "ブームバップビート",
              "score": 0.6374676179159299,
              "probability": 0.12828500769423162,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "エクストラプッシュ",
              "score": 0.5376855947775869,
              "probability": 0.1068391816999758,
              "finish": 13,
              "finishText": "13着"
            }
          ]
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
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-11 / 3-9 / 3-11 / 9-13 / 4-9",
              "ticketKeys": [
                "9-11",
                "3-9",
                "3-11",
                "9-13",
                "4-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-9-11-13 BOX",
              "ticketKeys": [
                "3-9-11",
                "9-11-13",
                "4-9-11",
                "3-9-13",
                "3-4-9",
                "4-9-13",
                "3-11-13",
                "3-4-11",
                "4-11-13",
                "3-4-13"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-11 / 3-9 / 3-11 / 9-13 / 11-13",
              "ticketKeys": [
                "9-11",
                "3-9",
                "3-11",
                "9-13",
                "11-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-9-11-13 BOX",
              "ticketKeys": [
                "3-9-11",
                "9-11-13",
                "4-9-11",
                "3-9-13",
                "3-4-9",
                "4-9-13",
                "3-11-13",
                "3-4-11",
                "4-11-13",
                "3-4-13"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-11 / 3-9 / 3-11 / 4-9 / 4-11",
              "ticketKeys": [
                "9-11",
                "3-9",
                "3-11",
                "4-9",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-9-11-14 BOX",
              "ticketKeys": [
                "3-9-11",
                "4-9-11",
                "9-11-14",
                "3-4-9",
                "3-9-14",
                "4-9-14",
                "3-4-11",
                "3-11-14",
                "4-11-14",
                "3-4-14"
              ],
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
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-11 / 3-9 / 3-11 / 4-9 / 4-11",
              "ticketKeys": [
                "9-11",
                "3-9",
                "3-11",
                "4-9",
                "4-11"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-4-9-11-14 BOX",
              "ticketKeys": [
                "3-9-11",
                "4-9-11",
                "9-11-14",
                "3-4-9",
                "3-9-14",
                "4-9-14",
                "3-4-11",
                "3-11-14",
                "4-11-14",
                "3-4-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-11 / 3-9 / 9-13 / 3-11 / 11-13",
              "ticketKeys": [
                "9-11",
                "3-9",
                "9-13",
                "3-11",
                "11-13"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "3-9-11-13-14 BOX",
              "ticketKeys": [
                "3-9-11",
                "9-11-13",
                "9-11-14",
                "3-9-13",
                "3-9-14",
                "9-13-14",
                "3-11-13",
                "3-11-14",
                "11-13-14",
                "3-13-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-11",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 11,
      "raceTitle": "北海道新聞杯クイーンステークス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 10,
          "horseName": "フェスティバルヒル",
          "probability": 0.10753085481763851
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "エリカエクスプレス",
          "probability": 0.10424885062780356
        },
        {
          "mark": "▲",
          "horseNumber": 14,
          "horseName": "ヴーレヴー",
          "probability": 0.10392131593627316
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "フレミングフープ",
          "probability": 0.07453617160198095
        },
        {
          "mark": "☆",
          "horseNumber": 2,
          "horseName": "ケリフレッドアスク",
          "probability": 0.07308112131804782
        }
      ],
      "topPick": 10,
      "topPickFinish": 14,
      "topPickFinishText": "14着",
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
          "method": "期待順5点",
          "selection": "9-10 / 10-14 / 9-14 / 1-10 / 2-10",
          "ticketKeys": [
            "9-10",
            "10-14",
            "9-14",
            "1-10",
            "2-10"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-2-9-10-14 BOX",
          "ticketKeys": [
            "9-10-14",
            "1-9-10",
            "2-9-10",
            "1-10-14",
            "2-10-14",
            "1-2-10",
            "1-9-14",
            "2-9-14",
            "1-2-9",
            "1-2-14"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 12,
        "2": 8,
        "3": 5,
        "4": 7,
        "5": 9,
        "6": 11,
        "7": 1,
        "8": 13,
        "9": 4,
        "10": 14,
        "11": 2,
        "12": 10,
        "13": 6,
        "14": 3
      },
      "finishTextByHorseNumber": {
        "1": "12着",
        "2": "8着",
        "3": "5着",
        "4": "7着",
        "5": "9着",
        "6": "11着",
        "7": "1着",
        "8": "13着",
        "9": "4着",
        "10": "14着",
        "11": "2着",
        "12": "10着",
        "13": "6着",
        "14": "3着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "エリカエクスプレス",
              "score": 0.884518914524559,
              "probability": 0.10424885062780356,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "フェスティバルヒル",
              "score": 0.8500000000000001,
              "probability": 0.10753085481763851,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ヴーレヴー",
              "score": 0.8232045278668432,
              "probability": 0.10392131593627316,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "フェスティバルヒル",
              "score": 0.77,
              "probability": 0.10753085481763851,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "エリカエクスプレス",
              "score": 0.7264748712866689,
              "probability": 0.10424885062780356,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ヴーレヴー",
              "score": 0.6542375479998318,
              "probability": 0.10392131593627316,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "エリカエクスプレス",
              "score": 0.8654333703989312,
              "probability": 0.10424885062780356,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "ヴーレヴー",
              "score": 0.7564048352302253,
              "probability": 0.10392131593627316,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ケリフレッドアスク",
              "score": 0.6627812939237084,
              "probability": 0.07308112131804782,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 9,
          "topPickFinish": 4,
          "topPickFinishText": "4着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 9,
              "horseName": "エリカエクスプレス",
              "score": 0.9422524566282657,
              "probability": 0.10424885062780356,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "○",
              "horseNumber": 14,
              "horseName": "ヴーレヴー",
              "score": 0.8251122777048634,
              "probability": 0.10392131593627316,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "ケリフレッドアスク",
              "score": 0.7133730527668598,
              "probability": 0.07308112131804782,
              "finish": 8,
              "finishText": "8着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 10,
          "topPickFinish": 14,
          "topPickFinishText": "14着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "フェスティバルヒル",
              "score": 0.7466666666666667,
              "probability": 0.10753085481763851,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "エリカエクスプレス",
              "score": 0.6846882463740771,
              "probability": 0.10424885062780356,
              "finish": 4,
              "finishText": "4着"
            },
            {
              "mark": "▲",
              "horseNumber": 14,
              "horseName": "ヴーレヴー",
              "score": 0.6097642281494059,
              "probability": 0.10392131593627316,
              "finish": 3,
              "finishText": "3着"
            }
          ]
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
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-10 / 9-14 / 10-14 / 1-9 / 1-10",
              "ticketKeys": [
                "9-10",
                "9-14",
                "10-14",
                "1-9",
                "1-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-9-10-14 BOX",
              "ticketKeys": [
                "9-10-14",
                "1-9-10",
                "2-9-10",
                "1-9-14",
                "2-9-14",
                "1-2-9",
                "1-10-14",
                "2-10-14",
                "1-2-10",
                "1-2-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "ticketKeys": [
                "10"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-10 / 10-14 / 9-14 / 2-10 / 2-9",
              "ticketKeys": [
                "9-10",
                "10-14",
                "9-14",
                "2-10",
                "2-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-9-10-14 BOX",
              "ticketKeys": [
                "9-10-14",
                "2-9-10",
                "1-9-10",
                "2-10-14",
                "1-10-14",
                "1-2-10",
                "2-9-14",
                "1-9-14",
                "1-2-9",
                "1-2-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-14 / 2-9 / 1-9 / 2-14 / 9-10",
              "ticketKeys": [
                "9-14",
                "2-9",
                "1-9",
                "2-14",
                "9-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-9-10-14 BOX",
              "ticketKeys": [
                "2-9-14",
                "1-9-14",
                "9-10-14",
                "1-2-9",
                "2-9-10",
                "1-9-10",
                "1-2-14",
                "2-10-14",
                "1-10-14",
                "1-2-10"
              ],
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
              "selection": "9",
              "ticketKeys": [
                "9"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-14 / 2-9 / 1-9 / 2-14 / 1-14",
              "ticketKeys": [
                "9-14",
                "2-9",
                "1-9",
                "2-14",
                "1-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-9-10-14 BOX",
              "ticketKeys": [
                "2-9-14",
                "1-9-14",
                "9-10-14",
                "1-2-9",
                "2-9-10",
                "1-9-10",
                "1-2-14",
                "2-10-14",
                "1-10-14",
                "1-2-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "ticketKeys": [
                "10"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-10 / 10-14 / 2-10 / 9-14 / 2-9",
              "ticketKeys": [
                "9-10",
                "10-14",
                "2-10",
                "9-14",
                "2-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-9-10-14 BOX",
              "ticketKeys": [
                "9-10-14",
                "2-9-10",
                "1-9-10",
                "2-10-14",
                "1-10-14",
                "1-2-10",
                "2-9-14",
                "1-9-14",
                "1-2-9",
                "1-2-14"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-11",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 11,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 12,
          "horseName": "ヤマメホープ",
          "probability": 0.13713605870800155
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "ジーティーホクサイ",
          "probability": 0.10065889604937572
        },
        {
          "mark": "▲",
          "horseNumber": 8,
          "horseName": "マイネルオラクル",
          "probability": 0.09686689209343236
        },
        {
          "mark": "△",
          "horseNumber": 14,
          "horseName": "フォンドルレール",
          "probability": 0.08455585087664004
        },
        {
          "mark": "☆",
          "horseNumber": 5,
          "horseName": "コスモアミュレット",
          "probability": 0.0815456808410228
        }
      ],
      "topPick": 12,
      "topPickFinish": 2,
      "topPickFinishText": "2着",
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
          "method": "期待順5点",
          "selection": "9-12 / 8-12 / 12-14 / 5-12 / 8-9",
          "ticketKeys": [
            "9-12",
            "8-12",
            "12-14",
            "5-12",
            "8-9"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "5-8-9-12-14 BOX",
          "ticketKeys": [
            "8-9-12",
            "9-12-14",
            "5-9-12",
            "8-12-14",
            "5-8-12",
            "5-12-14",
            "8-9-14",
            "5-8-9",
            "5-9-14",
            "5-8-14"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 13,
        "3": 12,
        "4": 3,
        "5": 10,
        "6": 9,
        "7": 8,
        "8": 7,
        "9": 11,
        "10": null,
        "11": 4,
        "12": 2,
        "13": 1,
        "14": 5
      },
      "finishTextByHorseNumber": {
        "1": "6着",
        "2": "13着",
        "3": "12着",
        "4": "3着",
        "5": "10着",
        "6": "9着",
        "7": "8着",
        "8": "7着",
        "9": "11着",
        "10": "中止",
        "11": "4着",
        "12": "2着",
        "13": "1着",
        "14": "5着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヤマメホープ",
              "score": 0.9500000000000001,
              "probability": 0.13713605870800155,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ジーティーホクサイ",
              "score": 0.7479050264005679,
              "probability": 0.10065889604937572,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "▲",
              "horseNumber": 8,
              "horseName": "マイネルオラクル",
              "score": 0.6904711830588592,
              "probability": 0.09686689209343236,
              "finish": 7,
              "finishText": "7着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヤマメホープ",
              "score": 0.74,
              "probability": 0.13713605870800155,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "ジーティーホクサイ",
              "score": 0.6152393815240048,
              "probability": 0.10065889604937572,
              "finish": 11,
              "finishText": "11着"
            },
            {
              "mark": "▲",
              "horseNumber": 10,
              "horseName": "カムバックトゥミー",
              "score": 0.5968499945841339,
              "probability": 0.022218671601147058,
              "finish": null,
              "finishText": "中止"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 10,
          "topPickFinish": null,
          "topPickFinishText": "中止",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 10,
              "horseName": "カムバックトゥミー",
              "score": 0.5263374851063682,
              "probability": 0.022218671601147058,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "○",
              "horseNumber": 12,
              "horseName": "ヤマメホープ",
              "score": 0.52,
              "probability": 0.13713605870800155,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーホクサイ",
              "score": 0.39810685675906093,
              "probability": 0.10065889604937572,
              "finish": 11,
              "finishText": "11着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヤマメホープ",
              "score": 0.9833333333333334,
              "probability": 0.13713605870800155,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 8,
              "horseName": "マイネルオラクル",
              "score": 0.7182170240294253,
              "probability": 0.09686689209343236,
              "finish": 7,
              "finishText": "7着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーホクサイ",
              "score": 0.697531842092898,
              "probability": 0.10065889604937572,
              "finish": 11,
              "finishText": "11着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 12,
          "topPickFinish": 2,
          "topPickFinishText": "2着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 12,
              "horseName": "ヤマメホープ",
              "score": 0.6933333333333334,
              "probability": 0.13713605870800155,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "○",
              "horseNumber": 10,
              "horseName": "カムバックトゥミー",
              "score": 0.603864579948417,
              "probability": 0.022218671601147058,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "ジーティーホクサイ",
              "score": 0.5762553208014626,
              "probability": 0.10065889604937572,
              "finish": 11,
              "finishText": "11着"
            }
          ]
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
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-12 / 8-12 / 12-14 / 8-9 / 9-14",
              "ticketKeys": [
                "9-12",
                "8-12",
                "12-14",
                "8-9",
                "9-14"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "5-8-9-12-14 BOX",
              "ticketKeys": [
                "8-9-12",
                "9-12-14",
                "5-9-12",
                "8-12-14",
                "5-8-12",
                "5-12-14",
                "8-9-14",
                "5-8-9",
                "5-9-14",
                "5-8-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-12 / 10-12 / 8-12 / 6-12 / 9-10",
              "ticketKeys": [
                "9-12",
                "10-12",
                "8-12",
                "6-12",
                "9-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "6-8-9-10-12 BOX",
              "ticketKeys": [
                "9-10-12",
                "8-9-12",
                "6-9-12",
                "8-10-12",
                "6-10-12",
                "6-8-12",
                "8-9-10",
                "6-9-10",
                "6-8-9",
                "6-8-10"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "10",
              "ticketKeys": [
                "10"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-12 / 9-10 / 9-12 / 8-10 / 8-12",
              "ticketKeys": [
                "10-12",
                "9-10",
                "9-12",
                "8-10",
                "8-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "8-9-10-12-14 BOX",
              "ticketKeys": [
                "9-10-12",
                "8-10-12",
                "10-12-14",
                "8-9-10",
                "9-10-14",
                "8-10-14",
                "8-9-12",
                "9-12-14",
                "8-12-14",
                "8-9-14"
              ],
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
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "8-12 / 9-12 / 12-14 / 6-12 / 8-9",
              "ticketKeys": [
                "8-12",
                "9-12",
                "12-14",
                "6-12",
                "8-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "6-8-9-12-14 BOX",
              "ticketKeys": [
                "8-9-12",
                "8-12-14",
                "6-8-12",
                "9-12-14",
                "6-9-12",
                "6-12-14",
                "8-9-14",
                "6-8-9",
                "6-8-14",
                "6-9-14"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "12",
              "ticketKeys": [
                "12"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "10-12 / 9-12 / 8-12 / 6-12 / 9-10",
              "ticketKeys": [
                "10-12",
                "9-12",
                "8-12",
                "6-12",
                "9-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "6-8-9-10-12 BOX",
              "ticketKeys": [
                "9-10-12",
                "8-10-12",
                "6-10-12",
                "8-9-12",
                "6-9-12",
                "6-8-12",
                "8-9-10",
                "6-9-10",
                "6-8-10",
                "6-8-9"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-11",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 11,
      "raceTitle": "3歳以上1勝クラス",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "バリオス",
          "probability": 0.262483021590636
        },
        {
          "mark": "○",
          "horseNumber": 6,
          "horseName": "メイショウナルカミ",
          "probability": 0.17981262855202332
        },
        {
          "mark": "▲",
          "horseNumber": 5,
          "horseName": "ビップヴォルフ",
          "probability": 0.17289296259138287
        },
        {
          "mark": "△",
          "horseNumber": 3,
          "horseName": "ジュンプリメーロ",
          "probability": 0.16740387535843582
        },
        {
          "mark": "☆",
          "horseNumber": 4,
          "horseName": "レッドヴァリアート",
          "probability": 0.11081938605551818
        }
      ],
      "topPick": 1,
      "topPickFinish": 6,
      "topPickFinishText": "6着",
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
          "method": "期待順5点",
          "selection": "1-6 / 1-5 / 1-3 / 5-6 / 3-6",
          "ticketKeys": [
            "1-6",
            "1-5",
            "1-3",
            "5-6",
            "3-6"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-3-4-5-6 BOX",
          "ticketKeys": [
            "1-5-6",
            "1-3-6",
            "1-4-6",
            "1-3-5",
            "1-4-5",
            "1-3-4",
            "3-5-6",
            "4-5-6",
            "3-4-6",
            "3-4-5"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 6,
        "2": 2,
        "3": 5,
        "4": 4,
        "5": 3,
        "6": 1
      },
      "finishTextByHorseNumber": {
        "1": "6着",
        "2": "2着",
        "3": "5着",
        "4": "4着",
        "5": "3着",
        "6": "1着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "バリオス",
              "score": 0.9500000000000001,
              "probability": 0.262483021590636,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 6,
              "horseName": "メイショウナルカミ",
              "score": 0.7214112418313217,
              "probability": 0.17981262855202332,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ビップヴォルフ",
              "score": 0.6677497908444796,
              "probability": 0.17289296259138287,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "バリオス",
              "score": 0.74,
              "probability": 0.262483021590636,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ジュンプリメーロ",
              "score": 0.624487649006886,
              "probability": 0.16740387535843582,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ビップヴォルフ",
              "score": 0.6063317694889253,
              "probability": 0.17289296259138287,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "バリオス",
              "score": 0.8999999999999999,
              "probability": 0.262483021590636,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ビップヴォルフ",
              "score": 0.6796932327526224,
              "probability": 0.17289296259138287,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ジュンプリメーロ",
              "score": 0.6785156185518566,
              "probability": 0.16740387535843582,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "バリオス",
              "score": 0.9833333333333334,
              "probability": 0.262483021590636,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 5,
              "horseName": "ビップヴォルフ",
              "score": 0.7404596161989246,
              "probability": 0.17289296259138287,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 3,
              "horseName": "ジュンプリメーロ",
              "score": 0.7312558152733667,
              "probability": 0.16740387535843582,
              "finish": 5,
              "finishText": "5着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 1,
          "topPickFinish": 6,
          "topPickFinishText": "6着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "バリオス",
              "score": 0.6933333333333334,
              "probability": 0.262483021590636,
              "finish": 6,
              "finishText": "6着"
            },
            {
              "mark": "○",
              "horseNumber": 3,
              "horseName": "ジュンプリメーロ",
              "score": 0.5980533694230084,
              "probability": 0.16740387535843582,
              "finish": 5,
              "finishText": "5着"
            },
            {
              "mark": "▲",
              "horseNumber": 5,
              "horseName": "ビップヴォルフ",
              "score": 0.5717701844451871,
              "probability": 0.17289296259138287,
              "finish": 3,
              "finishText": "3着"
            }
          ]
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
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-6 / 1-5 / 1-3 / 5-6 / 3-6",
              "ticketKeys": [
                "1-6",
                "1-5",
                "1-3",
                "5-6",
                "3-6"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-5-6 BOX",
              "ticketKeys": [
                "1-5-6",
                "1-3-6",
                "1-4-6",
                "1-3-5",
                "1-4-5",
                "1-3-4",
                "3-5-6",
                "4-5-6",
                "3-4-6",
                "3-4-5"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-3 / 1-5 / 1-6 / 3-5 / 1-4",
              "ticketKeys": [
                "1-3",
                "1-5",
                "1-6",
                "3-5",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-5-6 BOX",
              "ticketKeys": [
                "1-3-5",
                "1-3-6",
                "1-3-4",
                "1-5-6",
                "1-4-5",
                "1-4-6",
                "3-5-6",
                "3-4-5",
                "3-4-6",
                "4-5-6"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 1-3 / 1-6 / 1-4 / 3-5",
              "ticketKeys": [
                "1-5",
                "1-3",
                "1-6",
                "1-4",
                "3-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-5-6 BOX",
              "ticketKeys": [
                "1-3-5",
                "1-5-6",
                "1-4-5",
                "1-3-6",
                "1-3-4",
                "1-4-6",
                "3-5-6",
                "3-4-5",
                "4-5-6",
                "3-4-6"
              ],
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
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-5 / 1-3 / 1-6 / 1-4 / 3-5",
              "ticketKeys": [
                "1-5",
                "1-3",
                "1-6",
                "1-4",
                "3-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-5-6 BOX",
              "ticketKeys": [
                "1-3-5",
                "1-5-6",
                "1-4-5",
                "1-3-6",
                "1-3-4",
                "1-4-6",
                "3-5-6",
                "3-4-5",
                "4-5-6",
                "3-4-6"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-3 / 1-5 / 1-6 / 3-5 / 1-4",
              "ticketKeys": [
                "1-3",
                "1-5",
                "1-6",
                "3-5",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-3-4-5-6 BOX",
              "ticketKeys": [
                "1-3-5",
                "1-3-6",
                "1-3-4",
                "1-5-6",
                "1-4-5",
                "1-4-6",
                "3-5-6",
                "3-4-5",
                "3-4-6",
                "4-5-6"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-01-12",
      "date": "2026-08-02",
      "meetingName": "1回札幌4日",
      "venueCode": "SAPPORO",
      "raceNo": 12,
      "raceTitle": "苫小牧特別",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 5,
          "horseName": "マテンロウサン",
          "probability": 0.13229282161017933
        },
        {
          "mark": "○",
          "horseNumber": 4,
          "horseName": "ホウオウヘッセン",
          "probability": 0.12278196569979079
        },
        {
          "mark": "▲",
          "horseNumber": 2,
          "horseName": "デンプシー",
          "probability": 0.10663260936999472
        },
        {
          "mark": "△",
          "horseNumber": 1,
          "horseName": "トウカイエルデ",
          "probability": 0.08176894800932612
        },
        {
          "mark": "☆",
          "horseNumber": 10,
          "horseName": "ベルビースタローン",
          "probability": 0.0796058270677743
        }
      ],
      "topPick": 5,
      "topPickFinish": 1,
      "topPickFinishText": "1着",
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
          "payoutYen": 540,
          "netYen": 440,
          "recoveryRate": 5.4,
          "hit": true
        },
        {
          "betType": "馬連",
          "method": "期待順5点",
          "selection": "4-5 / 2-5 / 2-4 / 1-5 / 5-10",
          "ticketKeys": [
            "4-5",
            "2-5",
            "2-4",
            "1-5",
            "5-10"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 960,
          "netYen": 460,
          "recoveryRate": 1.92,
          "hit": true
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-2-4-5-10 BOX",
          "ticketKeys": [
            "2-4-5",
            "1-4-5",
            "4-5-10",
            "1-2-5",
            "2-5-10",
            "1-5-10",
            "1-2-4",
            "2-4-10",
            "1-4-10",
            "1-2-10"
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
      "investmentYen": 1600,
      "payoutYen": 1500,
      "netYen": -100,
      "recoveryRate": 0.9375,
      "hit": true,
      "finishByHorseNumber": {
        "1": 8,
        "2": 2,
        "3": 12,
        "4": 14,
        "5": 1,
        "6": 13,
        "7": 11,
        "8": 10,
        "9": 9,
        "10": 6,
        "11": 3,
        "12": 4,
        "13": 7,
        "14": 5
      },
      "finishTextByHorseNumber": {
        "1": "8着",
        "2": "2着",
        "3": "12着",
        "4": "14着",
        "5": "1着",
        "6": "13着",
        "7": "11着",
        "8": "10着",
        "9": "9着",
        "10": "6着",
        "11": "3着",
        "12": "4着",
        "13": "7着",
        "14": "5着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "マテンロウサン",
              "score": 0.9500000000000001,
              "probability": 0.13229282161017933,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.8477800125221796,
              "probability": 0.12278196569979079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デンプシー",
              "score": 0.7442481170053487,
              "probability": 0.10663260936999472,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "マテンロウサン",
              "score": 0.74,
              "probability": 0.13229282161017933,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.6996752541214022,
              "probability": 0.12278196569979079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デンプシー",
              "score": 0.6197193734706904,
              "probability": 0.10663260936999472,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "マテンロウサン",
              "score": 0.8999999999999999,
              "probability": 0.13229282161017933,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.7437955333012112,
              "probability": 0.12278196569979079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デンプシー",
              "score": 0.7160224925799092,
              "probability": 0.10663260936999472,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "マテンロウサン",
              "score": 0.9833333333333334,
              "probability": 0.13229282161017933,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.7852968226950331,
              "probability": 0.12278196569979079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デンプシー",
              "score": 0.7847413888897711,
              "probability": 0.10663260936999472,
              "finish": 2,
              "finishText": "2着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 5,
          "topPickFinish": 1,
          "topPickFinishText": "1着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 5,
              "horseName": "マテンロウサン",
              "score": 0.6933333333333334,
              "probability": 0.13229282161017933,
              "finish": 1,
              "finishText": "1着"
            },
            {
              "mark": "○",
              "horseNumber": 4,
              "horseName": "ホウオウヘッセン",
              "score": 0.6619007047391777,
              "probability": 0.12278196569979079,
              "finish": 14,
              "finishText": "14着"
            },
            {
              "mark": "▲",
              "horseNumber": 2,
              "horseName": "デンプシー",
              "score": 0.5786215816686926,
              "probability": 0.10663260936999472,
              "finish": 2,
              "finishText": "2着"
            }
          ]
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 540,
              "netYen": 440,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 2-4 / 1-5 / 1-4",
              "ticketKeys": [
                "4-5",
                "2-5",
                "2-4",
                "1-5",
                "1-4"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 960,
              "netYen": 460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-4-5-10 BOX",
              "ticketKeys": [
                "2-4-5",
                "1-4-5",
                "4-5-10",
                "1-2-5",
                "2-5-10",
                "1-5-10",
                "1-2-4",
                "2-4-10",
                "1-4-10",
                "1-2-10"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 540,
              "netYen": 440,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 2-4 / 5-12 / 4-12",
              "ticketKeys": [
                "4-5",
                "2-5",
                "2-4",
                "5-12",
                "4-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 960,
              "netYen": 460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-4-5-12 BOX",
              "ticketKeys": [
                "2-4-5",
                "4-5-12",
                "1-4-5",
                "2-5-12",
                "1-2-5",
                "1-5-12",
                "2-4-12",
                "1-2-4",
                "1-4-12",
                "1-2-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 540,
              "netYen": 440,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 1-5 / 2-4 / 5-12",
              "ticketKeys": [
                "4-5",
                "2-5",
                "1-5",
                "2-4",
                "5-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 960,
              "netYen": 460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-4-5-12 BOX",
              "ticketKeys": [
                "2-4-5",
                "1-4-5",
                "4-5-12",
                "1-2-5",
                "2-5-12",
                "1-5-12",
                "1-2-4",
                "2-4-12",
                "1-4-12",
                "1-2-12"
              ],
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
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 540,
              "netYen": 440,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 1-5 / 2-4 / 5-12",
              "ticketKeys": [
                "4-5",
                "2-5",
                "1-5",
                "2-4",
                "5-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 960,
              "netYen": 460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-4-5-12 BOX",
              "ticketKeys": [
                "2-4-5",
                "1-4-5",
                "4-5-12",
                "1-2-5",
                "2-5-12",
                "1-5-12",
                "1-2-4",
                "2-4-12",
                "1-4-12",
                "1-2-12"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "5",
              "ticketKeys": [
                "5"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 540,
              "netYen": 440,
              "hit": true
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "4-5 / 2-5 / 5-12 / 2-4 / 4-12",
              "ticketKeys": [
                "4-5",
                "2-5",
                "5-12",
                "2-4",
                "4-12"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 960,
              "netYen": 460,
              "hit": true
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-2-4-5-12 BOX",
              "ticketKeys": [
                "2-4-5",
                "4-5-12",
                "1-4-5",
                "2-5-12",
                "1-2-5",
                "1-5-12",
                "2-4-12",
                "1-2-4",
                "1-4-12",
                "1-2-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-04-12",
      "date": "2026-08-02",
      "meetingName": "2回新潟4日",
      "venueCode": "NIIGATA",
      "raceNo": 12,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 18,
          "horseName": "ホウオウパーソンズ",
          "probability": 0.10036380327950459
        },
        {
          "mark": "○",
          "horseNumber": 9,
          "horseName": "モントーヤ",
          "probability": 0.0812070771272667
        },
        {
          "mark": "▲",
          "horseNumber": 15,
          "horseName": "ウインテラジーナ",
          "probability": 0.07886000931499842
        },
        {
          "mark": "△",
          "horseNumber": 11,
          "horseName": "ピコバレット",
          "probability": 0.07848788298722432
        },
        {
          "mark": "☆",
          "horseNumber": 16,
          "horseName": "ペルシアーノ",
          "probability": 0.07165526353333794
        }
      ],
      "topPick": 18,
      "topPickFinish": 15,
      "topPickFinishText": "15着",
      "tickets": [
        {
          "betType": "単勝",
          "method": "1点",
          "selection": "18",
          "ticketKeys": [
            "18"
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
          "method": "期待順5点",
          "selection": "9-18 / 15-18 / 11-18 / 16-18 / 9-15",
          "ticketKeys": [
            "9-18",
            "15-18",
            "11-18",
            "16-18",
            "9-15"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "9-11-15-16-18 BOX",
          "ticketKeys": [
            "9-15-18",
            "9-11-18",
            "9-16-18",
            "11-15-18",
            "15-16-18",
            "11-16-18",
            "9-11-15",
            "9-15-16",
            "9-11-16",
            "11-15-16"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": 11,
        "2": 7,
        "3": 6,
        "4": 5,
        "5": 13,
        "6": 4,
        "7": 17,
        "8": 12,
        "9": 9,
        "10": 10,
        "11": 8,
        "12": null,
        "13": 1,
        "14": 2,
        "15": 3,
        "16": 14,
        "17": 16,
        "18": 15
      },
      "finishTextByHorseNumber": {
        "1": "11着",
        "2": "7着",
        "3": "6着",
        "4": "5着",
        "5": "13着",
        "6": "4着",
        "7": "17着",
        "8": "12着",
        "9": "9着",
        "10": "10着",
        "11": "8着",
        "12": "除外",
        "13": "1着",
        "14": "2着",
        "15": "3着",
        "16": "14着",
        "17": "16着",
        "18": "15着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 18,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 18,
              "horseName": "ホウオウパーソンズ",
              "score": 0.9500000000000001,
              "probability": 0.10036380327950459,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "ウインテラジーナ",
              "score": 0.736413622308696,
              "probability": 0.07886000931499842,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 9,
              "horseName": "モントーヤ",
              "score": 0.7055973511621187,
              "probability": 0.0812070771272667,
              "finish": 9,
              "finishText": "9着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 18,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 18,
              "horseName": "ホウオウパーソンズ",
              "score": 0.74,
              "probability": 0.10036380327950459,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "モントーヤ",
              "score": 0.6580544633626474,
              "probability": 0.0812070771272667,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 15,
              "horseName": "ウインテラジーナ",
              "score": 0.6261928125895175,
              "probability": 0.07886000931499842,
              "finish": 3,
              "finishText": "3着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 18,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 18,
              "horseName": "ホウオウパーソンズ",
              "score": 0.8999999999999999,
              "probability": 0.10036380327950459,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "ウインテラジーナ",
              "score": 0.7205123103900617,
              "probability": 0.07886000931499842,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ノーブルクロンヌ",
              "score": 0.6383705324361945,
              "probability": 0.06622393907099362,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 18,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 18,
              "horseName": "ホウオウパーソンズ",
              "score": 0.9833333333333334,
              "probability": 0.10036380327950459,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 15,
              "horseName": "ウインテラジーナ",
              "score": 0.7878262484157175,
              "probability": 0.07886000931499842,
              "finish": 3,
              "finishText": "3着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ノーブルクロンヌ",
              "score": 0.681094579813691,
              "probability": 0.06622393907099362,
              "finish": 1,
              "finishText": "1着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 18,
          "topPickFinish": 15,
          "topPickFinishText": "15着",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 18,
              "horseName": "ホウオウパーソンズ",
              "score": 0.6933333333333334,
              "probability": 0.10036380327950459,
              "finish": 15,
              "finishText": "15着"
            },
            {
              "mark": "○",
              "horseNumber": 9,
              "horseName": "モントーヤ",
              "score": 0.635664951277877,
              "probability": 0.0812070771272667,
              "finish": 9,
              "finishText": "9着"
            },
            {
              "mark": "▲",
              "horseNumber": 13,
              "horseName": "ノーブルクロンヌ",
              "score": 0.5968506555430083,
              "probability": 0.06622393907099362,
              "finish": 1,
              "finishText": "1着"
            }
          ]
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
              "selection": "18",
              "ticketKeys": [
                "18"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "15-18 / 9-18 / 16-18 / 11-18 / 9-15",
              "ticketKeys": [
                "15-18",
                "9-18",
                "16-18",
                "11-18",
                "9-15"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "9-11-15-16-18 BOX",
              "ticketKeys": [
                "9-15-18",
                "15-16-18",
                "11-15-18",
                "9-16-18",
                "9-11-18",
                "11-16-18",
                "9-15-16",
                "9-11-15",
                "11-15-16",
                "9-11-16"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "18",
              "ticketKeys": [
                "18"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-18 / 15-18 / 13-18 / 11-18 / 9-15",
              "ticketKeys": [
                "9-18",
                "15-18",
                "13-18",
                "11-18",
                "9-15"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "9-11-13-15-18 BOX",
              "ticketKeys": [
                "9-15-18",
                "9-13-18",
                "9-11-18",
                "13-15-18",
                "11-15-18",
                "11-13-18",
                "9-13-15",
                "9-11-15",
                "9-11-13",
                "11-13-15"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "18",
              "ticketKeys": [
                "18"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "15-18 / 13-18 / 16-18 / 13-15 / 15-16",
              "ticketKeys": [
                "15-18",
                "13-18",
                "16-18",
                "13-15",
                "15-16"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-13-15-16-18 BOX",
              "ticketKeys": [
                "13-15-18",
                "15-16-18",
                "2-15-18",
                "13-16-18",
                "2-13-18",
                "2-16-18",
                "13-15-16",
                "2-13-15",
                "2-15-16",
                "2-13-16"
              ],
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
              "selection": "18",
              "ticketKeys": [
                "18"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "15-18 / 13-18 / 16-18 / 13-15 / 15-16",
              "ticketKeys": [
                "15-18",
                "13-18",
                "16-18",
                "13-15",
                "15-16"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "2-13-15-16-18 BOX",
              "ticketKeys": [
                "13-15-18",
                "15-16-18",
                "2-15-18",
                "13-16-18",
                "2-13-18",
                "2-16-18",
                "13-15-16",
                "2-13-15",
                "2-15-16",
                "2-13-16"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "18",
              "ticketKeys": [
                "18"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "9-18 / 13-18 / 15-18 / 9-13 / 11-18",
              "ticketKeys": [
                "9-18",
                "13-18",
                "15-18",
                "9-13",
                "11-18"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "9-11-13-15-18 BOX",
              "ticketKeys": [
                "9-13-18",
                "9-15-18",
                "9-11-18",
                "13-15-18",
                "11-13-18",
                "11-15-18",
                "9-13-15",
                "9-11-13",
                "9-11-15",
                "11-13-15"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    },
    {
      "raceId": "20260802-07-12",
      "date": "2026-08-02",
      "meetingName": "2回中京4日",
      "venueCode": "CHUKYO",
      "raceNo": 12,
      "raceTitle": "3歳未勝利",
      "predictionFound": true,
      "predictionContext": "as_of_replay",
      "sourceClassification": "as_of_replay",
      "eligibleForActualPerformance": false,
      "predictionGeneratedAt": "2026-08-02T23:31:24.891Z",
      "marks": [
        {
          "mark": "◎",
          "horseNumber": 1,
          "horseName": "ジュピターバローズ",
          "probability": 0.10844734386155765
        },
        {
          "mark": "○",
          "horseNumber": 18,
          "horseName": "モンシーク",
          "probability": 0.07766761183035574
        },
        {
          "mark": "▲",
          "horseNumber": 4,
          "horseName": "カフラー",
          "probability": 0.06918251892112981
        },
        {
          "mark": "△",
          "horseNumber": 5,
          "horseName": "ホウオウスカイハイ",
          "probability": 0.06070764765260553
        },
        {
          "mark": "☆",
          "horseNumber": 9,
          "horseName": "フィアレスウィル",
          "probability": 0.06050919507880892
        }
      ],
      "topPick": 1,
      "topPickFinish": null,
      "topPickFinishText": "中止",
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
          "method": "期待順5点",
          "selection": "1-18 / 1-4 / 1-5 / 1-9 / 4-18",
          "ticketKeys": [
            "1-18",
            "1-4",
            "1-5",
            "1-9",
            "4-18"
          ],
          "points": 5,
          "unitStakeYen": 100,
          "investmentYen": 500,
          "payoutYen": 0,
          "netYen": -500,
          "recoveryRate": 0,
          "hit": false
        },
        {
          "betType": "3連複",
          "method": "5頭BOX",
          "selection": "1-4-5-9-18 BOX",
          "ticketKeys": [
            "1-4-18",
            "1-5-18",
            "1-9-18",
            "1-4-5",
            "1-4-9",
            "1-5-9",
            "4-5-18",
            "4-9-18",
            "5-9-18",
            "4-5-9"
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
      "investmentYen": 1600,
      "payoutYen": 0,
      "netYen": -1600,
      "recoveryRate": 0,
      "hit": false,
      "finishByHorseNumber": {
        "1": null,
        "2": 7,
        "3": 10,
        "4": 17,
        "5": 14,
        "6": 5,
        "7": 15,
        "8": 8,
        "9": 11,
        "10": 6,
        "11": 4,
        "12": 3,
        "13": 13,
        "14": 1,
        "15": 16,
        "16": 9,
        "17": 12,
        "18": 2
      },
      "finishTextByHorseNumber": {
        "1": "中止",
        "2": "7着",
        "3": "10着",
        "4": "17着",
        "5": "14着",
        "6": "5着",
        "7": "15着",
        "8": "8着",
        "9": "11着",
        "10": "6着",
        "11": "4着",
        "12": "3着",
        "13": "13着",
        "14": "1着",
        "15": "16着",
        "16": "9着",
        "17": "12着",
        "18": "2着"
      },
      "agents": [
        {
          "agentId": "safety",
          "status": "available",
          "topPick": 1,
          "topPickFinish": null,
          "topPickFinishText": "中止",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ジュピターバローズ",
              "score": 0.9500000000000001,
              "probability": 0.10844734386155765,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "○",
              "horseNumber": 18,
              "horseName": "モンシーク",
              "score": 0.754135335291045,
              "probability": 0.07766761183035574,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カフラー",
              "score": 0.6591727517682444,
              "probability": 0.06918251892112981,
              "finish": 17,
              "finishText": "17着"
            }
          ]
        },
        {
          "agentId": "sniper",
          "status": "available",
          "topPick": 1,
          "topPickFinish": null,
          "topPickFinishText": "中止",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ジュピターバローズ",
              "score": 0.74,
              "probability": 0.10844734386155765,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "○",
              "horseNumber": 18,
              "horseName": "モンシーク",
              "score": 0.6488294945740569,
              "probability": 0.07766761183035574,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カフラー",
              "score": 0.5705115138467187,
              "probability": 0.06918251892112981,
              "finish": 17,
              "finishText": "17着"
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "topPick": 1,
          "topPickFinish": null,
          "topPickFinishText": "中止",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ジュピターバローズ",
              "score": 0.8999999999999999,
              "probability": 0.10844734386155765,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "○",
              "horseNumber": 18,
              "horseName": "モンシーク",
              "score": 0.748513860243865,
              "probability": 0.07766761183035574,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カフラー",
              "score": 0.6447512710076604,
              "probability": 0.06918251892112981,
              "finish": 17,
              "finishText": "17着"
            }
          ]
        },
        {
          "agentId": "analyst",
          "status": "available",
          "topPick": 1,
          "topPickFinish": null,
          "topPickFinishText": "中止",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ジュピターバローズ",
              "score": 0.9833333333333334,
              "probability": 0.10844734386155765,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "○",
              "horseNumber": 18,
              "horseName": "モンシーク",
              "score": 0.8161918255644105,
              "probability": 0.07766761183035574,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カフラー",
              "score": 0.7071401609556404,
              "probability": 0.06918251892112981,
              "finish": 17,
              "finishText": "17着"
            }
          ]
        },
        {
          "agentId": "contrarian",
          "status": "available",
          "topPick": 1,
          "topPickFinish": null,
          "topPickFinishText": "中止",
          "marks": [
            {
              "mark": "◎",
              "horseNumber": 1,
              "horseName": "ジュピターバローズ",
              "score": 0.6933333333333334,
              "probability": 0.10844734386155765,
              "finish": null,
              "finishText": "中止"
            },
            {
              "mark": "○",
              "horseNumber": 18,
              "horseName": "モンシーク",
              "score": 0.6104869564441825,
              "probability": 0.07766761183035574,
              "finish": 2,
              "finishText": "2着"
            },
            {
              "mark": "▲",
              "horseNumber": 4,
              "horseName": "カフラー",
              "score": 0.5327923761893809,
              "probability": 0.06918251892112981,
              "finish": 17,
              "finishText": "17着"
            }
          ]
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
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-18 / 1-4 / 4-18 / 1-5 / 1-9",
              "ticketKeys": [
                "1-18",
                "1-4",
                "4-18",
                "1-5",
                "1-9"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-9-18 BOX",
              "ticketKeys": [
                "1-4-18",
                "1-5-18",
                "1-9-18",
                "1-4-5",
                "1-4-9",
                "1-5-9",
                "4-5-18",
                "4-9-18",
                "5-9-18",
                "4-5-9"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-18 / 1-4 / 4-18 / 1-12 / 1-5",
              "ticketKeys": [
                "1-18",
                "1-4",
                "4-18",
                "1-12",
                "1-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-12-18 BOX",
              "ticketKeys": [
                "1-4-18",
                "1-12-18",
                "1-5-18",
                "1-4-12",
                "1-4-5",
                "1-5-12",
                "4-12-18",
                "4-5-18",
                "5-12-18",
                "4-5-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        },
        {
          "agentId": "pace",
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-18 / 1-4 / 4-18 / 1-12 / 1-10",
              "ticketKeys": [
                "1-18",
                "1-4",
                "4-18",
                "1-12",
                "1-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-10-12-18 BOX",
              "ticketKeys": [
                "1-4-18",
                "1-12-18",
                "1-10-18",
                "1-4-12",
                "1-4-10",
                "1-10-12",
                "4-12-18",
                "4-10-18",
                "10-12-18",
                "4-10-12"
              ],
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
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-18 / 1-4 / 4-18 / 1-12 / 1-10",
              "ticketKeys": [
                "1-18",
                "1-4",
                "4-18",
                "1-12",
                "1-10"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-10-12-18 BOX",
              "ticketKeys": [
                "1-4-18",
                "1-12-18",
                "1-10-18",
                "1-4-12",
                "1-4-10",
                "1-10-12",
                "4-12-18",
                "4-10-18",
                "10-12-18",
                "4-10-12"
              ],
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
          "status": "available",
          "tickets": [
            {
              "betType": "単勝",
              "method": "1点",
              "selection": "1",
              "ticketKeys": [
                "1"
              ],
              "points": 1,
              "investmentYen": 100,
              "payoutYen": 0,
              "netYen": -100,
              "hit": false
            },
            {
              "betType": "馬連",
              "method": "期待順5点",
              "selection": "1-18 / 1-4 / 4-18 / 1-12 / 1-5",
              "ticketKeys": [
                "1-18",
                "1-4",
                "4-18",
                "1-12",
                "1-5"
              ],
              "points": 5,
              "investmentYen": 500,
              "payoutYen": 0,
              "netYen": -500,
              "hit": false
            },
            {
              "betType": "3連複",
              "method": "5頭BOX",
              "selection": "1-4-5-12-18 BOX",
              "ticketKeys": [
                "1-4-18",
                "1-12-18",
                "1-5-18",
                "1-4-12",
                "1-4-5",
                "1-5-12",
                "4-12-18",
                "4-5-18",
                "5-12-18",
                "4-5-12"
              ],
              "points": 10,
              "investmentYen": 1000,
              "payoutYen": 0,
              "netYen": -1000,
              "hit": false
            }
          ]
        }
      ]
    }
  ]
};
