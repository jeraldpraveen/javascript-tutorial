const printPrime = (num) => {
  let check = true;
  let primeArray = [];
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        check = false;
        break;
      }
    }
    if (!check) {
      check = true;
    } else {
      primeArray.push(i);
    }
  }
  return primeArray;
};

let result = printPrime(11);
console.log(result.toString());
