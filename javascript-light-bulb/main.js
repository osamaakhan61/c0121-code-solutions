var lightBulbOn = true;

function ifClicked(event) {
  if (lightBulbOn === true) {
    backgroundLight.className = 'black';
    lightbulbClick.className = 'off';
    lightBulbOn = false;
  } else {
    backgroundLight.className = 'background';
    lightbulbClick.className = 'lightbulb';
    lightBulbOn = true;
  }
}

var lightbulbClick = document.querySelector('.lightbulb');
var backgroundLight = document.querySelector('.background');
lightbulbClick.addEventListener('click', ifClicked);
