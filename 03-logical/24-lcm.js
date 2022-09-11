let multiplier = 2;
const calculateLCM = (maxNumber, ...nums) => {
  const numArray = nums;
  let isLCM = true;
  for (let i = 0; i < numArray.length; i++) {
    if (maxNumber % numArray[i] !== 0) {
      isLCM = false;
      break;
    }
  }
  if (isLCM) {
    return maxNumber;
  } else {
    let maxNumber = Math.max(...numArray);
    maxNumber = maxNumber * multiplier;
    multiplier += 1;
    return calculateLCM(maxNumber, ...numArray);
  }
};

const calculate = (...nums) => {
  let maxNumber = Math.max(...nums);
  return calculateLCM(maxNumber, ...nums);
};

// calculate(3, 4, 6, 18);
// calculate(4, 8, 16);
// calculate(5, 10, 15, 20);
// calculate(2, 3, 6, 7, 12);
const result = calculate(2, 3, 6, 7, 12);
console.log(result);
