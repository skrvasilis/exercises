'use strict';

const givenDate = new Date('2020-06-06');
const givenDate2 = new Date('2020-06-09');


const weekendFunction = (checkDate) => {
    if (checkDate.getDay() === 6 || checkDate.getDay() === 0) {
        console.log(`${checkDate.toLocaleDateString('en-GB')} is a weekend day`);
    } else {
        console.log(`${checkDate.toLocaleDateString('en-GB')} is a week day`);
    }
}
weekendFunction(givenDate);
weekendFunction(givenDate2);