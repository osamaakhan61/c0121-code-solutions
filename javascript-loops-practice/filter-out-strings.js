/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'string') {
      // eslint-disable-next-line no-void
      void (0);
    } else {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
