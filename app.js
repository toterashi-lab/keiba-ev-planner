const meetingData = window.KEIBA_REFERENCE_MEETINGS ?? window.KEIBA_MEETINGS ?? { meetings: [] };
const resultData = window.KEIBA_RESULTS ?? { results: [] };
const modelData = window.KEIBA_MODEL_OUTPUTS ?? { status: "blocked", candidates: [] };

const state = {
  date: meetingData.meetings.at(-1)?.date ?? "",
  venueCode: "",
  raceNo: 11,
  view: "summary",
  evMode: "auto",
};

const els = {
  dateTabs: document.querySelector("#date-tabs"),
  venueTabs: document.querySelector("#venue-tabs"),
  raceTabs: document.querySelector("#race-tabs"),
  raceList: document.querySelector("#race-list"),
  raceNumber: document.querySelector("#race-number"),
  raceTitle: document.querySelector("#race-title"),
  raceMeta: document.querySelector("#race-meta"),
  raceCondition: document.querySelector("#race-condition"),
  officialLink: document.querySelector("#official-link"),
  resultLinkSecondary: document.querySelector("#result-link-secondary"),
  resultBadge: document.querySelector("#result-badge"),
  winnerName: document.querySelector("#winner-name"),
  refundCount: document.querySelector("#refund-count"),
  payoutBody: document.querySelector("#payout-body"),
  runnerBody: document.querySelector("#runner-body"),
  runnerCount: document.querySelector("#runner-count"),
  sidebarVenue: document.querySelector("#sidebar-venue"),
  betType: document.querySelector("#bet-type"),
  selection: document.querySelector("#selection"),
  odds: document.querySelector("#odds"),
  probability: document.querySelector("#probability"),
  bankroll: document.querySelector("#bankroll"),
  maxStake: document.querySelector("#max-stake"),
  breakEven: document.querySelector("#break-even"),
  expectedReturn: document.querySelector("#expected-return"),
  edgeValue: document.querySelector("#edge-value"),
  kellyValue: document.querySelector("#kelly-value"),
  edgeBadge: document.querySelector("#edge-badge"),
  strategyGrid: document.querySelector("#strategy-grid"),
  modelStatus: document.querySelector("#model-status"),
  rationaleList: document.querySelector("#rationale-list"),
  qualityRefunds: document.querySelector("#quality-refunds"),
  qualityRunners: document.querySelector("#quality-runners"),
  batchRefunds: document.querySelector("#batch-refunds"),
};

initialize();

function initialize() {
  const meeting = selectedMeeting();
  state.venueCode = meeting?.tracks?.[0]?.venueCode ?? "";
  if (state.date === "2026-07-12") state.venueCode = "FUKUSHIMA";
  bindEvents();
  setEvInputMode();
  renderCoverage();
  renderAll();
  renderStrategies();
}

function renderCoverage() {
  const runnerCount = resultData.runnerCount ?? resultData.results.reduce((sum, race) => sum + (race.runners?.length ?? 0), 0);
  const refundCount = resultData.refundLineCount ?? resultData.results.reduce((sum, race) => sum + (race.refunds?.length ?? 0), 0);
  els.qualityRunners.textContent = `${runnerCount.toLocaleString("ja-JP")}頭`;
  els.qualityRefunds.textContent = `${refundCount.toLocaleString("ja-JP")}件`;
  els.batchRefunds.textContent = refundCount.toLocaleString("ja-JP");
}

function bindEvents() {
  document.querySelectorAll(".view-tabs button").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.querySelectorAll(".view-tabs button").forEach((item) => item.classList.toggle("active", item === button));
      document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel.id === `view-${state.view}`));
    });
  });

  document.querySelectorAll("[data-ev-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.evMode = button.dataset.evMode;
      document.querySelectorAll("[data-ev-mode]").forEach((item) => item.classList.toggle("active", item === button));
      setEvInputMode();
      renderStrategies();
    });
  });

  [els.odds, els.probability, els.bankroll, els.maxStake, els.betType, els.selection].forEach((input) => {
    input.addEventListener("input", renderStrategies);
    input.addEventListener("change", renderStrategies);
  });
}

function renderAll() {
  renderDateTabs();
  renderVenueTabs();
  renderRaceTabs();
  renderRaceList();
  renderRaceHeader();
  renderRunners();
  renderPayouts();
  renderStrategies();
}

function renderDateTabs() {
  els.dateTabs.innerHTML = meetingData.meetings.map((meeting) => {
    const active = meeting.date === state.date ? "active" : "";
    return `<button type="button" class="${active}" data-date="${meeting.date}">
      ${formatDate(meeting.date)}<span>${meeting.weekday}曜・中央競馬</span>
    </button>`;
  }).join("");

  els.dateTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.date = button.dataset.date;
      state.venueCode = selectedMeeting()?.tracks?.[0]?.venueCode ?? "";
      state.raceNo = 11;
      renderAll();
    });
  });
}

