const sumOfNatural = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

const result = sumOfNatural(100);
console.log(result);
