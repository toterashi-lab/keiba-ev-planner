const liveEdition = window.KEIBA_LIVE_RACECARDS ?? { meetings: [], results: [] };
const SITE_PREFIX = location.hostname.endsWith("github.io") ? "/keiba-ev-planner" : "";
const referenceMeetings = window.KEIBA_REFERENCE_MEETINGS ?? { meetings: [] };
const referenceResults = window.KEIBA_RESULTS ?? { results: [] };
const referenceModel = window.KEIBA_MODEL_OUTPUTS ?? { predictions: [], candidates: [] };
const referenceAudit = window.KEIBA_REFERENCE_EV_AUDIT ?? null;
const liveModel = window.KEIBA_LIVE_MODEL_OUTPUTS ?? { predictions: [], candidates: [] };
const dbStatus = window.KEIBA_DATABASE_STATUS ?? {};
const featureStatus = window.KEIBA_MODEL_FEATURE_COVERAGE ?? { groups: [] };
const ticketEngine = window.KEIBA_TICKET_ENGINE;
const forecastPolicy = window.KEIBA_FORECAST_POLICY;
const agentForecastEngine = window.KEIBA_AGENT_FORECAST_ENGINE;
const savedPerformance = window.KEIBA_AGENT_PERFORMANCE ?? { records: [] };
const replayAudit = window.KEIBA_LIVE_REPLAY_AUDIT ?? { records: [], summary: null, coverage: {} };
const leagueSystem = window.UMAYOMI_LEAGUE;
const leagueSeason = leagueSystem?.derive(replayAudit) ?? { standings: [], drama: null, round: 1, totalRaces: 0 };

const currentEdition = liveEdition.meetings?.length ? liveEdition : referenceMeetings;
const results = [...(referenceResults.results ?? []), ...(liveEdition.results ?? [])];
const predictions = dedupeBy([...referenceModel.predictions ?? [], ...liveModel.predictions ?? []], predictionKey);
const SUPPORTED_BET_TYPES = Object.freeze(["単勝", "馬連", "3連複"]);
const candidates = dedupeBy([...referenceModel.candidates ?? [], ...liveModel.candidates ?? []], candidateKey)
  .filter((row) => SUPPORTED_BET_TYPES.includes(row.betType));
const auditRows = referenceAudit?.recommendations ?? referenceModel.logic?.referenceWeekExternalAudit?.recommendations ?? [];
const unitStake = Number(liveModel.unitStakeYen ?? referenceModel.unitStakeYen ?? ticketEngine?.UNIT_STAKE ?? 100);
let historicalArchiveIndexPromise = null;
const historicalArchiveMonthCache = new Map();

const AGENTS = [
  { id: "safety", name: "堅実派 セーフティ", short: "堅", description: "安定性と複勝圏への入りやすさを重視", aliases: ["safety", "agent_safety", "agent_ability", "persona_orthodox", "ability"] },
  { id: "sniper", name: "穴狙い スナイパー", short: "穴", description: "市場より過小評価された人気薄を重視", aliases: ["sniper", "agent_sniper", "agent_value", "persona_value", "value"] },
  { id: "pace", name: "展開派 ペースメーカー", short: "展", description: "隊列、ペース、脚質と位置取りを重視", aliases: ["pace", "agent_pace", "pace_shape", "persona_pace"] },
  { id: "analyst", name: "数理派 アナリスト", short: "数", description: "校正確率、誤差、期待値を重視", aliases: ["analyst", "agent_analyst", "agent_data", "persona_trackside", "data"] },
  { id: "contrarian", name: "逆張り派 コントラリアン", short: "逆", description: "評価集中と過剰人気のリスクを検証", aliases: ["contrarian", "agent_contrarian", "agent_odds", "persona_market", "odds"] },
];
const AGENT_PERSONAS = Object.freeze({
  safety: { name: "しっかり派 セーフティ", symbol: "安", role: "安定した馬を選ぶ", focus: "能力と評価の一致", type: "能力を強め、一致している馬を加点", voice: "大きく当てるより、くずれにくい馬を選びます。" },
  sniper: { name: "穴狙い スナイパー", symbol: "穴", role: "見落とされた馬を探す", focus: "実力がある低評価馬", type: "実力の下限を守り、総合順位が低い馬を加点", voice: "人気がなくても、走れそうな理由がある馬を探します。" },
  pace: { name: "流れ読み ペースメーカー", symbol: "流", role: "レースの流れを読む", focus: "展開評価と順位差", type: "展開を最優先し、欠ける日はコース評価で補完", voice: "どの馬が走りやすい流れになるかを考えます。" },
  analyst: { name: "数字読み アナリスト", symbol: "数", role: "数字をくらべる", focus: "コース・距離・騎手", type: "コースや騎手などのデータ評価を最優先", voice: "これまでの走りをくらべて選びます。" },
  contrarian: { name: "別目線 コントラリアン", symbol: "別", role: "評価集中を疑う", focus: "他の4人が集まった馬", type: "評価集中を減点し、根拠が残る別候補を加点", voice: "みんなが同じ馬を選んだときほど、もう一度たしかめます。" },
});
const PERIODS = [{ id: "today", label: "今日", days: 0 }, { id: "7d", label: "直近7日", days: 7 }, { id: "30d", label: "直近30日", days: 30 }, { id: "all", label: "全期間", days: null }];
const BET_TYPES = SUPPORTED_BET_TYPES;

const state = {
  route: routeFromLocation(),
  date: currentEdition.meetings?.at(-1)?.date ?? "",
  venueCode: currentEdition.meetings?.at(-1)?.tracks?.[0]?.venueCode ?? "",
  raceNo: 1,
  detailTab: "prediction",
  discover: { venue: "all", surface: "all", volatility: "all" },
  resultPeriod: "all",
  performancePeriod: "all",
  archiveMonth: "",
  archiveDate: "",
  agentId: routeContextFromLocation().agentId,
};

initialize();

function initialize() {
  applyRouteContext(routeContextFromLocation());
  const track = selectedMeeting()?.tracks?.[0];
  state.venueCode = state.venueCode || track?.venueCode || "";
  state.raceNo = state.raceNo || nextRaceNumber(track) || track?.races?.[0]?.no || 1;
  bindGlobalEvents();
  renderAll();
}

function bindGlobalEvents() {
  window.addEventListener("hashchange", () => {
    const context = routeContextFromLocation();
    applyRouteContext(context);
    state.route = context.route;
    renderAll();
  });
  window.addEventListener("popstate", () => {
    applyRouteContext(routeContextFromLocation());
    state.route = routeFromLocation();
    renderAll();
  });
  document.querySelector("#theme-toggle").addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("keiba-theme", theme); } catch {}
  });
  try { document.documentElement.dataset.theme = localStorage.getItem("keiba-theme") || "dark"; } catch {}
}

function renderAll() {
  renderRoute();
  renderHome();
  renderRaceWorkspace();
  if (state.route === "results") renderResultsPage();
  renderPerformancePage();
  renderSeasonPage();
  normalizeSitePaths();
}

function normalizeSitePaths() {
  if (!SITE_PREFIX) return;
  document.querySelectorAll("a[href^='/'], img[src^='/']").forEach((element) => {
    const attribute = element.tagName === "IMG" ? "src" : "href";
    const value = element.getAttribute(attribute);
    if (value && !value.startsWith(`${SITE_PREFIX}/`)) element.setAttribute(attribute, `${SITE_PREFIX}${value}`);
  });
}

function renderRoute() {
  const route = ["home", "races", "results", "performance", "season"].includes(state.route) ? state.route : "home";
  document.querySelectorAll("[data-page]").forEach((page) => page.classList.toggle("active", page.dataset.page === route));
  document.querySelectorAll("[data-route]").forEach((link) => {
    const active = link.dataset.route === route;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });
  const titles = {
    home: "無料AI競馬予想 ウマヨミ｜5人の予想と買い目・結果",
    races: "全レースのAI予想・指数・買い目｜ウマヨミ",
    results: "AI競馬予想の結果・払戻アーカイブ｜ウマヨミ",
    performance: "5人のAI予想家と参考成績｜ウマヨミ",
    season: "2026 AI競馬リーグ順位｜ウマヨミ",
  };
  const descriptions = {
    home: "5人のAI予想家が全レースを別々の方法で予想。指数、単勝、馬連、3連複の買い目と確定結果を無料で公開します。",
    races: "開催日、競馬場、レース番号から、5人のAI予想家の指数・印・買い目・出馬表・確定結果を確認できます。",
    results: "過去レースのAI予想と公式払戻を照合。買い目ごとの投資額、払戻額、収支、回収率を日別に表示します。",
    performance: "能力、穴馬、展開、データ、別目線の5人のAI予想家について、予想方法と後日再現の参考成績を確認できます。",
    season: "5人のAI予想家の週ごとの競馬予想結果。使った額、払戻、収支、回収率と順位を確定結果から公開します。",
  };
  let pageTitle = titles[route];
  let pageDescription = descriptions[route];
  if (route === "races" && selectedRace() && selectedTrack()) {
    const race = selectedRace();
    const track = selectedTrack();
    pageTitle = `${track.venueName}${race.no}R ${race.name} ${state.detailTab === "result" ? "AI予想結果・払戻" : "AI予想・指数・買い目"}｜ウマヨミ`;
    pageDescription = `${formatDate(state.date)} ${track.venueName}${race.no}R ${race.name}の5人のAI競馬予想、競馬指数、単勝・馬連・3連複の買い目${state.detailTab === "result" ? "と確定結果、払戻、収支" : "と予想根拠"}を掲載します。`;
    const heading = document.querySelector("#races-title");
    if (heading) heading.textContent = `${track.venueName}${race.no}R ${race.name}`;
  } else if (route === "performance" && state.agentId) {
    const persona = personaForId(state.agentId);
    pageTitle = `${persona.displayName}のAI競馬予想プロフィール｜ウマヨミ`;
    pageDescription = `${persona.displayName}の予想スタイル、得意条件、苦手条件、必殺技、競馬予想の参考成績を紹介します。`;
    const heading = document.querySelector("#performance-title");
    if (heading) heading.textContent = persona.displayName;
  } else {
    const racesHeading = document.querySelector("#races-title");
    if (racesHeading) racesHeading.textContent = "レースを選ぶ";
    const performanceHeading = document.querySelector("#performance-title");
    if (performanceHeading) performanceHeading.textContent = "予想家図鑑";
  }
  document.title = pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", pageTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", pageTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", pageDescription);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", location.href.split("#")[0]);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", location.href.split("#")[0]);
}

function renderDiscoverPage() {
  const all = (currentEdition.meetings ?? []).flatMap((meeting) => (meeting.tracks ?? []).flatMap((track) => (track.races ?? []).map((race) => {
    const prediction = findPrediction(race.no, track);
    const consensus = buildConsensus(prediction);
    const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: readyCandidates(race.no, track) });
    return { meeting, track, race, consensus, volatility, top: displayedTopTicket(race, track, prediction, consensus, volatility) };
  })));
  const venues = [...new Set(all.map((row) => row.track.venueName))];
  const filter = state.discover;
  const filtered = all.filter((row) => (filter.venue === "all" || row.track.venueName === filter.venue)
    && (filter.surface === "all" || row.race.surface === filter.surface)
    && (filter.volatility === "all" || String(row.volatility.level) === filter.volatility));
  const filters = document.querySelector("#discover-filters");
  filters.innerHTML = finderGroup("競馬場", "venue", [{ value: "all", label: "すべて" }, ...venues.map((value) => ({ value, label: value }))], filter.venue)
    + finderGroup("コース", "surface", [{ value: "all", label: "すべて" }, { value: "芝", label: "芝" }, { value: "ダート", label: "ダート" }, { value: "障害", label: "障害" }], filter.surface)
    + finderGroup("荒れ具合", "volatility", [{ value: "all", label: "すべて" }, { value: "1", label: "落ち着き" }, { value: "3", label: "標準" }, { value: "5", label: "波乱含み" }], filter.volatility);
  filters.querySelectorAll("button[data-finder-key]").forEach((button) => button.addEventListener("click", () => {
    state.discover[button.dataset.finderKey] = button.dataset.finderValue;
    renderDiscoverPage();
  }));
  document.querySelector("#discover-count").textContent = `${filtered.length}レース`;
  document.querySelector("#discover-list").innerHTML = filtered.map(finderRaceHtml).join("") || empty("条件に合うレースがありません");
  document.querySelectorAll("button[data-finder-race]").forEach((button) => button.addEventListener("click", () => {
    navigateToRace(button.dataset.finderDate, button.dataset.finderVenue, Number(button.dataset.finderRace), "prediction");
  }));
}

function finderGroup(label, key, options, selected) {
  return `<div class="finder-group"><span>${escapeHtml(label)}</span><div>${options.map((option) => `<button type="button" class="${option.value === selected ? "active" : ""}" data-finder-key="${key}" data-finder-value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</button>`).join("")}</div></div>`;
}

function finderRaceHtml(row) {
  const { meeting, track, race, consensus, volatility, top } = row;
  const pick = consensus.top ? `${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}` : "予想公開前";
  const ticket = top ? `${escapeHtml(top.betType)} ${escapeHtml(displayTicket(top.betType, top.ticketKeys?.[0] ?? top.selection, top))}` : "予想公開前";
  return `<button type="button" class="finder-race" data-finder-date="${escapeHtml(meeting.date)}" data-finder-venue="${escapeHtml(track.venueCode)}" data-finder-race="${race.no}"><span class="finder-race-meta">${escapeHtml(formatDate(meeting.date))}・${escapeHtml(track.venueName)} ${race.no}R</span><strong>${escapeHtml(race.name)}</strong><small>${escapeHtml(race.surface)}${number(race.distanceM)}m　荒れ具合：${escapeHtml(volatility.label)}</small><div><span>総合本命 <b>${pick}</b></span><span>AI一致 ${consensus.agreement}/5</span><span>注目 ${ticket}</span></div></button>`;
}

function renderHome() {
  const meeting = selectedMeeting();
  document.querySelector("#home-summary").textContent = meeting
    ? `${formatDate(meeting.date)}・最新週・全${meeting.tracks.reduce((sum, row) => sum + row.races.length, 0)}レース`
    : "開催データがありません。";
  renderLeagueLobby(meeting);
  renderDateTabs("#home-date-tabs");
  renderHomeArena(meeting);
  renderHomeRanking(meeting);
}

