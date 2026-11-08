// Exotic Plant Farm Course: lesson router, progress, checks and the Try-it widgets.
// Runs on the same engine (model.js), research values (data.js) and chart helpers (charts.js)
// as the report and the calculator, so every number here matches them.
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const money = v => fmt.money(v);
  const rs = (v, dp = 0) => (v < 0 && Math.abs(v) >= 0.5 * Math.pow(10, -dp) ? '−₹' : '₹') + Math.abs(v).toLocaleString('en-IN', { minimumFractionDigits: dp, maximumFractionDigits: dp });
  const lakh = (v, dp = 1) => { const a = (Math.abs(v) / 1e5).toFixed(dp); return (v < 0 && +a !== 0 ? '−₹' : '₹') + a + ' lakh'; };
  const int = v => Math.round(v).toLocaleString('en-IN');
  const num = (v, dp = 1) => v.toLocaleString('en-IN', { maximumFractionDigits: dp });

  // ---------- Per-viewer memory (ticks, answers, last lesson). Optional: the course works without it.
  const KEY = 'epc:';
  const store = {
    get(k, d) { try { const v = localStorage.getItem(KEY + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(KEY + k, JSON.stringify(v)); } catch (e) { /* storage blocked: nothing is remembered */ } },
    clear() { try { Object.keys(localStorage).filter(k => k.startsWith(KEY)).forEach(k => localStorage.removeItem(k)); } catch (e) { /* ignore */ } },
  };

  // ---------- Model helpers
  const plan = (id, o = {}) => { const s = { ...planState(id), ...o }; s.ramp = [s.ramp1 / 100, s.ramp2 / 100, s.ramp3 / 100, 1]; return s; };
  const truck = mode => ({ vehicleMode: mode, ...VEHICLES[mode].values, unitsPerTrip: VEHICLES[mode].perTrip.plant });
  const flows = s => cashflow({ ...s, loanAmount: 0 });
  const TRUCKS = [{ v: 'ace', t: 'Hire a Tata Ace (320 pots a trip)' }, { v: 'truck14', t: 'Hire a 14 ft truck (1,250 pots)' }, { v: 'own', t: 'Buy a used Tata Ace' }];
  const DIRS = DIRECTIONS.map(d => ({ v: d.v, t: d.t }));

  // ---------- Small UI builders
  function rows(host, list) {
    host.replaceChildren(...list.filter(Boolean).map(([label, amt, cls]) => {
      const r = el('div', 'row' + (cls ? ' ' + cls : ''));
      r.append(el('span', null, label), el('span', 'amt', amt));
      return r;
    }));
  }
  function stats(host, list) {
    host.replaceChildren(...list.map(([k, v, s]) => {
      const d = el('div', 'stat'); d.append(el('span', 'k', k), el('span', 'v', v));
      if (s) d.append(el('span', 's', s));
      return d;
    }));
  }
  const chip = (kind, text) => el('span', 'chip ' + kind, text);
  function hoverTip(node, title, rowsFn) {
    node.addEventListener('pointermove', e => showTip(e.clientX, e.clientY, title, rowsFn()));
    node.addEventListener('pointerleave', hideTip);
    node.addEventListener('focus', () => { const b = node.getBoundingClientRect(); showTip(b.left + Math.min(b.width / 2, 160), b.top + 8, title, rowsFn()); });
    node.addEventListener('blur', hideTip);
  }

  // Sliders and selects. Each spec: {key, id, label, value, hint} plus {min, max, step, fmt} or {options:[{v,t}]}.
  function controls(host, specs, onChange) {
    const vals = {}, resets = [];
    const fire = () => onChange(vals);
    for (const c of specs) {
      const w = el('div', 'ctl'), lab = el('label');
      lab.htmlFor = c.id; lab.append(el('span', null, c.label));
      let inp;
      if (c.options) {
        inp = el('select'); inp.id = c.id;
        for (const o of c.options) { const op = el('option', null, o.t); op.value = String(o.v); inp.append(op); }
        const read = () => { vals[c.key] = typeof c.value === 'number' ? +inp.value : inp.value; };
        inp.value = String(c.value); read();
        inp.addEventListener('change', () => { read(); fire(); });
        resets.push(() => { inp.value = String(c.value); read(); });
      } else {
        inp = el('input'); inp.type = 'range'; inp.id = c.id;
        inp.min = c.min; inp.max = c.max; inp.step = c.step; inp.value = c.value;
        const out = el('output'); out.setAttribute('for', c.id);
        const read = () => { vals[c.key] = +inp.value; out.textContent = c.fmt(+inp.value); };
        read(); lab.append(out);
        inp.addEventListener('input', () => { read(); fire(); });
        resets.push(() => { inp.value = c.value; read(); });
      }
      w.append(lab, inp);
      if (c.hint) w.append(el('p', 'hint', c.hint));
      host.append(w);
    }
    const box = host.closest('.try'), rb = box && $('.reset', box);
    if (rb) rb.addEventListener('click', () => { resets.forEach(f => f()); fire(); });
    fire();
    return vals;
  }

  // Horizontal waterfall: sales at the top, each cost hanging from the running total, profit at the bottom.
  function waterfall(host, items, total) {
    let run = 0; const segs = [];
    for (const it of items) { const a = run, b = run + it.v; segs.push({ ...it, a: Math.min(a, b), b: Math.max(a, b) }); run = b; }
    const lo = Math.min(0, total, ...segs.map(s => s.a)), hi = Math.max(...segs.map(s => s.b), 1);
    const P = x => (x - lo) / (hi - lo) * 100;
    const row = (label, v, a, b, color, how, cls) => {
      const r = el('div', 'wf-row' + (cls ? ' ' + cls : '')); r.tabIndex = 0;
      const t = el('span', 'wf-t'), bar = el('i');
      bar.style.left = P(a) + '%'; bar.style.width = Math.max(0.4, P(b) - P(a)) + '%'; bar.style.background = color;
      t.append(bar);
      r.append(el('span', 'wf-l', label), t, el('span', 'wf-v', lakh(v)));
      r.setAttribute('aria-label', `${label}: ${lakh(v)}. ${how}`);
      hoverTip(r, label, () => [{ color, label: how, value: lakh(v) }]);
      return r;
    };
    const els = segs.map(s => row(s.label, s.v, s.a, s.b, s.v >= 0 ? 'var(--pos)' : 'var(--neg)', s.how));
    els.push(row('Profit a year', total, Math.min(0, total), Math.max(0, total), total >= 0 ? 'var(--pos)' : 'var(--neg)', 'sales minus every cost above', 'tot'));
    host.replaceChildren(...els);
  }

  // ---------- Lessons, course map, pager
  const lessons = $$('article.lesson');
  const counted = lessons.filter(a => a.dataset.n !== '0');
  const slugs = lessons.map(a => a.id);
  const PARTS = ['', 'Part 1 · The business', 'Part 2 · Where to farm', 'Part 3 · Money', 'Part 4 · Rules and your plan'];
  const title = a => (a.dataset.n === '0' ? 'Start here' : 'Lesson ' + a.dataset.n + ': ' + a.dataset.short);
  const done = new Set(store.get('done', []));
  const quiz = store.get('quiz', {});
  const nav = $('#map-nav');
  const lists = {};
  for (const a of lessons) {
    const p = a.dataset.part;
    if (!lists[p]) {
      const g = el('div', 'part');
      if (PARTS[p]) g.append(el('p', 'part-t', PARTS[p]));
      const ol = el('ol'); g.append(ol); nav.append(g); lists[p] = ol;
    }
    const li = el('li'), link = el('a');
    link.href = '#' + a.id; link.dataset.slug = a.id; link.dataset.min = a.dataset.min;
    const ms = el('span', 'ms'); ms.append(el('b', null, a.dataset.n));
    link.append(ms, el('span', 'mt', a.dataset.short), el('span', 'mm', a.dataset.min + ' min'));
    li.append(link); lists[p].append(li);
  }
  lessons.forEach((a, i) => {
    if (a.id === 'start') return;
    const pg = el('nav', 'pager'); pg.setAttribute('aria-label', 'Lesson navigation');
    const prev = lessons[i - 1], next = lessons[i + 1];
    if (prev) { const b = el('a', 'btn secondary'); b.href = '#' + prev.id; b.append(el('small', null, '← Back'), document.createTextNode(title(prev))); pg.append(b); }
    const b = el('a', 'btn primary');
    if (next) { b.href = '#' + next.id; b.append(el('small', null, 'Next →'), document.createTextNode(title(next))); }
    else { b.href = '#start'; b.append(el('small', null, 'Course finished'), document.createTextNode('Back to the start')); }
    b.addEventListener('click', () => markDone(a.id));
    pg.append(b); a.append(pg);
  });
  $$('#start-actions a').forEach(b => b.addEventListener('click', () => markDone('start')));

  function markDone(slug) {
    if (done.has(slug)) return;
    done.add(slug); store.set('done', [...done]); paintProgress();
  }
  function paintProgress() {
    const k = counted.filter(a => done.has(a.id)).length, n = counted.length;
    $('#pfill').style.width = (k / n * 100) + '%';
    $('#ptext').replaceChildren(document.createTextNode(k + ' of ' + n), el('span', 'pt-long', ' lessons done'));
    for (const l of $$('a', nav)) {
      const d = done.has(l.dataset.slug);
      l.classList.toggle('done', d);
      $('.mm', l).textContent = d ? '✓ done' : l.dataset.min + ' min';
    }
  }
  function paintContinue() {
    const last = store.get('last', null), btn = $('#continue-btn');
    const a = last && document.getElementById(last);
    if (a && a.classList.contains('lesson') && a.id !== 'start' && a.id !== 'three-businesses') {
      btn.hidden = false; btn.href = '#' + a.id; btn.textContent = 'Continue: ' + title(a);
    } else btn.hidden = true;
  }

  // ---------- Check-yourself questions
  const checkResets = [];
  for (const c of $$('.check')) {
    const id = c.dataset.id, ans = +c.dataset.answer, opts = $$('.opt', c), ex = $('.explain', c);
    const verdict = el('b'); ex.prepend(verdict);
    const answer = (i, save) => {
      if (c.classList.contains('answered')) return;
      c.classList.add('answered');
      opts.forEach((o, j) => { o.classList.toggle('right', j === ans); o.classList.toggle('wrong', j === i && j !== ans); o.setAttribute('aria-pressed', String(j === i)); });
      verdict.textContent = i === ans ? 'Right. ' : 'Not quite. The answer is ' + 'ABCD'[ans] + '. ';
      ex.hidden = false;
      if (save) { quiz[id] = i; store.set('quiz', quiz); }
      const art = c.closest('article.lesson');
      if ($$('.check', art).every(x => x.classList.contains('answered'))) markDone(art.id);
    };
    opts.forEach((o, i) => { o.dataset.l = 'ABCD'[i]; o.addEventListener('click', () => answer(i, true)); });
    checkResets.push(() => { c.classList.remove('answered'); opts.forEach(o => { o.classList.remove('right', 'wrong'); o.removeAttribute('aria-pressed'); }); verdict.textContent = ''; ex.hidden = true; });
    if (quiz[id] != null && quiz[id] < opts.length) answer(quiz[id], false);
  }

  // ---------- Checklists (rules, your plan)
  const todoResets = [];
  for (const list of $$('.todo')) {
    const key = 'todo:' + list.id, st = store.get(key, {}), boxes = $$('input[type=checkbox]', list), out = document.getElementById(list.dataset.count);
    const count = () => { if (out) out.textContent = boxes.filter(b => b.checked).length + ' of ' + boxes.length + ' done'; };
    boxes.forEach(b => { b.checked = !!st[b.id]; b.addEventListener('change', () => { st[b.id] = b.checked; store.set(key, st); count(); }); });
    count();
    todoResets.push(() => { boxes.forEach(b => { b.checked = false; st[b.id] = false; }); count(); });
  }

  // ---------- Start over (two taps, since the page can't show a confirm dialog)
  const rp = $('#reset-progress'); let armed = 0;
  rp.addEventListener('click', () => {
    if (!armed) { rp.textContent = 'Tap again to clear your ticks and answers'; armed = setTimeout(() => { armed = 0; rp.textContent = 'Start over'; }, 5000); return; }
    clearTimeout(armed); armed = 0;
    store.clear(); done.clear(); for (const k of Object.keys(quiz)) delete quiz[k];
    checkResets.forEach(f => f()); todoResets.forEach(f => f());
    paintProgress(); paintContinue(); rp.textContent = 'Cleared';
    setTimeout(() => { rp.textContent = 'Start over'; }, 2500);
  });

  // ================= Try-it widgets, built the first time each lesson opens =================
  const INIT = {};

  INIT['three-businesses'] = () => {
    const defs = [
      { id: 'c', name: 'Indoor-plant nursery', unit: '₹ per plant', lo: 40, hi: 150, note: 'leased land, own cuttings' },
      { id: 'h', name: 'Polyhouse capsicum', unit: '₹ per kg', lo: 40, hi: 300, note: 'leased land' },
      { id: 'j', name: 'Dragon fruit', unit: '₹ per kg', lo: 40, hi: 70, note: 'leased land, full yield from year 4' },
    ];
    const X_MAX = 320, pct = v => (Math.max(0, Math.min(X_MAX, v)) / X_MAX * 100) + '%';
    const wrap = el('div', 'rng');
    for (const d of defs) {
      const s = plan(d.id), cf = flows(s), be = cf.breakEvenPrice, op = cf.mature.op;
      const row = el('div', 'rng-row'); row.tabIndex = 0;
      row.setAttribute('aria-label', `${d.name}: market ₹${d.lo} to ₹${d.hi}, model uses ₹${s.price}, break-even ₹${Math.round(be)}, profit ${lakh(op)} a year`);
      const h = el('div', 'rng-h'); h.append(el('b', null, d.name), el('span', null, d.unit));
      const t = el('div', 'rng-t');
      for (const g of [0, 50, 100, 150, 200, 250, 300]) { const gl = el('i', 'gl' + (g === 0 ? ' z' : '')); gl.style.left = pct(g); t.append(gl); }
      const band = el('span', 'band'); band.style.left = pct(d.lo); band.style.width = (d.hi - d.lo) / X_MAX * 100 + '%';
      const bem = el('span', 'be'); bem.style.left = pct(be);
      const used = el('span', 'used'); used.style.left = pct(s.price);
      t.append(band, bem, used);
      row.append(h, t, el('p', 'rng-n', `Market ₹${d.lo}–${d.hi} · model uses ₹${s.price} · break-even ₹${Math.round(be)} · profit ${lakh(op)} a year (${d.note})`));
      hoverTip(row, d.name, () => [
        { color: 'var(--s1)', label: 'market range', value: `₹${d.lo}–${d.hi}` },
        { color: 'var(--ink)', label: 'price the model uses', value: '₹' + s.price },
        { color: 'var(--neg)', label: 'break-even price', value: '₹' + Math.round(be) },
        { label: 'profit a year', value: lakh(op) },
      ]);
      wrap.append(row);
    }
    const ax = el('div', 'rng-axis');
    for (const g of [0, 100, 200, 300]) { const sp = el('span', null, '₹' + g); sp.style.left = pct(g); ax.append(sp); }
    wrap.append(ax);
    $('#w-biz').replaceChildren(wrap);
  };

  INIT['one-plant'] = () => {
    const grid = $('#pots'), cells = [];
    for (let i = 0; i < 100; i++) { const c = el('i'); grid.append(c); cells.push(c); }
    controls($('#c-plant'), [
      { key: 'cost', id: 'op-cost', label: 'Cost to start one plant', min: 10, max: 80, step: 1, value: 30, fmt: v => '₹' + v, hint: '₹30 with own cuttings · ₹42 with bought plantlets' },
      { key: 'price', id: 'op-price', label: 'Wholesale price', min: 30, max: 150, step: 1, value: 75, fmt: v => '₹' + v },
      { key: 'loss', id: 'op-loss', label: 'Plants that die', min: 0, max: 40, step: 1, value: 10, fmt: v => v + '%' },
      { key: 'share', id: 'op-share', label: 'Sold at the full price', min: 30, max: 100, step: 1, value: 85, fmt: v => v + '%', hint: 'The rest are cleared at 40% of the price.' },
    ], v => {
      const share = v.share / 100, clearPrice = v.price * 0.4;
      const avg = v.price * (share + (1 - share) * 0.4);
      const perStart = (1 - v.loss / 100) * avg, left = perStart - v.cost;
      const dead = Math.round(v.loss), full = Math.round((100 - dead) * share), clear = 100 - dead - full;
      cells.forEach((c, i) => { c.className = i < full ? '' : i < full + clear ? 'clear' : 'dead'; });
      grid.setAttribute('aria-label', `Out of 100 plants started: ${full} sold at full price, ${clear} cleared at a discount, ${dead} died`);
      const key = $('#pots-key'); key.replaceChildren();
      const add = (cls, color, text) => { const s = el('span'), i = el('i', cls); if (color) i.style.background = color; s.append(i, text); key.append(s); };
      add('dot', 'var(--s1)', `Sold at ${rs(v.price)}: ${full}`);
      add('dot', 'var(--s4)', `Cleared at ${rs(clearPrice, clearPrice % 1 ? 1 : 0)}: ${clear}`);
      add('ring', null, `Died: ${dead}`);
      rows($('#r-plant'), [
        ['Average price per plant sold', rs(avg, 2)],
        ['Money in per plant started', rs(perStart, 2)],
        ['Cost to start it', '− ' + rs(v.cost, 2)],
        ['Left per plant started', rs(left, 2), 'sum'],
        ['Over 100,000 plants a year', lakh(left * 1e5), 'sum'],
      ]);
    });
  };

  INIT['scale'] = () => controls($('#c-scale'), [
    { key: 'area', id: 'sc-area', label: 'Shade-net area', min: 500, max: 4000, step: 100, value: 2000, fmt: v => int(v) + ' m²' },
    { key: 'cycle', id: 'sc-cycle', label: 'Months to saleable size', min: 3, max: 12, step: 0.5, value: 6, fmt: v => num(v) + ' months' },
    { key: 'density', id: 'sc-dens', label: 'Pots per m²', min: 15, max: 43, step: 1, value: 25, fmt: v => String(v) },
  ], v => {
    const pots = v.area * v.density, batches = 12 / v.cycle, started = pots * batches, sold = started * 0.9;
    const trips = Math.max(Math.ceil(sold / 320), 24);
    stats($('#s-scale'), [
      ['Plants sold a year', int(sold)],
      ['Plants to sell each day', int(sold / 365)],
      ['Sales a year', lakh(sold * 68.25)],
    ]);
    rows($('#r-scale'), [
      [`Pots at one time: ${int(v.area)} m² × ${v.density}`, int(pots)],
      [`Batches a year: 12 ÷ ${num(v.cycle)}`, num(batches, 2)],
      ['Plants started a year', int(started), 'sum'],
      ['Tata Ace trips a year at 320 pots each', `${int(trips)}, one every ${num(365 / trips)} days`],
      ['Shade net in acres (1 acre = 4,047 m²)', num(v.area / 4047, 2)],
    ]);
  });

  INIT['year-costs'] = () => controls($('#c-year'), [
    { key: 'cost', id: 'yc-cost', label: 'Cost to start one plant', min: 20, max: 60, step: 1, value: 30, fmt: v => '₹' + v, hint: '₹30 with own cuttings · ₹42 with bought plantlets' },
    { key: 'price', id: 'yc-price', label: 'Wholesale price', min: 40, max: 120, step: 1, value: 75, fmt: v => '₹' + v },
    { key: 'share', id: 'yc-share', label: 'Sold at the full price', min: 40, max: 100, step: 1, value: 85, fmt: v => v + '%' },
    { key: 'workers', id: 'yc-workers', label: 'Farm workers', min: 1, max: 5, step: 1, value: 2, fmt: v => String(v) },
    { key: 'sup', id: 'yc-sup', label: 'Head gardener, a month', min: 0, max: 30000, step: 1000, value: 15000, fmt: v => rs(v) },
  ], v => {
    const s = plan('c', { varCost: v.cost, price: v.price, fullPriceShare: v.share, workers: v.workers, supervisor: v.sup });
    const cf = flows(s), r = cf.mature, p = cf.prod;
    const dmg = s.damageBase + s.damagePer100 * s.distance / 100;
    waterfall($('#wf-year'), [
      { label: 'Sales', v: r.revenue, how: `${int(r.sold)} plants × ${rs(p.avgPrice, 2)}` },
      { label: 'Young plants, pots, mix', v: -r.inputCost, how: `${int(p.produced)} plants × ${rs(s.varCost)}` },
      { label: 'Transport + damage', v: -r.transport, how: `${int(r.trips)} trips × ${rs(tripCost(s.distance, s))} + ${num(dmg)}% of sales` },
      { label: 'Wages', v: -r.labour, how: `${s.workers} × ${s.workDays} days × ${rs(wageAt(s.distance, s))} + ${rs(s.supervisor)} × 12` },
      { label: 'Selling costs', v: -r.marketing, how: `${s.marketingPct}% of sales` },
      { label: 'Power, phone, insurance', v: -s.otherFixed, how: 'licence included' },
      { label: 'Maintenance', v: -r.maint, how: `${s.maintPct}% of the ${lakh(cf.setup)} setup` },
      { label: 'Your car', v: -r.owner, how: `${s.visitsPerMonth * 12} visits × ${2 * s.distance} km × ${rs(s.carPerKm)}` },
      { label: 'Lease rent', v: -r.lease, how: `${s.landAcres} acre × ${rs(s.leaseRent)}` },
    ], r.op);
    const be = cf.breakEvenPrice;
    stats($('#s-year'), [
      ['Profit a year', lakh(r.op)],
      ['Break-even price', be ? rs(be) + ' a plant' : '–'],
      ['Profit as a share of sales', r.revenue > 0 ? Math.round(r.op / r.revenue * 100) + '%' : '–'],
    ]);
  });

  INIT['land-curve'] = () => {
    const A = plan('a');
    const GROUP = { 1: ['South (NH44)', 'North', 'East'], 1.7: ['West'], 1.25: ['South-east (Future City)'], 0.85: ['Sagar road'] };
    const host = $('#ch-land');
    let st = null;
    const draw = () => {
      if (!st) return;
      const s = { ...A, dirMult: st.dir }, inDir = p => p.fit !== false && GROUP[st.dir].includes(p.corridor);
      const pts = LAND_POINTS.map(p => ({ x: p.km, y: p.typ, label: p.place, on: inDir(p),
        sub: `${p.corridor}, ${p.km} km · ${p.kind}${p.fit === false ? ' (not fitted)' : ''}`,
        color: p.fit === false ? 'var(--s2)' : inDir(p) ? 'var(--s1)' : 'var(--axis)' })).sort((a, b) => a.on - b.on);
      scatterChart(host, {
        points: pts, curve: x => landPriceLakh(x, s), xMax: 150, yTicks: [10, 20, 50, 100, 200, 500, 1000],
        yFmt: v => v >= 100 ? '₹' + (v / 100) + ' Cr' : '₹' + v + ' L', yTip: v => money(v * 1e5) + ' an acre',
        xTitle: 'Road distance from Hyderabad (km)', yTitle: 'Asking price per acre (log scale)',
        label: 'Farmland asking prices by distance from Hyderabad, with the fitted curve',
        marker: { x: st.d, y: landPriceLakh(st.d, s), label: st.d + ' km' },
      });
    };
    controls($('#c-land'), [
      { key: 'd', id: 'lc-d', label: 'Distance from Hyderabad', min: 10, max: 150, step: 1, value: 75, fmt: v => v + ' km' },
      { key: 'dir', id: 'lc-dir', label: 'Direction', options: DIRS, value: 1 },
    ], v => {
      st = { d: v.d, dir: v.dir };
      const fitted = LAND_POINTS.filter(p => p.fit !== false), nIn = fitted.filter(p => GROUP[v.dir].includes(p.corridor)).length;
      const key = $('#land-key'); key.replaceChildren();
      const add = (cls, color, text) => { const s = el('span'), i = el('i', cls); i.style.background = color; s.append(i, text); key.append(s); };
      add('dot', 'var(--s1)', `This direction (${nIn})`);
      add('dot', 'var(--axis)', `Other directions (${fitted.length - nIn})`);
      add('dot', 'var(--s2)', `Left out of the fit (${LAND_POINTS.length - fitted.length})`);
      add('line', 'var(--ink)', 'Fitted curve' + (v.dir !== 1 ? ' × ' + v.dir : ''));
      const e = Math.exp(-v.d / A.curveLambda), prem = (A.curveP0 - A.curvePf) * e, onCurve = A.curvePf + prem;
      rows($('#r-land'), [
        [`e^(−${v.d} ÷ ${A.curveLambda})`, num(e, 4)],
        [`City premium left: ₹${A.curveP0 - A.curvePf} lakh × ${num(e, 4)}`, '₹' + num(prem) + ' lakh'],
        ['Plus the far-away price', '+ ₹' + A.curvePf + ' lakh'],
        v.dir !== 1 ? [`On the curve, then × ${v.dir} for this direction`, '₹' + num(onCurve) + ' lakh × ' + v.dir] : null,
        [`Asking price per acre at ${v.d} km`, '₹' + num(onCurve * v.dir) + ' lakh', 'sum'],
      ]);
      draw();
    });
    responsive(host, draw);
    fillTable($('#t-land'), ['Place', 'District', 'Direction', 'km', 'Typical', 'Range', 'Type', 'Source'],
      [...LAND_POINTS].sort((a, b) => a.km - b.km).map(p => [p.place, p.district, p.corridor, String(p.km), money(p.typ * 1e5),
        p.lo === p.hi ? '–' : money(p.lo * 1e5) + ' – ' + money(p.hi * 1e5), p.kind + (p.fit === false ? ' (not fitted)' : ''), { href: p.url, text: 'open' }]), [3, 4]);
  };

  INIT['owning-land'] = () => {
    const A = plan('a');
    controls($('#c-own'), [
      { key: 'd', id: 'ow-d', label: 'Distance from Hyderabad', min: 20, max: 150, step: 1, value: 75, fmt: v => v + ' km' },
      { key: 'dir', id: 'ow-dir', label: 'Direction', options: DIRS, value: 1 },
      { key: 'i', id: 'ow-i', label: 'Cost of money', min: 4, max: 16, step: 0.5, value: 9, fmt: v => num(v) + '% a year', hint: 'Fixed deposit about 6–6.5%; personal loan 13–16%.' },
      { key: 'g', id: 'ow-g', label: 'Expected land price rise', min: 0, max: 10, step: 0.5, value: 0, fmt: v => num(v) + '% a year' },
    ], v => {
      const s = { ...A, distance: v.d, dirMult: v.dir, costOfMoney: v.i, landGrowth: v.g };
      const ask = landPriceLakh(v.d, s) * 1e5, after = ask * (1 - s.askGap / 100), duty = after * (1 + s.regPct / 100);
      const all = landBuyCost(v.d, s), yearly = all * Math.max(0, v.i - v.g) / 100, lease = s.leaseRent * s.landAcres;
      rows($('#r-own'), [
        ['Asking price for 1 acre', lakh(ask)],
        ['After 10% negotiated off', lakh(after)],
        ['Plus 9% duties and broker', lakh(duty)],
        ['Plus ₹30,000 legal checks: all-in price', lakh(all), 'sum'],
        [`Yearly cost of owning: × (${num(v.i)}% − ${num(v.g)}%)`, lakh(yearly), 'sum'],
        ['Lease rent for 1 acre instead', rs(lease) + ' a year'],
      ]);
      hbars($('#b-own'), [
        { label: 'Owning (cost of the money)', value: yearly, color: 'var(--s2)' },
        { label: 'Leasing (rent)', value: lease, color: 'var(--s1)' },
      ], x => lakh(x, 2) + ' a year');
      $('#n-own').textContent = yearly > lease * 1.5 ? `Owning costs about ${Math.round(yearly / lease)} times as much per year as leasing.` : 'At these numbers, owning costs about the same per year as leasing or less.';
    });
  };

  INIT['distance-costs'] = () => controls($('#c-km'), [
    { key: 'mode', id: 'km-truck', label: 'Truck', options: TRUCKS, value: 'ace' },
    { key: 'visits', id: 'km-visits', label: 'Your farm visits', min: 0, max: 12, step: 1, value: 4, fmt: v => v + ' a month' },
    { key: 'hour', id: 'km-hour', label: 'Value of your time', min: 0, max: 1000, step: 50, value: 400, fmt: v => rs(v) + ' an hour' },
    { key: 'd', id: 'km-d', label: 'Distance for one trip’s cost', min: 10, max: 200, step: 5, value: 75, fmt: v => v + ' km' },
  ], v => {
    const s = plan('a', { ...truck(v.mode), visitsPerMonth: v.visits, ownerHourValue: v.hour });
    const p = production(s), cf = closedForm(s, p);
    const drives = 2 * s.visitsPerMonth * 12;
    const parts = [
      { label: 'Truck trips', value: p.trips * s.ratePerKm },
      { label: 'Plant damage', value: p.revenue * s.damagePer100 / 100 / 100 },
      { label: `Your visits (${drives} drives a year)`, value: drives * (s.carPerKm + s.ownerHourValue / s.avgSpeed) },
      { label: 'Wages (lower farther out)', value: s.workers * s.workDays * (s.wageFar - s.wageNear) / 120 },
    ];
    stats($('#s-km'), [
      ['M: one more km, a year', rs(cf.M)],
      ['Truck trips a year', int(p.trips)],
      ['Trucks’ share of M', cf.M > 0 ? Math.round(parts[0].value / cf.M * 100) + '%' : '–'],
    ]);
    hbars($('#b-km'), parts.map(x => ({ label: x.label, value: Math.abs(x.value), delta: x.value, color: x.value >= 0 ? 'var(--s1)' : 'var(--muted)' })), (x, it) => (it.delta < 0 ? '− ' : '') + rs(x) + ' per km');
    const fare = Math.max(s.minFare, s.ratePerKm * v.d);
    rows($('#r-km'), [
      [s.minFare > 0 ? `Fare at ${v.d} km: higher of ${rs(s.minFare)} and ${rs(s.ratePerKm)} × ${v.d}` : `Running cost at ${v.d} km: ${rs(s.ratePerKm)} × ${v.d}`, rs(fare)],
      [s.helper > 0 ? 'Toll + loader' : 'Toll', rs(s.toll + s.helper)],
      [`One trip at ${v.d} km`, rs(tripCost(v.d, s)), 'sum'],
    ]);
  });

  INIT['equation'] = () => {
    const SER = [
      { key: 'total', name: 'Total', color: 'var(--ink)', width: 2.5 },
      { key: 'transport', name: 'Transport + damage', color: 'var(--s1)' },
      { key: 'land', name: 'Land (yearly cost of the money)', color: 'var(--s2)' },
      { key: 'owner', name: 'Your visits (car + time)', color: 'var(--s3)' },
      { key: 'labour', name: 'Wages', color: 'var(--s4)' },
    ];
    const lg = $('#lg-eq');
    for (const s of SER) { const sp = el('span'), i = el('i'); i.style.background = s.color; if (s.width) i.style.height = '4px'; sp.append(i, s.name); lg.append(sp); }
    const host = $('#ch-eq');
    let st = null;
    const draw = () => {
      if (!st) return;
      lineChart(host, {
        x: st.opt.curve.map(c => c.d), series: SER.map(s => ({ name: s.name, color: s.color, width: s.width, values: st.opt.curve.map(c => c[s.key]) })),
        label: 'Yearly cost of land, transport, visits and wages by distance, buying 1 acre for a nursery',
        xFmt: (v, tip) => tip ? v + ' km from Hyderabad' : v + ' km', yFmt: fmt.lakhAxis, yTip: money,
        xTitle: 'Road distance from Hyderabad (km)', yTitle: 'Cost per year',
        dot: { x: st.opt.best.d, y: st.opt.best.total, label: 'Lowest: ' + st.opt.best.d + ' km' },
      });
    };
    controls($('#c-eq'), [
      { key: 'mode', id: 'eq-truck', label: 'Truck', options: TRUCKS, value: 'ace' },
      { key: 'dir', id: 'eq-dir', label: 'Direction', options: DIRS, value: 1 },
      { key: 'i', id: 'eq-i', label: 'Cost of money', min: 4, max: 16, step: 0.5, value: 9, fmt: v => num(v) + '% a year' },
      { key: 'g', id: 'eq-g', label: 'Expected land price rise', min: 0, max: 8, step: 0.5, value: 0, fmt: v => num(v) + '% a year' },
      { key: 'visits', id: 'eq-visits', label: 'Your farm visits', min: 0, max: 12, step: 1, value: 4, fmt: v => v + ' a month' },
    ], v => {
      const s = plan('a', { ...truck(v.mode), dirMult: v.dir, costOfMoney: v.i, landGrowth: v.g, visitsPerMonth: v.visits });
      const p = production(s), opt = optimiseDistance(s, p, 15, 200), cf = closedForm(s, p);
      st = { opt };
      const flat = opt.curve.filter(c => c.total - opt.best.total <= 1e5).map(c => c.d);
      const lm = s.curveLambda * cf.M, arg = lm > 0 ? cf.K / lm : 0, ok = cf.dStar > 0 && isFinite(cf.dStar);
      stats($('#s-eq'), [
        ['Formula d*', ok ? Math.round(cf.dStar) + ' km' : 'closest', 'λ × ln(K ÷ λM)'],
        ['Km-by-km lowest', opt.best.d + ' km', 'includes the minimum fare'],
        ['Within ₹1 lakh a year of it', flat[0] + '–' + flat[flat.length - 1] + ' km'],
      ]);
      rows($('#r-eq'), [
        [`K = (${num(v.i)}% − ${num(v.g)}%) × 1 acre × ₹892 L${v.dir !== 1 ? ' × ' + v.dir : ''} × 0.90 × 1.09`, lakh(cf.K)],
        [`M = ${int(p.trips)} trips × ${rs(s.ratePerKm)} + damage + visits + wages`, rs(cf.M)],
        [`λ × M = ${s.curveLambda} × ${rs(cf.M)}`, lakh(lm, 2)],
        ['K ÷ (λ × M)', num(arg)],
        ok ? [`d* = ${s.curveLambda} × ln(${num(arg)}) = ${s.curveLambda} × ${num(Math.log(arg), 2)}`, num(cf.dStar) + ' km', 'sum']
           : ['K ÷ (λ × M) is 1 or less, so being closer always costs less', '–', 'sum'],
        [`Lowest yearly cost, at ${opt.best.d} km`, lakh(opt.best.total)],
      ]);
      fillTable($('#t-eq'), ['Distance', 'Total', 'Transport + damage', 'Land', 'Your visits', 'Wages'],
        opt.curve.filter(c => c.d % 10 === 0 || c.d === opt.best.d).map(c => ({ cells: [c.d + ' km', money(c.total), money(c.transport), money(c.land), money(c.owner), money(c.labour)], cls: c.d === opt.best.d ? 'hl' : '' })), [1, 2, 3, 4, 5]);
      draw();
    });
    responsive(host, draw);
  };

  INIT['startup-money'] = () => controls($('#c-start'), [
    { key: 'area', id: 'sm-area', label: 'Shade-net area', min: 500, max: 4000, step: 100, value: 2000, fmt: v => int(v) + ' m²' },
    { key: 'cost', id: 'sm-cost', label: 'Young plants', options: [{ v: 30, t: 'Root own cuttings (₹30 a plant)' }, { v: 42, t: 'Buy plantlets (₹42 a plant)' }], value: 30 },
    { key: 'land', id: 'sm-land', label: 'Land', options: [{ v: 'lease', t: 'Lease, 40 km out' }, { v: 'buy', t: 'Buy at 75 km' }], value: 'lease' },
  ], v => {
    const acres = Math.max(0.5, Math.ceil(v.area / 1000) * 0.5), workers = Math.max(1, Math.round(v.area / 1000));
    const s = plan('c', { growArea: v.area, landAcres: acres, workers, varCost: v.cost, landMode: v.land, distance: v.land === 'buy' ? 75 : 40 });
    const cf = flows(s);
    const firstBatch = cf.prod.inputCost * (s.cycleMonths / 12) * s.ramp[0];
    const acreTxt = num(acres) + (acres > 1 ? ' acres' : ' acre');
    stats($('#s-start'), [
      ['Money at start', lakh(cf.upfront)],
      ['Land and staff', `${acreTxt} · ${workers} worker${workers > 1 ? 's' : ''}`, '+ a head gardener'],
      ['Subsidy that may come later', 'up to ' + lakh(cf.subsidy), 'if sanctioned before you build'],
    ]);
    rows($('#r-start'), [
      ...cf.items.map(it => [it.label, lakh(it.amount)]),
      ['Contingency, ' + s.contingencyPct + '%', lakh(cf.contingency)],
      ['Setup', lakh(cf.setup + cf.contingency), 'sum'],
      ['Working money: first batch of plants', lakh(firstBatch)],
      ['Working money: 3 months of wages and fixed costs', lakh(cf.workingCapital - firstBatch)],
      cf.landBuy > 0 ? [`Land: ${acreTxt} at 75 km, all-in`, lakh(cf.landBuy)] : null,
      ['Money at start', lakh(cf.upfront), 'sum'],
    ]);
  });

  INIT['ten-years'] = () => {
    const host = $('#ch-ten');
    let st = null;
    const draw = () => {
      if (!st) return;
      cashChart(host, {
        labels: st.cf.rows.map(r => r.y === 0 ? 'Start' : 'Y' + r.y), bars: st.cf.rows.map(r => r.project), line: st.cf.rows.map(r => r.cumProject),
        barName: 'Cash this year', lineName: 'Running total', yFmt: fmt.lakhAxis, yTip: money,
        label: 'Cash each year and running total over ten years: ' + PLANS[st.id].label,
      });
    };
    controls($('#c-ten'), [
      { key: 'id', id: 'ten-plan', label: 'Plan', options: Object.entries(PLANS).map(([id, p]) => ({ v: id, t: p.label })), value: 'f' },
      { key: 'sub', id: 'ten-sub', label: 'MIDH subsidy', options: [{ v: 'on', t: 'Count it (if sanctioned)' }, { v: 'off', t: 'Leave it out' }], value: 'on' },
    ], v => {
      const cf = flows(plan(v.id, { subsidyOn: v.sub === 'on' }));
      st = { id: v.id, cf };
      stats($('#s-ten'), [
        ['Money at start', lakh(cf.upfront)],
        ['Profit a year at full output', lakh(cf.mature.op)],
        ['Payback', cf.payback ? num(cf.payback) + ' years' : 'not within 10 years'],
        ['Running total after 10 years', lakh(cf.rows[10].cumProject)],
      ]);
      $('#ten-calc').href = 'calculator.html#plan-' + v.id;
      fillTable($('#t-ten'), ['Year', 'Sales', 'Running costs', 'Subsidy', 'Net renewal', 'Cash this year', 'Running total'],
        cf.rows.map(r => [r.y === 0 ? 'Start' : 'Year ' + r.y, money(r.revenue), money(r.opex), money(r.subsidy), money(r.replace), money(r.project), money(r.cumProject)]), [1, 2, 3, 4, 5, 6]);
      draw();
    });
    responsive(host, draw);
    const body = $('#plans-body');
    for (const [id, p] of Object.entries(PLANS)) {
      const cf = flows(plan(id)), op = cf.mature.op;
      const tr = el('tr'); if (id === 'c' || id === 'f') tr.className = 'hl';
      const td0 = el('td'), a = el('a', 'plan', id.toUpperCase());
      a.href = 'calculator.html#plan-' + id; a.title = 'Open plan ' + id.toUpperCase() + ' in the calculator';
      td0.append(a, document.createTextNode(p.label.replace(/^[A-Z] · /, '')));
      const td = (t, cls) => el('td', 'r' + (cls ? ' ' + cls : ''), t);
      tr.append(td0, td(lakh(cf.upfront)), td(lakh(op), op < 0 ? 'neg' : ''), td(cf.payback ? num(cf.payback) + ' yrs' : op > 0 ? '10+ yrs' : 'never'));
      body.append(tr);
    }
  };

  INIT['risks'] = () => {
    const C = plan('c'), base = flows(C).mature.op;
    const tests = [
      ['Buy plantlets (₹42) instead of rooting cuttings (₹30)', { varCost: 42 }],
      ['Wholesale price ₹90 instead of ₹75', { price: 90 }],
      ['Only 60% sell at full price, not 85%', { fullPriceShare: 60 }],
      ['Wholesale price ₹65 instead of ₹75', { price: 65 }],
      ['20% of plants lost, not 10%', { lossPct: 20 }],
      ['Plants take 8 months to sell, not 6', { cycleMonths: 8 }],
      ['Hire a 14 ft truck instead of a Tata Ace', truck('truck14')],
      ['Head gardener paid ₹25,000, not ₹15,000', { supervisor: 25000 }],
      ['Wages ₹100 a day higher', { wageNear: GLOBAL.wageNear + 100, wageFar: GLOBAL.wageFar + 100 }],
    ];
    const items = tests.map(([label, o]) => {
      const delta = flows({ ...C, ...o }).mature.op - base;
      return { label, value: Math.abs(delta), delta, color: delta >= 0 ? 'var(--pos)' : 'var(--neg)' };
    }).sort((a, b) => b.value - a.value);
    hbars($('#b-sens'), items, (v, it) => (it.delta >= 0 ? '+' : '−') + '₹' + (v / 1e5).toFixed(1) + ' lakh');
    controls($('#c-risk'), [
      { key: 'price', id: 'rk-price', label: 'Wholesale price', min: 40, max: 120, step: 1, value: 75, fmt: v => '₹' + v },
      { key: 'share', id: 'rk-share', label: 'Sold at the full price', min: 30, max: 100, step: 1, value: 85, fmt: v => v + '%' },
      { key: 'loss', id: 'rk-loss', label: 'Plants lost', min: 0, max: 40, step: 1, value: 10, fmt: v => v + '%' },
      { key: 'cost', id: 'rk-cost', label: 'Cost to start one plant', min: 20, max: 60, step: 1, value: 30, fmt: v => '₹' + v },
      { key: 'cycle', id: 'rk-cycle', label: 'Months to saleable size', min: 3, max: 12, step: 0.5, value: 6, fmt: v => num(v) + ' months' },
    ], v => {
      const cf = flows({ ...C, price: v.price, fullPriceShare: v.share, lossPct: v.loss, varCost: v.cost, cycleMonths: v.cycle });
      const op = cf.mature.op, d = op - base;
      stats($('#s-risk'), [
        ['Profit a year', lakh(op)],
        ['Change from ₹13.8 lakh', (d >= 0 ? '+' : '−') + lakh(Math.abs(d))],
        ['Break-even price', cf.breakEvenPrice ? rs(cf.breakEvenPrice) + ' a plant' : '–'],
      ]);
      $('#v-risk').replaceChildren(op > 0 ? chip('good', 'Still profitable') : chip('crit', 'Loses money'),
        el('span', null, op > 0 ? `Money back in ${cf.payback ? num(cf.payback) + ' years' : 'more than 10 years'} on ${lakh(cf.upfront)} put in.` : 'At these numbers, costs are higher than sales.'));
    });
  };

  INIT['loan'] = () => {
    const F = flows(plan('f')), C = flows(plan('c'));
    const need = { f: F.upfront, c: C.upfront }, year2 = { f: F.rows[2].project, c: C.rows[2].project };
    controls($('#c-loan'), [
      { key: 'need', id: 'ln-need', label: 'Money the farm needs', options: [{ v: 'f', t: `Plan F, 1,000 m² (${lakh(need.f)})` }, { v: 'c', t: `Plan C, 2,000 m² (${lakh(need.c)})` }], value: 'f' },
      { key: 'pay', id: 'ln-pay', label: 'Take-home pay, a month', min: 30000, max: 200000, step: 1000, value: 70000, fmt: v => rs(v) },
      { key: 'exp', id: 'ln-exp', label: 'Living costs, a month', min: 10000, max: 100000, step: 1000, value: 30000, fmt: v => rs(v) },
      { key: 'saved', id: 'ln-saved', label: 'Already saved for the farm', min: 0, max: 1500000, step: 10000, value: 300000, fmt: v => lakh(v) },
      { key: 'months', id: 'ln-months', label: 'Months you save first', min: 0, max: 24, step: 1, value: 12, fmt: v => v + (v === 1 ? ' month' : ' months') },
      { key: 'rate', id: 'ln-rate', label: 'Interest', min: 8, max: 18, step: 0.25, value: 12.5, fmt: v => num(v, 2) + '% a year' },
      { key: 'years', id: 'ln-years', label: 'Loan period', min: 1, max: 7, step: 1, value: 5, fmt: v => v + (v === 1 ? ' year' : ' years') },
    ], v => {
      const free = v.pay - v.exp, own = v.saved + Math.max(0, free) * v.months;
      const loan = Math.max(0, need[v.need] - own);
      const r = v.rate / 1200, n = v.years * 12, factor = r === 0 ? n : (1 - Math.pow(1 + r, -n)) / r;
      const emi = loan / factor, capEmi = v.pay * 0.5, left = free - emi, interest = emi * n - loan;
      const over = emi > capEmi, tight = left < 10000;
      $('#v-loan').replaceChildren(
        loan === 0 ? chip('good', 'No loan needed') : over ? chip('crit', 'Over the bank’s limit') : tight ? chip('warn', 'Tight') : chip('good', 'Comfortable'),
        el('span', null, loan === 0 ? 'Your own money covers the start.' : `The EMI is ${Math.round(emi / v.pay * 100)}% of your pay, and ${rs(left)} a month stays free. ` +
          (year2[v.need] >= emi * 12 ? `From year 2 the farm’s cash (${lakh(year2[v.need])}) covers a year of EMIs (${lakh(emi * 12)}).` : `In year 2 the farm’s cash (${lakh(year2[v.need])}) won’t yet cover a year of EMIs (${lakh(emi * 12)}).`)));
      stats($('#s-loan'), [
        ['Loan', lakh(loan)],
        ['EMI a month', rs(emi)],
        ['Free a month after the EMI', rs(left)],
        ['Most the bank lends', lakh(capEmi * factor), 'EMI up to ' + rs(capEmi)],
      ]);
      rows($('#r-loan'), [
        ['The farm needs', lakh(need[v.need])],
        [`Your money: ${lakh(v.saved)} + ${v.months} months × ${rs(Math.max(0, free))}`, '− ' + lakh(Math.min(own, need[v.need]))],
        ['Loan', lakh(loan), 'sum'],
        [`Each ₹1,000 of EMI carries, at ${num(v.rate, 2)}% for ${v.years} year${v.years > 1 ? 's' : ''}`, rs(factor * 1000)],
        [`EMI: ${lakh(loan)} ÷ ${num(factor, 2)}`, rs(emi), 'sum'],
        ['Interest paid over the loan', lakh(interest)],
      ]);
    });
  };

  // ---------- Router: one lesson at a time, addressed by #slug
  const menuBtn = $('#menu-btn');
  menuBtn.addEventListener('click', () => {
    const open = !document.body.classList.contains('map-open');
    document.body.classList.toggle('map-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  const built = new Set();
  function show(slug, focus) {
    if (!slugs.includes(slug)) slug = 'start';
    for (const a of lessons) a.hidden = a.id !== slug;
    for (const l of $$('a', nav)) { if (l.dataset.slug === slug) l.setAttribute('aria-current', 'page'); else l.removeAttribute('aria-current'); }
    if (!built.has(slug)) {
      built.add(slug);
      if (INIT[slug]) { try { INIT[slug](); } catch (e) { console.error('Lesson ' + slug + ':', e); } }
    }
    if (slug !== 'start') store.set('last', slug);
    document.body.classList.remove('map-open'); menuBtn.setAttribute('aria-expanded', 'false');
    hideTip();
    window.scrollTo(0, 0);
    if (focus) { const h = $('h1', document.getElementById(slug)); if (h) h.focus({ preventScroll: true }); }
    paintContinue();
  }
  window.addEventListener('hashchange', () => show(location.hash.slice(1), true));
  paintProgress();
  show(location.hash.slice(1), false);
})();
