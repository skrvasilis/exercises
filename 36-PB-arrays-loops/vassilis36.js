'use strict';

// 1.
const sumOfNumbers = (array) => {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i]
    }
    return `the sum is ${sum} and the product is  ${product}`;
}

console.log(sumOfNumbers([2, 3, 4, 5, 6]));

// 2.
const helloFriend = (array) => {
    let myIndex = null;
    let result = '';
    for (let i = 0; i < array.length; i++) {
        result = result + 'Hello ' + array[i] + '!';
        console.log(`${array[i]} is at index ${array.indexOf(array[i])} of my friends array.`);
    }
    return result;
}

console.log('ex 2 ', helloFriend(['Eva', 'Antigone', 'Giorgos']));


// 3. 
const cityNames = (array) => {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i] + ',';
    }
    // return array.join(','); or that
    return str.substring(0, str.length - 1);
}
console.log('ex 3 ', cityNames(['Berlin', 'Paris', 'Prague', 'Rome']));


// 4. 
const oddsAndEvens = (array) => {
    let myArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            myArray.push(array[i] - 1);
        } else {
            myArray.push(array[i] + 1);
        }
    }
    return myArray;
}

console.log('ex 4 ', oddsAndEvens([3, 5, 2, 4]));
console.log('ex 4 ', oddsAndEvens([6, 9, 10, 20]));

// 5.
const capitalize = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase();
        let myArray = array[i].split('');
        let up = myArray[0].toUpperCase();
        myArray.splice(0, 1, up);
        array[i] = myArray.join('');
    }
    return array;
}

console.log(capitalize(["matt", "sara", "lara"]));
console.log(capitalize(["samuel", "MARIA", "luke", "mary"]));
console.log(capitalize(["Cynthia", "Karen", "Jane", "Carrie"]));

// 5. Marcell
const capitalize2 = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase());
    }
    return result;
}
console.log(capitalize2(["matt", "sara", "lara"])); // ➞ ["Matt", "Sara", "Lara"]
console.log(capitalize2(["samuel", "MARIA", "luke", "mary"])); // ➞ ["Samuel", "Maria", "Luke", "Mary"]
console.log(capitalize2(["Cynthia", "Karen", "Jane", "Carrie"])); // ➞ ["Cynthia", "Karen", "Jane", "Carrie"]

// 6. 
function noDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            array.splice(i, 1);
            i = 0;
        }
    }
    return array;
}

console.log(noDuplicates([1, 4, 4, 7, 7, 7]));
console.log(noDuplicates([1, 6, 6, 6, 9, 9]));
console.log(noDuplicates([2, 2, 2, 2, 2, 2]));
console.log(noDuplicates([5, 10, 15, 20, 25]));

// 6. Martina
function noDuplicates2(array) {
    let myArray = [];
    for (let i = 0; i < array.length; i++) {
        if (myArray.indexOf(array[i]) === -1) {
            myArray.push(array[i]);
        }
    }
    return myArray;
}

console.log(noDuplicates2([1, 4, 4, 7, 7, 7]));
console.log(noDuplicates2([1, 6, 6, 6, 9, 9]));
console.log(noDuplicates2([2, 2, 2, 2, 2, 2]));
console.log(noDuplicates2([5, 10, 15, 20, 25]));


//6 2
function noDuplicates(array) {
    let newArray = array;
    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(newArray[i]) !== newArray.lastIndexOf(newArray[i])) {
            newArray.splice(i, 1);
            i = 0;
        }
    }
    return newArray;
}

console.log(noDuplicates([1, 4, 4, 7, 7, 7]));
console.log(noDuplicates([1, 6, 6, 6, 9, 9]));
console.log(noDuplicates([2, 2, 2, 2, 2, 2]));
console.log(noDuplicates([5, 10, 15, 20, 25]));

// 7. 
const repeatIt = (str, num) => {
    let myArray = [];
    for (let i = 0; i < num; i++) {
        myArray.push(str);
    }
    return myArray;
}

console.log('ex 7 ', repeatIt('example', 3));

// bonus 

const factors = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] % array[i] === 0) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}
console.log(factors([1, 2, 4, 8, 16, 32]));
console.log(factors([1, 1, 1, 1, 1, 1]));
console.log(factors([2, 4, 6, 7, 12]));
console.log(factors([10, 1]));