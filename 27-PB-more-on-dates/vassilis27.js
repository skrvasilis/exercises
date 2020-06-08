const givenDate = new Date('2020-02-13');

const daysFunction = (checkDay) => {
    month = checkDay.getMonth();
    let remainDays = 0;
    switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            remainDays = 31 - checkDay.getDate();
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
            remainDays = 28 - checkDay.getDate();
            console.log(remainDays, 'days till the end of the month');
    }

}


daysFunction(givenDate);
daysFunction(new Date('2020-06-08'));