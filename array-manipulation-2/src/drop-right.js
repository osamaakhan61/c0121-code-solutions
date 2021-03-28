/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
