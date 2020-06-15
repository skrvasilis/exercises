# Functions Exercises

Print your answers to the console.

**1. Add Up.**
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples:
* addUp(4) ➞ 10 output
* addUp(13) ➞ 91
* addUp(600) ➞ 180300

**2. Cubed.**
Create a function that takes in three numbers and returns the sum of its cubes.

Examples: 
* sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* sumOfCubes(2) ➞ 8
* sumOfCubes() ➞ 0

**3. String Check.**
Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.


Examples:
* dictionary("bu", "button") ➞ true
* dictionary("tri", "triplet") ➞ true
* dictionary("beau", "pastry") ➞ false

**4. Less Than or Equal to Zero?**
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples:
* lessThanOrEqualToZero(3) ➞ false
* lessThanOrEqualToZero(0) ➞ true
* lessThanOrEqualToZero(-4) ➞ true
* lessThanOrEqualToZero(10) ➞ false

**5. Count Occurrences.** 
Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string. 

i.e. 
countOccurrences("this is a string", "i") ➞ 3 

**6. X To The Power of X.**
Create a function that takes a base number and an exponent number and returns the calculation. **NB:** All test inputs will be positive integers.

Examples:
* calculateBaseToExponent(5, 5) ➞ 3125
* calculateBaseToExponent(10, 10) ➞ 10000000000
* calculateBaseToExponent(3, 3) ➞ 27

**7. Dog Years.**
Create a function which calculates how old a dog is in human years. The function should accept one argument that is the puppy's age in doggie years. Calculate the dog's age in human years based on the calculation of 1 doggie year = 7 human years.

i.e. 
 dogAge(4) ➞ "Your doggo is 28 years old in human years!"

**8. A Lifetime Supply...**
Create a function to calculate how much you'll actually be getting for a lifetime supply of your favourite snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. **Bonus** Accept floating point values for amount per day and round the result. 

i.e. 

calcSupply(25, 2) ➞ "You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80."

calcSupply(40, 3) ➞ "You will need 43,800 packets of crisps  (3 a day) to last you til the age of 80."

**9. Where's Waldo?**
Create a function that takes a string and returns true if Waldo is found, and false if he's not.

Examples:
* isWaldoHere("is there wal here ?") ➞ false
* isWaldoHere("I found you Waldo!") ➞ true
* isWaldoHere("is wally here?") ➞ false
* isWaldoHere("waldo is here") ➞ true

**10. Pie.** 
Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:

* Total number of slices.
* Number of recipients.
* How many slices each person gets.

Examples:
* equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices 

* equalSlices(8, 3, 2) ➞ true
* equalSlices(8, 3, 3) ➞ false
* equalSlices(24, 12, 2) ➞ true

**11. XO**
Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

Notes:
	
* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.

Examples:
* XO("ooxx") ➞ true
* XO("xooxx") ➞ false
* XO("ooxXm") ➞ true (case insensitive)
* XO("zpzpzpp") ➞ true (returns true if no x and o)
* XO("zzoo") ➞ false

**12. isPrime?**
Create a function that returns true if a number is prime and false if it's not. **NB:** a prime number is any positive integer *greater than 1*, which is *only evenly divisible by two divisors: itself and 1*. The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

Examples:
* isPrime(7) ➞ true
* isPrime(9) ➞ false
* isPrime(10) ➞ false

**13. Validate Email.**
Create a function that takes a string, checks if it's a valid email address, and then accordingly returns either true or false.

* The string must contain an "@" character.
* The string must contain a "." character.
* The "@" must have at least one character in front of it.
* e.g. "john@example.com" is valid while "@example.com" is invalid.
* The "." and the "@" must be in the appropriate places.
* e.g. "john.smith@com" is invalid while "john.smith@email.com" is valid.

**Good Luck & Enjoy :)**

