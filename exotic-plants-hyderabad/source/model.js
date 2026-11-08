// Pure calculation engine for the exotic-plant farm calculator.
// Money in rupees unless a name says lakh. Distances are road km from Hyderabad.
// Dependency-free, so the same code runs in the browser and in Node tests.

const LAKH = 1e5;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));

// Asking price of farmland (₹ lakh per acre) at road distance d:
// P(d) = m × [ Pf + (P0 − Pf) × e^(−d/λ) ], m = direction multiplier.
function landPriceLakh(d, s) {
  return s.dirMult * (s.curvePf + (s.curveP0 - s.curvePf) * Math.exp(-d / s.curveLambda));
}

// All-in rupees to buy the land at distance d (deal discount, duties, broker, legal checks).
function landBuyCost(d, s, lakhPerAcre) {
  const p = (lakhPerAcre != null ? lakhPerAcre : landPriceLakh(d, s)) * (1 - s.askGap / 100);
  return p * LAKH * s.landAcres * (1 + s.regPct / 100) + s.legalCost;
}

// Daily wage at distance d: straight line from the near-city wage (30 km) to the far wage (150 km).
function wageAt(d, s) {
  const t = clamp((d - 30) / 120, 0, 1);
  return s.wageNear + (s.wageFar - s.wageNear) * t;
}

// MIDH cost norm (₹/m²) for the structure; polyhouse norms fall with area slab.
function costNorm(s) {
  if (s.model === 'polyhouse') {
    const a = s.growArea;
    return a <= 500 ? 1060 : a <= 1008 ? 935 : a <= 2080 ? 890 : 844;
  }
  return s.model === 'nursery' ? 710 : 0;
}

// Output at full production. Everything saleable leaves the farm: a share at the
// full wholesale price, the rest cleared at a discount.
function production(s) {
  let produced, inputCost;
  if (s.model === 'nursery') {
    produced = s.growArea * s.density * (12 / s.cycleMonths);   // plants started per year
    inputCost = produced * s.varCost;
  } else if (s.model === 'polyhouse') {
    produced = s.growArea * s.yieldPerM2;                        // kg per year
    inputCost = s.growArea * s.varCostPerM2;
  } else {
    produced = s.cropAcres * s.yieldTPerAcre * 1000;             // kg per year at full yield
    inputCost = s.cropAcres * s.varCostPerAcre;
  }
  const sold = produced * (1 - s.lossPct / 100);
  const share = s.fullPriceShare / 100;
  const avgPrice = s.price * (share + (1 - share) * s.discountPct / 100);
  const revenue = sold * avgPrice;
  const trips = sold > 0 ? Math.max(Math.ceil(sold / s.unitsPerTrip), s.minTrips) : 0;
  return { produced, sold, inputCost, revenue, trips, avgPrice };
}

const tripCost = (d, s) => Math.max(s.minFare, s.ratePerKm * d) + s.toll + s.helper;

// Yearly costs that depend on distance. withTime adds the value of the owner's
// travel time (an economic cost, not cash) — used only by the distance optimiser.
function locationCosts(d, s, prod, withTime = true) {
  let land;
  if (s.landMode === 'buy') land = landBuyCost(d, s) * Math.max(0, (s.costOfMoney - s.landGrowth) / 100);
  else land = s.landAcres * s.leaseRent;
  const damagePct = s.damageBase + s.damagePer100 * d / 100;
  const transport = prod.trips * tripCost(d, s) + prod.revenue * damagePct / 100;
  const visits = s.visitsPerMonth * 12;
  const ownerCash = visits * 2 * d * s.carPerKm;
  const ownerTime = withTime ? visits * (2 * d / s.avgSpeed) * s.ownerHourValue : 0;
  const labour = s.workers * s.workDays * wageAt(d, s);
  const owner = ownerCash + ownerTime;
  return { land, transport, owner, ownerCash, ownerTime, labour, total: land + transport + owner + labour };
}

function optimiseDistance(s, prod, dMin = 15, dMax = 250) {
  const curve = [];
  let best = null;
  for (let d = dMin; d <= dMax; d += 1) {
    const c = locationCosts(d, s, prod, true);
    curve.push({ d, ...c });
    if (!best || c.total < best.total) best = { d, ...c };
  }
  return { best, curve };
}

