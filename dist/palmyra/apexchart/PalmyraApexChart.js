import { jsx as p } from "react/jsx-runtime";
import { useState as d, useEffect as r } from "react";
import { FlexiApexChart as u } from "./FlexiApexChart.js";
import { useChartQuery as x } from "../chart/query/useChartQuery.js";
const A = (o) => {
  const {
    storeFactory: h,
    endPoint: s,
    endPointVars: e,
    filter: t,
    sortOrder: l,
    ...a
  } = o, [n, i] = d([]), { fetch: m, setFilter: f, setEndPointVars: c } = x(o, {
    onData: i
  });
  return r(() => {
    f(t);
  }, [t]), r(() => {
    c(e);
  }, [e]), r(() => {
    m();
  }, [s, t]), /* @__PURE__ */ p(u, { ...a, data: n });
};
export {
  A as PalmyraApexChart
};
