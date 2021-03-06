'use strict';
let sum = 0;
// 1.
for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum);

// 2. 
for (let i = 1; i <= 5; i++) {
    switch (i) {
        case 1:
            console.log(`There is one bottle of beer on the wall `);
            break
        case 2:
            console.log(`There are two bottles of beer on the wall `);
            break
        case 3:
            console.log(`There are three bottles of beer on the wall `);
            break
        case 4:
            console.log(`There are four bottles of beer on the wall `);
            break
        case 5:
            console.log(`There are five bottles of beer on the wall `);
    }
}
// 2. Martina
for (let bottles = 1; bottles <= 5; bottles++) {
    if (bottles > 1) {
        let number = '';
        switch (bottles) {
            case 2:
                number = 'two';
                break
            case 3:
                number = 'three';
                break
            case 4:
                number = 'four';
                break
            case 5:
                number = 'five';
                break
            default:
                console.log('error case');
        }
        console.log(`there are ${number} bottles on the wall`);
    } else {
        console.log('there is one bottle of beer on the wall');
    }
}

// 3. 
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, ' is even');
    } else {
        console.log(i, ' is odd');
    }
}

// 4.

for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i}*${j} = ${i *j}`);
    }

    console.log(`${i} * 9 = ${i *9 }`);
}
// 5. 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// 6. 
let sum6 = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum6 += i;
    } else {
        continue; // goes to the next 
    }
}
console.log(sum6);

// 7. 
let hundred = '';
for (let i = 100; i <= 1000; i += 100) {
    console.log('7.a ' + i);


    hundred = hundred + ' ' + i;
}
console.log(hundred);

let multiple2 = ''
for (let j = 1; j <= 128; j = j * 2) {
    console.log('7.b ' + j);



    multiple2 = multiple2 + ' ' + j;
}
console.log(multiple2);

let plus2 = '';
for (let i = 0; i <= 10; i += 2) {
    console.log('7.c ', i);




    plus2 = plus2 + ' ' + i;
}
console.log(plus2);

let plus3 = '';
for (let i = 3; i <= 15; i += 3) {
    console.log('7.d ', i);


    plus3 = plus3 + ' ' + i;
}
console.log(plus3);

let minus = '';
for (let i = 9; i >= 0; i--) {
    console.log('7.e ', i);


    minus = minus + ' ' + i;
}
console.log(minus);

let many = '';
for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log('7.f ', i);



        many = many + ' ' + i;
    }
}
console.log(many);

let toFour = '';
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 4; j++) {
        console.log('7. j', j);


        toFour = toFour + ' ' + j;
    }
}
console.log(toFour);
// 8.
console.log('ex.8');
let myString8 = 'mdam';
let myLength = myString8.length;
let palindrome = false;
for (let i = 1, first = '', last = ''; i <= myLength; i++) {
    //  console.log(myString[myString.length - i]);
    //  console.log(myString[i-1]);
    last = myString8[myString8.length - i];
    first = myString8[i - 1];
    if (first === last) {
        palindrome = true;
    } else {
        palindrome = false;
        break; // this would stop the loop
    }
}
console.log(palindrome);

// second solution


let inputString = "anna";
let compareString = "";
for (let i = 1; i <= inputString.length; i++) {
    compareString += inputString[inputString.length - i];
    // console.log(compareString);
}
console.log(
    inputString === compareString ?
    `'${inputString}' is a palindrome. :)` :
    `'${inputString}' is not a palindrome. :(`
);