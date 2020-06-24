// build a half pyramid with return 
const halfPyramid = (lines) => {
    let array = [];
    for (let i = 0; i < lines; i++) {
        for (let j = 0; j <= i; j++) {
            array.push("*"); // the amount of stars per line
            console.log(array);
        }
        array.push("\n"); // insert a new line break special character
    }
    return " " + array.join(" ");
}
console.log("Task 1: Pyramid");
console.log(halfPyramid(4));

// mohameds number pyramid
function mohamedsPyramid(lines) {
    let string = '';
    for (let i = 0; i < lines; i++) { // forwards
        for (let j = i; j >= 0; j--) { // backwards accordingly to i
            string += j + " ";
        }
        string += "\n"; // new line break
        //console.log(string); 
    }
    return string;
}
console.log(mohamedsPyramid(10));