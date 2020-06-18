'use strict';

// 1.
const euroCities = ['Paris', 'London', 'Amsterdam', 'Prague', 'Rome'];
console.log(euroCities);
const secondCity = euroCities[1];
console.log(secondCity);

// 2.
euroCities[0] = 'Berlin';
console.log('ex.2 ', euroCities);

// 3.
console.log('ex.3 ', euroCities.length);

// 4. 
euroCities.pop();
console.log('ex.4 ', euroCities);

// 5.
euroCities.push('Budapest');
console.log('ex.5 ', euroCities);

// 6. 
euroCities.splice(1, 2);
console.log('ex 6 ', euroCities);

// 7.
const asianCities = ['Seoul', 'Bangkok', 'Tokyo', 'Shanghai', 'Delhi'];
console.log('ex.7 ', asianCities);

// 8.
const selectedArray = asianCities.slice(1, 4); // second number is exclusive
console.log('ex.8 ', selectedArray);

// 9.
const worldCities = euroCities.concat(asianCities);
console.log('ex.9 ', worldCities);

// 10.
worldCities.reverse();
console.log('ex 10', worldCities);

// 11.
worldCities[2] = 'Toronto';
console.log('ex 11 ', worldCities);

// 12.
worldCities.splice(1, 0, 'Washington');
console.log('ex 12 ', worldCities);


// 13.
let myString = '';
for (let i = 0; i < worldCities.length; i++) {
    myString = myString + ' ' + worldCities[i];
}
console.log('ex.13', myString);

// 13 second
console.log('ex 13 2nd ', worldCities.join(', '));


// bonus
function reverseFun(str) {

    const reverseArray = str.split('');
    console.log(reverseArray);
    reverseArray.reverse();
    return reverseArray.join('');
}
console.log(reverseFun('hello world'));


// extra practice
const mySiblings = ['Gogo', 'Tania'];
const myParents = ['Antonis', 'Eua'];
const myFamily = mySiblings.concat(myParents);
console.log(myFamily);
myFamily.push('Atari');
console.log(myFamily);
myFamily.reverse();
console.log(myFamily);