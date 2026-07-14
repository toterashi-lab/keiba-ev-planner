const sampleCsv = `race,betType,selection,odds,probability
Tokyo 10R,win,03 Sunrise Note,6.8,0.19
Tokyo 10R,win,08 Urban Peak,4.1,0.21
Tokyo 10R,quinella,03-08,12.4,0.105
Hanshin 11R,win,11 Blue Vector,9.6,0.13
Hanshin 11R,place,11 Blue Vector,2.7,0.48
Hakodate 9R,exacta,04-12,31.0,0.044`;

const state = {
  rows: [],
  plan: [],
  audit: JSON.parse(localStorage.getItem("keibaEvAudit") || "[]"),
  selectedDate: window.KEIBA_MEETINGS?.meetings?.[0]?.date ?? "",
  selectedVenue: "",
};

const els = {
  bankroll: document.querySelector("#bankroll"),
  minEdge: document.querySelector("#min-edge"),
  maxStake: document.querySelector("#max-stake"),
  kelly: document.querySelector("#kelly"),
  csvInput: document.querySelector("#csv-input"),
  csvFile: document.querySelector("#csv-file"),
  betTable: document.querySelector("#bet-table"),
  auditLog: document.querySelector("#audit-log"),
  summaryCount: document.querySelector("#summary-count"),
  summaryStake: document.querySelector("#summary-stake"),
  summaryReturn: document.querySelector("#summary-return"),
  summaryProfit: document.querySelector("#summary-profit"),
  confirmManual: document.querySelector("#confirm-manual"),
  confirmLimit: document.querySelector("#confirm-limit"),
  confirmLegal: document.querySelector("#confirm-legal"),
  scheduleNote: document.querySelector("#schedule-note"),
  meetingTabs: document.querySelector("#meeting-tabs"),
  trackCards: document.querySelector("#track-cards"),
  scheduleTable: document.querySelector("#schedule-table"),
  evAudit: document.querySelector("#ev-audit"),
};

document.querySelector("#load-sample").addEventListener("click", () => {
  els.csvInput.value = sampleCsv;
  addAudit("サンプルCSVを読み込みました");
  calculate();
});

document.querySelector("#parse-csv").addEventListener("click", calculate);
document.querySelector("#clear-all").addEventListener("click", clearAll);
document.querySelector("#clear-log").addEventListener("click", clearLog);
document.querySelector("#export-plan").addEventListener("click", exportPlan);
document.querySelector("#dry-run").addEventListener("click", dryRunSend);
document.querySelector("#export-schedule").addEventListener("click", exportSchedule);
document.querySelector("#run-audit").addEventListener("click", renderEvAudit);

[els.bankroll, els.minEdge, els.maxStake, els.kelly].forEach((el) => {
  el.addEventListener("input", () => {
    if (els.csvInput.value.trim()) calculate(false);
  });
});

els.csvFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  els.csvInput.value = await file.text();
  addAudit(`${file.name} を読み込みました`);
  calculate();
});

function calculate(log = true) {
  try {
    state.rows = parseCsv(els.csvInput.value);
    const minEdge = readNumber(els.minEdge, 0.08);
    const bankroll = readNumber(els.bankroll, 0);
    const maxStake = readNumber(els.maxStake, 1000);
    const kellyFraction = readNumber(els.kelly, 0.25);

    state.plan = state.rows
      .map((row) => enrichBet(row, bankroll, maxStake, kellyFraction))
      .filter((row) => row.edge >= minEdge && row.stake >= 100)
      .sort((a, b) => b.edge - a.edge);

    renderPlan();
    if (log) addAudit(`${state.rows.length}件を計算し、${state.plan.length}件を候補化しました`);
  } catch (error) {
    addAudit(`CSVエラー: ${error.message}`);
    state.plan = [];
    renderPlan();
  }
}

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) return [];

  const headers = splitCsvLine(lines[0]).map((header) => header.trim());
  const required = ["race", "betType", "selection", "odds", "probability"];
  const missing = required.filter((key) => !headers.includes(key));
  if (missing.length) throw new Error(`${missing.join(", ")} 列がありません`);

  return lines.slice(1).map((line, index) => {
    const values = splitCsvLine(line);
    const record = Object.fromEntries(headers.map((header, i) => [header, values[i] ?? ""]));
    const odds = Number(record.odds);
    const probability = Number(record.probability);

    if (!Number.isFinite(odds) || odds <= 1) throw new Error(`${index + 2}行目 odds が不正です`);
    if (!Number.isFinite(probability) || probability <= 0 || probability >= 1) {
      throw new Error(`${index + 2}行目 probability が不正です`);
    }

    return {
      race: record.race,
      betType: record.betType,
      selection: record.selection,
      odds,
      probability,
    };
  });
}

