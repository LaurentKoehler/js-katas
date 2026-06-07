/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

// TODO add your code here
function min(array) {
    if (array === null || array.length === 0) {
        return null
    };

    let minNumber = array[0];

    for (const number of array) {
        if (number < minNumber) {
            minNumber = number
        };
    }
    return minNumber;


}
module.exports = min;
