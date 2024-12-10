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
  
  // Test Cases
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should Pass
  assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should Fail
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should Pass
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should Fail
  assertArraysEqual([true, false], [true, false]); // Should Pass (boolean values)
  