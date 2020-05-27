'use strict';

// 1.
let determiner = 1;
let x = '';
x =  determiner < 0 ? 'Less than 0' : 'Greater or equal to 0';
console.log(x);

// 2.
let updater = ''
if (determiner >= 0) {
    updater = 'Greater or equal to 0';
    let message = 'Positive integer';
    console.log(message);
}
else {
    let updater = 'Less than 0';
    let message = 'Negative integer';
    console.log(message);
}
//console.log(message); error: message is not defined

3. 
let age = 18;
console.log( age >=18 ? 'you can vote' : 'you cannot vote');

if (age >= 18) {
    console.log( 'you can vote');
    let drive = true;
}
else {
    console.log('you cannot drive');
    let drive = false;
}
/* age >=18 ? console.log('you can vote') let drive = true : console.log('you cannot');  we cannot do this */