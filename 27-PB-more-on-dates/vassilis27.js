'use strict';

const daysFunction = (checkDay) => {
    let month = checkDay.getMonth();
    let remainDays = 0;
    switch (month) {
        case 1:
            remainDays = 28 - checkDay.getDate();
            console.log(remainDays, 'days till the end of the month');
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            remainDays = 30 - checkDay.getDate();
            console.log(remainDays, 'days till the end of the month');
            break;
        default:
            remainDays = 31 - checkDay.getDate();
            console.log(remainDays, 'days till the end of the month');
    }

}

const givenDate = new Date();
givenDate.setFullYear(2020, 1, 13) // 13th of february
daysFunction(givenDate);
daysFunction(new Date('2020-06-08'));