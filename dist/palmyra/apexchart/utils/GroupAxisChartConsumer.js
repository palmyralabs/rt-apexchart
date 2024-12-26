import { extend as A } from "./ObjectUtils.js";
const R = (n, p) => {
  const { seriesOptions: x } = p || {}, y = n.xKeyAccessor, g = n.yKeyAccessors[0], l = n.groupKey;
  var r = {};
  const a = [];
  var o = {};
  return { initialize: () => {
  }, processRow: (c, m, t) => {
    const s = y(c, t), e = l(c, t), u = g(c, t);
    if (r[s]) {
      const i = r[s];
      i[e] = u;
    } else {
      const i = { [e]: u };
      r[s] = i, a.push(s);
    }
    o[e] || (o[e] = { name: e, data: [] });
  }, getResult: () => {
    const c = Object.keys(o);
    return Object.entries(r).map(([t, s]) => {
      c.map((e) => {
        o[e].data.push(s[e]);
      });
    }), { series: Object.values(o).map((t, s) => A(t, x[s])), xaxis: { categories: a } };
  } };
};
export {
  R as default
};
