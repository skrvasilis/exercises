'use strict';

const order = (arr) => arr.sort((a, b) => a - b);
console.log(order([4, 2, 5, 3, 9, 7, 1, 8, 2, 6]));

const alphabeticalOrder = (arr) => arr.sort();
console.log(alphabeticalOrder(["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"]));


const lengthOrder = (arr) => arr.sort((a, b) => a.length - b.length);
console.log(lengthOrder(["Francisco", "Leon", "Ale", "Jenna", "Bleda", "Hadi", "Martina"]));