function renderVenueTabs() {
  const meeting = selectedMeeting();
  els.venueTabs.innerHTML = (meeting?.tracks ?? []).map((track) => {
    const active = track.venueCode === state.venueCode ? "active" : "";
    return `<button type="button" class="${active}" data-venue="${track.venueCode}">${track.venueName}<small> ${track.meetingName}</small></button>`;
  }).join("");

  els.venueTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.venueCode = button.dataset.venue;
      state.raceNo = 11;
      renderAll();
    });
  });
}

function renderRaceTabs() {
  const track = selectedTrack();
  els.raceTabs.innerHTML = (track?.races ?? []).map((race) => {
    const active = race.no === state.raceNo ? "active" : "";
    return `<button type="button" class="${active}" data-race="${race.no}"><strong>${race.no}R</strong><small>${race.start}</small></button>`;
  }).join("");
  bindRaceButtons(els.raceTabs);
}

function renderRaceList() {
  const track = selectedTrack();
  els.sidebarVenue.textContent = track?.venueName ?? "競馬場";
  els.raceList.innerHTML = (track?.races ?? []).map((race) => {
    const active = race.no === state.raceNo ? "active" : "";
    return `<button type="button" class="${active}" data-race="${race.no}">
      <span class="side-r">${race.no}R</span>
      <span class="side-name"><strong>${escapeHtml(race.name)}</strong><small>${escapeHtml(race.surface)} ${race.distanceM}m</small></span>
      <span class="side-time">${race.start}</span>
    </button>`;
  }).join("");
  bindRaceButtons(els.raceList);
}

function bindRaceButtons(container) {
  container.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.raceNo = Number(button.dataset.race);
      renderRaceTabs();
      renderRaceList();
      renderRaceHeader();
      renderRunners();
      renderPayouts();
      renderStrategies();
    });
  });
}

function renderRaceHeader() {
  const race = selectedRace();
  const track = selectedTrack();
  const result = selectedResult();
  if (!race || !track) return;

  els.raceNumber.textContent = race.no;
  els.raceTitle.textContent = result?.raceTitle || race.name;
  const weather = [result?.weather, result?.turfGoing || result?.dirtGoing].filter(Boolean).join(" / ");
  els.raceMeta.textContent = `${result?.startTime || race.start}発走 / ${result?.course || `${race.surface}${race.distanceM}m`} / ${weather || track.meetingName}`;
  els.raceCondition.textContent = race.condition;
  els.resultBadge.textContent = result ? "結果確定" : "結果未取得";
  els.resultBadge.classList.toggle("missing", !result);
  els.winnerName.textContent = result?.winner || "未取得";
  els.refundCount.textContent = `${result?.refunds?.length ?? 0}件`;
  const url = result?.url || meetingData.sourceUrls?.find((item) => item.includes(state.date.replaceAll("-", "").slice(4))) || "#";
  [els.officialLink, els.resultLinkSecondary].forEach((link) => { link.href = url; });
}

function renderRunners() {
  const runners = selectedResult()?.runners ?? [];
  els.runnerCount.textContent = `${runners.length}頭取得`;
  if (!runners.length) {
    els.runnerBody.innerHTML = `<tr><td colspan="14" class="empty-row">出走馬結果を取得中です</td></tr>`;
    return;
  }
  els.runnerBody.innerHTML = runners.map((runner) => {
    const winner = runner.finishPosition === 1 ? "winner-row" : "";
    const nonFinish = runner.finishPosition === null ? "non-finish" : "";
    const bodyWeight = runner.bodyWeight ? `${runner.bodyWeight}${runner.bodyWeightDelta === null ? "" : `(${runner.bodyWeightDelta >= 0 ? "+" : ""}${runner.bodyWeightDelta})`}` : "--";
    return `<tr class="${winner} ${nonFinish}">
      <td>${escapeHtml(runner.finishText)}</td><td><span class="gate-badge gate-${runner.gateNumber}">${runner.gateNumber ?? "-"}</span></td>
      <td>${runner.horseNumber}</td><td>${escapeHtml(runner.horseName)}</td><td>${escapeHtml(runner.sexAge)}</td>
      <td>${runner.carriedWeight ?? "--"}</td><td>${escapeHtml(runner.jockeyName)}</td><td>${escapeHtml(runner.officialTime || "--")}</td>
      <td>${escapeHtml(runner.margin || "--")}</td><td>${runner.cornerPositions.join("-") || "--"}</td><td>${runner.finalSectional ?? "--"}</td>
      <td>${bodyWeight}</td><td>${escapeHtml(runner.trainerName)}</td><td>${runner.popularity ? `${runner.popularity}人気` : "--"}</td>
    </tr>`;
  }).join("");
}

