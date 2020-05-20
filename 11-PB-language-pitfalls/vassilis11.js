'use strict';


// 1.
// NaN stands for Not a Number

console.log(`is Hello NaN: ${isNaN('Hello')}`);
console.log(`is 3 NaN: ${isNaN(3)}`);
console.log(`this is the type of NaN: ${typeof NaN}`);


// 2.
let myNumber = 0.1 * 0.2;
myNumber = myNumber.toFixed(2);
console.log(myNumber);
myNumber = parseFloat(myNumber); // if we want to make it a number again
console.log(myNumber);

// 3.
console.log(`infinity divided by 0:${Infinity / 0}`);
console.log(`infinity divided by infinity:${Infinity / Infinity}`);
console.log(`1 divided by 0:${1 / 0}`); // when we divide something with 0 we always get infinity
