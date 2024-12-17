import { getAccessor as t, getAccessors as o } from "./common.js";
const K = (e) => {
  const s = y(e), c = n(e);
  var r = { xKeyAccessor: s, yKeyAccessors: c };
  return r;
}, y = (e) => {
  if (e.dataType == "object")
    return (s, c) => c;
  {
    const s = e.xKey || "name";
    return t(s);
  }
}, n = (e) => {
  const s = e.yKey || "value";
  return o(s);
};
export {
  K as default
};
