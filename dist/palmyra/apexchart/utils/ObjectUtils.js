const j = (t, ...b) => {
  let i = { ...t };
  return b.forEach((f) => {
    s(t) && s(f) && Object.keys(f).forEach((n) => {
      s(f[n]) ? n in t ? i[n] = j(t[n], f[n]) : Object.assign(i, { [n]: f[n] }) : Object.assign(i, { [n]: f[n] });
    });
  }), i;
}, s = (t) => t && typeof t == "object" && !Array.isArray(t);
export {
  j as extend
};
