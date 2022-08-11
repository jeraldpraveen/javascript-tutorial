function ceasarCipher(string, num) {
  var lowerString = string.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var newString = "";

  for (let i = 0; i < lowerString.length; i++) {
    var currentLetter = lowerString[i];
    if (currentLetter === " ") {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = newIndex + 26;
    if (string[i] === string[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  }
  console.log(newString);
  return newString;
}

ceasarCipher("zoo KEeper", 2);
