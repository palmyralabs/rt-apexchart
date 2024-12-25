import { jsx as x } from "react/jsx-runtime";
import { useDataTransformer as c } from "./DataTransformer.js";
import { ReactApexChart as h } from "./ReactApexChart.js";
import { extend as u } from "./utils/ObjectUtils.js";
const l = ({
  transformOptions: t,
  seriesOptions: o,
  enhanceData: e,
  data: m,
  options: s,
  getChartConsumer: n,
  ...r
}) => {
  const a = c(r.type, {
    seriesOptions: o,
    transformOptions: t,
    enhanceData: e,
    getChartConsumer: n
  }), { series: p, ...f } = a.transform(m), i = u(s, f);
  return /* @__PURE__ */ x(h, { options: i, ...r, series: p });
};
export {
  l as FlexiApexChart
};
