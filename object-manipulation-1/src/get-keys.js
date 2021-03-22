/* exported getKeys */
function getKeys(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}
