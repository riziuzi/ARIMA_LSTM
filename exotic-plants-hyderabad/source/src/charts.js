// ---------- Formatting (Indian number system) ----------
const fmt = {
  inr(n) { if (n == null || !isFinite(n)) return '–'; return (n < 0 ? '−₹' : '₹') + Math.round(Math.abs(n)).toLocaleString('en-IN'); },
  // "₹12.3 lakh", "₹1.24 crore", "₹45,000"
  money(n, dp) {
    if (n == null || !isFinite(n)) return '–';
    const a = Math.abs(n), sign = n < 0 ? '−' : '';
    if (a >= 1e7) return sign + '₹' + (a / 1e7).toFixed(dp ?? (a >= 1e8 ? 1 : 2)) + ' crore';
    if (a >= 1e5) return sign + '₹' + (a / 1e5).toFixed(dp ?? (a >= 1e6 ? 1 : 2)) + ' lakh';
    return sign + '₹' + Math.round(a).toLocaleString('en-IN');
  },
  lakhAxis(v) { return (v < 0 ? '−' : '') + '₹' + (Math.abs(v) / 1e5).toLocaleString('en-IN', { maximumFractionDigits: 1 }) + 'L'; },
  int(n) { return n == null || !isFinite(n) ? '–' : Math.round(n).toLocaleString('en-IN'); },
  pct(n, dp = 0) { return n == null || !isFinite(n) ? '–' : n.toFixed(dp) + '%'; },
};

