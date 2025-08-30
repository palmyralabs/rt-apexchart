import { jsx as e } from "react/jsx-runtime";
import { forwardRef as m, useState as u, useRef as p, useImperativeHandle as h } from "react";
import { useChartQuery as x } from "../chart/query/useChartQuery.js";
import { FlexiApexChart as i } from "./FlexiApexChart.js";
const E = m(function(o, n) {
  const {
    storeFactory: v,
    endPoint: y,
    endPointVars: P,
    filter: A,
    sortOrder: F,
    ...a
  } = o, [t, s] = u(null), { setFilter: l, setEndPointVars: f } = x(o, {
    onData: s
  }), c = n || p(null);
  if (h(c, () => ({
    setEndPointOptions(r) {
      f(r);
    },
    setFilter(r) {
      l(r);
    },
    refresh() {
    }
  }), []), t === null)
    return /* @__PURE__ */ e("div", { children: "Loading..." });
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
  return (t == null ? void 0 : t.length) !== 0 ? /* @__PURE__ */ e(i, { ...a, data: t }) : /* @__PURE__ */ e(i, { ...d, data: [] });
});
export {
  E as PalmyraApexChart
};