function splitCsvLine(line) {
  const cells = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    const next = line[i + 1];
    if (char === '"' && quoted && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      cells.push(cell);
      cell = "";
    } else {
      cell += char;
    }
  }

  cells.push(cell);
  return cells.map((value) => value.trim());
}

function enrichBet(row, bankroll, maxStake, kellyFraction) {
  const decimalProfit = row.odds - 1;
  const expectedReturnRate = row.odds * row.probability;
  const edge = expectedReturnRate - 1;
  const kelly = Math.max(0, (row.odds * row.probability - 1) / decimalProfit);
  const rawStake = bankroll * kelly * kellyFraction;
  const stake = Math.min(maxStake, roundDownToHundred(rawStake));

  return {
    ...row,
    expectedReturnRate,
    edge,
    stake,
    expectedReturn: stake * expectedReturnRate,
    expectedProfit: stake * edge,
  };
}

function renderPlan() {
  if (!state.plan.length) {
    els.betTable.innerHTML = `<tr><td class="empty" colspan="7">条件に合う買い目がありません</td></tr>`;
  } else {
    els.betTable.innerHTML = state.plan
      .map(
        (row) => `<tr>
          <td>${escapeHtml(row.race)}</td>
          <td>${escapeHtml(row.betType)}</td>
          <td>${escapeHtml(row.selection)}</td>
          <td>${row.odds.toFixed(2)}</td>
          <td>${percent(row.probability)}</td>
          <td class="positive">${percent(row.edge)}</td>
          <td>${yen(row.stake)}</td>
        </tr>`,
      )
      .join("");
  }

  const stake = sum(state.plan, "stake");
  const expectedReturn = sum(state.plan, "expectedReturn");
  const expectedProfit = sum(state.plan, "expectedProfit");

  els.summaryCount.textContent = String(state.plan.length);
  els.summaryStake.textContent = yen(stake);
  els.summaryReturn.textContent = yen(expectedReturn);
  els.summaryProfit.textContent = yen(expectedProfit);
}

function renderAudit() {
  els.auditLog.innerHTML = state.audit.length
    ? state.audit.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : `<li class="empty">ログはまだありません</li>`;
}

