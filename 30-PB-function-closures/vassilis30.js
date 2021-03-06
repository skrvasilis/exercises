'use strict';
// 1.
const addFunction = (num1) => {
    return function secondFunction(num2) {
        return num1 + num2;
    }
}
console.log(addFunction(3)(4));


// 2.
const multiplier = (x) => {
    return function multi2(y) {
        return x * y;
    }
}
let multiplierVar = multiplier(2);
console.log(multiplierVar(7));



// 2. second 
const multi = function (x) {
    return function multi2(y) {
        return x * y;
    }
}
console.log(multi(2)(7));

// 2. third
const multiplier3 = (factor) => {
    return number => number * factor;
}
const twoTimes = multiplier(3);
console.log(twoTimes(7));






// 3.
(function (age, retireAge, wage, percent = 10) {
    if (age >= retireAge) {
        console.log('You\'re already retired!')
    } else {
        let years = (retireAge - age);
        let months = (years * 12);
        let moneyPerMonth = wage * percent / 100;
        console.log(months * moneyPerMonth);
    }

})(40, 60, 1000);


// second way
let age = 40;
let retireAge = 60;
let wage = 1000;
let percent = 10;
let answer = (function () {
    if (age >= retireAge) {
        console.log('You\'re already retired!')
    } else {
        let years = (retireAge - age);
        let months = (years * 12);
        let moneyPerMonth = wage * percent / 100;
        return months * moneyPerMonth;
    }
})();
console.log(answer);