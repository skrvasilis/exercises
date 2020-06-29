'use strict';
// 1.
let euroCountries = ['Italy', 'France', 'spain', 'Norway', 'Sweden']
let asianCountries = ['China', 'India', 'Iran', 'Japan', 'South Korea'];

euroCountries.push(...asianCountries);
console.log('ex.1.a', euroCountries);

let euroCountries2 = ['Italy', 'France', 'spain', 'Norway', 'Sweden']
let asianCountries2 = ['China', 'India', 'Iran', 'Japan', 'South Korea'];

let allCountries = [...euroCountries2].concat(...asianCountries2);
console.log('ex.1.b', allCountries);

// 2.
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let cloneArray = [...myArray];
console.log('ex.2', cloneArray);


// 3. 
const largest = (arr) => Math.max(...arr);


console.log('ex.3', largest([2, 34, 65, 22, 1]));

// 4.
const smaller = (arr) => Math.min(...arr);
console.log('ex.4', smaller([2, 34, 65, 22, 1]));


// 5. 
const person = {
    name: "John"
};
const job = {
    role: "Teacher"
};

const clonePerson = {
    ...person
};
console.log('ex.5 a', clonePerson);

const employee = {
    ...person,
    ...job
};
console.log('ex 5.b', employee);

employee.name = 'Mark';
employee.role = 'Manager';
console.log('ex 5.c', employee);


// bonus 
const isWhole = (...arg) => {
    let sum = 0;
    for (const items in arg) {
        sum += arg[items];
    }
    return sum % arg.length === 0;
}

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(2, 2, 2, 2));