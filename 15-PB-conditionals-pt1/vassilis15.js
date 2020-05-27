'use strict';

// 1.
let x = 55;
let y = 4;
if (50 <= x <= 99 || 50 <= y <= 99) {
    console.log(true);
}

// 2.
let z = null;
if (50 <= x <= 99 || 50 <=  y <= 99 || 50 <= z <= 99) {
    console.log(true);
}
// 3. 
let a = 1;
let b = 1;
let c = 33;
/* 
 if (Math.max(a , b , c) === a) {
     console.log(true);
 } */
if (a !== b || a !== c || b !== c) {
    if (a > b) {
        if (a > c) {
            console.log(`a is bigger ${a}`);
        }
    }

    if (b > a) {
        if (b > c) {
            console.log(`b is bigger ${b}`);
        }
    }
    if (c > a) {
        if (c > b) {
            console.log(`c is bigger ${c}`);
        }
    }
} else {
    console.log('give different numbers');
}
// 4.
let myString = 'python';
let mySecondString = 'Py' + myString;
let test = mySecondString.substring(0, 2);
// console.log(mySecondString.startsWith('Py'[0,2]));

if (test = 'Py') {
    console.log(myString);
}
// 5.
let numberA = 8;
let numberB = 7;
if (numberA + numberB >= 50 && numberA + numberB <= 80) {
    console.log(65);
} else {
    console.log(80);
}
// 6.

if (numberA + numberB === 8 || numberA - numberB === 8) {
    console.log(true);
}

// 7.
if (numberA === 15 || numberB === 15 || numberA + numberB === 15) {
    console.log(`15 ${true}`);
}
// 8. 
if (numberA % 7 === 0 || numberA % 11 === 0 || numberB % 7 === 0 || numberB % 11 === 0) {
    console.log(true);
}
// 9.
let mySum = numberA + numberB;
if (numberA === numberB) {
    console.log(mySum * 3);
}
//10. 
let difference = numberA - 19;
if (numberB > 19) {
    console.log(difference * 2);
}
// 11.
let firstName = 'Max';
let age = 23;
if (age < 13) {
    console.log(`${firstName} is a child`);
} else if (age >= 13 && age < 20) {
    console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
    console.log(`${firstName} is a young adult`);
} else {
    console.log(`${firstName} is an adult`);

}
// i hope it's not problem that i'm using the same variables for exercises 5 to 10