const multiplicationTable = (num) => {
  for (i = 1; i <= 10; i++) {
    let result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  }
};

multiplicationTable(5);
