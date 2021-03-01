/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === null || array[i] === NaN || array[i] === 0 || array[i] === -0 || array[i] === undefined || array[i] === '') {
      array[i].pop();
    } else {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
