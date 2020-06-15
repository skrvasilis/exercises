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

// 3.
(function (age, retireAge, wage, percent = 10) {
    if (age > retireAge) {
        console.log('You\'re already retired!')
    } else {
        let years = (retireAge - age);
        let months = (years * 12);
        let moneyPerMonth = wage * percent / 100;
        console.log(months * moneyPerMonth);
    }

})(40, 60, 1000);