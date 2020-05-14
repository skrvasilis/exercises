"use strict";

// Q1. 
let allMoney = 6450;
let ticketCost = 15;
let ticketNum = 6450 / 15;
console.log(ticketNum + ' tickets');

// Q2.
let incomePerWeek = 500;
let incomePerYear = incomePerWeek * 52;
console.log('Sylvia\'s\ income per year is ' + incomePerYear + ' dollars');


// Q3 
let percentage = 17 / 30 * 100;
console.log(percentage + '%');

// Q4.
let squareSide = 4.75;
let perimeter = squareSide * 4;
console.log(perimeter + 'cm');

// Q5.
let sideA = 5;
let sideB = 6;
let sideC = 7;
let trianglePerimeter = sideA + sideB + sideC;
console.log(trianglePerimeter + 'cm');

// Q6. 
let squareSideB = 5;
let squareArea = squareSideB ** 2;
console.log(squareArea + ' square meters');

// Q7.
let s = trianglePerimeter / 2;
let triangleArea = Math.sqrt(s * ((s - sideA) * (s - sideB) * (s - sideC)));
console.log(triangleArea + ' square meters');

// Q8.
let cubeSide = 9;
let cubeVolume = cubeSide ** 3;
console.log('the volume of the cube is: '+ cubeVolume);

// Q9.
let billA = 22.35
billA += billA * 10 / 100;
console.log(billA + 'Euros');
let billB = 26.67;
billB += billB * 15 / 100;
console.log(billB + 'Euros');
let billC = 35.92;
billC += billC * 20 / 100;
console.log(billC + 'Euros');

// Q10.
let averageHours = (8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4) / 10;
console.log('Noemy\'s\ average hours per day: ' + averageHours);

// Q11.
let averageAfter = 85 * 6 - 75 - 70 - 85 - 90 - 100;
console.log('score in the sixth test: ' + averageAfter);

//Q12. 
let averageNow = 78 * 8;
let averageMust = 80 * 9;
let minimum = averageMust - averageNow;
console.log('james needs a minimum of ' + minimum + '%');