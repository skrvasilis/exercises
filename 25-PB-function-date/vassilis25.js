const eventFunction = (today, givenDate) => {
    console.log(today);
    future = givenDate.getTime();
    console.log(future);
    if (today < future) {
        console.log('Your book to the event for the 25th April 2019 is already guaranteed!');
    } else {
        console.log('please select a future date.');
    }
}

const givenDate = new Date('2020-10-31');
today = new Date().getTime();
eventFunction(today, givenDate);