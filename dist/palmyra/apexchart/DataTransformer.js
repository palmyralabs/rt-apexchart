import { getArrayTransformer as e, getObjectTransformer as o } from "@palmyralabs/ts-utils";
import { generateAccessors as n } from "../chart/dataAccessor/AccessorGenerator.js";
import { getChartConsumer as a } from "./utils/AxisChartConsumer.js";
const s = (r) => {
  const t = n(r.transformOptions);
  return a(t, r);
}, i = (r) => {
  const t = s(r);
  return (r.transformOptions.dataType || "array") == "array" ? e(t) : o(t);
};
export {
  i as useDataTransformer
};
