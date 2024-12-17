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

  const flatten = function(array)   {
    let flattened = [];
    for (let element of array)  {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else  {
            flattened.push(element);
        }
    }
    return flattened;
  };

  // TEST CASES
  // Test Cases for flatten
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2], 3, 4, [5], []])); // => [1, 2, 3, 4, 5]

// Test Cases using assertArraysEqual
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // Should Pass
assertArraysEqual(flatten([[1], [2], [3]]), [1, 2, 3]); // Should Pass
assertArraysEqual(flatten([]), []); // Should Pass
assertArraysEqual(flatten([1, [2], 3, [4, 5], [6]]), [1, 2, 3, 4, 5, 6]); // Should Pass