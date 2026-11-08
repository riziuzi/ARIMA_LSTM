// ===================== Calculator UI =====================
const $ = (q, r = document) => r.querySelector(q);
const STORE_KEY = 'exotic-plant-calc';

function defaultsFor(model, keep) {
  const base = { ...GLOBAL, ...PRESETS[model].values, model };
  if (keep) for (const k of KEEP_ON_SWITCH) if (k in keep) base[k] = keep[k];
  const v = VEHICLES[base.vehicleMode];
  if (v) base.unitsPerTrip = v.perTrip[model === 'nursery' ? 'plant' : 'kg'];
  return base;
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const o = JSON.parse(raw);
    if (!o || o._v !== DATA_VERSION || !PRESETS[o.model]) return null;
    return { ...defaultsFor(o.model), ...o };
  } catch (e) { return null; }
}
function saveState() { try { localStorage.setItem(STORE_KEY, JSON.stringify({ ...S, _v: DATA_VERSION })); } catch (e) { /* storage blocked: fine */ } }

let S = loadState() || defaultsFor('nursery');

const val = (x) => typeof x === 'function' ? x(S) : x;
const visible = f => (!f.only || f.only.includes(S.model)) && (!f.mode || f.mode === S.landMode) && (!f.when || f.when(S));

function srcLink(key) {
  const s = SRC[key];
  const a = document.createElement('a');
  a.className = 'src';
  a.href = s ? s.u : '#';
  a.textContent = s ? s.t : key;
  if (s && !s.u.startsWith('#')) { a.target = '_blank'; a.rel = 'noopener'; }
  return a;
}

function fieldRow(f) {
  const row = document.createElement('div');
  const id = 'f-' + f.k;
  if (f.type === 'check') {
    row.className = 'field check';
    const input = document.createElement('input'); input.type = 'checkbox'; input.id = id; input.checked = !!S[f.k];
    input.addEventListener('change', () => { S[f.k] = input.checked; if (f.k === 'loanAuto') renderFields(); afterChange(); });
    const lab = document.createElement('label'); lab.htmlFor = id; lab.textContent = val(f.label);
    row.append(input, lab);
  } else if (f.type === 'select') {
    row.className = 'field';
    const lab = document.createElement('label'); lab.htmlFor = id; lab.textContent = val(f.label);
    const sel = document.createElement('select'); sel.id = id;
    for (const o of f.options) { const op = document.createElement('option'); op.value = String(o.v); op.textContent = o.t; sel.appendChild(op); }
    sel.value = String(S[f.k]);
    sel.addEventListener('change', () => {
      const raw = sel.value; S[f.k] = isFinite(parseFloat(raw)) && String(parseFloat(raw)) === raw ? parseFloat(raw) : raw;
      if (f.k === 'vehicleMode') { const v = VEHICLES[S.vehicleMode]; Object.assign(S, v.values); S.unitsPerTrip = v.perTrip[S.model === 'nursery' ? 'plant' : 'kg']; }
      renderFields(); afterChange();
    });
    row.append(lab, sel);
  } else {
    row.className = 'field';
    const lab = document.createElement('label'); lab.htmlFor = id; lab.textContent = val(f.label);
    const u = val(f.unit);
    if (u) { const span = document.createElement('span'); span.className = 'unit'; span.textContent = '(' + u + ')'; lab.append(' ', span); }
    const ctl = document.createElement('div'); ctl.className = 'ctl';
    const input = document.createElement('input');
    Object.assign(input, { type: 'number', id, min: f.min, max: f.max, step: f.step, value: S[f.k] });
    input.inputMode = 'decimal';
    ctl.appendChild(input);
    let range = null;
    if (f.slider) {
      range = document.createElement('input');
      Object.assign(range, { type: 'range', id: id + '-r', min: f.min, max: f.max, step: f.step, value: S[f.k] });
      range.setAttribute('aria-label', val(f.label) + ' slider');
      ctl.appendChild(range);
    }
    input.addEventListener('input', () => {
      const v = parseFloat(input.value);
      if (!isFinite(v)) return;
      if (range) range.value = v;
      S[f.k] = v; afterChange();
    });
    if (range) range.addEventListener('input', () => { input.value = range.value; S[f.k] = parseFloat(range.value); afterChange(); });
    row.append(lab, ctl);
  }
  const hint = val(f.hint), srcs = [].concat(val(f.src) || []);
  if (hint || srcs.length) {
    const p = document.createElement('p'); p.className = 'hint';
    if (hint) p.append(hint + ' ');
    for (const key of srcs) { p.appendChild(srcLink(key)); p.append(' '); }
    row.appendChild(p);
  }
  return row;
}

