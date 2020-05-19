'use strict';

// 1.
let myString = 'hi i\'m Georg and i\'m ';
let myNumber = 42;
console.log(myString + myNumber); // the + operator compiles the 2 variables together 

// 2.
let convertString = '1005';
convertString = parseInt(convertString);
console.log(convertString);

let convertSecondString = '10.05';
convertSecondString = parseFloat(convertSecondString);
console.log(convertSecondString);

// 3.
// console.log(30 % 2 = 0 ? '30 is even' : 'is odd');
console.log(`number 30:`);
console.log(30 % 2 === 0 ? 'is even' : 'is odd');
console.log(`number 939:`);
console.log(939 % 2 === 0 ? ' is even' : 'is odd');
console.log(`number 40.9:`);
console.log(40.9 % 2 === 0 ? ' is even' : 'is odd');
