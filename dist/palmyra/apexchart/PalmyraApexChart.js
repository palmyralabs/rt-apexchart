import { jsx as r } from "react/jsx-runtime";
import { useState as u, useEffect as e } from "react";
import { FlexiApexChart as l } from "./FlexiApexChart.js";
import { useChartQuery as h } from "../chart/query/useChartQuery.js";
const P = (n) => {
  const {
    storeFactory: x,
    endPoint: s,
    endPointVars: a,
    filter: o,
    sortOrder: g,
    ...i
  } = n, [t, c] = u(null), { fetch: f, setFilter: d, setEndPointVars: m } = h(n, {
    onData: c
  });
  if (e(() => {
    d(o);
  }, [o]), e(() => {
    m(a);
  }, [a]), e(() => {
    f();
  }, [s, o]), t === null)
    return /* @__PURE__ */ r("div", { children: "Loading..." });
  const p = {
    ...i,
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
  return (t == null ? void 0 : t.length) !== 0 ? /* @__PURE__ */ r(l, { ...i, data: t }) : /* @__PURE__ */ r(l, { ...p, data: [] });
};
export {
  P as PalmyraApexChart
};
