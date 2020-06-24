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
    myFunction : function () {
        return `${this.firstName} ${this.lastName} is an ${this.age} years old ${this.job} living in ${this.city}`;
    },
    objectLength : function () {
        return Object.keys(this).length

    }
}
console.log(person.myFunction());
console.log(person.objectLength());