function renderPayouts() {
  const refunds = selectedResult()?.refunds ?? [];
  if (!refunds.length) {
    els.payoutBody.innerHTML = `<tr><td colspan="4" class="empty-row">払戻データは未取得です</td></tr>`;
    return;
  }
  els.payoutBody.innerHTML = refunds.map((refund) => `<tr>
    <td>${escapeHtml(refund.betType)}</td>
    <td>${escapeHtml(refund.selection)}</td>
    <td>${yen(refund.payoutYen)}</td>
    <td>${refund.popularity ? `${refund.popularity}番人気` : "--"}</td>
  </tr>`).join("");
}

function renderStrategies() {
  const automaticCandidate = state.evMode === "auto" ? selectedAutomaticCandidate() : null;
  if (state.evMode === "auto") {
    applyAutomaticCandidate(automaticCandidate);
    if (!automaticCandidate) {
      renderBlockedAutomaticState();
      return;
    }
  }

  const odds = Number(els.odds.value);
  const probability = Number(els.probability.value) / 100;
  const bankroll = Number(els.bankroll.value) || 0;
  const maxStake = Number(els.maxStake.value) || 0;
  const valid = odds > 1 && probability > 0 && probability < 1;

  if (!valid) {
    els.breakEven.textContent = "--";
    els.expectedReturn.textContent = "--";
    els.edgeValue.textContent = "--";
    els.kellyValue.textContent = "--";
    els.edgeBadge.textContent = "入力待ち";
    els.edgeBadge.className = "decision hold";
    els.strategyGrid.innerHTML = strategyDefinitions().map((strategy) => strategyCard(strategy, null)).join("");
    renderRationale(null, automaticCandidate);
    return;
  }

  const breakEven = 1 / odds;
  const expectedReturn = odds * probability;
  const edge = expectedReturn - 1;
  const fullKelly = Math.max(0, edge / (odds - 1));
  const passes = edge >= 0.08;

  els.breakEven.textContent = percent(breakEven);
  els.expectedReturn.textContent = percent(expectedReturn);
  els.edgeValue.textContent = signedPercent(edge);
  els.edgeValue.className = edge >= 0 ? "positive" : "negative";
  els.kellyValue.textContent = percent(fullKelly);
  els.edgeBadge.textContent = passes ? "期待値基準を通過" : "見送り基準";
  els.edgeBadge.className = `decision ${passes ? "buy" : "reject"}`;

  const calculation = { odds, probability, bankroll, maxStake, edge, expectedReturn, fullKelly, passes };
  els.strategyGrid.innerHTML = strategyDefinitions().map((strategy) => strategyCard(strategy, calculation)).join("");
  renderRationale(calculation, automaticCandidate);
}

function setEvInputMode() {
  const automatic = state.evMode === "auto";
  [els.selection, els.odds, els.probability].forEach((input) => { input.readOnly = automatic; });
  els.betType.disabled = automatic;
  els.modelStatus.textContent = automatic
    ? modelData.status === "ready" ? `自動モデル稼働中 ${modelData.modelVersion ?? ""}` : "30年モデル未学習・自動推奨停止中"
    : "検証専用・入力値は実購入に使用しません";
}

function selectedAutomaticCandidate() {
  const track = selectedTrack();
  return (modelData.candidates ?? []).find((candidate) =>
    candidate.date === state.date && candidate.meetingName === track?.meetingName && candidate.raceNo === state.raceNo
    && candidate.status === "ready" && candidate.oddsObservedAt && candidate.modelVersion && candidate.calibrationStatus === "pass");
}

function applyAutomaticCandidate(candidate) {
  els.betType.value = candidate?.betType ?? "単勝";
  els.selection.value = candidate?.selection ?? "";
  els.odds.value = candidate?.odds ?? "";
  els.probability.value = candidate ? (candidate.probability * 100).toFixed(2) : "";
}

function renderBlockedAutomaticState() {
  els.breakEven.textContent = "--";
  els.expectedReturn.textContent = "--";
  els.edgeValue.textContent = "--";
  els.kellyValue.textContent = "--";
  els.edgeBadge.textContent = "自動判定停止";
  els.edgeBadge.className = "decision reject";
  els.strategyGrid.innerHTML = strategyDefinitions().map((strategy) => strategyCard(strategy, null, "未取得データがあるため生成停止")).join("");
  els.rationaleList.innerHTML = [
    ["取得品質", "先週72レースの結果検査は合格。予測用30年データは蓄積中です。"],
    ["オッズ", "対象時点の全買い目オッズが未取得のためEVを計算しません。"],
    ["モデル確率", "時系列検証と確率校正が未完了のため、勝率を推測で補完しません。"],
    ["結論", "欠損を成功扱いせず、推奨・買い目・購入候補をすべて停止しています。"],
  ].map(([title, body]) => `<li class="blocked"><strong>${title}</strong><br>${body}</li>`).join("");
}