// Closed form for the "buy" case (beyond the minimum-fare zone, ignoring wage band limits):
// d* = λ × ln( K / (λ × M) ), K = land carrying cost that distance can remove, M = extra ₹/yr per extra km.
function closedForm(s, prod) {
  const visits = s.visitsPerMonth * 12;
  const wageSlope = (s.wageFar - s.wageNear) / 120;
  const M = prod.trips * s.ratePerKm
          + prod.revenue * (s.damagePer100 / 100) / 100
          + 2 * visits * (s.carPerKm + s.ownerHourValue / s.avgSpeed)
          + s.workers * s.workDays * wageSlope;
  const K = s.landAcres * s.dirMult * (s.curveP0 - s.curvePf) * LAKH * (1 - s.askGap / 100) * (1 + s.regPct / 100)
          * Math.max(0, (s.costOfMoney - s.landGrowth) / 100);
  let dStar = null;
  if (s.landMode === 'buy') {
    if (M <= 0) dStar = Infinity;
    else { const arg = K / (s.curveLambda * M); dStar = arg <= 1 ? 0 : s.curveLambda * Math.log(arg); }
  }
  return { M, K, dStar };
}

// One-time setup items. life > 0 means part of the item (replaceShare) is bought again every `life` years.
function capexItems(s) {
  const items = [];
  const perimeterFt = 4 * Math.sqrt(s.landAcres * 43560);
  const add = (label, amount, extra = {}) => items.push({ label, amount: Math.max(0, amount), life: 0, replaceShare: 0, sub: null, ...extra });
  if (s.model === 'nursery') {
    add('Shade-net house', s.growArea * s.structRate, { life: s.coverLife, replaceShare: s.coverShare / 100, sub: 'structure' });
    add('Misting + irrigation', s.growArea * s.irrigRate, { sub: 'micro' });
    add('Weed mat, trays, benches', s.growArea * s.benchRate);
  } else if (s.model === 'polyhouse') {
    add('Polyhouse', s.growArea * s.structRate, { life: s.coverLife, replaceShare: s.coverShare / 100, sub: 'structure' });
    add('Drip + fertigation', s.growArea * s.irrigRate, { sub: 'micro' });
    add('Beds, mulch, trellis', s.growArea * s.benchRate);
  } else {
    add('Poles + ring frames', s.cropAcres * s.polesPerAcre * s.poleRate);
    add('Planting cuttings', s.cropAcres * s.polesPerAcre * s.plantsPerPole * s.cuttingRate);
    add('Drip irrigation', s.cropAcres * s.dripPerAcre, { sub: 'micro' });
    add('Land preparation + manure', s.cropAcres * s.prepPerAcre);
  }
  add('Borewell + pump', s.borewell);
  add('Water sump / tank', s.tank);
  add('Fencing', s.fenceRate * perimeterFt);
  add('Shed, store, worker room', s.shedSqft * s.shedRate);
  add('Power connection', s.power);
  add('Tools, crates, sprayers', s.tools);
  if (s.vehicle > 0) add('Own vehicle', s.vehicle);
  return items;
}

