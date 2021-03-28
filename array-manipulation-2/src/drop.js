/* exported drop */
function drop(array, count) {
  const newArray = [];
  for (var i = count; i < array.length; i++) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
