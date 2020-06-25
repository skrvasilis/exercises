'use strict';

// 1.
let person = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris'
}

for (const myKey in person) {
    console.log(myKey, person[myKey]);
}


// 2. 
const getObjectValues = (myObj) => Object.values(myObj);



console.log(
    getObjectValues({
        choice1: "tea",
        choice2: "coffee",
        choice3: "milk"
    })
);

// 3. 
let person2 = {
    firstName: "Michael",
    lastName: "Smith",
    job: "driver",
    age: 20,
    city: 'Paris'
};

person2.myMethod = function () {
    return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`;
};
console.log('ex.3 ', person2.myMethod());


// bonus 1.
const ObjectToArray = (myObj) => Object.entries(myObj);

console.log('bonus1',
    ObjectToArray({
        A: 1,
        B: 2,
        C: 3
    })
);
console.log('bonus1',
    ObjectToArray({
        cats: 1,
        dogs: 2,
        turtles: 4
    })
);
// bonus 1 second way
function convertToArray(obj) {
    const result = [];
    for (const item in obj) {
        let newArr = [];
        newArr.push(item);
        newArr.push(obj[item]);
        result.push(newArr);
    }
    return result;
}

console.log('bonus1',
    convertToArray({
        A: 1,
        B: 2,
        C: 3
    })
);





// bonus 2.
const student = {
    name: "Mike",
    class: "4A",
    course: "English"
};
const listProperties = (myObj) => Object.keys(myObj);
console.log('bonus2', listProperties(student));

// bonus 3.
const first = {
    firstName: "John"
};
const last = {
    lastName: "Smith"
};

function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

console.log('bonus3', merge(first, last));

// if they have the same property value we get only the second object as an output

// bonus 4
const person4 = {
    name: "John",
    job: "teacher"
};

const switchKeys = (obj) => {
    let newObject = {};
    for (const property in obj) {
        newObject[obj[property]] = property;
    }
    return newObject;
}
console.log('bonus4', switchKeys(person4));


// bonus 5 
const returnKeysValues = (obj) => {
    const resultArray = new Array(2);
    resultArray[0] = Object.keys(obj);
    resultArray[1] = Object.values(obj);
    return resultArray;
}

console.log('bonus 5', returnKeysValues({
    a: 1,
    b: 2,
    c: 3
}));
console.log('bonus 5', returnKeysValues({
    key: true
}));