// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibonacci = (num) => {
  console.log(0);
  if (num >= 1) {
    console.log(1);
  }
  let n1 = 0;
  let n2 = 1;
  let sum = 0;
  for (i = 3; i <= num; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    console.log(sum);
  }
};

fibonacci(10);
