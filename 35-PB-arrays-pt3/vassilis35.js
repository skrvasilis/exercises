'use strict';

// 1.
const isFourLetters = (str) => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].length === 4) {
            result.push(str[i]);
        }
    }
    return result;
}
console.log('ex 1 ', isFourLetters(["John", "James", "Jack", "Jeanne"]));
console.log('ex 1 ', isFourLetters(["Tomato", "Corn", "Lettuce"]));
console.log('ex 1 ', isFourLetters(["Dog", "Cat", "Deer"]));

// 2.

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const monthName = (num) => {
    return months[num - 1];
}
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

// 5.

/* const scoresByLetter = "abcdefghijklmnopqrstuvwxyz".split('');
for (let z = 0; z < scoresByLetter.length; z++) {

    // console.log(scoresByLetter.indexOf(scoresByLetter[z]) + 1);

}
const wordRank = (str) => {
    let counter = 0;
    str = str.split(' ');
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        let myStr = str[i].split('');
        console.log(myStr);
        for (let j = 0; j < myStr.length; j++) {
            for (let z = 0; z < scoresByLetter.length; z++) {
                if (myStr[j] === scoresByLetter[z]) {
                    counter += scoresByLetter.indexOf(scoresByLetter[z] + 1);
                    console.log(scoresByLetter.indexOf(scoresByLetter[z]) + 1);

                }
            }
            console.log(myStr[j]);


        }
    }



}

wordRank('the quick brown fox');
 */
// 6. 
const hackerSpeak = (str) => {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case 'a':
                str[i] = 4;
                break;
            case 'e':
                str[i] = 3;
                break;
            case i:
                str[i] = 1;
                break;
            case 'o':
                str[i] = 0;
                break;
            case 's':
                str[i] = 5;
                break
            default:
                str[i] = str[i];
        }
    }
    str = str.join('');
    return str;
}

console.log('ex 6', hackerSpeak("javascript is cool"));
console.log('ex 6', hackerSpeak("programming is fun"));
console.log('ex 6', hackerSpeak("become a coder"));


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
    // console.log(str);
    let upper = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            str.splice(i, 1);
            upper = str[i].toUpperCase();
            // console.log(upper);
            // console.log(str);
            str.splice(i, 1, upper);
            // console.log(str);
        }
    }
    str = str.join('');
    return str;
}

console.log('bonus 2 ', toCamelCase('hello_world'));
console.log('bonus 2 ', toCamelCase('javascript_is_fun'));
console.log('bonus 2 ', toCamelCase('good_morning_every_day'));