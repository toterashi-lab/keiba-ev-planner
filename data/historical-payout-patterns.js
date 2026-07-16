window.KEIBA_HISTORICAL_PAYOUT_PATTERNS = {
  "status": "research_only",
  "generatedAt": "2026-07-16T12:44:08.285Z",
  "source": "JRA official completed race results and payouts",
  "leakagePolicy": {
    "discovery": "race_date < 2020-01-01",
    "validation": "2020-01-01 <= race_date < 2026-07-11",
    "targetWeekExcluded": true
  },
  "interpretation": "高配当になりやすいレース条件の再現性を測る。的中確率や正の期待値を直接意味しない。",
  "policy": {
    "highPayoutDefinition": "券種別discovery期間の払戻上位10%",
    "minimumDiscoveryRows": 250,
    "minimumValidationRows": 80,
    "empiricalBayesPriorStrength": 500,
    "acceptedOnlyWhenBothPeriodsLiftAboveOne": true
  },
  "coverage": {
    "totalRows": 958914,
    "discoveryRows": 689724,
    "validationRows": 269190,
    "earliestDate": "1996-01-05",
    "latestDate": "2026-07-05",
    "betTypes": [
      "単勝",
      "枠連",
      "複勝",
      "馬連",
      "3連複",
      "ワイド",
      "馬単",
      "3連単"
    ]
  },
  "thresholds": {
    "単勝": 2130,
    "枠連": 4700,
    "複勝": 690,
    "馬連": 12360,
    "3連複": 47330,
    "ワイド": 4270,
    "馬単": 24650,
    "3連単": 303680
  },
  "baselines": {
    "単勝": {
      "discoveryCount": 59019,
      "validationCount": 22565,
      "discoveryRate": 0.10003558176180552,
      "validationRate": 0.09089297584755152
    },
    "枠連": {
      "discoveryCount": 57726,
      "validationCount": 21360,
      "discoveryRate": 0.10002425250320479,
      "validationRate": 0.09639513108614232
    },
    "複勝": {
      "discoveryCount": 176478,
      "validationCount": 67139,
      "discoveryRate": 0.10080009972914471,
      "validationRate": 0.09014134854555475
    },
    "馬連": {
      "discoveryCount": 58828,
      "validationCount": 22570,
      "discoveryRate": 0.10005439586591419,
      "validationRate": 0.09322108994240141
    },
    "3連複": {
      "discoveryCount": 58835,
      "validationCount": 22585,
      "discoveryRate": 0.10004249171411575,
      "validationRate": 0.08625193712641134
    },
    "ワイド": {
      "discoveryCount": 175687,
      "validationCount": 67697,
      "discoveryRate": 0.10024646103581938,
      "validationRate": 0.09247086281519122
    },
    "馬単": {
      "discoveryCount": 58865,
      "validationCount": 22608,
      "discoveryRate": 0.10004247005860868,
      "validationRate": 0.09160474168435952
    },
    "3連単": {
      "discoveryCount": 44286,
      "validationCount": 22666,
      "discoveryRate": 0.10005419319875355,
      "validationRate": 0.08338480543545398
    }
  },
  "patterns": [
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2911,
        "highPayoutCount": 474,
        "observedRate": 0.16283064239093095,
        "posteriorRate": 0.15362686773880327,
        "lift": 1.5356161677561144,
        "averagePayoutYen": 34637.21745104775,
        "medianPayoutYen": 9710
      },
      "validation": {
        "count": 1312,
        "highPayoutCount": 210,
        "observedRate": 0.1600609756097561,
        "posteriorRate": 0.13969424313642698,
        "lift": 1.6196070232218702,
        "averagePayoutYen": 34062.33993902439,
        "medianPayoutYen": 10740
      },
      "robustLift": 1.5356161677561144,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2680,
        "highPayoutCount": 437,
        "observedRate": 0.16305970149253732,
        "posteriorRate": 0.15315317503125056,
        "lift": 1.5307022138194453,
        "averagePayoutYen": 224411.23134328358,
        "medianPayoutYen": 55530
      },
      "validation": {
        "count": 1318,
        "highPayoutCount": 190,
        "observedRate": 0.1441578148710167,
        "posteriorRate": 0.12744356585133498,
        "lift": 1.528378763802306,
        "averagePayoutYen": 205667.64036418818,
        "medianPayoutYen": 58900
      },
      "robustLift": 1.528378763802306,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 4433,
        "highPayoutCount": 693,
        "observedRate": 0.15632754342431762,
        "posteriorRate": 0.15062259190291058,
        "lift": 1.5055861696581283,
        "averagePayoutYen": 32058.179562373112,
        "medianPayoutYen": 9320
      },
      "validation": {
        "count": 1781,
        "highPayoutCount": 274,
        "observedRate": 0.15384615384615385,
        "posteriorRate": 0.13902935929995866,
        "lift": 1.6118983982492638,
        "averagePayoutYen": 29142.223469960696,
        "medianPayoutYen": 9710
      },
      "robustLift": 1.5055861696581283,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3981,
        "highPayoutCount": 602,
        "observedRate": 0.15121828686259733,
        "posteriorRate": 0.1455092828831459,
        "lift": 1.4543046945978333,
        "averagePayoutYen": 195651.15548857072,
        "medianPayoutYen": 51970
      },
      "validation": {
        "count": 1790,
        "highPayoutCount": 254,
        "observedRate": 0.1418994413407821,
        "posteriorRate": 0.12912331996407292,
        "lift": 1.5485233705321042,
        "averagePayoutYen": 181122.50837988826,
        "medianPayoutYen": 54010
      },
      "robustLift": 1.4543046945978333,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 14382,
        "highPayoutCount": 2077,
        "observedRate": 0.14441663190098736,
        "posteriorRate": 0.14292576574768565,
        "lift": 1.4286505993484684,
        "averagePayoutYen": 30978.518286747323,
        "medianPayoutYen": 8910
      },
      "validation": {
        "count": 5192,
        "highPayoutCount": 763,
        "observedRate": 0.1469568567026194,
        "posteriorRate": 0.14162437957891877,
        "lift": 1.6419849141631828,
        "averagePayoutYen": 30657.36710323575,
        "medianPayoutYen": 9480
      },
      "robustLift": 1.4286505993484684,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 13269,
        "highPayoutCount": 1891,
        "observedRate": 0.14251262340794332,
        "posteriorRate": 0.14097779290565107,
        "lift": 1.4063119181362207,
        "averagePayoutYen": 2456.6598839400103,
        "medianPayoutYen": 1180
      },
      "validation": {
        "count": 5329,
        "highPayoutCount": 740,
        "observedRate": 0.1388628260461625,
        "posteriorRate": 0.13488341592170108,
        "lift": 1.4586585635225875,
        "averagePayoutYen": 2451.8690185775945,
        "medianPayoutYen": 1190
      },
      "robustLift": 1.4063119181362207,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 2909,
        "highPayoutCount": 429,
        "observedRate": 0.14747335854245444,
        "posteriorRate": 0.14051839188411766,
        "lift": 1.4044199724360982,
        "averagePayoutYen": 7529.920935029219,
        "medianPayoutYen": 2810
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 194,
        "observedRate": 0.1480916030534351,
        "posteriorRate": 0.13293400274651973,
        "lift": 1.4260078146335315,
        "averagePayoutYen": 7617.9312977099235,
        "medianPayoutYen": 2870
      },
      "robustLift": 1.4044199724360982,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 13009,
        "highPayoutCount": 1826,
        "observedRate": 0.14036436313321546,
        "posteriorRate": 0.1388723885261216,
        "lift": 1.387971698999734,
        "averagePayoutYen": 194136.25720654932,
        "medianPayoutYen": 50060
      },
      "validation": {
        "count": 5218,
        "highPayoutCount": 706,
        "observedRate": 0.13530088156381756,
        "posteriorRate": 0.13076117571138982,
        "lift": 1.568165507235112,
        "averagePayoutYen": 188873.39593714065,
        "medianPayoutYen": 51580
      },
      "robustLift": 1.387971698999734,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 2907,
        "highPayoutCount": 424,
        "observedRate": 0.1458548331613347,
        "posteriorRate": 0.13913156296721585,
        "lift": 1.3907249879546886,
        "averagePayoutYen": 15160.46439628483,
        "medianPayoutYen": 5360
      },
      "validation": {
        "count": 1311,
        "highPayoutCount": 184,
        "observedRate": 0.14035087719298245,
        "posteriorRate": 0.12689252945454432,
        "lift": 1.3852179169040744,
        "averagePayoutYen": 14953.23417238749,
        "medianPayoutYen": 5440
      },
      "robustLift": 1.3852179169040744,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 7256,
        "highPayoutCount": 1012,
        "observedRate": 0.139470782800441,
        "posteriorRate": 0.13692898992483984,
        "lift": 1.368708311625544,
        "averagePayoutYen": 29374.986218302096,
        "medianPayoutYen": 7980
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 332,
        "observedRate": 0.1328,
        "posteriorRate": 0.12504198952106857,
        "lift": 1.4497296372347708,
        "averagePayoutYen": 27495.308,
        "medianPayoutYen": 8340
      },
      "robustLift": 1.368708311625544,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 8718,
        "highPayoutCount": 1213,
        "observedRate": 0.13913741683872446,
        "posteriorRate": 0.13702790524169123,
        "lift": 1.366910151498808,
        "averagePayoutYen": 2469.2429456297314,
        "medianPayoutYen": 1230
      },
      "validation": {
        "count": 3929,
        "highPayoutCount": 583,
        "observedRate": 0.1483838126749809,
        "posteriorRate": 0.14207167112386443,
        "lift": 1.536393916944449,
        "averagePayoutYen": 2661.0384321710358,
        "medianPayoutYen": 1280
      },
      "robustLift": 1.366910151498808,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5648,
        "highPayoutCount": 776,
        "observedRate": 0.13739376770538245,
        "posteriorRate": 0.13435704238766702,
        "lift": 1.3428426944663105,
        "averagePayoutYen": 184547.75849858357,
        "medianPayoutYen": 45530
      },
      "validation": {
        "count": 2512,
        "highPayoutCount": 314,
        "observedRate": 0.125,
        "posteriorRate": 0.11809176717056008,
        "lift": 1.4162264522158279,
        "averagePayoutYen": 167848.8694267516,
        "medianPayoutYen": 44450
      },
      "robustLift": 1.3428426944663105,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 597,
        "highPayoutCount": 97,
        "observedRate": 0.1624790619765494,
        "posteriorRate": 0.1340265237915923,
        "lift": 1.339539298721385,
        "averagePayoutYen": 207625.91289782245,
        "medianPayoutYen": 50290
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 50,
        "observedRate": 0.15873015873015872,
        "posteriorRate": 0.11250601560457299,
        "lift": 1.3492388093615086,
        "averagePayoutYen": 220623.5873015873,
        "medianPayoutYen": 62120
      },
      "robustLift": 1.339539298721385,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 4978,
        "highPayoutCount": 681,
        "observedRate": 0.13680192848533548,
        "posteriorRate": 0.13344780879871793,
        "lift": 1.3337552833355952,
        "averagePayoutYen": 180202.73001205304,
        "medianPayoutYen": 43430
      },
      "validation": {
        "count": 2164,
        "highPayoutCount": 261,
        "observedRate": 0.12060998151571165,
        "posteriorRate": 0.11362327429344105,
        "lift": 1.3626376376376375,
        "averagePayoutYen": 189909.3807763401,
        "medianPayoutYen": 39540
      },
      "robustLift": 1.3337552833355952,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 14413,
        "highPayoutCount": 1929,
        "observedRate": 0.13383750780545342,
        "posteriorRate": 0.13270483456936613,
        "lift": 1.3263268787031381,
        "averagePayoutYen": 7148.983556511483,
        "medianPayoutYen": 2620
      },
      "validation": {
        "count": 5186,
        "highPayoutCount": 727,
        "observedRate": 0.1401851137678365,
        "posteriorRate": 0.13605531920000014,
        "lift": 1.4594907577680623,
        "averagePayoutYen": 7289.20362514462,
        "medianPayoutYen": 2750
      },
      "robustLift": 1.3263268787031381,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2354,
        "highPayoutCount": 329,
        "observedRate": 0.13976210705182668,
        "posteriorRate": 0.13280351992188433,
        "lift": 1.3274711339796235,
        "averagePayoutYen": 29340.734919286322,
        "medianPayoutYen": 8290
      },
      "validation": {
        "count": 805,
        "highPayoutCount": 106,
        "observedRate": 0.13167701863354037,
        "posteriorRate": 0.11427277284536834,
        "lift": 1.3248719582713777,
        "averagePayoutYen": 28850.63354037267,
        "medianPayoutYen": 7640
      },
      "robustLift": 1.3248719582713777,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 43092,
        "highPayoutCount": 5730,
        "observedRate": 0.1329713171818435,
        "posteriorRate": 0.1325959632620185,
        "lift": 1.3226996932554078,
        "averagePayoutYen": 2369.505708716235,
        "medianPayoutYen": 1150
      },
      "validation": {
        "count": 15554,
        "highPayoutCount": 2199,
        "observedRate": 0.14137842355664137,
        "posteriorRate": 0.1398552031523356,
        "lift": 1.5124245507673584,
        "averagePayoutYen": 2513.6325061077537,
        "medianPayoutYen": 1200
      },
      "robustLift": 1.3226996932554078,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 21766,
        "highPayoutCount": 2896,
        "observedRate": 0.1330515482863181,
        "posteriorRate": 0.13231030476318412,
        "lift": 1.3225410772582293,
        "averagePayoutYen": 29319.46292382615,
        "medianPayoutYen": 7590
      },
      "validation": {
        "count": 7060,
        "highPayoutCount": 877,
        "observedRate": 0.12422096317280454,
        "posteriorRate": 0.12170978420148224,
        "lift": 1.411096240344187,
        "averagePayoutYen": 28286.706798866857,
        "medianPayoutYen": 7370
      },
      "robustLift": 1.3225410772582293,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 4428,
        "highPayoutCount": 599,
        "observedRate": 0.1352755194218609,
        "posteriorRate": 0.13170073762769974,
        "lift": 1.316448279920962,
        "averagePayoutYen": 14275.815266485999,
        "medianPayoutYen": 5190
      },
      "validation": {
        "count": 1776,
        "highPayoutCount": 235,
        "observedRate": 0.13231981981981983,
        "posteriorRate": 0.12337538261958689,
        "lift": 1.3468231049075907,
        "averagePayoutYen": 14495.033783783783,
        "medianPayoutYen": 5220
      },
      "robustLift": 1.316448279920962,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3513,
        "highPayoutCount": 478,
        "observedRate": 0.13606604042129233,
        "posteriorRate": 0.13157768399129277,
        "lift": 1.3152179812483367,
        "averagePayoutYen": 28289.658411614004,
        "medianPayoutYen": 6780
      },
      "validation": {
        "count": 1398,
        "highPayoutCount": 178,
        "observedRate": 0.12732474964234622,
        "posteriorRate": 0.11650472527039288,
        "lift": 1.3507490863613054,
        "averagePayoutYen": 28814.334763948496,
        "medianPayoutYen": 7380
      },
      "robustLift": 1.3152179812483367,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 14384,
        "highPayoutCount": 1903,
        "observedRate": 0.13229977753058955,
        "posteriorRate": 0.13121615392564528,
        "lift": 1.3116045000565648,
        "averagePayoutYen": 14210.163375973303,
        "medianPayoutYen": 5040
      },
      "validation": {
        "count": 5196,
        "highPayoutCount": 704,
        "observedRate": 0.1354888375673595,
        "posteriorRate": 0.13163665218437143,
        "lift": 1.4370069688963154,
        "averagePayoutYen": 14442.167051578137,
        "medianPayoutYen": 5210
      },
      "robustLift": 1.3116045000565648,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 21331,
        "highPayoutCount": 2814,
        "observedRate": 0.1319206788242464,
        "posteriorRate": 0.1311905659776033,
        "lift": 1.3113484453435764,
        "averagePayoutYen": 29550.81430781492,
        "medianPayoutYen": 7920
      },
      "validation": {
        "count": 6762,
        "highPayoutCount": 876,
        "observedRate": 0.129547471162378,
        "posteriorRate": 0.12656650627419522,
        "lift": 1.467404796818634,
        "averagePayoutYen": 28797.326234841763,
        "medianPayoutYen": 8100
      },
      "robustLift": 1.3113484453435764,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 16821,
        "highPayoutCount": 2220,
        "observedRate": 0.13197788478687356,
        "posteriorRate": 0.13105635336293384,
        "lift": 1.3098536820200606,
        "averagePayoutYen": 189847.35211937458,
        "medianPayoutYen": 43630
      },
      "validation": {
        "count": 7092,
        "highPayoutCount": 842,
        "observedRate": 0.11872532430908066,
        "posteriorRate": 0.11639784018937394,
        "lift": 1.3959118760488622,
        "averagePayoutYen": 183604.28652002255,
        "medianPayoutYen": 40110
      },
      "robustLift": 1.3098536820200606,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 670,
        "highPayoutCount": 103,
        "observedRate": 0.1537313432835821,
        "posteriorRate": 0.13078738962141698,
        "lift": 1.3073183942195155,
        "averagePayoutYen": 31004.626865671642,
        "medianPayoutYen": 8870
      },
      "validation": {
        "count": 315,
        "highPayoutCount": 59,
        "observedRate": 0.1873015873015873,
        "posteriorRate": 0.12530793688736894,
        "lift": 1.4528130157090489,
        "averagePayoutYen": 34665.90476190476,
        "medianPayoutYen": 11490
      },
      "robustLift": 1.3073183942195155,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 21732,
        "highPayoutCount": 2861,
        "observedRate": 0.13164918093134548,
        "posteriorRate": 0.13094293048389302,
        "lift": 1.306210006127851,
        "averagePayoutYen": 2343.319528805448,
        "medianPayoutYen": 1090
      },
      "validation": {
        "count": 7488,
        "highPayoutCount": 941,
        "observedRate": 0.12566773504273504,
        "posteriorRate": 0.12358981364641908,
        "lift": 1.3365270949555323,
        "averagePayoutYen": 2340.571581196581,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.306210006127851,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 4437,
        "highPayoutCount": 593,
        "observedRate": 0.133648861843588,
        "posteriorRate": 0.13024654606703606,
        "lift": 1.301757358483112,
        "averagePayoutYen": 7229.2292089249495,
        "medianPayoutYen": 2670
      },
      "validation": {
        "count": 1771,
        "highPayoutCount": 247,
        "observedRate": 0.13946922642574816,
        "posteriorRate": 0.1292868978296789,
        "lift": 1.3868846406919453,
        "averagePayoutYen": 7359.288537549407,
        "medianPayoutYen": 2790
      },
      "robustLift": 1.301757358483112,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 8876,
        "highPayoutCount": 1167,
        "observedRate": 0.1314781433077963,
        "posteriorRate": 0.12980237805027484,
        "lift": 1.2973207209059967,
        "averagePayoutYen": 178106.8465525011,
        "medianPayoutYen": 41620
      },
      "validation": {
        "count": 4000,
        "highPayoutCount": 478,
        "observedRate": 0.1195,
        "posteriorRate": 0.11548720060393933,
        "lift": 1.3849909465020576,
        "averagePayoutYen": 176543.5,
        "medianPayoutYen": 41830
      },
      "robustLift": 1.2973207209059967,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2809,
        "highPayoutCount": 379,
        "observedRate": 0.1349234603061588,
        "posteriorRate": 0.12965460761540548,
        "lift": 1.2958438169388056,
        "averagePayoutYen": 189842.01139195444,
        "medianPayoutYen": 40340
      },
      "validation": {
        "count": 1251,
        "highPayoutCount": 154,
        "observedRate": 0.12310151878497202,
        "posteriorRate": 0.11176036705752541,
        "lift": 1.3402965501195085,
        "averagePayoutYen": 174969.52038369305,
        "medianPayoutYen": 41550
      },
      "robustLift": 1.2958438169388056,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1475,
        "highPayoutCount": 206,
        "observedRate": 0.13966101694915253,
        "posteriorRate": 0.12968264836349858,
        "lift": 1.2936381696024286,
        "averagePayoutYen": 2462.264406779661,
        "medianPayoutYen": 1070
      },
      "validation": {
        "count": 492,
        "highPayoutCount": 75,
        "observedRate": 0.1524390243902439,
        "posteriorRate": 0.12221313649959235,
        "lift": 1.3216394092033392,
        "averagePayoutYen": 2819.918699186992,
        "medianPayoutYen": 1090
      },
      "robustLift": 1.2936381696024286,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 12036,
        "highPayoutCount": 1571,
        "observedRate": 0.1305250913924892,
        "posteriorRate": 0.12930928891648516,
        "lift": 1.292543665205811,
        "averagePayoutYen": 28113.26520438684,
        "medianPayoutYen": 7120
      },
      "validation": {
        "count": 3985,
        "highPayoutCount": 523,
        "observedRate": 0.13124215809284817,
        "posteriorRate": 0.12622652587808375,
        "lift": 1.463463083653245,
        "averagePayoutYen": 27837.124215809286,
        "medianPayoutYen": 7730
      },
      "robustLift": 1.292543665205811,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 10529,
        "highPayoutCount": 1378,
        "observedRate": 0.13087662646025264,
        "posteriorRate": 0.12948800711922293,
        "lift": 1.2916965425139062,
        "averagePayoutYen": 2299.015101149207,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 4189,
        "highPayoutCount": 522,
        "observedRate": 0.12461207925519217,
        "posteriorRate": 0.1211847795708244,
        "lift": 1.3105185339626355,
        "averagePayoutYen": 2379.188350441633,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.2916965425139062,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3684,
        "highPayoutCount": 489,
        "observedRate": 0.13273615635179153,
        "posteriorRate": 0.12882916965990868,
        "lift": 1.2877445118825563,
        "averagePayoutYen": 27426.129207383277,
        "medianPayoutYen": 7410
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 184,
        "observedRate": 0.1372110365398956,
        "posteriorRate": 0.12337097694905251,
        "lift": 1.4303560135494613,
        "averagePayoutYen": 32706.935123042505,
        "medianPayoutYen": 8280
      },
      "robustLift": 1.2877445118825563,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 6674,
        "highPayoutCount": 874,
        "observedRate": 0.13095594845669764,
        "posteriorRate": 0.12880140031461637,
        "lift": 1.287466936376224,
        "averagePayoutYen": 27370.127359904105,
        "medianPayoutYen": 7130
      },
      "validation": {
        "count": 2155,
        "highPayoutCount": 279,
        "observedRate": 0.1294663573085847,
        "posteriorRate": 0.12132804842305299,
        "lift": 1.4066704176769258,
        "averagePayoutYen": 29020.032482598606,
        "medianPayoutYen": 6950
      },
      "robustLift": 1.287466936376224,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1999,
        "highPayoutCount": 276,
        "observedRate": 0.13806903451725863,
        "posteriorRate": 0.1304606826158695,
        "lift": 1.3040527118084746,
        "averagePayoutYen": 30561.575787893948,
        "medianPayoutYen": 7190
      },
      "validation": {
        "count": 630,
        "highPayoutCount": 82,
        "observedRate": 0.13015873015873017,
        "posteriorRate": 0.11073094563115546,
        "lift": 1.2838082171866765,
        "averagePayoutYen": 25161.777777777777,
        "medianPayoutYen": 7500
      },
      "robustLift": 1.2838082171866765,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 7055,
        "highPayoutCount": 921,
        "observedRate": 0.13054571226080794,
        "posteriorRate": 0.12854046730879015,
        "lift": 1.2822444401589492,
        "averagePayoutYen": 2362.4408221119775,
        "medianPayoutYen": 1070
      },
      "validation": {
        "count": 2410,
        "highPayoutCount": 314,
        "observedRate": 0.13029045643153528,
        "posteriorRate": 0.12379224446996413,
        "lift": 1.3387162258599299,
        "averagePayoutYen": 2482.5767634854774,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2822444401589492,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 8988,
        "highPayoutCount": 1175,
        "observedRate": 0.13072986203827325,
        "posteriorRate": 0.12915261908353418,
        "lift": 1.2812747153085584,
        "averagePayoutYen": 388.07076101468624,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 3502,
        "highPayoutCount": 424,
        "observedRate": 0.12107367218732153,
        "posteriorRate": 0.11720906403617624,
        "lift": 1.3002807915275671,
        "averagePayoutYen": 372.4500285551114,
        "medianPayoutYen": 210
      },
      "robustLift": 1.2812747153085584,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1441,
        "highPayoutCount": 202,
        "observedRate": 0.14018043025676613,
        "posteriorRate": 0.12984394466737598,
        "lift": 1.2977361619362249,
        "averagePayoutYen": 180673.893129771,
        "medianPayoutYen": 41030
      },
      "validation": {
        "count": 631,
        "highPayoutCount": 79,
        "observedRate": 0.12519809825673534,
        "posteriorRate": 0.10671299975042174,
        "lift": 1.2797655303402429,
        "averagePayoutYen": 156538.2884310618,
        "medianPayoutYen": 38250
      },
      "robustLift": 1.2797655303402429,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 8916,
        "highPayoutCount": 1155,
        "observedRate": 0.12954239569313594,
        "posteriorRate": 0.12798674920538547,
        "lift": 1.2767208725668042,
        "averagePayoutYen": 2239.823912068192,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 3506,
        "highPayoutCount": 429,
        "observedRate": 0.12236166571591557,
        "posteriorRate": 0.1186309114846719,
        "lift": 1.2829004496450214,
        "averagePayoutYen": 2222.2960638904733,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2767208725668042,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2799,
        "highPayoutCount": 371,
        "observedRate": 0.1325473383351197,
        "posteriorRate": 0.12762264219441552,
        "lift": 1.2755351686350453,
        "averagePayoutYen": 185726.4987495534,
        "medianPayoutYen": 42140
      },
      "validation": {
        "count": 1347,
        "highPayoutCount": 185,
        "observedRate": 0.13734224201930215,
        "posteriorRate": 0.12273546438425934,
        "lift": 1.4719164210230804,
        "averagePayoutYen": 224638.03266518188,
        "medianPayoutYen": 45100
      },
      "robustLift": 1.2755351686350453,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3101,
        "highPayoutCount": 409,
        "observedRate": 0.13189293776201225,
        "posteriorRate": 0.12747049315663922,
        "lift": 1.2741635176471064,
        "averagePayoutYen": 28722.66043211867,
        "medianPayoutYen": 7000
      },
      "validation": {
        "count": 1245,
        "highPayoutCount": 161,
        "observedRate": 0.12931726907630522,
        "posteriorRate": 0.11697763241444452,
        "lift": 1.356231944599707,
        "averagePayoutYen": 28269.26907630522,
        "medianPayoutYen": 7580
      },
      "robustLift": 1.2741635176471064,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2890,
        "highPayoutCount": 382,
        "observedRate": 0.13217993079584775,
        "posteriorRate": 0.12744162141574536,
        "lift": 1.273725941326495,
        "averagePayoutYen": 185448.65397923876,
        "medianPayoutYen": 39780
      },
      "validation": {
        "count": 1310,
        "highPayoutCount": 154,
        "observedRate": 0.11755725190839694,
        "posteriorRate": 0.10811734956780497,
        "lift": 1.2966073255576018,
        "averagePayoutYen": 165543.786259542,
        "medianPayoutYen": 42810
      },
      "robustLift": 1.273725941326495,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3681,
        "highPayoutCount": 482,
        "observedRate": 0.13094267861994024,
        "posteriorRate": 0.127247368059569,
        "lift": 1.2719332143704962,
        "averagePayoutYen": 26978.353708231458,
        "medianPayoutYen": 7630
      },
      "validation": {
        "count": 1198,
        "highPayoutCount": 150,
        "observedRate": 0.12520868113522537,
        "posteriorRate": 0.1137373195307454,
        "lift": 1.318663943327456,
        "averagePayoutYen": 27102.9632721202,
        "medianPayoutYen": 7270
      },
      "robustLift": 1.2719332143704962,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3570,
        "highPayoutCount": 467,
        "observedRate": 0.130812324929972,
        "posteriorRate": 0.12703368466815154,
        "lift": 1.2696487833928591,
        "averagePayoutYen": 184907.2100840336,
        "medianPayoutYen": 41010
      },
      "validation": {
        "count": 1711,
        "highPayoutCount": 205,
        "observedRate": 0.11981297486849796,
        "posteriorRate": 0.11157503515048711,
        "lift": 1.3380739400639898,
        "averagePayoutYen": 172788.12390414963,
        "medianPayoutYen": 44690
      },
      "robustLift": 1.2696487833928591,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3597,
        "highPayoutCount": 470,
        "observedRate": 0.1306644425910481,
        "posteriorRate": 0.126928751915884,
        "lift": 1.2686000242263236,
        "averagePayoutYen": 184258.62941340005,
        "medianPayoutYen": 40730
      },
      "validation": {
        "count": 1739,
        "highPayoutCount": 207,
        "observedRate": 0.11903392754456585,
        "posteriorRate": 0.11107298022229879,
        "lift": 1.3320529998511241,
        "averagePayoutYen": 171116.37147786084,
        "medianPayoutYen": 44340
      },
      "robustLift": 1.2686000242263236,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 16831,
        "highPayoutCount": 2143,
        "observedRate": 0.12732457964470323,
        "posteriorRate": 0.1265378279729604,
        "lift": 1.2646929021914972,
        "averagePayoutYen": 186148.5942605906,
        "medianPayoutYen": 44800
      },
      "validation": {
        "count": 6794,
        "highPayoutCount": 821,
        "observedRate": 0.12084191934059464,
        "posteriorRate": 0.11827425318312682,
        "lift": 1.4184149326183875,
        "averagePayoutYen": 180178.90197232852,
        "medianPayoutYen": 43430
      },
      "robustLift": 1.2646929021914972,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2973,
        "highPayoutCount": 389,
        "observedRate": 0.1308442650521359,
        "posteriorRate": 0.12640980301095822,
        "lift": 1.263561121330229,
        "averagePayoutYen": 28182.24016145308,
        "medianPayoutYen": 6860
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 139,
        "observedRate": 0.1188034188034188,
        "posteriorRate": 0.10905746620551238,
        "lift": 1.2644059929422469,
        "averagePayoutYen": 26194.846153846152,
        "medianPayoutYen": 7260
      },
      "robustLift": 1.263561121330229,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 36076,
        "highPayoutCount": 4574,
        "observedRate": 0.12678789222751968,
        "posteriorRate": 0.12642506645116772,
        "lift": 1.2611424397914095,
        "averagePayoutYen": 2282.3198248142808,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 11935,
        "highPayoutCount": 1508,
        "observedRate": 0.12635106828655215,
        "posteriorRate": 0.12498877614858027,
        "lift": 1.351655779381859,
        "averagePayoutYen": 2362.4759111855888,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.2611424397914095,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 65224,
        "highPayoutCount": 8253,
        "observedRate": 0.1265331779712989,
        "posteriorRate": 0.1263331999044171,
        "lift": 1.260226032909796,
        "averagePayoutYen": 2290.175702195511,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 21154,
        "highPayoutCount": 2594,
        "observedRate": 0.12262456273045287,
        "posteriorRate": 0.12192830107174636,
        "lift": 1.3185591370054335,
        "averagePayoutYen": 2369.367022785289,
        "medianPayoutYen": 1030
      },
      "robustLift": 1.260226032909796,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 497,
        "highPayoutCount": 84,
        "observedRate": 0.16901408450704225,
        "posteriorRate": 0.13442451941530378,
        "lift": 1.343674243934658,
        "averagePayoutYen": 31546.056338028167,
        "medianPayoutYen": 8080
      },
      "validation": {
        "count": 164,
        "highPayoutCount": 29,
        "observedRate": 0.17682926829268292,
        "posteriorRate": 0.10862344663133384,
        "lift": 1.2593739949531184,
        "averagePayoutYen": 39548.04878048781,
        "medianPayoutYen": 7770
      },
      "robustLift": 1.2593739949531184,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1193,
        "highPayoutCount": 171,
        "observedRate": 0.14333612740989102,
        "posteriorRate": 0.13055351246271515,
        "lift": 1.3048279965975633,
        "averagePayoutYen": 224819.91617770327,
        "medianPayoutYen": 40660
      },
      "validation": {
        "count": 565,
        "highPayoutCount": 70,
        "observedRate": 0.12389380530973451,
        "posteriorRate": 0.1048754955096028,
        "lift": 1.2577290905929404,
        "averagePayoutYen": 175022.10619469028,
        "medianPayoutYen": 46820
      },
      "robustLift": 1.2577290905929404,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 63925,
        "highPayoutCount": 8069,
        "observedRate": 0.12622604614782948,
        "posteriorRate": 0.1260244195656641,
        "lift": 1.257145821044335,
        "averagePayoutYen": 2303.66836136097,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 20268,
        "highPayoutCount": 2595,
        "observedRate": 0.12803433984606277,
        "posteriorRate": 0.12717813132740732,
        "lift": 1.3753319419283536,
        "averagePayoutYen": 2396.4135583185316,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.257145821044335,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 5995,
        "highPayoutCount": 767,
        "observedRate": 0.12793994995829858,
        "posteriorRate": 0.12580804165017853,
        "lift": 1.2549873616508582,
        "averagePayoutYen": 2360.587155963303,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1888,
        "highPayoutCount": 235,
        "observedRate": 0.12447033898305085,
        "posteriorRate": 0.11777028115895964,
        "lift": 1.2735934063287684,
        "averagePayoutYen": 2280.169491525424,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2549873616508582,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1453,
        "highPayoutCount": 194,
        "observedRate": 0.13351686166551963,
        "posteriorRate": 0.12494687447878026,
        "lift": 1.2489380496022828,
        "averagePayoutYen": 27600.79834824501,
        "medianPayoutYen": 8100
      },
      "validation": {
        "count": 490,
        "highPayoutCount": 73,
        "observedRate": 0.1489795918367347,
        "posteriorRate": 0.1172989581446522,
        "lift": 1.359957376641155,
        "averagePayoutYen": 24709.755102040817,
        "medianPayoutYen": 8880
      },
      "robustLift": 1.2489380496022828,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1223,
        "highPayoutCount": 165,
        "observedRate": 0.1349141455437449,
        "posteriorRate": 0.12479468709057334,
        "lift": 1.2474168221158481,
        "averagePayoutYen": 26837.04006541292,
        "medianPayoutYen": 7400
      },
      "validation": {
        "count": 617,
        "highPayoutCount": 79,
        "observedRate": 0.1280388978930308,
        "posteriorRate": 0.10933390202614653,
        "lift": 1.2676109739530386,
        "averagePayoutYen": 28062.090761750405,
        "medianPayoutYen": 7710
      },
      "robustLift": 1.2474168221158481,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3919,
        "highPayoutCount": 501,
        "observedRate": 0.127838734371013,
        "posteriorRate": 0.1246936514725182,
        "lift": 1.2464068950706095,
        "averagePayoutYen": 28052.263332482777,
        "medianPayoutYen": 7090
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 219,
        "observedRate": 0.12852112676056338,
        "posteriorRate": 0.11893192766025666,
        "lift": 1.3788899313177088,
        "averagePayoutYen": 28374.771126760563,
        "medianPayoutYen": 8150
      },
      "robustLift": 1.2464068950706095,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2000,
        "highPayoutCount": 262,
        "observedRate": 0.131,
        "posteriorRate": 0.12484929220716387,
        "lift": 1.245423438564615,
        "averagePayoutYen": 2369.865,
        "medianPayoutYen": 1140
      },
      "validation": {
        "count": 941,
        "highPayoutCount": 148,
        "observedRate": 0.15727948990435706,
        "posteriorRate": 0.13479211062289773,
        "lift": 1.4576711681850332,
        "averagePayoutYen": 2603.5494155154092,
        "medianPayoutYen": 1310
      },
      "robustLift": 1.245423438564615,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2181,
        "highPayoutCount": 284,
        "observedRate": 0.130215497478221,
        "posteriorRate": 0.12459048735523191,
        "lift": 1.2452300435598738,
        "averagePayoutYen": 187484.12196240257,
        "medianPayoutYen": 39740
      },
      "validation": {
        "count": 1170,
        "highPayoutCount": 138,
        "observedRate": 0.11794871794871795,
        "posteriorRate": 0.10760024114833952,
        "lift": 1.2904058549567532,
        "averagePayoutYen": 177374.37606837606,
        "medianPayoutYen": 38960
      },
      "robustLift": 1.2452300435598738,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 11032,
        "highPayoutCount": 1389,
        "observedRate": 0.12590645395213923,
        "posteriorRate": 0.12479389789437302,
        "lift": 1.244870857334131,
        "averagePayoutYen": 2244.6528281363308,
        "medianPayoutYen": 1030
      },
      "validation": {
        "count": 3591,
        "highPayoutCount": 426,
        "observedRate": 0.11862990810359231,
        "posteriorRate": 0.11543276250491216,
        "lift": 1.2483149717723703,
        "averagePayoutYen": 2291.1389585073794,
        "medianPayoutYen": 1060
      },
      "robustLift": 1.244870857334131,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2396,
        "highPayoutCount": 310,
        "observedRate": 0.1293823038397329,
        "posteriorRate": 0.12431672854180174,
        "lift": 1.2426392666933241,
        "averagePayoutYen": 25411.844741235393,
        "medianPayoutYen": 7390
      },
      "validation": {
        "count": 909,
        "highPayoutCount": 109,
        "observedRate": 0.11991199119911991,
        "posteriorRate": 0.10796733042101184,
        "lift": 1.2517670213339591,
        "averagePayoutYen": 25466.105610561055,
        "medianPayoutYen": 7470
      },
      "robustLift": 1.2426392666933241,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 2356,
        "highPayoutCount": 305,
        "observedRate": 0.12945670628183362,
        "posteriorRate": 0.12430924297372448,
        "lift": 1.242416606465896,
        "averagePayoutYen": 7001.396434634975,
        "medianPayoutYen": 2480
      },
      "validation": {
        "count": 801,
        "highPayoutCount": 106,
        "observedRate": 0.132334581772784,
        "posteriorRate": 0.11730249421306742,
        "lift": 1.2583257102608991,
        "averagePayoutYen": 7052.259675405743,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.242416606465896,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 6395,
        "highPayoutCount": 813,
        "observedRate": 0.127130570758405,
        "posteriorRate": 0.12516624305396054,
        "lift": 1.251130803615319,
        "averagePayoutYen": 28805.013291634088,
        "medianPayoutYen": 6440
      },
      "validation": {
        "count": 1425,
        "highPayoutCount": 163,
        "observedRate": 0.1143859649122807,
        "posteriorRate": 0.10707842522763932,
        "lift": 1.2414611056294835,
        "averagePayoutYen": 25700.63859649123,
        "medianPayoutYen": 7000
      },
      "robustLift": 1.2414611056294835,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3962,
        "highPayoutCount": 504,
        "observedRate": 0.127208480565371,
        "posteriorRate": 0.12416433120956027,
        "lift": 1.2411159406582533,
        "averagePayoutYen": 27944.053508329125,
        "medianPayoutYen": 6980
      },
      "validation": {
        "count": 1731,
        "highPayoutCount": 223,
        "observedRate": 0.1288272674754477,
        "posteriorRate": 0.11928550809646153,
        "lift": 1.382989322566008,
        "averagePayoutYen": 28159.39919121895,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2411159406582533,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2698,
        "highPayoutCount": 347,
        "observedRate": 0.1286137879911045,
        "posteriorRate": 0.12414856053764127,
        "lift": 1.2408131690295603,
        "averagePayoutYen": 172026.10822831726,
        "medianPayoutYen": 44330
      },
      "validation": {
        "count": 1205,
        "highPayoutCount": 138,
        "observedRate": 0.11452282157676348,
        "posteriorRate": 0.1053914385441214,
        "lift": 1.2639165852069079,
        "averagePayoutYen": 173188.53112033196,
        "medianPayoutYen": 41880
      },
      "robustLift": 1.2408131690295603,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 7272,
        "highPayoutCount": 913,
        "observedRate": 0.12555005500550054,
        "posteriorRate": 0.12390982989358686,
        "lift": 1.23842464712537,
        "averagePayoutYen": 6831.67904290429,
        "medianPayoutYen": 2470
      },
      "validation": {
        "count": 2495,
        "highPayoutCount": 305,
        "observedRate": 0.12224448897795591,
        "posteriorRate": 0.11739918029088506,
        "lift": 1.259362879831405,
        "averagePayoutYen": 6760.112224448898,
        "medianPayoutYen": 2470
      },
      "robustLift": 1.23842464712537,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 21335,
        "highPayoutCount": 2655,
        "observedRate": 0.12444340285915163,
        "posteriorRate": 0.12388464552458459,
        "lift": 1.238320539786835,
        "averagePayoutYen": 13868.739161003046,
        "medianPayoutYen": 4760
      },
      "validation": {
        "count": 6776,
        "highPayoutCount": 846,
        "observedRate": 0.12485242030696576,
        "posteriorRate": 0.12256767053905714,
        "lift": 1.33800574386625,
        "averagePayoutYen": 13701.15997638725,
        "medianPayoutYen": 4810
      },
      "robustLift": 1.238320539786835,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 21386,
        "highPayoutCount": 2660,
        "observedRate": 0.12438043579912092,
        "posteriorRate": 0.1238246914892149,
        "lift": 1.2375737259475934,
        "averagePayoutYen": 6926.472926213411,
        "medianPayoutYen": 2450
      },
      "validation": {
        "count": 6761,
        "highPayoutCount": 856,
        "observedRate": 0.12660848986836268,
        "posteriorRate": 0.12430939883916826,
        "lift": 1.3334900816540056,
        "averagePayoutYen": 6929.587339151013,
        "medianPayoutYen": 2540
      },
      "robustLift": 1.2375737259475934,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1289,
        "highPayoutCount": 179,
        "observedRate": 0.13886733902249807,
        "posteriorRate": 0.12801634760036773,
        "lift": 1.2796197436404408,
        "averagePayoutYen": 32948.31652443755,
        "medianPayoutYen": 7130
      },
      "validation": {
        "count": 562,
        "highPayoutCount": 70,
        "observedRate": 0.12455516014234876,
        "posteriorRate": 0.10652162764896957,
        "lift": 1.2350056265153888,
        "averagePayoutYen": 29295.195729537365,
        "medianPayoutYen": 8120
      },
      "robustLift": 1.2350056265153888,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2366,
        "highPayoutCount": 304,
        "observedRate": 0.12848689771766694,
        "posteriorRate": 0.1235245100687571,
        "lift": 1.2347204468051858,
        "averagePayoutYen": 26497.42603550296,
        "medianPayoutYen": 7460
      },
      "validation": {
        "count": 688,
        "highPayoutCount": 90,
        "observedRate": 0.1308139534883721,
        "posteriorRate": 0.11205889609697448,
        "lift": 1.2992043985370474,
        "averagePayoutYen": 24494.6511627907,
        "medianPayoutYen": 8580
      },
      "robustLift": 1.2347204468051858,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 3177,
        "highPayoutCount": 404,
        "observedRate": 0.12716399118665409,
        "posteriorRate": 0.1234759983293603,
        "lift": 1.2342355354583612,
        "averagePayoutYen": 28049.691532892666,
        "medianPayoutYen": 6740
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 169,
        "observedRate": 0.12950191570881225,
        "posteriorRate": 0.11752131222338265,
        "lift": 1.3625353370457376,
        "averagePayoutYen": 27229.946360153255,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.2342355354583612,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 11043,
        "highPayoutCount": 1378,
        "observedRate": 0.1247849316308974,
        "posteriorRate": 0.12372201598526462,
        "lift": 1.234178391006313,
        "averagePayoutYen": 2267.938965860726,
        "medianPayoutYen": 1020
      },
      "validation": {
        "count": 4019,
        "highPayoutCount": 549,
        "observedRate": 0.1366011445633242,
        "posteriorRate": 0.13171839597424112,
        "lift": 1.424431350202588,
        "averagePayoutYen": 2605.260014929087,
        "medianPayoutYen": 1120
      },
      "robustLift": 1.234178391006313,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1805,
        "highPayoutCount": 235,
        "observedRate": 0.13019390581717452,
        "posteriorRate": 0.12369771389063328,
        "lift": 1.2339359675393873,
        "averagePayoutYen": 2272.9639889196674,
        "medianPayoutYen": 1090
      },
      "validation": {
        "count": 632,
        "highPayoutCount": 88,
        "observedRate": 0.13924050632911392,
        "posteriorRate": 0.11858253657914808,
        "lift": 1.2823773129071225,
        "averagePayoutYen": 2351.4398734177216,
        "medianPayoutYen": 1330
      },
      "robustLift": 1.2339359675393873,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 19832,
        "highPayoutCount": 2464,
        "observedRate": 0.12424364663170634,
        "posteriorRate": 0.12365351320666484,
        "lift": 1.2334950473960553,
        "averagePayoutYen": 2225.528438886648,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 6455,
        "highPayoutCount": 769,
        "observedRate": 0.11913245546088304,
        "posteriorRate": 0.11721573420669958,
        "lift": 1.267596415110374,
        "averagePayoutYen": 2316.5143299767624,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.2334950473960553,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 5150,
        "highPayoutCount": 648,
        "observedRate": 0.1258252427184466,
        "posteriorRate": 0.12356163371998401,
        "lift": 1.2325785114332746,
        "averagePayoutYen": 2247.7514563106797,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1985,
        "highPayoutCount": 244,
        "observedRate": 0.12292191435768261,
        "posteriorRate": 0.11679494221633627,
        "lift": 1.263045879108517,
        "averagePayoutYen": 2165.9798488664987,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2325785114332746,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 21769,
        "highPayoutCount": 2691,
        "observedRate": 0.12361615140796546,
        "posteriorRate": 0.12308685774077438,
        "lift": 1.2303460487197628,
        "averagePayoutYen": 13699.174514217466,
        "medianPayoutYen": 4560
      },
      "validation": {
        "count": 7066,
        "highPayoutCount": 876,
        "observedRate": 0.12397395980752901,
        "posteriorRate": 0.12183483622021936,
        "lift": 1.3300057833253112,
        "averagePayoutYen": 14042.431361449193,
        "medianPayoutYen": 4470
      },
      "robustLift": 1.2303460487197628,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 3681,
        "highPayoutCount": 474,
        "observedRate": 0.12876935615321924,
        "posteriorRate": 0.1253339476271955,
        "lift": 1.2528074082314251,
        "averagePayoutYen": 14126.049986416734,
        "medianPayoutYen": 4570
      },
      "validation": {
        "count": 1202,
        "highPayoutCount": 146,
        "observedRate": 0.12146422628951747,
        "posteriorRate": 0.11269234479564028,
        "lift": 1.2302020913277814,
        "averagePayoutYen": 14502.212978369384,
        "medianPayoutYen": 4800
      },
      "robustLift": 1.2302020913277814,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1296,
        "highPayoutCount": 171,
        "observedRate": 0.13194444444444445,
        "posteriorRate": 0.12306631213773762,
        "lift": 1.2299965469040506,
        "averagePayoutYen": 166699.46759259258,
        "medianPayoutYen": 45840
      },
      "validation": {
        "count": 494,
        "highPayoutCount": 63,
        "observedRate": 0.12753036437246965,
        "posteriorRate": 0.10532434881059054,
        "lift": 1.2631120053655265,
        "averagePayoutYen": 148910.26315789475,
        "medianPayoutYen": 50060
      },
      "robustLift": 1.2299965469040506,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3520,
        "highPayoutCount": 443,
        "observedRate": 0.12585227272727273,
        "posteriorRate": 0.12264358157536247,
        "lift": 1.2257690480658212,
        "averagePayoutYen": 6929.809659090909,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 1399,
        "highPayoutCount": 185,
        "observedRate": 0.1322373123659757,
        "posteriorRate": 0.12196447865782029,
        "lift": 1.3083356859824162,
        "averagePayoutYen": 6875.039313795568,
        "medianPayoutYen": 2340
      },
      "robustLift": 1.2257690480658212,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 21789,
        "highPayoutCount": 2679,
        "observedRate": 0.12295194823075864,
        "posteriorRate": 0.12243829682502388,
        "lift": 1.2237173166195217,
        "averagePayoutYen": 6757.630455734545,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 7053,
        "highPayoutCount": 892,
        "observedRate": 0.1264710052459946,
        "posteriorRate": 0.12426989871192913,
        "lift": 1.3330663564297722,
        "averagePayoutYen": 7052.044520062384,
        "medianPayoutYen": 2370
      },
      "robustLift": 1.2237173166195217,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1756,
        "highPayoutCount": 226,
        "observedRate": 0.12870159453302962,
        "posteriorRate": 0.12235243643589395,
        "lift": 1.2228616565109456,
        "averagePayoutYen": 182475.3416856492,
        "medianPayoutYen": 45390
      },
      "validation": {
        "count": 808,
        "highPayoutCount": 106,
        "observedRate": 0.1311881188118812,
        "posteriorRate": 0.1129146809768555,
        "lift": 1.354139766677993,
        "averagePayoutYen": 176134.60396039605,
        "medianPayoutYen": 40600
      },
      "robustLift": 1.2228616565109456,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2311,
        "highPayoutCount": 307,
        "observedRate": 0.13284292514063176,
        "posteriorRate": 0.1270107067233642,
        "lift": 1.2694191284023713,
        "averagePayoutYen": 191036.46040675032,
        "medianPayoutYen": 41840
      },
      "validation": {
        "count": 1060,
        "highPayoutCount": 117,
        "observedRate": 0.11037735849056604,
        "posteriorRate": 0.10172589917803013,
        "lift": 1.219957264957265,
        "averagePayoutYen": 159163.84905660377,
        "medianPayoutYen": 41660
      },
      "robustLift": 1.219957264957265,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 28545,
        "highPayoutCount": 3494,
        "observedRate": 0.12240322298125766,
        "posteriorRate": 0.12201829044093847,
        "lift": 1.219664647993988,
        "averagePayoutYen": 28778.47048519881,
        "medianPayoutYen": 6600
      },
      "validation": {
        "count": 9557,
        "highPayoutCount": 1045,
        "observedRate": 0.10934393638170974,
        "posteriorRate": 0.10819588033839173,
        "lift": 1.2544168159356144,
        "averagePayoutYen": 25387.523281364443,
        "medianPayoutYen": 6550
      },
      "robustLift": 1.219664647993988,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2252,
        "highPayoutCount": 286,
        "observedRate": 0.1269982238010657,
        "posteriorRate": 0.12213780178703114,
        "lift": 1.2183751977378003,
        "averagePayoutYen": 2364.347246891652,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 1028,
        "highPayoutCount": 129,
        "observedRate": 0.1254863813229572,
        "posteriorRate": 0.11468287395785054,
        "lift": 1.2402055141093622,
        "averagePayoutYen": 2449.795719844358,
        "medianPayoutYen": 1010
      },
      "robustLift": 1.2183751977378003,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3595,
        "highPayoutCount": 452,
        "observedRate": 0.12573018080667595,
        "posteriorRate": 0.12261861551108906,
        "lift": 1.2231715139278165,
        "averagePayoutYen": 2131.0598052851183,
        "medianPayoutYen": 900
      },
      "validation": {
        "count": 1412,
        "highPayoutCount": 169,
        "observedRate": 0.11968838526912182,
        "posteriorRate": 0.11257083232614834,
        "lift": 1.2173654370580294,
        "averagePayoutYen": 2177.096317280453,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2173654370580294,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 1295,
        "highPayoutCount": 170,
        "observedRate": 0.13127413127413126,
        "posteriorRate": 0.1225778261464942,
        "lift": 1.225111851265029,
        "averagePayoutYen": 6925.791505791506,
        "medianPayoutYen": 2350
      },
      "validation": {
        "count": 563,
        "highPayoutCount": 74,
        "observedRate": 0.13143872113676733,
        "posteriorRate": 0.11346241295503359,
        "lift": 1.2171324431535686,
        "averagePayoutYen": 6982.6998223801065,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.2171324431535686,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 21821,
        "highPayoutCount": 2667,
        "observedRate": 0.12222171302873379,
        "posteriorRate": 0.12172515105055225,
        "lift": 1.2165922002764065,
        "averagePayoutYen": 188989.9349250722,
        "medianPayoutYen": 38240
      },
      "validation": {
        "count": 9588,
        "highPayoutCount": 992,
        "observedRate": 0.10346266166040885,
        "posteriorRate": 0.10246752604259783,
        "lift": 1.2288512937997473,
        "averagePayoutYen": 163234.94055068836,
        "medianPayoutYen": 34570
      },
      "robustLift": 1.2165922002764065,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 44847,
        "highPayoutCount": 5469,
        "observedRate": 0.12194795638504248,
        "posteriorRate": 0.12170642480995562,
        "lift": 1.2165473162918348,
        "averagePayoutYen": 27908.558209021787,
        "medianPayoutYen": 6700
      },
      "validation": {
        "count": 15641,
        "highPayoutCount": 1788,
        "observedRate": 0.1143149414999041,
        "posteriorRate": 0.11344563339094267,
        "lift": 1.315282150993039,
        "averagePayoutYen": 26132.868103062465,
        "medianPayoutYen": 6760
      },
      "robustLift": 1.2165473162918348,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "distance=sprint",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 13293,
        "highPayoutCount": 1638,
        "observedRate": 0.12322274881516587,
        "posteriorRate": 0.12240992168959416,
        "lift": 1.214382942264107,
        "averagePayoutYen": 395.5976829910479,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 5312,
        "highPayoutCount": 596,
        "observedRate": 0.11219879518072289,
        "posteriorRate": 0.1103012171838915,
        "lift": 1.223647293540861,
        "averagePayoutYen": 382.98381024096386,
        "medianPayoutYen": 250
      },
      "robustLift": 1.214382942264107,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2531,
        "highPayoutCount": 318,
        "observedRate": 0.12564203871987356,
        "posteriorRate": 0.12141908474333812,
        "lift": 1.2136751360642708,
        "averagePayoutYen": 28658.881864875544,
        "medianPayoutYen": 6930
      },
      "validation": {
        "count": 1056,
        "highPayoutCount": 132,
        "observedRate": 0.125,
        "posteriorRate": 0.11254882298406535,
        "lift": 1.304884582697698,
        "averagePayoutYen": 27131.19318181818,
        "medianPayoutYen": 7610
      },
      "robustLift": 1.2136751360642708,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 2770,
        "highPayoutCount": 347,
        "observedRate": 0.1252707581227437,
        "posteriorRate": 0.12141501425057394,
        "lift": 1.2134925120967992,
        "averagePayoutYen": 181652.79422382673,
        "medianPayoutYen": 39660
      },
      "validation": {
        "count": 1406,
        "highPayoutCount": 174,
        "observedRate": 0.12375533428165007,
        "posteriorRate": 0.1131649542065724,
        "lift": 1.35714119155882,
        "averagePayoutYen": 175772.56756756757,
        "medianPayoutYen": 38130
      },
      "robustLift": 1.2134925120967992,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 3511,
        "highPayoutCount": 436,
        "observedRate": 0.12418114497294218,
        "posteriorRate": 0.1211720855221402,
        "lift": 1.211206455130036,
        "averagePayoutYen": 14370.726288806607,
        "medianPayoutYen": 4210
      },
      "validation": {
        "count": 1401,
        "highPayoutCount": 176,
        "observedRate": 0.1256245538900785,
        "posteriorRate": 0.11667668113739071,
        "lift": 1.273696961445741,
        "averagePayoutYen": 13733.433261955746,
        "medianPayoutYen": 4410
      },
      "robustLift": 1.211206455130036,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 32526,
        "highPayoutCount": 3949,
        "observedRate": 0.12141056385660702,
        "posteriorRate": 0.12108706006955301,
        "lift": 1.2103562995569404,
        "averagePayoutYen": 27789.97017770399,
        "medianPayoutYen": 6680
      },
      "validation": {
        "count": 10872,
        "highPayoutCount": 1231,
        "observedRate": 0.11322663723325975,
        "posteriorRate": 0.11204062333478769,
        "lift": 1.298992545182844,
        "averagePayoutYen": 25991.545253863136,
        "medianPayoutYen": 6770
      },
      "robustLift": 1.2103562995569404,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 1292,
        "highPayoutCount": 169,
        "observedRate": 0.13080495356037153,
        "posteriorRate": 0.12222167133331716,
        "lift": 1.2216978575370545,
        "averagePayoutYen": 13860.023219814242,
        "medianPayoutYen": 4570
      },
      "validation": {
        "count": 564,
        "highPayoutCount": 72,
        "observedRate": 0.1276595744680851,
        "posteriorRate": 0.11071651394941706,
        "lift": 1.2086330021093292,
        "averagePayoutYen": 13231.77304964539,
        "medianPayoutYen": 4580
      },
      "robustLift": 1.2086330021093292,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 8720,
        "highPayoutCount": 1072,
        "observedRate": 0.12293577981651377,
        "posteriorRate": 0.12173536332587552,
        "lift": 1.2076909016259407,
        "averagePayoutYen": 397.8761467889908,
        "medianPayoutYen": 250
      },
      "validation": {
        "count": 3922,
        "highPayoutCount": 467,
        "observedRate": 0.11907190209077001,
        "posteriorRate": 0.11580069522224727,
        "lift": 1.2846567872647818,
        "averagePayoutYen": 388.6409994900561,
        "medianPayoutYen": 250
      },
      "robustLift": 1.2076909016259407,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 7254,
        "highPayoutCount": 899,
        "observedRate": 0.12393162393162394,
        "posteriorRate": 0.12239118326403202,
        "lift": 1.2233922572316598,
        "averagePayoutYen": 13598.021781086298,
        "medianPayoutYen": 4830
      },
      "validation": {
        "count": 2500,
        "highPayoutCount": 286,
        "observedRate": 0.1144,
        "posteriorRate": 0.11060079028072659,
        "lift": 1.207369708675358,
        "averagePayoutYen": 13115.088,
        "medianPayoutYen": 4710
      },
      "robustLift": 1.207369708675358,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 24507,
        "highPayoutCount": 2970,
        "observedRate": 0.12118986412045538,
        "posteriorRate": 0.12076726902864705,
        "lift": 1.2070185683147514,
        "averagePayoutYen": 181791.1910882605,
        "medianPayoutYen": 38370
      },
      "validation": {
        "count": 10908,
        "highPayoutCount": 1158,
        "observedRate": 0.10616061606160616,
        "posteriorRate": 0.1051623775173323,
        "lift": 1.2611695496337851,
        "averagePayoutYen": 166836.96828016135,
        "medianPayoutYen": 35570
      },
      "robustLift": 1.2070185683147514,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3096,
        "highPayoutCount": 384,
        "observedRate": 0.12403100775193798,
        "posteriorRate": 0.12069721855755203,
        "lift": 1.206315999541908,
        "averagePayoutYen": 6208.149224806201,
        "medianPayoutYen": 2270
      },
      "validation": {
        "count": 1247,
        "highPayoutCount": 153,
        "observedRate": 0.1226944667201283,
        "posteriorRate": 0.11425904119702388,
        "lift": 1.2256780227266297,
        "averagePayoutYen": 6638.420208500401,
        "medianPayoutYen": 2430
      },
      "robustLift": 1.206315999541908,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 19170,
        "highPayoutCount": 2328,
        "observedRate": 0.12143974960876369,
        "posteriorRate": 0.12090102849608081,
        "lift": 1.2060378715302607,
        "averagePayoutYen": 2248.5206051121545,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 4271,
        "highPayoutCount": 509,
        "observedRate": 0.11917583704050573,
        "posteriorRate": 0.11637716021957568,
        "lift": 1.2585278938314082,
        "averagePayoutYen": 2249.20159213299,
        "medianPayoutYen": 980
      },
      "robustLift": 1.2060378715302607,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 1225,
        "highPayoutCount": 158,
        "observedRate": 0.12897959183673469,
        "posteriorRate": 0.12059547706258383,
        "lift": 1.2052991377230176,
        "averagePayoutYen": 6707.044897959184,
        "medianPayoutYen": 2330
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 82,
        "observedRate": 0.13333333333333333,
        "posteriorRate": 0.11534578024322933,
        "lift": 1.2373356749475695,
        "averagePayoutYen": 6894.715447154472,
        "medianPayoutYen": 2520
      },
      "robustLift": 1.2052991377230176,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 33975,
        "highPayoutCount": 4107,
        "observedRate": 0.12088300220750552,
        "posteriorRate": 0.12058091650759614,
        "lift": 1.2051560524611606,
        "averagePayoutYen": 180067.5378955114,
        "medianPayoutYen": 38290
      },
      "validation": {
        "count": 15698,
        "highPayoutCount": 1696,
        "observedRate": 0.10803924066760097,
        "posteriorRate": 0.10727820735385399,
        "lift": 1.2865438348584415,
        "averagePayoutYen": 165716.67091349215,
        "medianPayoutYen": 35400
      },
      "robustLift": 1.2051560524611606,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 2359,
        "highPayoutCount": 316,
        "observedRate": 0.13395506570580754,
        "posteriorRate": 0.12802421651951884,
        "lift": 1.2796986764172995,
        "averagePayoutYen": 13963.501483679525,
        "medianPayoutYen": 4940
      },
      "validation": {
        "count": 803,
        "highPayoutCount": 98,
        "observedRate": 0.12204234122042341,
        "posteriorRate": 0.11036252558877956,
        "lift": 1.2047687003916603,
        "averagePayoutYen": 13967.260273972603,
        "medianPayoutYen": 4590
      },
      "robustLift": 1.2047687003916603,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 2454,
        "highPayoutCount": 313,
        "observedRate": 0.12754686226568868,
        "posteriorRate": 0.12301965127439822,
        "lift": 1.2204318408906205,
        "averagePayoutYen": 411.0920945395273,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 901,
        "highPayoutCount": 107,
        "observedRate": 0.11875693673695893,
        "posteriorRate": 0.10854437849591533,
        "lift": 1.204157473205099,
        "averagePayoutYen": 370.57713651498335,
        "medianPayoutYen": 220
      },
      "robustLift": 1.204157473205099,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 4348,
        "highPayoutCount": 534,
        "observedRate": 0.12281508739650414,
        "posteriorRate": 0.12048746504082294,
        "lift": 1.201912404646097,
        "averagePayoutYen": 2214.082336706532,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 1468,
        "highPayoutCount": 181,
        "observedRate": 0.12329700272479564,
        "posteriorRate": 0.11546515823556688,
        "lift": 1.2486653062417206,
        "averagePayoutYen": 2177.302452316076,
        "medianPayoutYen": 1150
      },
      "robustLift": 1.201912404646097,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 20558,
        "highPayoutCount": 2485,
        "observedRate": 0.12087751726821676,
        "posteriorRate": 0.1203876545976783,
        "lift": 1.2009167541052868,
        "averagePayoutYen": 2207.1772545967506,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 7847,
        "highPayoutCount": 893,
        "observedRate": 0.11380145278450363,
        "posteriorRate": 0.11252371287978861,
        "lift": 1.2168558771282827,
        "averagePayoutYen": 2202.441697463999,
        "medianPayoutYen": 880
      },
      "robustLift": 1.2009167541052868,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2450,
        "highPayoutCount": 328,
        "observedRate": 0.13387755102040816,
        "posteriorRate": 0.1281773662772575,
        "lift": 1.278622356867621,
        "averagePayoutYen": 2524.4367346938775,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 907,
        "highPayoutCount": 110,
        "observedRate": 0.12127894156560089,
        "posteriorRate": 0.11104152907433947,
        "lift": 1.2008272194481724,
        "averagePayoutYen": 2205.6670341786107,
        "medianPayoutYen": 1050
      },
      "robustLift": 1.2008272194481724,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 7083,
        "highPayoutCount": 861,
        "observedRate": 0.12155866158407455,
        "posteriorRate": 0.12015339977817613,
        "lift": 1.198579965184444,
        "averagePayoutYen": 2177.3034025130596,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 2062,
        "highPayoutCount": 258,
        "observedRate": 0.1251212415130941,
        "posteriorRate": 0.11874919258688355,
        "lift": 1.2841795671811909,
        "averagePayoutYen": 2202.051406401552,
        "medianPayoutYen": 1110
      },
      "robustLift": 1.198579965184444,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 5136,
        "highPayoutCount": 658,
        "observedRate": 0.1281152647975078,
        "posteriorRate": 0.12564287269657728,
        "lift": 1.2533397328777864,
        "averagePayoutYen": 2278.370327102804,
        "medianPayoutYen": 1000
      },
      "validation": {
        "count": 1677,
        "highPayoutCount": 195,
        "observedRate": 0.11627906976744186,
        "posteriorRate": 0.11081094690289188,
        "lift": 1.198333653751609,
        "averagePayoutYen": 2027.9367918902803,
        "medianPayoutYen": 940
      },
      "robustLift": 1.198333653751609,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 2361,
        "highPayoutCount": 293,
        "observedRate": 0.12409995764506565,
        "posteriorRate": 0.11989765743899235,
        "lift": 1.1983247352737074,
        "averagePayoutYen": 6421.817026683609,
        "medianPayoutYen": 2320
      },
      "validation": {
        "count": 690,
        "highPayoutCount": 89,
        "observedRate": 0.1289855072463768,
        "posteriorRate": 0.11395844115226951,
        "lift": 1.2224534300412182,
        "averagePayoutYen": 6596.724637681159,
        "medianPayoutYen": 2650
      },
      "robustLift": 1.1983247352737074,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "surface=芝",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 3105,
        "highPayoutCount": 382,
        "observedRate": 0.12302737520128824,
        "posteriorRate": 0.11983945493184588,
        "lift": 1.197885806514367,
        "averagePayoutYen": 12680.148148148148,
        "medianPayoutYen": 4410
      },
      "validation": {
        "count": 1249,
        "highPayoutCount": 152,
        "observedRate": 0.12169735788630905,
        "posteriorRate": 0.11309455165361908,
        "lift": 1.2345927686069629,
        "averagePayoutYen": 13010.208166533226,
        "medianPayoutYen": 4620
      },
      "robustLift": 1.197885806514367,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 11983,
        "highPayoutCount": 1445,
        "observedRate": 0.12058749895685554,
        "posteriorRate": 0.11976457949668012,
        "lift": 1.197137110888069,
        "averagePayoutYen": 28981.033964783444,
        "medianPayoutYen": 6720
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 504,
        "observedRate": 0.109398741046234,
        "posteriorRate": 0.10713255699299112,
        "lift": 1.2420887062046737,
        "averagePayoutYen": 26173.911439114392,
        "medianPayoutYen": 6590
      },
      "robustLift": 1.197137110888069,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 12066,
        "highPayoutCount": 1455,
        "observedRate": 0.12058677274987568,
        "posteriorRate": 0.11976979133638048,
        "lift": 1.1970467694081874,
        "averagePayoutYen": 6615.813028344108,
        "medianPayoutYen": 2250
      },
      "validation": {
        "count": 3974,
        "highPayoutCount": 477,
        "observedRate": 0.12003019627579266,
        "posteriorRate": 0.1170340958809121,
        "lift": 1.2554465513460962,
        "averagePayoutYen": 6807.108706592853,
        "medianPayoutYen": 2380
      },
      "robustLift": 1.1970467694081874,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 6741,
        "highPayoutCount": 817,
        "observedRate": 0.12119863521732681,
        "posteriorRate": 0.11973777735907443,
        "lift": 1.196869203350517,
        "averagePayoutYen": 28508.635217326806,
        "medianPayoutYen": 6010
      },
      "validation": {
        "count": 2671,
        "highPayoutCount": 304,
        "observedRate": 0.11381505054286783,
        "posteriorRate": 0.10946892732992926,
        "lift": 1.2691764495618338,
        "averagePayoutYen": 24576.91875701984,
        "medianPayoutYen": 6220
      },
      "robustLift": 1.196869203350517,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1203,
        "highPayoutCount": 156,
        "observedRate": 0.12967581047381546,
        "posteriorRate": 0.12097548200649316,
        "lift": 1.209240992839284,
        "averagePayoutYen": 24512.261014131338,
        "medianPayoutYen": 5700
      },
      "validation": {
        "count": 472,
        "highPayoutCount": 57,
        "observedRate": 0.12076271186440678,
        "posteriorRate": 0.10301025572346263,
        "lift": 1.1942949822969218,
        "averagePayoutYen": 22860.741525423728,
        "medianPayoutYen": 6990
      },
      "robustLift": 1.1942949822969218,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 7048,
        "highPayoutCount": 858,
        "observedRate": 0.1217366628830874,
        "posteriorRate": 0.12034976813256125,
        "lift": 1.1939449311652226,
        "averagePayoutYen": 394.60414301929626,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 2405,
        "highPayoutCount": 277,
        "observedRate": 0.11517671517671518,
        "posteriorRate": 0.11086770198718669,
        "lift": 1.2299316992263263,
        "averagePayoutYen": 386.08316008316007,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1939449311652226,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1718,
        "highPayoutCount": 239,
        "observedRate": 0.13911525029103608,
        "posteriorRate": 0.13030714420967443,
        "lift": 1.3025179798804272,
        "averagePayoutYen": 27993.62048894063,
        "medianPayoutYen": 7060
      },
      "validation": {
        "count": 560,
        "highPayoutCount": 66,
        "observedRate": 0.11785714285714285,
        "posteriorRate": 0.10294902694642044,
        "lift": 1.193585099376235,
        "averagePayoutYen": 22992.303571428572,
        "medianPayoutYen": 6450
      },
      "robustLift": 1.193585099376235,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 3178,
        "highPayoutCount": 389,
        "observedRate": 0.1224040276903713,
        "posteriorRate": 0.11936412045386198,
        "lift": 1.1931344796258423,
        "averagePayoutYen": 12695.934550031467,
        "medianPayoutYen": 4250
      },
      "validation": {
        "count": 1306,
        "highPayoutCount": 152,
        "observedRate": 0.11638591117917305,
        "posteriorRate": 0.10952512228249156,
        "lift": 1.1956272161094008,
        "averagePayoutYen": 12803.392036753447,
        "medianPayoutYen": 4520
      },
      "robustLift": 1.1931344796258423,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=10",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1590,
        "highPayoutCount": 201,
        "observedRate": 0.12641509433962264,
        "posteriorRate": 0.12010585926175017,
        "lift": 1.200548458998483,
        "averagePayoutYen": 25598.081761006288,
        "medianPayoutYen": 7320
      },
      "validation": {
        "count": 648,
        "highPayoutCount": 75,
        "observedRate": 0.11574074074074074,
        "posteriorRate": 0.10289718515958682,
        "lift": 1.1929840486803225,
        "averagePayoutYen": 26166.6512345679,
        "medianPayoutYen": 7750
      },
      "robustLift": 1.1929840486803225,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 1222,
        "highPayoutCount": 156,
        "observedRate": 0.1276595744680851,
        "posteriorRate": 0.11964067074872493,
        "lift": 1.1958988085623523,
        "averagePayoutYen": 13105.237315875615,
        "medianPayoutYen": 4520
      },
      "validation": {
        "count": 615,
        "highPayoutCount": 76,
        "observedRate": 0.12357723577235773,
        "posteriorRate": 0.10923979447729126,
        "lift": 1.1925124449746987,
        "averagePayoutYen": 14065.447154471545,
        "medianPayoutYen": 4850
      },
      "robustLift": 1.1925124449746987,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 5993,
        "highPayoutCount": 730,
        "observedRate": 0.12180877690639079,
        "posteriorRate": 0.12019098257578505,
        "lift": 1.1923696791842933,
        "averagePayoutYen": 402.0123477390289,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 1886,
        "highPayoutCount": 225,
        "observedRate": 0.11930010604453871,
        "posteriorRate": 0.113189720986076,
        "lift": 1.2556914536160206,
        "averagePayoutYen": 374.9893955461294,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1923696791842933,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 12043,
        "highPayoutCount": 1446,
        "observedRate": 0.12006975006227684,
        "posteriorRate": 0.11927140516856448,
        "lift": 1.1922077203680672,
        "averagePayoutYen": 13303.387860167732,
        "medianPayoutYen": 4360
      },
      "validation": {
        "count": 3980,
        "highPayoutCount": 450,
        "observedRate": 0.11306532663316583,
        "posteriorRate": 0.11067017206298656,
        "lift": 1.2081271125060358,
        "averagePayoutYen": 13320.062814070352,
        "medianPayoutYen": 4600
      },
      "robustLift": 1.1922077203680672,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1923,
        "highPayoutCount": 239,
        "observedRate": 0.12428497139885596,
        "posteriorRate": 0.11928481081278447,
        "lift": 1.1922020157199218,
        "averagePayoutYen": 163125.70982839313,
        "medianPayoutYen": 41940
      },
      "validation": {
        "count": 912,
        "highPayoutCount": 113,
        "observedRate": 0.12390350877192982,
        "posteriorRate": 0.10955552600405594,
        "lift": 1.3138547896338264,
        "averagePayoutYen": 155743.9802631579,
        "medianPayoutYen": 39360
      },
      "robustLift": 1.1922020157199218,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 134428,
        "highPayoutCount": 16072,
        "observedRate": 0.11955842532805666,
        "posteriorRate": 0.11948686136693577,
        "lift": 1.1919309682587353,
        "averagePayoutYen": 2214.5945785104295,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 46877,
        "highPayoutCount": 5513,
        "observedRate": 0.11760564882565011,
        "posteriorRate": 0.11734038523772285,
        "lift": 1.2689444184405947,
        "averagePayoutYen": 2259.286643769866,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1919309682587353,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=小雨"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 1714,
        "highPayoutCount": 214,
        "observedRate": 0.12485414235705951,
        "posteriorRate": 0.1192534769344883,
        "lift": 1.1918864323992657,
        "averagePayoutYen": 6557.9171528588095,
        "medianPayoutYen": 2280
      },
      "validation": {
        "count": 662,
        "highPayoutCount": 83,
        "observedRate": 0.12537764350453173,
        "posteriorRate": 0.11154091649845156,
        "lift": 1.1965201926663744,
        "averagePayoutYen": 6341.027190332326,
        "medianPayoutYen": 2390
      },
      "robustLift": 1.1918864323992657,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 6859,
        "highPayoutCount": 827,
        "observedRate": 0.12057151188219857,
        "posteriorRate": 0.11917668784577495,
        "lift": 1.1912606913703991,
        "averagePayoutYen": 27978.031783058756,
        "medianPayoutYen": 6550
      },
      "validation": {
        "count": 2618,
        "highPayoutCount": 279,
        "observedRate": 0.10656990068754775,
        "posteriorRate": 0.1033117282114194,
        "lift": 1.197790236989172,
        "averagePayoutYen": 25602.039724980903,
        "medianPayoutYen": 5470
      },
      "robustLift": 1.1912606913703991,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 4890,
        "highPayoutCount": 620,
        "observedRate": 0.12678936605316973,
        "posteriorRate": 0.12430929435981017,
        "lift": 1.242419636655056,
        "averagePayoutYen": 192006.6646216769,
        "medianPayoutYen": 36390
      },
      "validation": {
        "count": 1430,
        "highPayoutCount": 150,
        "observedRate": 0.1048951048951049,
        "posteriorRate": 0.09932248845478082,
        "lift": 1.1911341393206678,
        "averagePayoutYen": 157186.5104895105,
        "medianPayoutYen": 34830
      },
      "robustLift": 1.1911341393206678,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 827,
        "highPayoutCount": 108,
        "observedRate": 0.13059250302297462,
        "posteriorRate": 0.11908598085861097,
        "lift": 1.1902147931176812,
        "averagePayoutYen": 166448.42805320435,
        "medianPayoutYen": 39000
      },
      "validation": {
        "count": 362,
        "highPayoutCount": 44,
        "observedRate": 0.12154696132596685,
        "posteriorRate": 0.09941114004376682,
        "lift": 1.1921973017100629,
        "averagePayoutYen": 145041.3535911602,
        "medianPayoutYen": 43640
      },
      "robustLift": 1.1902147931176812,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 35913,
        "highPayoutCount": 4292,
        "observedRate": 0.11951104057026704,
        "posteriorRate": 0.1192465116996103,
        "lift": 1.1895333807046011,
        "averagePayoutYen": 2246.364269206137,
        "medianPayoutYen": 970
      },
      "validation": {
        "count": 13804,
        "highPayoutCount": 1652,
        "observedRate": 0.11967545638945233,
        "posteriorRate": 0.11872451282211938,
        "lift": 1.2839126748432932,
        "averagePayoutYen": 2272.353665604173,
        "medianPayoutYen": 950
      },
      "robustLift": 1.1895333807046011,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=10",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 1151,
        "highPayoutCount": 148,
        "observedRate": 0.12858384013900956,
        "posteriorRate": 0.12000195670376117,
        "lift": 1.1970692577454967,
        "averagePayoutYen": 2261.5204170286706,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 884,
        "highPayoutCount": 106,
        "observedRate": 0.11990950226244344,
        "posteriorRate": 0.10999669899392747,
        "lift": 1.1895281999667584,
        "averagePayoutYen": 2264.920814479638,
        "medianPayoutYen": 1020
      },
      "robustLift": 1.1895281999667584,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=sprint",
        "going=重"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 902,
        "highPayoutCount": 117,
        "observedRate": 0.12971175166297116,
        "posteriorRate": 0.11913487631909897,
        "lift": 1.1907034828859437,
        "averagePayoutYen": 159211.67405764968,
        "medianPayoutYen": 31800
      },
      "validation": {
        "count": 475,
        "highPayoutCount": 55,
        "observedRate": 0.11578947368421053,
        "posteriorRate": 0.09917169509510461,
        "lift": 1.1893257359924028,
        "averagePayoutYen": 144528,
        "medianPayoutYen": 36290
      },
      "robustLift": 1.1893257359924028,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 2368,
        "highPayoutCount": 291,
        "observedRate": 0.12288851351351351,
        "posteriorRate": 0.1189055910144018,
        "lift": 1.188551131781756,
        "averagePayoutYen": 12847.402871621622,
        "medianPayoutYen": 4480
      },
      "validation": {
        "count": 692,
        "highPayoutCount": 94,
        "observedRate": 0.13583815028901733,
        "posteriorRate": 0.11728386815619107,
        "lift": 1.280325297573717,
        "averagePayoutYen": 12772.182080924855,
        "medianPayoutYen": 5010
      },
      "robustLift": 1.188551131781756,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "going=良",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3175,
        "highPayoutCount": 387,
        "observedRate": 0.12188976377952757,
        "posteriorRate": 0.1189189654239339,
        "lift": 1.1885431359087977,
        "averagePayoutYen": 6306.888188976378,
        "medianPayoutYen": 2190
      },
      "validation": {
        "count": 1305,
        "highPayoutCount": 155,
        "observedRate": 0.11877394636015326,
        "posteriorRate": 0.11169559278182865,
        "lift": 1.1981794339761753,
        "averagePayoutYen": 6476.72030651341,
        "medianPayoutYen": 2420
      },
      "robustLift": 1.1885431359087977,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 85561,
        "highPayoutCount": 10198,
        "observedRate": 0.1191898177908159,
        "posteriorRate": 0.11907976005993318,
        "lift": 1.1878699639819146,
        "averagePayoutYen": 2229.0288799803648,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 28641,
        "highPayoutCount": 3292,
        "observedRate": 0.11494012080583778,
        "posteriorRate": 0.11455459426264011,
        "lift": 1.2388182696162855,
        "averagePayoutYen": 2221.8763311336893,
        "medianPayoutYen": 950
      },
      "robustLift": 1.1878699639819146,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2290,
        "highPayoutCount": 290,
        "observedRate": 0.12663755458515283,
        "posteriorRate": 0.1219079679275662,
        "lift": 1.2160825097257735,
        "averagePayoutYen": 2228.5021834061135,
        "medianPayoutYen": 990
      },
      "validation": {
        "count": 877,
        "highPayoutCount": 105,
        "observedRate": 0.11972633979475485,
        "posteriorRate": 0.10982965243834104,
        "lift": 1.1877217222233825,
        "averagePayoutYen": 2336.374002280502,
        "medianPayoutYen": 910
      },
      "robustLift": 1.1877217222233825,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 15098,
        "highPayoutCount": 1803,
        "observedRate": 0.11941979070075506,
        "posteriorRate": 0.11879864379132311,
        "lift": 1.1874818565175833,
        "averagePayoutYen": 27423.367333421644,
        "medianPayoutYen": 6750
      },
      "validation": {
        "count": 4817,
        "highPayoutCount": 514,
        "observedRate": 0.10670541831015155,
        "posteriorRate": 0.10478201402354818,
        "lift": 1.2148366461611066,
        "averagePayoutYen": 27027.288768943326,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1874818565175833,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=03",
        "class=conditions"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1807,
        "highPayoutCount": 224,
        "observedRate": 0.12396236856668512,
        "posteriorRate": 0.11878070940588503,
        "lift": 1.187163732058006,
        "averagePayoutYen": 161660.04427227448,
        "medianPayoutYen": 42980
      },
      "validation": {
        "count": 694,
        "highPayoutCount": 82,
        "observedRate": 0.11815561959654179,
        "posteriorRate": 0.10359497715052512,
        "lift": 1.2423723556051864,
        "averagePayoutYen": 155058.530259366,
        "medianPayoutYen": 46790
      },
      "robustLift": 1.187163732058006,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1740,
        "highPayoutCount": 216,
        "observedRate": 0.12413793103448276,
        "posteriorRate": 0.11876209669615034,
        "lift": 1.1869777057742528,
        "averagePayoutYen": 161464.1896551724,
        "medianPayoutYen": 35330
      },
      "validation": {
        "count": 852,
        "highPayoutCount": 92,
        "observedRate": 0.107981220657277,
        "posteriorRate": 0.09888491325275665,
        "lift": 1.1858864781941705,
        "averagePayoutYen": 135259.10798122064,
        "medianPayoutYen": 31000
      },
      "robustLift": 1.1858864781941705,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "going=良"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 97494,
        "highPayoutCount": 11592,
        "observedRate": 0.11889962459228261,
        "posteriorRate": 0.11880444956342133,
        "lift": 1.185123627665728,
        "averagePayoutYen": 2202.831251153917,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 32583,
        "highPayoutCount": 3803,
        "observedRate": 0.11671730657091121,
        "posteriorRate": 0.1163508578849438,
        "lift": 1.2582434546704537,
        "averagePayoutYen": 2246.1584261731577,
        "medianPayoutYen": 970
      },
      "robustLift": 1.185123627665728,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 698,
        "highPayoutCount": 99,
        "observedRate": 0.14183381088825214,
        "posteriorRate": 0.12439657479079863,
        "lift": 1.2432919682205616,
        "averagePayoutYen": 214948.85386819486,
        "medianPayoutYen": 42830
      },
      "validation": {
        "count": 347,
        "highPayoutCount": 42,
        "observedRate": 0.12103746397694524,
        "posteriorRate": 0.09881039281904014,
        "lift": 1.184992784992785,
        "averagePayoutYen": 172797.29106628243,
        "medianPayoutYen": 36870
      },
      "robustLift": 1.184992784992785,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=05",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 754,
        "highPayoutCount": 110,
        "observedRate": 0.14588859416445624,
        "posteriorRate": 0.12760864900881808,
        "lift": 1.2755444893703383,
        "averagePayoutYen": 32883.183023872676,
        "medianPayoutYen": 7610
      },
      "validation": {
        "count": 343,
        "highPayoutCount": 43,
        "observedRate": 0.12536443148688048,
        "posteriorRate": 0.1021660362552855,
        "lift": 1.1845071503211617,
        "averagePayoutYen": 28516.00583090379,
        "medianPayoutYen": 7660
      },
      "robustLift": 1.1845071503211617,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 9535,
        "highPayoutCount": 1139,
        "observedRate": 0.11945464079706344,
        "posteriorRate": 0.11848800165414816,
        "lift": 1.1842382399583853,
        "averagePayoutYen": 194892.6586261143,
        "medianPayoutYen": 37580
      },
      "validation": {
        "count": 4624,
        "highPayoutCount": 504,
        "observedRate": 0.10899653979238755,
        "posteriorRate": 0.10649734635396702,
        "lift": 1.2771792870153527,
        "averagePayoutYen": 164609.39013840831,
        "medianPayoutYen": 34260
      },
      "robustLift": 1.1842382399583853,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3283,
        "highPayoutCount": 406,
        "observedRate": 0.12366737739872068,
        "posteriorRate": 0.12057182937296053,
        "lift": 1.2027539738273516,
        "averagePayoutYen": 2166.356990557417,
        "medianPayoutYen": 1120
      },
      "validation": {
        "count": 1073,
        "highPayoutCount": 126,
        "observedRate": 0.11742777260018639,
        "posteriorRate": 0.1094948705706266,
        "lift": 1.1841013183737554,
        "averagePayoutYen": 2289.2637465051257,
        "medianPayoutYen": 1040
      },
      "robustLift": 1.1841013183737554,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3910,
        "highPayoutCount": 472,
        "observedRate": 0.12071611253196932,
        "posteriorRate": 0.1183735142705118,
        "lift": 1.1830915897902936,
        "averagePayoutYen": 6388.739130434783,
        "medianPayoutYen": 2260
      },
      "validation": {
        "count": 1702,
        "highPayoutCount": 212,
        "observedRate": 0.1245593419506463,
        "posteriorRate": 0.11744348091335183,
        "lift": 1.259838100862334,
        "averagePayoutYen": 6670.793184488836,
        "medianPayoutYen": 2500
      },
      "robustLift": 1.1830915897902936,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 11997,
        "highPayoutCount": 1428,
        "observedRate": 0.11902975743935984,
        "posteriorRate": 0.11827008362241373,
        "lift": 1.182198755719712,
        "averagePayoutYen": 13532.57397682754,
        "medianPayoutYen": 4150
      },
      "validation": {
        "count": 4607,
        "highPayoutCount": 523,
        "observedRate": 0.1135228999348817,
        "posteriorRate": 0.11137700623500679,
        "lift": 1.21584324334188,
        "averagePayoutYen": 12930.573041024529,
        "medianPayoutYen": 4050
      },
      "robustLift": 1.182198755719712,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "raceBand=late",
        "going=不良"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 608,
        "highPayoutCount": 81,
        "observedRate": 0.13322368421052633,
        "posteriorRate": 0.1182502218926515,
        "lift": 1.18199996687974,
        "averagePayoutYen": 28539.144736842107,
        "medianPayoutYen": 7910
      },
      "validation": {
        "count": 211,
        "highPayoutCount": 30,
        "observedRate": 0.14218009478672985,
        "posteriorRate": 0.10284946352068308,
        "lift": 1.1924307667426217,
        "averagePayoutYen": 28423.6018957346,
        "medianPayoutYen": 10180
      },
      "robustLift": 1.18199996687974,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "raceBand=middle"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 45255,
        "highPayoutCount": 5370,
        "observedRate": 0.11866092144514419,
        "posteriorRate": 0.11845969250394296,
        "lift": 1.1816845330990362,
        "averagePayoutYen": 2203.918683018451,
        "medianPayoutYen": 980
      },
      "validation": {
        "count": 14442,
        "highPayoutCount": 1600,
        "observedRate": 0.1107879795042238,
        "posteriorRate": 0.11017503891096209,
        "lift": 1.1914568065743452,
        "averagePayoutYen": 2252.7980889073538,
        "medianPayoutYen": 970
      },
      "robustLift": 1.1816845330990362,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "raceBand=late",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 3919,
        "highPayoutCount": 472,
        "observedRate": 0.12043888747129369,
        "posteriorRate": 0.11813107830488896,
        "lift": 1.1808092926502443,
        "averagePayoutYen": 12872.408777749426,
        "medianPayoutYen": 4400
      },
      "validation": {
        "count": 1704,
        "highPayoutCount": 207,
        "observedRate": 0.12147887323943662,
        "posteriorRate": 0.11470162016432839,
        "lift": 1.2521362765210702,
        "averagePayoutYen": 13071.420187793427,
        "medianPayoutYen": 4690
      },
      "robustLift": 1.1808092926502443,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=sprint",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 669,
        "highPayoutCount": 88,
        "observedRate": 0.13153961136023917,
        "posteriorRate": 0.11806778017904562,
        "lift": 1.1801765801051995,
        "averagePayoutYen": 13507.593423019433,
        "medianPayoutYen": 4530
      },
      "validation": {
        "count": 311,
        "highPayoutCount": 47,
        "observedRate": 0.15112540192926044,
        "posteriorRate": 0.1144295571420219,
        "lift": 1.2491663099308696,
        "averagePayoutYen": 16829.581993569132,
        "medianPayoutYen": 5560
      },
      "robustLift": 1.1801765801051995,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 43178,
        "highPayoutCount": 5142,
        "observedRate": 0.11908842466070683,
        "posteriorRate": 0.11887907069610726,
        "lift": 1.1793546932546866,
        "averagePayoutYen": 389.9923572189541,
        "medianPayoutYen": 240
      },
      "validation": {
        "count": 15532,
        "highPayoutCount": 1771,
        "observedRate": 0.11402266288951841,
        "posteriorRate": 0.11327786141921016,
        "lift": 1.256669256084658,
        "averagePayoutYen": 383.801184651043,
        "medianPayoutYen": 240
      },
      "robustLift": 1.1793546932546866,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3951,
        "highPayoutCount": 475,
        "observedRate": 0.120222728423184,
        "posteriorRate": 0.11795713276408831,
        "lift": 1.1789300384379522,
        "averagePayoutYen": 6352.356365477094,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 1730,
        "highPayoutCount": 215,
        "observedRate": 0.12427745664739884,
        "posteriorRate": 0.11731414572699585,
        "lift": 1.2584506982216237,
        "averagePayoutYen": 6619.225433526011,
        "medianPayoutYen": 2490
      },
      "robustLift": 1.1789300384379522,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 3520,
        "highPayoutCount": 424,
        "observedRate": 0.12045454545454545,
        "posteriorRate": 0.11791718820880019,
        "lift": 1.1785331972500395,
        "averagePayoutYen": 179399.38920454544,
        "medianPayoutYen": 40400
      },
      "validation": {
        "count": 1645,
        "highPayoutCount": 179,
        "observedRate": 0.1088145896656535,
        "posteriorRate": 0.10288690103390535,
        "lift": 1.2338806872140204,
        "averagePayoutYen": 165617.60486322187,
        "medianPayoutYen": 37380
      },
      "robustLift": 1.1785331972500395,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 12422,
        "highPayoutCount": 1624,
        "observedRate": 0.1307357913379488,
        "posteriorRate": 0.12955604631774567,
        "lift": 1.2923752617207462,
        "averagePayoutYen": 2396.6205119948477,
        "medianPayoutYen": 1040
      },
      "validation": {
        "count": 5018,
        "highPayoutCount": 555,
        "observedRate": 0.11060183339976086,
        "posteriorRate": 0.10895894008836454,
        "lift": 1.178305649706392,
        "averagePayoutYen": 2175.4025508170585,
        "medianPayoutYen": 970
      },
      "robustLift": 1.178305649706392,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 1070,
        "highPayoutCount": 135,
        "observedRate": 0.1261682242990654,
        "posteriorRate": 0.11784792729748908,
        "lift": 1.177978729620756,
        "averagePayoutYen": 25023.392523364488,
        "medianPayoutYen": 6880
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 73,
        "observedRate": 0.13799621928166353,
        "posteriorRate": 0.11285322503712894,
        "lift": 1.308413802599362,
        "averagePayoutYen": 30496.843100189035,
        "medianPayoutYen": 8860
      },
      "robustLift": 1.177978729620756,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 28560,
        "highPayoutCount": 3374,
        "observedRate": 0.11813725490196078,
        "posteriorRate": 0.1178259199941261,
        "lift": 1.1777590050015678,
        "averagePayoutYen": 13640.78431372549,
        "medianPayoutYen": 4120
      },
      "validation": {
        "count": 9558,
        "highPayoutCount": 1050,
        "observedRate": 0.1098556183301946,
        "posteriorRate": 0.10894833673117714,
        "lift": 1.189330756551643,
        "averagePayoutYen": 12764.961288972589,
        "medianPayoutYen": 4040
      },
      "robustLift": 1.1777590050015678,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5059,
        "highPayoutCount": 605,
        "observedRate": 0.11958885155169005,
        "posteriorRate": 0.11783182165845958,
        "lift": 1.177679994124699,
        "averagePayoutYen": 176648.39098636093,
        "medianPayoutYen": 33990
      },
      "validation": {
        "count": 2677,
        "highPayoutCount": 288,
        "observedRate": 0.10758311542771759,
        "posteriorRate": 0.10377475691461346,
        "lift": 1.2445283810722902,
        "averagePayoutYen": 158547.14979454613,
        "medianPayoutYen": 31350
      },
      "robustLift": 1.177679994124699,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "field=large",
        "class=maiden_debut"
      ],
      "highPayoutThresholdYen": 2130,
      "discovery": {
        "count": 2999,
        "highPayoutCount": 362,
        "observedRate": 0.12070690230076692,
        "posteriorRate": 0.11775301254098391,
        "lift": 1.1771112884749881,
        "averagePayoutYen": 1107.3691230410136,
        "medianPayoutYen": 500
      },
      "validation": {
        "count": 1166,
        "highPayoutCount": 149,
        "observedRate": 0.12778730703259006,
        "posteriorRate": 0.11671457858569972,
        "lift": 1.284087989169339,
        "averagePayoutYen": 1226.114922813036,
        "medianPayoutYen": 510
      },
      "robustLift": 1.1771112884749881,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "weather=晴",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 2530,
        "highPayoutCount": 307,
        "observedRate": 0.12134387351778655,
        "posteriorRate": 0.11783075839371522,
        "lift": 1.1776669817848249,
        "averagePayoutYen": 6258.415019762846,
        "medianPayoutYen": 2230
      },
      "validation": {
        "count": 1055,
        "highPayoutCount": 124,
        "observedRate": 0.11753554502369669,
        "posteriorRate": 0.10971739226443776,
        "lift": 1.1769589084640495,
        "averagePayoutYen": 6091.563981042654,
        "medianPayoutYen": 2350
      },
      "robustLift": 1.1769589084640495,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 3962,
        "highPayoutCount": 475,
        "observedRate": 0.1198889449772842,
        "posteriorRate": 0.11766500112714126,
        "lift": 1.1761504994649636,
        "averagePayoutYen": 12794.162039374054,
        "medianPayoutYen": 4340
      },
      "validation": {
        "count": 1732,
        "highPayoutCount": 207,
        "observedRate": 0.1195150115473441,
        "posteriorRate": 0.11326271095079739,
        "lift": 1.2364284737690137,
        "averagePayoutYen": 12955.098152424942,
        "medianPayoutYen": 4680
      },
      "robustLift": 1.1761504994649636,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "field=large"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 12043,
        "highPayoutCount": 1424,
        "observedRate": 0.118242962716931,
        "posteriorRate": 0.117517914209755,
        "lift": 1.1745402407630763,
        "averagePayoutYen": 6722.00365357469,
        "medianPayoutYen": 2130
      },
      "validation": {
        "count": 4600,
        "highPayoutCount": 546,
        "observedRate": 0.11869565217391305,
        "posteriorRate": 0.11619814607278446,
        "lift": 1.2464791620070084,
        "averagePayoutYen": 6561.210869565218,
        "medianPayoutYen": 2170
      },
      "robustLift": 1.1745402407630763,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3704,
        "highPayoutCount": 444,
        "observedRate": 0.11987041036717062,
        "posteriorRate": 0.11751360559775383,
        "lift": 1.1744971780673907,
        "averagePayoutYen": 6570.847732181425,
        "medianPayoutYen": 2300
      },
      "validation": {
        "count": 1341,
        "highPayoutCount": 175,
        "observedRate": 0.13049962714392244,
        "posteriorRate": 0.12037509232547568,
        "lift": 1.2912860426739479,
        "averagePayoutYen": 7348.337061894109,
        "medianPayoutYen": 2510
      },
      "robustLift": 1.1744971780673907,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "weather=晴"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 28641,
        "highPayoutCount": 3373,
        "observedRate": 0.1177682343493593,
        "posteriorRate": 0.11746430108551378,
        "lift": 1.1740044009953456,
        "averagePayoutYen": 6756.088474564435,
        "medianPayoutYen": 2150
      },
      "validation": {
        "count": 9543,
        "highPayoutCount": 1077,
        "observedRate": 0.11285759195221629,
        "posteriorRate": 0.11187997062343927,
        "lift": 1.2001572894348975,
        "averagePayoutYen": 6450.436969506444,
        "medianPayoutYen": 2150
      },
      "robustLift": 1.1740044009953456,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 616,
        "highPayoutCount": 95,
        "observedRate": 0.15422077922077923,
        "posteriorRate": 0.1299525955191548,
        "lift": 1.298822081959217,
        "averagePayoutYen": 205236.7694805195,
        "medianPayoutYen": 41850
      },
      "validation": {
        "count": 304,
        "highPayoutCount": 37,
        "observedRate": 0.12171052631578948,
        "posteriorRate": 0.09787612278324252,
        "lift": 1.1737884650819974,
        "averagePayoutYen": 157384.44078947368,
        "medianPayoutYen": 32860
      },
      "robustLift": 1.1737884650819974,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 17958,
        "highPayoutCount": 2117,
        "observedRate": 0.11788617886178862,
        "posteriorRate": 0.1174028196910314,
        "lift": 1.1735295440913749,
        "averagePayoutYen": 27668.444147455175,
        "medianPayoutYen": 6410
      },
      "validation": {
        "count": 6288,
        "highPayoutCount": 696,
        "observedRate": 0.11068702290076336,
        "posteriorRate": 0.10888714916959423,
        "lift": 1.2624313470201671,
        "averagePayoutYen": 25668.91062340967,
        "medianPayoutYen": 6410
      },
      "robustLift": 1.1735295440913749,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1112,
        "highPayoutCount": 139,
        "observedRate": 0.125,
        "posteriorRate": 0.1172624668730625,
        "lift": 1.1719895301151988,
        "averagePayoutYen": 166136.79856115108,
        "medianPayoutYen": 39910
      },
      "validation": {
        "count": 620,
        "highPayoutCount": 75,
        "observedRate": 0.12096774193548387,
        "posteriorRate": 0.10418964528368481,
        "lift": 1.2495039682539681,
        "averagePayoutYen": 176520,
        "medianPayoutYen": 42520
      },
      "robustLift": 1.1719895301151988,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "raceBand=late",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 1096,
        "highPayoutCount": 137,
        "observedRate": 0.125,
        "posteriorRate": 0.11718496111087538,
        "lift": 1.1712125199168497,
        "averagePayoutYen": 6605.3923357664235,
        "medianPayoutYen": 2570
      },
      "validation": {
        "count": 357,
        "highPayoutCount": 47,
        "observedRate": 0.13165266106442577,
        "posteriorRate": 0.10923050755099266,
        "lift": 1.171736005430563,
        "averagePayoutYen": 7410.756302521008,
        "medianPayoutYen": 2550
      },
      "robustLift": 1.1712125199168497,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=10",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 1458,
        "highPayoutCount": 179,
        "observedRate": 0.12277091906721536,
        "posteriorRate": 0.11696991654717914,
        "lift": 1.1690656114214344,
        "averagePayoutYen": 152140.5281207133,
        "medianPayoutYen": 36120
      },
      "validation": {
        "count": 699,
        "highPayoutCount": 97,
        "observedRate": 0.13876967095851217,
        "posteriorRate": 0.11567339676207422,
        "lift": 1.3872239211688753,
        "averagePayoutYen": 264158.9556509299,
        "medianPayoutYen": 42870
      },
      "robustLift": 1.1690656114214344,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=不良"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 2445,
        "highPayoutCount": 295,
        "observedRate": 0.12065439672801637,
        "posteriorRate": 0.11715492219254936,
        "lift": 1.1710516220181177,
        "averagePayoutYen": 27073.11247443763,
        "medianPayoutYen": 5800
      },
      "validation": {
        "count": 850,
        "highPayoutCount": 93,
        "observedRate": 0.10941176470588235,
        "posteriorRate": 0.10083405078755976,
        "lift": 1.1690641873906762,
        "averagePayoutYen": 21784.882352941175,
        "medianPayoutYen": 5970
      },
      "robustLift": 1.1690641873906762,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 963,
        "highPayoutCount": 121,
        "observedRate": 0.1256490134994808,
        "posteriorRate": 0.11690163814038056,
        "lift": 1.1683831971755572,
        "averagePayoutYen": 161818.41121495326,
        "medianPayoutYen": 37480
      },
      "validation": {
        "count": 532,
        "highPayoutCount": 71,
        "observedRate": 0.13345864661654136,
        "posteriorRate": 0.10919806464896026,
        "lift": 1.3095679012345678,
        "averagePayoutYen": 195847.03007518797,
        "medianPayoutYen": 48820
      },
      "robustLift": 1.1683831971755572,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 5079,
        "highPayoutCount": 602,
        "observedRate": 0.11852726914746997,
        "posteriorRate": 0.11687169706631242,
        "lift": 1.1680815825717001,
        "averagePayoutYen": 6402.313447529041,
        "medianPayoutYen": 2230
      },
      "validation": {
        "count": 2037,
        "highPayoutCount": 238,
        "observedRate": 0.11683848797250859,
        "posteriorRate": 0.11218389632290135,
        "lift": 1.2034175570379675,
        "averagePayoutYen": 6363.151693667158,
        "medianPayoutYen": 2190
      },
      "robustLift": 1.1680815825717001,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 5054,
        "highPayoutCount": 599,
        "observedRate": 0.1185199841709537,
        "posteriorRate": 0.11685654408661468,
        "lift": 1.1680691082799821,
        "averagePayoutYen": 27883.415116739216,
        "medianPayoutYen": 7020
      },
      "validation": {
        "count": 2043,
        "highPayoutCount": 222,
        "observedRate": 0.10866372980910426,
        "posteriorRate": 0.10425716420102464,
        "lift": 1.2087515674949392,
        "averagePayoutYen": 25569.579050416054,
        "medianPayoutYen": 6600
      },
      "robustLift": 1.1680691082799821,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "field=large",
        "going=重"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 10549,
        "highPayoutCount": 1276,
        "observedRate": 0.12095933263816476,
        "posteriorRate": 0.12004706759567131,
        "lift": 1.1909419526195335,
        "averagePayoutYen": 395.6962745283913,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 4184,
        "highPayoutCount": 448,
        "observedRate": 0.10707456978967496,
        "posteriorRate": 0.10526700987890208,
        "lift": 1.1677993681856587,
        "averagePayoutYen": 374.82074569789677,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1677993681856587,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=05",
        "field=large"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 5346,
        "highPayoutCount": 633,
        "observedRate": 0.11840628507295174,
        "posteriorRate": 0.11683665696191872,
        "lift": 1.1677337373539907,
        "averagePayoutYen": 184887.40179573512,
        "medianPayoutYen": 36250
      },
      "validation": {
        "count": 2626,
        "highPayoutCount": 278,
        "observedRate": 0.10586443259710586,
        "posteriorRate": 0.10226884283996383,
        "lift": 1.2264685670955662,
        "averagePayoutYen": 166719.45925361768,
        "medianPayoutYen": 28750
      },
      "robustLift": 1.1677337373539907,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "distance=mile",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 5065,
        "highPayoutCount": 600,
        "observedRate": 0.11846001974333663,
        "posteriorRate": 0.11680525337453807,
        "lift": 1.167556671742602,
        "averagePayoutYen": 12599.948667324777,
        "medianPayoutYen": 4340
      },
      "validation": {
        "count": 2041,
        "highPayoutCount": 230,
        "observedRate": 0.11268985791278785,
        "posteriorRate": 0.10854087793867759,
        "lift": 1.1848827467105856,
        "averagePayoutYen": 12530.161685448309,
        "medianPayoutYen": 4060
      },
      "robustLift": 1.167556671742602,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 44963,
        "highPayoutCount": 5255,
        "observedRate": 0.11687387407423881,
        "posteriorRate": 0.11668889422020011,
        "lift": 1.1662545479418844,
        "averagePayoutYen": 6631.384471676712,
        "medianPayoutYen": 2160
      },
      "validation": {
        "count": 15627,
        "highPayoutCount": 1823,
        "observedRate": 0.1166570678953094,
        "posteriorRate": 0.11593046102630375,
        "lift": 1.2436076546405304,
        "averagePayoutYen": 6591.846803609138,
        "medianPayoutYen": 2210
      },
      "robustLift": 1.1662545479418844,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 1999,
        "highPayoutCount": 245,
        "observedRate": 0.12256128064032017,
        "posteriorRate": 0.1180581024141485,
        "lift": 1.1799391860039974,
        "averagePayoutYen": 6606.338169084543,
        "medianPayoutYen": 2240
      },
      "validation": {
        "count": 628,
        "highPayoutCount": 76,
        "observedRate": 0.12101910828025478,
        "posteriorRate": 0.10869729164113538,
        "lift": 1.1660160990211148,
        "averagePayoutYen": 6874.490445859873,
        "medianPayoutYen": 2530
      },
      "robustLift": 1.1660160990211148,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "field=large",
        "weather=曇"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 36417,
        "highPayoutCount": 4265,
        "observedRate": 0.11711563280885301,
        "posteriorRate": 0.1168871585046973,
        "lift": 1.1659978546567542,
        "averagePayoutYen": 2143.0364939451356,
        "medianPayoutYen": 960
      },
      "validation": {
        "count": 13775,
        "highPayoutCount": 1652,
        "observedRate": 0.11992740471869329,
        "posteriorRate": 0.11896570447688935,
        "lift": 1.2865209737974406,
        "averagePayoutYen": 2308.7709618874774,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.1659978546567542,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "distance=sprint",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 36149,
        "highPayoutCount": 4257,
        "observedRate": 0.11776259370936955,
        "posteriorRate": 0.1175311754717611,
        "lift": 1.1659827300525862,
        "averagePayoutYen": 387.6945420343578,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 11915,
        "highPayoutCount": 1307,
        "observedRate": 0.10969366344943349,
        "posteriorRate": 0.10890621621206421,
        "lift": 1.2081715879480797,
        "averagePayoutYen": 380.68233319345364,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1659827300525862,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "field=large"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 44872,
        "highPayoutCount": 5241,
        "observedRate": 0.11679889463362453,
        "posteriorRate": 0.11661423862799312,
        "lift": 1.1656473351735126,
        "averagePayoutYen": 13429.22668924942,
        "medianPayoutYen": 4180
      },
      "validation": {
        "count": 15652,
        "highPayoutCount": 1767,
        "observedRate": 0.11289292103245592,
        "posteriorRate": 0.11223392588175951,
        "lift": 1.225197777081033,
        "averagePayoutYen": 13074.723358037312,
        "medianPayoutYen": 4160
      },
      "robustLift": 1.1656473351735126,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "surface=芝",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 65281,
        "highPayoutCount": 7678,
        "observedRate": 0.11761461987408281,
        "posteriorRate": 0.11748681305946357,
        "lift": 1.165542627191411,
        "averagePayoutYen": 386.90874833412477,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 21128,
        "highPayoutCount": 2326,
        "observedRate": 0.1100908746686861,
        "posteriorRate": 0.10962967793012657,
        "lift": 1.2161974465549847,
        "averagePayoutYen": 377.4233244982961,
        "medianPayoutYen": 220
      },
      "robustLift": 1.165542627191411,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "surface=芝",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 6620,
        "highPayoutCount": 780,
        "observedRate": 0.11782477341389729,
        "posteriorRate": 0.11657685364226925,
        "lift": 1.1651347512856634,
        "averagePayoutYen": 6407.910876132931,
        "medianPayoutYen": 2320
      },
      "validation": {
        "count": 2149,
        "highPayoutCount": 264,
        "observedRate": 0.12284783620288506,
        "posteriorRate": 0.11725577386606294,
        "lift": 1.2578245323940307,
        "averagePayoutYen": 6895.579339227547,
        "medianPayoutYen": 2270
      },
      "robustLift": 1.1651347512856634,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "単勝",
      "conditions": [
        "field=large",
        "going=不良"
      ],
      "highPayoutThresholdYen": 2130,
      "discovery": {
        "count": 1997,
        "highPayoutCount": 241,
        "observedRate": 0.12068102153229844,
        "posteriorRate": 0.11654697271962465,
        "lift": 1.165055180037183,
        "averagePayoutYen": 1136.6750125187782,
        "medianPayoutYen": 530
      },
      "validation": {
        "count": 629,
        "highPayoutCount": 88,
        "observedRate": 0.13990461049284578,
        "posteriorRate": 0.11819883784213972,
        "lift": 1.3004177356937507,
        "averagePayoutYen": 1155.7074721780605,
        "medianPayoutYen": 500
      },
      "robustLift": 1.165055180037183,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 17466,
        "highPayoutCount": 2048,
        "observedRate": 0.11725638383144395,
        "posteriorRate": 0.11678299179104473,
        "lift": 1.164958748511996,
        "averagePayoutYen": 2225.5960151150807,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 6087,
        "highPayoutCount": 723,
        "observedRate": 0.11877772301626417,
        "posteriorRate": 0.11678084581867247,
        "lift": 1.2628934376017045,
        "averagePayoutYen": 2221.3799901429275,
        "medianPayoutYen": 940
      },
      "robustLift": 1.164958748511996,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "weather=曇",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 1070,
        "highPayoutCount": 133,
        "observedRate": 0.12429906542056075,
        "posteriorRate": 0.11657403505051231,
        "lift": 1.1652454700710488,
        "averagePayoutYen": 12931.308411214954,
        "medianPayoutYen": 4250
      },
      "validation": {
        "count": 529,
        "highPayoutCount": 64,
        "observedRate": 0.12098298676748583,
        "posteriorRate": 0.10670784338404252,
        "lift": 1.1648724882793013,
        "averagePayoutYen": 14935.973534971645,
        "medianPayoutYen": 5080
      },
      "robustLift": 1.1648724882793013,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 5827,
        "highPayoutCount": 687,
        "observedRate": 0.11789943367084263,
        "posteriorRate": 0.11648826392556628,
        "lift": 1.1643878708903657,
        "averagePayoutYen": 27599.011498198044,
        "medianPayoutYen": 6210
      },
      "validation": {
        "count": 2031,
        "highPayoutCount": 215,
        "observedRate": 0.10585918266863614,
        "posteriorRate": 0.10198576395227407,
        "lift": 1.1824170836047792,
        "averagePayoutYen": 23499.566715903497,
        "medianPayoutYen": 6490
      },
      "robustLift": 1.1643878708903657,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "surface=芝",
        "going=不良"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 368,
        "highPayoutCount": 51,
        "observedRate": 0.13858695652173914,
        "posteriorRate": 0.11639066428499628,
        "lift": 1.1632762262526168,
        "averagePayoutYen": 170213.39673913043,
        "medianPayoutYen": 48300
      },
      "validation": {
        "count": 165,
        "highPayoutCount": 31,
        "observedRate": 0.18787878787878787,
        "posteriorRate": 0.10931188378605562,
        "lift": 1.310932887774993,
        "averagePayoutYen": 269529.51515151514,
        "medianPayoutYen": 41550
      },
      "robustLift": 1.1632762262526168,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "venue=08",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 19287,
        "highPayoutCount": 2268,
        "observedRate": 0.11759216052263183,
        "posteriorRate": 0.11716783998911266,
        "lift": 1.1623782149417408,
        "averagePayoutYen": 385.92679006584746,
        "medianPayoutYen": 220
      },
      "validation": {
        "count": 4267,
        "highPayoutCount": 474,
        "observedRate": 0.11108507147879072,
        "posteriorRate": 0.10888833108302443,
        "lift": 1.2079731759060106,
        "averagePayoutYen": 368.5048043121631,
        "medianPayoutYen": 220
      },
      "robustLift": 1.1623782149417408,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=04",
        "field=large"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 4508,
        "highPayoutCount": 532,
        "observedRate": 0.11801242236024845,
        "posteriorRate": 0.11621829989158505,
        "lift": 1.1616893771867833,
        "averagePayoutYen": 26591.583850931678,
        "medianPayoutYen": 7020
      },
      "validation": {
        "count": 1635,
        "highPayoutCount": 198,
        "observedRate": 0.12110091743119267,
        "posteriorRate": 0.11293956372983872,
        "lift": 1.3094148084386075,
        "averagePayoutYen": 27959.070336391436,
        "medianPayoutYen": 7120
      },
      "robustLift": 1.1616893771867833,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "venue=03"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 4355,
        "highPayoutCount": 514,
        "observedRate": 0.11802525832376579,
        "posteriorRate": 0.11617327412091821,
        "lift": 1.1612393107210708,
        "averagePayoutYen": 24330.183696900116,
        "medianPayoutYen": 6630
      },
      "validation": {
        "count": 1467,
        "highPayoutCount": 156,
        "observedRate": 0.10633946830265849,
        "posteriorRate": 0.10123333429751179,
        "lift": 1.1736934574483078,
        "averagePayoutYen": 23554.512610770278,
        "medianPayoutYen": 6000
      },
      "robustLift": 1.1612393107210708,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=sprint",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 2379,
        "highPayoutCount": 285,
        "observedRate": 0.11979823455233292,
        "posteriorRate": 0.11640265040566505,
        "lift": 1.1611646855450872,
        "averagePayoutYen": 2136.9356872635562,
        "medianPayoutYen": 950
      },
      "validation": {
        "count": 773,
        "highPayoutCount": 103,
        "observedRate": 0.1332470892626132,
        "posteriorRate": 0.11723128940109633,
        "lift": 1.2677646323619838,
        "averagePayoutYen": 2412.35446313066,
        "medianPayoutYen": 1000
      },
      "robustLift": 1.1611646855450872,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "複勝",
      "conditions": [
        "venue=10",
        "field=large"
      ],
      "highPayoutThresholdYen": 690,
      "discovery": {
        "count": 11085,
        "highPayoutCount": 1305,
        "observedRate": 0.11772665764546685,
        "posteriorRate": 0.11699611997104638,
        "lift": 1.160674645019412,
        "averagePayoutYen": 387.4506089309878,
        "medianPayoutYen": 230
      },
      "validation": {
        "count": 4015,
        "highPayoutCount": 477,
        "observedRate": 0.11880448318804483,
        "posteriorRate": 0.11563027115676133,
        "lift": 1.2827661558482812,
        "averagePayoutYen": 394.7098381070984,
        "medianPayoutYen": 230
      },
      "robustLift": 1.160674645019412,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "raceBand=late",
        "going=重"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3662,
        "highPayoutCount": 434,
        "observedRate": 0.11851447296559257,
        "posteriorRate": 0.11631985356028585,
        "lift": 1.1603387526939553,
        "averagePayoutYen": 2151.97160021846,
        "medianPayoutYen": 1050
      },
      "validation": {
        "count": 1846,
        "highPayoutCount": 224,
        "observedRate": 0.12134344528710726,
        "posteriorRate": 0.1151898684601857,
        "lift": 1.2456882628033852,
        "averagePayoutYen": 2276.5059588299023,
        "medianPayoutYen": 1100
      },
      "robustLift": 1.1603387526939553,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "field=large",
        "going=稍重"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 6812,
        "highPayoutCount": 812,
        "observedRate": 0.11920140927774515,
        "posteriorRate": 0.11789212225560135,
        "lift": 1.1782802867911173,
        "averagePayoutYen": 6656.490017615972,
        "medianPayoutYen": 2180
      },
      "validation": {
        "count": 2743,
        "highPayoutCount": 304,
        "observedRate": 0.11082756106452789,
        "posteriorRate": 0.10811302650977513,
        "lift": 1.1597485781015326,
        "averagePayoutYen": 6368.7057965730955,
        "medianPayoutYen": 2020
      },
      "robustLift": 1.1597485781015326,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬連",
      "conditions": [
        "venue=03",
        "field=large"
      ],
      "highPayoutThresholdYen": 12360,
      "discovery": {
        "count": 3676,
        "highPayoutCount": 477,
        "observedRate": 0.12976060935799782,
        "posteriorRate": 0.12620383092264298,
        "lift": 1.2613521857827457,
        "averagePayoutYen": 6886.991294885745,
        "medianPayoutYen": 2340
      },
      "validation": {
        "count": 1199,
        "highPayoutCount": 137,
        "observedRate": 0.11426188490408674,
        "posteriorRate": 0.10806977337916464,
        "lift": 1.159284593710906,
        "averagePayoutYen": 7202.577147623019,
        "medianPayoutYen": 2570
      },
      "robustLift": 1.159284593710906,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "distance=middle",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 53833,
        "highPayoutCount": 6261,
        "observedRate": 0.11630412572214069,
        "posteriorRate": 0.11615635489514495,
        "lift": 1.1587077857405934,
        "averagePayoutYen": 2177.4281574498914,
        "medianPayoutYen": 940
      },
      "validation": {
        "count": 18857,
        "highPayoutCount": 2135,
        "observedRate": 0.11322055470117198,
        "posteriorRate": 0.11268458084453147,
        "lift": 1.2185955382479627,
        "averagePayoutYen": 2222.691308267487,
        "medianPayoutYen": 940
      },
      "robustLift": 1.1587077857405934,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "distance=mile",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 574,
        "highPayoutCount": 82,
        "observedRate": 0.14285714285714285,
        "posteriorRate": 0.12293025754131914,
        "lift": 1.2286367378638816,
        "averagePayoutYen": 197872.24738675958,
        "medianPayoutYen": 37610
      },
      "validation": {
        "count": 294,
        "highPayoutCount": 35,
        "observedRate": 0.11904761904761904,
        "posteriorRate": 0.09658992785607934,
        "lift": 1.1583636533258699,
        "averagePayoutYen": 177530.10204081633,
        "medianPayoutYen": 34150
      },
      "robustLift": 1.1583636533258699,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "surface=ダート",
        "raceBand=late"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 6711,
        "highPayoutCount": 785,
        "observedRate": 0.11697213530025331,
        "posteriorRate": 0.11579825902885285,
        "lift": 1.157490752627006,
        "averagePayoutYen": 25736.644315303234,
        "medianPayoutYen": 6730
      },
      "validation": {
        "count": 2887,
        "highPayoutCount": 334,
        "observedRate": 0.11569102874956702,
        "posteriorRate": 0.111345133912963,
        "lift": 1.2909290808132798,
        "averagePayoutYen": 25496.30758572913,
        "medianPayoutYen": 7760
      },
      "robustLift": 1.157490752627006,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=07",
        "distance=sprint"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 3741,
        "highPayoutCount": 528,
        "observedRate": 0.14113873295910184,
        "posteriorRate": 0.13631766812494922,
        "lift": 1.3598252418730385,
        "averagePayoutYen": 2441.8096765570704,
        "medianPayoutYen": 1080
      },
      "validation": {
        "count": 1268,
        "highPayoutCount": 143,
        "observedRate": 0.11277602523659307,
        "posteriorRate": 0.10703361504954503,
        "lift": 1.1574847664551198,
        "averagePayoutYen": 2144.6214511041007,
        "medianPayoutYen": 960
      },
      "robustLift": 1.1574847664551198,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "馬単",
      "conditions": [
        "venue=09",
        "field=large"
      ],
      "highPayoutThresholdYen": 24650,
      "discovery": {
        "count": 5833,
        "highPayoutCount": 683,
        "observedRate": 0.11709240528030174,
        "posteriorRate": 0.1157462869144646,
        "lift": 1.1569715026693765,
        "averagePayoutYen": 13505.988342190982,
        "medianPayoutYen": 4190
      },
      "validation": {
        "count": 2032,
        "highPayoutCount": 224,
        "observedRate": 0.11023622047244094,
        "posteriorRate": 0.10655701850007099,
        "lift": 1.1632260136405626,
        "averagePayoutYen": 12489.817913385827,
        "medianPayoutYen": 4020
      },
      "robustLift": 1.1569715026693765,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連単",
      "conditions": [
        "venue=06",
        "class=open_graded"
      ],
      "highPayoutThresholdYen": 303680,
      "discovery": {
        "count": 628,
        "highPayoutCount": 82,
        "observedRate": 0.1305732484076433,
        "posteriorRate": 0.1170452984037028,
        "lift": 1.169819021689547,
        "averagePayoutYen": 173216.00318471337,
        "medianPayoutYen": 37650
      },
      "validation": {
        "count": 295,
        "highPayoutCount": 35,
        "observedRate": 0.11864406779661017,
        "posteriorRate": 0.0964684310914805,
        "lift": 1.1569065921267179,
        "averagePayoutYen": 177362.16949152542,
        "medianPayoutYen": 50150
      },
      "robustLift": 1.1569065921267179,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "going=不良",
        "weather=雨"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 820,
        "highPayoutCount": 129,
        "observedRate": 0.1573170731707317,
        "posteriorRate": 0.13562215595231655,
        "lift": 1.3556455225033204,
        "averagePayoutYen": 35435.21951219512,
        "medianPayoutYen": 7650
      },
      "validation": {
        "count": 303,
        "highPayoutCount": 37,
        "observedRate": 0.12211221122112212,
        "posteriorRate": 0.09978327342864966,
        "lift": 1.1568815351057764,
        "averagePayoutYen": 24054.422442244224,
        "medianPayoutYen": 6890
      },
      "robustLift": 1.1568815351057764,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "3連複",
      "conditions": [
        "field=large",
        "weather=曇"
      ],
      "highPayoutThresholdYen": 47330,
      "discovery": {
        "count": 12147,
        "highPayoutCount": 1413,
        "observedRate": 0.11632501852309213,
        "posteriorRate": 0.11568128772491958,
        "lift": 1.1563215364076866,
        "averagePayoutYen": 25511.37894130238,
        "medianPayoutYen": 6590
      },
      "validation": {
        "count": 4595,
        "highPayoutCount": 564,
        "observedRate": 0.12274211099020675,
        "posteriorRate": 0.11916113220082546,
        "lift": 1.381547315582979,
        "averagePayoutYen": 27244.872687704024,
        "medianPayoutYen": 6890
      },
      "robustLift": 1.1563215364076866,
      "usePolicy": "volatility_prior_only"
    },
    {
      "betType": "ワイド",
      "conditions": [
        "venue=06",
        "field=large"
      ],
      "highPayoutThresholdYen": 4270,
      "discovery": {
        "count": 20209,
        "highPayoutCount": 2350,
        "observedRate": 0.11628482359344847,
        "posteriorRate": 0.11589759189327875,
        "lift": 1.1561265175422704,
        "averagePayoutYen": 2183.3781978326488,
        "medianPayoutYen": 900
      },
      "validation": {
        "count": 8006,
        "highPayoutCount": 884,
        "observedRate": 0.11041718710966775,
        "posteriorRate": 0.10936226562515819,
        "lift": 1.1826672996847178,
        "averagePayoutYen": 2190.3959530352236,
        "medianPayoutYen": 910
      },
      "robustLift": 1.1561265175422704,
      "usePolicy": "volatility_prior_only"
    }
  ]
};
