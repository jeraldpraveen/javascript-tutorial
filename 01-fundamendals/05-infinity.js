// The global property 'Infinity' is a numeric value representing infinity.
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
console.log(Number.POSITIVE_INFINITY); /* Infinity */
console.log(Number.NEGATIVE_INFINITY); /* -Infinity */

// Validations
const num = 1 / 0;
console.log(num === Infinity); // Not Good Practice
console.log(num === Number.POSITIVE_INFINITY); // Good Practice

// There is a 'e' feture in JS for declaring Multiple of  10's
console.log(9e3); // 9*1000 (3 zeros)
console.log(-9e3); // 9*1000

// In JS, values are stored in 64-bit format.
// Any values which cannot fit in 64-bit format returns Infinity
// i.e.Value is larger than 64-bit returns Infinity
console.log(9e400); // 9* 400 zeros
console.log(-9e400);

// Questions
// Q.1) How will you put a validation for positive or negative Infinity?
// Ans: if(num === Number.POSITIVE_INFINITY){...some logic...}
// Q.2) What will be the output of this code?
// Code:
// console.log(1/0);
// Ans: Infinity
