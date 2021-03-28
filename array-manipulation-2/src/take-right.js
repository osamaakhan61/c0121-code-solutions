/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  for (var i = array.length - 1; i >= array.length - count; i--) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.unshift(array[i]);
    }
  }
  return newArray;
}
