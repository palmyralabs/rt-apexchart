import { useRef as d, useContext as P } from "react";
import { ChartStoreFactoryContext as F } from "./ChartFactoryContext.js";
const p = (e) => e, V = (e, o) => {
  const n = d(e.endPointVars || {}), c = d(e.filter || {}), a = e.preProcess || p, h = {}, i = e.storeFactory || P(F), m = () => {
    const r = n.current, t = c.current;
    return {
      endPointVars: r,
      filter: { ...t, ...h }
    };
  }, f = (r) => {
    o.onData(r);
  }, u = () => {
    o.onError && o.onError();
  }, y = () => {
    f(a(void 0));
  }, s = () => {
    const r = m();
    if (i)
      try {
        i.getChartStore({}, e.endPoint).query(r).then((t) => {
          f(a(t));
        }).catch((t) => {
          var l = t.response ? t.response : t;
          console.error("error while fetching", l), y();
        });
      } catch (t) {
        console.error(t), u();
      }
    else
      console.error("Store is not provided for the Grid"), u();
  };
  return { fetch: s, setFilter: (r, t = !1) => {
    c.current = r, t || s();
  }, setEndPointVars: (r, t = !1) => {
    n.current = r, t || s();
  } };
};
export {
  V as useChartQuery
};
