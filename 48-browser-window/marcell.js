'use strict'
const randomNumber = Math.floor(Math.random() * 10 + 1)
console.log(randomNumber)
const match = () => {
    let guessedNumber = prompt("Guess a number between 1-10")
    let count = 1
    for (let i = 1; i < 4; i++) {
        if (count === 3 & randomNumber !== parseInt(guessedNumber)) {
            alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`)
            break
        } else if (randomNumber !== parseInt(guessedNumber)) {
            guessedNumber = prompt(`Nope, sorry! Try again!`)
            count += 1;
        } else {
            alert(`Succes, the number was ${randomNumber}! Attempts: ${count}`)
            break
        }
    }
}
match()