const myAppObj = {};

const myApp = new Proxy(myAppObj, {
  set(target, property, value) {
    target[property] = value;
    const allowedTypes = ['string', 'number', 'boolean'];
    if (allowedTypes.includes(typeof value)) {
      const tempValue = myApp.labels ? myApp.labels[property] || value : value;
      const list = document.querySelectorAll('[valueOf="' + property + '"]');
      if (list.length > 0) {
        list.forEach((element) => {
          switch (element.nodeName) {
            case "INPUT":
            case "TEXTAREA":
            case "SELECT":
              element.value = tempValue;
              break;
            case "IMG":
              element.src = tempValue;
              break;
            default:
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
