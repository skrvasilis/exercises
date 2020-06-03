'use strict';
let sum = 0;
// 1.
for (let i = 1; i <= 20; i++) {
    sum += i;
}
console.log(sum);

// 2. 
for (let i = 1; i <= 5; i++) {
    switch (i) {
        case 1:
            console.log(`There is one bottle of beer on the wall `)
            break
        case 2:
            console.log(`There are two bottles of beer on the wall `);
            break
        case 3:
            console.log(`There are three bottles of beer on the wall `);
            break
        case 4:
            console.log(`There are four bottles of beer on the wall `);
            break
        case 5:
            console.log(`There are five bottles of beer on the wall `);
    }
}

// 3. 
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, ' is even');
    } else {
        console.log(i, ' is odd');
    }
}

// 4.
let myString = '';
for (let i = 0, multiple = 0; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        myString = myString + ' ' + (j * i);
    }
    console.log(myString);
    multiple = i * 9;
    console.log(`${i} * 9 = ${multiple}`);
    myString = '';
}
// 5. 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

// 6. 
let sum6 = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum6+=i;
}
}
console.log(sum6);

// 7. 
let hundred = '';
for (let i=100; i<=1000; i+=100) {
    hundred = hundred +' ' + i;  
}
console.log(hundred);

for (let i = 1, j = 1; i<=8; i++) {
    console.log('7.b ' , j);
    j=j*2;
}

for (let i = 0; i <=10; i+=2) {
    console.log('7.c ' , i);
}

for (let i = 3; i<=15; i+=3) {
    console.log('7.d ' , i);
}
for (let i = 9; i>=0; i--) {
    console.log('7.e ',  i);
}
// missing
for (let i = 0; i<=2; i++) {
    for (let j = 0; j<=4; j++) {
        console.log('7. j' , j);
    }
}

// 8.
console.log('ex.8');
let myString8 = 'madam';
let myLength = myString8.length;
let palindrome = false;
for (let i = 1, first = '', last = ''; i<=myLength; i++) {
    //  console.log(myString[myString.length - i]);
    //  console.log(myString[i-1]);
    first = myString8[myString8.length - i];
    last = myString8[i-1];
    if (first === last) {
        palindrome = true;
    } else {
        palindrome = false;
    }
}
console.log(palindrome); 


/* let    i =1;
let    first = myString8[myString8.length - i];
let    last = myString8[i-1];
 while (first === last) {
     palindrome = true;
     i++;
     first = myString8[myString8.length - i];
     last = myString8[i-1];
} 
console.log(palindrome); */