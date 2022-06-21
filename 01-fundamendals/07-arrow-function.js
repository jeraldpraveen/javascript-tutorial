// Traditional Function
function test() {
  // ...Some Logic...
}

// Function Expression
const test1 = function () {
  // ...Some Logic...
};

// Arrow Function
const test3 = () => {
  // ...Some Logic...
};

// Arrow Syntax
const test4 = (a) => {
  return a;
};
console.log(test4(5));

// If only one line in function, we can avoid return Statement too
// Code becomnes more cleaner & simpler
const test5 = (a, b) => a + b;
console.log(test5(5, 6));

// IIFE - Immediately Invoked Function Expression
// Function that calls itself
// IIFE is Used to avoid global leakages
(function () {
  console.log("IIFE");
})();

// IIAF - Immediately Invoked Arrow Function
// Arrow function can also be made to call itself
(() => {
  console.log("IIAF");
})();

// THIS keyword -->
// You get 'window' as reference for this
// Run this peice of code in Browser(https://jsfiddle.net/)
const test6 = () => {
  console.log(this); // returns window
};
test6();

// If we use 'new' keyword for function calling then ==> 'This' keyword reference changes
// Earlier the function also had the job of a class
// Function used to behave like a class if called with 'new' keyword
// Now, Arrow function is just a function. It does not have to behave like a class
// Because 'class' keyword does the behaviour of class. So function is enough to just be a function
// Run this peice of code in Browser(https://jsfiddle.net/)
function test7() {
  console.log(this);
}
test7(); // returns window
var a = new test7(); // returns object

// 'This' keyword usage inside Object Literal
// Run this peice of code in Browser(https://jsfiddle.net/)
const obj = {
  test: function () {
    console.log(this); // returns object
  },
};
obj.test();

const obj1 = {
  test: () => {
    console.log(this); // returns window(Global Scope)
  },
};
obj1.test();

// 'arguments' Keyword don't work inside Arrow Function. We have Rest operator for handling this
function test8() {
  console.log(arguments); // Work
}
test8(5, 6);

const test9 = () => {
  console.log(arguments); // Don't work in Arrow
};
test9(5, 6);

// 'new' keyword cannot be used for arrow function calling
// We have 'class' keyword for that.
const test10 = () => {
  console.log("new keyword");
};
// var a = new test10(); // This gives Error --> test10 is not a constructor

// Questions
// Q.1) Explain the syntactical features of arrow function.
// Ans: No brackets -> If single parameter
// Ans: No return required --> If single line
// Q.2) Why “this” does not work in arrow function?
// Ans: No. We already have 'class' keyword to deal with the classes
// Ans: So, we do not need function to act as a class
// Q.3) Explain output of following code with reason.
// const obj={
//      method:()=>{
//          console.log(this);
//       }
// }
// Ans: In traditional function written inside object --> returns current context. i.e.Object
// Ans: In Arrow function written inside object --> returns global context. i.e.window in Browser
// Q.4) How can you handle arguments object like functionality in arrow function?
// Ans: Rest parameter is alternative for arguments in Arrow function
// Q.5) Can you write IIFE with arrow function syntax?
// Yes,Of course
// (() => {
//   console.log("IIAF");
// })();