function renderLeagueLobby(meeting) {
  const meta = document.querySelector("#home-season-meta");
  if (meta) meta.innerHTML = `<span><b>SEASON</b><strong>2026</strong></span><span><b>WEEK</b><strong>第${leagueSeason.week + 1}週</strong></span><span><b>RACES</b><strong>${meeting?.tracks?.reduce((sum, track) => sum + track.races.length, 0) || 0}</strong></span>`;
  const standingsRoot = document.querySelector("#home-league-standings");
  if (standingsRoot) standingsRoot.innerHTML = `<section class="lobby-panel standings-panel"><header><div><span>THIS WEEK</span><h2>最新週のAI結果</h2></div><a href="/season/">週別履歴</a></header><div class="mini-standings">${leagueSeason.standings.map((row) => {
    const persona = agentPersona(AGENTS.find((agent) => agent.id === row.agentId));
    return `<a class="mini-standing-row ${row.agentId}" href="/agents/${row.agentId}/"><b>${row.rank}</b>${characterImageHtml(row.agentId, row.state, "mini-character")}<span><strong>${escapeHtml(persona.displayName)}</strong><small>${escapeHtml(persona.epithet)}</small></span><em class="rank-delta ${row.rankDelta > 0 ? "up" : row.rankDelta < 0 ? "down" : "stay"}">${row.rankDelta > 0 ? `▲${row.rankDelta}` : row.rankDelta < 0 ? `▼${Math.abs(row.rankDelta)}` : "－"}</em><i>${signedYen(row.netYen)}</i></a>`;
  }).join("")}</div></section>`;
  const dramaRoot = document.querySelector("#home-weekly-drama");
  const drama = leagueSeason.drama;
  if (!dramaRoot) return;
  if (!drama) { dramaRoot.innerHTML = empty("最新週の結果を集計しています。"); return; }
  const mvp = personaForId(drama.mvp?.agentId);
  const culprit = personaForId(drama.culprit?.agentId);
  const awakened = leagueSeason.standings.find((row) => row.state === "awakened") || leagueSeason.standings[0];
  const awakenedPersona = personaForId(awakened?.agentId);
  const mvpWon = Number(drama.mvp?.netYen || 0) > 0;
  dramaRoot.innerHTML = `<section class="lobby-panel weekly-drama"><header><div><span>LATEST WEEK</span><h2>最新週のドラマ</h2></div><button type="button" class="share-icon-button" data-share-latest aria-label="最新週の結果を共有">共有</button></header><div class="drama-cards"><article class="drama-card mvp ${mvpWon ? "won" : "lost"}"><span>MVP</span>${characterImageHtml(drama.mvp?.agentId, mvpWon ? "happy" : "defeat", "drama-character")}<div><strong>${escapeHtml(mvp.displayName)}</strong><small>${signedYen(drama.mvp?.netYen)}</small></div></article><article class="drama-card culprit"><span>戦犯</span>${characterImageHtml(drama.culprit?.agentId, "defeat", "drama-character")}<div><strong>${escapeHtml(culprit.displayName)}</strong><small>${signedYen(drama.culprit?.netYen)}</small></div></article></div><div class="awakening-strip">${characterImageHtml(awakened?.agentId, "awakened", "awakening-character")}<span><b>覚醒中</b><strong>${escapeHtml(awakenedPersona.displayName)}</strong><small>最新週の成績が上向いています</small></span></div></section>`;
  dramaRoot.querySelector("[data-share-latest]")?.addEventListener("click", () => shareWeeklyResults(leagueSeason.latestWeek));
}

function renderHomeArena(meeting) {
  const root = document.querySelector("#home-arena");
  const rows = (meeting?.tracks ?? []).flatMap((track) => (track.races ?? []).map((race) => {
    const prediction = findPrediction(race.no, track, meeting.date);
    const consensus = buildConsensus(prediction);
    return { track, race, prediction, consensus };
  })).filter((row) => row.consensus.top).sort((left, right) => Number(right.consensus.top.index ?? 0) - Number(left.consensus.top.index ?? 0));
  const featured = rows[0];
  renderSeasonEvents(meeting, featured);
  if (!featured) { root.innerHTML = empty("今日の予想を準備しています。"); return; }
  const agents = normalizedAgents(featured.prediction);
  const strategyMeeting = leagueSystem.meetingDialogue(featured.prediction, agents);
  const volatility = forecastPolicy.volatilityProfile({ race: featured.race, prediction: featured.prediction, consensus: featured.consensus, candidates: readyCandidates(featured.race.no, featured.track) });
  const featuredScore = Math.max(0, Math.min(100, Math.round(Number(featured.consensus.top.index ?? 0))));
  const agentCards = AGENTS.map((definition, index) => {
    const persona = agentPersona(definition);
    const agent = agents.get(definition.id);
    const mark = agent?.status === "available" ? agent.marks?.[0] : null;
    const standing = leagueSeason.standings.find((row) => row.agentId === definition.id);
    return `<article class="arena-agent ${definition.id} ${mark ? "ready" : "waiting"}"><span class="arena-avatar">${characterImageHtml(definition.id, standing?.state || "normal", "arena-character")}<i>${index + 1}</i></span><div><span>${escapeHtml(persona.epithet)}</span><strong>${escapeHtml(persona.displayName)}</strong><p>${mark ? `エース ${number(mark.horseNumber)}番 ${escapeHtml(mark.horseName)}` : "作戦準備中"}</p></div></article>`;
  }).join("");
  root.innerHTML = `<header class="arena-command"><div class="arena-race-copy"><span class="arena-rank">第${leagueSeason.week + 1}週・MAIN BATTLE</span><h2>${escapeHtml(featured.track.venueName)} ${featured.race.no}R</h2><h3>${escapeHtml(featured.race.name)}</h3><p>${escapeHtml(featured.race.surface)} ${number(featured.race.distanceM)}m・${escapeHtml(featured.race.start)}発走</p><blockquote>「${escapeHtml(strategyMeeting.lines[0]?.text || "5人が作戦を確認しています。") }」</blockquote></div><div class="arena-power" style="--score:${featuredScore}"><span>戦闘力 <small>競馬指数</small></span><strong>${featuredScore}</strong><i><b></b></i></div><div class="arena-difficulty"><span>波乱警報 <small>荒れる可能性</small></span><strong>${escapeHtml(volatility.label)}</strong>${volatilityMeterHtml(volatility, true)}</div><button type="button" data-arena-race="true" data-arena-date="${escapeHtml(state.date)}" data-arena-venue="${escapeHtml(featured.track.venueCode)}" data-arena-no="${featured.race.no}">作戦会議へ <span aria-hidden="true">›</span></button></header><div class="arena-team-title"><span>ACE PICKS</span><strong>5人のエース指名</strong></div><div class="arena-agents">${agentCards}</div>`;
  root.querySelector("button[data-arena-race]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    state.date = button.dataset.arenaDate;
    state.venueCode = button.dataset.arenaVenue;
    state.raceNo = Number(button.dataset.arenaNo);
    state.detailTab = "prediction";
    navigateToRace(state.date, state.venueCode, state.raceNo, "prediction");
  });
}

function renderSeasonEvents(currentMeeting, featured) {
  const root = document.querySelector("#home-season-events");
  if (!root) return;
  const [leader, challenger] = leagueSeason.rivalry || [];
  const leaderPersona = personaForId(leader?.agentId);
  const challengerPersona = personaForId(challenger?.agentId);
  const winning = leagueSeason.winningStreak;
  const losing = leagueSeason.losingStreak;
  const volatility = featured ? forecastPolicy.volatilityProfile({ race: featured.race, prediction: featured.prediction,
    consensus: featured.consensus, candidates: readyCandidates(featured.race.no, featured.track) }) : null;
  const gap = leader && challenger ? leader.netYen - challenger.netYen : 0;
  root.innerHTML = `<article class="season-event rivalry-event"><header><span>今週のAI対決</span><strong>首位攻防</strong></header><div class="rivalry-pair">${characterImageHtml(leader?.agentId, leader?.state || "normal", "event-character")}<b>VS</b>${characterImageHtml(challenger?.agentId, challenger?.state || "normal", "event-character")}</div><p>${escapeHtml(leaderPersona.displayName)} vs ${escapeHtml(challengerPersona.displayName)}<small>収支差 ${yen(Math.abs(gap))}</small></p></article>
    <article class="season-event streak-event"><header><span>調子</span><strong>連勝・連敗</strong></header><div class="streak-row good">${characterImageHtml(winning?.agentId, "happy", "event-mini-character")}<p><b>${escapeHtml(personaForId(winning?.agentId).displayName)}</b><small>${winning?.streak > 0 ? `${winning.streak}戦連続プラス` : "連勝待ち"}</small></p></div><div class="streak-row bad">${characterImageHtml(losing?.agentId, "defeat", "event-mini-character")}<p><b>${escapeHtml(personaForId(losing?.agentId).displayName)}</b><small>${losing?.streak < 0 ? `${Math.abs(losing.streak)}戦連続マイナス` : "連敗なし"}</small></p></div></article>
    <article class="season-event warning-event"><header><span>今日の波乱警報</span><strong>${escapeHtml(volatility?.label || "判定待ち")}</strong></header><div class="warning-gauge" style="--warning:${volatility?.score || 0}"><i><b></b></i><span>${volatility ? `${volatility.level}/5` : "-"}</span></div><p>${featured ? `${escapeHtml(featured.track.venueName)} ${featured.race.no}R ${escapeHtml(featured.race.name)}` : "対象レースがありません"}<small>${escapeHtml(currentMeeting?.date ? formatDate(currentMeeting.date) : "開催日未選択")}</small></p></article>`;
}

function renderHomeRanking(meeting) {
  const root = document.querySelector("#home-race-list");
  const rows = (meeting?.tracks ?? []).flatMap((track) => (track.races ?? []).map((race) => {
    const prediction = findPrediction(race.no, track, meeting.date);
    const consensus = buildConsensus(prediction);
    return { track, race, prediction, consensus, result: findResult(race.no, track, meeting.date) };
  })).filter((row) => row.consensus.top).sort((left, right) => Number(right.consensus.top.index ?? 0) - Number(left.consensus.top.index ?? 0) || left.race.no - right.race.no);
  document.querySelector("#race-list-count").textContent = `${rows.length}レース`;
  const topRows = rows.slice(0, 10);
  const otherRows = rows.slice(10);
  const topHtml = topRows.map((row, index) => rankingRaceCardHtml(row, index + 1)).join("");
  const otherHtml = otherRows.length ? `<details class="ranking-more"><summary>11位以下を見る <span>${otherRows.length}レース</span></summary><div class="ranking-more-list">${otherRows.map((row, index) => rankingRaceCardHtml(row, index + 11)).join("")}</div></details>` : "";
  root.innerHTML = topHtml ? `${topHtml}${otherHtml}` : empty("ランキングを作成できる予想データがありません");
  root.querySelectorAll("button[data-home-ranking]").forEach((button) => button.addEventListener("click", () => {
    navigateToRace(button.dataset.homeDate, button.dataset.homeVenue, Number(button.dataset.homeRace), "prediction");
  }));
}

function rankingRaceCardHtml({ track, race, prediction, consensus, result }, rank) {
  const marks = consensus.ranked.slice(0, 5).map((mark, index) => `<b><i>${index + 1}</i>${mark.horseNumber}番</b>`).join("");
  const resultSummary = raceResultSummary(result);
  const rankClass = rank <= 3 ? ` rank-${rank}` : "";
  const score = Math.max(0, Math.min(100, Math.round(Number(consensus.top.index ?? 0))));
  return `<article class="race-card home-ranking-card rank-card-${Math.min(rank, 4)}" style="--score:${score}"><button type="button" class="race-card-open" data-home-ranking="true" data-home-date="${escapeHtml(state.date)}" data-home-venue="${escapeHtml(track.venueCode)}" data-home-race="${race.no}"><div class="race-card-top"><span class="race-card-no${rankClass}"><small>RANK</small>${rank}</span><span class="race-card-title"><strong>${escapeHtml(track.venueName)} ${race.no}R ${escapeHtml(race.name)}</strong><small>${escapeHtml(race.surface)} ${number(race.distanceM)}m・${escapeHtml(race.start)}</small></span><span class="home-index-score"><span>POWER</span><strong>${score}</strong><i><b></b></i></span></div><div class="race-card-body"><span class="race-card-pick"><span>◎ 本命</span><strong>${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}</strong></span><span class="race-rank-picks" aria-label="上位5頭">${marks}</span>${resultSummary ? `<span class="race-card-result"><span>RESULT</span><strong>${escapeHtml(resultSummary)}</strong></span>` : ""}</div></button>${homeAgentTicketsHtml(prediction)}</article>`;
}

function homeAgentTicketsHtml(prediction) {
  const groups = agentTicketGroups(prediction);
  if (!groups.length) return `<div class="home-agent-tickets empty-tickets">買い目を準備しています。</div>`;
  return `<details class="home-agent-tickets"><summary><span><b>5人の作戦</b><small>買い目を表示</small></span><i aria-hidden="true">＋</i></summary><div>${groups.map((group) => {
    const persona = agentPersona(group.definition);
    return `<article class="${group.definition.id}"><header>${characterImageHtml(group.definition.id, "normal", "agent-card-avatar")}<strong>${escapeHtml(persona.displayName)}</strong></header>${group.tickets.map((ticket) => `<p><span>${escapeHtml(ticket.betType)} ${escapeHtml(ticket.method)}</span><b>${escapeHtml(ticket.selection)}</b><small>${ticket.points}点・各${unitStake}円</small></p>`).join("")}</article>`;
  }).join("")}</div></details>`;
}

function renderDateTabs(selector) {
  const root = document.querySelector(selector);
  root.innerHTML = (currentEdition.meetings ?? []).map((meeting) => `<button type="button" class="${meeting.date === state.date ? "active" : ""}" data-date="${meeting.date}">${formatDate(meeting.date)}（${escapeHtml(meeting.weekday ?? weekday(meeting.date))}）</button>`).join("");
  root.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => selectDate(button.dataset.date)));
}

function renderVenueTabs(selector) {
  const root = document.querySelector(selector);
  root.innerHTML = (selectedMeeting()?.tracks ?? []).map((track) => `<button type="button" class="${track.venueCode === state.venueCode ? "active" : ""}" data-venue="${escapeHtml(track.venueCode)}">${escapeHtml(track.venueName)} <small>${escapeHtml(track.meetingName)}</small></button>`).join("");
  root.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => selectVenue(button.dataset.venue)));
}

function renderRaceCards(track) {
  const root = document.querySelector("#home-race-list");
  document.querySelector("#race-list-count").textContent = `${track?.races?.length ?? 0}レース`;
  root.innerHTML = (track?.races ?? []).map((race) => raceCardHtml(race, track)).join("") || empty("対象レースがありません");
  root.querySelectorAll("button[data-race]").forEach((button) => button.addEventListener("click", () => openRace(Number(button.dataset.race))));
}

