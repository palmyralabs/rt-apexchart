import { jsx as x } from "react/jsx-runtime";
import C from "apexcharts";
import { useRef as O, useEffect as m } from "react";
import { deepEqual as g } from "./utils/ObjectUtils.js";
function E(p, o) {
  return g(p, o, { ignoreFunctions: !0 });
}
const R = ({
  type: p = "line",
  width: o = "100%",
  height: i = "auto",
  series: u,
  options: s = {},
  ...b
}) => {
  const h = O(null);
  let t = O(null);
  const a = O({});
  m(() => {
    a.current = s;
    const r = h.current;
    return t.current = new C(r, l()), t.current.render(), () => {
      t.current && typeof t.current.destroy == "function" && t.current.destroy();
    };
  }, []), m(() => {
    const r = t.current.w.config.series, f = !E(r, u), e = !E(a.current, s) || i !== t.current.opts.chart.height || o !== t.current.opts.chart.width;
    (f || e) && (f ? (e && t.current.updateOptions(l()), t.current.updateSeries(u)) : t.current.updateOptions(l())), a.current = s;
  }, [s, u, i, o]);
  const l = () => j(b, s, {
    chart: { type: p, height: i, width: o },
    series: u
  }), d = (r) => r && typeof r == "object" && !Array.isArray(r), j = (r, ...f) => {
    r && !d(r) && console.error("target of " + typeof r + " is not supported");
    let e = r ? { ...r } : {};
    return f.forEach((c) => {
      d(c) && Object.keys(c).forEach((n) => {
        d(c[n]) ? n in e ? e[n] = j(e[n], c[n]) : Object.assign(e, { [n]: c[n] }) : Object.assign(e, { [n]: c[n] });
      });
    }), e;
  };
  return /* @__PURE__ */ x("div", { ref: h });
};
export {
  R as ReactApexChart
};
