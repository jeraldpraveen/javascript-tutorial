// NaN ==> Not-A-Number is a global JS property
// You normally get this error when there is a non-numeric value
// or arithmetic operation performed on non-numeric value

var x = 5;
var y = "value"; //String
var z = x * y;
console.log(z);

var x1 = 5;
var y1 = ["value"]; // Array
var z1 = x1 * y1;
console.log(z1);

// NaN returns a unique value each time you refer it.
console.log(NaN == NaN); //false
// NaN cannot be compared directly. So we have to use isNaN()
// isNaN() is a JS function which return true or false
if (isNaN(x * y)) {
  console.log("Invalid");
} else {
  console.log("Valid");
}

// isFinite() method is better than isNaN()
// Because it not only checks for NaN but also checks for Infinity/-Infinity
if (isFinite(x * y)) {
  console.log("Valid");
} else {
  console.log("InValid");
}
console.log(isFinite(x * y));
console.log(isFinite(5 * 4));
console.log(isFinite(Number.POSITIVE_INFINITY));
console.log(isFinite(Infinity));

// Questions
// Q.1) What will be the output of the below statement?
// console.log(NaN==NaN);
// Ans: false (Because NaN returns a unique value each time you refer it)
// Q.2) What is the difference between isNaN() and isFinite() method?
// Ans: isFinite() not only checks for NaN but also checks for Infinity/-Infinity