// ---------- SVG helpers ----------
const SVGNS = 'http://www.w3.org/2000/svg';
function sv(tag, attrs, parent) {
  const e = document.createElementNS(SVGNS, tag);
  if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
function svText(parent, x, y, str, cls, anchor = 'start') {
  const t = sv('text', { x, y, class: cls, 'text-anchor': anchor }, parent);
  t.textContent = str;
  return t;
}
function niceTicks(min, max, count = 5) {
  if (!(max > min)) max = min + 1;
  const raw = (max - min) / Math.max(1, count);
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / mag;
  const step = (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * mag;
  const lo = Math.floor(min / step + 1e-9) * step, hi = Math.ceil(max / step - 1e-9) * step;
  const ticks = [];
  for (let v = lo; v <= hi + step / 2; v += step) ticks.push(Math.round(v / step) * step);
  return { lo, hi, ticks };
}
// Column/bar path: 4px rounded data end, square at the baseline.
function barPath(x, w, yBase, yEnd, r = 4) {
  const h = Math.abs(yEnd - yBase);
  r = Math.min(r, h, w / 2);
  if (h < 0.5) return '';
  if (yEnd <= yBase) return `M${x},${yBase}V${yEnd + r}Q${x},${yEnd} ${x + r},${yEnd}H${x + w - r}Q${x + w},${yEnd} ${x + w},${yEnd + r}V${yBase}Z`;
  return `M${x},${yBase}V${yEnd - r}Q${x},${yEnd} ${x + r},${yEnd}H${x + w - r}Q${x + w},${yEnd} ${x + w},${yEnd - r}V${yBase}Z`;
}

// ---------- One shared tooltip ----------
const TIP = (() => {
  const t = document.createElement('div');
  t.className = 'tip'; t.hidden = true; t.setAttribute('role', 'status');
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(t));
  return t;
})();
function showTip(cx, cy, title, rows) {
  if (!TIP.isConnected) document.body.appendChild(TIP);
  TIP.replaceChildren();
  const h = document.createElement('div'); h.className = 'tip-h'; h.textContent = title; TIP.appendChild(h);
  for (const r of rows) {
    const row = document.createElement('div'); row.className = 'tip-r';
    const k = document.createElement('span'); k.className = 'tip-k'; k.style.background = r.color || 'transparent'; row.appendChild(k);
    const v = document.createElement('strong'); v.textContent = r.value; row.appendChild(v);
    const l = document.createElement('span'); l.className = 'tip-l'; l.textContent = r.label; row.appendChild(l);
    TIP.appendChild(row);
  }
  TIP.hidden = false;
  const b = TIP.getBoundingClientRect();
  let x = cx + 14, y = cy + 14;
  if (x + b.width > window.innerWidth - 8) x = Math.max(8, cx - b.width - 14);
  if (y + b.height > window.innerHeight - 8) y = Math.max(8, cy - b.height - 14);
  TIP.style.left = (x + window.scrollX) + 'px';
  TIP.style.top = (y + window.scrollY) + 'px';
}
function hideTip() { TIP.hidden = true; }

// Re-render a chart whenever its container changes width.
function responsive(host, draw) {
  let last = 0;
  const ro = new ResizeObserver(() => { const w = host.clientWidth; if (Math.abs(w - last) > 4) { last = w; draw(); } });
  ro.observe(host);
  draw();
}

// ---------- Line chart with crosshair ----------
// o = { x:[], series:[{name,color,values,width}], xFmt, yFmt, yTip, xTitle, yTitle, vlines:[{x,label}], dot:{x,y,label}, label }
function lineChart(host, o) {
  const W = Math.max(280, host.clientWidth || 600);
  const H = o.height || Math.round(Math.min(360, Math.max(250, W * 0.52)));
  const m = { l: 58, r: 18, t: 30, b: 46 };
  const svg = sv('svg', { width: W, height: H, viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': o.label || '', tabindex: 0 });
  const xs = o.x, x0 = xs[0], x1 = xs[xs.length - 1];
  const all = o.series.flatMap(s => s.values).filter(v => isFinite(v));
  const yt = niceTicks(Math.min(0, ...all), Math.max(...all), H > 300 ? 5 : 4);
  const X = v => m.l + (v - x0) / (x1 - x0) * (W - m.l - m.r);
  const Y = v => H - m.b - (v - yt.lo) / (yt.hi - yt.lo) * (H - m.t - m.b);
  for (const t of yt.ticks) {
    sv('line', { x1: m.l, x2: W - m.r, y1: Y(t), y2: Y(t), class: t === 0 ? 'axis' : 'grid' }, svg);
    svText(svg, m.l - 8, Y(t) + 4, o.yFmt(t), 'tick', 'end');
  }
  const xt = niceTicks(x0, x1, Math.max(4, Math.floor((W - m.l - m.r) / 90)));
  for (const t of xt.ticks) if (t >= x0 && t <= x1) svText(svg, X(t), H - m.b + 18, o.xFmt(t), 'tick', 'middle');
  if (o.xTitle) svText(svg, m.l + (W - m.l - m.r) / 2, H - 8, o.xTitle, 'ttl', 'middle');
  if (o.yTitle) svText(svg, m.l - 50, 14, o.yTitle, 'ttl', 'start');
  for (const v of o.vlines || []) {
    if (v.x < x0 || v.x > x1) continue;
    sv('line', { x1: X(v.x), x2: X(v.x), y1: m.t - 6, y2: H - m.b, stroke: 'var(--accent)', 'stroke-width': 1.5 }, svg);
    const right = X(v.x) > W * 0.7;
    svText(svg, X(v.x) + (right ? -6 : 6), m.t + 2, v.label, 'lbl2', right ? 'end' : 'start');
  }
  for (const s of o.series) {
    const d = s.values.map((v, i) => (i ? 'L' : 'M') + X(xs[i]).toFixed(1) + ',' + Y(v).toFixed(1)).join('');
    sv('path', { d, fill: 'none', stroke: s.color, 'stroke-width': s.width || 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, svg);
  }
  if (o.dot && o.dot.x >= x0 && o.dot.x <= x1) {
    const cx = X(o.dot.x), cy = Y(o.dot.y);
    sv('circle', { cx, cy, r: 5.5, fill: 'var(--ink)', class: 'ring' }, svg);
    if (W < 560) svText(svg, cx, cy + 22, o.dot.label, 'lbl', 'middle');   // narrow: below the dot, clear of the rising line
    else { const right = cx > W * 0.65; svText(svg, cx + (right ? -10 : 10), cy - 10, o.dot.label, 'lbl', right ? 'end' : 'start'); }
  }
  const cross = sv('line', { y1: m.t, y2: H - m.b, class: 'cross', visibility: 'hidden' }, svg);
  const hit = sv('rect', { x: m.l, y: m.t, width: W - m.l - m.r, height: H - m.t - m.b, fill: 'transparent' }, svg);
  let idx = Math.floor(xs.length / 2);
  const show = (i, cx, cy) => {
    idx = Math.max(0, Math.min(xs.length - 1, i));
    cross.setAttribute('x1', X(xs[idx])); cross.setAttribute('x2', X(xs[idx])); cross.setAttribute('visibility', 'visible');
    showTip(cx, cy, o.xFmt(xs[idx], true), o.series.map(s => ({ color: s.color, label: s.name, value: (o.yTip || o.yFmt)(s.values[idx]) })));
  };
  const nearest = px => { const v = x0 + (px - m.l) / (W - m.l - m.r) * (x1 - x0); let best = 0; for (let i = 1; i < xs.length; i++) if (Math.abs(xs[i] - v) < Math.abs(xs[best] - v)) best = i; return best; };
  hit.addEventListener('pointermove', e => { const r = svg.getBoundingClientRect(); show(nearest((e.clientX - r.left) * (W / r.width)), e.clientX, e.clientY); });
  hit.addEventListener('pointerleave', () => { cross.setAttribute('visibility', 'hidden'); hideTip(); });
  svg.addEventListener('keydown', e => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    e.preventDefault();
    const step = Math.max(1, Math.round(xs.length / 40));
    const r = svg.getBoundingClientRect();
    const i = idx + (e.key === 'ArrowRight' ? step : -step);
    show(i, r.left + X(xs[Math.max(0, Math.min(xs.length - 1, i))]) * (r.width / W), r.top + 20);
  });
  svg.addEventListener('blur', () => { cross.setAttribute('visibility', 'hidden'); hideTip(); });
  host.replaceChildren(svg);
}

// ---------- Columns (yearly cash) + cumulative line ----------
// o = { labels:[], bars:[], line:[], barName, lineName, yFmt, yTip, label }
function cashChart(host, o) {
  const W = Math.max(280, host.clientWidth || 600);
  const H = o.height || Math.round(Math.min(340, Math.max(240, W * 0.48)));
  const m = { l: 58, r: 14, t: 18, b: 34 };
  const svg = sv('svg', { width: W, height: H, viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': o.label || '' });
  const vals = [...o.bars, ...(o.line || [])].filter(isFinite);
  const yt = niceTicks(Math.min(0, ...vals), Math.max(0, ...vals), 5);
  const n = o.labels.length, band = (W - m.l - m.r) / n;
  const bw = Math.min(24, band * 0.6);
  const X = i => m.l + band * i + band / 2;
  const Y = v => H - m.b - (v - yt.lo) / (yt.hi - yt.lo) * (H - m.t - m.b);
  for (const t of yt.ticks) {
    sv('line', { x1: m.l, x2: W - m.r, y1: Y(t), y2: Y(t), class: t === 0 ? 'axis' : 'grid' }, svg);
    svText(svg, m.l - 8, Y(t) + 4, o.yFmt(t), 'tick', 'end');
  }
  const every = band < 26 ? 2 : 1;
  o.labels.forEach((lb, i) => { if (i % every === 0) svText(svg, X(i), H - m.b + 18, lb, 'tick', 'middle'); });
  o.bars.forEach((v, i) => {
    const d = barPath(X(i) - bw / 2, bw, Y(0), Y(v));
    if (d) sv('path', { d, fill: v >= 0 ? 'var(--pos)' : 'var(--neg)' }, svg);
  });
  if (o.line) {
    const d = o.line.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ',' + Y(v).toFixed(1)).join('');
    sv('path', { d, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2, 'stroke-linejoin': 'round' }, svg);
    o.line.forEach((v, i) => sv('circle', { cx: X(i), cy: Y(v), r: 4, fill: 'var(--ink)', class: 'ring' }, svg));
  }
  o.labels.forEach((lb, i) => {
    const r = sv('rect', { x: X(i) - band / 2, y: m.t, width: band, height: H - m.t - m.b, fill: 'transparent', tabindex: 0, 'aria-label': `${lb}: ${o.barName} ${o.yTip(o.bars[i])}` }, svg);
    const rows = () => [{ color: o.bars[i] >= 0 ? 'var(--pos)' : 'var(--neg)', label: o.barName, value: o.yTip(o.bars[i]) }]
      .concat(o.line ? [{ color: 'var(--ink)', label: o.lineName, value: o.yTip(o.line[i]) }] : []);
    r.addEventListener('pointermove', e => showTip(e.clientX, e.clientY, lb, rows()));
    r.addEventListener('pointerleave', hideTip);
    r.addEventListener('focus', () => { const b = r.getBoundingClientRect(); showTip(b.left + b.width / 2, b.top + 10, lb, rows()); });
    r.addEventListener('blur', hideTip);
  });
  host.replaceChildren(svg);
}

// ---------- Scatter (log y) with a fitted curve ----------
// o = { points:[{x,y,label,sub,color}], curve:(x)=>y, xMax, yTicks:[], xTitle, yTitle, label, marker:{x,y,label} }
function scatterChart(host, o) {
  const W = Math.max(280, host.clientWidth || 600);
  const H = o.height || Math.round(Math.min(380, Math.max(260, W * 0.55)));
  const m = { l: 58, r: 16, t: 26, b: 46 };
  const svg = sv('svg', { width: W, height: H, viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': o.label || '' });
  const yTicks = o.yTicks, yLo = Math.log(yTicks[0]), yHi = Math.log(yTicks[yTicks.length - 1]);
  const X = v => m.l + v / o.xMax * (W - m.l - m.r);
  const Y = v => H - m.b - (Math.log(Math.max(v, yTicks[0])) - yLo) / (yHi - yLo) * (H - m.t - m.b);
  for (const t of yTicks) {
    sv('line', { x1: m.l, x2: W - m.r, y1: Y(t), y2: Y(t), class: t === yTicks[0] ? 'axis' : 'grid' }, svg);
    svText(svg, m.l - 8, Y(t) + 4, o.yFmt(t), 'tick', 'end');
  }
  const xt = niceTicks(0, o.xMax, Math.max(3, Math.floor((W - m.l - m.r) / 90)));
  for (const t of xt.ticks) if (t <= o.xMax) svText(svg, X(t), H - m.b + 18, String(t), 'tick', 'middle');
  if (o.xTitle) svText(svg, m.l + (W - m.l - m.r) / 2, H - 8, o.xTitle, 'ttl', 'middle');
  if (o.yTitle) svText(svg, m.l - 50, 14, o.yTitle, 'ttl', 'start');
  if (o.curve) {
    let d = '';
    for (let x = 5; x <= o.xMax; x += 2) d += (d ? 'L' : 'M') + X(x).toFixed(1) + ',' + Y(o.curve(x)).toFixed(1);
    sv('path', { d, fill: 'none', stroke: 'var(--ink)', 'stroke-width': 2, 'stroke-linecap': 'round' }, svg);
  }
  for (const p of o.points) {
    const g = sv('g', { tabindex: 0, 'aria-label': `${p.label}: ${p.sub}` }, svg);
    sv('circle', { cx: X(p.x), cy: Y(p.y), r: 12, fill: 'transparent' }, g);
    sv('circle', { cx: X(p.x), cy: Y(p.y), r: 4.5, fill: p.color || 'var(--s1)', class: 'ring' }, g);
    const rows = () => [{ color: p.color || 'var(--s1)', label: p.sub, value: o.yTip(p.y) }];
    g.addEventListener('pointermove', e => showTip(e.clientX, e.clientY, p.label, rows()));
    g.addEventListener('pointerleave', hideTip);
    g.addEventListener('focus', () => { const b = g.getBoundingClientRect(); showTip(b.left + b.width / 2, b.top, p.label, rows()); });
    g.addEventListener('blur', hideTip);
  }
  if (o.marker && o.marker.x >= 0 && o.marker.x <= o.xMax) {
    const mx = X(o.marker.x);
    sv('line', { x1: mx, x2: mx, y1: m.t - 4, y2: H - m.b, stroke: 'var(--accent)', 'stroke-width': 1.5, 'stroke-dasharray': '4 3' }, svg);
    if (o.marker.y != null) sv('circle', { cx: mx, cy: Y(o.marker.y), r: 6, fill: 'var(--accent)', class: 'ring' }, svg);
    const right = mx > W * 0.6;
    svText(svg, mx + (right ? -8 : 8), m.t + 6, o.marker.label, 'lbl', right ? 'end' : 'start');
  }
  host.replaceChildren(svg);
}

// ---------- Horizontal bars in HTML (ranked, one color) ----------
function hbars(host, items, valueFmt) {
  const max = Math.max(...items.map(i => i.value), 1);
  const wrap = document.createElement('div'); wrap.className = 'hbars';
  for (const it of items) {
    const row = document.createElement('div'); row.className = 'hb-row';
    const l = document.createElement('span'); l.className = 'hb-l'; l.textContent = it.label;
    const tr = document.createElement('span'); tr.className = 'hb-track';
    const b = document.createElement('span'); b.className = 'hb-bar'; b.style.width = Math.max(0.5, it.value / max * 100) + '%';
    if (it.color) b.style.background = it.color;
    tr.appendChild(b);
    const v = document.createElement('span'); v.className = 'hb-v'; v.textContent = valueFmt(it.value, it);
    row.append(l, tr, v); wrap.appendChild(row);
  }
  host.replaceChildren(wrap);
}

// Build a simple table (header row + rows of strings) into a container.
function fillTable(host, head, rows, rightCols = []) {
  const t = document.createElement('table'); t.className = 'tbl';
  const th = t.createTHead().insertRow();
  head.forEach((h, i) => { const c = document.createElement('th'); c.textContent = h; if (rightCols.includes(i)) c.className = 'r'; th.appendChild(c); });
  const tb = t.createTBody();
  for (const r of rows) {
    const tr = tb.insertRow();
    if (r.cls) tr.className = r.cls;
    (r.cells || r).forEach((v, i) => {
      const td = tr.insertCell();
      if (v && typeof v === 'object' && v.href) { const a = document.createElement('a'); a.href = v.href; a.target = '_blank'; a.rel = 'noopener'; a.textContent = v.text; td.appendChild(a); }
      else td.textContent = v;
      if (rightCols.includes(i)) td.className = 'r';
    });
  }
  host.replaceChildren(t);
}
