'use strict';

// 1.
const myNumbers = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        console.log('They are numbers');
        for (let i = 1; i <= b; i++) {
            console.log(a ** i);
        }

    } else {
        console.log('They are not both numbers');
    }
}

myNumbers(2, 8);

// 2.
const myFruit = 'Apple';
const printFavoriteFruit = (fruit) => {
    fruit = 'Peach';
    console.log('My favorite fruit is:', fruit);
}
printFavoriteFruit(myFruit);

// 3. 
let result = 0;

function exponent(a, b) {
    //    let result = a**b;
    result = a ** b;
    console.log('inside the function ', result);
}

exponent(2, 5);
console.log('outside of the function', result);

// a. If i declare the variable outside of the function(globally) and then assign it inside then i can call it outside as well
// b. if i declare the variable inside the function i cannot call it outside cause it's only existing in the local scope
// c. i can declare the variable globally and then redeclare it inside the function locally, then i can use the variable outside but the value is gonna change only locally 