import { jsx as n } from "react/jsx-runtime";
import { useDataTransformer as s } from "./DataTransformer.js";
import { ReactApexChart as f } from "./ReactApexChart.js";
const h = ({
  transformOptions: t,
  seriesOptions: o,
  enhanceData: e,
  data: m,
  ...r
}) => {
  const a = s(r.type, {
    seriesOptions: o,
    transformOptions: t,
    enhanceData: e
  }).transform(m);
  return /* @__PURE__ */ n(f, { ...r, ...a });
};
export {
  h as FlexiApexChart
};