// Ten-year cash flow (cash only: the owner's time is not counted here).
function cashflow(s) {
  const prod = production(s);
  const d = s.distance;
  const items = capexItems(s);
  const setup = items.reduce((a, b) => a + b.amount, 0);
  const contingency = setup * s.contingencyPct / 100;
  const landLakh = s.landQuote > 0 ? s.landQuote : landPriceLakh(d, s);
  const landBuy = s.landMode === 'buy' ? landBuyCost(d, s, s.landQuote > 0 ? s.landQuote / (1 - s.askGap / 100) : null) : 0;

  // Working money: inputs for the first cycle/season (at year-1 output) + 3 months of wages and fixed costs.
  // It is tied up in growing stock, so it comes back at the end of year 10.
  const firstInputs = s.model === 'nursery' ? prod.inputCost * (s.cycleMonths / 12) * s.ramp[0]
                    : s.model === 'polyhouse' ? prod.inputCost * 0.5 * s.ramp[0] : prod.inputCost;
  const wagesYear = s.workers * s.workDays * wageAt(d, s) + s.supervisor * 12;
  const workingCapital = firstInputs + (wagesYear + s.otherFixed + s.vehicleFixed) / 4;
  const upfront = landBuy + setup + contingency + workingCapital;

  // Back-ended subsidy, paid in year 1 if sanctioned.
  let subsidy = 0;
  if (s.subsidyOn) {
    for (const it of items) {
      if (it.sub === 'structure') subsidy += Math.min(s.structRate, costNorm(s)) * Math.min(s.growArea, 4000) * s.structSubsidyPct / 100;
      else if (it.sub === 'micro') subsidy += it.amount * s.microSubsidyPct / 100;
    }
  }

  const loan = Math.max(0, s.loanAmount);
  const r = s.loanRate / 100 / 12, n = Math.max(1, Math.round(s.loanYears * 12));
  const emi = loan <= 0 ? 0 : (r === 0 ? loan / n : loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));

  const rows = [];
  let cumProject = -upfront, cumYou = -(upfront - loan);
  rows.push({ y: 0, revenue: 0, opex: 0, op: 0, replace: 0, subsidy: 0, debt: 0, project: -upfront, you: -(upfront - loan), cumProject, cumYou });
  for (let y = 1; y <= 10; y++) {
    const ramp = s.ramp[Math.min(y - 1, s.ramp.length - 1)];
    const p = { ...prod, produced: prod.produced * ramp, sold: prod.sold * ramp, revenue: prod.revenue * ramp,
                inputCost: s.model === 'dragon' ? prod.inputCost : prod.inputCost * ramp };
    p.trips = p.sold > 0 ? Math.max(Math.ceil(p.sold / s.unitsPerTrip), s.minTrips) : 0;
    const lc = locationCosts(d, s, p, false);
    const marketing = p.revenue * s.marketingPct / 100;
    const maint = setup * s.maintPct / 100;
    const supervisor = s.supervisor * 12;
    const lease = s.landMode === 'lease' ? lc.land : 0;
    const opex = p.inputCost + lc.transport + lc.ownerCash + lc.labour + supervisor + s.otherFixed + s.vehicleFixed + maint + marketing + lease;
    const support = s.landMode === 'buy' && s.rbOn ? s.rbPerAcre * s.landAcres : 0;
    const op = p.revenue + support - opex;
    let replace = 0;
    for (const it of items) if (it.life > 0 && y % it.life === 0) replace += it.amount * it.replaceShare;
    const sub = y === 1 ? subsidy : 0;
    const debt = Math.min(12, Math.max(0, n - (y - 1) * 12)) * emi;
    const release = y === 10 ? workingCapital : 0;
    const project = op - replace + sub + release;
    const you = project - debt;
    cumProject += project; cumYou += you;
    rows.push({ y, ramp, revenue: p.revenue, inputCost: p.inputCost, transport: lc.transport, owner: lc.ownerCash,
                labour: lc.labour + supervisor, marketing, maint, lease, opex, support, op, replace, subsidy: sub,
                debt, project, you, cumProject, cumYou, trips: p.trips, sold: p.sold });
  }

  let payback = null;
  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cumProject >= 0 && rows[i - 1].cumProject < 0) { payback = (i - 1) + (-rows[i - 1].cumProject) / rows[i].project; break; }
  }

  const mature = rows[5];
  const share = s.fullPriceShare / 100, priceFactor = share + (1 - share) * s.discountPct / 100;
  const dmg = (s.damageBase + s.damagePer100 * d / 100) / 100;
  const keep = 1 - s.marketingPct / 100 - dmg;
  const nonRevenueCosts = mature.opex - mature.revenue * (s.marketingPct / 100 + dmg);
  const breakEvenPrice = mature.sold > 0 && keep > 0 ? (nonRevenueCosts - mature.support) / (mature.sold * priceFactor * keep) : null;

  // 10-year IRR, counting the land's value at the end (rural farmland has no capital-gains tax).
  const landEnd = s.landMode === 'buy' ? landLakh * (1 - s.askGap / 100) * LAKH * s.landAcres * Math.pow(1 + s.landGrowth / 100, 10) : 0;
  const flows = rows.map(x => x.project);
  flows[10] += landEnd;
  const irr = irrOf(flows);
  const totalInterest = emi * n - loan;
  return { prod, items, setup, contingency, workingCapital, landLakh, landBuy, upfront, subsidy, loan, emi, totalInterest, rows, payback, mature, breakEvenPrice, irr, landEnd };
}

function irrOf(flows) {
  const npv = r => flows.reduce((a, f, t) => a + f / Math.pow(1 + r, t), 0);
  let lo = -0.99, hi = 2;
  if (npv(lo) * npv(hi) > 0) return null;
  for (let i = 0; i < 200; i++) { const mid = (lo + hi) / 2; if (npv(lo) * npv(mid) <= 0) hi = mid; else lo = mid; }
  return (lo + hi) / 2;
}

// How much you can borrow against your salary.
function loanCapacity(s, emi) {
  const surplus = s.salary - s.expenses;
  const r = s.loanRate / 100 / 12, n = Math.max(1, Math.round(s.loanYears * 12));
  const factor = r === 0 ? n : (1 - Math.pow(1 + r, -n)) / r;
  const maxEmi = s.salary * s.foirPct / 100;
  const safeEmi = Math.min(maxEmi, Math.max(0, surplus));
  return { surplus, maxEmi, maxLoan: maxEmi * factor, safeEmi, safeLoan: safeEmi * factor, emiPct: s.salary > 0 ? emi / s.salary * 100 : 0, leftAfterEmi: surplus - emi };
}

if (typeof module !== 'undefined') module.exports = { landPriceLakh, landBuyCost, wageAt, costNorm, production, tripCost, locationCosts, optimiseDistance, closedForm, capexItems, cashflow, irrOf, loanCapacity };
