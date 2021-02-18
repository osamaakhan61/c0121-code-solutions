// change dot shades
var grabDots = document.querySelectorAll('i.fa-circle');
var leftChev = document.querySelector('i.fa-chevron-left');
var rightChev = document.querySelector('i.fa-chevron-right');
var startingIndex = 0;

function dotClick(i) {
  if (grabDots[i].className === 'far fa-circle') {
    for (var j = 0; j < grabDots.length; j++) {
      grabDots[j].className = 'far fa-circle';
    }
    grabDots[i].className = 'fas fa-circle';
  }
}

leftChev.addEventListener('click', dotClick(startingIndex--));
rightChev.addEventListener('click', dotClick(startingIndex++));
