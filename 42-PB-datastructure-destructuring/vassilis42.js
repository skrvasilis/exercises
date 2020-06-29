'use strict';

// 1.
let fruit, vegetable, food;
[fruit, vegetable, ...food] = ['banana', 'cucumber', 'bread', 'cakes', 'pizza'];
console.log(fruit);
console.log(vegetable);
console.log(food);

// 2.
const halloween = {
    fran: 'witch',
    mike: 'zombie',
    lena: 'mummy'
}
let fran, mike, lena;
({
    fran,
    mike,
    lena
} = halloween);
console.log(fran);
console.log(mike);
console.log(lena);

// 3.
const myMusician = {
    name: 'Fever Ray',
    greatestHit: 'To the moon and back',
    nationality: 'Swedish',
    genre: 'electro-pop',
    Occupation: 'singer,songwriter and record producer'
}

function musician({
    name,
    greatestHit,
    nationality,
    genre,
    Occupation
}) {
    console.log(`${name} is a ${nationality} ${Occupation}. The musician sings ${genre} and their greatest hit is "${greatestHit}".`)
}

musician(myMusician);