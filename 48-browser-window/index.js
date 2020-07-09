'use strict';



let userNum = prompt('Guess a number between 1-10:')
let randomNum = Math.floor(Math.random() * 10) + 1

const checkNum = (num) => {
    console.log(randomNum);
    for (let i = 1; i < 4; i++) {
        console.log(num)
        if (i === 3 && parseInt(num) !== randomNum) {
            break
        } else if (parseInt(num) === randomNum) {
            return `Success, the number was ${randomNum}! Attempts: ${i}`
            console.log(true)
        } else {
            num = prompt('Wrong!!!Try again!')
        }
    }
    return `Sorry, you failed to guess the number in three attempts.
    the number was ${randomNum}`

}

alert(checkNum(userNum));