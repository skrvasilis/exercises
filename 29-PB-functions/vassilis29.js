'use strict';

// 1.
const addUp = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

const addUp4 = addUp(4);
console.log(addUp4);
const addUp13 = addUp(13);
console.log(addUp13)
const addUp600 = addUp(600);
console.log(addUp600);

// 2.
const sumOfCubers = (a, b, c) => {
    if (a === undefined) {
        a = 0;
    }
    if (b === undefined) {
        b = 0;
    }
    if (c === undefined) {
        c = 0;
    }
    return a ** 3 + b ** 3 + c ** 3;
}
const cubers1 = sumOfCubers(1, 5, 9);
console.log(cubers1);
const cubers2 = sumOfCubers(2);
console.log(cubers2);
const cubers0 = sumOfCubers();
console.log(cubers0);

// 3.
const dictionary = (myString, myWord) => {
    const myStringLength = myString.length;
    let myNewString = '';
    myNewString = myWord;
    // console.log(myString);
    // console.log(myNewString.substring(-1,myStringLength));
    if (myString === myNewString.substring(-1, myStringLength)) {
        return true
    } else {
        return false
    }
}
console.log('string check ' + dictionary("bu", "button"));
console.log('string check ' + dictionary("tri", "triplet"));
console.log('string check ' + dictionary("beau", "pastry"));


// 4.
const lessThanEqualToZero = (x) => {
    if (x > 0) {
        return false;
    } else {
        return true;
    }
}
console.log(lessThanEqualToZero(3));
console.log(lessThanEqualToZero(-0));
console.log(lessThanEqualToZero(-4));
console.log(lessThanEqualToZero(10));

// 5.
const occurrences = (myString, letter) => {
    let result = 0;
    let myNewString = '';
    myNewString = myString;
    for (let i = 0; i < myNewString.length; i++) {
        // console.log(myNewString[i]);
        if (myNewString[i] === letter) {
            result += 1;
        }
    }
    return result;
}
occurrences('this is a string', 'i');
let firstCheck = occurrences('this is a string', 'i');
console.log('occurrences ' + firstCheck);
let secondCheck = occurrences('more and more and more oo', 'o');
console.log('occurrences ' + secondCheck);

//6.
const calculateBaseToExponent = (x, y) => {
    return x ** y;
}
console.log(calculateBaseToExponent(3, 3));
console.log(calculateBaseToExponent(5, 5));
console.log(calculateBaseToExponent(10, 10));

// 7.
const dogAge = (dogYears) => {
    return dogYears * 7;
}
const dog4 = dogAge(4);
console.log(`your dog is ${dog4} years old in human years!`)


// 8.
const calcSupply = (age, amount) => {
    const yearsLeft = 80 - age;
    const restAmount = (amount * 365) * yearsLeft;
    return `You will need ${restAmount} of your favorite snack (${amount} per day) to last you till the age of 80`;
}
const mySnack = calcSupply(25, 2);
console.log(mySnack);
const yourSnack = calcSupply(40, 3);
console.log(yourSnack);


// 9.
const isWaldoHere = (myString) => {
    let myNewString = '';
    myNewString = myString;
    // console.log(myNewString);
    return myNewString.includes('waldo') || myNewString.includes('Waldo');

}

const myResult = isWaldoHere('i found Waldo');
console.log('is waldo here? ' + myResult);
console.log('is waldo here? ' + isWaldoHere('is there wal here'));
console.log('is waldo here? ' + isWaldoHere('waldo is here'));



// 10.
const equalSlices = (slices, recipients, persons) => {
    if (persons * recipients <= slices) {
        return true;
    } else {
        return false;
    }
}
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// 11.
const XO = (myString) => {
    let myNewString = '';
    myNewString = myString;
    myNewString = myNewString.toLocaleLowerCase();
    console.log(myNewString);
    const myStringLength = myNewString.length;
    let resultO = 0;
    let resultX = 0;
    for (let i = 0; i <= myStringLength; i++) {
        if (myNewString[i] === 'o') {
            resultO += 1;
        } else if (myNewString[i] === 'x') {
            resultX += 1;
        }

    }
    if (resultO === resultX) {
        return true;
    } else {
        return false;
    }

}

console.log('XO: ' + XO('oOxX'));
console.log('XO: ' + XO('ooXXm'));
console.log('XO: ' + XO('ypypypy'));
console.log('XO: ' + XO('xooxx'));
console.log('XO: ' + XO('zzoo'));

// 12. 
const isPrime = (x) => {
    if (x < 2) {
        return false;
    } else {
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                // console.log(i);
                return false;
            }
        }
    }
    return true;
}
console.log('is it prime: ', isPrime(7));
console.log('is it prime: ', isPrime(9));
console.log('is it prime: ', isPrime(10));


// 13.
const validateEmail = (myEmail) => {
    let myNewString = '';
    myNewString = myEmail;
    if (myNewString.includes('@') && myNewString.includes('.')) {
        console.log(myEmail);
        if (myNewString[0] !== '@') {
            const myStringLength = myNewString.length;
            let dotPlace = 0;
            let atPlace = 0;
            for (let i = 0; i <= myStringLength; i++) {
                if (myNewString[i] === '.') {
                    dotPlace = i;
                }
                if (myNewString[i] === '@') {
                    atPlace = i;
                }
            }
            if (atPlace < dotPlace) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
console.log(validateEmail('john@example.com'));
console.log(validateEmail('@example.com'));
console.log(validateEmail('john.smith@com'));
console.log(validateEmail('john.smith@example.com'));