function renderRationale(calculation, candidate) {
  if (!calculation) return;
  const probabilityGap = calculation.probability - (1 / calculation.odds);
  const comments = [
    ["期待値", `モデル確率${percent(calculation.probability)}は損益分岐${percent(1 / calculation.odds)}を${signedPercent(probabilityGap)}上回り、期待回収率は${percent(calculation.expectedReturn)}です。`],
    ["確率品質", candidate ? `モデル${escapeHtml(candidate.modelVersion)}、校正検査${escapeHtml(candidate.calibrationStatus)}。校正不合格の候補は自動除外します。` : "検証入力値です。自動モデルの確率校正結果ではありません。"],
    ["市場補正", calculation.odds >= 10 ? "高オッズ帯は人気薄の過大評価が起き得るため、通常より厳しい確率校正と標本数を要求します。" : "市場オッズを基準値として比較し、モデル差が8%未満なら見送ります。"],
    ["資金管理", `完全Kellyは${percent(calculation.fullKelly)}。推定誤差を抑えるため実配分は1/8・1/4・1/2 Kellyに縮小します。`],
    ["時点整合", candidate ? `オッズ観測時刻${escapeHtml(candidate.oddsObservedAt)}以前の特徴量だけで計算します。` : "検証入力モードのため、予測時点の整合性は保証されません。"],
    ["判定", calculation.passes ? "EV差8%以上を通過。上限額と100円単位を適用して候補化します。" : "EV差8%未満のため、自動買い目には採用しません。"],
  ];
  els.rationaleList.innerHTML = comments.map(([title, body]) => `<li><strong>${title}</strong><br>${body}</li>`).join("");
}

function strategyDefinitions() {
  return [
    { name: "保守型", fraction: 0.125, note: "1/8 Kelly" },
    { name: "標準型", fraction: 0.25, note: "1/4 Kelly" },
    { name: "積極型", fraction: 0.5, note: "1/2 Kelly" },
  ];
}

function strategyCard(strategy, calculation, emptyReason = "オッズ・確率入力待ち") {
  if (!calculation) {
    return `<article class="strategy-card"><header><strong>${strategy.name}</strong><span>${strategy.note}</span></header>
      <dl><div><dt>推奨額</dt><dd>--</dd></div><div><dt>期待利益</dt><dd>--</dd></div><div><dt>資金比率</dt><dd>--</dd></div></dl>
      <footer class="reject">${emptyReason}</footer></article>`;
  }

  const rawStake = calculation.bankroll * calculation.fullKelly * strategy.fraction;
  const stake = calculation.passes ? Math.min(calculation.maxStake, roundHundred(rawStake)) : 0;
  const expectedProfit = stake * calculation.edge;
  const allocation = calculation.bankroll > 0 ? stake / calculation.bankroll : 0;
  const selection = els.selection.value.trim() || "買い目未入力";
  const status = stake >= 100 ? `${els.betType.value} ${escapeHtml(selection)}・候補` : "見送り";
  return `<article class="strategy-card"><header><strong>${strategy.name}</strong><span>${strategy.note}</span></header>
    <dl><div><dt>推奨額</dt><dd>${yen(stake)}</dd></div><div><dt>期待利益</dt><dd>${yen(Math.round(expectedProfit))}</dd></div><div><dt>資金比率</dt><dd>${percent(allocation)}</dd></div></dl>
    <footer class="${stake >= 100 ? "" : "reject"}">${status}</footer></article>`;
}

function selectedMeeting() {
  return meetingData.meetings.find((meeting) => meeting.date === state.date);
}

function selectedTrack() {
  return selectedMeeting()?.tracks?.find((track) => track.venueCode === state.venueCode);
}

function selectedRace() {
  return selectedTrack()?.races?.find((race) => race.no === state.raceNo);
}

function selectedResult() {
  const meetingName = selectedTrack()?.meetingName;
  return resultData.results.find((result) => result.meetingName === meetingName && result.raceNo === state.raceNo);
}

function formatDate(value) {
  const date = new Date(`${value}T00:00:00+09:00`);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

function roundHundred(value) {
  return Math.floor(Math.max(0, value) / 100) * 100;
}

function percent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function signedPercent(value) {
  return `${value >= 0 ? "+" : ""}${(value * 100).toFixed(1)}%`;
}

function yen(value) {
  return `${Number(value || 0).toLocaleString("ja-JP")}円`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}
