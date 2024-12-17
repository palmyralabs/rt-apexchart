import { useRef as l, useContext as y } from "react";
import { ChartStoreFactoryContext as F } from "./ChartFactoryContext.js";
const v = (e, o) => {
  const s = l(e.endPointVars || {}), c = l(e.filter || {}), d = {}, a = e.storeFactory || y(F), h = () => {
    const r = s.current, t = c.current;
    return {
      endPointVars: r,
      filter: { ...t, ...d }
    };
  }, i = (r) => {
    o.onData(r);
  }, f = () => {
    o.onError && o.onError();
  }, m = () => {
    i(void 0);
  }, n = () => {
    const r = h();
    if (a)
      try {
        a.getChartStore({}, e.endPoint).query(r).then((t) => {
          i(t);
        }).catch((t) => {
          var u = t.response ? t.response : t;
          console.error("error while fetching", u), m();
        });
      } catch (t) {
        console.error(t), f();
      }
    else
      console.error("Store is not provided for the Grid"), f();
  };
  return { fetch: n, setFilter: (r, t = !1) => {
    c.current = r, t || n();
  }, setEndPointVars: (r, t = !1) => {
    s.current = r, t || n();
  } };
};
export {
  v as useChartQuery
};
