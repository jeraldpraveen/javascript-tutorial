// REST OPERATOR
// Create a function which should take any number of arguments
const restExample = (...nums) => {
  console.log(nums);
};
restExample(1, 2);
restExample(3, 4, 5);

// A rest parameter must be last in a parameter list.
// Rest parameter should be at last only. Hence the name Rest operator.. i.e.for the rest of the parameters
// Try this. You will get error
// const restExample1 = (...a,b) => {
//   console.log(nums);
// };
// restExample1(1,2)

// ARGUMENT CONCEPT IN JS
// ARGUMENTS does not return Array (i.e.like Rest operator)

function argumentExample() {
  console.log(arguments);
}
argumentExample(1, 2);

// ARGUMENTS does not work with Arrow functions.
// Rest Operator is the  only way to get any no of arguments in Array Functions
argumentExample = () => {
  console.log(arguments);
};
argumentExample(1, 2);

// SPREAD Operator
// As the Rest operator puts the seperate data values(arguments) in one Array
// The spread operator does exactly the opposite.
// Spread operator spreads the Array value into individual values.Hence the name SPREAD
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Array 'arr1' values are spreaded inside of 'arr2'
console.log(arr1);
console.log(arr2);
// Spread operator is also useful in this scenarios
console.log(Math.max(arr2)); // Here array is passed
console.log(Math.max(...arr2)); // Here series of seperate values is passed

// Questions
// Q.1) Can we use arguments object in arrow function?
// Ans: No, arrow function does not support Arguments(JS Concept).
// Ans: Arguments work in Traditional function syntax only(i.e.function test(){...})
// Q.2) Which is the best way to create new arrays with assignment?
// Ans: arr1 = [arr,5,6,7] is not best way.Since both are objects
// Ans: arr1 = [...arr,5,6,7] --> Best Practice
// Q.3) How can you handle the “n” number of parameters passed to a function ?
// or create a function which can take any number of parameters and returns sum or max or any other such calculative values.
// Ans: Rest operator
// Q.4) Can the rest operator be placed anywhere in the function parameter list? Or
//       function test(...a,b){
//          //statements
//       }
// Is this piece of code valid? Give the reason.
// Ans: Rest operator can only be only at last as it is the rest of the parameters
