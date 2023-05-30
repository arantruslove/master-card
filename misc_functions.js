/**Module that contains miscellaneous functions. */

export function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj; // return primitive values as is
    }
  
    let copy;
  
    if (Array.isArray(obj)) {
      copy = [];
      for (let i = 0; i < obj.length; i++) {
        copy[i] = deepCopy(obj[i]);
      }
    } else {
      copy = {};
      for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = deepCopy(obj[key]);
        }
      }
    }
  
    return copy;
  }
