const sumOfNatural = (num) => {
  if (num == 0) {
    return 0;
  } else {
    return num + sumOfNatural(num - 1);
  }
};

const result = sumOfNatural(6);
console.log(result);