function renderSchedule() {
  const data = window.KEIBA_MEETINGS;
  if (!data?.meetings?.length) {
    els.meetingTabs.innerHTML = "";
    els.trackCards.innerHTML = "";
    els.scheduleTable.innerHTML = `<tr><td class="empty" colspan="10">開催データがありません</td></tr>`;
    return;
  }

  const selected = data.meetings.find((meeting) => meeting.date === state.selectedDate) ?? data.meetings[0];
  state.selectedDate = selected.date;
  const selectedTrack =
    selected.tracks.find((track) => track.venueCode === state.selectedVenue) ?? selected.tracks[0];
  state.selectedVenue = selectedTrack?.venueCode ?? "";
  const allRaces = (selectedTrack ? [selectedTrack] : selected.tracks).flatMap((track) =>
    track.races.map((race) => ({
      ...race,
      date: selected.date,
      weekday: selected.weekday,
      venueName: track.venueName,
      venueCode: track.venueCode,
      meetingName: track.meetingName,
    })),
  );

  const raceCount = data.meetings.flatMap((meeting) => meeting.tracks.flatMap((track) => track.races)).length;
  els.scheduleNote.textContent = `${data.researchedAt} 調査。${data.meetings.length}日・${raceCount}レースを予定番組として保持。出馬表確定後に上書き確認します。`;

  els.meetingTabs.innerHTML = data.meetings
    .map(
      (meeting) =>
        `<button class="tab ${meeting.date === selected.date ? "active" : ""}" type="button" data-date="${meeting.date}">
          ${meeting.date}(${meeting.weekday})
        </button>`,
    )
    .join("");

  els.meetingTabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDate = button.dataset.date;
      renderSchedule();
    });
  });

  els.trackCards.innerHTML = selected.tracks
    .map((track) => {
      const first = track.races[0]?.start ?? "--:--";
      const last = track.races.at(-1)?.start ?? "--:--";
      return `<button class="track-card ${track.venueCode === state.selectedVenue ? "active" : ""}" type="button" data-venue="${track.venueCode}">
        <span>${escapeHtml(track.meetingName)}</span>
        <strong>${escapeHtml(track.venueName)}</strong>
        <small>${track.races.length}R / ${first}-${last}</small>
      </button>`;
    })
    .join("");

  els.trackCards.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedVenue = button.dataset.venue;
      renderSchedule();
    });
  });

  els.scheduleTable.innerHTML = allRaces
    .map(
      (race) => {
        const resultUrl = findResultUrl(race);
        const result = findResultData(race);
        return `<tr>
        <td>${race.date}(${escapeHtml(race.weekday)})</td>
        <td>${escapeHtml(race.venueName)}</td>
        <td>${race.no}R</td>
        <td>${escapeHtml(race.start)}</td>
        <td>${escapeHtml(race.name)}</td>
        <td>${escapeHtml(race.condition)}</td>
        <td>${escapeHtml(race.surface)} ${race.distanceM.toLocaleString("ja-JP")}m</td>
        <td>${result?.winner ? escapeHtml(result.winner) : "-"}</td>
        <td>${result ? `${result.refunds.length}行` : "-"}</td>
        <td>${resultUrl ? `<a class="result-link" href="${escapeHtml(resultUrl)}" target="_blank" rel="noreferrer">JRA</a>` : "-"}</td>
      </tr>`;
      },
    )
    .join("");
}

function findResultUrl(race) {
  const links = window.KEIBA_RESULT_LINKS?.raceLinks ?? [];
  return links.find((link) => link.meetingName === race.meetingName && link.raceNo === race.no)?.url ?? "";
}

function findResultData(race) {
  const results = window.KEIBA_RESULTS?.results ?? [];
  return results.find((result) => result.meetingName === race.meetingName && result.raceNo === race.no);
}

function renderEvAudit() {
  const cases = [
    {
      name: "Positive edge",
      odds: 6,
      probability: 0.2,
      bankroll: 30000,
      maxStake: 1000,
      kellyFraction: 0.25,
      expectedEdge: 0.2,
      expectedStake: 300,
    },
    {
      name: "Break-even",
      odds: 4,
      probability: 0.25,
      bankroll: 30000,
      maxStake: 1000,
      kellyFraction: 0.25,
      expectedEdge: 0,
      expectedStake: 0,
    },
    {
      name: "Negative edge",
      odds: 5,
      probability: 0.1,
      bankroll: 30000,
      maxStake: 1000,
      kellyFraction: 0.25,
      expectedEdge: -0.5,
      expectedStake: 0,
    },
  ];

  els.evAudit.innerHTML = cases
    .map((test) => {
      const row = enrichBet(
        {
          race: "audit",
          betType: "win",
          selection: test.name,
          odds: test.odds,
          probability: test.probability,
        },
        test.bankroll,
        test.maxStake,
        test.kellyFraction,
      );
      const edgeOk = nearlyEqual(row.edge, test.expectedEdge);
      const stakeOk = row.stake === test.expectedStake;
      return `<article class="audit-card">
        <strong class="${edgeOk && stakeOk ? "ok" : "warn"}">${escapeHtml(test.name)}: ${edgeOk && stakeOk ? "OK" : "NG"}</strong>
        <span>
          odds ${test.odds.toFixed(2)} / p ${percent(test.probability)}<br>
          EV ${percent(row.edge)} / stake ${yen(row.stake)}<br>
          profit ${yen(row.expectedProfit)}
        </span>
      </article>`;
    })
    .join("");
}

