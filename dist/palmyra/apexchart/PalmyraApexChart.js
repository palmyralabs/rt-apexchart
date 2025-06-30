import { jsx as r } from "react/jsx-runtime";
import { useState as u, useEffect as e } from "react";
import { FlexiApexChart as l } from "./FlexiApexChart.js";
import { useChartQuery as h } from "../chart/query/useChartQuery.js";
const P = (a) => {
  const {
    storeFactory: x,
    endPoint: s,
    endPointVars: n,
    filter: t,
    sortOrder: g,
    ...i
  } = a, [o, c] = u(null), { fetch: f, setFilter: d, setEndPointVars: m } = h(a, {
    onData: c
  });
  if (e(() => {
    d(t);
  }, [t]), e(() => {
    m(n);
  }, [n]), e(() => {
    f();
  }, [s, t]), o === null)
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
  return o.length !== 0 ? /* @__PURE__ */ r(l, { ...i, data: o }) : /* @__PURE__ */ r(l, { ...p, data: [] });
};
export {
  P as PalmyraApexChart
};
