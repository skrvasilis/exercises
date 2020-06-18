'use strict';

// 1. 
const findGreatest = (myArray, num) => {
    let result = '';
    for (let i = 0; i < myArray.length; i++) {
        if (num < myArray[i]) {
            result = result + ' ' + myArray[i];
        }
    }
    return result;
}

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 4], 4));

// 2. 
const longestWord = (str) => {
    str = str.split(' ');
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > result.length) {
            result = str[i];
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
    myString = myString * Math.sign(myString);
    return myString;

}
console.log('ex. 3 ', reverse(34532));


// 4.
function vowels(str) {
    var m = str.match(/[aeiouAEIOU]/g); // creates an array with the vowels that finds in the string
    console.log(m);
    return m === null ? 0 : m.length;
}
console.log('ex 4 ', vowels('this is a string'));


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
console.log('ex 7 ', dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]))
console.log('ex 7 ', dictionary("beau", ["pastry", "delicious", "name", "boring"]));

// 8.
const evenNum = (num) => {
    const result = [];
    for (let i = 1; i <= num; i++) {
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


// bonus
const alphaOrder = (str) => {
    str = str.split('');
    str.sort();
    str = str.join('');
    return str;
}

console.log('bonus ', alphaOrder('webdev'));
console.log('bonus ', alphaOrder('the quick brown fox jumps over the lazy dog'));