function raceCardHtml(race, track) {
  const prediction = findPrediction(race.no, track);
  const consensus = buildConsensus(prediction);
  const realCandidates = readyCandidates(race.no, track);
  const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: realCandidates });
  const top = displayedTopTicket(race, track, prediction, consensus, volatility);
  const result = findResult(race.no, track);
  const status = raceStatus(result, prediction, top, race);
  const marks = consensus.ranked.slice(0, 3);
  const resultSummary = raceResultSummary(result);
  const indexSummary = consensusIndexSummary(consensus);
  return `<button type="button" class="race-card" data-race="${race.no}" aria-label="${escapeHtml(track.venueName)}${race.no}レース ${escapeHtml(race.name)}を見る">
    <div class="race-card-top"><span class="race-card-no">${race.no}R</span><span class="race-card-title"><strong>${escapeHtml(race.name)}</strong><small>${escapeHtml(race.surface)}${number(race.distanceM)}m・${escapeHtml(race.condition)}</small></span><span class="race-card-time">${escapeHtml(race.start)}<br>${statusBadge(status)}</span></div>
    <div class="race-card-body"><span class="race-card-pick"><span>総合本命</span><strong>${consensus.top ? `${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}` : "予想公開前"}</strong></span><span class="agreement">一致度 ${consensus.agreement}/5</span>
      <span class="race-card-marks"><span>総合印</span><strong>${marks.length ? marks.map((mark, index) => `${["◎", "○", "▲"][index]}${mark.horseNumber}`).join(" ") : "--"}</strong></span>
      <span class="race-card-index"><span>総合AI指数</span><strong>${indexSummary}</strong></span>
      <span class="race-card-ticket"><span>AI共通買い目</span><strong>${commonBetSummary(prediction)}</strong></span>
      ${resultSummary ? `<span class="race-card-result"><span>確定結果</span><strong>${escapeHtml(resultSummary)}</strong></span>` : ""}
      ${volatilityMeterHtml(volatility, true)}</div>
  </button>`;
}

function renderHomeForecastBoard(track) {
  const root = document.querySelector("#home-forecast-board");
  const rows = (track?.races ?? []).map((race) => {
    const prediction = findPrediction(race.no, track);
    const consensus = buildConsensus(prediction);
    const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: readyCandidates(race.no, track) });
    return { race, consensus, top: displayedTopTicket(race, track, prediction, consensus, volatility) };
  }).filter((row) => row.consensus.top).sort((left, right) => Number(right.consensus.top.index ?? 0) - Number(left.consensus.top.index ?? 0) || left.race.no - right.race.no).slice(0, 3);
  root.innerHTML = rows.length ? rows.map(({ race, consensus, top }) => {
    const marks = consensus.ranked.slice(0, 3).map((mark, index) => `${["◎", "○", "▲"][index]}${mark.horseNumber}`).join(" ");
    return `<button type="button" class="home-forecast-card" data-home-race="${race.no}" aria-label="${race.no}レースのAI予想を詳しく見る"><header><span>${race.no}R ${escapeHtml(race.name)}</span><small>${escapeHtml(race.surface)}${number(race.distanceM)}m・${escapeHtml(race.start)}</small></header><div class="home-forecast-main"><div><span>総合本命</span><strong>${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}</strong><small class="home-forecast-marks">${marks}</small></div><div class="home-index-score"><span>総合AI指数</span><strong>${Number(consensus.top.index ?? 0).toFixed(1)}</strong><small>2番手差 +${Math.max(0, Number(consensus.top.index ?? 0) - Number(consensus.ranked[1]?.index ?? 0)).toFixed(1)}</small></div></div><footer><span>AI共通買い目</span><strong>${commonBetSummary(findPrediction(race.no, track))}</strong></footer></button>`;
  }).join("") : empty("この開催のAI予想は公開前です");
  root.querySelectorAll("button[data-home-race]").forEach((button) => button.addEventListener("click", () => openRace(Number(button.dataset.homeRace))));
}

function renderNextRace(track) {
  const root = document.querySelector("#next-race-card");
  const raceNo = nextRaceNumber(track);
  const race = track?.races?.find((row) => row.no === raceNo);
  if (!race) {
    const latest = [...(track?.races ?? [])].sort((a, b) => b.no - a.no)[0];
    const result = latest ? findResult(latest.no, track) : null;
    const summary = raceResultSummary(result);
    root.innerHTML = latest ? `<button type="button" class="next-race-link" data-next-race="${latest.no}"><span class="time">この開催は結果確定</span><strong>${escapeHtml(track?.venueName ?? "")} ${latest.no}R ${escapeHtml(latest.name)}</strong><small>${summary ? `確定結果 ${summary}。予想と結果を確認` : "予想と結果を確認"}</small></button>` : "";
    root.querySelector("button[data-next-race]")?.addEventListener("click", () => navigateToRace(state.date, track?.venueCode, Number(latest.no), "result"));
    return;
  }
  const prediction = findPrediction(race.no, track);
  const consensus = buildConsensus(prediction);
  const index = consensus.top ? consensusIndexSummary(consensus) : "--";
  const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: readyCandidates(race.no, track) });
  const top = displayedTopTicket(race, track, prediction, consensus, volatility);
  root.innerHTML = `<span class="time">次の発走 ${escapeHtml(race.start)}</span><strong>${escapeHtml(track.venueName)}${race.no}R ${escapeHtml(race.name)}</strong><small>${consensus.top ? `総合本命 ${consensus.top.horseNumber}番 ${escapeHtml(consensus.top.horseName)}・一致度 ${consensus.agreement}/5` : "予想公開前"}</small><div class="next-race-prediction"><span>総合AI指数 <b>${escapeHtml(index)}</b></span><span>${commonBetSummary(prediction)}</span></div>`;
}

function renderRaceWorkspace() {
  renderDateTabs("#race-date-tabs");
  renderVenueTabs("#race-venue-tabs");
  const track = selectedTrack();
  const race = selectedRace();
  const strip = document.querySelector("#race-number-tabs");
  strip.innerHTML = (track?.races ?? []).map((row) => `<button type="button" class="${row.no === state.raceNo ? "active" : ""}" data-race="${row.no}"><strong>${row.no}R</strong><small>${escapeHtml(row.start)}</small></button>`).join("");
  strip.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => navigateToRace(state.date, state.venueCode, Number(button.dataset.race), "prediction")));
  document.querySelector("#race-detail").innerHTML = race ? raceDetailHtml(race, track) : empty("レースを選択してください");
  bindRaceDetailEvents();
}

function raceDetailHtml(race, track) {
  const prediction = findPrediction(race.no, track);
  const result = findResult(race.no, track);
  const consensus = buildConsensus(prediction);
  const realCandidates = readyCandidates(race.no, track);
  const volatility = forecastPolicy.volatilityProfile({ race, prediction, consensus, candidates: realCandidates });
  const top = displayedTopTicket(race, track, prediction, consensus, volatility);
  const status = raceStatus(result, prediction, top, race);
  return `<nav class="breadcrumb" aria-label="パンくず"><a href="/">ロビー</a><span aria-hidden="true">›</span><a href="/races/">レース</a><span aria-hidden="true">›</span><span>${escapeHtml(track.venueName)} ${race.no}R</span></nav><article class="detail-shell">
    <header class="detail-head"><span class="race-card-no">${race.no}R</span><div class="detail-title"><span class="stage-label">第${currentRaceRound(race, track)}節・${escapeHtml(track.venueName)}</span><h2>${escapeHtml(race.name)}</h2><p>${escapeHtml(race.start)}発走・${escapeHtml(race.surface)} ${number(race.distanceM)}m・${escapeHtml(race.condition)}</p></div>${statusBadge(status)}</header>
    <nav class="detail-tabs" aria-label="レース詳細"><button type="button" data-tab="prediction">予想</button><button type="button" data-tab="result">結果</button></nav>
    ${detailPanel("prediction", predictionTabHtml(race, track, prediction, result, consensus, top, volatility))}
    ${detailPanel("result", resultTabHtml(race, track, prediction, result))}
  </article>`;
}

function detailPanel(id, html) { return `<section class="detail-panel ${state.detailTab === id ? "active" : ""}" data-panel="${id}">${html}</section>`; }

function predictionTabHtml(race, track, prediction, result, consensus, top, volatility) {
  return `${strategyMeetingHtml(prediction, consensus)}${conclusionHtml(consensus, top, prediction, volatility)}<section class="section-block">${agentsHtml(prediction, null, consensus)}</section>${gameMetricsHtml(prediction, consensus, top, volatility)}<section class="section-block">${betsHtml(race.no, track, top)}</section>${formalMetricsDetailsHtml(prediction, top)}${runnersDetailsHtml(result, prediction)}`;
}
function resultTabHtml(race, track, prediction, result) {
  return `${resultDramaHtml(race, track, prediction, result)}${comparisonHtml(race, track, prediction, result)}${reflectionMeetingHtml(prediction, result)}${runnersDetailsHtml(result, prediction)}`;
}
function runnersDetailsHtml(result, prediction) {
  return `<details class="runner-details"><summary>出馬表を見る</summary>${runnersHtml(result, prediction)}</details>`;
}

function conclusionHtml(consensus, top, prediction, volatility) {
  const topMark = consensus.top;
  return `<div class="conclusion-grid"><section class="consensus-card"><div class="consensus-top"><div><span class="eyebrow">ACE PICK・エース指名</span><h3>${topMark ? `<span class="horse-number">${topMark.horseNumber}</span>${escapeHtml(topMark.horseName)}` : "作戦準備中"}</h3></div><span class="agreement">${consensus.split ? "意見対立" : `${consensus.agreement}/5人一致`}</span></div>
    <div class="consensus-picks"><div><span>エース</span><strong>${markLabel(consensus.ranked[0], "◎")}</strong></div><div><span>サポート</span><strong>${markLabel(consensus.ranked[1], "○")}</strong></div><div><span>隠しキャラ</span><strong>${markLabel(consensus.value, "☆")}</strong></div></div></section>
    <section class="recommend-card"><span>波乱警報 <small>荒れる可能性</small></span><h3>${escapeHtml(simpleVolatilityLabel(volatility?.level))}</h3>${volatilityMeterHtml(volatility)}<div class="recommend-metrics"><div class="metric"><span>1点</span><strong>${yen(unitStake)}</strong></div><div class="metric"><span>バトルプラン</span><strong>3種類</strong></div><div class="metric"><span>AI予想家</span><strong>5人</strong></div></div></section></div>`;
}

function strategyMeetingHtml(prediction, consensus) {
  const agents = normalizedAgents(prediction);
  const meeting = leagueSystem?.meetingDialogue(prediction, agents) ?? { lines: [], agreementCount: 0, split: false };
  const lines = meeting.lines.map((line, index) => {
    const persona = personaForId(line.agentId);
    return `<article class="strategy-speaker ${line.agentId} ${Number(line.horseNumber) === Number(meeting.agreementHorse) ? "agrees" : "challenges"}">${characterImageHtml(line.agentId, "normal", "strategy-character", index === 0)}<div><header><strong>${escapeHtml(persona.displayName)}</strong><span>${line.horseNumber ? `${line.horseNumber}番を指名` : "確認中"}</span></header><p>「${escapeHtml(line.text)}」</p></div></article>`;
  }).join("");
  return `<section class="strategy-meeting"><header class="strategy-title"><div><span>STRATEGY MEETING</span><h2>5人の作戦会議</h2></div><strong class="conflict-badge ${meeting.split ? "split" : "agree"}">${meeting.split ? "意見対立" : `${meeting.agreementCount}/5人が同じ方向`}</strong></header><div class="strategy-dialogue">${lines}</div><p class="strategy-caption">5人は同じ予想を言い換えているのではなく、能力・穴・展開・数理・評価集中を別々に採点しています。</p></section>`;
}

function gameMetricsHtml(prediction, consensus, top, volatility) {
  const agents = [...normalizedAgents(prediction).values()];
  const combat = Math.max(0, Math.min(100, Math.round(Number(consensus.top?.index || 0))));
  const returnRatio = expectedReturn(top);
  const treasure = returnRatio == null ? null : Math.max(0, Math.min(100, Math.round((returnRatio - .7) * 100)));
  const confidence = agents.length ? Math.round(agents.reduce((sum, agent) => sum + Number(agent.confidence || 0), 0) / agents.length * 100) : 0;
  return `<section class="battle-metrics"><header><span>BATTLE STATUS</span><h2>このレースの攻略値</h2></header><div class="battle-metric-grid">${meterCard("戦闘力", "競馬指数", combat, "power")}${meterCard("お宝度", "期待値", treasure, "treasure")}${meterCard("本気ゲージ", "AI自信度", confidence, "confidence")}${meterCard("波乱警報", "荒れる可能性", Number(volatility?.score || 0), "volatility")}</div><p>お宝度とは、オッズとAIが算出した勝率をもとに評価した期待値を、ゲーム風に表現した指標です。</p></section>`;
}

function meterCard(label, formal, value, className) {
  if (!Number.isFinite(Number(value))) return `<article class="battle-meter-card ${className} unavailable"><span>${label}<small>${formal}</small></span><strong>参考外</strong><i><b style="width:0"></b></i><em>予想時オッズ記録なし</em></article>`;
  const score = Math.max(0, Math.min(100, Math.round(Number(value || 0))));
  return `<article class="battle-meter-card ${className}" style="--meter:${score}"><span>${label}<small>${formal}</small></span><strong>${score}</strong><i><b></b></i></article>`;
}

function formalMetricsDetailsHtml(prediction, top) {
  const mark = prediction?.marks?.[0];
  const probability = Number(mark?.probability);
  const ratio = expectedReturn(top);
  return `<details class="formal-data-details"><summary>正式な指数・期待値を見る</summary><div><p><b>AI推定勝率:</b> ${Number.isFinite(probability) ? percent(probability) : "データなし"}</p><p><b>競馬期待値:</b> ${Number.isFinite(ratio) ? `${(ratio * 100).toFixed(0)}円 / 100円` : "対象データなし"}</p><p><b>競馬指数:</b> ${Number(prediction?.marks?.[0]?.index ?? prediction?.marks?.[0]?.score ?? 0).toFixed(0)}</p><p>予測値であり、的中や利益を保証するものではありません。</p></div></details>`;
}

