import { jsx as m } from "react/jsx-runtime";
import w from "apexcharts";
import { useRef as O, useEffect as C } from "react";
function y(n, t, c = /* @__PURE__ */ new WeakSet()) {
  if (n === t) return !0;
  if (typeof n != "object" || n === null || typeof t != "object" || t === null)
    return !1;
  if (c.has(n) || c.has(t)) return !0;
  c.add(n), c.add(t);
  const o = Object.keys(n), f = Object.keys(t);
  if (o.length !== f.length) return !1;
  for (let p of o)
    if (!f.includes(p) || !y(n[p], t[p], c))
      return !1;
  return !0;
}
const R = ({
  type: n = "line",
  width: t = "100%",
  height: c = "auto",
  series: o,
  options: f = {},
  ...p
}) => {
  const g = O(null);
  let e = O(null);
  const i = O({});
  C(() => {
    i.current = f;
    const r = g.current;
    return e.current = new w(r, d()), e.current.render(), () => {
      e.current && typeof e.current.destroy == "function" && e.current.destroy();
    };
  }, []), C(() => {
    const r = e.current.w.config.series, l = !y(r, o), u = !y(i.current, f) || c !== e.current.opts.chart.height || t !== e.current.opts.chart.width;
    (l || u) && (l ? (u && e.current.updateOptions(d()), e.current.updateSeries(o)) : e.current.updateOptions(d())), i.current = f;
  }, [f, o, c, t]);
  const d = () => x(p, f, {
    chart: { type: n, height: c, width: t }
  }), h = (r) => r && typeof r == "object" && !Array.isArray(r), x = (r, ...l) => {
    r && !h(r) && console.error("target of " + typeof r + " is not supported");
    let u = r ? { ...r } : {};
    return l.forEach((a) => {
      h(a) && Object.keys(a).forEach((s) => {
        h(a[s]) ? s in u ? u[s] = x(u[s], a[s]) : Object.assign(u, { [s]: a[s] }) : Object.assign(u, { [s]: a[s] });
      });
    }), u;
  };
  return /* @__PURE__ */ m("div", { ref: g });
};
export {
  R as ReactApexChart
};
