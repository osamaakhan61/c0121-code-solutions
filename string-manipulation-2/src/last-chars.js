/* exported lastChars */
function lastChars(length, string) {
  const newString = string.substring(string.length - length, string.length);
  return newString;
}
