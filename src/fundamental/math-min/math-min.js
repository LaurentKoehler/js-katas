/*
Create a function `min` which returns the lowest-valued of the two numbers passed into it,
or NaN if any parameter isn't a number.

* min(0, 0) -> 0
* min(0, 1) -> 0
* min(-1, 0) -> -1
* min("tacos", 0) -> NaN
* min() -> NaN

You can't use Math.min(), the goal is to recreate this function!

*/

// TODO add your code here
// look at the breaking cases
//  return NaN if any parameter isn't a number (typeof)

// create a function named min with 2 numbers as parameters
// compare the numbers and return the lowest one
//simplifie with 3nr


function min(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return NaN
    return a < b ? a : b;

    if (a === b) {
        return a
    }

    if (a < b) {
        return a
    }

    if (a > b) {
        return b
    }



}

// Begin of tests
const assert = require("assert");
const { type } = require("os");

assert.strictEqual(typeof min, "function");
assert.strictEqual(min.length, 2);
assert.strictEqual(min(0, 0), 0);
assert.strictEqual(min(0, 1), 0);
assert.strictEqual(min(-1, 0), -1);
assert.strictEqual(min("tacos", 0), NaN);
assert.strictEqual(min(), NaN);
// End of tests

console.log("🎉");