function agentsHtml(prediction, result, consensus) {
  const agents = normalizedAgents(prediction);
  const cards = AGENTS.map((definition) => agentCardHtml(definition, agents.get(definition.id), result, prediction?.predictionContext)).join("");
  const runnerRows = consensus.ranked.slice(0, 8).map((horse) => `<tr><td><span class="horse-number">${horse.horseNumber}</span></td><td><strong>${escapeHtml(horse.horseName)}</strong></td>${AGENTS.map((agent) => `<td>${escapeHtml(simpleMark(agentMarkFor(agents.get(agent.id), horse.horseNumber)))}</td>`).join("")}<td><strong>${horse.recommendedBy}/5</strong></td><td>${Number(horse.index ?? 0).toFixed(0)}</td></tr>`).join("");
  return `<div class="section-heading"><div><span>ACE SELECTION</span><h2>AIごとのエース指名</h2></div></div><div class="agent-grid">${cards}</div><details class="runner-details"><summary>5人の指名と戦闘力を表で見る</summary><div class="table-scroll"><table class="consensus-table"><thead><tr><th>馬番</th><th>馬名</th>${AGENTS.map((agent) => `<th>${escapeHtml(agent.short)}</th>`).join("")}<th>指名人数</th><th>戦闘力</th></tr></thead><tbody>${runnerRows || `<tr><td colspan="9">予想を準備しています</td></tr>`}</tbody></table></div></details>`;
}

function agentCardHtml(definition, agent, result, predictionContext = "pre_race") {
  const persona = agentPersona(definition);
  const standing = leagueSeason.standings.find((row) => row.agentId === definition.id);
  const stateName = isFinalResult(result) ? "normal" : standing?.state || "normal";
  const heading = `<span class="agent-name">${characterImageHtml(definition.id, stateName, "agent-card-avatar")}<span><h3>${escapeHtml(persona.displayName)}</h3><small>${escapeHtml(persona.title)}</small></span></span>`;
  if (!agent || agent.status !== "available") return `<article class="agent-card ${definition.id} unavailable"><header>${heading}<span class="status-badge waiting">準備中</span></header><p>${persona.voice}</p></article>`;
  const marks = (agent.marks ?? []).slice(0, 3);
  const top = marks[0];
  const positions = resultPositionMap(result);
  const finishLabels = resultFinishLabelMap(result);
  const hit = marks.some((mark) => positions.get(Number(mark.horseNumber)) === 1);
  const verified = predictionContext === "pre_race";
  return `<article class="agent-card ${definition.id}"><header>${heading}${isFinalResult(result) && verified ? `<span class="hit-badge ${hit ? "hit" : "miss"}">${hit ? "✓ 的中" : "× 不的中"}</span>` : `<span class="status-badge ${verified ? "ready" : "waiting"}">${verified ? "予想あり" : "参考"}</span>`}</header>
    <div class="agent-marks">${marks.map((mark, index) => `<div class="agent-mark"><span>${["◎", "○", "▲"][index]}</span><strong>${number(mark.horseNumber)}番 ${escapeHtml(mark.horseName)}</strong>${isFinalResult(result) ? `<small>${escapeHtml(finishLabels.get(Number(mark.horseNumber)) ?? "結果なし")}</small>` : ""}</div>`).join("")}</div>
    <p><b>${escapeHtml(agent.opinion ?? persona.voice)}</b></p><footer><span>必殺技</span><strong>${escapeHtml(persona.ultimate)}</strong></footer></article>`;
}

function agentPersona(definition) {
  const base = AGENT_PERSONAS[definition?.id] ?? { name: definition?.name, symbol: definition?.short, role: "予想担当", focus: definition?.description, voice: "根拠をもとに評価します。" };
  const league = leagueSystem?.PERSONAS?.[definition?.id] ?? {};
  return { ...base, ...league, name: league.title || base.name, displayName: league.displayName || base.name,
    title: league.title || base.name, epithet: league.epithet || base.role, ultimate: league.ultimate || "データチェック" };
}

function personaForId(agentId) {
  return agentPersona(AGENTS.find((agent) => agent.id === agentId) || { id: agentId, name: agentId, short: "AI" });
}

function simpleMark(mark) { return ({ "◎": "1", "○": "2", "▲": "3", "△": "4", "☆": "気" })[mark] ?? mark; }

function betsHtml(raceNo, track, top) {
  const prediction = findPrediction(raceNo, track);
  const groups = agentTicketGroups(prediction);
  if (!groups.length) return empty("予想データを確認しています。");
  return `<div class="bet-section-head"><div><span>BATTLE PLAN・各100円</span><h2>5人それぞれのバトルプラン</h2><p>買い目とは、各AIが選んだ単勝・馬連・3連複の組み合わせです。</p></div></div><div class="agent-ticket-groups">${groups.map(agentTicketGroupHtml).join("")}</div>`;
}
function agentTicketGroupHtml(group) {
  const persona = agentPersona(group.definition);
  const cards = group.tickets.map((ticket) => `<article class="bet-card">${paperTicketHtml(ticket, group.prediction, false, group.agent.marks)}<p class="ticket-help"><b>理由：</b>${escapeHtml(ticketReason(group.agent, ticket))}</p></article>`).join("");
  const total = group.tickets.reduce((sum, ticket) => sum + ticket.totalInvestmentYen, 0);
  return `<section class="agent-ticket-group ${group.definition.id}"><header>${characterImageHtml(group.definition.id, "normal", "agent-card-avatar")}<div><span>BATTLE PLAN</span><h3>${escapeHtml(persona.displayName)}</h3><p>${escapeHtml(persona.ultimate)}</p></div><strong>合計 ${yen(total)}</strong></header><div class="bet-card-list">${cards}</div></section>`;
}
function agentTicketGroups(prediction) {
  const agents = normalizedAgents(prediction);
  return AGENTS.map((definition) => ({ definition, agent: agents.get(definition.id) }))
    .filter((group) => group.agent?.status === "available" && group.agent.marks?.length)
    .map((group) => ({ ...group, prediction, tickets: forecastPolicy.buildForecastTickets({ marks: group.agent.marks }, unitStake).map((ticket) => ({ ...ticket, comment: `${agentPersona(group.definition).name}の印から作成した${ticket.betType}${ticket.method}です。` })) }));
}

function paperTicketHtml(ticket, prediction, resultMode = false, agentMarks = []) {
  const keys = ticket.ticketKeys?.length ? ticket.ticketKeys : String(ticket.selection ?? "").split("/").map((row) => row.trim()).filter(Boolean);
  const displayKeys = ticket.betType === "3連複" ? [trioBoxLabel(ticket, keys)] : keys;
  const combinationLabel = ticket.betType === "馬連" ? "期待順（予想スコア）" : ticket.betType === "3連複" ? "5頭BOX" : "組み合わせ";
  const resultStamp = resultMode ? `<span class="ticket-result-stamp ${ticket.hit ? "hit" : "miss"}">${ticket.hit ? "的中" : "不的中"}</span>` : "";
  const typeParts = ({ 単勝: ["単", "勝"], 馬連: ["馬", "連"], "3連複": ["3", "複"] })[ticket.betType] ?? [ticket.betType, "券"];
  const meeting = ticketMeetingDetails(prediction);
  const horseNames = new Map([...(prediction?.marks ?? []), ...(agentMarks ?? [])].map((mark) => [Number(mark.horseNumber), mark.horseName]));
  const dateDigits = String(prediction?.date ?? "").replace(/\D/g, "").slice(-6) || "000000";
  const serial = `${dateDigits}-${String(number(prediction?.raceNo)).padStart(2, "0")}-${String(ticket.points).padStart(2, "0")}`;
  const investment = ticket.totalInvestmentYen ?? ticket.investmentYen;
  return `<div class="digital-ticket paper-ticket ticket-points-${ticket.points} ${resultMode ? "paper-ticket--result" : ""}">${resultStamp}<span class="ticket-security-stripe" aria-hidden="true"></span>
    <section class="ticket-stub"><small>${escapeHtml(meeting.session)}</small><strong>${escapeHtml(meeting.venue)}</strong><div class="ticket-race-number"><b>${number(prediction?.raceNo)}</b><span>レース</span></div><div class="ticket-checks" aria-hidden="true"><i></i><i></i></div><span class="ticket-serial">${escapeHtml(serial)}</span></section>
    <section class="ticket-type-panel" aria-label="${escapeHtml(ticket.betType)}"><small>UMAYOMI</small><b>${escapeHtml(typeParts[0])}</b><strong>${escapeHtml(typeParts[1])}</strong><span>AI</span></section>
    <section class="ticket-main"><span class="ticket-brand-watermark" aria-hidden="true">UMAYOMI</span><header class="ticket-print-head"><span>ウマヨミ予想券 <em>購入不可</em></span><strong>${escapeHtml(ticket.betType)}</strong><small>${escapeHtml(ticket.method)}</small></header><div class="ticket-numbers"><span>${combinationLabel}</span><ol class="ticket-combination-list ${ticket.betType === "3連複" ? "is-box-summary" : displayKeys.length > 5 ? "is-dense" : ""}">${displayKeys.map((key, index) => { const horseName = ticket.betType === "単勝" ? horseNames.get(Number(key)) : ""; const selection = horseName ? `<b class="win-selection"><span>${escapeHtml(key)}</span><em>${escapeHtml(horseName)}</em></b>` : `<b>${escapeHtml(key)}</b>`; return `<li><i>${index + 1}</i>${selection}<small>${yen(unitStake)}</small></li>`; }).join("")}</ol></div><footer class="ticket-cost"><span>各 ${yen(unitStake)}</span><span>${ticket.points}点</span><strong><small>合計</small>${yen(investment)}</strong></footer>${resultMode ? `<div class="ticket-settlement"><span>払戻額 ${yen(ticket.payoutYen)}</span><strong>収支 ${signedYen(ticket.netYen)}</strong></div>` : ""}<div class="ticket-barcode" aria-hidden="true"></div></section>
  </div>`;
}

function trioBoxLabel(ticket, keys) {
  const numbers = [...new Set([String(ticket.selection ?? ""), ...keys]
    .flatMap((value) => String(value).match(/\d+/g) ?? []).map(Number))]
    .filter(Number.isFinite).sort((left, right) => left - right).slice(0, 5);
  return numbers.join("-");
}

function ticketMeetingDetails(prediction) {
  const date = String(prediction?.date ?? "");
  const meetingName = String(prediction?.meetingName ?? "開催");
  const match = meetingName.match(/(\d+)回(.+?)(\d+)日/);
  const year = date.slice(0, 4) || "----";
  return match ? { session: `${year}年${match[1]}回${match[3]}日`, venue: match[2] }
    : { session: formatDate(date), venue: meetingName };
}

function ticketReason(agent, ticket) {
  const focus = ({ safety: "能力と安定性を重視", sniper: "低評価でも実力が残る馬を重視", pace: "展開と位置取りを重視",
    analyst: "コース・距離・騎手の数字を重視", contrarian: "評価集中を割り引き別候補を重視" })[agent?.agentId] ?? "予想スコアを重視";
  if (ticket.betType === "単勝") return `${focus}。最上位を単勝で選択。`;
  if (ticket.betType === "馬連") return `${focus}。上位組み合わせ5点。`;
  return `${focus}。上位5頭の3連複BOX。`;
}

function runnersHtml(result, prediction) {
  const marks = new Map((prediction?.marks ?? []).map((row) => [Number(row.horseNumber), row.mark]));
  const rows = result?.runners ?? [];
  if (!rows.length) return empty("出馬表データがありません");
  return `<div class="table-scroll"><table class="runner-table"><thead><tr><th>着順</th><th>枠</th><th>馬番</th><th>予想</th><th>馬名</th><th>性齢</th><th>重さ</th><th>騎手</th><th>調教師</th><th>人気</th></tr></thead><tbody>${rows.map((row) => `<tr class="${Number(row.finishPosition) <= 3 ? "top-finish" : ""}"><td>${escapeHtml(row.finishText ?? "出走予定")}</td><td>${row.gateNumber ?? "--"}</td><td><strong>${row.horseNumber}</strong></td><td>${escapeHtml(marks.get(Number(row.horseNumber)) ?? "")}</td><td><strong>${escapeHtml(row.horseName)}</strong></td><td>${escapeHtml(row.sexAge)}</td><td>${row.carriedWeight ?? "--"}</td><td>${escapeHtml(row.jockeyName)}</td><td>${escapeHtml(row.trainerName)}</td><td>${row.popularity ? `${row.popularity}人気` : "--"}</td></tr>`).join("")}</tbody></table></div>`;
}

function resultDramaHtml(race, track, prediction, result) {
  if (!isFinalResult(result)) return `<section class="result-preview"><span>NEXT EPISODE</span><h2>レース後に勝敗ドラマが始まります</h2><p>MVP、戦犯、覚醒、逆神とリーグ順位の変動をここで発表します。</p></section>`;
  const replay = findReplayAudit(result?.raceId ?? prediction?.raceId);
  const drama = leagueSystem?.raceDrama(replay);
  if (!drama) return "";
  const hasWinner = Number(drama.mvp?.netYen || 0) > 0;
  const hasAwakened = drama.awakened?.hit === true;
  const roles = [
    ["MVP", drama.mvp, hasWinner ? "happy" : "defeat", "mvp"],
    ["戦犯", drama.culprit, "defeat", "culprit"],
    [hasAwakened ? "覚醒AI" : "覚醒AIなし", drama.awakened, hasAwakened ? "awakened" : "defeat", "awakened"],
    ["逆神AI", drama.jinx, "angry", "jinx"],
  ];
  const effect = hasWinner
    ? `<div class="victory-confetti" aria-hidden="true">${Array.from({ length: 12 }, (_, index) => `<i style="--i:${index}"></i>`).join("")}</div>`
    : `<div class="defeat-crack" aria-hidden="true"><i></i><i></i><i></i></div>`;
  return `<section class="result-drama ${hasWinner ? "has-winner" : "all-defeated"}">${effect}<header><div><span>RACE AFTER</span><h2>勝敗ドラマ</h2></div><button type="button" class="share-result-button" data-share-race="${escapeHtml(replay?.raceId || "")}">結果を共有</button></header><div class="result-role-grid">${roles.map(([label, row, stateName, className]) => {
    const persona = personaForId(row?.agentId);
    return `<article class="result-role-card ${className}"><span>${label}</span>${characterImageHtml(row?.agentId, stateName, "result-role-character")}<strong>${escapeHtml(persona.displayName)}</strong><small>${signedYen(row?.netYen)}</small></article>`;
  }).join("")}</div><div class="rank-change-strip">${leagueSeason.standings.map((row) => `<span class="${row.agentId}"><b>${row.rank}位</b>${escapeHtml(personaForId(row.agentId).displayName)}<i>${row.rankDelta > 0 ? `▲${row.rankDelta}` : row.rankDelta < 0 ? `▼${Math.abs(row.rankDelta)}` : "－"}</i></span>`).join("")}</div></section>`;
}

