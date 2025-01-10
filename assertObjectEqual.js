const eqObjects = function (object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (let key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
  
      if (Array.isArray(val1) && Array.isArray(val2)) {
        if (!eqArrays(val1, val2)) {
          return false;
        }
      } else if (val1 !== val2) {
        return false;
      }
    }
  
    return true;
};

const assertObjectsEqual = function (actual, expected) {
    const inspect = require("util").inspect;
  
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

const obj1 = { a: "1", b: 2 };
const obj2 = { b: 2, a: "1" };
const obj3 = { a: "1", b: 3 };

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj1, obj3);