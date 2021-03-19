/* exported toObject */
function toObject(keyValuePair) {
  const newObject = {};
  keyValuePair.forEach(key => {
    newObject[key] = key + 1;
  });
  return newObject;
}
