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

const theAmount = (arr) => {
    const arrayOrders = [];
    /*  for (const obj of arr) {
         for (const key in obj) {
             arrayOrders.push(obj[key]);
         }
     } */
    for (let key in orders) {
        arrayOrders.push(orders[key].amount);
    }
    const result = arrayOrders.reduce(function (previous, current) {
        return previous + current;
    });
    return result;

}
console.log('ex 1.', theAmount(orders));

// 1. second way
const theAmount2 = (arr) => {
    const totalAmount2 = arr.reduce(function (previous, current) {
        return previous + current['amount'];
    }, 0);
    return totalAmount2
}
console.log('ex 1.', theAmount2(orders));


// 2
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
console.log(arrayOfNumbers);
const newArrayOfNumbers = arrayOfNumbers.map(function (value) {
    return value + 1;
});
console.log('ex 2.', newArrayOfNumbers);


// 3.
Array.prototype.filter
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
    });
    const upArr = filteredArr.map(function (value, index, arr) {
        return value[0].toUpperCase() + value.slice(1)
    });
    return upArr;
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


// bonus

let first = ['🐮', '🍠', '🐔', '🦄'];
let after = ['🍔', '🍟', '🍗', '🍿'];
console.log(first);

const cook = (arr) => {
    return arr.map(function (value, index, array) {
        return array[index] = after[index];
    })
}
console.log(cook(first));

function isVegetarian(value) {
return (value === '🍿' || value === '🍟')
}
const vegetarian = after.filter(isVegetarian);
console.log(vegetarian)

function eat() {
    return '💩';
}

const finalOutput = after.reduce(eat);
console.log(finalOutput);