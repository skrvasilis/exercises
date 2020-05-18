"use strict";
// 0.
let x = 20;
let y = 30;

// 01.
console.log('lets see if x is equal to y:');
console.log(x === y);
// 02.
console.log('lets see if x is not equal to y');
console.log(x !== y);
// 03. 
console.log('lets see if x is greater that y');
console.log(x > y);
// 04.
console.log('lets see if x is less than or equal to y');
console.log(x <= y);
// 05.
console.log('lets see if y is greater that x');
console.log(y > x);
// 06.
let z = 5;
console.log('here we Multiply z and x, and check whether this result is greater than z added to y.');
console.log((z * x) > (z + y));
// 07.
console.log('here we Subtract z from x and check whether this result is less than y divided by z');
console.log((x - z) < (y / z));
// 08.
console.log('here we check if z,x and y are equal');
console.log(x === z === y);
// 09.
console.log('here we Check whether the remainder of x divided by z and the remainder of y divided by z are equal');
console.log((x % z) === (y % z));
// 10.
console.log('here we check whether z added to x is greater than y minus z');
console.log((z + x) > (y - z));
console.log('lets see the result if we use another operator');
console.log((z + x) === (y - z));