// An Armstrong number is one whose sum of digits raised to the power three equals the number itself.
// 371, for example, is an Armstrong number because 3**3 + 7**3 + 1**3 = 371

const check = (num) => {
 let originalNumber = num;
 let sum=0;

 while(num >= 1){
  let temp = num%10;
  sum += (temp*temp*temp);
  num = Math.floor(num/10);
 }
return originalNumber === sum ? true:false;
};

const result = check(153);
console.log(result)