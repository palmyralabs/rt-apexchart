import { jsx as r } from "react/jsx-runtime";
import { forwardRef as m, useState as u, useRef as p, useImperativeHandle as x } from "react";
import { useChartQuery as g } from "../chart/query/useChartQuery.js";
import { FlexiApexChart as i } from "./FlexiApexChart.js";
const E = m(function(e, n) {
  const {
    storeFactory: v,
    endPoint: y,
    endPointVars: P,
    filter: A,
    sortOrder: F,
    ...a
  } = e, [t, l] = u(null), { setFilter: s, setEndPointVars: c } = g(e, {
    onData: l
  }), f = n || p(null);
  if (x(f, () => ({
    setEndPointOptions(o) {
      c(o);
    },
    setFilter(o) {
      console.log(o, "ff"), s(o);
    }
  }), []), t === null)
    return /* @__PURE__ */ r("div", { children: "Loading..." });
  const d = {
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
  return (t == null ? void 0 : t.length) !== 0 ? /* @__PURE__ */ r(i, { ...a, data: t }) : /* @__PURE__ */ r(i, { ...d, data: [] });
});
export {
  E as PalmyraApexChart
};
