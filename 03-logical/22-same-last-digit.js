const sameCheck = (...nums) => {
  const numArray = nums;
  let lastDigitSame = true;
  let lastDigit = numArray[0] % 10;
  let temp;
  for (let i = 1; i < numArray.length; i++) {
    temp = numArray[i] % 10;
    if (temp !== lastDigit) {
      lastDigitSame = false;
      break;
    }
  }

  console.log(lastDigitSame);
  return lastDigitSame;
};

sameCheck(8, 38, 89);
