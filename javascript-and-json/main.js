var booksArray = [
  {
    isbn: '9780465026562',
    title: 'Godel, Escher, Bach: An Eternal Golden Braid',
    author: 'Douglas R Hofstadter'
  },
  {
    isbn: '9780674979857',
    title: 'Capital in the Twenty-First Century',
    author: 'Thomas Piketty'
  },
  {
    isbn: '9780374538668',
    title: "Blockchain Chicken Farm: And Other Stories of Tech in China's Countryside",
    author: 'Xiaowei Wang'
  }
]
;

console.log('books: ', booksArray);
console.log('typeof books: ', typeof (booksArray));

JSON.stringify(booksArray);

console.log('books: ', JSON.stringify(booksArray));
console.log('typeof books: ', typeof (JSON.stringify(booksArray)));

var jsonString = '{"Number id": "4523213","String name": "Osama"}';

console.log('string: ', jsonString);
console.log('typeof string: ', typeof (jsonString));

console.log('JSON object: ', JSON.parse(jsonString));
console.log('JSON typeof: ', typeof (JSON.parse(jsonString)));
