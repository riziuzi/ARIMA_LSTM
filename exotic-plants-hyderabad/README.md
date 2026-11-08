# Exotic plants near Hyderabad: feasibility study

Open these in a browser. All three are self-contained and work offline, apart from web fonts.

- `course.html`: a 14-lesson course that walks through every calculation step by step, with sliders, check questions and source links. Start here.
- `index.html`: the full report.
- `calculator.html`: change any number and see cost, profit, payback and loan.

Other folders:

- `research/` holds the three research notes behind every number, with their source links.
- `source/` builds the pages. `source/src/data.js` holds every research value and source link. Edit it, then run `node build.js` inside `source/`; the pages are written to `source/out/site/`.
- `python fit_joint.py land_points.json` (inside `source/`) refits the land price curve; it needs numpy and scipy.

Values were collected on 8 Nov 2026. Land prices are asking prices, not sales. Items marked "Check" need confirming before you rely on them. Planning help, not financial advice.
