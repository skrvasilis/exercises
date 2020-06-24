'use strict';

// 1.
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    myMethod: function () {
        console.log(`${this.firstName} ${this.lastName} is a student in class ${this.class}`);
    }
};

student.myMethod();

// 2. 
const person = {
    firstName: "Paul",
    lastName: "Kennedy",
    age: 38,
    job: 'Actor',
    city: 'Paris',
}

function myFunction() {
    console.log(`${person.firstName} ${person.lastName} is an ${person.age} years old ${person.job} living in ${person.city}`);
}

myFunction();

const objectLength = (obj) => {
    let myArray = Object.keys(obj);
    console.log(myArray);
    return myArray.length
}

console.log(objectLength(person));