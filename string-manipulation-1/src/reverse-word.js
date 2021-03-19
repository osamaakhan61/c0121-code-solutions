/* exported reverseWord */
function reverseWord(word) {
  var stringLength = word.length;
  var reverse = '';
  while (stringLength > 0) {
    reverse += word.substring(stringLength - 1, stringLength);
    stringLength--;
  }
  return reverse;
}
