/* Singapore fares vs CPI: one chart and one pass-vs-SMRT-card comparison. No dependencies.
   Data: LTA adult card fare table (27 Dec 2025), PTC fare review notices 2018-2026,
   SingStat CPI (2024 = 100) tables M213801 / M213901 / M213891, pulled 30 Sep 2026. */
(function () {
  'use strict';

  // ---------- data ----------
  // Adult card fares, basic services, in cents, by distance band; the last entry is ">40.2 km".
  const FARE2025 = [128,138,149,159,168,175,182,186,190,194,198,202,207,211,215,220,224,227,230,233,236,238,240,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257];
  const UB = [3.2,4.2,5.2,6.2,7.2,8.2,9.2,10.2,11.2,12.2,13.2,14.2,15.2,16.2,17.2,18.2,19.2,20.2,21.2,22.2,23.2,24.2,25.2,26.2,27.2,28.2,29.2,30.2,31.2,32.2,33.2,34.2,35.2,36.2,37.2,38.2,39.2,40.2];
  // Adult card fare change in cents at each December review: [year, [[up to km | null, cents], ...]].
  const CHANGES = [
    [2018, [[null, 6]]], [2019, [[null, 9]]], [2020, [[null, 0]]],
    [2021, [[14.2, 3], [null, 4]]], [2022, [[8.2, 4], [null, 5]]], [2023, [[4.2, 10], [null, 11]]],
    [2024, [[null, 10]]], [2025, [[17.2, 9], [null, 10]]], [2026, [[3.2, 12], [null, 13]]],
  ];
  // Annual averages, 2024 = 100. The 2026 figures are the January to August average.
  const CPI = {
    all:  { 2015: 85.046, 2016: 84.596, 2017: 85.084, 2018: 85.457, 2019: 85.942, 2020: 85.794, 2021: 87.781, 2022: 93.163, 2023: 97.666, 2024: 100, 2025: 100.903, 2026: 102.426 },
    core: { 2015: 84.612, 2016: 85.377, 2017: 86.618, 2018: 88.077, 2019: 88.997, 2020: 88.872, 2021: 89.71, 2022: 93.418, 2023: 97.316, 2024: 100, 2025: 100.707, 2026: 102.064 },
    fare: { 2015: 85.614, 2016: 84.834, 2017: 81.302, 2018: 79.573, 2019: 83.075, 2020: 88.858, 2021: 88.887, 2022: 90.823, 2023: 93.592, 2024: 100, 2025: 106.004 },
  };
  const REF_KM = 10.2; // the reference journey for the chart: the middle of the fare table

  // ---------- fare model ----------
  const bandIdx = d => { for (let i = 0; i < UB.length; i++) if (d <= UB[i] + 1e-9) return i; return 38; };
  const delta = (bands, d) => { for (const [u, c] of bands) if (u === null || d <= u) return c; return 0; };
  // Fare in force after the December review of `year` (2017 gives the level before the 2018 review).
  function fareAfter(year, d) {
    let c = FARE2025[bandIdx(d)];
    for (const [y, b] of CHANGES) {
      if (y > year && y <= 2025) c -= delta(b, d);
      if (y <= year && y > 2025) c += delta(b, d);
    }
    return c;
  }
  const fareInForce = (y, d) => fareAfter(y - 1, d); // a late-December step belongs to the following year

  // ---------- the pass vs the SMRT card ----------
  const PASS = 122;
  const SPEED = 17;            // km/h door to door, walking and waiting included
  const SOCIAL_TRIPS = 12;     // round trips a month, 30 minutes each way
  const SMRT_RATE = 0.05, SMRT_CAP = 50; // 5% back, capped at $600 a year, once $500 a month is spent on the card
  const DAYS = { 3: 13, 5: 22 };

  function monthly(officeDays, commuteMin, after) {
    const fare = km => fareAfter(after ? 2026 : 2025, Math.min(km, 60)) / 100;
    const work = DAYS[officeDays] * 2 * fare(commuteMin / 60 * SPEED);
    const social = SOCIAL_TRIPS * 2 * fare(30 / 60 * SPEED);
    const none = work + social;
    const smrt = none - Math.min(none * SMRT_RATE, SMRT_CAP);
    return { none, smrt, pass: PASS, trips: DAYS[officeDays] * 2 + SOCIAL_TRIPS * 2,
      workFare: fare(commuteMin / 60 * SPEED), socialFare: fare(30 / 60 * SPEED), km: commuteMin / 60 * SPEED };
  }

  // ---------- helpers ----------
  const NS = 'http://www.w3.org/2000/svg';
  const $ = (tag, attrs, parent) => {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  };
  const h = (tag, cls, text, parent) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  };
  const money = v => (v < 0 ? '−$' : '$') + Math.abs(v).toFixed(2);
  const niceTicks = (lo, hi, n) => {
    const raw = (hi - lo) / n, mag = Math.pow(10, Math.floor(Math.log10(raw)));
    const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= raw);
    const out = [];
    for (let v = Math.floor(lo / step) * step; v <= hi + step * 0.001; v += step) out.push(+v.toFixed(6));
    return out;
  };

  // ---------- line chart ----------
  function lineChart(root, cfg) {
    root.replaceChildren();
    const legend = h('div', 'fv-legend', null, root);
    cfg.series.forEach(s => {
      const k = h('span', 'fv-key', null, legend);
      const i = h('i', null, null, k); i.style.borderTopColor = s.color; if (s.dash) i.style.borderTopStyle = 'dashed';
      h('span', null, s.label, k);
    });
    const plot = h('div', 'fv-plot', null, root);
    // A touch ends with pointerleave, so on touch the tooltip stays until the next tap outside the chart.
    let hideTip = () => {};
    document.addEventListener('pointerdown', ev => { if (!plot.contains(ev.target)) hideTip(); });
    const draw = () => {
      plot.querySelectorAll('svg,.fv-tip').forEach(n => n.remove());
      const W = Math.max(280, plot.clientWidth || 600), narrow = W < 520, H = narrow ? 300 : 340;
      const m = { l: cfg.yLabel ? 58 : 44, r: narrow ? 16 : (cfg.marginR || 96), t: 12, b: cfg.xLabel ? 48 : 28 };
      const xs = [...new Set(cfg.series.flatMap(s => s.points.map(p => p[0])))].sort((a, b) => a - b);
      const xmin = xs[0], xmax = xs[xs.length - 1];
      const ys = cfg.series.flatMap(s => s.points.map(p => p[1])).concat(cfg.hline ? [cfg.hline.y] : []);
      const yt = cfg.yRange ? niceTicks(cfg.yRange[0], cfg.yRange[1], 5) : niceTicks(Math.min(...ys), Math.max(...ys), 5);
      const ylo = cfg.yRange ? cfg.yRange[0] : Math.min(Math.min(...ys), yt[0]), yhi = cfg.yRange ? cfg.yRange[1] : Math.max(Math.max(...ys), yt[yt.length - 1]);
      const X = x => m.l + (x - xmin) / (xmax - xmin) * (W - m.l - m.r);
      const Y = y => H - m.b - (y - ylo) / (yhi - ylo) * (H - m.t - m.b);
      const svg = $('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': cfg.aria, tabindex: 0 }, plot);
      yt.forEach(v => {
        $('line', { class: 'fv-grid', x1: m.l, x2: W - m.r, y1: Y(v), y2: Y(v) }, svg);
        $('text', { x: m.l - 6, y: Y(v) + 4, 'text-anchor': 'end' }, svg).textContent = cfg.yFmt ? cfg.yFmt(v) : String(Math.round(v));
      });
      $('line', { class: 'fv-axis', x1: m.l, x2: W - m.r, y1: H - m.b, y2: H - m.b }, svg);
      (cfg.xTicks || xs).forEach((v, i, all) => {
        if (narrow && (all.length - 1 - i) % 2) return; // every other label, counted back from the last
        $('text', { x: X(v), y: H - m.b + 17, 'text-anchor': 'middle' }, svg).textContent = String(v);
      });
      if (cfg.xLabel) $('text', { class: 'fv-axlbl', x: (m.l + W - m.r) / 2, y: H - 6, 'text-anchor': 'middle' }, svg).textContent = cfg.xLabel;
      if (cfg.yLabel) {
        const cy = (m.t + H - m.b) / 2;
        $('text', { class: 'fv-axlbl', x: 13, y: cy, 'text-anchor': 'middle', transform: `rotate(-90 13 ${cy})` }, svg).textContent = cfg.yLabel;
      }
      (cfg.vlines || []).forEach((v, i) => {
        $('line', { class: 'fv-ref', x1: X(v.x), x2: X(v.x), y1: m.t, y2: H - m.b }, svg);
        const left = i === 0;
        $('text', { class: 'fv-lbl', x: X(v.x) + (left ? -5 : 5), y: m.t + 11, 'text-anchor': left ? 'end' : 'start' }, svg).textContent = narrow && v.short ? v.short : v.label;
      });
      if (cfg.hline) {
        $('line', { class: 'fv-ref', x1: m.l, x2: W - m.r, y1: Y(cfg.hline.y), y2: Y(cfg.hline.y) }, svg);
        $('text', { class: 'fv-lbl', x: cfg.hline.left ? m.l + 6 : W - m.r - 4, y: Y(cfg.hline.y) + (cfg.hline.below ? 15 : -5), 'text-anchor': cfg.hline.left ? 'start' : 'end' }, svg).textContent = cfg.hline.label;
      }
      const at = {};
      cfg.series.forEach(s => {
        $('path', { class: 'fv-line', d: s.points.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(''), stroke: s.color, 'stroke-width': s.width, 'stroke-dasharray': s.dash ? '6 4' : 'none' }, svg);
        if (s.points.length <= 30) s.points.forEach(p => $('circle', { class: 'fv-dot', cx: X(p[0]), cy: Y(p[1]), r: 3.5, fill: p[2] ? 'var(--bg)' : s.color, stroke: s.color }, svg));
        at[s.key] = new Map(s.points.map(p => [p[0], p]));
      });
      (cfg.notes || []).forEach(n => {
        $('circle', { cx: X(n.x), cy: Y(n.y), r: 5, fill: n.color, stroke: 'var(--bg)', 'stroke-width': 2 }, svg);
        $('text', { class: 'fv-lbl', x: X(n.x) + (n.dx || 0), y: Y(n.y) + (n.dy != null ? n.dy : n.below ? 20 : -10), 'text-anchor': n.anchor || 'middle' }, svg).textContent = n.text;
      });
      if (!narrow) { // direct labels at the line ends, nudged apart so they never collide
        const ends = cfg.series.map(s => { const p = s.points[s.points.length - 1]; return { s, x: X(p[0]), y: Y(p[1]) }; }).sort((a, b) => a.y - b.y);
        for (let i = 1; i < ends.length; i++) if (ends[i].y - ends[i - 1].y < 14) ends[i].y = ends[i - 1].y + 14;
        ends.forEach(e => { $('text', { class: 'fv-lbl', x: e.x + 9, y: e.y + 4 }, svg).textContent = e.s.short; });
      }
      // hover: a crosshair and one tooltip listing every series at that year
      const cross = $('line', { class: 'fv-cross', y1: m.t, y2: H - m.b, visibility: 'hidden' }, svg);
      const rings = cfg.series.map(s => $('circle', { r: 6, fill: 'none', stroke: s.color, 'stroke-width': 2, visibility: 'hidden' }, svg));
      const tip = h('div', 'fv-tip', null, plot); tip.hidden = true;
      let idx = -1;
      const show = i => {
        idx = Math.max(0, Math.min(xs.length - 1, i));
        const x = xs[idx];
        cross.setAttribute('x1', X(x)); cross.setAttribute('x2', X(x)); cross.setAttribute('visibility', 'visible');
        tip.replaceChildren();
        h('b', null, cfg.xFull(x), tip);
        cfg.series.forEach((s, k) => {
          const p = at[s.key].get(x);
          if (!p) { rings[k].setAttribute('visibility', 'hidden'); return; }
          rings[k].setAttribute('cx', X(x)); rings[k].setAttribute('cy', Y(p[1])); rings[k].setAttribute('visibility', 'visible');
          const row = h('div', null, null, tip);
          const l = h('span', null, null, row); const key = h('i', null, null, l); key.style.borderTopColor = s.color; if (s.dash) key.style.borderTopStyle = 'dashed';
          h('span', null, s.short, l);
          h('strong', null, cfg.valFmt ? cfg.valFmt(p[1]) : p[1].toFixed(1), row);
        });
        tip.hidden = false;
        const w = tip.offsetWidth, px = X(x);
        tip.style.left = Math.max(0, Math.min(W - w, px + 12 > W - w ? px - w - 12 : px + 12)) + 'px';
        tip.style.top = (m.t + 8) + 'px';
      };
      const hide = () => { idx = -1; cross.setAttribute('visibility', 'hidden'); rings.forEach(r => r.setAttribute('visibility', 'hidden')); tip.hidden = true; };
      const near = ev => {
        const r = svg.getBoundingClientRect(), px = (ev.clientX - r.left) * (W / r.width);
        let best = 0, bd = Infinity;
        xs.forEach((x, i) => { const d = Math.abs(X(x) - px); if (d < bd) { bd = d; best = i; } });
        return best;
      };
      svg.addEventListener('pointermove', ev => show(near(ev)));
      svg.addEventListener('pointerdown', ev => show(near(ev)));
      hideTip = hide;
      svg.addEventListener('pointerleave', ev => { if (ev.pointerType !== 'touch') hide(); });
      svg.addEventListener('blur', hide);
      svg.addEventListener('focus', () => show(idx < 0 ? xs.length - 1 : idx));
      svg.addEventListener('keydown', ev => {
        if (ev.key === 'ArrowLeft') { show((idx < 0 ? xs.length : idx) - 1); ev.preventDefault(); }
        else if (ev.key === 'ArrowRight') { show(idx + 1); ev.preventDefault(); }
        else if (ev.key === 'Escape') hide();
      });
    };
    draw();
    const det = h('details', null, null, root);
    h('summary', null, 'Data table', det);
    const t = h('table', null, null, h('div', 'fv-scroll', null, det));
    const tr = h('tr', null, null, h('thead', null, null, t));
    cfg.table.headers.forEach(x => h('th', null, x, tr));
    const tb = h('tbody', null, null, t);
    cfg.table.rows.forEach(r => { const row = h('tr', null, null, tb); r.forEach(c => h('td', null, c, row)); });
    if (window.ResizeObserver) {
      let last = plot.clientWidth, raf = 0;
      new ResizeObserver(() => {
        if (plot.clientWidth === last) return;
        last = plot.clientWidth; cancelAnimationFrame(raf); raf = requestAnimationFrame(draw);
      }).observe(plot);
    }
  }

  // ---------- chart: fares against prices, 2015 = 100 ----------
  function chartFares(root) {
    const yrs = []; for (let y = 2015; y <= 2027; y++) yrs.push(y);
    const rebase = (tbl, y) => tbl[y] / tbl[2015] * 100;
    // Official fares index to 2025, then the reference fare, joined at 2018 where the two agree.
    const refIdx = y => rebase(CPI.fare, 2018) * fareInForce(y, REF_KM) / fareInForce(2018, REF_KM);
    const fares = { key: 'fare', label: 'Bus and train fares', short: 'Fares', color: 'var(--s1)', width: 3,
      points: yrs.map(y => [y, y <= 2025 ? rebase(CPI.fare, y) : refIdx(y), y > 2025]) };
    const all = { key: 'all', label: 'All items CPI', short: 'All items', color: 'var(--ink)', width: 1.5,
      points: yrs.filter(y => y <= 2026).map(y => [y, rebase(CPI.all, y), y === 2026]) };
    const core = { key: 'core', label: 'MAS core CPI', short: 'Core CPI', color: 'var(--rule-strong)', width: 1.5,
      points: yrs.filter(y => y <= 2026).map(y => [y, rebase(CPI.core, y), y === 2026]) };
    const g = (s, y) => { const p = s.points.find(q => q[0] === y); return p ? p[1].toFixed(1) : '–'; };
    root.replaceChildren();
    h('p', 'fv-title', 'Fares lagged prices until 2019, then pulled ahead', root);
    h('p', 'fv-sub', 'Bus and train fares against consumer prices, normalised to 2015', root);
    lineChart(h('div', null, null, root), {
      xLabel: 'Year', yLabel: 'Index (2015 = 100)',
      series: [fares, all, core], hline: { y: 100, label: '2015 = 100' },
      xFull: v => v === 2026 ? '2026 (fare table; CPI to August)' : v === 2027 ? '2027 (announced fares)' : String(v),
      aria: 'Index chart, 2015 = 100, of bus and train fares against consumer prices, 2015 to 2027.',
      table: { headers: ['Year', 'Fares', 'All items', 'Core'], rows: yrs.map(y => [String(y), g(fares, y), g(all, y), g(core, y)]) },
    });
  }

  // A row of exclusive buttons; calls onChange(value) when one is pressed.
  function toggle(parent, label, opts, current, onChange) {
    const chips = h('span', 'fv-chips', null, parent);
    h('span', null, label, chips);
    opts.forEach(([v, t]) => {
      const c = h('button', 'fv-chip', t, chips); c.type = 'button'; c.setAttribute('aria-pressed', String(v === current));
      c.addEventListener('click', () => { chips.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === c))); onChange(v); });
    });
  }

  // ---------- chart: monthly cost against the number of trips a week ----------
  function chartVolume(root) {
    const WEEKS = 30 / 7; // the pass covers 30 days
    const st = { min: 60, after: false };
    const title = h('p', 'fv-title', '', root);
    const sub = h('p', 'fv-sub', '', root);
    const controls = h('div', 'fv-controls', null, root);
    const out = h('div', null, null, root);
    toggle(controls, 'Trip length', [[30, '30 minutes'], [60, '1 hour']], st.min, v => { st.min = v; render(); });
    toggle(controls, 'Fares', [[false, 'Today'], [true, 'From 26 Dec 2026']], st.after, v => { st.after = v; render(); });
    const weekly = []; for (let x = 0; x <= 24; x += 0.5) weekly.push(x);
    const render = () => {
      const fare = fareAfter(st.after ? 2026 : 2025, st.min / 60 * SPEED) / 100;
      const cost = x => x * WEEKS * fare;
      const perTrip = { key: 'n', label: 'Pay per trip', short: 'Pay per trip', color: 'var(--s1)', width: 2.5, points: weekly.map(x => [x, cost(x), false]) };
      const pass = { key: 'p', label: 'Monthly pass', short: 'Pass', color: 'var(--s2)', width: 2.5, points: weekly.map(x => [x, PASS, false]) };
      const even = PASS / (fare * WEEKS);
      title.textContent = `At ${money(fare)} a trip the pass pays from about ${Math.round(even)} trips a week`;
      sub.textContent = `Cost of 30 days of ${st.min === 60 ? '1-hour' : '30-minute'} trips, paid per trip or with the pass`;
      const w3 = monthly(3, st.min, st.after).trips / WEEKS, w5 = monthly(5, st.min, st.after).trips / WEEKS;
      lineChart(out, {
        series: [perTrip, pass], marginR: 84,
        notes: [{ x: even, y: PASS, text: even.toFixed(1) + ' trips', color: 'var(--s1)', dx: -9, dy: -9, anchor: 'end' }],
        vlines: [{ x: w3, label: `3-day week: ${Math.round(w3)}`, short: `3 days: ${Math.round(w3)}` }, { x: w5, label: `5-day week: ${Math.round(w5)}`, short: `5 days: ${Math.round(w5)}` }],
        xLabel: 'Trips a week', yLabel: 'Cost per 30 days ($)', xTicks: [0, 4, 8, 12, 16, 20, 24], yRange: [0, 240],
        yFmt: v => '$' + Math.round(v), valFmt: money, xFull: v => v + ' trips a week',
        aria: `Cost per 30 days against trips a week for ${st.min}-minute trips. The pass costs a flat ${money(PASS)} and overtakes paying per trip at ${even.toFixed(1)} trips a week.`,
        table: { headers: ['Trips a week', 'Pay per trip', 'Pass'], rows: weekly.filter(x => x % 4 === 0).map(x => [String(x), money(cost(x)), money(PASS)]) },
      });
    };
    render();
  }

  // ---------- chart: how the formula and the council's decision build up an increase ----------
  // Percentage points of fare increase. Components are weighted contributions (input x weight);
  // 2024 and 2025 are shown without components because only the totals were available.
  const FORMULA = {
    2019: { comp: [['Core inflation', 0.9, '1.7% × 0.5'], ['Wages', 1.4, '3.5% × 0.4'], ['Energy costs', 3.2, '32.3% × 0.1'], ['Capacity', 1.6, 'allowance for network capacity'], ['Productivity', -0.1, 'productivity discount']], prior: 0, formula: 7.0, granted: 7.0 },
    2020: { comp: null, prior: 0, formula: 4.4, granted: 0.0 },
    2021: { comp: null, prior: 4.4, formula: -2.2, granted: 2.2 },
    2022: { comp: null, prior: 0, formula: 13.5, granted: 2.9 },
    2023: { comp: [['Core inflation', 2.1, '4.1% × 0.5'], ['Wages', 2.7, '6.7% × 0.4'], ['Energy costs', 6.2, '62.3% × 0.1'], ['Capacity', 1.1, 'allowance for network capacity'], ['Productivity', -0.1, 'productivity discount']], prior: 10.6, formula: 12.0, granted: 7.0 },
    2024: { comp: null, prior: 15.6, formula: 3.3, granted: 6.0 },
    2025: { comp: null, prior: 12.9, formula: 1.5, granted: 5.0 },
    2026: { comp: [['Core inflation', 0.6, '1.2% × 0.5'], ['Wages', 1.6, '4% × 0.4'], ['Energy costs', 2.1, '21% × 0.1'], ['Capacity', 1.1, 'allowance for network capacity'], ['Productivity', -0.1, 'productivity discount']], prior: 9.4, formula: 5.3, granted: 7.0 },
  };
  function chartFormula(root) {
    const st = { year: 2026 };
    const title = h('p', 'fv-title', '', root);
    h('p', 'fv-sub', 'How the formula and the council\'s decision build up a fare increase, in percentage points', root);
    const controls = h('div', 'fv-controls', null, root);
    const out = h('div', null, null, root);
    toggle(controls, 'Review', Object.keys(FORMULA).map(y => [+y, String(y)]), st.year, v => { st.year = v; render(); });
    const KIND = { input: 'var(--s1)', total: 'var(--ink)', deferred: 'var(--rule-strong)', granted: 'var(--s2)' };
    const render = () => {
      const F = FORMULA[st.year], ceiling = F.formula + F.prior, left = ceiling - F.granted;
      const rows = []; let cum = 0;
      if (F.comp) F.comp.forEach(([label, v, note]) => { rows.push({ label, start: v < 0 ? cum + v : cum, end: v < 0 ? cum : cum + v, v, note, kind: 'input' }); cum += v; });
      rows.push({ label: 'Formula result', start: Math.min(0, F.formula), end: Math.max(0, F.formula), v: F.formula, note: F.comp ? 'sum of the steps above' : st.year === 2022 ? 'inferred: equals the ceiling, as nothing was deferred into 2022' : 'components not available', kind: 'total' });
      if (F.prior > 0) rows.push({ label: 'Deferred earlier', start: F.formula, end: ceiling, v: F.prior, note: 'increases postponed from earlier reviews', kind: 'deferred' });
      rows.push({ label: 'Ceiling', start: 0, end: ceiling, v: ceiling, note: 'the most the council could allow', kind: 'total' });
      rows.push({ label: 'Granted', start: 0, end: F.granted, v: F.granted, note: 'the increase the council approved', kind: 'granted' });
      if (left > 0.05) rows.push({ label: 'Still deferred', start: F.granted, end: ceiling, v: left, note: 'carried to later reviews', kind: 'deferred' });
      title.textContent = `${st.year}: the formula returned ${F.formula.toFixed(1).replace('-', '−')}%, the ceiling was ${ceiling.toFixed(1)}% and ${F.granted.toFixed(1)}% was granted`;

      out.replaceChildren();
      const legend = h('div', 'fv-legend', null, out);
      [['Formula inputs', KIND.input], ['Totals', KIND.total], ['Granted', KIND.granted], ['Deferred', KIND.deferred]].forEach(([n, c]) => {
        const k = h('span', 'fv-key', null, legend); const i = h('i', null, null, k); i.style.borderTop = '8px solid ' + c; i.style.width = '12px'; h('span', null, n, k);
      });
      const plot = h('div', 'fv-plot', null, out);
      plot.style.minHeight = (8 + 10 * 28 + 46) + 'px'; // the tallest year (10 rows), so the page does not jump
      let hideTip = () => {};
      document.addEventListener('pointerdown', ev => { if (!plot.contains(ev.target) || !ev.target.closest('g')) hideTip(); });
      const draw = () => {
        plot.replaceChildren();
        const W = Math.max(280, plot.clientWidth || 600), narrow = W < 520;
        const ROW = 28, m = { l: narrow ? 118 : 132, r: 44, t: 8, b: 46 };
        const H = m.t + rows.length * ROW + m.b, XMIN = -5, XMAX = 25;
        const X = v => m.l + (v - XMIN) / (XMAX - XMIN) * (W - m.l - m.r);
        const svg = $('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': title.textContent }, plot);
        [-5, 0, 5, 10, 15, 20, 25].forEach(v => {
          $('line', { class: v === 0 ? 'fv-axis' : 'fv-grid', x1: X(v), x2: X(v), y1: m.t, y2: H - m.b }, svg);
          $('text', { x: X(v), y: H - m.b + 17, 'text-anchor': 'middle' }, svg).textContent = String(v).replace('-', '−');
        });
        $('text', { class: 'fv-axlbl', x: (m.l + W - m.r) / 2, y: H - 6, 'text-anchor': 'middle' }, svg).textContent = 'Percentage points of fare increase';
        const tip = h('div', 'fv-tip', null, plot); tip.hidden = true;
        hideTip = () => { tip.hidden = true; };
        rows.forEach((r, i) => {
          const y = m.t + i * ROW;
          $('text', { class: 'fv-lbl', x: m.l - 8, y: y + ROW / 2 + 4, 'text-anchor': 'end' }, svg).textContent = r.label;
          const g = $('g', { tabindex: 0, role: 'img', 'aria-label': `${r.label}: ${r.v.toFixed(1)} percentage points, ${r.note}` }, svg);
          $('rect', { x: X(r.start), y: y + 4, width: Math.max(2, X(r.end) - X(r.start)), height: ROW - 8, rx: 3, fill: KIND[r.kind] }, g);
          $('text', { class: 'fv-lbl', x: X(r.end) + 6, y: y + ROW / 2 + 4 }, g).textContent = (r.v < 0 ? '−' : '') + Math.abs(r.v).toFixed(1);
          $('rect', { x: m.l, y, width: W - m.l - m.r, height: ROW, fill: 'transparent' }, g); // generous hit area
          const show = () => {
            tip.replaceChildren();
            h('b', null, r.label, tip);
            const row = h('div', null, null, tip); h('span', null, r.note, row); h('strong', null, (r.v < 0 ? '−' : '') + Math.abs(r.v).toFixed(1) + ' pts', row);
            tip.hidden = false;
            const w = tip.offsetWidth;
            tip.style.left = Math.max(0, Math.min(W - w, X(r.end) + 12)) + 'px';
            tip.style.top = Math.min(H - 70, y + ROW) + 'px';
          };
          g.addEventListener('pointerenter', show); g.addEventListener('focus', show);
          g.addEventListener('pointerleave', ev => { if (ev.pointerType !== 'touch') tip.hidden = true; }); g.addEventListener('blur', () => { tip.hidden = true; });
        });
      };
      draw();
      if (window.ResizeObserver) { let last = plot.clientWidth; new ResizeObserver(() => { if (plot.clientWidth !== last) { last = plot.clientWidth; draw(); } }).observe(plot); }
      const det = h('details', null, null, out); h('summary', null, 'Data table', det);
      const tb = h('table', null, null, h('div', 'fv-scroll', null, det));
      const hr = h('tr', null, null, h('thead', null, null, tb)); ['Step', 'Percentage points', 'Detail'].forEach(x => h('th', null, x, hr));
      const body = h('tbody', null, null, tb);
      rows.forEach(r => { const tr = h('tr', null, null, body); h('td', null, r.label, tr); h('td', null, (r.v < 0 ? '−' : '') + Math.abs(r.v).toFixed(1), tr); h('td', null, r.note, tr); });
    };
    render();
  }

  // ---------- chart: the pass price against the price that would keep its 2019 break-even ----------
  const PASS_BY_YEAR = { 2018: 120, 2019: 120, 2020: 128, 2021: 128, 2022: 128, 2023: 128, 2024: 128, 2025: 128, 2026: 122, 2027: 122 };
  function chartPassGap(root) {
    const yrs = []; for (let y = 2018; y <= 2027; y++) yrs.push(y);
    // Trips a month at which the pass broke even for the 10.2 km trip right after the December 2019 increase.
    const k = PASS_BY_YEAR[2020] / (fareInForce(2020, REF_KM) / 100);
    const kept = y => k * fareInForce(y, REF_KM) / 100;
    const actual = { key: 'a', label: 'Pass price', short: 'Pass price', color: 'var(--s2)', width: 3, points: yrs.map(y => [y, PASS_BY_YEAR[y], y === 2027]) };
    const paced = { key: 'k', label: 'Price that keeps the 2019 break-even', short: 'Kept pace', color: 'var(--s1)', width: 2.5, points: yrs.map(y => [y, kept(y), y === 2027]) };
    root.replaceChildren();
    h('p', 'fv-title', `The pass would cost about $${Math.round(kept(2027))} in 2027 if it had kept pace with fares`, root);
    h('p', 'fv-sub', `Adult monthly pass against the price that holds break-even at ${Math.round(k)} trips a month for a ${REF_KM} km trip`, root);
    lineChart(h('div', null, null, root), {
      series: [actual, paced], marginR: 90, xLabel: 'Year', yLabel: 'Price of the pass ($)',
      yFmt: v => '$' + Math.round(v), valFmt: money, xFull: v => v === 2027 ? '2027 (announced fares)' : String(v),
      aria: `Adult monthly pass price against the price that keeps its 2019 break-even, 2018 to 2027. The pass costs ${money(PASS_BY_YEAR[2027])} in 2027 against ${money(kept(2027))}.`,
      table: { headers: ['Year', 'Pass price', 'Price at 2019 break-even', 'Break-even trips a month'], rows: yrs.map(y => [String(y), money(PASS_BY_YEAR[y]), money(kept(y)), (PASS_BY_YEAR[y] / (fareInForce(y, REF_KM) / 100)).toFixed(0)]) },
    });
  }

  // ---------- comparison: monthly pass vs the Citi SMRT card ----------
  function comparison(root) {
    const st = { days: 5, min: 60 };
    const box = h('div', 'fv-calc', null, root);
    const controls = h('div', 'fv-grid2', null, box);
    const seg = (label, key, opts) => {
      const f = h('div', 'fv-field', null, controls);
      h('span', null, label, f);
      const chips = h('span', 'fv-chips', null, f);
      opts.forEach(([v, t]) => {
        const c = h('button', 'fv-chip', t, chips); c.type = 'button'; c.setAttribute('aria-pressed', String(st[key] === v));
        c.addEventListener('click', () => { st[key] = v; chips.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', String(x === c))); update(); });
      });
    };
    seg('Days in the office', 'days', [[3, '3 days'], [5, '5 days']]);
    seg('Commute each way', 'min', [[30, '30 minutes'], [60, '1 hour']]);
    const out = h('div', 'fv-out', null, box);
    const tbl = h('table', null, null, h('div', 'fv-scroll', null, out));
    const verdict = h('p', 'fv-verdict', null, out);
    const detail = h('p', 'fv-detail', null, out);

    function update() {
      const now = monthly(st.days, st.min, false), aft = monthly(st.days, st.min, true);
      tbl.replaceChildren();
      const hr = h('tr', null, null, h('thead', null, null, tbl));
      ['Cost a month', 'Today', 'From 26 Dec'].forEach(x => h('th', null, x, hr));
      const tb = h('tbody', null, null, tbl);
      [['Pay per trip, no card', 'none'], ['Pay per trip, Citi SMRT card', 'smrt'], ['Monthly pass', 'pass']].forEach(([name, k]) => {
        const tr = h('tr', null, null, tb); h('td', null, name, tr);
        [now, aft].forEach(M => {
          const td = h('td', null, money(M[k]), tr);
          if (M[k] <= Math.min(M.none, M.smrt, M.pass) + 1e-9) td.className = 'fv-win';
        });
      });
      // positive: the pass is cheaper than paying with the card
      const a = now.smrt - now.pass, b = aft.smrt - aft.pass;
      const cheaper = v => `${money(Math.abs(v))} ${v >= 0 ? 'less' : 'more'}`;
      const tail = a >= 0 && b >= 0 ? 'The pass is worth it.' : a < 0 && b < 0 ? 'The pass is not worth it.' : 'The December increase tips the result.';
      verdict.textContent = (a >= 0) === (b >= 0)
        ? `The pass costs ${cheaper(a)} a month than paying with the SMRT card today, and ${cheaper(b)} after 26 December. ${tail}`
        : `Today the pass costs ${cheaper(a)} a month than paying with the SMRT card, but after 26 December it costs ${cheaper(b)}. ${tail}`;
      detail.textContent = `A ${st.min}-minute trip is about ${now.km.toFixed(1)} km and costs ${money(now.workFare)} today, or ${money(aft.workFare)} after the increase. `
        + `The month has ${DAYS[st.days]} office days plus ${SOCIAL_TRIPS} social round trips of 30 minutes each way, ${now.trips} trips in all.`;
    }
    update();
  }

  const mount = (id, fn) => { const el = document.getElementById(id); if (el) fn(el); };
  const boot = () => { mount('fv-fares', chartFares); mount('fv-formula', chartFormula); mount('fv-passgap', chartPassGap); mount('fv-volume', chartVolume); mount('fv-calc', comparison); };
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
  }
  if (typeof module !== 'undefined') module.exports = { monthly, fareAfter, fareInForce, CPI };
})();
