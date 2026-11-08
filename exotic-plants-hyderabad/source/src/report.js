// Report charts. Same engine (model.js) and research values (data.js) as the calculator,
// fixed to the plans discussed in the text.
(function () {
  const $ = s => document.querySelector(s);
  const money = v => fmt.money(v);
  const plan = id => { const s = planState(id); s.ramp = [s.ramp1 / 100, s.ramp2 / 100, s.ramp3 / 100, 1]; return s; };
  const A = plan('a');   // research defaults: buy 1 acre at 75 km
  const C = plan('c');   // lease + own cuttings
  const F = plan('f');   // small start

  // ---- Land price data and the fitted curve
  const drawLand = () => scatterChart($('#r-land'), {
    points: LAND_POINTS.map(p => ({ x: p.km, y: p.typ, label: p.place,
      sub: `${p.corridor}, ${p.km} km · ${p.kind}${p.fit === false ? ' (not fitted)' : ''}`,
      color: p.fit === false ? 'var(--s2)' : 'var(--s1)' })),
    curve: x => landPriceLakh(x, A), xMax: 150, yTicks: [10, 20, 50, 100, 200, 500, 1000],
    yFmt: v => v >= 100 ? '₹' + (v / 100) + ' Cr' : '₹' + v + ' L', yTip: v => money(v * 1e5) + ' per acre',
    xTitle: 'Road distance from Hyderabad (km)', yTitle: 'Asking price per acre (log scale)',
    label: 'Farmland asking prices by distance from Hyderabad, with the fitted curve',
  });
  fillTable($('#rt-land'), ['Place', 'District', 'Direction', 'km', 'Typical', 'Range', 'Type', 'Source'],
    [...LAND_POINTS].sort((a, b) => a.km - b.km).map(p => [p.place, p.district, p.corridor, String(p.km), money(p.typ * 1e5),
      p.lo === p.hi ? '–' : money(p.lo * 1e5) + ' – ' + money(p.hi * 1e5), p.kind + (p.fit === false ? ' (not fitted)' : ''), { href: p.url, text: 'open' }]), [3, 4]);

  // ---- Yearly location cost by distance (nursery, buy)
  const prodA = production(A);
  const opt = optimiseDistance(A, prodA, 15, 180);
  const xs = opt.curve.map(c => c.d);
  const series = [
    { name: 'Total', color: 'var(--ink)', values: opt.curve.map(c => c.total), width: 2.5 },
    { name: 'Transport + damage', color: 'var(--s1)', values: opt.curve.map(c => c.transport) },
    { name: 'Land (yearly cost of the money)', color: 'var(--s2)', values: opt.curve.map(c => c.land) },
    { name: 'Your visits (car + time)', color: 'var(--s3)', values: opt.curve.map(c => c.owner) },
    { name: 'Wages', color: 'var(--s4)', values: opt.curve.map(c => c.labour) },
  ];
  const lg = $('#lg-loc');
  for (const s of series) {
    const sp = document.createElement('span'), i = document.createElement('i');
    i.style.background = s.color; if (s.width) i.style.height = '4px';
    sp.append(i, s.name); lg.appendChild(sp);
  }
  const drawLoc = () => lineChart($('#r-loc'), {
    x: xs, series, label: 'Yearly cost of land, transport, visits and wages by distance, nursery buying 1 acre',
    xFmt: (v, tip) => tip ? v + ' km from Hyderabad' : v + ' km', yFmt: fmt.lakhAxis, yTip: money,
    xTitle: 'Road distance from Hyderabad (km)', yTitle: 'Cost per year',
    dot: { x: opt.best.d, y: opt.best.total, label: 'Lowest: ' + opt.best.d + ' km' },
  });
  fillTable($('#rt-loc'), ['Distance', 'Total', 'Transport + damage', 'Land', 'Your visits', 'Wages'],
    opt.curve.filter(c => c.d % 10 === 0 || c.d === opt.best.d).map(c => [c.d + ' km', money(c.total), money(c.transport), money(c.land), money(c.owner), money(c.labour)]), [1, 2, 3, 4, 5]);

  // ---- What moves plan C's profit
  const base = cashflow({ ...C, loanAmount: 0 }).mature.op;
  const T14 = { vehicleMode: 'truck14', ...VEHICLES.truck14.values, unitsPerTrip: VEHICLES.truck14.perTrip.plant };
  const tests = [
    ['Buy plantlets (₹42) instead of rooting cuttings (₹30)', { varCost: 42 }],
    ['Wholesale price ₹90 instead of ₹75', { price: 90 }],
    ['Only 60% sell at full price, not 85%', { fullPriceShare: 60 }],
    ['Wholesale price ₹65 instead of ₹75', { price: 65 }],
    ['20% of plants lost, not 10%', { lossPct: 20 }],
    ['Plants take 8 months to sell, not 6', { cycleMonths: 8 }],
    ['Hire a 14 ft truck instead of a Tata Ace', T14],
    ['Head gardener paid ₹25,000, not ₹15,000', { supervisor: 25000 }],
    ['Wages ₹100 a day higher', { wageNear: GLOBAL.wageNear + 100, wageFar: GLOBAL.wageFar + 100 }],
  ];
  const items = tests.map(([label, o]) => {
    const delta = cashflow({ ...C, ...o, loanAmount: 0 }).mature.op - base;
    return { label, value: Math.abs(delta), delta, color: delta >= 0 ? 'var(--pos)' : 'var(--neg)' };
  }).sort((a, b) => b.value - a.value);
  hbars($('#r-sens'), items, (v, it) => (it.delta >= 0 ? '+' : '−') + '₹' + (v / 1e5).toFixed(1) + ' lakh');

  // ---- Cash by year, plan F
  const cf = cashflow({ ...F, loanAmount: 0 });
  const yrs = cf.rows.map(r => r.y === 0 ? 'Start' : 'Year ' + r.y);
  const drawCash = () => cashChart($('#r-cash'), {
    labels: cf.rows.map(r => r.y === 0 ? 'Start' : 'Y' + r.y), bars: cf.rows.map(r => r.project), line: cf.rows.map(r => r.cumProject),
    barName: 'Cash this year', lineName: 'Running total', yFmt: fmt.lakhAxis, yTip: money,
    label: 'Small start plan F: cash each year and running total over ten years',
  });
  fillTable($('#rt-cash'), ['Year', 'Sales', 'Running costs', 'Subsidy', 'Net renewal', 'Cash this year', 'Running total'],
    cf.rows.map((r, i) => [yrs[i], money(r.revenue), money(r.opex), money(r.subsidy), money(r.replace), money(r.project), money(r.cumProject)]), [1, 2, 3, 4, 5, 6]);

  responsive($('#r-land'), drawLand);
  responsive($('#r-loc'), drawLoc);
  responsive($('#r-cash'), drawCash);
})();
