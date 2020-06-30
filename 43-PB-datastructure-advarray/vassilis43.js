'use strict';

// 1.
const orders = [{
        amount: 250
    },
    {
        amount: 400
    },
    {
        amount: 100
    },
    {
        amount: 325
    }
];

const arrayOrders = []

for (const obj of orders) {
    for (const key in obj) {
        console.log(obj[key]);
        arrayOrders.push(obj[key]);
    }
}
const totalAmount = arrayOrders.reduce(function (previous, current) {
    return previous + current;
})

console.log('ex 1.', totalAmount);

// 2
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
console.log(arrayOfNumbers);
const newArrayOfNumbers = arrayOfNumbers.map(function (value) {
    return value + 1;
});
console.log('ex 2.', newArrayOfNumbers);

// const result = ar.filter(num => num === maxNum);
Array.prototype.filter
// 3.
const filterEvens = (arr) => arr.filter(function (value) {
    return value % 2 === 0;
});

console.log('ex 3', filterEvens([1, 2, 3, 11, 12, 13]));
console.log('ex 3', filterEvens([22, 2, 31, 110, 6, 13]));


// 4. 
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (arr, str) => {
    const filteredArr = arr.filter(function (value) {
        return value.includes(str);
    })
    for (let i = 0; i < filteredArr.length; i++) {
        filteredArr[i] = filteredArr[i][0].toUpperCase() + filteredArr[i].slice(1);
    }
    return filteredArr;
}

console.log('ex 4', filterItems(friends, 'ka'));
console.log('ex 4', filterItems(friends, 'e'));


// 5. 
const sumUp = (arr) => arr.reduce((previous, current) => previous + current);

console.log('ex 5', sumUp([1, 2, 3, 4, 5]));
console.log('ex 5', sumUp([6, 7, 7]));


// 6. 
const squareRoot = (arr) => arr.map((value) => Math.sqrt(value));

console.log('ex 6', squareRoot([4, 9, 16, 25, 44]));