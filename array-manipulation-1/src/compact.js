/* exported compact */
function compact(array) {
  const newArray = [];
  for (const i of array) {
    i && newArray.push(i);
  }
  array = newArray;
  return array;
}
