const K = (c, x) => {
  const { seriesOptions: r } = x || {}, A = c.xKeyAccessor, y = c.yKeyAccessors;
  var o = [];
  const i = [];
  return { initialize: () => {
    y.forEach((n, a) => {
      var t;
      const s = (t = c.yLabelAccessors) == null ? void 0 : t[a];
      var e = { ...(r == null ? void 0 : r[a]) || {}, data: [] };
      if (s) {
        const g = s({});
        e.name = g;
      }
      o[a] = e;
    });
  }, processRow: (n, a, s) => {
    const u = A(n, s);
    y.forEach((l, e) => {
      const t = l(n, s);
      o[e].data.push(t);
    }), i.push(u);
  }, getResult: () => ({ series: o, xaxis: { categories: i } }) };
};
export {
  K as getCategoryAxisChartConsumer
};
