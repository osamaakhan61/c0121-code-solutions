/* exported numVowels */
function numVowels(string) {
  string = string.toLowerCase();
  string = string.split('');
  let vowelCounter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
