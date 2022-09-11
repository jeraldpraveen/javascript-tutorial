const swap = (a, b) => {
  console.log(`Value of a is ${a} & Value of b is ${b}`);
  let temp = a;
  a = b;
  b = temp;
  console.log(`Value of a is ${a} & Value of b is ${b}`);
};

swap(5, 4);
