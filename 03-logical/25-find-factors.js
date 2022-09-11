const findFactors = (num) => {
  let factors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

const result = findFactors(12);
console.log(result);
