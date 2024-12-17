import r from "./ObjectAccessor.js";
import s from "./KeyValueAccessor.js";
const a = (e) => e.dataType == "keyValue" ? s() : r(e);
export {
  a as generateAccessors
};
