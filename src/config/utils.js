export const isEmpty = (obj) => {
  if (obj instanceof Array) {
    if (obj.length === 0) return true;
  } else if (obj instanceof Object) {
    if (JSON.stringify(obj) === "{}") return true;
  } else {
    if (obj === null || obj === '' || obj === undefined) return true;
    return false
  }
  return false;
}

export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

export const getStore = (name) => {
  if (!name) return;
  return JSON.parse(window.localStorage.getItem(name));
}


export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}


export const getStyle = (element, attr, NumberMode = 'int') => {
  let target;

  if (attr === 'scrollTop') {
    target = element.scrollTop;
  } else if (element.currentStyle) {
    target = element.currentStyle[attr];
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr];
  }

  return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}



