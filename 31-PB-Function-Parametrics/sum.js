// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
    let mySum = 0;
    for (let i = 0; i < args.length; i++) {
        mySum += args[i];
    }
    return mySum;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
console.log(sum(10, 44,66,192,33,15,82,18)); 
