/* exported truncate */
function truncate(length, string) {
  let newString = string.substring(0, length);
  newString = newString + '...';
  return newString;
}
