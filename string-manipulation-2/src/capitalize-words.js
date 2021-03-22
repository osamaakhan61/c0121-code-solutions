/* exported capitalizeWords */
function capitalizeWords(string) {
  string = string.toLowerCase();
  string = string.split(' ');
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return string.join(' ');
}
