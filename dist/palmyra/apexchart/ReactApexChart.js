import { jsx as m } from "react/jsx-runtime";
import w from "apexcharts";
import { useRef as O, useEffect as C } from "react";
function y(n, t, c = /* @__PURE__ */ new WeakSet()) {
  if (n === t) return !0;
  if (typeof n != "object" || n === null || typeof t != "object" || t === null)
    return !1;
  if (c.has(n) || c.has(t)) return !0;
  c.add(n), c.add(t);
  const s = Object.keys(n), o = Object.keys(t);
  if (s.length !== o.length) return !1;
  for (let p of s)
    if (!o.includes(p) || !y(n[p], t[p], c))
      return !1;
  return !0;
}
const R = ({
  type: n = "line",
  width: t = "100%",
  height: c = "auto",
  series: s,
  options: o = {},
  ...p
}) => {
  const g = O(null);
  let e = O(null);
  const i = O({});
  C(() => {
    i.current = o;
    const r = g.current;
    return e.current = new w(r, d()), e.current.render(), () => {
      e.current && typeof e.current.destroy == "function" && e.current.destroy();
    };
  }, []), C(() => {
    const r = e.current.w.config.series, l = !y(r, s), u = !y(i.current, o) || c !== e.current.opts.chart.height || t !== e.current.opts.chart.width;
    (l || u) && (l ? (u && e.current.updateOptions(d()), e.current.updateSeries(s)) : e.current.updateOptions(d())), i.current = o;
  }, [o, s, c, t]);
  const d = () => x(p, o, {
    chart: { type: n, height: c, width: t },
    series: s
  }), h = (r) => r && typeof r == "object" && !Array.isArray(r), x = (r, ...l) => {
    r && !h(r) && console.error("target of " + typeof r + " is not supported");
    let u = r ? { ...r } : {};
    return l.forEach((a) => {
      h(a) && Object.keys(a).forEach((f) => {
        h(a[f]) ? f in u ? u[f] = x(u[f], a[f]) : Object.assign(u, { [f]: a[f] }) : Object.assign(u, { [f]: a[f] });
      });
    }), u;
  };
  return /* @__PURE__ */ m("div", { ref: g });
};
export {
  R as ReactApexChart
};