function reflectionMeetingHtml(prediction, result) {
  if (!isFinalResult(result)) return "";
  const replay = findReplayAudit(result?.raceId ?? prediction?.raceId);
  if (!replay) return "";
  const lines = AGENTS.map((definition) => {
    const group = replay.agentTickets?.find((row) => row.agentId === definition.id && row.status === "available");
    const won = group?.tickets?.some((ticket) => ticket.hit) === true;
    const totals = settledTicketTotals(group?.tickets || []);
    const persona = personaForId(definition.id);
    return `<article class="reflection-line ${definition.id} ${won ? "won" : "lost"}">${characterImageHtml(definition.id, won ? "happy" : "defeat", "reflection-character")}<div><header><strong>${escapeHtml(persona.displayName)}</strong><span>${won ? "的中" : "不的中"}・${signedYen(totals.netYen)}</span></header><p>「${escapeHtml(leagueSystem?.resultComment(definition.id, won) || "次の予想へ反映します。") }」</p></div></article>`;
  }).join("");
  const next = nextRacePreview(result);
  return `<section class="reflection-meeting"><header><span>REVIEW MEETING</span><h2>レース後の反省会</h2></header><div>${lines}</div>${next ? `<a class="next-episode" href="${escapeHtml(next.href)}"><span>NEXT BATTLE</span><strong>${escapeHtml(next.label)}</strong><small>次の作戦会議へ ›</small></a>` : ""}</section>`;
}

function comparisonHtml(race, track, prediction, result) {
  const snapshotTime = prediction?.publishedAt ?? prediction?.generatedAt ?? prediction?.oddsObservedAt ?? null;
  const podium = [...(result?.runners ?? [])].filter((row) => Number(row.finishPosition) >= 1 && Number(row.finishPosition) <= 3).sort((a, b) => a.finishPosition - b.finishPosition);
  const replay = findReplayAudit(result?.raceId ?? prediction?.raceId);
  const published = replay?.eligibleForActualPerformance === true;
  const audit = replay;
  const totals = settledRaceTotals(audit);
  if (!prediction && !isFinalResult(result)) return empty("結果を待っています。");
  return `<div class="snapshot-band"><div><strong>${published ? "レース前に出した予想" : "結果とくらべた参考予想"}</strong><small>${snapshotTime ? formatDateTime(snapshotTime) : "時刻の記録はありません"}</small></div><span class="status-badge ${published ? "ready" : "waiting"}">${published ? "保存済み" : prediction ? "参考" : "記録なし"}</span></div>
    ${!published && replay ? `<p class="plain-explanation">この予想はレース後に作った参考です。予想家の成績には入れません。</p>` : ""}
    <div class="finish-podium">${[0, 1, 2].map((index) => `<div><span>${index + 1}着</span><strong>${podium[index] ? `${podium[index].horseNumber}番 ${escapeHtml(podium[index].horseName)}` : "結果待ち"}</strong></div>`).join("")}</div>
    ${totals.tickets ? settledRaceSummaryHtml(totals) : ""}
    ${audit?.agentTickets?.length ? `<div class="agent-ticket-groups" style="margin-top:10px">${audit.agentTickets.filter((group) => group.status === "available").map((group) => agentSettledTicketGroupHtml(group, audit)).join("")}</div>` : ""}
    ${isFinalResult(result) ? `<div class="agent-grid" style="margin-top:10px">${AGENTS.map((agent) => agentCardHtml(agent, normalizedAgents(prediction).get(agent.id), result, prediction?.predictionContext)).join("")}</div>` : `<p class="plain-explanation">レースが終わると、5人の予想と結果をここでくらべられます。</p>`}`;
}

function agentSettledTicketGroupHtml(group, record) {
  const definition = AGENTS.find((agent) => agent.id === group.agentId);
  if (!definition) return "";
  const persona = agentPersona(definition);
  const totals = settledTicketTotals(group.tickets);
  const agentRecord = record?.agents?.find((agent) => agent.agentId === group.agentId);
  return `<section class="agent-ticket-group"><header>${characterImageHtml(definition.id, totals.netYen >= 0 ? "happy" : "defeat", "agent-card-avatar")}<div><h3>${escapeHtml(persona.displayName)}の結果</h3><p>${totals.points}点を照合</p></div><strong>使った額 ${yen(totals.investmentYen)} → 払戻 ${yen(totals.payoutYen)}・収支 ${signedYen(totals.netYen)}</strong></header><div class="bet-card-list">${group.tickets.map((ticket) => `<article class="bet-card">${paperTicketHtml(ticket, record, true, agentRecord?.marks)}<p class="ticket-result ${ticket.hit ? "positive" : "negative"}">${ticket.hit ? `✓ 的中・収支 ${signedYen(ticket.netYen)}` : `× 不的中・収支 ${signedYen(ticket.netYen)}`}</p></article>`).join("")}</div></section>`;
}

function settledRaceSummaryHtml(totals) {
  return `<section class="settled-race-summary"><header><span>5人分の結果</span><strong>${totals.hitTickets} / ${totals.tickets}券種が的中</strong></header><div class="result-finance result-finance--five"><div class="metric"><span>投資額</span><strong>${yen(totals.investmentYen)}</strong></div><div class="metric"><span>払戻額</span><strong>${yen(totals.payoutYen)}</strong></div><div class="metric"><span>収支</span><strong class="${totals.netYen >= 0 ? "positive" : "negative"}">${signedYen(totals.netYen)}</strong></div><div class="metric"><span>回収率</span><strong>${percent(totals.recoveryRate)}</strong></div><div class="metric"><span>購入点数</span><strong>${totals.points}点</strong></div></div></section>`;
}

function bindRaceDetailEvents() {
  document.querySelectorAll(".detail-tabs button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === state.detailTab);
    button.addEventListener("click", () => navigateToRace(state.date, state.venueCode, state.raceNo, button.dataset.tab, true));
  });
  document.querySelector("[data-share-race]")?.addEventListener("click", (event) => {
    const record = findReplayAudit(event.currentTarget.dataset.shareRace);
    shareLeagueResult(record, leagueSystem?.raceDrama(record));
  });
}

async function renderResultsPage() {
  const controls = document.querySelector("#result-filter");
  const root = document.querySelector("#result-list");
  renderLatestResultShowcase();
  controls.innerHTML = `<span class="archive-loading">全期間を読み込み中</span>`;
  root.setAttribute("aria-busy", "true");
  try {
    const index = await loadHistoricalArchiveIndex();
    const monthMeta = index.months.find((row) => row.month === state.archiveMonth) ?? index.months[0];
    state.archiveMonth = monthMeta.month;
    const monthData = await loadHistoricalArchiveMonth(monthMeta.file);
    const sortedDays = [...monthData.days].sort((left, right) => right.date.localeCompare(left.date));
    const selectedDay = sortedDays.find((day) => day.date === state.archiveDate) ?? sortedDays[0];
    state.archiveDate = selectedDay.date;
    controls.innerHTML = archiveControlsHtml(index, sortedDays);
    bindArchiveControls();
    root.innerHTML = `${archiveOverviewHtml(index)}${archiveDayHtml(selectedDay)}`;
  } catch (error) {
    console.error(error);
    controls.innerHTML = "";
    root.innerHTML = empty("アーカイブを読み込めませんでした");
  } finally {
    root.removeAttribute("aria-busy");
  }
}

function renderLatestResultShowcase() {
  const root = document.querySelector("#latest-result-showcase");
  if (!root) return;
  const records = [...(replayAudit.records || [])].sort((left, right) => String(right.date).localeCompare(String(left.date)) || Number(right.raceNo) - Number(left.raceNo)).slice(0, 3);
  if (!records.length) { root.innerHTML = ""; return; }
  root.innerHTML = `<section class="latest-results-panel"><header><div><span>LATEST BATTLE</span><h2>直近の勝敗ドラマ</h2></div><small>公開データで結果照合済み</small></header><div class="latest-result-cards">${records.map((record, index) => {
    const drama = leagueSystem.raceDrama(record);
    const mvp = personaForId(drama?.mvp?.agentId);
    const track = currentEdition.meetings?.find((meeting) => meeting.date === record.date)?.tracks?.find((row) => row.meetingName === record.meetingName);
    const venueCode = track?.venueCode || record.venueCode;
    const slug = leagueSystem.raceSlug(record.date, venueCode, record.raceNo);
    const mvpWon = Number(drama?.mvp?.netYen || 0) > 0;
    return `<a class="latest-result-card ${index === 0 ? "featured" : ""} ${mvpWon ? "won" : "lost"}" href="/result/${escapeHtml(slug)}/"><div><span>${escapeHtml(formatDate(record.date))}・${escapeHtml(record.meetingName)} ${record.raceNo}R</span><strong>${escapeHtml(record.raceTitle)}</strong></div>${characterImageHtml(drama?.mvp?.agentId, mvpWon ? "happy" : "defeat", "latest-result-character", index === 0)}<p><small>MVP</small><b>${escapeHtml(mvp.displayName)}</b><em class="${mvpWon ? "positive" : "negative"}">${signedYen(drama?.mvp?.netYen)}</em></p><i>反省会を見る ›</i></a>`;
  }).join("")}</div></section>`;
}

function loadHistoricalArchiveIndex() {
  if (!historicalArchiveIndexPromise) historicalArchiveIndexPromise = fetch("data/historical-agent-archive/index.json?v=historical-replay-v2")
    .then((response) => { if (!response.ok) throw new Error(`archive index ${response.status}`); return response.json(); })
    .then((index) => {
      if (!index.integrity?.allCompleteRacesArchived || !index.integrity?.investmentMatchesPolicy) throw new Error("archive integrity failed");
      return index;
    });
  return historicalArchiveIndexPromise;
}

function loadHistoricalArchiveMonth(file) {
  if (!historicalArchiveMonthCache.has(file)) historicalArchiveMonthCache.set(file, fetch(`data/historical-agent-archive/${file}?v=historical-replay-v2`)
    .then((response) => { if (!response.ok) throw new Error(`archive month ${response.status}`); return response.json(); }));
  return historicalArchiveMonthCache.get(file);
}

function archiveControlsHtml(index, days) {
  const activeYear = state.archiveMonth.slice(0, 4);
  const years = [...new Set(index.months.map((row) => row.month.slice(0, 4)))];
  const yearOptions = years.map((year) => `<option value="${year}" ${year === activeYear ? "selected" : ""}>${year}年</option>`).join("");
  const monthOptions = index.months
    .filter((row) => row.month.startsWith(`${activeYear}-`))
    .map((row) => `<option value="${escapeHtml(row.month)}" ${row.month === state.archiveMonth ? "selected" : ""}>${Number(row.month.slice(5))}月（${number(row.races)}R）</option>`)
    .join("");
  const dayButtons = days.map((day) => `<button type="button" class="${day.date === state.archiveDate ? "active" : ""}" data-archive-date="${escapeHtml(day.date)}">${formatDate(day.date)}<small>${day.races.length}R</small></button>`).join("");
  return `<div class="archive-period-selects"><label class="archive-month-select"><span>年</span><select id="archive-year">${yearOptions}</select></label><label class="archive-month-select"><span>月</span><select id="archive-month">${monthOptions}</select></label></div><div class="archive-day-tabs" aria-label="開催日">${dayButtons}</div>`;
}

function bindArchiveControls() {
  document.querySelector("#archive-year")?.addEventListener("change", async (event) => {
    const selectedYear = event.currentTarget.value;
    const index = await loadHistoricalArchiveIndex();
    state.archiveMonth = index.months.find((row) => row.month.startsWith(`${selectedYear}-`))?.month ?? state.archiveMonth;
    state.archiveDate = "";
    renderResultsPage();
  });
  document.querySelector("#archive-month")?.addEventListener("change", (event) => {
    state.archiveMonth = event.currentTarget.value;
    state.archiveDate = "";
    renderResultsPage();
  });
  document.querySelectorAll("button[data-archive-date]").forEach((button) => button.addEventListener("click", () => {
    state.archiveDate = button.dataset.archiveDate;
    renderResultsPage();
  }));
}

function archiveOverviewHtml(index) {
  const totals = index.totals;
  return `<section class="archive-overview" aria-label="全期間の参考成績"><div><span>全レース</span><strong>${number(index.coverage.archivedRaces)}</strong></div><div><span>開催日</span><strong>${number(index.coverage.archivedDays)}日</strong></div><div><span>投資額</span><strong>${yen(totals.investmentYen)}</strong></div><div><span>払戻額</span><strong>${yen(totals.payoutYen)}</strong></div><div><span>回収率</span><strong>${percent(totals.recoveryRate)}</strong></div></section>`;
}

function archiveDayHtml(day) {
  const ranked = [...day.races].sort((left, right) => archiveRaceRecovery(right) - archiveRaceRecovery(left) || Number(left[1]) - Number(right[1]));
  const totals = day.totals;
  return `<section class="result-day-archive historical"><header><div><span>${formatDate(day.date)}</span><strong>${day.races.length}レース</strong></div><dl><div><dt>投資額</dt><dd>${yen(totals.investmentYen)}</dd></div><div><dt>払戻額</dt><dd>${yen(totals.payoutYen)}</dd></div><div><dt>収支</dt><dd class="${totals.netYen >= 0 ? "positive" : "negative"}">${signedYen(totals.netYen)}</dd></div></dl></header><div class="result-day-list">${ranked.map((race, index) => archiveRaceHtml(race, day.date, index + 1)).join("")}</div></section>`;
}

function archiveRaceHtml(row, date, rank) {
  const [venueCode, raceNo, raceName, surface, distanceM, podium, horsePairs, agents, totals] = row;
  const [points, payoutYen] = totals;
  const investmentYen = points * unitStake;
  const netYen = payoutYen - investmentYen;
  const recoveryRate = investmentYen ? payoutYen / investmentYen : 0;
  const rankClass = rank <= 3 ? ` rank-${rank}` : "";
  const winner = podium[0]?.[0] ?? "-";
  return `<details class="historical-race"><summary class="result-card"><span class="result-rank${rankClass}">${rank}</span><div class="result-card-title"><h3>${escapeHtml(venueName(venueCode))} ${raceNo}R ${escapeHtml(raceName)}</h3><p>${escapeHtml(surface)} ${number(distanceM)}m・1着 ${winner}番</p></div><div class="result-stat result-stat-main"><span>回収率</span><strong>${percent(recoveryRate)}</strong></div><div class="result-stat"><span>収支</span><strong class="${netYen >= 0 ? "positive" : "negative"}">${signedYen(netYen)}</strong></div><div class="result-stat"><span>払戻額</span><strong>${yen(payoutYen)}</strong></div><span class="result-arrow" aria-hidden="true">›</span></summary>${archiveRaceDetailsHtml({ date, venueCode, raceNo, raceName, podium, horsePairs, agents })}</details>`;
}

