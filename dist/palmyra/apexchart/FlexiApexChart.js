import { jsx as i } from "react/jsx-runtime";
import { useDataTransformer as x } from "./DataTransformer.js";
import { ReactApexChart as c } from "./ReactApexChart.js";
import { extend as h } from "./utils/ObjectUtils.js";
const j = ({
  transformOptions: t,
  seriesOptions: o,
  enhanceData: e,
  data: m,
  options: s,
  ...r
}) => {
  const n = x(r.type, {
    seriesOptions: o,
    transformOptions: t,
    enhanceData: e
  }), { series: a, ...p } = n.transform(m), f = h(s, p);
  return /* @__PURE__ */ i(c, { options: f, ...r, series: a });
};
export {
  j as FlexiApexChart
};
