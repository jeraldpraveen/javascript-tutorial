const findFactors = (num) => {
  let factors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  console.log(factors);
  return factors;
};

const findMinimumDifference = (...nums) => {
  const numArray = nums;
  let min = numArray[0];
  for (let i = 0; i < numArray.length - 1; i++) {
    let j = i + 1;
    let temp = numArray[j] - numArray[i];
    if (temp > 0 && temp < min) {
      min = temp;
    }
  }
  return min;
};

const calculateHCF2 = (minDiff, ...nums) => {
  let factors = findFactors(minDiff);
  const numArray = nums;
  let isHCF = true;
  let hcf = 1;
  for (let i = factors.length - 1; i >= 0; i--) {
    isHCF = true;
    for (let j = 0; j < numArray.length; j++) {
      if (numArray[j] % factors[i] !== 0) {
        isHCF = false;
        break;
      }
    }
    if (isHCF) {
      hcf = factors[i];
      break;
    }
  }
  return hcf;
};

const calculateHCF = (...nums) => {
  const numArray = nums;
  let minIsHCF = true;
  let minDiff = findMinimumDifference(...numArray);
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] % minDiff !== 0) {
      minIsHCF = false;
      break;
    }
  }
  if (minIsHCF) {
    return minDiff;
  } else {
    return calculateHCF2(minDiff, ...numArray);
  }
};

// calculateHCF(15, 20, 30, 35, 55);
// calculateHCF(6, 18, 24, 32, 40);
// calculateHCF(17, 23, 44, 54, 57);

const result = calculateHCF(17, 23, 44, 54, 57);
console.log(result);
