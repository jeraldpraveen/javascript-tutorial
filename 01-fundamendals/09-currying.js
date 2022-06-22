// Currying is a unique way to call inner functions where you can pass arguments partially or pass multiple
// arguments in a function but 1 argument at a time.
// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
// Noncurried version
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5)); // 10

// Curried version
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addCurry(2)(3)(5)); // 10

// Curried version ==> Arrow Syntax
const arrowCurry = (a) => (b) => (c) => a + b + c;
console.log(arrowCurry(2)(3)(5)); // 10

// Curried version ==> Another Arrow Syntax
const arrowCurry1 = (a) => (b) => (c) => a + b + c;
const first = arrowCurry1(2);
const second = first(3);
const third = second(5);
console.log(third);

// Practical use of currying
// Let's see an example where we have Product price & discount calculation
const priceCalculation = (price) => {
  return (discountPercentage) => {
    return price * discountPercentage;
  };
};
// price ==> Received from some API
// discountCalculation => Non-currying method to calculate discount
// Case-1: 30% --> discountCalculation(300,0.3)
// Case-2: 50% --> discountCalculation(300,0.5)
// In Case-1 & Case-2, we have common price, only discount perfcentage changes
// In this example, only one parameter i.e.discounted price varies
// But, there can be multiple parameters you want to pass with only one different value. Currying is the solution
const discountPercentage = priceCalculation(300);
const discountAmount30 = discountPercentage(0.3);
const discountAmount50 = discountPercentage(0.5);
const discountAmount20 = discountPercentage(0.2);
console.log(discountAmount30);
console.log(discountAmount50);
console.log(discountAmount20);

// Questions
// Q.1) What is function currying?
// Ans: Currying is a unique way to call inner functions where you can pass arguments partially or pass multiple
//      arguments in a function but 1 argument at a time.
// Q.2)const multiplication=a=>b=>c=>return a*b*c
// What will this statement do? Explain in detail.
// Ans: one main function, child function & grandchild function which return multiplied result
// Q.3) Explain practical usage of function currying.
// Ans: Currying is a useful technique of functional programming which solves various purposes like passing partial parameters
//      or avoiding unwanted repetitions like we tried with priceCalculation where price was passed only once.
