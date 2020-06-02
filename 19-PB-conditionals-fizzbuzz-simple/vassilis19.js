'use strict';

let number = 0;

if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
} else if (number % 3 === 0) {
    console.log('Fizz');
} else if (number % 5 === 0) {
    console.log('Buzz');
} else {
    console.log(number);
}


// second solution with switch case super complicated but it works
let numberB = 3;
let modulo = numberB % 15;
// console.log(modulo);
let modulo3 = numberB % 3;
let modulo5 = numberB % 5;

switch (modulo) {
    case 0:
        console.log('FizzBuzz');
        break
    default:
        switch (modulo3) {
            case 0:
                console.log('Fizz');
                break
            default:
                switch (modulo5) {
                    case 0:
                        console.log('Buzz');
                        break
                    default:
                        console.log(numberB);
                }

        }
}