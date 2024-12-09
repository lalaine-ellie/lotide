const assertEqual = require('./assertEqual');

const head = function(array) {
    return array[0];
    // returns first element of array
};

// TEST CODE
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([42]), 42);
// assertEqual(head([]), undefined);