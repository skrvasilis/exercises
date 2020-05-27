'use strict';

// 1.
let markMass = 78.5;
let markHeight = 1.76;
let johnMass = 73.3;
let johnHeight = 1.80;

// 2.
let markBMI = markMass/(markHeight*2);
let johnBMI = johnMass/(johnHeight*2);

// 3. // 4.
let biggerBMI = false;
if (markBMI > johnBMI) {
    biggerBMI = true;
    console.log('is Mark\'s BMI higher than John\'s? '+ biggerBMI + ' it is.');
} 
else {
    console.log('is Mark\'s BMI higher than John\'s? '+ biggerBMI + ' no it is not.');
}

// 5. 
if (markBMI > johnBMI) {
    console.log(`Mark: ${markBMI.toFixed(2)}`);
}
else {
    console.log(`John: ${johnBMI.toFixed(2)}`);
}
