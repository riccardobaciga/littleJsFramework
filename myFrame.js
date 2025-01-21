const myAppObj = {};

const myApp = new Proxy(myAppObj, {
  set(target, property, value) {
    target[property] = value;
    const allowedTypes = ['string', 'number', 'boolean']
    if (allowedTypes.includes(typeof value)) {
      // const tempValue = myApp.labels[property] || value; // Assign translation or key if not found
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