function archiveRaceDetailsHtml({ date, venueCode, raceNo, raceName, podium, horsePairs, agents }) {
  const names = new Map(horsePairs.map(([numberValue, name]) => [Number(numberValue), name]));
  const podiumHtml = podium.map(([numberValue, name], index) => `<div><span>${index + 1}着</span><strong>${numberValue}番 ${escapeHtml(name)}</strong></div>`).join("");
  const agentsHtml = agents.map(([markNumbers, payouts], index) => {
    const definition = AGENTS[index];
    const persona = agentPersona(definition);
    const marks = markNumbers.map((numberValue, markIndex) => ({ horseNumber: Number(numberValue), horseName: names.get(Number(numberValue)) ?? "", score: 5 - markIndex }));
    const tickets = forecastPolicy.buildForecastTickets({ marks }, unitStake);
    const ticketHtml = tickets.map((ticket, ticketIndex) => {
      const payoutYen = Number(payouts[ticketIndex] || 0);
      const netYen = payoutYen - ticket.totalInvestmentYen;
      return `<div class="archive-ticket ${payoutYen > 0 ? "hit" : "miss"}"><span>${payoutYen > 0 ? "✓ 的中" : "× 不的中"}・${escapeHtml(ticket.betType)}</span><strong>${escapeHtml(ticket.selection)}</strong><small>投資額 ${yen(ticket.totalInvestmentYen)} / 払戻額 ${yen(payoutYen)} / 収支 ${signedYen(netYen)}</small></div>`;
    }).join("");
    return `<article class="archive-agent ${definition.id}"><header>${characterImageHtml(definition.id, payouts.some((value) => Number(value) > 0) ? "happy" : "defeat", "archive-character")}<div><strong>${escapeHtml(persona.displayName)}</strong><small>${escapeHtml(persona.epithet)}</small></div><span>${["◎", "○", "▲"].map((mark, markIndex) => `${mark}${markNumbers[markIndex] ?? "-"}`).join(" ")}</span></header><p>${escapeHtml(persona.style)}</p><div class="archive-ticket-list">${ticketHtml}</div></article>`;
  }).join("");
  return `<div class="historical-race-detail"><div class="archive-race-meta"><span>${formatDate(date)}・${escapeHtml(venueName(venueCode))} ${raceNo}R</span><strong>${escapeHtml(raceName)}</strong></div><div class="finish-podium">${podiumHtml}</div><div class="archive-agent-list">${agentsHtml}</div><p class="archive-note">時系列再現の参考値です。実際に購入した記録ではありません。</p></div>`;
}

function archiveRaceRecovery(row) { const points = Number(row[8]?.[0] || 0); return points ? Number(row[8]?.[1] || 0) / (points * unitStake) : 0; }
function venueName(code) { return ({ "01": "札幌", "02": "函館", "03": "福島", "04": "新潟", "05": "東京", "06": "中山", "07": "中京", "08": "京都", "09": "阪神", "10": "小倉" })[String(code).padStart(2, "0")] ?? code; }

function resultListCard(result, rank, totals) {
  const track = trackForResult(result);
  const prediction = findPrediction(result.raceNo, track, resultDate(result));
  const replay = findReplayAudit(result.raceId);
  const consensus = buildConsensus(prediction);
  const audit = replay;
  const agentCount = audit?.agentTickets?.filter((group) => group.status === "available").length ?? 0;
  const rankClass = rank <= 3 ? ` rank-${rank}` : "";
  return `<button type="button" class="result-card" data-result-race="${escapeHtml(resultIdentity(result))}"><span class="result-rank${rankClass}">${rank}</span><div class="result-card-title"><h3>${escapeHtml(result.meetingName)} ${result.raceNo}R ${escapeHtml(result.raceTitle)}</h3><p>◎${consensus.top?.horseNumber ?? "-"}番・${agentCount}人</p></div><div class="result-stat result-stat-main"><span>回収率</span><strong>${percent(totals.recoveryRate)}</strong></div><div class="result-stat"><span>収支</span><strong class="${totals.netYen >= 0 ? "positive" : "negative"}">${signedYen(totals.netYen)}</strong></div><div class="result-stat"><span>払戻額</span><strong>${yen(totals.payoutYen)}</strong></div><span class="result-arrow" aria-hidden="true">›</span></button>`;
}

function renderPerformancePage() {
  renderPeriodTabs("#performance-filter", state.performancePeriod, (value) => { state.performancePeriod = value; renderPerformancePage(); });
  document.querySelector("#all-race-audit").innerHTML = "";
  const ranked = AGENTS.map((agent) => ({ agent, replay: agentReplayMetrics(agent.id) }))
    .sort((left, right) => Number(right.replay.raceHitRate ?? -1) - Number(left.replay.raceHitRate ?? -1) || Number(right.replay.recoveryRate ?? -1) - Number(left.replay.recoveryRate ?? -1));
  const profiles = state.agentId ? ranked.filter((row) => row.agent.id === state.agentId) : ranked;
  document.querySelector("#performance-summary").innerHTML = `<section class="agent-rank-board" aria-label="予想家成績ランキング">${ranked.map((row, index) => agentRankRowHtml(row.agent, row.replay, index + 1)).join("")}</section><div class="agent-profile-list">${profiles.map((row) => agentProfileHtml(row.agent, row.replay)).join("")}</div>`;
}

function agentRankRowHtml(agent, replay, rank) {
  const persona = agentPersona(agent);
  const rankClass = rank <= 3 ? ` rank-${rank}` : "";
  const standing = leagueSeason.standings.find((row) => row.agentId === agent.id);
  return `<a class="agent-rank-row ${agent.id}" href="/agents/${agent.id}/"><span class="result-rank${rankClass}">${rank}</span>${characterImageHtml(agent.id, standing?.state || "normal", "rank-character")}<div><strong>${escapeHtml(persona.displayName)}</strong><small>${escapeHtml(persona.epithet)}</small></div><p><span>安定度 <small>的中率</small></span><b>${replay.races ? percent(replay.raceHitRate) : "-"}</b></p><p><span>獲得資金率 <small>回収率</small></span><b>${replay.investmentYen ? percent(replay.recoveryRate) : "-"}</b></p></a>`;
}

function agentProfileHtml(agent, replay = agentReplayMetrics(agent.id)) {
  const persona = agentPersona(agent);
  const standing = leagueSeason.standings.find((row) => row.agentId === agent.id);
  return `<article class="agent-profile ${agent.id}"><div class="profile-character-stage">${characterImageHtml(agent.id, standing?.state || "normal", "agent-profile-portrait")}<span>${escapeHtml(persona.metric)}</span></div><div class="agent-profile-body"><header><div><span class="eyebrow">${escapeHtml(persona.epithet)}</span><h2>${escapeHtml(persona.displayName)}</h2><p>${escapeHtml(persona.title)}</p></div><span class="agent-icon ${agent.id}">${escapeHtml(persona.symbol)}</span></header><blockquote>「${escapeHtml(persona.shortLine)}」</blockquote><p class="profile-personality">${escapeHtml(persona.personality)}</p><div class="profile-ability"><span>必殺技</span><strong>${escapeHtml(persona.ultimate)}</strong><small>${escapeHtml(persona.style)}</small></div><div class="condition-grid"><div><span>得意</span><strong>${escapeHtml(persona.strength)}</strong></div><div><span>苦手</span><strong>${escapeHtml(persona.weakness)}</strong></div></div><div class="agent-profile-metrics"><div><span>本命1着</span><strong>${replay.races ? percent(replay.winRate) : "-"}</strong></div><div><span>本命3着内</span><strong>${replay.races ? percent(replay.placeRate) : "-"}</strong></div><div><span>安定度 <small>的中率</small></span><strong>${replay.races ? percent(replay.raceHitRate) : "-"}</strong></div><div><span>獲得資金率 <small>回収率</small></span><strong>${replay.investmentYen ? percent(replay.recoveryRate) : "-"}</strong></div></div><div class="character-state-gallery" aria-label="${escapeHtml(persona.displayName)}の表情">${leagueSystem.STATES.map((stateName) => `<figure>${characterImageHtml(agent.id, stateName, "state-character")}<figcaption>${characterStateLabel(stateName)}</figcaption></figure>`).join("")}</div></div></article>`;
}

function renderSeasonPage() {
  const summary = document.querySelector("#season-summary");
  const standings = document.querySelector("#season-standings");
  const history = document.querySelector("#season-round-history");
  if (!summary || !standings || !history) return;
  const leader = leagueSeason.standings[0];
  const latestWeek = leagueSeason.latestWeek;
  const weekLabel = latestWeek?.dateFrom ? `${formatDate(latestWeek.dateFrom)}〜${formatDate(latestWeek.dateTo)}` : "結果待ち";
  summary.innerHTML = `<section class="season-summary-grid"><div><span>LATEST WEEK</span><strong>${escapeHtml(weekLabel)}</strong></div><div><span>1位</span><strong>${escapeHtml(personaForId(leader?.agentId).displayName)}</strong></div><div><span>RACES</span><strong>${number(latestWeek?.raceCount || 0)}</strong></div><div><span>RECOVERY</span><strong>${leader?.investmentYen ? percent(leader.recoveryRate) : "-"}</strong></div></section><button type="button" class="share-season-button" data-share-season>最新週を共有</button>`;
  standings.innerHTML = `<section class="season-table"><header><span>LATEST WEEK</span><h2>最新週の結果</h2></header>${leagueSeason.standings.map((row) => {
    const persona = personaForId(row.agentId);
    return `<a class="season-row ${row.agentId}" href="/agents/${row.agentId}/"><b>${row.rank}</b>${characterImageHtml(row.agentId, row.state, "season-character")}<span><strong>${escapeHtml(persona.displayName)}</strong><small>${number(row.raceHits)}/${number(row.races)}レース的中</small></span><div><small>収支</small><strong class="${row.netYen >= 0 ? "positive" : "negative"}">${signedYen(row.netYen)}</strong></div><div><small>回収率</small><strong>${row.investmentYen ? percent(row.recoveryRate) : "-"}</strong></div><em>${row.rankDelta > 0 ? `▲ ${row.rankDelta}` : row.rankDelta < 0 ? `▼ ${Math.abs(row.rankDelta)}` : "－"}</em></a>`;
  }).join("")}</section>`;
  const latestWeeks = [...(leagueSeason.weeklyHistory || [])].reverse().slice(0, 8);
  history.innerHTML = `<header><div><span>WEEKLY HISTORY</span><h2>直近8週の結果</h2></div><small>確定結果から自動更新</small></header><div class="round-history-list">${latestWeeks.map((week) => {
    const winner = week.standings?.[0];
    const winnerPersona = personaForId(winner?.agentId);
    return `<article class="round-history-card"><span>第${week.week}週</span><div><strong>${escapeHtml(formatDate(week.dateFrom))}〜${escapeHtml(formatDate(week.dateTo))}</strong><small>${number(week.raceCount)}レースを集計</small></div><p>${characterImageHtml(winner?.agentId, winner?.netYen >= 0 ? "happy" : "defeat", "round-character")}<span><small>1位</small><b>${escapeHtml(winnerPersona.displayName)}</b></span></p><em>${signedYen(winner?.netYen)}・${winner?.investmentYen ? percent(winner.recoveryRate) : "-"}</em></article>`;
  }).join("")}</div>`;
  summary.querySelector("[data-share-season]")?.addEventListener("click", () => shareWeeklyResults(latestWeek));
}

function agentReplayMetrics(agentId) {
  const records = (replayAudit.records ?? []).filter((record) => inPeriod(record.date, state.performancePeriod));
  const rows = records.flatMap((record) => (record.agents ?? []).filter((agent) => agent.agentId === agentId && agent.status === "available"));
  const groups = records.flatMap((record) => (record.agentTickets ?? []).filter((group) => group.agentId === agentId && group.status === "available"));
  const totals = settledTicketTotals(groups.flatMap((group) => group.tickets ?? []));
  const races = rows.length;
  return { races, winRate: races ? rows.filter((row) => row.topPickFinish === 1).length / races : null,
    placeRate: races ? rows.filter((row) => row.topPickFinish > 0 && row.topPickFinish <= 3).length / races : null,
    raceHitRate: groups.length ? groups.filter((group) => group.tickets?.some((ticket) => ticket.hit)).length / groups.length : null,
    ...totals };
}

function settledTicketTotals(tickets = []) {
  const investmentYen = tickets.reduce((sum, ticket) => sum + Number(ticket.investmentYen || 0), 0);
  const payoutYen = tickets.reduce((sum, ticket) => sum + Number(ticket.payoutYen || 0), 0);
  const points = tickets.reduce((sum, ticket) => sum + Number(ticket.points || 0), 0);
  return { tickets: tickets.length, points, hitTickets: tickets.filter((ticket) => ticket.hit === true).length, investmentYen, payoutYen,
    netYen: payoutYen - investmentYen, recoveryRate: investmentYen ? payoutYen / investmentYen : 0 };
}

function settledRaceTotals(audit) {
  return settledTicketTotals((audit?.agentTickets ?? []).filter((group) => group.status === "available").flatMap((group) => group.tickets ?? []));
}

function liveReplaySummary() {
  const summary = replayAudit.summary;
  return summary?.races ? summary : null;
}

function allRaceAuditSummary() {
  const rows = auditRows.filter((row) => Number.isInteger(row.points) && row.points > 0
    && Number(row.investmentYen) === Number(row.points) * unitStake && Number.isFinite(Number(row.payoutYen)));
  if (!rows.length) return null;
  const investmentYen = rows.reduce((sum, row) => sum + Number(row.investmentYen), 0);
  const payoutYen = rows.reduce((sum, row) => sum + Number(row.payoutYen), 0);
  return { races: new Set(rows.map((row) => row.raceId)).size, hits: rows.filter((row) => row.hit === true).length,
    investmentYen, payoutYen, netYen: payoutYen - investmentYen, roi: investmentYen ? payoutYen / investmentYen : null };
}

function performanceReports(period) {
  return aggregateSavedPerformance(period);
}

