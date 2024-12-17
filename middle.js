const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false; // Different lengths mean they cannot be equal
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // Mismatched elements
      }
    }
    return true; // Arrays are equal
  };
  
  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
  };

  const middle = function(array)    {
    const length = array.length;
    if (length <=2) {
        return [];
    }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 !== 0) {
    return [array[middleIndex]];
  }

  return [array[middleIndex - 1], array[middleIndex]];
  };

  // TEST CASES
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []); // Should Pass
assertArraysEqual(middle([1, 2]), []); // Should Pass
assertArraysEqual(middle([1, 2, 3]), [2]); // Should Pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should Pass
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should Pass
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should Pass