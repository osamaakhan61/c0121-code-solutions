function handleFocus(event) {
  console.log('Focus event was fired', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event was fired', event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var inputSelect = document.querySelectorAll('input');
var textAreaSelect = document.querySelector('textarea');

inputSelect.forEach(function (element) {
  element.addEventListener('focus', handleFocus);
  element.addEventListener('blur', handleBlur);
  element.addEventListener('input', handleInput);
});

textAreaSelect.addEventListener('focus', handleFocus);
textAreaSelect.addEventListener('blur', handleBlur);
textAreaSelect.addEventListener('input', handleInput);
