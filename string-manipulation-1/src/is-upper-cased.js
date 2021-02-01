/* exported isUpperCased */
function isUpperCased(word) {
  var bool = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] <= 'Z' && word[i] >= 'A') {
      bool = true;
    }
  }
  return bool;
}
