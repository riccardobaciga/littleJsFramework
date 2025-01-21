const myAppObj = {};

const myApp = new Proxy(myAppObj, {
  set(target, property, value) {
    target[property] = value;
    const allowedTypes = ['string', 'number', 'boolean']
    if (allowedTypes.includes(typeof value)) {
      const tempValue = myApp.labels ? myApp.labels[property] || value : value;
      const list = document.querySelectorAll('[valueOf="' + property + '"]');
      if (list.length > 0) {
        list.forEach((element) => {
          if (element.nodeName === "INPUT") {
            element.value = tempValue;
          } else {
            element.innerHTML = tempValue;
          }
        });
      }
      const list2 = document.querySelectorAll('[classOf="' + property + '"]');
      if (list2.length > 0) {
        list2.forEach((element) => {
          element.className = tempValue;
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

const _ = function (selector) {
  const found = document.querySelectorAll(selector);
  var element = found.length == 1 ? found[0] : found;
  element.hide = function () {
    if ((element instanceof Element)) {
      element.classList.remove("visble");
      element.classList.add("invisible");
    } else if (element.length > 1) {
      element.forEach(function (item) {
        item.classList.remove("visble");
        item.classList.add("invisible");
      });
    }
  };
  element.show = function () {
    if ((element instanceof Element)) {
      element.classList.add("visble");
      element.classList.remove("invisible");
    } else if (element.length > 1) {
      element.forEach(function (item) {
        item.classList.add("visble");
        item.classList.remove("invisible");
      });
    }
  };

  element.onEventDo = function (eventName, functionName, param = null) {
    if ((element instanceof Element)) {
      element.addEventListener(eventName, function (param) {
        (param === null)?functionName():functionName(param);
      });
    } else if (element.length > 1) {
      element.forEach(function (item) {
        item.addEventListener(eventName, function (param) {
          (param === null)?functionName():functionName(param);
        });
      });
    }
  };

  return element;
};
