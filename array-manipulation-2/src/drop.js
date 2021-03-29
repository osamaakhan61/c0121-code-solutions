/* exported drop */
function drop(array, count) {
  const newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
