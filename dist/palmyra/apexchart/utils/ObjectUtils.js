import { useRef as a } from "react";
const i = (e, ...n) => {
  let t = { ...e };
  return n.forEach((r) => {
    c(e) && c(r) && Object.keys(r).forEach((u) => {
      c(r[u]) ? u in e ? t[u] = i(e[u], r[u]) : Object.assign(t, { [u]: r[u] }) : Object.assign(t, { [u]: r[u] });
    });
  }), t;
}, c = (e) => e && typeof e == "object" && !Array.isArray(e), l = (e, n, t = {}, r = /* @__PURE__ */ new WeakSet()) => {
  if (e === n || t.ignoreFunctions && typeof e == "function" && typeof n == "function")
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  if (r.has(e) || r.has(n)) return !0;
  r.add(e), r.add(n);
  const u = Object.keys(e), s = Object.keys(n);
  if (u.length !== s.length) return !1;
  for (const f of u)
    if (!s.includes(f) || !l(e[f], n[f], t, r))
      return !1;
  return !0;
};
function o(e, n, t) {
  return !e || !l(e.deps, t) ? { deps: t, value: n() } : e;
}
function h(e, n) {
  const t = a(null);
  return t.current = o(t.current, e, n), t.current.value;
}
export {
  o as computeDeepMemo,
  l as deepEqual,
  i as extend,
  h as useDeepMemo
};
