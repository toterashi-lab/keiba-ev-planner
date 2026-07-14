const meetingData = window.KEIBA_REFERENCE_MEETINGS ?? window.KEIBA_MEETINGS ?? { meetings: [] };
const resultData = window.KEIBA_RESULTS ?? { results: [] };
const modelData = window.KEIBA_MODEL_OUTPUTS ?? { status: "blocked", candidates: [] };
const databaseData = window.KEIBA_DATABASE_STATUS ?? {};
const closingOddsData = window.KEIBA_CLOSING_ODDS ?? { races: [], quality: [] };

const state = {
  date: meetingData.meetings.at(-1)?.date ?? "",
  venueCode: "",
  raceNo: 11,
  view: "summary",
  evMode: "auto",
  kellyFraction: 0.25,
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
  headerStatusText: document.querySelector("#header-status-text"),
  sourceDbCount: document.querySelector("#source-db-count"),
  qualityOdds: document.querySelector("#quality-odds"),
  qualityOddsNote: document.querySelector("#quality-odds-note"),
  warehouseStatus: document.querySelector("#warehouse-status"),
  dbMonths: document.querySelector("#db-months"),
  dbRaces: document.querySelector("#db-races"),
  dbRunners: document.querySelector("#db-runners"),
  dbPayouts: document.querySelector("#db-payouts"),
  dbRawPages: document.querySelector("#db-raw-pages"),
  dbProgressLabel: document.querySelector("#db-progress-label"),
  dbProgressBar: document.querySelector("#db-progress-bar"),
  dbUpdatedAt: document.querySelector("#db-updated-at"),
  progressTrack: document.querySelector(".progress-track"),
  marketWeight: document.querySelector("#market-weight"),
  marketWeightOutput: document.querySelector("#market-weight-output"),
  uncertainty: document.querySelector("#uncertainty"),
};

initialize();

function initialize() {
  const meeting = selectedMeeting();
  state.venueCode = meeting?.tracks?.[0]?.venueCode ?? "";
  if (state.date === "2026-07-12") state.venueCode = "FUKUSHIMA";
  bindEvents();
  setEvInputMode();
  renderCoverage();
  renderDatabaseStatus();
  renderAll();
  renderStrategies();
}

function renderCoverage() {
  const runnerCount = resultData.runnerCount ?? resultData.results.reduce((sum, race) => sum + (race.runners?.length ?? 0), 0);
  const refundCount = resultData.refundLineCount ?? resultData.results.reduce((sum, race) => sum + (race.refunds?.length ?? 0), 0);
  els.qualityRunners.textContent = `${runnerCount.toLocaleString("ja-JP")}頭`;
  els.qualityRefunds.textContent = `${refundCount.toLocaleString("ja-JP")}件`;
  els.batchRefunds.textContent = refundCount.toLocaleString("ja-JP");
  els.qualityOdds.textContent = `${closingOddsData.raceCount ?? 0} / 72`;
  els.qualityOddsNote.textContent = closingOddsData.quality?.every((check) => check.status === "pass")
    ? `${(closingOddsData.snapshotCount ?? 0).toLocaleString("ja-JP")}件・検査合格`
    : "品質検査未合格";
}

