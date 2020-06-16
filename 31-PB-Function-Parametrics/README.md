# Parametrics

Complete the following tasks:

1. Complete the function in [`twofer.js`](./twofer.js) so that it returns "Two for me and one for you" when no arguments are passed\
e.g\
`console.log(twofer("Fran")) ---> "Two for me and one for Fran" ` \
`console.log(twofer()) ---> "Two for me and one for you" `
    
1. Complete the function in [`exponent.js`](./exponent.js) so that it still calculates the power of a 
number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.\
e.g\
`console.log(exponent(3, 3)) ---> 27 `\
`console.log(exponent(3)) ---> 9`

1. Create a function in [`howManyArgs.js`](./howManyArgs.js) which returns the total amount of arguments passed to it.\
e.g\
`console.log(howManyArgs()) ---> 0 `\
`console.log(howManyArgs(1, false, "hello")) ---> 3` \
`console.log(howManyArgs("better")) ---> 1`

1. Create a function in [`sum.js`](./sum.js) which accepts any amount of numbers and return the sum of their addition\
e.g\
`console.log(sum(1)) ---> 1`\
 `console.log(sum(1, 15)) ---> 16`\
`console.log(sum(25, 25, 20)) ---> 70`

1. **Bonus:** Create a function in [`average.js`](./average.js) which accepts any amount of numbers and returns their mean average.\
e.g\
`console.log(average(0)) ---> 0`\
`console.log(average(1, 2)) ---> 1.5`\
`console.log(average(1, 3, 6, 10)) ---> 5`\
`console.log(average(12, 14, 16)) ---> 14`

_**Note:** Feel free to add more `console.log()`s to each file to test your function further. but please do not delete the exisiting `console.log`s or rename the function._
