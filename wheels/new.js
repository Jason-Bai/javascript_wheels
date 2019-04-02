/**
 * 实现一个new操作符
 * @param {Function} fn
 */
function New(fn, ...args) {
  var res = {};
  var ret;

  /* eslint no-proto: 0 */
  if (fn && fn.prototype) {
    res.__proto__ = fn.prototype;

    ret = fn.apply(res, args);

    if ((typeof ret === 'object' || typeof ret === 'function') && ret) {
      return ret;
    }
  }

  return res;
}

module.exports = New;
