'use strict';


// 1.
let color = 'yellow';
switch (color) {
    case 'red':
        console.log('strawberry');
        break
    case 'blue':
        console.log('sky');
        break
    case 'green':
        console.log('grass');
        break
    case 'yellow':
        console.log('lemons')
        break
    default:
        console.log('wrong color');
}

// 2.
let grade = 'F';
switch (grade) {
    case 'A':
        console.log('Excellent');
        break
    case 'B':
        console.log('Very good');
        break
    case 'C':
        console.log('Good');
        break
    case 'D':
        console.log('Satisfactory');
        break
    case 'E':
        console.log('Sufficient');
        break
    default:
        console.log('Fail');
}

// 3.
let fruit = 'apple';
switch (fruit) {
    case 'banana':
        console.log('A medium-sized banana will provide around 320-400 mg of potassium, which meets about 10% of your daily potassium needs');
        break
    case 'orange':
        console.log('Oranges are a good source of vitamin C, as well as several other vitamins, minerals, and antioxidants');
        break
    case 'strawberry':
        console.log('One serving of eight medium-sized strawberries contains 140% of Daily Value for vitamin C');
        break
    case 'apple':
        console.log('Apples are rich in fiber as well as phytonutrients and antioxidants');
        break
    default:
        console.log('wrong fruit');
}

// 4. 
let percentageComplete = 100;
if (percentageComplete < 30) {
    console.log('Still a long way to go');
} else if (percentageComplete <= 50) {
    console.log('Slowly getting there');
} else if (percentageComplete <= 80) {
    console.log('You can do it!');
} else if (percentageComplete <= 99) {
    console.log('This is the last push!');
} else {
    console.log('You\'re there.Well done!');
}

/* Switch statement is good when we have many different easy cases that we compare with equality (Month = 1...). In such cases switch statement is easer, we have to write less code and makes it thinks clearer and faster. When our conditions are more complicated we use the if statement. Also switch can only compare equality(===) and not >, < etc. */