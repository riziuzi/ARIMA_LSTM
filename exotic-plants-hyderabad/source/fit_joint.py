"""Joint fit: log P = log m_c + log(Pf + (P0 - Pf) exp(-d/lam)); South (NH44) is the reference (m = 1)."""
import json, sys, math
import numpy as np
from scipy.optimize import least_squares
pts = [p for p in json.load(open(sys.argv[1])) if p.get('fit', True)]
cors = sorted({p['corridor'] for p in pts})
ref = 'South (NH44)'
others = [c for c in cors if c != ref]
d = np.array([p['km'] for p in pts], float)
y = np.log(np.array([p['typ'] for p in pts], float))
idx = np.array([others.index(p['corridor']) if p['corridor'] != ref else -1 for p in pts])
def pred(t):
    p0, pf, lam = t[:3]
    lm = np.concatenate([t[3:], [0.0]])  # index -1 -> 0 (reference)
    return lm[idx] + np.log(pf + (p0 - pf) * np.exp(-d / lam))
best = None
for p0 in (300, 600, 1000):
    for pf in (10, 25, 40):
        for lam in (15, 25, 40):
            r = least_squares(lambda t: pred(t) - y, [p0, pf, lam] + [0.0] * len(others),
                              bounds=([10, 1, 3] + [-2] * len(others), [20000, 200, 300] + [2] * len(others)))
            if best is None or r.cost < best.cost: best = r
t = best.x
res = pred(t) - y
print(json.dumps({'P0': round(t[0], 1), 'Pf': round(t[1], 2), 'lambda': round(t[2], 1), 'n': len(pts),
                  'rmse_log': round(float(np.sqrt(np.mean(res ** 2))), 3)}))
print('multipliers vs', ref, {c: round(math.exp(v), 2) for c, v in zip(others, t[3:])})
for km in (25, 30, 40, 50, 60, 75, 100, 125, 150):
    print(km, round(t[1] + (t[0] - t[1]) * math.exp(-km / t[2]), 1))
