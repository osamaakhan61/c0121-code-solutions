function ExampleConstructor() {}
console.log('Prototype: ', ExampleConstructor.prototype);
console.log('Prototype typeof: ', typeof ExampleConstructor.prototype);

var newFunc = new ExampleConstructor();
console.log('New: ', newFunc);

var ifInstance = newFunc instanceof ExampleConstructor;
console.log('Is it an instanceof: ', ifInstance);
