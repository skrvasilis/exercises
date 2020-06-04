//2 .Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 


for (let bottles = 1; bottles <= 5; bottles++) {
    if (bottles > 1) {
        let numberAsAString = '';
        switch (bottles) {
            case 2:
                numberAsAString = "two";
                break;
            case 3:
                numberAsAString = "three";
                break;
            case 4:
                numberAsAString = "four";
                break;
            case 5:
                numberAsAString = "five";
                break;
            default:
                console.log("Error case");
        }
        console.log(`There is ${numberAsAString} bottles of beer on the wall.`);
    } else {
        console.log(`There is one bottle of beer on the wall.`);
    }
}


for (let bottles = 1; bottles <= 5; bottles++) {
    let numberAsAString = '';
    switch (bottles) {
        case 1:
            numberAsAString = "one bottle";
            break;
        case 2:
            numberAsAString = "two bottles";
            break;
        case 3:
            numberAsAString = "three bottles";
            break;
        case 4:
            numberAsAString = "four bottles";
            break;
        case 5:
            numberAsAString = "five bottles";
            break;
        default:
            console.log("Error case");
    }
    console.log(`There is ${numberAsAString} of beer on the wall.`);
}