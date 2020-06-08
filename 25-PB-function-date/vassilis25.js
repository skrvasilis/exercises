const eventFunction = (today, givenDate) => {
    // console.log(today);
    future = givenDate.getTime();
    // console.log(future);
    if (today < future) {
        let day = givenDate.getDate();
        let month = givenDate.getMonth() + 1;
        let year = givenDate.getFullYear();
        console.log(`Your book to the event for the ${day}-${month}-${year} is already guaranteed!`);
    } else {
        console.log('please select a future date.');
    }
}

const givenDate = new Date('2019-10-31');
today = new Date().getTime()
eventFunction(today, givenDate);