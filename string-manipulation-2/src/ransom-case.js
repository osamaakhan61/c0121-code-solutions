/* exported ransomCase */
function ransomCase(string) {
  string = string.toLowerCase();
  string = string.split('');
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      string[i] = string[i].toUpperCase();
    }
  }
  string = string.join('');
  return string;
}