function renderFields() {
  for (const sec of ['where', 'setup', 'running', 'loan', 'support']) {
    const host = $('#in-' + sec);
    host.replaceChildren();
    let group = null;
    for (const f of FIELDS) {
      if (f.sec !== sec || !visible(f)) continue;
      if (f.group && f.group !== group) {
        group = f.group;
        const h = document.createElement('h3'); h.className = 'grp'; h.textContent = group; host.appendChild(h);
      }
      host.appendChild(fieldRow(f));
    }
  }
  document.querySelectorAll('input[name=model]').forEach(r => { r.checked = r.value === S.model; });
  document.querySelectorAll('input[name=landMode]').forEach(r => { r.checked = r.value === S.landMode; });
}

// ---------- output helpers ----------
function kv(host, pairs) {
  host.replaceChildren();
  for (const [k, v, chip] of pairs) {
    const d = document.createElement('div');
    const s = document.createElement('span'); s.textContent = k;
    const b = document.createElement('b'); b.textContent = v;
    d.append(s, b);
    if (chip) { const c = document.createElement('span'); c.className = 'chip ' + chip[0]; c.textContent = chip[1]; c.style.justifySelf = 'start'; d.appendChild(c); }
    host.appendChild(d);
  }
}
function setTile(id, value, sub, chip) {
  $('#' + id).textContent = value;
  const s = $('#' + id + '-s');
  s.replaceChildren();
  if (chip) { const c = document.createElement('span'); c.className = 'chip ' + chip[0]; c.textContent = chip[1]; s.append(c, ' '); }
  if (sub) s.append(sub);
}
function para(host, parts) {
  const p = document.createElement('p');
  for (const part of parts) {
    if (typeof part === 'string') p.append(part);
    else if (part.src) p.appendChild(srcLink(part.src));
    else if (part.b) { const b = document.createElement('strong'); b.textContent = part.b; p.appendChild(b); }
    else if (part.chip) { const c = document.createElement('span'); c.className = 'chip ' + part.chip[0]; c.textContent = part.chip[1]; p.appendChild(c); }
  }
  host.appendChild(p);
  return p;
}
const unitName = () => PRESETS[S.model].unit;
const money = v => fmt.money(v);

// ---------- compute ----------
let charts = {};
function compute() {
  const W = { ...S, ramp: [S.ramp1 / 100, S.ramp2 / 100, S.ramp3 / 100, 1] };
  const base = cashflow({ ...W, loanAmount: 0 });
  const loanAmt = S.loanAuto ? Math.max(0, base.upfront - S.savings) : S.loanAmount;
  const st = { ...W, loanAmount: loanAmt };
  const cf = cashflow(st);
  const prod = production(st);
  const opt = optimiseDistance(st, prod, 15, 250);
  const cfm = closedForm(st, prod);
  const lc = loanCapacity(st, cf.emi);
  return { st, cf, prod, opt, cfm, lc };
}

