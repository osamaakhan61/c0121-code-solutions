// change dot shades
var grabDots = document.querySelectorAll('i.fa-circle');
var grabImages = document.querySelectorAll('img');
var leftChev = document.querySelector('i.fa-chevron-left');
var rightChev = document.querySelector('i.fa-chevron-right');
var startingIndex = 0;
dotClick(startingIndex);

function ChevClick(i) {
  dotClick(startingIndex += i);
}

function dotClick(i) {
  if (grabDots[i].className === 'far fa-circle') {
    for (var j = 0; j < grabDots.length; j++) {
      grabDots[j].className = 'far fa-circle';
      grabImages[j].className = 'hidden pokemon';
    }
    grabDots[i].className = 'fas fa-circle';
    grabImages[i].className = 'pokemon noSelect';
  }
}
