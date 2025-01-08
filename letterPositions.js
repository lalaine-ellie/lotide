const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
};

const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    }
};

const letterPositions = function (sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      if (char !== " ") {
        if (!results[char]) {
          results[char] = [];
        }
        results[char].push(i);
      }
    }
    return results;
};

const testResults = letterPositions("hello");
assertArraysEqual(testResults["h"], [0]);
assertArraysEqual(testResults["e"], [1]);
assertArraysEqual(testResults["l"], [2,3]);
assertArraysEqual(testResults["o"], [4]);