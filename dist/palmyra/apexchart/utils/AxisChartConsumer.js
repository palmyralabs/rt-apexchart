const K = (o, x) => {
  const { seriesOptions: D, enhanceData: l } = x, f = o.xKeyAccessor, u = o.yKeyAccessors;
  var n = [];
  return { initialize: () => {
    u.forEach((c, a) => {
      const s = o.yLabelAccessors?.[a];
      var e = { ...D?.[a] || {}, data: [] };
      if (s) {
        const t = s({});
        e.name = t;
      }
      n[a] = e;
    });
  }, processRow: (c, a, s) => {
    const r = f(c, s);
    u.forEach((i, e) => {
      const t = i(c, s);
      var y;
      l ? y = { ...l(r, t, c, e, a, s), x: r, y: t } : y = { x: r, y: t }, n[e].data.push(y);
    });
  }, getResult: () => ({ series: n }) };
};
export {
  K as default
};
