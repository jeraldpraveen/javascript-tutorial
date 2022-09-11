const check = (num) => {
  let check = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      check = false;
    }
  }
  return check;
};

let result = check(101);
console.log(result);
