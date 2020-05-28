let markMass = 72.5;
let markHeight = 1.65;
let johnMass = 95;
let johnHeight = 1.90;

let bmiMark = markMass / (markHeight * markHeight);
let bmiJohn = johnMass / johnHeight ** 2;

console.log('bmi mark', bmiMark);
console.log('bmi john', bmiJohn);

let isMarksBMIhigher = bmiMark > bmiJohn; // boolean

console.log(isMarksBMIhigher);

console.log(`Is Marks BMI higher than Johns? 
${isMarksBMIhigher}`);

if (isMarksBMIhigher) {
    console.log('Mark');
} else {
    console.log('John');
}