import { jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useState as p, useRef as h, useImperativeHandle as x, useEffect as g } from "react";
import { FlexiApexChart as i } from "./FlexiApexChart.js";
import { useChartQuery as v } from "../chart/query/useChartQuery.js";
const V = m(function(o, n) {
  const {
    storeFactory: P,
    endPoint: A,
    endPointVars: F,
    filter: C,
    sortOrder: D,
    ...a
  } = o, [t, s] = p(null), { fetch: l, setFilter: f, setEndPointVars: c } = v(o, {
    onData: s
  }), d = n || h(null);
  if (x(d, () => ({
    setEndPointOptions(e) {
      c(e);
    },
    setFilter(e) {
      f(e);
    }
  }), []), g(() => {
    l();
  }, []), t === null)
    return /* @__PURE__ */ r("div", { children: "Loading..." });
  const u = {
    ...a,
    noData: {
      text: "No Data Available",
      align: "center",
      verticalAlign: "middle",
      offsetX: 0,
      offsetY: 0,
      style: {
        color: "rgba(var(--dark-color-rgb),0.5)",
        fontSize: "22px",
        fontFamily: void 0
      }
    }
  };
  return (t == null ? void 0 : t.length) !== 0 ? /* @__PURE__ */ r(i, { ...a, data: t }) : /* @__PURE__ */ r(i, { ...u, data: [] });
});
export {
  V as PalmyraApexChart
};
