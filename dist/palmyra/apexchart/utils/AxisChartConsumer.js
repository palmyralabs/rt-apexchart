const K = (n, f) => {
  const { seriesOptions: y, enhanceData: u } = f, h = n.xKeyAccessor, x = n.yKeyAccessors;
  var l = [];
  return { initialize: () => {
    x.forEach((r, e) => {
      var s;
      const a = (s = n.yLabelAccessors) == null ? void 0 : s[e];
      var t = { ...(y == null ? void 0 : y[e]) || {}, data: [] };
      if (a) {
        const c = a({});
        t.name = c;
      }
      l[e] = t;
    });
  }, processRow: (r, e, a) => {
    const o = h(r, a);
    x.forEach((D, t) => {
      const s = D(r, a);
      var c;
      u ? c = { ...u(o, s, r, t, e, a), x: o, y: s } : c = { x: o, y: s }, l[t].data.push(c);
    });
  }, getResult: () => ({ series: l }) };
};
export {
  K as default
};
