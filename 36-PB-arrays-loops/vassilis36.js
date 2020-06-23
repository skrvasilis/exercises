'use strict';

// 1.
const sumOfNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
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

console.log(helloFriend(['Eva', 'Antigone', 'Giorgos']));


// 3. 
const cityNames = (array) => {
    let str = '';
    for (let i = 0; i < array.length; i++) {
        str += array[i] + ',';
    }
    // return array.join(',');
    return str;
}
console.log(cityNames(['Berlin', 'Paris', 'Prague', 'Rome']));


// 4. 
const oddsAndEvens = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i]--;
        } else {
            array[i]++;
        }
    }
    return array;
}

console.log(oddsAndEvens([3, 5, 2, 4]));
console.log(oddsAndEvens([6, 9, 10, 20]));

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

// 6. 
function noDuplicates(array) {

    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            array = array.splice(i, 1);

        }
    }
    return array;
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

console.log(repeatIt('example', 3));