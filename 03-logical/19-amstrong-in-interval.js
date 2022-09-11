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
  return amstrong;
};

const amstrongInterval = (from, to) => {
  const amstrongArray = [];
  for (let i = from; i <= to; i++) {
    let temp = checkAmstrong(i);
    if (temp) {
      amstrongArray.push(i);
    }
  }
  return amstrongArray;
};

const result = amstrongInterval(0, 410);
console.log(result);