function aggregateSavedPerformance(period) {
  return [...AGENTS.map((agent) => ({ id: agent.id, name: agent.name })), { id: "master", name: "総合予想" }].map((definition) => {
    const rows = savedPerformance.records.filter((row) => row.agentId === definition.id && inPeriod(row.raceDate, period));
    return { ...definition, races: rows.length, winHits: rows.filter((row) => row.honmeiFinish === 1).length,
      placeHits: rows.filter((row) => row.honmeiFinish > 0 && row.honmeiFinish <= 3).length,
      markFinish: rows.filter((row) => row.markFinish === true).length,
      investment: rows.reduce((sum, row) => sum + (row.investmentYen ?? 0), 0),
      payout: rows.reduce((sum, row) => sum + (row.payoutYen ?? 0), 0) };
  });
}

function renderResearchPage() {
  const months = Number(dbStatus.completeMonths ?? 0);
  const totalMonths = Number(dbStatus.totalMonths ?? 0);
  const cards = [["収録月", `${number(months)} / ${number(totalMonths)}`, "1996年以降"], ["レース", number(dbStatus.races), "品質検査済み"], ["出走馬", number(dbStatus.runners), "正規化済み"], ["払戻", number(dbStatus.payouts), "JRA公式結果"]];
  document.querySelector("#research-overview").innerHTML = cards.map(([label, value, note]) => `<article class="research-card"><span>${label}</span><strong>${value}</strong><small>${note}</small></article>`).join("");
  document.querySelector("#model-methodology").innerHTML = `<p>勝率モデルはレース時点より前の履歴だけで特徴量を作り、walk-forward検証と確率校正を行います。買い目の期待払戻は、発走前オッズ×安全補正後の的中確率×${unitStake}円で計算します。</p><p>BOX・フォーメーションは構成点に展開し、各点${unitStake}円として総投資を集計します。回収率100%を保証するものではありません。</p>`;
  const groups = featureStatus.groups ?? [];
  const missing = groups.filter((group) => group.status !== "ready");
  document.querySelector("#data-quality").innerHTML = `<p>利用可能 ${groups.length - missing.length}/${groups.length}特徴量群。未完成項目は予測根拠として使用しません。</p><p>${missing.map((group) => `${escapeHtml(group.label)}：${group.status === "partial" ? "一部利用" : "未収録"}`).join("<br>") || "全項目利用可能"}</p>`;
}

function normalizedAgents(prediction) {
  const agents = agentForecastEngine?.buildAgents?.(prediction) ?? {};
  return new Map(AGENTS.map((definition) => [definition.id, agents[definition.id]]).filter(([, agent]) => agent));
}

function buildConsensus(prediction) {
  const agents = normalizedAgents(prediction);
  const scores = new Map();
  const markPoints = { "◎": 5, "○": 3, "▲": 2, "△": 1, "☆": 1 };
  const indexPoints = { "◎": 100, "○": 70, "▲": 50, "△": 30, "☆": 20 };
  let availableAgents = 0;
  for (const definition of AGENTS) {
    const agent = agents.get(definition.id);
    if (!agent || agent.status !== "available") continue;
    availableAgents += 1;
    const confidence = Math.max(.4, Math.min(1, Number(agent.confidence ?? 1)));
    const maximumScore = Math.max(...(agent.marks ?? []).map((mark) => Number(mark.score) || 0), 0);
    for (const mark of agent.marks ?? []) {
      const id = Number(mark.horseNumber);
      const row = scores.get(id) ?? { horseNumber: id, horseName: mark.horseName, score: 0, index: 0, recommendedBy: 0, honmeiBy: 0, valueBy: 0 };
      row.score += (markPoints[mark.mark] ?? 0) * confidence + Math.max(0, Number(mark.score ?? 0));
      const relativeScore = maximumScore ? Math.max(0, Math.min(1, Number(mark.score) / maximumScore)) * 100 : 0;
      row.index += ((indexPoints[mark.mark] ?? 0) * .75 + relativeScore * .25) * confidence;
      if (["◎", "○", "▲"].includes(mark.mark)) row.recommendedBy += 1;
      if (mark.mark === "◎") row.honmeiBy += 1;
      if (definition.id === "sniper" && ["◎", "○", "▲"].includes(mark.mark)) row.valueBy += 1;
      scores.set(id, row);
    }
  }
  if (!scores.size && prediction?.marks?.length) {
    prediction.marks.forEach((mark, index) => scores.set(Number(mark.horseNumber), { ...mark, score: 5 - index, index: [100, 70, 50, 30, 20][index] ?? 0, recommendedBy: 0, honmeiBy: 0, valueBy: mark.mark === "☆" ? 1 : 0 }));
  }
  if (availableAgents) scores.forEach((row) => { row.index = Math.min(100, row.index / availableAgents); });
  const ranked = [...scores.values()].sort((a, b) => b.score - a.score || b.honmeiBy - a.honmeiBy || a.horseNumber - b.horseNumber);
  const top = ranked[0] ?? null;
  return { ranked, top, agreement: top?.honmeiBy ?? 0, split: Boolean(top && top.honmeiBy < 3), value: ranked.find((row) => row.valueBy > 0 && row !== top) ?? ranked[2] ?? null };
}

function readyCandidates(raceNo = state.raceNo, track = selectedTrack()) {
  return candidates.filter((row) => row.date === state.date && row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo))
    .filter((row) => row.status === "ready" && expectedReturn(row) != null && row.selection);
}
function topCandidate(raceNo = state.raceNo, track = selectedTrack()) { return readyCandidates(raceNo, track).sort((a, b) => (expectedReturn(b) ?? 0) - (expectedReturn(a) ?? 0))[0] ?? null; }
function displayedTopTicket(race, track, prediction, consensus, volatility) {
  return forecastPolicy.primaryForecastTicket(forecastTicketRows(prediction)) ?? null;
}
function forecastTicketRows(prediction) {
  return (forecastPolicy.buildForecastTickets?.(prediction, unitStake) ?? []).map((row) => ({
    ...row,
    indexForecast: true,
    comment: "総合印の上位5頭と連動したAI共通買い目です。期待値評価とは切り分けて、全レースで同じ3パターンを表示します。",
  }));
}

function resultDayArchiveHtml(date, dayResults) {
  const ranked = dayResults.map((result) => ({ result, totals: settledRaceTotals(findReplayAudit(result.raceId)) }))
    .sort((left, right) => right.totals.recoveryRate - left.totals.recoveryRate || right.totals.netYen - left.totals.netYen || right.result.raceNo - left.result.raceNo);
  const dayTotals = ranked.reduce((sum, row) => ({ investmentYen: sum.investmentYen + row.totals.investmentYen, payoutYen: sum.payoutYen + row.totals.payoutYen }), { investmentYen: 0, payoutYen: 0 });
  const netYen = dayTotals.payoutYen - dayTotals.investmentYen;
  return `<section class="result-day-archive"><header><div><span>${formatDate(date)}</span><strong>${dayResults.length}レース</strong></div><dl><div><dt>投資額</dt><dd>${yen(dayTotals.investmentYen)}</dd></div><div><dt>払戻額</dt><dd>${yen(dayTotals.payoutYen)}</dd></div><div><dt>収支</dt><dd class="${netYen >= 0 ? "positive" : "negative"}">${signedYen(netYen)}</dd></div></dl></header><div class="result-day-list">${ranked.map((row, index) => resultListCard(row.result, index + 1, row.totals)).join("")}</div></section>`;
}
function commonBetSummary(prediction) {
  return agentTicketGroups(prediction).length ? "予想家別の内訳を見る" : "予想公開前";
}
function agentRecommendationRows(prediction) {
  const labels = { win: "単勝", quinella: "馬連", trio: "3連複", trifecta: "3連単" };
  const names = new Map(AGENTS.map((agent) => [agent.id, agent.name]));
  return (prediction?.agentPredictions ?? []).flatMap((agent) => (agent.recommended_bets ?? []).flatMap((bet) =>
    (bet.combinations ?? []).slice(0, ["trio", "trifecta"].includes(bet.bet_type) ? 5 : undefined).map((selection) => ({
      betType: labels[bet.bet_type] ?? bet.bet_type,
      method: "1点",
      selection,
      ticketKeys: [selection],
      points: 1,
      totalInvestmentYen: unitStake,
      abilityProbability: bet.estimated_probability,
      adoptedExpectedReturn: bet.expected_value_ratio,
      recommendationEligible: true,
      referenceEstimate: bet.reference_estimate === true || bet.probability_status === "reference_estimate",
      agentId: agent.agent_id,
      agentName: names.get(agent.agent_id) ?? agent.agent_id,
      comment: bet.reason,
    })))).filter((row) => SUPPORTED_BET_TYPES.includes(row.betType));
}
function expectedReturn(row) { for (const key of ["expected_value_ratio", "conservativeExpectedReturn", "adoptedExpectedReturn", "abilityExpectedReturn", "marketExpectedReturn"]) { const value = Number(row?.[key]); if (Number.isFinite(value)) return value; } return null; }

function raceStatus(result, prediction, top, race = selectedRace()) {
  if (isFinalResult(result)) return { id: "result", label: "結果あり" };
  if ((result && result.status !== "pre_race") || hasStarted(state.date, race?.start)) return { id: "closed", label: "終了" };
  if (!prediction) return { id: "waiting", label: "準備中" };
  if (prediction?.agentSystemStatus === "blocked") return { id: "waiting", label: "確認中" };
  if (top) return { id: "ready", label: "予想あり" };
  return { id: "waiting", label: "確認中" };
}
function statusBadge(status) { const className = status.id === "odds" ? "waiting" : status.id; return `<span class="status-badge ${className}">${status.label}</span>`; }
function recommendationDecision(top) { const value = expectedReturn(top); if (value == null) return "対象外"; if (top.recommendationEligible && value >= 1.08) return "買い"; if (value >= 1) return "候補"; return "指数参考"; }

function simpleVolatilityLabel(level) {
  return ["", "落ち着きそう", "やや落ち着き", "ふつう", "少し荒れそう", "荒れそう"][Number(level)] ?? "ふつう";
}

function volatilityMeterHtml(profile, compact = false) {
  const level = Number(profile?.level) || 3;
  const segments = Array.from({ length: 5 }, (_, index) => `<i class="${index < level ? "active" : ""}"></i>`).join("");
  const label = simpleVolatilityLabel(level);
  return `<div class="volatility-meter level-${level} ${compact ? "compact" : ""}" aria-label="荒れそうかどうか ${label}"><div class="volatility-label"><span>荒れそう？</span><strong>${label}</strong></div><div class="volatility-track" aria-hidden="true">${segments}</div></div>`;
}

function findPrediction(raceNo = state.raceNo, track = selectedTrack(), date = state.date) { return predictions.find((row) => row.date === date && row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo)) ?? null; }
function findResult(raceNo = state.raceNo, track = selectedTrack(), date = state.date) { return results.find((row) => row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo) && (!row.date || row.date === date)) ?? null; }
function findAudit(raceNo, track, date = state.date) { return auditRows.find((row) => row.date === date && row.meetingName === track?.meetingName && Number(row.raceNo) === Number(raceNo)) ?? null; }
function findReplayAudit(raceId) { return replayAudit.records?.find((row) => row.raceId === raceId) ?? null; }
function selectedMeeting() { return currentEdition.meetings?.find((row) => row.date === state.date) ?? null; }
function selectedTrack() { return selectedMeeting()?.tracks?.find((row) => row.venueCode === state.venueCode) ?? selectedMeeting()?.tracks?.[0] ?? null; }
function selectedRace() { return selectedTrack()?.races?.find((row) => Number(row.no) === Number(state.raceNo)) ?? selectedTrack()?.races?.[0] ?? null; }

function selectDate(date) {
  state.date = date;
  state.venueCode = selectedMeeting()?.tracks?.[0]?.venueCode ?? "";
  state.raceNo = selectedTrack()?.races?.[0]?.no ?? 1;
  if (state.route === "races") navigateToRace(state.date, state.venueCode, state.raceNo, "prediction", true);
  else { renderHome(); renderRaceWorkspace(); }
}
function selectVenue(venueCode) {
  state.venueCode = venueCode;
  state.raceNo = selectedTrack()?.races?.[0]?.no ?? 1;
  if (state.route === "races") navigateToRace(state.date, state.venueCode, state.raceNo, "prediction", true);
  else { renderHome(); renderRaceWorkspace(); }
}
function openRace(raceNo) { navigateToRace(state.date, state.venueCode, raceNo, "prediction"); }
function selectRaceByResult(result) { state.date = resultDate(result); const meeting = currentEdition.meetings?.find((row) => row.date === state.date); const track = meeting?.tracks?.find((row) => row.meetingName === result.meetingName); state.venueCode = track?.venueCode ?? meeting?.tracks?.[0]?.venueCode ?? ""; state.raceNo = result.raceNo; }

function renderPeriodTabs(selector, active, onSelect) { const root = document.querySelector(selector); root.innerHTML = PERIODS.map((period) => `<button type="button" class="${period.id === active ? "active" : ""}" data-period="${period.id}">${period.label}</button>`).join(""); root.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => onSelect(button.dataset.period))); }
function inPeriod(date, periodId) { const period = PERIODS.find((row) => row.id === periodId); if (!date || period?.days == null) return true; const now = new Date(); const target = new Date(`${date}T00:00:00+09:00`); const diff = Math.floor((now - target) / 86400000); return diff >= 0 && diff <= period.days; }
function isFinalResult(result) { return Boolean(result && result.status !== "pre_race" && (result.runners ?? []).some((row) => Number(row.finishPosition) === 1)); }
function resultPositionMap(result) { return new Map((result?.runners ?? []).map((row) => [Number(row.horseNumber), Number(row.finishPosition) || null])); }
function resultFinishLabelMap(result) { return new Map((result?.runners ?? []).map((row) => {
  const position = Number(row.finishPosition);
  return [Number(row.horseNumber), Number.isInteger(position) && position > 0 ? `${position}着` : String(row.finishText || "結果なし")];
})); }
function raceResultSummary(result) {
  if (!isFinalResult(result)) return "";
  return [...(result.runners ?? [])]
    .filter((row) => Number(row.finishPosition) >= 1 && Number(row.finishPosition) <= 3)
    .sort((a, b) => Number(a.finishPosition) - Number(b.finishPosition))
    .map((row) => `${row.finishPosition}着 ${row.horseNumber}番`)
    .join(" / ");
}

