'use strict';

// 1.
let allezaA = 116;
let allezaB = 94;
let allezaC = 123;

let lisA = 122;
let lisB = 94;
let lisC = 123;
// 1a)
let allezaAverage = (allezaA + allezaB + allezaC) / 3;
let lisAverage = (lisA + lisB + lisC) / 3;
console.log(allezaAverage);
console.log(lisAverage);
// 1b, c)
if (allezaAverage > lisAverage) {
    console.log(`Alleza's team is the winner with ${allezaAverage} points`);
} else if (allezaAverage < lisAverage) {
    console.log(`Lis's team is the winner with ${lisAverage} points`);
} else {
    console.log(`the teams are having the same score ${lisAverage} points`);
}
// 1d , e)
let maryA = 97;
let maryB = 131;
let maryC = 105;
let maryAverage = (maryA + maryB + maryC) / 3;
console.log(maryAverage);

if (maryAverage !== allezaAverage && maryAverage !== lisAverage && allezaAverage !== lisAverage) {
    if (maryAverage > allezaAverage && maryAverage > lisAverage) {
        console.log(`Marys's team is the winner with ${maryAverage} points`);
    } else if (allezaAverage > maryAverage && allezaAverage > lisAverage) {
        console.log(`Alleza's team is the winner with ${allezaAverage} points`);
    } else {
        console.log(`Lis's team is the winner with ${lisAverage} points`);
    }
} else if (maryAverage !== allezaAverage && maryAverage === lisAverage) {
    if (maryAverage > allezaAverage) {
        console.log(`Marys's and Lis's teams are the winners with ${maryAverage} points`);
    } else {
        console.log(`Alleza's team is the winner with ${allezaAverage} points`);
    }
} else if (maryAverage !== lisAverage && maryAverage === allezaAverage) {
    if (maryAverage > lisAverage) {
        console.log(`Marys's and Alleza's teams are the winners with ${maryAverage} points`);
    } else {
        console.log(`Lis's team is the winner with ${lisAverage} points`);
    }
} else if (maryAverage !== lisAverage && lisAverage === allezaAverage) {
    if (lisAverage > maryAverage) {
        console.log(`Lis's's and Alleza's teams are the winners with ${lisAverage} points`);
    } else {
        console.log(`Marys's team is the winner with ${maryAverage} points`);
    }
} else {
    console.log(`the teams are having the same score ${lisAverage}`);
}