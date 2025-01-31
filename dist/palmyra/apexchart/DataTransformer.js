import { getArrayTransformer as s, getObjectTransformer as n } from "@palmyralabs/ts-utils";
import { generateAccessors as o } from "../chart/dataAccessor/AccessorGenerator.js";
import t from "./utils/AxisChartConsumer.js";
import c from "./utils/nonAxisChartConsumer.js";
const m = (a, r) => {
  const e = o(r.transformOptions);
  if (r.getChartConsumer)
    return r.getChartConsumer(e, r);
  switch (a) {
    case "bar":
    case "line":
    case "area":
    case "radar":
    case "scatter":
    case "bubble":
      return t(e, r);
    case "donut":
    case "pie":
    case "polarArea":
    case "radialBar":
      return c(e, r);
    default:
      return t(e, r);
  }
}, d = (a, r) => {
  const e = m(a, r);
  return (r.transformOptions.dataType || "array") == "array" ? s(e) : n(e);
};
export {
  d as useDataTransformer
};