function consensusIndexSummary(consensus) {
  if (!consensus.top || !Number.isFinite(consensus.top.index)) return "--";
  const gap = Math.max(0, consensus.top.index - Number(consensus.ranked[1]?.index ?? 0));
  return `${consensus.top.index.toFixed(1)}　2番手差 +${gap.toFixed(1)}`;
}
function resultDate(result) { return normalizeDate(result?.date) || inferDateFromResult(result) || ""; }
function inferDateFromResult(result) { return currentEdition.meetings?.find((meeting) => meeting.tracks.some((track) => track.meetingName === result?.meetingName))?.date ?? referenceMeetings.meetings?.find((meeting) => meeting.tracks.some((track) => track.meetingName === result?.meetingName))?.date ?? ""; }
function trackForResult(result) { const meetings = [...(currentEdition.meetings ?? []), ...(referenceMeetings.meetings ?? [])]; return meetings.flatMap((meeting) => meeting.tracks.map((track) => ({ ...track, date: meeting.date }))).find((track) => track.meetingName === result.meetingName) ?? { meetingName: result.meetingName }; }
function resultIdentity(result) { return `${resultDate(result)}|${result.meetingName}|${result.raceNo}`; }

function nextRaceNumber(track) { if (!track?.races?.length) return null; if (state.date !== tokyoDate()) return state.date > tokyoDate() ? track.races[0].no : null; const minute = tokyoMinutes(); return track.races.find((race) => { const [hour, min] = race.start.split(":").map(Number); return hour * 60 + min > minute; })?.no ?? null; }
function hasStarted(date, startTime) { if (!date || !/^\d{2}:\d{2}$/.test(String(startTime ?? ""))) return false; if (date < tokyoDate()) return true; if (date > tokyoDate()) return false; const [hour, minute] = startTime.split(":").map(Number); return hour * 60 + minute <= tokyoMinutes(); }
function tokyoMinutes() { const parts = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Tokyo", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date()); return Number(parts.find((part) => part.type === "hour")?.value) * 60 + Number(parts.find((part) => part.type === "minute")?.value); }
function agentMarkFor(agent, horseNumber) { return agent?.marks?.find((mark) => Number(mark.horseNumber) === Number(horseNumber))?.mark ?? ""; }
function markLabel(row, mark) { return row ? `${mark} ${row.horseNumber}番 ${escapeHtml(row.horseName)}` : `${mark} --`; }
function displayTicket(type, key, row) { const raw = String(key ?? row.selection ?? ""); if (/^\d+(?:-\d+){0,2}$/.test(raw)) return ["3連単"].includes(type) ? raw.replaceAll("-", "→") : raw; return row.method === "1点" ? raw.replace(/\s+[^・]+(?:・|$)/g, "-").replace(/-$/, "") || raw : raw; }
function addMarkFallback() {}
function routeContextFromLocation() {
  const rawPath = decodeURIComponent(location.pathname || "/");
  const path = SITE_PREFIX && rawPath.startsWith(`${SITE_PREFIX}/`) ? rawPath.slice(SITE_PREFIX.length) : rawPath;
  const raceMatch = path.match(/^\/(race|result)\/(\d{4}-\d{2}-\d{2})-([^/]+)-(\d{1,2})\/?$/);
  if (raceMatch) return { route: "races", detailTab: raceMatch[1] === "result" ? "result" : "prediction", date: raceMatch[2], venueCode: raceMatch[3], raceNo: Number(raceMatch[4]) };
  const agentMatch = path.match(/^\/agents\/([a-z-]+)\/?$/);
  if (agentMatch) return { route: "performance", agentId: agentMatch[1] };
  if (/^\/races\/?$/.test(path)) return { route: "races" };
  if (/^\/results\/?$/.test(path)) return { route: "results" };
  if (/^\/season\/?$/.test(path)) return { route: "season" };
  if (/^\/agents\/?$/.test(path)) return { route: "performance" };
  const legacy = location.hash.replace("#", "").split("/")[0];
  const legacyRoute = ({ home: "home", races: "races", results: "results", performance: "performance", season: "season" })[legacy];
  return { route: legacyRoute || "home" };
}
function routeFromLocation() { return routeContextFromLocation().route; }
function applyRouteContext(context = {}) {
  if (context.date && currentEdition.meetings?.some((meeting) => meeting.date === context.date)) state.date = context.date;
  const meeting = currentEdition.meetings?.find((row) => row.date === state.date);
  if (context.venueCode && meeting?.tracks?.some((track) => String(track.venueCode) === String(context.venueCode))) state.venueCode = context.venueCode;
  else if (!meeting?.tracks?.some((track) => String(track.venueCode) === String(state.venueCode))) state.venueCode = meeting?.tracks?.[0]?.venueCode ?? state.venueCode;
  const track = meeting?.tracks?.find((row) => String(row.venueCode) === String(state.venueCode));
  if (context.raceNo && track?.races?.some((race) => Number(race.no) === Number(context.raceNo))) state.raceNo = Number(context.raceNo);
  if (context.detailTab) state.detailTab = context.detailTab;
  if (context.agentId && AGENTS.some((agent) => agent.id === context.agentId)) state.agentId = context.agentId;
}
function navigateToRace(date, venueCode, raceNo, detailTab = "prediction", replace = false) {
  state.date = date || state.date;
  state.venueCode = String(venueCode || state.venueCode);
  state.raceNo = Number(raceNo) || state.raceNo;
  state.detailTab = detailTab === "result" ? "result" : "prediction";
  state.route = "races";
  const kind = state.detailTab === "result" ? "result" : "race";
  const slug = leagueSystem?.raceSlug(state.date, state.venueCode, state.raceNo) || `${state.date}-${state.venueCode}-${String(state.raceNo).padStart(2, "0")}`;
  history[replace ? "replaceState" : "pushState"]({}, "", `${SITE_PREFIX}/${kind}/${slug}/`);
  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function currentRaceRound(race, track) {
  const all = (currentEdition.meetings || []).flatMap((meeting) => (meeting.tracks || []).flatMap((item) => (item.races || []).map((entry) => ({ date: meeting.date, venueCode: item.venueCode, no: entry.no }))));
  const index = all.findIndex((row) => row.date === state.date && String(row.venueCode) === String(track?.venueCode) && Number(row.no) === Number(race?.no));
  return leagueSeason.round + Math.max(1, index + 1);
}
function characterStateLabel(stateName) { return ({ normal: "通常", happy: "勝利", defeat: "敗北", angry: "怒り", awakened: "覚醒" })[stateName] || "通常"; }
function characterImageHtml(agentId, stateName = "normal", className = "character-image", eager = false) {
  const definition = AGENTS.find((agent) => agent.id === agentId) || AGENTS[0];
  const safeState = leagueSystem?.STATES?.includes(stateName) ? stateName : "normal";
  const persona = personaForId(definition.id);
  const src = leagueSystem?.characterImage(definition.id, safeState) || `assets/characters/${definition.id}-${safeState}.webp`;
  return `<img class="${escapeHtml(className)}" src="/${escapeHtml(src)}" width="320" height="640" loading="${eager ? "eager" : "lazy"}" decoding="async" alt="${escapeHtml(persona.displayName)}の${characterStateLabel(safeState)}姿" />`;
}
function nextRacePreview(result) {
  const rows = (currentEdition.meetings || []).flatMap((meeting) => (meeting.tracks || []).flatMap((track) => (track.races || []).map((race) => ({ meeting, track, race }))));
  const currentIndex = rows.findIndex((row) => row.meeting.date === resultDate(result) && row.track.meetingName === result?.meetingName && Number(row.race.no) === Number(result?.raceNo));
  const next = currentIndex >= 0 ? rows[currentIndex + 1] : null;
  if (!next) return { href: "/season/", label: "シーズン順位を確認" };
  const slug = leagueSystem?.raceSlug(next.meeting.date, next.track.venueCode, next.race.no);
  return { href: `/race/${slug}/`, label: `${next.track.venueName} ${next.race.no}R ${next.race.name}` };
}
function routeLabel(route) { return ({ home: "ロビー", races: "レース", results: "勝敗ログ", performance: "予想家図鑑", season: "リーグ順位" })[route] ?? "ロビー"; }
function predictionKey(row) { return `${row.date}|${row.meetingName}|${row.raceNo}|${row.modelVersion}`; }
function candidateKey(row) { return `${row.date}|${row.meetingName}|${row.raceNo}|${row.betType}|${row.method}|${row.selection}|${row.modelVersion}`; }
function dedupeBy(rows, keyFn) { return [...new Map(rows.map((row) => [keyFn(row), row])).values()]; }
function candidateKeySafe() {}
function formatDate(value) { const normalized = normalizeDate(value); if (!normalized) return "--"; const [, month, day] = normalized.split("-").map(Number); return `${month}月${day}日`; }
function normalizeDate(value) { const text = String(value ?? ""); if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 10); const match = text.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/); return match ? `${match[1]}-${match[2].padStart(2, "0")}-${match[3].padStart(2, "0")}` : ""; }
function formatDateTime(value) { try { return new Intl.DateTimeFormat("ja-JP", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Tokyo" }).format(new Date(value)); } catch { return value; } }
function weekday(value) { return new Intl.DateTimeFormat("ja-JP", { weekday: "short", timeZone: "Asia/Tokyo" }).format(new Date(`${value}T00:00:00+09:00`)); }
function tokyoDate() { return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Tokyo" }).format(new Date()); }
function number(value) { return Number(value ?? 0).toLocaleString("ja-JP"); }
function yen(value) { return `${number(Math.round(Number(value) || 0))}円`; }
function signedYen(value) { const amount = Math.round(Number(value) || 0); return `${amount >= 0 ? "+" : "-"}${yen(Math.abs(amount))}`; }
function percent(value) { return Number.isFinite(Number(value)) ? `${(Number(value) * 100).toFixed(1)}%` : "--"; }
function empty(message) { return `<div class="empty-state">${escapeHtml(message)}</div>`; }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]); }
function showToast(message) { const toast = document.querySelector("#toast"); toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 1800); }

async function shareLeagueResult(record, drama = leagueSystem?.raceDrama(record)) {
  if (!record || !drama) { showToast("共有できる確定結果がありません"); return; }
  const mvp = personaForId(drama.mvp?.agentId);
  const culprit = personaForId(drama.culprit?.agentId);
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  const accent = mvp.color || "#efc95f";
  context.fillStyle = "#08111f";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#101d2e";
  context.fillRect(36, 36, 1128, 558);
  context.fillStyle = accent;
  context.fillRect(36, 36, 14, 558);
  context.fillRect(50, 36, 1114, 8);
  context.fillStyle = "#f4c95d";
  context.font = "800 25px 'Yu Gothic UI', sans-serif";
  context.fillText("UMAYOMI / AI FORECAST LEAGUE 2026", 86, 92);
  context.fillStyle = "#ffffff";
  context.font = "900 48px 'Yu Gothic UI', sans-serif";
  context.fillText(`${formatDate(record.date)} ${record.meetingName || ""} ${record.raceNo}R`, 86, 162);
  context.fillStyle = "#93a4b8";
  context.font = "700 26px 'Yu Gothic UI', sans-serif";
  context.fillText(record.raceTitle || "AI予想バトル結果", 88, 205);
  context.fillStyle = accent;
  context.font = "900 25px 'Yu Gothic UI', sans-serif";
  context.fillText("MVP", 88, 280);
  context.fillStyle = "#ffffff";
  context.font = "900 66px 'Yu Gothic UI', sans-serif";
  context.fillText(mvp.displayName, 88, 350);
  context.font = "900 42px 'Yu Gothic UI', sans-serif";
  context.fillStyle = Number(drama.mvp?.netYen || 0) >= 0 ? "#4fe39b" : "#ff7e86";
  context.fillText(signedYen(drama.mvp?.netYen), 88, 410);
  context.fillStyle = "#9cabbc";
  context.font = "700 22px 'Yu Gothic UI', sans-serif";
  context.fillText(`戦犯 ${culprit.displayName}  ${signedYen(drama.culprit?.netYen)}`, 88, 468);
  context.fillText("5人のAI予想家を各100円の買い目で結果比較", 88, 535);
  try {
    const portrait = await loadCanvasImage(`/${leagueSystem.characterImage(drama.mvp.agentId, "happy")}`);
    const scale = Math.min(470 / portrait.width, 500 / portrait.height);
    context.drawImage(portrait, 1150 - portrait.width * scale, 84, portrait.width * scale, portrait.height * scale);
  } catch {}
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) { showToast("共有画像を作れませんでした"); return; }
  const filename = `umayomi-${record.raceId || record.date}.png`;
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    try {
      await navigator.share({ title: "ウマヨミ AI予想バトル結果", text: `${mvp.displayName}がMVP。${signedYen(drama.mvp?.netYen)}`, files: [file] });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast("SNS共有用の結果画像を保存しました");
}

async function shareWeeklyResults(week = leagueSeason.latestWeek) {
  const standings = week?.standings || [];
  if (!standings.length) { showToast("共有できる順位がありません"); return; }
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  context.fillStyle = "#08111f";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#101d2e";
  context.fillRect(36, 36, 1128, 558);
  context.fillStyle = "#f4c95d";
  context.fillRect(36, 36, 12, 558);
  context.font = "800 24px 'Yu Gothic UI', sans-serif";
  context.fillText("UMAYOMI / AI FORECAST LEAGUE 2026", 82, 90);
  context.fillStyle = "#ffffff";
  context.font = "900 48px 'Yu Gothic UI', sans-serif";
  context.fillText(`${formatDate(week.dateFrom)}〜${formatDate(week.dateTo)} 週間結果`, 82, 158);
  standings.forEach((row, index) => {
    const y = 225 + index * 66;
    const persona = personaForId(row.agentId);
    context.fillStyle = persona.color || "#f4c95d";
    context.font = "900 34px 'Yu Gothic UI', sans-serif";
    context.fillText(`${row.rank}`, 88, y);
    context.fillStyle = "#ffffff";
    context.font = "800 27px 'Yu Gothic UI', sans-serif";
    context.fillText(persona.displayName, 145, y);
    context.textAlign = "right";
    context.fillText(`${signedYen(row.netYen)} / ${row.investmentYen ? percent(row.recoveryRate) : "-"}`, 1080, y);
    context.textAlign = "left";
  });
  context.fillStyle = "#93a4b8";
  context.font = "700 19px 'Yu Gothic UI', sans-serif";
  context.fillText(`確定した${week.raceCount}レースを各100円の買い目で集計`, 82, 570);
  const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
  if (!blob) { showToast("共有画像を作れませんでした"); return; }
  const filename = `umayomi-week-${week.key || "latest"}.png`;
  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.share && (!navigator.canShare || navigator.canShare({ files: [file] }))) {
    try {
      await navigator.share({ title: "ウマヨミ 週間AI予想結果", text: `${formatDate(week.dateFrom)}週の1位は${personaForId(standings[0].agentId).displayName}`, files: [file] });
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast("SNS共有用の順位画像を保存しました");
}

function loadCanvasImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}
