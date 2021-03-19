/* exported getWords */
function getWords(string) {
  var wordsArray = [];
  if (string === '') {
    wordsArray.pop();
    return wordsArray;
  } else {
    wordsArray = string.split(' ');
    return wordsArray;
  }
}
