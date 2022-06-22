// Generators can help you to pass & resume the code
// Traditionally, function returns a single value.
// Generators - can return multiple values in phases
// 'function*' keyword is used to define generator
// ''yeild'' is an operator which pauses the generator
// ''yeild'' also helps in receive input & send output
const generatorFunction = function* () {
  console.log("Hello");
  yield "TestValue";
  console.log("World");
  yield;
  console.log("And Galaxy");
};

const generatorObject = generatorFunction();
// next() method returns an object with keys-value&done
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
// Generators are iterable too
for (let o of generatorObject) {
  console.log(o);
}
// Since generator object is iterable, you can also use a spread operator
const genObject = [...generatorFunction()];
console.log(genObject);

// Practical Application
let generatorObject1 = {
  start: 10,
  end: 15,
  [Symbol.iterator]: function* () {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt;
    }
  },
};
for (let i of generatorObject1) {
  console.log(i);
}

// Another Syntax
let generatorObject2 = {
  start: 10,
  end: 15,
  *[Symbol.iterator]() {
    for (let cnt = this.start; cnt <= this.end; cnt++) {
      yield cnt;
    }
  },
};
console.log([...generatorObject2]);

// 'yield' works only with generator only
// When it comes to recursive function or calling one generator function
// from another the 'yield*' syntax is used
function* gen() {
  console.log("1");
}
function* gen1() {
  const g = gen();
  g.next();
  console.log("2");
}
const g1 = gen1();
g1.next();

// Another Syntax
function* gen3() {
  console.log("1");
}
function* gen4() {
  yield* gen3(); // yeild is valid only inside f=generator function
  console.log("2");
}
const g4 = gen4();
g4.next();

// Generator also has return() & throw() methods
// return() is similar to next()
function* gen5() {
  yield "One";
  yield "Two ";
}
const g5 = gen5();
console.log(g5.next());
console.log(g5.next());
console.log(g5.next());
// return() implementation
// So when you want to terminate generator function, use return() method
const g55 = gen5();
console.log(g55.return("Condition Done"));
console.log(g55.next());
console.log(g55.next());

// Writing yield inside finally will not allow the return() to terminate
function* gen6() {
  try {
    yield "One";
    yield "Two ";
  } finally {
    yield "Finally";
  }
}
const g6 = gen6();
console.log(g6.next());
console.log(g6.return()); // Termination is suspended due to finally
console.log(g6.next());

// throw() method throws an exception at the location of yield
// which made last suspension in the generator function
function* gen7() {
  try {
    yield "One";
    yield "Two ";
  } catch (err) {
    console.log("Error " + err);
  }
}
const g7 = gen7();
console.log(g7.next());
console.log(g7.throw()); // Terminated

// Generatorrs are rarely used in JS
// But for async process, iterators & generators combined can work well

// Questions
// Q.1) What are generator functions? Explain the syntax.
// Ans: Generators can help you to pass & resume the code
// Ans: function* gen5() {
//          yield "One";
//          yield "Two ";
//      }
// Q.2) Which is the right syntax function* () { } or function *(){} ?
// Ans: Both are right
// Q.3) Explain all methods of generator objects.
// Ans: next(),return(),throw()
// Q.4) Explain the use of “yield*”
// Ans: used to call generator function from another generator function
// Q.5) Can you prevent return() from terminating the generator ?
// Ans: yes,by using 'finally' keyword

// Deep dive into Generator
// https://www.youtube.com/watch?v=O2b33uzXg-4&ab_channel=DeveloperTharun
// https://www.youtube.com/watch?v=IJ6EgdiI_wU&t=618s&ab_channel=WebDevSimplified