function renderDatabaseStatus() {
  if (!databaseData.totalMonths) return;
  const percentValue = Math.max(0, Math.min(100, databaseData.progressPercent ?? 0));
  els.headerStatusText.textContent = `${databaseData.completeMonths}/${databaseData.totalMonths}か月・${number(databaseData.races)}レース`;
  els.sourceDbCount.textContent = `長期DB ${number(databaseData.runners)}頭`;
  els.warehouseStatus.textContent = databaseData.integrityStatus === "pass" ? "全監査合格" : "監査要確認";
  els.dbMonths.textContent = `${databaseData.completeMonths} / ${databaseData.totalMonths}`;
  els.dbRaces.textContent = number(databaseData.races);
  els.dbRunners.textContent = number(databaseData.runners);
  els.dbPayouts.textContent = number(databaseData.payouts);
  els.dbRawPages.textContent = number(databaseData.rawPages);
  els.dbProgressLabel.textContent = `${percentValue.toFixed(1)}%・処理中${databaseData.runningMonths}・待機${databaseData.queuedMonths}・再検査${databaseData.failedMonths}`;
  els.dbProgressBar.style.width = `${percentValue}%`;
  els.progressTrack.setAttribute("aria-valuenow", percentValue.toFixed(1));
  els.dbUpdatedAt.textContent = `公開集計 ${formatTimestamp(databaseData.asOf)} / 完成月 ${databaseData.earliestComplete}〜${databaseData.latestComplete}`;
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

  [els.odds, els.probability, els.bankroll, els.maxStake, els.betType, els.selection, els.marketWeight, els.uncertainty].forEach((input) => {
    input.addEventListener("input", renderStrategies);
    input.addEventListener("change", renderStrategies);
  });

  document.querySelectorAll("[data-kelly-fraction]").forEach((button) => {
    button.addEventListener("click", () => {
      state.kellyFraction = Number(button.dataset.kellyFraction);
      document.querySelectorAll("[data-kelly-fraction]").forEach((item) => item.classList.toggle("active", item === button));
      renderStrategies();
    });
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
  const oddsRace = selectedOddsRace();
  const prices = new Map((oddsRace?.prices ?? []).map((price) => [price.horseNumber, price]));
  els.runnerCount.textContent = `${runners.length}頭取得`;
  if (!runners.length) {
    els.runnerBody.innerHTML = `<tr><td colspan="16" class="empty-row">出走馬結果を取得中です</td></tr>`;
    return;
  }
  els.runnerBody.innerHTML = runners.map((runner) => {
    const winner = runner.finishPosition === 1 ? "winner-row" : "";
    const nonFinish = runner.finishPosition === null ? "non-finish" : "";
    const bodyWeight = runner.bodyWeight ? `${runner.bodyWeight}${runner.bodyWeightDelta === null ? "" : `(${runner.bodyWeightDelta >= 0 ? "+" : ""}${runner.bodyWeightDelta})`}` : "--";
    const price = prices.get(runner.horseNumber);
    const winOdds = price?.win ? `<button type="button" class="odds-pick" data-horse-number="${runner.horseNumber}" data-horse-name="${escapeHtml(runner.horseName)}" data-odds="${price.win}">${price.win.toFixed(1)}</button>` : "--";
    const placeOdds = price?.placeLow ? `${price.placeLow.toFixed(1)}–${price.placeHigh.toFixed(1)}` : "--";
    return `<tr class="${winner} ${nonFinish}">
      <td>${escapeHtml(runner.finishText)}</td><td><span class="gate-badge gate-${runner.gateNumber}">${runner.gateNumber ?? "-"}</span></td>
      <td>${runner.horseNumber}</td><td>${escapeHtml(runner.horseName)}</td><td class="market-price">${winOdds}</td><td class="market-price">${placeOdds}</td><td>${escapeHtml(runner.sexAge)}</td>
      <td>${runner.carriedWeight ?? "--"}</td><td>${escapeHtml(runner.jockeyName)}</td><td>${escapeHtml(runner.officialTime || "--")}</td>
      <td>${escapeHtml(runner.margin || "--")}</td><td>${runner.cornerPositions.join("-") || "--"}</td><td>${runner.finalSectional ?? "--"}</td>
      <td>${bodyWeight}</td><td>${escapeHtml(runner.trainerName)}</td><td>${runner.popularity ? `${runner.popularity}人気` : "--"}</td>
    </tr>`;
  }).join("");
  els.runnerBody.querySelectorAll(".odds-pick").forEach((button) => {
    button.addEventListener("click", () => {
      state.evMode = "manual";
      document.querySelectorAll("[data-ev-mode]").forEach((item) => item.classList.toggle("active", item.dataset.evMode === "manual"));
      setEvInputMode();
      els.betType.value = "単勝";
      els.selection.value = `${button.dataset.horseNumber} ${button.dataset.horseName}`;
      els.odds.value = button.dataset.odds;
      state.view = "expectancy";
      document.querySelectorAll(".view-tabs button").forEach((item) => item.classList.toggle("active", item.dataset.view === "expectancy"));
      document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.toggle("active", panel.id === "view-expectancy"));
      renderStrategies();
      document.querySelector("#expectancy").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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
  els.marketWeightOutput.textContent = `${els.marketWeight.value}%`;
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
    els.strategyGrid.innerHTML = scenarioDefinitions().map((scenario) => scenarioCard(scenario, null)).join("");
    renderRationale(null, automaticCandidate);
    return;
  }

  const marketProbability = selectedMarketProbability(odds);
  const marketWeight = Number(els.marketWeight.value) / 100;
  const uncertainty = Number(els.uncertainty.value) / 100;
  const blendedProbability = logitPool(probability, marketProbability, marketWeight);
  const conservativeProbability = Math.max(0.0001, blendedProbability - uncertainty);
  const scenarios = [
    calculateScenario("market", "市場基準", marketProbability, odds, bankroll, maxStake, false),
    calculateScenario("model", "モデル単独", probability, odds, bankroll, maxStake, true),
    calculateScenario("blend", "市場融合", blendedProbability, odds, bankroll, maxStake, true),
    calculateScenario("lower", "安全側下限", conservativeProbability, odds, bankroll, maxStake, true),
  ];
  const primary = scenarios.at(-1);

  els.breakEven.textContent = percent(1 / odds);
  els.expectedReturn.textContent = percent(primary.expectedReturn);
  els.edgeValue.textContent = signedPercent(primary.edge);
  els.edgeValue.className = primary.edge >= 0 ? "positive" : "negative";
  els.kellyValue.textContent = percent(primary.fullKelly);
  els.edgeBadge.textContent = primary.passes ? "安全側でも基準通過" : "安全側では見送り";
  els.edgeBadge.className = `decision ${primary.passes ? "buy" : "reject"}`;

  els.strategyGrid.innerHTML = scenarios.map((scenario) => scenarioCard(scenario, { odds })).join("");
  renderRationale({
    odds, modelProbability: probability, marketProbability, blendedProbability, conservativeProbability,
    marketWeight, uncertainty, ...primary,
  }, automaticCandidate);
}

function calculateScenario(id, name, probability, odds, bankroll, maxStake, eligible) {
  const expectedReturn = odds * probability;
  const edge = expectedReturn - 1;
  const fullKelly = Math.max(0, edge / (odds - 1));
  const passes = eligible && edge >= 0.08;
  const rawStake = bankroll * fullKelly * state.kellyFraction;
  const stake = passes ? Math.min(maxStake, roundHundred(rawStake)) : 0;
  return { id, name, probability, expectedReturn, edge, fullKelly, passes, stake, expectedProfit: stake * edge };
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
  els.strategyGrid.innerHTML = scenarioDefinitions().map((scenario) => scenarioCard(scenario, null, "未取得データがあるため生成停止")).join("");
  els.rationaleList.innerHTML = [
    ["取得品質", "先週72レースの結果検査は合格。予測用30年データは蓄積中です。"],
    ["オッズ", "先週の締切後オッズは取得済みですが、予測時点のオッズではないため自動EVには使いません。"],
    ["モデル確率", "時系列検証と確率校正が未完了のため、勝率を推測で補完しません。"],
    ["結論", "欠損を成功扱いせず、推奨・買い目・購入候補をすべて停止しています。"],
  ].map(([title, body]) => `<li class="blocked"><strong>${title}</strong><br>${body}</li>`).join("");
}

function renderRationale(calculation, candidate) {
  if (!calculation) return;
  const probabilityGap = calculation.conservativeProbability - calculation.marketProbability;
  const comments = [
    ["期待値", `安全側確率${percent(calculation.conservativeProbability)}は市場基準${percent(calculation.marketProbability)}に対して${signedPercent(probabilityGap)}、期待回収率は${percent(calculation.expectedReturn)}です。`],
    ["確率品質", candidate ? `モデル${escapeHtml(candidate.modelVersion)}、校正検査${escapeHtml(candidate.calibrationStatus)}。校正不合格の候補は自動除外します。` : "入力確率は感度分析専用です。Platt・isotonicを独立期間で比較するまでは自動確率として扱いません。"],
    ["市場融合", `モデル${percent(calculation.modelProbability)}と市場${percent(calculation.marketProbability)}をlogit空間で市場${Math.round(calculation.marketWeight * 100)}%に融合し、${percent(calculation.blendedProbability)}としました。`],
    ["安全側", `融合確率から指定誤差幅${(calculation.uncertainty * 100).toFixed(1)}ptを控除。人気薄補正は固定せず、時期・オッズ帯ごとに再推定します。`],
    ["資金管理", `完全Kellyは${percent(calculation.fullKelly)}、選択中は${fractionLabel(state.kellyFraction)}、推奨額は${yen(calculation.stake)}です。`],
    ["時点整合", candidate ? `オッズ観測時刻${escapeHtml(candidate.oddsObservedAt)}以前の特徴量だけで計算します。` : "検証入力モードのため、予測時点の整合性は保証されません。"],
    ["判定", calculation.passes ? "安全側EV差8%以上を通過。上限額と100円単位を適用しました。" : "安全側EV差8%未満のため見送りです。閾値8%も将来のwalk-forward検証で更新します。"],
  ];
  els.rationaleList.innerHTML = comments.map(([title, body]) => `<li><strong>${title}</strong><br>${body}</li>`).join("");
}

function scenarioDefinitions() {
  return [
    { name: "市場基準", note: "控除前ベンチマーク" },
    { name: "モデル単独", note: "校正確率" },
    { name: "市場融合", note: "Benter型感度分析" },
    { name: "安全側下限", note: "誤差幅控除" },
  ];
}

function scenarioCard(scenario, calculation, emptyReason = "オッズ・確率入力待ち") {
  if (!calculation) {
    return `<article class="strategy-card"><header><strong>${scenario.name}</strong><span>${scenario.note}</span></header>
      <dl><div><dt>採用確率</dt><dd>--</dd></div><div><dt>期待回収率</dt><dd>--</dd></div><div><dt>推奨額</dt><dd>--</dd></div></dl>
      <footer class="reject">${emptyReason}</footer></article>`;
  }
  const selection = els.selection.value.trim() || "買い目未入力";
  const status = scenario.stake >= 100 ? `${els.betType.value} ${escapeHtml(selection)}・候補` : scenario.id === "market" ? "比較基準・購入対象外" : "見送り";
  return `<article class="strategy-card"><header><strong>${scenario.name}</strong><span>${scenarioDefinitions().find((item) => item.name === scenario.name)?.note ?? ""}</span></header>
    <dl><div><dt>採用確率</dt><dd>${percent(scenario.probability)}</dd></div><div><dt>期待回収率</dt><dd>${percent(scenario.expectedReturn)}</dd></div><div><dt>EV差</dt><dd class="${scenario.edge >= 0 ? "positive" : "negative"}">${signedPercent(scenario.edge)}</dd></div><div><dt>推奨額</dt><dd>${yen(scenario.stake)}</dd></div><div><dt>期待利益</dt><dd>${yen(Math.round(scenario.expectedProfit))}</dd></div></dl>
    <footer class="${scenario.stake >= 100 ? "" : "reject"}">${status}</footer></article>`;
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

function selectedOddsRace() {
  return closingOddsData.races?.find((race) => race.date === state.date
    && race.venueCode === state.venueCode && race.raceNo === state.raceNo);
}

function selectedMarketProbability(odds) {
  if (els.betType.value !== "単勝") return 1 / odds;
  const horseNumber = Number(els.selection.value.trim().match(/^\d+/)?.[0]);
  const prices = selectedOddsRace()?.prices?.filter((price) => price.win > 1) ?? [];
  const selected = prices.find((price) => price.horseNumber === horseNumber);
  const inverseTotal = prices.reduce((sum, price) => sum + (1 / price.win), 0);
  return selected && inverseTotal > 0 ? (1 / selected.win) / inverseTotal : 1 / odds;
}

function logitPool(modelProbability, marketProbability, marketWeight) {
  const clamp = (value) => Math.min(0.9999, Math.max(0.0001, value));
  const logit = (value) => Math.log(clamp(value) / (1 - clamp(value)));
  const pooledLogit = (1 - marketWeight) * logit(modelProbability) + marketWeight * logit(marketProbability);
  return 1 / (1 + Math.exp(-pooledLogit));
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

function number(value) {
  return Number(value ?? 0).toLocaleString("ja-JP");
}

function formatTimestamp(value) {
  if (!value) return "--";
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit",
  }).format(new Date(value));
}

function fractionLabel(value) {
  return ({ 0.125: "1/8 Kelly", 0.25: "1/4 Kelly", 0.5: "1/2 Kelly" })[value] ?? `${value} Kelly`;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}