function update() {
  const { st, cf, prod, opt, cfm, lc } = compute();
  const U = unitName();
  const m5 = cf.mature;

  // ---- summary tiles
  const parts = [];
  if (cf.landBuy > 0) parts.push('land ' + money(cf.landBuy));
  parts.push('setup ' + money(cf.setup + cf.contingency), 'working money ' + money(cf.workingCapital));
  setTile('t-upfront', money(cf.upfront), parts.join(' · ') + (cf.subsidy > 0 ? `. Subsidy may return ${money(cf.subsidy)} later.` : '.'));
  setTile('t-profit', money(m5.op), `Year 5, before loan payments. Sales ${money(m5.revenue)}.`, m5.op > 0 ? ['good', 'Profit'] : ['crit', 'Loss']);
  const pb = cf.payback;
  setTile('t-payback', pb == null ? 'Over 10 years' : pb.toFixed(1) + ' years', S.landMode === 'buy' ? 'Counts the land price as money spent.' : 'Lease rent is paid every year.',
    pb == null ? ['crit', 'Too slow'] : pb <= 5 ? ['good', 'Good'] : pb <= 8 ? ['warn', 'Slow'] : ['crit', 'Too slow']);
  const emiPct = lc.emiPct;
  setTile('t-emi', money(cf.emi), cf.loan > 0 ? `${emiPct.toFixed(0)}% of your take-home, on a ${money(cf.loan)} loan.` : 'No loan needed.',
    cf.loan <= 0 ? ['good', 'No loan'] : emiPct <= 30 && lc.leftAfterEmi >= 0 ? ['good', 'Comfortable'] : emiPct <= S.foirPct && lc.leftAfterEmi >= 0 ? ['warn', 'Tight'] : ['crit', 'Unsafe']);
  setTile('t-best', opt.best.d + ' km', S.landMode === 'buy'
    ? `Lowest yearly land + transport + travel + wages. You chose ${S.distance} km.`
    : `Leased land costs the same anywhere, so closer is cheaper. You chose ${S.distance} km.`);

  // ---- verdict
  const v = $('#verdict'); v.replaceChildren();
  if (m5.op <= 0) para(v, [{ b: 'At these numbers the farm loses money every year. ' }, `To break even you need a full price of about ${fmt.inr(cf.breakEvenPrice)} per ${U} (now ${fmt.inr(S.price)}), more sales at full price, or lower costs.`]);
  else if (pb == null) para(v, [{ b: `The farm earns ${money(m5.op)} a year, but that does not repay ${money(cf.upfront)} within 10 years. ` }, S.landMode === 'buy' ? 'Most of the money sits in land. Try leasing, or start smaller.' : 'Try a smaller start or better prices.']);
  else para(v, [{ b: `The farm pays back its starting money in about ${pb.toFixed(1)} years ` }, `and then earns about ${money(m5.op)} a year. Break-even full price: ${fmt.inr(cf.breakEvenPrice)} per ${U}.`]);
  if (cf.loan > 0) para(v, [`Loan: ${money(cf.loan)} at ${S.loanRate}% for ${S.loanYears} years = ${money(cf.emi)} a month (${emiPct.toFixed(0)}% of take-home). `,
    lc.leftAfterEmi >= 0 ? `After living costs and EMI you keep ${money(lc.leftAfterEmi)} a month even if the farm earns nothing.` : `If the farm earns nothing, your salary falls ${money(-lc.leftAfterEmi)} a month short of living costs plus EMI.`]);
  const lowWage = Math.min(S.wageNear, S.wageFar) < LEGAL_MIN_WAGE;
  if (lowWage) para(v, [{ chip: ['warn', 'Wage check'] }, ` A wage below ₹${LEGAL_MIN_WAGE}/day may break Telangana's June 2026 minimum wage for rural unskilled work `, { src: 'minWage' }, '.']);

  // ---- 1 where
  const xs = opt.curve.map(c => c.d);
  const series = [
    { name: 'Total', color: 'var(--ink)', values: opt.curve.map(c => c.total), width: 2.5 },
    { name: 'Transport + damage', color: 'var(--s1)', values: opt.curve.map(c => c.transport) },
    { name: S.landMode === 'buy' ? 'Land (yearly cost of the money)' : 'Land lease rent', color: 'var(--s2)', values: opt.curve.map(c => c.land) },
    { name: 'Your visits (car + time)', color: 'var(--s3)', values: opt.curve.map(c => c.owner) },
    { name: 'Wages', color: 'var(--s4)', values: opt.curve.map(c => c.labour) },
  ];
  const lg = $('#lg-loc'); lg.replaceChildren();
  for (const s of series) { const sp = document.createElement('span'); const i = document.createElement('i'); i.style.background = s.color; if (s.width) i.style.height = '4px'; sp.append(i, s.name); lg.appendChild(sp); }
  charts.loc = () => lineChart($('#c-loc'), {
    x: xs, series, label: 'Yearly location costs by distance from Hyderabad',
    xFmt: (v, tip) => tip ? v + ' km from Hyderabad' : v + ' km', yFmt: fmt.lakhAxis, yTip: v => money(v),
    xTitle: 'Road distance from Hyderabad (km)', yTitle: 'Cost per year',
    vlines: [{ x: S.distance, label: 'You: ' + S.distance + ' km' }],
    dot: { x: opt.best.d, y: opt.best.total, label: 'Lowest: ' + opt.best.d + ' km' },
  });
  charts.loc();
  fillTable($('#tv-loc'), ['Distance', 'Total', 'Transport + damage', 'Land', 'Your visits', 'Wages'],
    opt.curve.filter(c => c.d % 10 === 0 || c.d === opt.best.d).map(c => [c.d + ' km', money(c.total), money(c.transport), money(c.land), money(c.owner), money(c.labour)]), [1, 2, 3, 4, 5]);

  const here = locationCosts(S.distance, st, prod, true);
  kv($('#o-where'), [
    [S.landMode === 'buy' ? 'Asking price at ' + S.distance + ' km' : 'Lease rent', S.landMode === 'buy' ? money(landPriceLakh(S.distance, S) * 1e5) + ' per acre' : money(S.leaseRent) + ' per acre/yr'],
    ['Yearly location cost at ' + S.distance + ' km', money(here.total)],
    ['Lowest yearly cost (at ' + opt.best.d + ' km)', money(opt.best.total)],
    ['Truck trips per year', fmt.int(prod.trips)],
    ['Cost of one truck trip at ' + S.distance + ' km', money(tripCost(S.distance, S))],
    ['Each extra km adds', money(cfm.M) + ' per year'],
  ]);
  const visits = S.visitsPerMonth * 12;
  const lines = [
    'C(d) = Land(d) + Transport(d) + Visits(d) + Wages(d)',
    '',
    'Land(d)      = A × m × P(d) × (1 − gap) × (1 + s) × (i − g)',
    'P(d)         = Pf + (P0 − Pf) × e^(−d/λ)                  ₹ lakh/acre',
    'Transport(d) = N × [max(Fmin, c × d) + toll + loader] + R × (δ0 + δ1 × d/100)',
    'Visits(d)    = 12V × 2d × (c_car + τ / speed)',
    'Wages(d)     = L × D × W(d)',
    '',
    'Set dC/dd = 0  →  d* = λ × ln( K / (λ × M) )',
    'K = A × m × (P0 − Pf) × (1 − gap) × (1 + s) × (i − g)      land cost distance can remove',
    'M = N×c + R×δ1/100 + 24V×(c_car + τ/speed) + L×D×W′        ₹ added per extra km per year',
    '',
    'Your numbers:',
    `A=${S.landAcres} acre  m=×${S.dirMult}  P0=₹${S.curveP0}L  Pf=₹${S.curvePf}L  λ=${S.curveLambda} km  gap=${S.askGap}%  s=${S.regPct}%  i−g=${Math.max(0, S.costOfMoney - S.landGrowth)}%`,
    `N=${fmt.int(prod.trips)} trips  c=₹${S.ratePerKm}/km  Fmin=₹${S.minFare}  R=${money(prod.revenue)}  δ1=${S.damagePer100}%`,
    `V=${S.visitsPerMonth}/month  c_car=₹${S.carPerKm}/km  τ=₹${S.ownerHourValue}/h  speed=${S.avgSpeed} km/h  L=${S.workers}  D=${S.workDays}  W′=₹${((S.wageFar - S.wageNear) / 120).toFixed(2)}/day per km`,
    `K = ${money(cfm.K)} per year      M = ${money(cfm.M)} per km per year`,
  ];
  if (S.landMode === 'buy') {
    if (cfm.dStar === Infinity) lines.push('M ≤ 0, so moving farther always saves money (until wages stop falling).');
    else lines.push(`d* = ${S.curveLambda} × ln(${money(cfm.K)} ÷ (${S.curveLambda} × ${money(cfm.M)})) = ${cfm.dStar.toFixed(0)} km`);
  } else lines.push('Leasing: rent does not fall with distance, so every extra km only adds cost.');
  $('#o-formula').textContent = lines.join('\n');
  const fn = $('#o-formula-note'); fn.replaceChildren();
  fn.append(`The formula ignores the minimum truck fare and the wage limits, so it can differ by a few km from the chart (${opt.best.d} km), which checks every distance. This is the classic land-rent trade-off `);
  fn.appendChild(srcLink('thunen'));
  fn.append('.');

  const pts = LAND_POINTS;
  charts.land = () => scatterChart($('#c-land'), {
    points: pts.map(p => ({ x: p.km, y: p.typ, label: p.place, sub: `${p.corridor}, ${p.km} km · ${p.kind}` })),
    curve: x => landPriceLakh(x, S), xMax: 160, yTicks: [10, 20, 50, 100, 200, 500, 1000],
    yFmt: v => v >= 100 ? '₹' + (v / 100) + ' Cr' : '₹' + v + ' L', yTip: v => money(v * 1e5) + ' per acre',
    xTitle: 'Road distance from Hyderabad (km)', yTitle: 'Price per acre (log scale)', label: 'Land price data points and fitted curve',
  });
  charts.land();
  fillTable($('#tv-land'), ['Place', 'Direction', 'km', 'Typical', 'Range', 'Type', 'Source'],
    pts.map(p => [p.place, p.corridor, String(p.km), money(p.typ * 1e5), p.lo === p.hi ? '–' : money(p.lo * 1e5) + ' – ' + money(p.hi * 1e5), p.kind + (p.fit === false ? ' (not fitted)' : ''), { href: p.url, text: 'open' }]), [2, 3]);

  // ---- 2 setup
  const capRows = cf.items.map(it => ({ label: it.label, value: it.amount }));
  if (cf.landBuy > 0) capRows.unshift({ label: 'Land + duties + checks', value: cf.landBuy });
  capRows.push({ label: 'Working money (first cycle)', value: cf.workingCapital });
  capRows.push({ label: 'Contingency', value: cf.contingency });
  hbars($('#c-capex'), [...capRows].sort((a, b) => b.value - a.value).filter(r => r.value > 0), money);
  fillTable($('#o-capex'), ['Item', 'Amount'], [
    ...capRows.map(r => [r.label, money(r.value)]),
    { cls: 'total', cells: ['Money needed at the start', money(cf.upfront)] },
    ...(cf.subsidy > 0 ? [['Subsidy that may come back in year 1', '−' + money(cf.subsidy)], { cls: 'total', cells: ['Net after subsidy', money(cf.upfront - cf.subsidy)] }] : []),
  ], [1]);

  // ---- 3 running
  kv($('#o-running'), [
    [PRESETS[S.model].producedLabel, fmt.int(prod.produced) + ' ' + PRESETS[S.model].units],
    ['Sold per year', fmt.int(prod.sold) + ' ' + PRESETS[S.model].units],
    ['Average price received', fmt.inr(prod.avgPrice) + ' per ' + U],
    ['Break-even full price', cf.breakEvenPrice == null ? '–' : fmt.inr(cf.breakEvenPrice) + ' per ' + U],
    ['Sales per year (full)', money(m5.revenue)],
    ['Profit per year (full)', money(m5.op), m5.op > 0 ? ['good', 'Profit'] : ['crit', 'Loss']],
    ['10-year return (IRR, land resold at the end)', cf.irr == null ? 'Below −99%' : (cf.irr * 100).toFixed(1) + '% a year', cf.irr != null && cf.irr * 100 >= S.loanRate ? ['good', 'Beats loan rate'] : ['crit', 'Below loan rate']],
  ]);
  const yrs = cf.rows.map(r => r.y === 0 ? 'Start' : 'Y' + r.y);
  charts.cash = () => cashChart($('#c-cash'), { labels: yrs, bars: cf.rows.map(r => r.project), line: cf.rows.map(r => r.cumProject), barName: 'Cash this year', lineName: 'Running total', yFmt: fmt.lakhAxis, yTip: money, label: 'Yearly cash and running total' });
  charts.cash();
  fillTable($('#tv-cash'), ['Year', 'Sales', 'Running cost', 'Operating profit', 'Net/film renewal', 'Subsidy', 'Cash this year', 'Running total', 'Loan EMI paid', 'Cash to you'],
    cf.rows.map(r => [r.y === 0 ? 'Start' : String(r.y), money(r.revenue), money(r.opex), money(r.op), money(r.replace), money(r.subsidy), money(r.project), money(r.cumProject), money(r.debt), money(r.you)]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  fillTable($('#o-pl'), ['Year 5 (full production)', 'Per year'], [
    ['Sales', money(m5.revenue)],
    [S.model === 'nursery' ? 'Liners, pots, potting mix, feed, sprays' : 'Seedlings, fertiliser, sprays', '−' + money(m5.inputCost)],
    ['Wages + supervisor', '−' + money(m5.labour)],
    ['Transport + transit damage', '−' + money(m5.transport)],
    ['Your car trips to the farm', '−' + money(m5.owner)],
    ['Power, phone, insurance, licence' + (S.vehicleFixed > 0 ? ', vehicle' : ''), '−' + money(S.otherFixed + S.vehicleFixed)],
    ['Maintenance', '−' + money(m5.maint)],
    ['Selling costs', '−' + money(m5.marketing)],
    ...(S.landMode === 'lease' ? [['Lease rent', '−' + money(m5.lease)]] : []),
    ...(m5.support > 0 ? [['Rythu Bharosa', '+' + money(m5.support)]] : []),
    { cls: 'total', cells: ['Operating profit', money(m5.op)] },
  ], [1]);

  // ---- 4 loan
  const dscr = cf.emi > 0 ? m5.op / (cf.emi * 12) : null;
  kv($('#o-loan'), [
    ['Loan amount', money(cf.loan)],
    ['EMI per month', money(cf.emi)],
    ['EMI share of take-home', emiPct.toFixed(0) + '%', cf.loan <= 0 ? ['good', 'No loan'] : emiPct <= 30 ? ['good', 'Comfortable'] : emiPct <= S.foirPct ? ['warn', 'Tight'] : ['crit', 'Over the bank limit']],
    ['Left each month after costs and EMI', money(lc.leftAfterEmi), lc.leftAfterEmi >= 0 ? ['good', 'Salary covers it'] : ['crit', 'Salary falls short']],
    ['Most a bank may lend on your salary', money(lc.maxLoan)],
    ['Loan your salary can carry safely', money(lc.safeLoan)],
    ['Total interest over the loan', money(cf.totalInterest)],
    ['Farm profit ÷ yearly EMI', dscr == null ? '–' : dscr.toFixed(2) + '×', dscr == null ? null : dscr >= 1.5 ? ['good', 'Farm can repay'] : dscr >= 1 ? ['warn', 'Thin cover'] : ['crit', 'Farm cannot repay']],
  ]);
  const ln = $('#o-loan-note'); ln.replaceChildren();
  para(ln, [`Safe loan = the EMI your salary can pay after living costs (capped at ${S.foirPct}% of take-home), turned into a loan at ${S.loanRate}% for ${S.loanYears} years. Banks use a similar rule called FOIR `, { src: 'foir' }, '.']);
  for (const n of LOAN_NOTES) para(ln, n);

  // ---- 5 support
  const rb = S.landMode === 'buy' && S.rbOn ? S.rbPerAcre * S.landAcres : 0;
  kv($('#o-support'), [
    ['Subsidy on structure + irrigation', money(cf.subsidy)],
    ['Rythu Bharosa per year', money(rb)],
    ['Money needed after subsidy returns', money(cf.upfront - cf.subsidy)],
  ]);
  const sn = $('#o-support-note'); sn.replaceChildren();
  for (const n of SUPPORT_NOTES) para(sn, n);

  $('#data-date').textContent = DATA_NOTE;
}

let raf = 0;
function afterChange() { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { update(); saveState(); }); }

document.querySelectorAll('input[name=model]').forEach(r => r.addEventListener('change', () => {
  if (!r.checked) return;
  S = defaultsFor(r.value, S);
  renderFields(); afterChange();
}));
document.querySelectorAll('input[name=landMode]').forEach(r => r.addEventListener('change', () => {
  if (!r.checked) return;
  S.landMode = r.value; renderFields(); afterChange();
}));
$('#reset').addEventListener('click', () => { S = defaultsFor(S.model); $('#plan').value = ''; renderFields(); afterChange(); });

// Start from one of the report's plans: the picker, or a link such as calculator.html#plan-f
const planSel = $('#plan');
for (const [id, p] of Object.entries(PLANS)) { const o = document.createElement('option'); o.value = id; o.textContent = p.label; planSel.appendChild(o); }
function applyPlan(id) {
  if (!PLANS[id]) return false;
  S = planState(id); planSel.value = id;
  renderFields(); afterChange();
  return true;
}
planSel.addEventListener('change', () => applyPlan(planSel.value));
function planFromHash() {
  const m = /^#plan-([a-z])$/.exec(location.hash);
  if (m && applyPlan(m[1])) { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* keep the hash */ } }
}
window.addEventListener('hashchange', planFromHash);

renderFields();
update();
planFromHash();
for (const [id, key] of [['c-loc', 'loc'], ['c-land', 'land'], ['c-cash', 'cash']]) {
  const host = document.getElementById(id);
  let last = host.clientWidth;
  new ResizeObserver(() => { const w = host.clientWidth; if (Math.abs(w - last) > 4) { last = w; charts[key] && charts[key](); } }).observe(host);
}
