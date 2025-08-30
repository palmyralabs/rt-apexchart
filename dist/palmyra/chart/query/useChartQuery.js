import { useContext as V, useState as h, useEffect as P } from "react";
import { ChartStoreFactoryContext as C } from "./ChartFactoryContext.js";
const S = (t) => t, q = (t, s) => {
  const n = t.preProcess || S, m = {}, i = t.storeFactory || V(C), [a, c] = h(t.filter), [f, l] = h(t.endPointVars);
  P(() => {
    c(t.filter), l(t.endPointVars);
  }, [t.filter, t.endPointVars]);
  const y = () => ({
    endPointVars: f,
    filter: { ...a, ...m }
  }), d = (r) => {
    s.onData(r);
  }, u = () => {
    s.onError && s.onError();
  }, E = () => {
    d(n(void 0));
  }, o = () => {
    const r = y();
    if (i)
      try {
        i.getChartStore({}, t.endPoint).query(r).then((e) => {
          d(n(e));
        }).catch((e) => {
          var F = e.response ? e.response : e;
          console.error("error while fetching", F), E();
        });
      } catch (e) {
        console.error(e), u();
      }
    else
      console.error("Store is not provided for the Grid"), u();
  };
  return P(() => {
    o();
  }, [a, f]), { fetch: o, setFilter: (r, e = !1) => {
    c(r), e || o();
  }, setEndPointVars: (r, e = !1) => {
    l(r), e || o();
  } };
};
export {
  q as useChartQuery
};
