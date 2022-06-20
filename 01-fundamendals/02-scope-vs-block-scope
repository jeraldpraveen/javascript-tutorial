// Local scope
const a = () => {
  // console.log(x);
};

const b = () => {
  var x = 5;
};

a();
b();

//Global Scope
var x1 = 10;
const a1 = () => {
  console.log(x1);
};

const b1 = () => {
  x1 = x1 + 5;
};

b1();
a1();

// Hoisting - Brings variable declaration on top
var x4;
console.log("Test");
var y4;
var z4 = 5;
// Since hoisting is done for 'var' keyword.THis is what happens behind the screens
var x3, y3, z3;
console.log("Test");
z3 = 5; //Assignment happens here only. But only variable declaration is taken to top(Hoisting)

// Hosting is not done for 'let' keyword
let x5;
console.log("No Hoisting");
{
  let x5;
}

// What is Hoisting?
// Hoisting is a process which is happening behind the screens,internally it is bringing the declarations on Top
// var keyword - Hoisting happens
// let keyword - No Hoisting
// Hoisting vs Non-Hoisting Example
console.log(x25);
var x25; // var keyword
console.log(y25);
let y25; // let keyword

// Questions
// Q.1) What is hoisting in javascript ?
// Ans: Hoisting is a process which is happening behind the screens,internally it is bringing the declarations on Top
// Q.2) How does block scope work ?
// Ans:It is nothing but {},a block that creates seperate scope
// Q.3) What is the scope of a variable ?
// Ans:Availablity or visiblity or lifetime of a variable
