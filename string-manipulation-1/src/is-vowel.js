/* exported isVowel */
function isVowel(char) {
  var bool = false;
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    bool = true;
    return bool;
  }
  return bool;
}
