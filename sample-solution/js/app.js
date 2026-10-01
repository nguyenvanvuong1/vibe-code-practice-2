const KEY = "surveyResponses";
const $ = (s) => document.querySelector(s);
function load() {
  try {
    const x = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(x) ? x : [];
  } catch {
    return [];
  }
}
function save(rows) {
  localStorage.setItem(KEY, JSON.stringify(rows));
}
function num(v) {
  return Number(v);
}
function addResponse(fd) {
  const row = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    name: fd.get("name").trim(),
    ageGroup: fd.get("ageGroup"),
    channel: fd.get("channel"),
    rating: num(fd.get("rating")),
    nps: num(fd.get("nps")),
    productScore: num(fd.get("productScore")),
    serviceScore: num(fd.get("serviceScore")),
    priceScore: num(fd.get("priceScore")),
    comment: fd.get("comment").trim(),
  };
  const rows = load();
  rows.push(row);
  save(rows);
}
function avg(rows, key) {
  return rows.length ? rows.reduce((s, r) => s + r[key], 0) / rows.length : 0;
}
function nps(rows) {
  if (!rows.length) return 0;
  const p = rows.filter((r) => r.nps >= 9).length,
    d = rows.filter((r) => r.nps <= 6).length;
  return ((p - d) / rows.length) * 100;
}
function satisfaction(rows) {
  if (!rows.length) return 0;
  return (
    (rows.filter(
      (r) => (r.productScore + r.serviceScore + r.priceScore) / 3 >= 4,
    ).length /
      rows.length) *
    100
  );
}
function counts(rows, key, values) {
  return values.map((v) => ({
    label: String(v),
    count: rows.filter((r) => String(r[key]) === String(v)).length,
  }));
}
function renderBars(el, data, total) {
  el.innerHTML =
    data
      .map(
        (x) =>
          `<div class="bar-row"><span>${escapeHtml(x.label)}</span><div class="bar-track"><div class="bar" style="width:${total ? (x.count / total) * 100 : 0}%"></div></div><strong>${x.count}</strong></div>`,
      )
      .join("") || "<p>Chưa có dữ liệu.</p>";
}
function escapeHtml(s) {
  return String(s ?? "").replace(
    /[&<>'"]/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        c
      ],
  );
}
function render() {
  const rows = load();
  $("#kpis").innerHTML = [
    ["Phản hồi", rows.length],
    ["Rating TB", avg(rows, "rating").toFixed(2)],
    ["NPS", nps(rows).toFixed(1)],
    ["Hài lòng", satisfaction(rows).toFixed(1) + "%"],
  ]
    .map(
      ([a, b]) =>
        `<div class="kpi"><span>${a}</span><strong>${b}</strong></div>`,
    )
    .join("");
  renderBars(
    $("#ratingChart"),
    counts(rows, "rating", [1, 2, 3, 4, 5]),
    rows.length,
  );
  const channels = [...new Set(rows.map((r) => r.channel))];
  renderBars(
    $("#channelChart"),
    counts(rows, "channel", channels),
    rows.length,
  );
  $("#recentRows").innerHTML =
    rows
      .slice()
      .reverse()
      .slice(0, 10)
      .map(
        (r) =>
          `<tr><td>${new Date(r.createdAt).toLocaleString("vi-VN")}</td><td>${escapeHtml(r.channel)}</td><td>${r.rating}</td><td>${r.nps}</td><td>${escapeHtml(r.comment)}</td></tr>`,
      )
      .join("") || '<tr><td colspan="5">Chưa có dữ liệu.</td></tr>';
}
$("#surveyForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!e.currentTarget.reportValidity()) return;
  addResponse(new FormData(e.currentTarget));
  e.currentTarget.reset();
  $("#message").textContent = "Đã lưu phản hồi vào localStorage.";
  render();
});
document.querySelectorAll("[data-view]").forEach(
  (b) =>
    (b.onclick = () => {
      const survey = b.dataset.view === "survey";
      $("#surveyView").classList.toggle("hidden", !survey);
      $("#dashboardView").classList.toggle("hidden", survey);
      if (!survey) render();
    }),
);
$("#clearBtn").onclick = () => {
  if (confirm("Xóa toàn bộ dữ liệu survey trên trình duyệt này?")) {
    localStorage.removeItem(KEY);
    render();
  }
};
$("#seedBtn").onclick = () => {
  const channels = ["Facebook", "TikTok", "Google", "Bạn bè"];
  const rows = load();
  for (let i = 0; i < 20; i++) {
    const rating = 1 + Math.floor(Math.random() * 5);
    rows.push({
      id: String(Date.now() + i),
      createdAt: new Date(Date.now() - i * 3600000).toISOString(),
      name: "",
      ageGroup: ["20-29", "30-39", "40+"][i % 3],
      channel: channels[i % 4],
      rating,
      nps: Math.floor(Math.random() * 11),
      productScore: rating,
      serviceScore: 1 + Math.floor(Math.random() * 5),
      priceScore: 1 + Math.floor(Math.random() * 5),
      comment: i % 4 === 0 ? "Dữ liệu demo" : "",
    });
  }
  save(rows);
  render();
};
render();
