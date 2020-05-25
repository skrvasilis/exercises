'use strict';

// 1.
console.log(3 == '3'); // this is true. the number is converted to a string and they have the same value
console.log(3 === '3'); // this is false. they are different types of variables
// the difference is that the strict comparison checks also the type of the variables but the loose comparison checks only the value
// i would use the strict comparison in order to avoid mistakes
// = assign a value to the variable, we cannot use it to compare 

// 2.
let myVar= true;
console.log(!(myVar) ? true : false);

// 3.
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name); // the result would be Stacey, given name is empty so it goes to the second variable witch is firstName witch is assigned with the value of Stacey and this is gonna be the result. this operator gives us the first non empty variable/value that it meets 
