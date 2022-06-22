// Iterator --> Introduced in ES6
// Iterator is kind of new machanism to traverse through data structures
// Array is  already iterable --> You can put for..of loop on an array
let array = [4, 5, 6, 7];
for (let i of array) {
  console.log(i);
}
// What happens behind the screens is Array has a key [Symbol.iterator]
let array1 = [4, 5, 6, 7];
let itr = array1[Symbol.iterator]();
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
// Now, we have used [Symbol.iterator] to iterate through an Array
// But Map is not iterable --> You CANNOT put for..of loop on an map
// Say,You want to use for..of loop on a Map(Object)
// You can do this in ES6 using [Symbol.iterator]
// We are going to convert an Object literal(Map) into iterable object
let obj = {
  start: 10,
  end: 15,
};
// I need to use for(let i of obj) --> This is not possible
let obj1 = {
  start: 10,
  end: 15,
};
// When you want to make object literal iterable, it should have method having
// key value as [Symbol.iterator]. It should also have next() method
obj1[Symbol.iterator] = function () {
  const itr = {
    next() {
      if (obj1.start <= obj1.end) {
        return { value: obj1.start++, done: false }; // increment start variable
      } else {
        return { done: true };
      }
    },
  };
  return itr;
};
for (let i of obj1) {
  console.log(i);
}

// Another Syntax
let obj2 = {
  start: 10,
  end: 15,
};
obj2[Symbol.iterator] = function () {
  return {
    next() {
      if (obj2.start <= obj2.end) {
        return { value: obj2.start++, done: false }; // increment start variable
      } else {
        return { done: true };
      }
    },
  };
};
for (let i of obj2) {
  console.log(i);
}

// Another syntax
let obj3 = {
  start: 10,
  end: 15,
  [Symbol.iterator]: function () {
    return {
      next() {
        if (obj3.start <= obj3.end) {
          return { value: obj3.start++, done: false }; // increment start variable
        } else {
          return { done: true };
        }
      },
    };
  },
};
for (let i of obj3) {
  console.log(i);
}
// In the above example, next() method is placed inside [Symbol.iterator] method
// Now, lets take next() method outside
// This is better way. But it has limitations
// LIMITATION-1:Returning the object reference(this) is only possible when iterable & iterator are same object
// LIMITATION-2:If there are two or more for..of running simulatneously, then this syntax will not work
let obj4 = {
  start: 10,
  end: 15,
  [Symbol.iterator]: function () {
    return this; //Here you must return the objecyt itself,otherwise there will be no reference
  },
  next: function () {
    if (obj4.start <= obj4.end) {
      return { value: obj4.start++, done: false }; // increment start variable
    } else {
      return { done: true };
    }
  },
};
for (let i of obj4) {
  console.log(i);
}

// Questions
// Q.1) What is the purpose of the iterator ?
// Ans: Iterator is kind of new machanism to traverse through data structures
//      Array is  already iterable --> You can put for..of loop on an array
//      But Map is not iterable --> You CANNOT put for..of loop on an map
//      Say,You want to use for..of loop on a Map(Object)
//      You can do this in ES6 using [Symbol.iterator]
//      We are going to convert an Object literal(Map) into iterable object
// Q.2) How do you create an iterator ?
// Ans: The [Symbol.iterator] method must be implemented which should return an iterator object &
//      & should have a next() method which returns an object({ value: obj4.start++, done: false })
// Q.3) Explain a practical use of an iterator ?
// Ans: You create Custom Data Structure used by other developers.
// Ans: As a custom data structure needs to have a provision of 'for..of' loop,then if your object is not iterable then it won't work
