/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.reduce(reducer);
  },
  getAverage: function (numbers) {
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sumTotal = numbers.reduce(reducer);
    return sumTotal / numbers.length;
  }
}
;
