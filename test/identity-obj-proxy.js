// prettier-ignore
var idObj = new Proxy({}, {
  get: function getter(obj, key) {
    if (key === '__esModule') {
      return false;
    }
    return key;
  }
});

module.exports = idObj;
