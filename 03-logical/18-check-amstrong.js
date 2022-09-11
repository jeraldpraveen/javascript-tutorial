// Armstrong number is a number that is equal to the sum of cubes of its digits.
// 153 = (1*1*1)+(5*5*5)+(3*3*3)

const checkAmstrong = (num) => {
  let amstrong = false;
  const final = num;
  let sum = 0;
  let temp = 0;
  while (num >= 1) {
    temp = num % 10;
    sum += Math.pow(temp, 3);
    num = Math.floor(num / 10);
  }
  if (sum === final) {
    amstrong = true;
  }
  console.log(amstrong);
  return amstrong;
};

checkAmstrong(372);
