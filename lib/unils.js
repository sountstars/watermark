export const isObj = (opt, type, params) => {
  let _is = typeof opt !== type;
  if (_is) console.error(`${params} 只支持object，当前是 ${typeof opt}!`);
  return _is;
};
