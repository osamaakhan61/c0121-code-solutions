/* exported reverse */
function reverse(array) {
  var newArray = [];
  while (array.length > 0) {
    newArray.push(array[array.length - 1]);
    array.length--;
  }
  return newArray;
}
