'use strict';

// 1. 
const findGreatest = (myArray, num) => {
    let result = '';
    for (let i = 0; i < myArray.length; i++) {
        if (num < myArray[i]) {
            result = myArray[i] + ' ' + result;
        }
    }
    return result;
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 4], 4));

// 2. 
const longestWord = (str) => {
    let myArray = str.split(' ');
    let result = '';
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].length > result.length) {
            result = myArray[i];
        }
    }
    return result;
}

console.log(longestWord('this is a web development course'));
console.log(longestWord('i like to eat ice cream every day'));


// 3.
const reverse = (num) => {
    let myString = num.toString();
    myString = myString.split('');
    myString = myString.reverse();
    myString = myString.join('');
    // myString = myString * Math.sign(myString);

    return parseInt(myString);

}
console.log('ex. 3 ', reverse(34532));


// 4.
function vowels(str) {
    let result = str.match(/[aeiou]/gi); // creates an array with the vowels that finds in the string. [i is for insensitive]
    // console.log(result);
    return result;
}
console.log('ex 4 ', vowels('this is a string'));
console.log('ex 4 ', vowels('here we are now'));


// 5 .
const missingNum = (num) => {
    for (let i = 1; i <= 10; i++) {
        if (!num.includes(i)) {
            return i;
        }
    }
}
console.log('ex 5 ', missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log('ex 5 ', missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));
console.log('ex 5 ', missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));

// 6.
const sumOfCubes = (myArray) => {
    let result = 0;
    for (let i = 0; i < myArray.length; i++) {
        result += myArray[i] ** 3;
    }
    return result;
}

console.log('ex 6 ', sumOfCubes([1, 5, 9]));
console.log('ex 6 ', sumOfCubes([2]));
console.log('ex 6 ', sumOfCubes([]));


// 7. 
const dictionary = (str, myArray) => {
    const result = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].startsWith(str)) {
            result.push(myArray[i]);
        }
    }
    return result;
}
console.log('ex 7 ', dictionary("bu", ["button", "breakfast", "border"]));
console.log('ex 7 ', dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));
console.log('ex 7 ', dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// 8.
const evenNum = (num) => {
    const result = [];
    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log('ex 8 ', evenNum(8));
console.log('ex 8 ', evenNum(4));
console.log('ex 8 ', evenNum(2));
console.log('ex 8 ', evenNum(1));


// 8. second
const evenNum2 = (num) => {
    const result = [];
    for (let i = 2; i <= num; i += 2) {
        result.push(i);
    }
    return result;
}

console.log('ex 8 ', evenNum2(8));
console.log('ex 8 ', evenNum2(4));
console.log('ex 8 ', evenNum2(2));
console.log('ex 8 ', evenNum2(1));


// bonus
const alphaOrder = (str) => {
    let myArray = str.split('');
    myArray.sort();
    let result = myArray.join('');
    return result;
}

console.log('bonus ', alphaOrder('webdev'));
console.log('bonus ', alphaOrder('the quick brown fox jumps over the lazy dog'));

// bonus second
const alphaOrder2 = (str) => {
    return str.split('').sort().join('');
}

console.log('bonus ', alphaOrder2('webdev'));