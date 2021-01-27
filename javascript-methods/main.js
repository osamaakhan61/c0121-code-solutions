var num1 = 20;
var num2 = 5;
var num3 = -2;

var maximumValue = Math.max(num1, num2, num3);

console.log('Max value: ', maximumValue);

var heroes = [
  'Iron Man',
  'Batman',
  'Superman',
  'The Flash'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('Random value: ', randomIndex);

var randomHero = heroes[randomIndex];

console.log('Random hero: ', randomHero);

var library = [
  {
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Das Kapital',
    author: 'Karl Marx'
  }
];

var lastBook = library.pop();

console.log('Last book: ', lastBook);

var firstBook = library.shift();

console.log('First book: ', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);

library.splice(1, 1);

console.log('New library: ', library);

var fullName = 'Osama Khan';

var firstAndLastName = fullName.split(' ');

console.log('First and last name: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('Say my name: ', sayMyName);
