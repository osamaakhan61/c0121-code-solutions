/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  let i = 0;
  while (i < array.length) {
    if (array.length === 0) {
      return [];
    } else {
      newArray.push(array.slice(i, i += size));
    }
  }
  return newArray;
}
