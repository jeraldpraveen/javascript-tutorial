function isPalindrome(string) {
  var lowerString = string.toLowerCase();
  var charArray = lowerString.split("");
  var validCharecters = "abcdefghijklmnopqrstuvwxyz";
  var lettersArray = [];
  var isPalindrome = true;
  charArray.forEach((char) => {
    if (validCharecters.includes(char)) lettersArray.push(char);
  });
  // var arrayLength = lettersArray.length - 1;
  // var last = arrayLength;
  // for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
  //   if (lettersArray[i] !== lettersArray[last]) isPalindrome = false;
  //   last--;
  // }
  // console.log(isPalindrome);
  // return isPalindrome;

  // Alternate Solution
  if (lettersArray.join("") === lettersArray.reverse().join("")) {
    console.log(true);
    return true;
  } else {
    return false;
  }
}

isPalindrome(`Madam,I'm Adam`);
