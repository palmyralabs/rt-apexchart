import { getArrayTransformer as n, getObjectTransformer as s } from "@palmyralabs/ts-utils";
import { generateAccessors as o } from "../chart/dataAccessor/AccessorGenerator.js";
import a from "./utils/AxisChartConsumer.js";
import c from "./utils/nonAxisChartConsumer.js";
const m = (t, r) => {
  const e = o(r.transformOptions);
  if (r.getChartConsumer)
    return r.getChartConsumer(e, r);
  switch (t) {
    case "bar":
    case "line":
    case "area":
    case "radar":
    case "scatter":
    case "bubble":
      return a(e, r);
    case "donut":
    case "pie":
    case "polarArea":
      return c(e, r);
    default:
      return a(e, r);
  }
}, d = (t, r) => {
  const e = m(t, r);
  return (r.transformOptions.dataType || "array") == "array" ? n(e) : s(e);
};
export {
  d as useDataTransformer
};
