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

  const without = function(source, itemsToRemove) {
    return source.filter(item => itemsToRemove.includes(item));
  };

  const words = ["hello", "world", "lighthouse"];
  without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
  assertArraysEqual(words, ["hello", "world", "lighthouse"]);
  
  // Test Cases
  assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should Pass
  assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should Fail
  assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should Pass
  assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should Fail
  assertArraysEqual([true, false], [true, false]); // Should Pass (boolean values)