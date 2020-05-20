'use strict';

// 1.
let myString = 'hi i\'m Georg and i\'m ';
let myNumber = 42;
console.log(myString + myNumber); // the + operator compiles the 2 variables together. in this case it creates a string.

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
console.log(30 % 2 === 0  ? 'is even' : 'is odd');
console.log(`number 939:`);
console.log(939 % 2 === 0 ? ' is even' : 'is odd');
console.log(`number 40.9:`);
console.log(40.9 % 2 === 0 ? ' is even' : 'is odd');
let result = 30 % 2;
console.log(result);
console.log(result ? 'it is not zero' : 'it is zero'); 
// the result is 0 that means false so we get the second result
let result2 = 41 % 2;
console.log(result2 ? 'it is not zero' : 'it is zero');
// the result is not zero so it's true so we get the first result
console.log(!result2 ? 'it is not zero' : 'it is zero');
// if we put ! before our condition it turns it opposite.
console.log(0 ? 'it is not zero' : 'it is zero');
