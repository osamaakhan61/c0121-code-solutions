/* exported isLowerCased */
function isLowerCased(word) {
  var bool = false;
  for (var i = 0; i < word.length; i++) {
    if (!(word[i] <= 'Z' && word[i] >= 'A')) {
      bool = true;
    } else {
      bool = false;
      return bool;
    }
  }
  return bool;
}
