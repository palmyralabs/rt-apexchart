import { jsx as m } from "react/jsx-runtime";
import { useDataTransformer as n } from "./DataTransformer.js";
import { ReactApexChart as f } from "./ReactApexChart.js";
const h = ({
  transformOptions: r,
  seriesOptions: t,
  enhanceData: e,
  data: o,
  ...s
}) => {
  const a = n({
    seriesOptions: t,
    transformOptions: r,
    enhanceData: e
  }).transform(o);
  return /* @__PURE__ */ m(f, { ...s, series: a });
};
export {
  h as FlexiApexChart
};
