import { hasDot as s, getValueByKey as c } from "@palmyralabs/ts-utils";
function a(t) {
  return (t instanceof Array ? t : t ? [t] : ["value"]).map((r) => n(r));
}
function n(t) {
  if (t instanceof Function || typeof t == "function")
    return t;
  if (typeof t == "string") {
    const e = t;
    return s(e) ? (r) => c(e, r) : (r) => r[e];
  }
  throw console.error("Invalid attribute accessor", t), Error("Invalid Attribute Accessor  ");
}
export {
  n as getAccessor,
  a as getAccessors
};
