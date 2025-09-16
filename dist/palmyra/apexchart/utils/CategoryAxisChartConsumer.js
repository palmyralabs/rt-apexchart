const b = (t, l) => {
  const { seriesOptions: x } = l || {}, A = t.xKeyAccessor, n = t.yKeyAccessors;
  var c = [];
  const i = [];
  return { initialize: () => {
    n.forEach((r, e) => {
      const s = t.yLabelAccessors?.[e];
      var a = { ...x?.[e] || {}, data: [] };
      if (s) {
        const o = s({});
        a.name = o;
      }
      c[e] = a;
    });
  }, processRow: (r, e, s) => {
    const y = A(r, s);
    n.forEach((u, a) => {
      const o = u(r, s);
      c[a].data.push(o);
    }), i.push(y);
  }, getResult: () => ({ series: c, xaxis: { categories: i } }) };
};
export {
  b as getCategoryAxisChartConsumer
};
