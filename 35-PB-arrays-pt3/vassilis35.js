'use strict';

// 1.
const isFourLetters = (myArray) => {
    let result = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].length === 4) {
            result.push(myArray[i]);
        }
    }
    return result;
}
console.log('ex 1 ', isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log('ex 1 ', isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log('ex 1 ', isFourLetters(["Dog", "Cat", "Deer"]));

// 2.
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = (num) => months[num - 1];

console.log('ex 2', monthName(3));
console.log('ex 2', monthName(12));
console.log('ex 2', monthName(6));


// 3. 
const amplify = (num) => {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            result.push(i * 10);
        } else {
            result.push(i);
        }
    }
    return result;
}
console.log('ex 3 ', amplify(4));
console.log('ex 3 ', amplify(3));
console.log('ex 3 ', amplify(25));

// 4. 
const unique = (myArray) => {
    let result = 0;
    for (let i = 1; i < myArray.length; i++) {
        for (let j = 0; j < myArray.length; j++) {
            if (myArray[i] - myArray[j] !== 0) {
                result = myArray[j];
            }
        }
    }
    return result;
}

console.log('ex 4', unique([3, 3, 3, 7, 3, 3]));
console.log('ex 4', unique([0, 0, 0.77, 0, 0]));
console.log('ex 4', unique([0, 1, 1, 1, 1, 1, 1, 1]));



// 4 Martina
function unique2(array) {
    let currentValue = null;
    for (let i = 0; i < array.length; i++) {
        currentValue = array[i];
        if (array.indexOf(currentValue) === array.lastIndexOf(currentValue)) { // no doublette
            return currentValue; // uniqueness
        } else {
            console.log("We found a double!" + array[i]);
        }
    }
}

console.log('ex 4', unique2([3, 3, 3, 7, 3, 3]));
console.log('ex 4', unique2([0, 0, 0.77, 0, 0]));
console.log('ex 4', unique2([0, 1, 1, 1, 1, 1, 1, 1]));

// 5.
function wordRank(str) {
    const LETTERS = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const STR_IN_ARR = str.split(' '); //separate words
    console.log(STR_IN_ARR);
    const ARR_SUM = [];
    for (let i = 0; i < STR_IN_ARR.length; i++) {
        let sum = 0;
        for (let j = 0; j < STR_IN_ARR[i].length; j++) {
            if (LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase()) !== -1) {
                sum += LETTERS.indexOf(STR_IN_ARR[i][j].toLowerCase());
            }
        }
        ARR_SUM.push(sum);
    }
    console.log(ARR_SUM); //sum of each word in array
    //to find the largest sum
    let largest = 0;
    for (let i = 0; i < ARR_SUM.length; i++) {
        if (ARR_SUM[i] > largest) {
            largest = ARR_SUM[i];
        }
    }
    console.log(`Largest sum ${largest}, index of largest is ${ARR_SUM.indexOf(largest)}`);
    let index = ARR_SUM.indexOf(largest); //index of the largest sum in arr
    return STR_IN_ARR[index];
}
console.log(wordRank("The quick brown fox."));
console.log(wordRank("Nancy is very pretty."));
console.log(wordRank("Check back tomorrow, man!"));
console.log(wordRank("Today is Wednesday."));

// 5. Martina
function wordRank2(sentence) {
    const words = sentence.split(" ");
    console.log(words);
    const ranking = [];
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            const letterScore = word.toUpperCase().charCodeAt(j) - 64; // little hacky :D
            // charCodeAt would return a number between 97 (a) - 122 (z)
            wordScore += letterScore;
        }
        ranking.push(wordScore);
    }
    let winningPosition = 0;
    for (let i = 0; i < ranking.length; i++) {
        if (i === 0) {
            // first entry, skip over
            continue;
        }
        if (ranking[i] > ranking[winningPosition]) {
            winningPosition = i;
        }
    }
    return `${words[winningPosition]}" is the winner with a score of ${ranking[winningPosition]}`;
}
//console.log(wordRank("Testing, one, 2, three"));
console.log(wordRank2("The quick brown fox.")); // ➞ "brown"
console.log(wordRank2("Nancy is very pretty.")); // ➞ "pretty"
console.log(wordRank2("Check back tomorrow, man!")); //➞ "tomorrow"
console.log(wordRank2("Today is Wednesday.")); // ➞ "Wednesday"


// 6. 
const hackerSpeak = (str) => {
    let array = str.split('');
    for (let i = 0; i < array.length; i++) {
        switch (array[i]) {
            case 'a':
                array[i] = 4;
                break;
            case 'e':
                array[i] = 3;
                break;
            case 'i':
                array[i] = 1;
                break;
            case 'o':
                array[i] = 0;
                break;
            case 's':
                array[i] = 5;
        }
    }
    return array.join('');
}

console.log('ex 6', hackerSpeak("javascript is cool"));
console.log('ex 6', hackerSpeak("programming is fun"));
console.log('ex 6', hackerSpeak("become a coder"));



// 6 second way
const hackerSpeak2 = (str) => {
    let newString = str;
    const regexA = /a/gi;
    newString = newString.replace(regexA, 4);
    newString = newString.replace(/e/gi, 3);
    newString = newString.replace(/i/gi, 1);
    newString = newString.replace(/o/gi, 0);
    newString = newString.replace(/s/gi, 5);

    return newString;
}


console.log('ex 6', hackerSpeak2("javascript is cool"));
console.log('ex 6', hackerSpeak2("programming is fun"));
console.log('ex 6', hackerSpeak2("become a coder"));






// bonus 1.
const isSymmetrical = (num) => {
    num = num.toString();
    let compare = '';
    for (let i = 1; i <= num.length; i++) {
        compare += num[num.length - i];
    }
    return num === compare;
}

console.log('bonus 1 ', isSymmetrical(7227));
console.log('bonus 1 ', isSymmetrical(12567));
console.log('bonus 1 ', isSymmetrical(44444444));
console.log('bonus 1 ', isSymmetrical(9939));
console.log('bonus 1 ', isSymmetrical(1112111));


// bonus 2
const toCamelCase = (str) => {
    str = str.split('');
    let upper = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            str.splice(i, 1);
            upper = str[i].toUpperCase();
            str.splice(i, 1, upper);
        }
    }
    str = str.join('');
    return str;
}

console.log('bonus 2 ', toCamelCase('hello_world'));
console.log('bonus 2 ', toCamelCase('javascript_is_fun'));
console.log('bonus 2 ', toCamelCase('good_morning_every_day'));