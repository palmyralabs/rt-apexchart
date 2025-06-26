import { jsx as e } from "react/jsx-runtime";
import { useState as m, useEffect as o } from "react";
import { FlexiApexChart as u } from "./FlexiApexChart.js";
import { useChartQuery as h } from "../chart/query/useChartQuery.js";
const F = (n) => {
  const {
    storeFactory: p,
    endPoint: i,
    endPointVars: a,
    filter: t,
    sortOrder: x,
    ...s
  } = n, [r, d] = m([]), { fetch: l, setFilter: f, setEndPointVars: c } = h(n, {
    onData: d
  });
  return o(() => {
    f(t);
  }, [t]), o(() => {
    c(a);
  }, [a]), o(() => {
    l();
  }, [i, t]), r === null ? /* @__PURE__ */ e("div", { children: "Loading..." }) : r.length === 0 ? /* @__PURE__ */ e("div", { children: "No data available" }) : /* @__PURE__ */ e(u, { ...s, data: r });
};
export {
  F as PalmyraApexChart
};
