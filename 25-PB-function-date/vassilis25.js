'use strict';

const eventFunction = (today, givenDate) => {
    if (today < givenDate) {
        let day = givenDate.getDate();
        let month = givenDate.getMonth() + 1;
        let year = givenDate.getFullYear();
        console.log(`Your book to the event for the ${day}/${month}/${year} is already guaranteed!`);
        // easier way to display the date
        console.log(`Your book to the event for the ${givenDate.toLocaleDateString('en-GB')} is already guaranteed!`);
    } else {
        console.log('please select a future date.');
    }
}

const userDate = new Date('2020-10-21');
const currentDay = new Date();
eventFunction(currentDay, userDate);
// second date with no variables
eventFunction(new Date(), new Date('2020-22-5'));