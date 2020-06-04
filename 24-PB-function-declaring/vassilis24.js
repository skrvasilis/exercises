'use strict';

// 1.
function multipliesFunction(y, x) {
    console.log(x * y);
}
multipliesFunction(2, 4);

// 2.
const multipliesNumbers = function (x, y) {
    console.log(x * y);
}
multipliesNumbers(3, 5);

// 3.
const multipliesArrow = (x, y) => {
    console.log(x * y);
}
multipliesArrow(4, 6);

// 4.
function remainderFunction(a, b) {
    console.log(a % b);
}
remainderFunction(12, 5);

// second way
const remainderNUmbers = function (a, b) {
    console.log(a % b);
}
remainderNUmbers(20, 4);

// arrow way
const remainderArrow = (a, b) => {
    console.log(a % b);
}
remainderArrow(13, 3);