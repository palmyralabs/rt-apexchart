import { jsx as m } from "react/jsx-runtime";
import w from "apexcharts";
import { useRef as O, useEffect as C } from "react";
function y(n, e, c = /* @__PURE__ */ new WeakSet()) {
  if (n === e) return !0;
  if (typeof n != "object" || n === null || typeof e != "object" || e === null)
    return !1;
  if (c.has(n) || c.has(e)) return !0;
  c.add(n), c.add(e);
  const o = Object.keys(n), f = Object.keys(e);
  if (o.length !== f.length) return !1;
  for (let l of o)
    if (!f.includes(l) || !y(n[l], e[l], c))
      return !1;
  return !0;
}
const S = ({
  type: n = "line",
  width: e = "100%",
  height: c = "auto",
  series: o,
  options: f = {},
  ...l
}) => {
  const g = O(null);
  let t = O(null);
  const i = O({});
  C(() => {
    i.current = f;
    const r = g.current;
    return t.current = new w(r, d()), t.current.render(), () => {
      t.current && typeof t.current.destroy == "function" && t.current.destroy();
    };
  }, []), C(() => {
    const r = t.current.w.config.series, p = !y(r, o), u = !y(i.current, f) || c !== t.current.opts.chart.height || e !== t.current.opts.chart.width;
    (p || u) && (p ? u ? t.current.updateOptions(d()) : t.current.updateSeries(o) : t.current.updateOptions(d())), i.current = f;
  }, [f, o, c, e]);
  const d = () => x(l, f, {
    chart: { type: n, height: c, width: e },
    series: o
  }), h = (r) => r && typeof r == "object" && !Array.isArray(r), x = (r, ...p) => {
    r && !h(r) && console.error("target of " + typeof r + " is not supported");
    let u = r ? { ...r } : {};
    return p.forEach((a) => {
      h(a) && Object.keys(a).forEach((s) => {
        h(a[s]) ? s in u ? u[s] = x(u[s], a[s]) : Object.assign(u, { [s]: a[s] }) : Object.assign(u, { [s]: a[s] });
      });
    }), u;
  };
  return /* @__PURE__ */ m("div", { ref: g });
};
export {
  S as ReactApexChart
};
