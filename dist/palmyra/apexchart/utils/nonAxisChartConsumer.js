const R = (r, i) => {
  const { enhanceData: u } = i, l = r.xKeyAccessor, y = r.yKeyAccessors, s = [], e = [];
  return { initialize: () => {
  }, processRow: (t, h, c) => {
    const p = y[0], o = l(t, c), n = p(t, c);
    if (u) {
      const a = u(o, n, t, 0, h, c);
      s.push(a.y || n), e.push(a.x || o);
    } else
      s.push(n), e.push(o);
  }, getResult: () => ({ series: s, labels: e }) };
};
export {
  R as default
};
