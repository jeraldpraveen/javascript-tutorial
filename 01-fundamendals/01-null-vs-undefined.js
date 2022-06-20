//normal
var z = 9;
console.log(z);
console.log(typeof z);

// undefined
var x;
console.log(x);
console.log(typeof x);

// null
var y = null;
console.log(y);
console.log(typeof y);

//Non-Strict Equality(Checks Value only)
var x1 = 9;
var y1 = "9";
console.log(x1 == y1);

var x;
var y = null;
console.log(x == y);

//Strict Equality(Checks BOTH Value & DataType)
var x2 = 9;
var y2 = "9";
console.log(x2 === y2);

// Undefined declaration
var x3 = undefined;
console.log(x3);

// My doubt
var x4 = null;
var x5 = null;
console.log(x4 == x5);

// Questions
// Q.1) What is "undefined" in JavaScript ?
// Ans: undefined is a datatype in Js.
// Q.2) What will be the output of undefined==null & undefined===null ? Why ?
// Ans: undefined==null --> True(Both are nothing-ness)
// Ans: undefined===null --> False(Strict equality compares both value & datatype)
// Q.3) Can you explicitly assign "undefined" to a variable ? (let i = undefined)
// Ans: Yes
