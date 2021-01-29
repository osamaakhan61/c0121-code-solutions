/* exported countdown */
function countdown(number) {
  var numArray = [];
  var counter = number;
  for (var i = 0; i <= number; i++) {
    numArray.push(counter);
    counter = counter - 1;
  }
  return numArray;
}
