# Exotic plants near Hyderabad: feasibility study

Open `index.html` (the report) or `calculator.html` (change any number and see cost, profit, payback and loan) in a browser. Both files are self-contained and work offline, apart from web fonts.

- `research/` holds the three research notes behind every number, with their source links.
- `source/` builds the two pages. `source/src/data.js` holds every research value and source link. Edit it, then run `node build.js` inside `source/`; the pages are written to `source/out/site/`.
- `python fit_joint.py land_points.json` (inside `source/`) refits the land price curve; it needs numpy and scipy.

Values were collected on 8 Nov 2026. Land prices are asking prices, not sales. Items marked "Check" in the report need confirming before you rely on them. Planning help, not financial advice.
