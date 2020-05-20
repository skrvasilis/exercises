'use strict';

// 1. a.
console.log('the lowest number is: ' + Math.min(-1, 0, 1, 2, 3, 4));

// 1. b.
console.log(`the highest number is: ${Math.max(-1, 0, 1, 2, 3 ,4)}`);

// 2. a.
console.log(`we round up number 3321.32321: ${Math.ceil(3321.32321)}`);
console.log(`we round up number 326.76: ${Math.ceil(326.76)}`);
console.log(`we round up number 76788.7: ${Math.ceil(76788.7)}`);
console.log(`we round up number -9.78: ${Math.ceil(-9.78)}`);
console.log(`we round up number 43.342: ${Math.ceil(43.342)}`);

// 2. b.
console.log(`we round down number 3321.32321: ${Math.floor(3321.32321)}`);
console.log(`we round down number 326.76: ${Math.floor(326.76)}`);
console.log(`we round down number 76788.7: ${Math.floor(76788.7)}`);
console.log(`we round down number -9.78: ${Math.floor(-9.78)}`);
console.log(`we round down number 28.329: ${Math.floor(28.329)}`);

// 3.
let random = Math.random(); // we get a number between 0 and 1
let dice = (random + 0.1) * 5; // we make sure that our number cannot be 0 and if we multiply with 5 we get a number between 0.1 and ~5.5
console.log(Math.ceil(dice)); // if we round up the result we get a number between 1 and 6 