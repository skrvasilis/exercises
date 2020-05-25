'use strict';

// 0. 
let a = true;
let b = false;

// 1.
console.log(a && b); // a is true but b is false so the expected result is false
console.log(a || b); // a is true so the expected result is true
console.log(!(a && b)); // the result of (a && b) is false so the opposite would be true

// 2.
let x = 112;
let y = 34.3;
let z = 1;

// 3.
console.log(x > z && x > y); // x is bigger than y AND z so the expected result is true
console.log(!(x === y)); // (x===y) is false so the opposite would be true 
console.log(z < y || z > x); // z is lower than y, the expected result is true 
console.log(x === z || x !== y); // x is not equal to z but x is unequal to y so the expected result is true
console.log(x >= 10 && y <= 10); // x is bigger than 10 but y is not less or equal to 10 the expected result is false  
console.log(x * z <= 100 || x * y > 100); // x * z is not bigger or equal to 100 but x*y is bigger than 100, expected result is true