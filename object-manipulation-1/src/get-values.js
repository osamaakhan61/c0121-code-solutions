/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
