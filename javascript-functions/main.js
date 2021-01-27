function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('Minutes to seconds: ', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('Greet: ', greet('Osama'));

function getArea(width, height) {
  return width * height;
}

console.log('Area of rectangle: ', getArea(5, 4));

function getFirstName(person) {
  return person.firstName;
}

console.log('First name: ', getFirstName({ firstName: 'Osama', lastName: 'Khan' }));

function getLastElement(array) {
  var last = array.length - 1;
  return array[last];
}

console.log('Last Element: ', getLastElement(['propane', 'and', 'propane', 'accessories']));
