const phraseArray = document.querySelectorAll('span');
let lettersCorrect = 0;

window.addEventListener('keydown', function (e) {
  const typedLetter = String.fromCharCode(e.keyCode).toLowerCase();
  for (var i = 0; i < phraseArray.length; i++) {
    if (phraseArray[i].innerHTML === typedLetter) {
      if (phraseArray[i].className === 'correct-char') {
        continue;
      } else if ((phraseArray[i].className !== 'correct-char' && phraseArray[i - 1] === undefined) || phraseArray[i - 1].className === 'correct-char') {
        phraseArray[i].className = 'correct-char';
        phraseArray[i + 1].classList.add('current-char');
        lettersCorrect++;
      }
    } else {
      if (phraseArray[i].className === 'current-char' && typedLetter !== phraseArray[i].textContent) {
        phraseArray[i].className = 'incorrect-char';
      }
    }
  }
});
