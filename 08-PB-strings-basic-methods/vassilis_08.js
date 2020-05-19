'use strict';

// 1.
let walk = 'I can walk in the park all day!';
console.log(walk.length);
console.log(`we wanna print the word park:
 ${walk.substring(18, 22)}`);

 // 2.
 let hello = 'Hello World';
 console.log(`We convert the sentence to uppercase:
 ${hello.toUpperCase()}`);

 // 3.
 let earthling = 'HELLO EARTHLING';
 console.log(`We convert the sentence to lowercase:
 ${earthling.toLowerCase()}`);

 // 4. 
 let javascript = 'JavaScript';
 console.log(`We want to print the characters:'aSc':
 ${javascript.substring(3,6)}`);

 // 5.
 let shoes = 'nice shoes';
 console.log(` is l in the sentence: ${shoes.includes('l')}
 is n in the sentence: ${shoes.includes('n')}`);

 // 6.
 let firstCharacter = 'Eyes';
 console.log(`the first character in the beginning and at the end:
 ${firstCharacter[0]}${firstCharacter}${firstCharacter[0]}`);

 // 7.
 let lastThree = 'Ibiza';
 console.log(`the last 3 character in the beginning and at the end:
 ${lastThree.substring(2)}${lastThree}${lastThree.substring(2)}`);

 // 8.
 let changing = 'flamingo';
 console.log(`change the first character with the last one:
 ${changing[changing.length-1]}${changing.substring(1,7)}${changing[0]}`);

 // 9.
 let firstName = 'Vassilis';
 let city = 'Berlin';
 let food = 'IceCream.';
 console.log(`we print a sentence using interpolation:
 My name is ${firstName} i live in ${city} and i like ${food}`);

 // 10. 
 let fox = 'the quick brown fox';
 console.log(`We capitalize the first letter of the string:
 ${fox[0].toUpperCase()}${fox.substring(1)}`);
