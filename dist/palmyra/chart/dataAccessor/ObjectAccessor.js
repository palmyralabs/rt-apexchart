import { getAccessor as t, getAccessors as y } from "./common.js";
const n = (e) => {
  const r = o(e), s = K(e);
  var c = { xKeyAccessor: r, yKeyAccessors: s };
  return e.groupKey && (c.groupKey = t(e.groupKey)), c;
}, o = (e) => {
  if (e.dataType == "object")
    return (r, s) => s;
  {
    const r = e.xKey || "name";
    return t(r);
  }
}, K = (e) => {
  const r = e.yKey || "value";
  return y(r);
};
export {
  n as default
};
