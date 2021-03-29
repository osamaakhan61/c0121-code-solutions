/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (key in source === true && key in target === false) {
      target[key] = source[key];
    }
  }
  return target;
}
