'use strict';

// 1.
let markMass = 78.5;
let markHeight = 1.76;
let johnMass = 73.3;
let johnHeight = 1.80;

// 2.
let markBMI = markMass / (markHeight ** 2);
let johnBMI = johnMass / (johnHeight ** 2);

// 3. // 4.
let biggerBMI = markBMI > johnBMI ? true : false;
console.log(`Is Mark's BMI bigger than John's? ${biggerBMI}`);

// 5. 
if (markBMI > johnBMI) {
    console.log(`Mark: ${markBMI.toFixed(2)}`);
} else {
    console.log(`John: ${johnBMI.toFixed(2)}`);
}