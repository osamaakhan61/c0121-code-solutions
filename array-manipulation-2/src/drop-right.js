/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
