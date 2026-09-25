// Generates the motif drawings for public/works/the-train.html (The Train, a Twine game).
//
//   node scripts/train-motifs.mjs            prints the CSS rules to paste into the story stylesheet
//   node scripts/train-motifs.mjs --preview  also writes train-motifs-preview.html to look at
//
// Each motif becomes a `.doodle-<name> { --doodle: url(data:...) }` rule; the stylesheet paints it
// through a mask, so the drawing takes the text/accent colour and follows light and dark.
import fs from 'fs';
// Same pen as src/components/Doodle.astro: Catmull-Rom through hand-placed points, round ends.
function densify(pts, steps = 8) {
  if (pts.length < 3) return pts;
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, pts.length - 1)];
    for (let s = 0; s < steps; s++) {
      const t = s / steps, t2 = t * t, t3 = t2 * t;
      const f = (a, b, c, d) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]);
    }
  }
  out.push(pts[pts.length - 1]);
  return out;
}
const f1 = n => +n.toFixed(1);
// Everything becomes points so the whole drawing can take the same hand wobble. Straight runs,
// boxes and circles are sampled exactly ("exact": no smoothing); freehand curves are smoothed.
function sample(pts, gap = 1.4) {
  const out = [pts[0]];
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1], [bx, by] = pts[i];
    const n = Math.max(1, Math.round(Math.hypot(bx - ax, by - ay) / gap));
    for (let k = 1; k <= n; k++) out.push([ax + (bx - ax) * k / n, ay + (by - ay) * k / n]);
  }
  return out;
}
function arcPts(cx, cy, r, a0, a1, n = 10, rx = r) {
  return Array.from({ length: n + 1 }, (_, i) => { const a = a0 + (a1 - a0) * i / n; return [cx + Math.cos(a) * rx, cy + Math.sin(a) * r]; });
}
const steps = pts => ({ pts: sample(pts), exact: true });
const line = (x0, y0, x1, y1) => steps([[x0, y0], [x1, y1]]);
function box(x0, y0, x1, y1, r = 2) {
  const q = Math.PI / 2;
  const pts = [
    ...arcPts(x0 + r, y0 + r, r, 2 * q, 3 * q, 4), ...sample([[x0 + r, y0], [x1 - r, y0]]).slice(1),
    ...arcPts(x1 - r, y0 + r, r, 3 * q, 4 * q, 4).slice(1), ...sample([[x1, y0 + r], [x1, y1 - r]]).slice(1),
    ...arcPts(x1 - r, y1 - r, r, 0, q, 4).slice(1), ...sample([[x1 - r, y1], [x0 + r, y1]]).slice(1),
    ...arcPts(x0 + r, y1 - r, r, q, 2 * q, 4).slice(1), ...sample([[x0, y1 - r], [x0, y0 + r]]).slice(1),
  ];
  return { pts, exact: true, closed: true };
}
function circle(cx, cy, r, rx = r) {
  const n = Math.max(16, Math.round(Math.PI * (r + rx) / 1.4));
  return { pts: arcPts(cx, cy, r, -Math.PI / 2, 1.5 * Math.PI, n, rx), exact: true, closed: true };
}
const rot = (pts, deg, cx, cy) => { const a = deg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a); return pts.map(([x, y]) => [cx + (x - cx) * c - (y - cy) * s, cy + (x - cx) * s + (y - cy) * c]); };
const rotLine = (pts, deg, cx, cy) => steps(rot(pts, deg, cx, cy));

// Fine-pen detail (hatching, glints, minute ticks) is drawn thinner than the outlines.
const thin = el => (Array.isArray(el) ? { pts: el, thin: true } : { ...el, thin: true });
const T = (...els) => els.map(thin);
const hatch = (x0, y0, x1, y1, n, dx = 0, dy = 0) => T(...Array.from({ length: n }, (_, i) => line(x0 + i * dx, y0 + i * dy, x1 + i * dx, y1 + i * dy)));
const tickRing = (cx, cy, r0, r1, n, skipEvery = 0) => T(...Array.from({ length: n }, (_, i) => i).filter(i => !skipEvery || i % skipEvery).map(i => { const a = i * 2 * Math.PI / n; return line(cx + Math.sin(a) * r0, cy - Math.cos(a) * r0, cx + Math.sin(a) * r1, cy - Math.cos(a) * r1); }));

