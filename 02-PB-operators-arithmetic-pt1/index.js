// 0.
let x = 6;
console.log(x, typeof x);
let y = 7;
console.log(y, typeof y);

// 1.
console.log(x + y);

// 2.
console.log(x - y);
console.log(y - x);

// 3.
console.log(x * y);

// 4.
console.log(x / y);

// 5.
let z = 10;
console.log(z, typeof z);
let resultOne = (x * y) / z;
console.log(resultOne);

// 6.
let a = 15;
let b = 9;
console.log(a / b);

// 7.
let c = 20;
console.log(c, typeof c);
let resultTwo = (a + b) * c;
console.log(resultTwo);

// 8.
console.log(++a);

// 9.
console.log(--b);


// 10. my question: the answer should be 14 but why is the machine calculation result 12?
let d = b - a;
console.log(d);
console.log(d + c);

// 11.
console.log(resultOne % resultTwo);