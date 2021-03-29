/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = array.length - 1; i >= array.length - count; i--) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
