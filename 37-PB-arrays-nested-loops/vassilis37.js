'use strict';

// 1.
const stars = () => {
    const str = '* ';
    for (let i = 1; i < 5; i++) {
        console.log(str.repeat(i));
    }
}
stars();

// 2. 
const nestedArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log('row', i);
        for (let j = 0; j < arr[i].length; j++)
            console.log('',arr[i][j]);
    }
}
nestedArray([
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
])

// 3. 
const nestedLoop = (arr) => {
    let myString1 = '';
    let myString2 = '';
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < 3; j++) {
            myString1 = myString1 + ' ' + arr[i];
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < arr.length; j++) {
            myString2 = myString2 + ' ' + arr[j];
        }
    }
    console.log(myString1 + '\n' + myString2);
}

nestedLoop([0, 1, 2, 3, 4]);