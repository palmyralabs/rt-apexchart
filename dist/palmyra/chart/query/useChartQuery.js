import { useContext as C, useState as u, useEffect as h } from "react";
import { ChartStoreFactoryContext as S } from "./ChartFactoryContext.js";
const g = (t) => t, Q = (t, o) => {
  const s = t.preProcess || g, P = {}, n = t.storeFactory || C(S), [c, i] = u(t.filter), [a, f] = u(t.endPointVars);
  h(() => {
    i(t.filter), f(t.endPointVars);
  }, [t.filter, t.endPointVars]);
  const m = () => ({
    endPointVars: a,
    filter: { ...c, ...P }
  }), d = (e) => {
    o.onData(e);
  }, l = () => {
    o.onError && o.onError();
  }, y = () => {
    d(s(void 0));
  }, E = () => {
    const e = m();
    if (n)
      try {
        n.getChartStore({}, t.endPoint).query(e).then((r) => {
          d(s(r));
        }).catch((r) => {
          var V = r.response ? r.response : r;
          console.error("error while fetching", V), y();
        });
      } catch (r) {
        console.error(r), l();
      }
    else
      console.error("Store is not provided for the Grid"), l();
  }, F = () => {
    E();
  };
  return h(() => {
    F();
  }, [c, a]), { setFilter: (e) => {
    i(e);
  }, setEndPointVars: (e) => {
    f(e);
  } };
};
export {
  Q as useChartQuery
};
