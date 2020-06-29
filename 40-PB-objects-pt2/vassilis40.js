'use strict';

// 1. 
const inTheRange = (num, obj) => {
    let minMax = Object.values(obj);
    // console.log(minMax);
    if (num >= minMax[0] & num <= minMax[1]) {
        return true;
    } else {
        return false;
    }
}

console.log('ex.1', inTheRange(4, {
    min: 0,
    max: 5
}));
console.log('ex.1', inTheRange(4, {
    min: 4,
    max: 5
}));
console.log('ex.1', inTheRange(4, {
    min: 6,
    max: 10
}));
console.log('ex.1', inTheRange(5, {
    min: 5,
    max: 5
}));


// 1. second way
const check = (num, obj) => num >= obj.min && obj.max >= num;

console.log('ex.1', check(4, {
    min: 0,
    max: 5
}));
console.log('ex.1', check(4, {
    min: 4,
    max: 5
}));
console.log('ex.1', check(4, {
    min: 6,
    max: 10
}));
console.log('ex.1', check(5, {
    min: 5,
    max: 5
}));



// 2
const givenArray = [{
    tile: "N",
    score: 1
}, {
    tile: "K",
    score: 5
}, {
    tile: "Z",
    score: 10
}, {
    tile: "X",
    score: 8
}, {
    tile: "D",
    score: 2
}, {
    tile: "A",
    score: 1
}, {
    tile: "E",
    score: 1
}]
const scrabble = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].score;
    }
    return result;
}

console.log('The player\'s maximum score: ', scrabble(givenArray));

// 3. 
const EmptyObject = obj => {
    // console.log(Object.keys(obj));
    return Object.keys(obj).length === 0;
}

console.log('ex 3', EmptyObject({}));
console.log('ex 3', EmptyObject({
    a: 1
}));


// 4.
const countingLetters = (str) => {
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = str.split(str[i]).length - 1;
        console.log(str.split(str[i]));
    }
    return obj;
}

console.log('ex 4', countingLetters('tree'));


// 5.
const freeShipping = (obj) => {
    let myVal = Object.values(obj);
    let sum = 0;
    for (let i = 0; i < myVal.length; i++) {
        sum += myVal[i];
    }
    return sum > 50;
}

console.log('ex 5', freeShipping({
    "Sponge": 3.50,
    "Soap": 5.99
}));
console.log('ex 5', freeShipping({
    "Surround Sound Equipment": 499.99
}));
console.log('ex 5', freeShipping({
    "Wool": 13.99,
    "Knitting Needles": 15.50,
    "Bag": 13.99
}));

// 6. 
const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push('Go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;
console.log(programming);
for (let i = 0; i < programming.languages.length; i++) {
    console.log('the languages', programming.languages[i]);
}

for (const item in programming) {
    console.log('the keys', item);
}
for (const item in programming) {
    console.log('the values', programming[item]);
}
programming.isReCh = function () {
    if (this.isRewarding === true && this.isChallenging === true) {
        return `Learning the programming languages: ${programming.languages.join(", ")} is rewarding and challenging.`;
    }
}
console.log(programming.isReCh());