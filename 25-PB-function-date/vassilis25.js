'use strict';

const eventFunction = (today, givenDate) => {
    if (today < givenDate) {
        let day = givenDate.getDate();
        let month = givenDate.getMonth() + 1;
        let year = givenDate.getFullYear();
        console.log(`Your book to the event for the ${day}-${month}-${year} is already guaranteed!`);
    } else {
        console.log('please select a future date.');
    }
}

const givenDate = new Date('2020-10-1');
const today = new Date();
eventFunction(today, givenDate);