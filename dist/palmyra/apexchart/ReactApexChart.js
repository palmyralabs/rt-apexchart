import { jsx as m } from "react/jsx-runtime";
import w from "apexcharts";
import { useRef as O, useEffect as C } from "react";
function y(n, e, c = /* @__PURE__ */ new WeakSet()) {
  if (n === e) return !0;
  if (typeof n != "object" || n === null || typeof e != "object" || e === null)
    return !1;
  if (c.has(n) || c.has(e)) return !0;
  c.add(n), c.add(e);
  const f = Object.keys(n), s = Object.keys(e);
  if (f.length !== s.length) return !1;
  for (let l of f)
    if (!s.includes(l) || !y(n[l], e[l], c))
      return !1;
  return !0;
}
const S = ({
  type: n = "line",
  width: e = "100%",
  height: c = "auto",
  series: f,
  options: s = {},
  ...l
}) => {
  const g = O(null);
  let t = O(null);
  const i = O({});
  C(() => {
    i.current = s;
    const r = g.current;
    return t.current = new w(r, h()), t.current.render(), () => {
      t.current && typeof t.current.destroy == "function" && t.current.destroy();
    };
  }, []), C(() => {
    const r = t.current.w.config.series, p = !y(r, f), a = !y(i.current, s) || c !== t.current.opts.chart.height || e !== t.current.opts.chart.width;
    (p || a) && (p ? a ? t.current.updateOptions(h()) : t.current.updateSeries(f) : t.current.updateOptions(h())), i.current = s;
  }, [s, f, c, e]);
  const h = () => x(l, s, {
    chart: { type: n, height: c, width: e },
    series: f
  }), d = (r) => r && typeof r == "object" && !Array.isArray(r), x = (r, ...p) => {
    let a = { ...r };
    return p.forEach((o) => {
      d(r) && d(o) && Object.keys(o).forEach((u) => {
        d(o[u]) ? u in r ? a[u] = x(r[u], o[u]) : Object.assign(a, { [u]: o[u] }) : Object.assign(a, { [u]: o[u] });
      });
    }), a;
  };
  return /* @__PURE__ */ m("div", { ref: g });
};
export {
  S as ReactApexChart
};
