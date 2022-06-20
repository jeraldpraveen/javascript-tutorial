// ASI-Automatic Semicolon Insertion
console.log("Hi");

// Whenever there is line break, JS inserts semi colon automatically
let a = 4 * 5;
console.log(a);

// In this case, JS adds semicolon automatically after return...
// We actually want to return the object inside {a=5} here. But we won't get expected result here.
// So adding semicoln is a good practice. If not JS might add it in unneccessary places.
// Also be carefull in block creation i.e.{}
const testFunction = () => {
  return;
  {
    a = 5;
  }
};

console.log(testFunction());

// Questions
// Q.1) Should you terminate all lines by a “;” ?
// Ans: It is optional. But adding semicoln is a good practice.
// Q.2) Why this code is returning undefined in spite of function returning a valid object literal ?
//          function test(){
//    	           return
//    	           {
//       	           a:5
//     	           }
//          }
//         const obj=test();
//         console.log(obj);
// Ans: JS add ';' in unneccessary places. We get output as 'undefined' in above example.
// Q.3) Can ‘use strict’ statement or the strict mode change the behavior of ASI ?
// Ans: No, ‘use strict’ does not change the behaviour of ASI
