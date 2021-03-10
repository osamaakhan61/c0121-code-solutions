const $openButton = document.querySelector('.open-button');
const $modalWindow = document.querySelector('.modal');
const $closeButton = document.querySelector('.close-modal');

$openButton.addEventListener('click', function () {
  $modalWindow.className = 'modal';
})
;

$closeButton.addEventListener('click', function () {
  $modalWindow.className = 'hidden';
})
;
