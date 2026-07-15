window.KEIBA_MODEL_FEATURE_COVERAGE = {
  "version": "feature-registry-v1",
  "generatedAt": "2026-07-15T01:40:43.034Z",
  "groups": [
    {
      "id": "race_context",
      "label": "レース条件",
      "category": "race",
      "availableAt": "entry",
      "requirements": [
        "races.venue_code",
        "races.surface",
        "races.distance_m",
        "races.direction",
        "races.race_class",
        "races.start_time"
      ],
      "examples": [
        "競馬場",
        "芝・ダート・障害",
        "距離",
        "回り",
        "クラス",
        "頭数",
        "季節",
        "発走時間"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "races.venue_code",
          "available": true
        },
        {
          "requirement": "races.surface",
          "available": true
        },
        {
          "requirement": "races.distance_m",
          "available": true
        },
        {
          "requirement": "races.direction",
          "available": true
        },
        {
          "requirement": "races.race_class",
          "available": true
        },
        {
          "requirement": "races.start_time",
          "available": true
        }
      ],
      "availableRequirements": 6,
      "totalRequirements": 6,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "weather_going",
      "label": "天候・馬場状態",
      "category": "condition",
      "availableAt": "race_day",
      "requirements": [
        "races.weather",
        "races.going"
      ],
      "examples": [
        "天候",
        "良・稍重・重・不良",
        "馬場変化",
        "同日内バイアス"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "races.weather",
          "available": true
        },
        {
          "requirement": "races.going",
          "available": true
        }
      ],
      "availableRequirements": 2,
      "totalRequirements": 2,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "course_geometry",
      "label": "コース形状",
      "category": "course",
      "availableAt": "static",
      "requirements": [],
      "examples": [
        "直線長",
        "高低差",
        "コーナー数",
        "坂",
        "スタート位置",
        "最初のコーナーまで"
      ],
      "defaultStatus": "planned",
      "checks": [],
      "availableRequirements": 0,
      "totalRequirements": 0,
      "coverage": 0,
      "status": "missing"
    },
    {
      "id": "track_measurements",
      "label": "馬場計測",
      "category": "condition",
      "availableAt": "race_day",
      "requirements": [],
      "examples": [
        "含水率",
        "クッション値",
        "芝丈",
        "使用コース",
        "散水・凍結防止剤"
      ],
      "defaultStatus": "planned",
      "checks": [],
      "availableRequirements": 0,
      "totalRequirements": 0,
      "coverage": 0,
      "status": "missing"
    },
    {
      "id": "horse_form",
      "label": "馬の近走能力",
      "category": "horse",
      "availableAt": "prior_races",
      "requirements": [
        "race_results.finish_position",
        "race_results.official_time",
        "race_results.final_sectional",
        "race_results.corner_positions",
        "races.race_date"
      ],
      "examples": [
        "休養日数",
        "近走着順",
        "走破時計",
        "上がり",
        "位置取り",
        "成長・衰退",
        "安定度"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "race_results.finish_position",
          "available": true
        },
        {
          "requirement": "race_results.official_time",
          "available": true
        },
        {
          "requirement": "race_results.final_sectional",
          "available": true
        },
        {
          "requirement": "race_results.corner_positions",
          "available": true
        },
        {
          "requirement": "races.race_date",
          "available": true
        }
      ],
      "availableRequirements": 5,
      "totalRequirements": 5,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "horse_suitability",
      "label": "条件適性",
      "category": "horse",
      "availableAt": "prior_races",
      "requirements": [
        "races.venue_code",
        "races.surface",
        "races.distance_m",
        "races.going",
        "race_results.finish_position"
      ],
      "examples": [
        "競馬場適性",
        "距離適性",
        "芝ダ適性",
        "道悪適性",
        "右左回り適性"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "races.venue_code",
          "available": true
        },
        {
          "requirement": "races.surface",
          "available": true
        },
        {
          "requirement": "races.distance_m",
          "available": true
        },
        {
          "requirement": "races.going",
          "available": true
        },
        {
          "requirement": "race_results.finish_position",
          "available": true
        }
      ],
      "availableRequirements": 5,
      "totalRequirements": 5,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "pace_shape",
      "label": "展開・脚質",
      "category": "competition",
      "availableAt": "prior_races",
      "requirements": [
        "race_results.corner_positions",
        "race_results.final_sectional",
        "race_entries.horse_number"
      ],
      "examples": [
        "逃げ先行差し追込",
        "先行馬密度",
        "想定ペース",
        "位置取り変化",
        "末脚持続性"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "race_results.corner_positions",
          "available": true
        },
        {
          "requirement": "race_results.final_sectional",
          "available": true
        },
        {
          "requirement": "race_entries.horse_number",
          "available": true
        }
      ],
      "availableRequirements": 3,
      "totalRequirements": 3,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "body_load",
      "label": "馬体・負担重量",
      "category": "horse",
      "availableAt": "race_day",
      "requirements": [
        "race_entries.sex_age",
        "race_entries.carried_weight",
        "race_entries.body_weight",
        "race_entries.body_weight_delta"
      ],
      "examples": [
        "性齢",
        "斤量",
        "馬体重",
        "増減",
        "斤量体重比",
        "前走比"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "race_entries.sex_age",
          "available": true
        },
        {
          "requirement": "race_entries.carried_weight",
          "available": true
        },
        {
          "requirement": "race_entries.body_weight",
          "available": true
        },
        {
          "requirement": "race_entries.body_weight_delta",
          "available": true
        }
      ],
      "availableRequirements": 4,
      "totalRequirements": 4,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "connections",
      "label": "騎手・調教師",
      "category": "people",
      "availableAt": "prior_races",
      "requirements": [
        "race_entries.jockey_id",
        "race_entries.trainer_id",
        "race_results.finish_position"
      ],
      "examples": [
        "騎手成績",
        "調教師成績",
        "コンビ成績",
        "競馬場別",
        "距離別",
        "馬場別",
        "直近調子"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "race_entries.jockey_id",
          "available": true
        },
        {
          "requirement": "race_entries.trainer_id",
          "available": true
        },
        {
          "requirement": "race_results.finish_position",
          "available": true
        }
      ],
      "availableRequirements": 3,
      "totalRequirements": 3,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "pedigree",
      "label": "血統",
      "category": "horse",
      "availableAt": "entry",
      "requirements": [],
      "examples": [
        "父",
        "母父",
        "系統",
        "産駒距離適性",
        "馬場適性",
        "初コース補完"
      ],
      "defaultStatus": "planned",
      "checks": [],
      "availableRequirements": 0,
      "totalRequirements": 0,
      "coverage": 0,
      "status": "missing"
    },
    {
      "id": "training",
      "label": "調教・ローテーション",
      "category": "horse",
      "availableAt": "pre_race",
      "requirements": [],
      "examples": [
        "追切時計",
        "調教コース",
        "併せ内容",
        "間隔",
        "輸送",
        "連闘",
        "放牧明け"
      ],
      "defaultStatus": "planned",
      "checks": [],
      "availableRequirements": 0,
      "totalRequirements": 0,
      "coverage": 0,
      "status": "missing"
    },
    {
      "id": "market",
      "label": "市場オッズ",
      "category": "market",
      "availableAt": "pre_race",
      "requirements": [
        "odds_snapshots.bet_type",
        "odds_snapshots.odds",
        "odds_snapshots.observed_at",
        "odds_snapshots.selection_key"
      ],
      "examples": [
        "単複",
        "馬連",
        "ワイド",
        "馬単",
        "3連複",
        "3連単",
        "時系列変動",
        "市場確率",
        "過剰人気"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "odds_snapshots.bet_type",
          "available": true
        },
        {
          "requirement": "odds_snapshots.odds",
          "available": true
        },
        {
          "requirement": "odds_snapshots.observed_at",
          "available": true
        },
        {
          "requirement": "odds_snapshots.selection_key",
          "available": true
        }
      ],
      "availableRequirements": 4,
      "totalRequirements": 4,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "field_strength",
      "label": "相手関係",
      "category": "competition",
      "availableAt": "pre_race",
      "requirements": [
        "race_entries.race_id",
        "race_results.finish_position",
        "race_results.popularity"
      ],
      "examples": [
        "出走馬能力分布",
        "上位差",
        "混戦度",
        "クラス変動",
        "メンバー強度"
      ],
      "defaultStatus": "derived",
      "checks": [
        {
          "requirement": "race_entries.race_id",
          "available": true
        },
        {
          "requirement": "race_results.finish_position",
          "available": true
        },
        {
          "requirement": "race_results.popularity",
          "available": true
        }
      ],
      "availableRequirements": 3,
      "totalRequirements": 3,
      "coverage": 1,
      "status": "ready"
    },
    {
      "id": "external_weather",
      "label": "気象実測",
      "category": "condition",
      "availableAt": "pre_race",
      "requirements": [],
      "examples": [
        "気温",
        "降水量",
        "風向",
        "風速",
        "湿度",
        "日照"
      ],
      "defaultStatus": "planned",
      "checks": [],
      "availableRequirements": 0,
      "totalRequirements": 0,
      "coverage": 0,
      "status": "missing"
    },
    {
      "id": "changes",
      "label": "直前変更",
      "category": "operations",
      "availableAt": "pre_race",
      "requirements": [],
      "examples": [
        "取消・除外",
        "騎手変更",
        "馬体重発表",
        "発走時刻変更",
        "発売停止"
      ],
      "defaultStatus": "planned",
      "checks": [],
      "availableRequirements": 0,
      "totalRequirements": 0,
      "coverage": 0,
      "status": "missing"
    }
  ],
  "readyGroups": 9,
  "partialGroups": 0,
  "missingGroups": 6,
  "forbiddenTargetFields": [
    "target.finish_position",
    "target.official_time",
    "target.final_sectional",
    "target.corner_positions",
    "target.popularity",
    "target.payout",
    "target.closing_odds_observed_after_cutoff"
  ]
};
