var clicks = 0;
function tempClicks(event) {
  clicks++;
  var temp;
  if (clicks < 4) {
    temp = 'cold';
  } else if (clicks < 7) {
    temp = 'cool';
  } else if (clicks < 10) {
    temp = 'tepid';
  } else if (clicks < 13) {
    temp = 'warm';
  } else if (clicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  hButton.className = 'hot-button ' + temp;
  clickCount.textContent = 'Clicks: ' + clicks;
}

var hButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hButton.addEventListener('click', tempClicks);
