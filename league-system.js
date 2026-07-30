(function attachLeagueSystem(root) {
  const STARTING_FUNDS_YEN = 1_000_000;
  const STATES = Object.freeze(["normal", "happy", "defeat", "angry", "awakened"]);
  const PERSONAS = Object.freeze({
    safety: {
      displayName: "ミドリ", title: "しっかり派 セーフティ", epithet: "鉄壁の本命守護者", color: "#35d58a",
      personality: "冷静で面倒見がよく、無茶な勝負を止めるまとめ役。", style: "能力と安定性を重ね、崩れにくい馬から組み立てる。",
      strength: "人気上位・能力差が明確・安定した先行馬", weakness: "新馬・極端な道悪・人気薄中心の乱戦",
      ultimate: "鉄壁フォーメーション", metric: "安定度", shortLine: "まずは崩れにくさを見ます。",
      winLine: "予定どおりです。次も丁寧にいきましょう。", loseLine: "安全策が裏目でした。条件を見直します。",
    },
    sniper: {
      displayName: "レナ", title: "穴狙い スナイパー", epithet: "一撃必倒の穴馬ハンター", color: "#ff6573",
      personality: "強気で大胆。人気よりも狙う理由を優先する勝負師。", style: "人気落ち、条件替わり、前走不利から見落とされた馬を探す。",
      strength: "人気落ち・条件替わり・前走不利", weakness: "人気通りの堅い決着・根拠の薄い高配当狙い",
      ultimate: "ロングショット・ブレイク", metric: "お宝度", shortLine: "人気はなくても、狙う理由はあるわ。",
      winLine: "見つけた。こういう一撃を待ってたのよ。", loseLine: "狙いは悪くない。照準を一段だけ直すわ。",
    },
    pace: {
      displayName: "ナギ", title: "流れ読み ペースメーカー", epithet: "蒼風のレースナビゲーター", color: "#58a3ff",
      personality: "明るく話好き。レース全体の流れを図で説明する。", style: "脚質、枠、逃げ候補から隊列と有利な位置を読む。",
      strength: "脚質が明確・多頭数・コース傾向が出る日", weakness: "新馬・脚質不明・少頭数の特殊展開",
      ultimate: "ブルー・ペースシフト", metric: "展開ボーナス", shortLine: "この並びなら、前が少し忙しくなるよ。",
      winLine: "ほら、流れがぴったりはまった！", loseLine: "隊列が逆だったね。次はスタートを重く見るよ。",
    },
    analyst: {
      displayName: "リカ", title: "数字読み アナリスト", epithet: "数式で戦うデータ参謀", color: "#ad86ff",
      personality: "無口で正確。数字以外には少し不器用な研究者。", style: "校正済み確率、データ量、誤差、条件別実績を比較する。",
      strength: "データ量が多い条件・同コース・同距離", weakness: "サンプル不足・初条件・オッズ鮮度不足",
      ultimate: "カリブレーション・オーバードライブ", metric: "解析精度", shortLine: "誤差を含めても、この選択が優位です。",
      winLine: "計算範囲内です。再現性を確認します。", loseLine: "予測誤差が拡大しました。原因を分解します。",
    },
    contrarian: {
      displayName: "ミカ", title: "別目線 コントラリアン", epithet: "常識を疑う逆張りクイーン", color: "#f3c44f",
      personality: "皮肉屋で観察力が高い。違う結論を出すこと自体は目的にしない。", style: "人気集中と意見の偏りを疑い、値段が残る別候補を探す。",
      strength: "人気集中・意見割れ・オッズ変動", weakness: "能力根拠のない人気薄・全指標一致の堅い本命",
      ultimate: "コンセンサス・リバーサル", metric: "逆転度", shortLine: "みんな同じ？ なら値段を確認しましょう。",
      winLine: "多数決だけでは、見えないものもあるの。", loseLine: "今回は人気側が正解。逆らう場面ではなかったわね。",
    },
  });

  function derive(replayAudit = {}) {
    const records = [...(replayAudit.records || [])].sort(compareRecords);
    const current = standingsFromRecords(records);
    const latestDate = records.at(-1)?.date || "";
    const previous = standingsFromRecords(records.filter((record) => record.date !== latestDate));
    const previousRanks = new Map(previous.map((row) => [row.agentId, row.rank]));
    const standings = current.map((row) => ({ ...row, rankDelta: (previousRanks.get(row.agentId) || row.rank) - row.rank }));
    const latestRecord = records.at(-1) || null;
    const roundHistory = buildRoundHistory(records);
    const winningStreak = [...standings].sort((left, right) => right.streak - left.streak || left.rank - right.rank)[0] || null;
    const losingStreak = [...standings].sort((left, right) => left.streak - right.streak || left.rank - right.rank)[0] || null;
    return {
      id: "2026", name: "2026 AI FORECAST LEAGUE", round: records.length || 1, latestDate,
      standings, latestRecord, drama: raceDrama(latestRecord), totalRaces: records.length,
      roundHistory, rivalry: standings.slice(0, 2), winningStreak, losingStreak,
    };
  }

  function buildRoundHistory(records) {
    let previousRanks = new Map();
    return records.map((record, index) => {
      const standings = standingsFromRecords(records.slice(0, index + 1));
      const ranked = standings.map((row) => ({
        ...row,
        rankDelta: (previousRanks.get(row.agentId) || row.rank) - row.rank,
      }));
      previousRanks = new Map(ranked.map((row) => [row.agentId, row.rank]));
      return {
        round: index + 1,
        date: record.date,
        raceId: record.raceId,
        meetingName: record.meetingName || record.venueName || "開催",
        raceNo: Number(record.raceNo) || 0,
        raceTitle: record.raceTitle || "レース",
        standings: ranked,
        drama: raceDrama(record),
      };
    });
  }

  function standingsFromRecords(records) {
    const rows = Object.keys(PERSONAS).map((agentId) => {
      const groups = records.flatMap((record) => (record.agentTickets || [])
        .filter((group) => group.agentId === agentId && group.status === "available")
        .map((group) => ({ ...group, date: record.date, raceId: record.raceId })));
      const tickets = groups.flatMap((group) => group.tickets || []);
      const investmentYen = sum(tickets, "investmentYen");
      const payoutYen = sum(tickets, "payoutYen");
      const netYen = payoutYen - investmentYen;
      const raceHits = groups.filter((group) => (group.tickets || []).some((ticket) => ticket.hit)).length;
      const recentGroups = groups.slice(-6);
      const recentTickets = recentGroups.flatMap((group) => group.tickets || []);
      const recentInvestment = sum(recentTickets, "investmentYen");
      const recentRecovery = recentInvestment ? sum(recentTickets, "payoutYen") / recentInvestment : 0;
      const recoveryRate = investmentYen ? payoutYen / investmentYen : 0;
      const streak = resultStreak(groups);
      const state = recentGroups.length >= 3 && recentRecovery > recoveryRate + .2 ? "awakened"
        : streak >= 1 ? "happy" : streak <= -3 ? "angry" : streak < 0 ? "defeat" : "normal";
      return { agentId, races: groups.length, raceHits, hitRate: groups.length ? raceHits / groups.length : 0,
        investmentYen, payoutYen, netYen, recoveryRate, recentRecovery, streak, state,
        virtualFundsYen: STARTING_FUNDS_YEN + netYen };
    }).sort((left, right) => right.virtualFundsYen - left.virtualFundsYen || right.hitRate - left.hitRate);
    return rows.map((row, index) => ({ ...row, rank: index + 1 }));
  }

  function resultStreak(groups) {
    let count = 0;
    let direction = 0;
    for (const group of [...groups].reverse()) {
      const net = sum(group.tickets || [], "payoutYen") - sum(group.tickets || [], "investmentYen");
      const current = net >= 0 ? 1 : -1;
      if (!direction) direction = current;
      if (current !== direction) break;
      count += current;
    }
    return count;
  }

  function raceDrama(record) {
    if (!record) return null;
    const rows = (record.agentTickets || []).filter((group) => group.status === "available").map((group) => {
      const investmentYen = sum(group.tickets || [], "investmentYen");
      const payoutYen = sum(group.tickets || [], "payoutYen");
      const agent = (record.agents || []).find((row) => row.agentId === group.agentId);
      return { agentId: group.agentId, investmentYen, payoutYen, netYen: payoutYen - investmentYen,
        hit: (group.tickets || []).some((ticket) => ticket.hit), topPickFinish: Number(agent?.topPickFinish) || null };
    });
    const mvp = [...rows].sort((a, b) => b.netYen - a.netYen || (a.topPickFinish || 99) - (b.topPickFinish || 99))[0] || null;
    const culprit = [...rows].sort((a, b) => a.netYen - b.netYen || (b.topPickFinish || 0) - (a.topPickFinish || 0))[0] || null;
    const jinx = [...rows].filter((row) => !row.hit).sort((a, b) => a.netYen - b.netYen)[0] || culprit;
    const awakened = [...rows].filter((row) => row.hit).sort((a, b) => (a.topPickFinish || 99) - (b.topPickFinish || 99) || b.netYen - a.netYen)[0] || mvp;
    return { rows, mvp, culprit, jinx, awakened };
  }

  function meetingDialogue(prediction = {}, agents = new Map()) {
    const lines = Object.keys(PERSONAS).map((agentId) => {
      const persona = PERSONAS[agentId];
      const agent = agents.get ? agents.get(agentId) : agents[agentId];
      const pick = agent?.marks?.[0];
      return { agentId, speaker: persona.displayName, horseNumber: pick?.horseNumber || null,
        horseName: pick?.horseName || "選定中", text: pick ? dialogueText(agentId, pick) : "データを確認しています。" };
    });
    const groups = new Map();
    for (const line of lines) {
      const key = Number(line.horseNumber) || 0;
      groups.set(key, [...(groups.get(key) || []), line.agentId]);
    }
    const conflict = [...groups.entries()].filter(([key]) => key > 0).sort((a, b) => b[1].length - a[1].length);
    return { lines, agreementHorse: conflict[0]?.[0] || null, agreementCount: conflict[0]?.[1].length || 0,
      split: conflict.length > 1 && (conflict[0]?.[1].length || 0) < 3 };
  }

  function dialogueText(agentId, pick) {
    const horse = `${pick.horseNumber}番${pick.horseName}`;
    if (agentId === "safety") return `${horse}。まずは崩れにくさを評価します。`;
    if (agentId === "sniper") return `${horse}。人気より走れる理由を優先するわ。`;
    if (agentId === "pace") return `${horse}。この並びなら流れが向きそうだよ。`;
    if (agentId === "analyst") return `${horse}。誤差を含めても上位評価です。`;
    return `${horse}。評価が集まりすぎていないかまで確認するわ。`;
  }

  function raceSlug(date, venueCode, raceNo) {
    return `${date}-${String(venueCode).padStart(2, "0")}-${String(raceNo).padStart(2, "0")}`;
  }

  function resultComment(agentId, won) {
    const persona = PERSONAS[agentId];
    return won ? persona?.winLine : persona?.loseLine;
  }

  function characterImage(agentId, state = "normal") {
    const safeState = STATES.includes(state) ? state : "normal";
    return `assets/characters/${agentId}-${safeState}.webp`;
  }

  function compareRecords(left, right) {
    return String(left.date).localeCompare(String(right.date)) || Number(left.raceNo) - Number(right.raceNo)
      || String(left.raceId).localeCompare(String(right.raceId));
  }
  function sum(rows, key) { return rows.reduce((total, row) => total + Number(row?.[key] || 0), 0); }

  root.UMAYOMI_LEAGUE = Object.freeze({ STARTING_FUNDS_YEN, STATES, PERSONAS, derive, standingsFromRecords, buildRoundHistory,
    raceDrama, meetingDialogue, raceSlug, resultComment, characterImage });
}(typeof window !== "undefined" ? window : globalThis));
