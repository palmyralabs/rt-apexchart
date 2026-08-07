import { jsx as c } from "react/jsx-runtime";
import { useDataTransformer as i } from "./DataTransformer.js";
import { ReactApexChart as u } from "./ReactApexChart.js";
import { useDeepMemo as a, extend as y } from "./utils/ObjectUtils.js";
const M = ({
  transformOptions: o,
  seriesOptions: t,
  enhanceData: e,
  data: m,
  options: n,
  getChartConsumer: f,
  ...r
}) => {
  const { series: p, ...s } = a(() => i(r.type, {
    seriesOptions: t,
    transformOptions: o,
    enhanceData: e,
    getChartConsumer: f
  }).transform(m), [r.type, m, o, t, e, f]), x = y(n, s);
  return /* @__PURE__ */ c(u, { options: x, ...r, series: p });
};
export {
  M as FlexiApexChart
};
