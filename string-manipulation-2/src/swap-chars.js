/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  const tempVar = string[secondIndex];
  string[secondIndex] = string[firstIndex];
  string[firstIndex] = tempVar;
  return string.join('');
}
