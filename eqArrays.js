// check if two arrays are equal
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false; // different lengths = not equal
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false; // Mismatched elements
      }
    }
    return true; // equal
  };
  
  // assertEqual function to compare primitive values
  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  // Test Cases
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
  assertEqual(eqArrays([], []), true); // empty arrays are equal
  assertEqual(eqArrays([1], [1]), true); // Single-element arrays
  assertEqual(eqArrays([1], [2]), false); // Single-element mismatch
  assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // Different lengths  

  // eqArrays are equal it returns true
  // if there is a mismatch or difference, it returns false

  // assertEqual helper function to see if arrays match expected and actual values