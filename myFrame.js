const myAppObj = {};

const myApp = new Proxy(myAppObj, {
  set(target, property, value) {
    target[property] = value;
    if (typeof value !== "object") {
      const list = document.querySelectorAll('[valueOf="' + property + '"]');
      if (list.length > 0) {
        list.forEach((element) => {
          if (element.nodeName === "INPUT" || element.nodeName === "SELECT") {
            element.value = value;
          } else {
            element.innerHTML = value;
          }
        });
      }
      const list2 = document.querySelectorAll('[classOf="' + property + '"]');
      if (list2.length > 0) {
        list2.forEach((element) => {
          element.className = value;
        });
      }
    }
    return true;
  },
  deleteProperty(target, property) {
    delete target[property];
    console.log("delete target[property]");
    return true;
  },
});

var _ = function (selector) {
  const result = document.querySelectorAll(selector);
  return result.length == 1 ? result[0] : result;
};
