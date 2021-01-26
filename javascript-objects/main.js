var student = {
  firstName: 'Osama ',
  lastName: 'Khan',
  age: 25
};

var fullName = student.firstName + student.lastName;

console.log('Value of full name: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Business Analyst';

console.log('Value of Irvine: ', student.livesInIrvine);
console.log('Value of Occupation: ', student.previousOccupation);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: '2020'
};

vehicle['color'] = 'Grey';

vehicle['isConvertible'] = false;

console.log('Value of color: ', vehicle['color']);
console.log('Value of convertible: ', vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Tanto',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('Value for pet: ', pet);