function dryRunSend() {
  const guardsOk = els.confirmManual.checked && els.confirmLimit.checked && els.confirmLegal.checked;
  if (!state.plan.length) {
    addAudit("Dry-run中止: 購入キューが空です");
    return;
  }
  if (!guardsOk) {
    addAudit("Dry-run中止: IPAT実行ガードが未確認です");
    return;
  }

  addAudit(`Dry-run送信: ${state.plan.length}点 / ${yen(sum(state.plan, "stake"))}`);
}

function exportPlan() {
  if (!state.plan.length) {
    addAudit("出力中止: 購入キューが空です");
    return;
  }

  const header = ["race", "betType", "selection", "odds", "probability", "edge", "stake"];
  const body = state.plan.map((row) =>
    [row.race, row.betType, row.selection, row.odds, row.probability, row.edge, row.stake]
      .map(csvCell)
      .join(","),
  );
  const blob = new Blob([[header.join(","), ...body].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `keiba-ev-plan-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  addAudit("購入キューCSVを出力しました");
}

function exportSchedule() {
  const data = window.KEIBA_MEETINGS;
  if (!data?.meetings?.length) {
    addAudit("開催CSV出力中止: 開催データがありません");
    return;
  }

  const header = ["date", "weekday", "venueCode", "venueName", "meetingName", "raceNo", "start", "raceName", "condition", "surface", "distanceM", "status"];
  const rows = data.meetings.flatMap((meeting) =>
    meeting.tracks.flatMap((track) =>
      track.races.map((race) =>
        [
          meeting.date,
          meeting.weekday,
          track.venueCode,
          track.venueName,
          track.meetingName,
          race.no,
          race.start,
          race.name,
          race.condition,
          race.surface,
          race.distanceM,
          data.status,
        ]
          .map(csvCell)
          .join(","),
      ),
    ),
  );
  const blob = new Blob([[header.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "jra-meet-2026-07-25-26.csv";
  link.click();
  URL.revokeObjectURL(url);
  addAudit(`開催CSVを出力しました: ${rows.length}レース`);
}

function clearAll() {
  els.csvInput.value = "";
  state.rows = [];
  state.plan = [];
  renderPlan();
  addAudit("入力と購入キューをクリアしました");
}

function clearLog() {
  state.audit = [];
  localStorage.removeItem("keibaEvAudit");
  renderAudit();
}

function addAudit(message) {
  const stamp = new Date().toLocaleString("ja-JP", { hour12: false });
  state.audit.unshift(`${stamp} ${message}`);
  state.audit = state.audit.slice(0, 80);
  localStorage.setItem("keibaEvAudit", JSON.stringify(state.audit));
  renderAudit();
}

function readNumber(el, fallback) {
  const value = Number(el.value);
  return Number.isFinite(value) ? value : fallback;
}

function roundDownToHundred(value) {
  return Math.floor(value / 100) * 100;
}

function sum(rows, key) {
  return rows.reduce((total, row) => total + row[key], 0);
}

function yen(value) {
  return `${Math.round(value).toLocaleString("ja-JP")}円`;
}

function percent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function nearlyEqual(a, b) {
  return Math.abs(a - b) < 0.000001;
}

function csvCell(value) {
  const text = String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderPlan();
renderAudit();
renderSchedule();
renderEvAudit();
