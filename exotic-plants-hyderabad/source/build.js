// Build self-contained HTML: report (index.html) + calculator.html, in two flavours:
//   out/site/      full documents for the repo / local use
//   out/artifact/  report as a fragment (the host adds the skeleton) + calculator as a full page
const fs = require('fs'), path = require('path'), vm = require('vm');
const SP = __dirname, SRC_DIR = path.join(SP, 'src');
const read = f => fs.readFileSync(path.join(SP, f), 'utf8');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(read('src/land_points.js') + read('src/data.js') + ';this.SRC = SRC; this.LAND_POINTS = LAND_POINTS;', ctx);
const SRC = ctx.SRC;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (key, label) => {
  const s = SRC[key]; if (!s) throw new Error('Unknown source key: ' + key);
  const ext = !s.u.startsWith('#');
  return `<a class="src" href="${esc(s.u)}"${ext ? ' target="_blank" rel="noopener"' : ''}>${esc(label || s.t)}</a>`;
};
const GROUPS = [
  ['Land, lease and buying costs', ['landData', 'distress', 'govtValue', 'lease', 'lease2', 'lease3', 'stamp', 'stampGov']],
  ['Transport and travel', ['porter', 'transrentals', 'truckguru', 'mover', 'fuel', 'tollNH65', 'aceDeck', 'truck14', 'aceUsed', 'aceIns', 'carCost', 'kadiyamFreight']],
  ['Wages', ['wageChevella', 'wageNalgonda', 'wageSeries', 'mali', 'farmManager', 'driverPay', 'watchman', 'minWage', 'minWagePdf', 'minWageCourt', 'wageAgri']],
  ['Market, prices and demand', ['marketSize', 'marketSize2', 'exoticVeg', 'kukatpally', 'ugaoo', 'hotels2018', 'kadiyamScale', 'mahindraNursery', 'kadiyamListing', 'aglaonema', 'aglaRaj', 'areca', 'cactus', 'orchidGrower', 'orchidRetail', 'nurserylive', 'icarCapsicum', 'bowenpally', 'dragonPrice', 'dragonTG', 'dragonCrash']],
  ['Growing and setup costs', ['paes', 'agristarts', 'gpn', 'kfri', 'tcSyngonium', 'pots', 'cocopeat', 'nhbNorms', 'netHouse', 'mist', 'drip', 'borewell', 'borewellTG', 'fence', 'shed', 'oregon', 'iariYield', 'polyQuote', 'wbNorms', 'palakkad', 'dragonICAR', 'vikaspedia', 'dte', 'dragonCost', 'dragonCuttings', 'dragonMaint']],
  ['Failures and risk evidence', ['tgPolyLoss', 'himachal', 'anantapur', 'solan']],
  ['Land law and farmers’ rights', ['buyLand', 'ceiling', 'scheduled', 'assigned', 'sec22a', 'sec22aMess', 'bhuBharati', 'bhuGuide', 'nala', 'ppvfr', 'rythuBharosa', 'rbCropped', 'pmkisan', 'rythuBima', 'pmfby', 'tariff']],
  ['Licences and plant rules', ['nurseryAct', 'nurseryRules', 'seeds', 'pq', 'wildlife']],
  ['Labour law', ['labourCodes', 'payTime', 'ecSchedule', 'epf', 'migrant']],
  ['Tax', ['incomeTax', 'gst', 'gstCouncil']],
  ['Subsidies and government credit', ['midh', 'pmksy', 'tgHorti', 'nhb', 'aif', 'kcc', 'mudra', 'pmegp']],
  ['Loans', ['repo', 'mclr', 'plRates', 'plRealistic', 'lap', 'foir', 'sbiLand', 'bobLand', 'sbiPoly', 'centPoly', 'fd']],
  ['Method', ['googleBlog', 'arxiv', 'mitPage', 'thunen']],
];
const used = new Set(GROUPS.flatMap(g => g[1]));
const missing = Object.keys(SRC).filter(k => !used.has(k));
if (missing.length) throw new Error('Sources not grouped: ' + missing.join(', '));
const sourcesHtml = GROUPS.map(([g, keys]) => `<div class="srcgroup"><h3>${esc(g)}</h3><ul>${keys.filter(k => !SRC[k].u.startsWith('#')).map(k => `<li><a href="${esc(SRC[k].u)}" target="_blank" rel="noopener">${esc(SRC[k].t)}</a> <span class="url">${esc(SRC[k].u.replace(/^https?:\/\//, '').slice(0, 70))}</span></li>`).join('')}</ul></div>`).join('\n');

const parts = {
  '/*@@BASE_CSS@@*/': read('src/base.css'),
  '/*@@CHARTS_JS@@*/': read('src/charts.js'),
  '/*@@MODEL_JS@@*/': read('model.js'),
  '/*@@DATA_JS@@*/': read('src/land_points.js') + '\n' + read('src/data.js'),
  '/*@@APP_JS@@*/': read('src/app.js'),
  '/*@@REPORT_JS@@*/': fs.existsSync(path.join(SRC_DIR, 'report.js')) ? read('src/report.js') : '',
  '<!--@@SOURCES@@-->': sourcesHtml,
  '<!--@@NSRC@@-->': String(Object.values(SRC).filter(s => !s.u.startsWith('#')).length + ctx.LAND_POINTS.length),
};
function fill(html) {
  for (const [k, v] of Object.entries(parts)) html = html.split(k).join(v);
  return html.replace(/\[\[([a-zA-Z0-9]+)(?:\|([^\]]+))?\]\]/g, (_, k, label) => link(k, label));
}
const outSite = path.join(SP, 'out/site'), outArt = path.join(SP, 'out/artifact');
fs.mkdirSync(outSite, { recursive: true }); fs.mkdirSync(outArt, { recursive: true });
const calc = fill(read('src/calculator.html'));
fs.writeFileSync(path.join(outSite, 'calculator.html'), calc);
fs.writeFileSync(path.join(outArt, 'calculator.html'), calc);
if (fs.existsSync(path.join(SRC_DIR, 'report.html'))) {
  const rep = fill(read('src/report.html'));
  fs.writeFileSync(path.join(outSite, 'index.html'), rep);
  // Fragment for the artifact host: drop doctype/html/head/body wrappers and the charset/viewport metas.
  let frag = rep.replace(/<!doctype html>\s*/i, '').replace(/<html[^>]*>\s*/i, '').replace(/<\/html>\s*$/i, '')
    .replace(/<head>\s*/i, '').replace(/<\/head>\s*/i, '').replace(/<body>\s*/i, '').replace(/<\/body>\s*/i, '')
    .replace(/<meta charset="utf-8">\s*/i, '').replace(/<meta name="viewport"[^>]*>\s*/i, '');
  fs.writeFileSync(path.join(outArt, 'report.html'), frag);
}
const unresolved = fs.readdirSync(outSite).map(f => fs.readFileSync(path.join(outSite, f), 'utf8')).join('').match(/\[\[[a-zA-Z0-9]+(?:\|[^\]]+)?\]\]|@@[A-Z_]+@@/g);
console.log('built', fs.readdirSync(outSite), fs.readdirSync(outArt), unresolved ? 'UNRESOLVED ' + unresolved : '');