const S = {
  // cup on its saucer: shading down the far side, crema, spoon, steam
  cup: [
    circle(50, 80, 9, 38), circle(50, 79, 4.5, 17),
    circle(50, 42, 6.5, 23),
    [[27, 42.5], [28.5, 56], [33, 67], [40.5, 74.5], [50, 76.5], [59.5, 74.5], [67, 67], [71.5, 56], [73, 42.5]],
    circle(50, 42.6, 4.4, 19),
    [[72.2, 48], [80, 47], [84.5, 51.5], [82.5, 58], [75, 62], [68.5, 63]],
    [[72.8, 52.4], [77.5, 52.2], [79, 55], [76.4, 57.8], [71.6, 58.6]],
    [[67, 86], [80, 81.5], [86, 79.4]], circle(89.6, 78, 2.2, 4.2),
    [[42, 34], [39, 27], [43, 21], [40, 13]], [[55, 34], [52, 27], [56, 21], [53, 13]],
    ...T([[48.5, 30], [46.5, 25], [49.5, 20]],
         [[37, 41.4], [43, 39.6], [50, 39.2]],
         [[62, 49], [63.4, 57], [61, 65.5]], [[66, 48], [67.2, 56], [64.8, 64]], [[69.6, 47], [70.4, 54], [68.6, 60.5]]),
  ],
  // the station nameboard hung from the ceiling rail: badge, name and reading, prev/next arrows
  sign: [
    line(28, 7, 28, 26), line(72, 7, 72, 26),
    box(8, 26, 92, 68, 3),
    circle(22, 41, 7.5), [[19, 44.5], [19, 37.5], [25, 44.5], [25, 37.5]],
    line(35, 38, 80, 38), line(35, 46, 64, 46),
    line(8, 55, 92, 55),
    line(20, 61.5, 38, 61.5), [[23, 58.5], [19.5, 61.5], [23, 64.5]],
    line(62, 61.5, 80, 61.5), [[77, 58.5], [80.5, 61.5], [77, 64.5]],
    ...T(line(6, 6, 94, 6), box(24.5, 6, 31.5, 9, 0.6), box(68.5, 6, 75.5, 9, 0.6), circle(22, 41, 9.4), line(35, 41.6, 72, 41.6)),
  ],
  // an announcement pinned askew over another sheet, one corner dog-eared
  notice: [
    rotLine([[24, 10], [78, 10], [78, 78], [66, 90], [24, 90], [24, 10]], -4, 51, 50),
    rotLine([[78, 78], [67, 79], [66, 90]], -4, 51, 50),
    circle(50.4, 14.6, 2.6), circle(50.4, 14.6, 0.6),
    rotLine([[33, 27], [63, 27]], -4, 51, 50),
    ...T(rotLine([[33, 30.5], [55, 30.5]], -4, 51, 50),
         ...[40, 47, 54, 61, 68].map((y, i) => rotLine([[33, y], [[66, 60, 68, 52, 44][i], y]], -4, 51, 50)),
         rotLine([[33, 76], [44, 76]], -4, 51, 50), rot([[34, 73], [36.5, 68.5], [38.5, 73], [41, 68], [43, 72.5]], -4, 51, 50),
         rotLine([[78, 16], [84, 16], [84, 94], [30, 94], [30, 90.5]], 5, 57, 55),
         rotLine([[70, 81], [68, 87.5]], -4, 51, 50), rotLine([[73, 80.5], [69.5, 84.5]], -4, 51, 50)),
  ],
  // the old woman's book, open, stacked page edges, ribbon, and her glasses on the page
  book: [
    [[50, 40], [42, 35], [30, 33.5], [18, 35], [10, 38], [10, 70], [18, 67], [30, 66], [42, 68], [50, 73]],
    [[50, 40], [58, 35], [70, 33.5], [82, 35], [90, 38], [90, 70], [82, 67], [70, 66], [58, 68], [50, 73]],
    line(50, 40, 50, 73),
    [[10, 70], [11, 76], [20, 73.5], [32, 72.5], [43, 74.5], [50, 79], [57, 74.5], [68, 72.5], [80, 73.5], [89, 76], [90, 70]],
    circle(64, 58, 5.2, 6.2), circle(79, 58, 5.2, 6.2), [[70.2, 57.5], [71.5, 56], [72.8, 57.5]],
    [[57.8, 57], [54, 53], [51.5, 52]], [[85.2, 57], [88, 52.5], [89, 49]],
    [[48.5, 75], [50.5, 82], [48, 88], [50, 94]], [[52, 75.5], [54, 82], [51.5, 88], [53.5, 93]],
    ...T(...[42, 47, 52, 57, 62].map((y, i) => [[16, y + 1], [28, y - 0.6], [[43, 41, 43, 39, 35][i], y + 0.4]]),
         ...[42, 47].map(y => [[57, y + 0.4], [70, y - 0.6], [84, y + 1]]),
         [[10.6, 72], [20, 69.6], [32, 68.6], [43, 70.6], [50, 75]], [[89.4, 72], [80, 69.6], [68, 68.6], [57, 70.6], [50, 75]],
         [[10.8, 74], [20, 71.6], [32, 70.6], [43, 72.6], [50, 77]], [[89.2, 74], [80, 71.6], [68, 70.6], [57, 72.6], [50, 77]],
         [[60.5, 55.5], [62, 54], [64, 53.6]], [[75.5, 55.5], [77, 54], [79, 53.6]]),
  ],
  // the platform clock: double case, hour and minute ticks, a fine second hand
  clock: [
    line(50, 2, 50, 12), line(42, 12, 58, 12),
    circle(50, 44, 30), circle(50, 44, 25),
    ...Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; const r0 = i % 3 ? 20.5 : 18.5; return line(50 + Math.sin(a) * r0, 44 - Math.cos(a) * r0, 50 + Math.sin(a) * 23, 44 - Math.cos(a) * 23); }),
    line(50, 44, 50, 27), line(50, 44, 62, 50), circle(50, 44, 1.6),
    ...tickRing(50, 44, 21.8, 23, 60, 5),
    ...T(circle(50, 44, 27.6), line(50, 50, 38, 26.5)),
  ],
  // a subway car coming out of the tunnel: shading along the arch, windscreen glints, stripes,
  // sleepers running in
  train: [
    { pts: [...sample([[5, 96], [5, 56]]), ...arcPts(50, 56, 45, Math.PI, 2 * Math.PI, 90).slice(1), ...sample([[95, 56], [95, 96]]).slice(1)], exact: true },
    box(26, 24, 74, 84, 7),
    box(39, 27.5, 61, 32.5, 1),
    box(31, 36, 69, 56, 4),
    box(43, 36, 57, 80, 2), line(43, 56, 57, 56),
    line(26, 62, 43, 62), line(26, 66, 43, 66), line(57, 62, 74, 62), line(57, 66, 74, 66),
    box(30.5, 71, 38.5, 75.5, 1.5), box(61.5, 71, 69.5, 75.5, 1.5),
    box(45, 84, 55, 88.5, 1),
    [[14, 99], [29, 90], [34, 87]], [[86, 99], [71, 90], [66, 87]],
    ...T(line(42.5, 30, 50, 30), line(53, 30, 57.5, 30),
         ...Array.from({ length: 13 }, (_, i) => { const a = Math.PI + 0.18 + i * (Math.PI - 0.36) / 12; return line(50 + Math.cos(a) * 44, 56 + Math.sin(a) * 44, 50 + Math.cos(a) * 39, 56 + Math.sin(a) * 39); }),
         line(34, 44, 38, 39), line(35, 49, 41, 42), line(60, 44, 64, 39),
         ...[29, 32, 35, 38, 41].map(x => line(x, 62.5, x, 65.5)), ...[59, 62, 65, 68, 71].map(x => line(x, 62.5, x, 65.5)),
         line(22, 95.5, 78, 95.5), line(27, 92.5, 73, 92.5), line(31, 90, 69, 90)),
  ],
};
// A steady hand: each stroke drifts sideways on two slow waves, phase-shifted per stroke so no two
// lines wobble alike. Closed shapes end where the wobble leaves them, a touch off their start,
// like a pen coming round a loop.
function wobble(pts, amp, seed) {
  let s = 0;
  const p1 = seed * 2.39996, p2 = seed * 1.61803;
  return pts.map(([x, y], i) => {
    if (i) s += Math.hypot(x - pts[i - 1][0], y - pts[i - 1][1]);
    const [ax, ay] = pts[Math.max(0, i - 1)], [bx, by] = pts[Math.min(pts.length - 1, i + 1)];
    const len = Math.hypot(bx - ax, by - ay) || 1;
    const nx = -(by - ay) / len, ny = (bx - ax) / len;
    const o = amp * (0.65 * Math.sin(s / 7 + p1) + 0.35 * Math.sin(s / 3.1 + p2));
    return [x + nx * o, y + ny * o];
  });
}
let strokeSeed = 0;
const toPath = el => {
  const raw = el.exact ? el.pts : densify(el.pts ?? el, 5);
  const pts = wobble(raw, el.thin ? 0.28 : 0.45, ++strokeSeed);
  return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${f1(x)} ${f1(y)}`).join('');
};
const SW = 1.2;
const SW_FINE = 0.7;
const svg = n => `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='black' stroke-linecap='round' stroke-linejoin='round'><path stroke-width='${SW}' d='${S[n].filter(p => !p.thin).map(toPath).join('')}'/><path stroke-width='${SW_FINE}' d='${S[n].filter(p => p.thin).map(toPath).join('')}'/></svg>`;
const uri = s => `url("data:image/svg+xml,${s.replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23')}")`;
const css = Object.keys(S).map(n => `.doodle-${n} { --doodle: ${uri(svg(n))}; }`).join('\n');
process.stdout.write(css + '\n');
if (process.argv.includes('--preview')) {
  const cell = (n, col, op) => `<div style="display:inline-block;margin:6px;text-align:center;font:12px monospace;color:#888">${svg(n).replace("stroke='black'", `stroke='${col}' opacity='${op}'`).replace('<svg ', '<svg width="210" height="210" ')}<br>${n}</div>`;
  fs.writeFileSync('train-motifs-preview.html', `<body style="margin:0"><div style="background:#fffcf6;padding:12px">${Object.keys(S).map(n => cell(n, '#2b2620', 1)).join('')}</div><div style="background:#fffcf6;padding:12px">${Object.keys(S).map(n => cell(n, '#5a7a2c', 0.2)).join('')}</div><div style="background:#1c1a16;padding:12px">${Object.keys(S).map(n => cell(n, '#a9c77c', 0.2)).join('')}</div></body>`);
}
