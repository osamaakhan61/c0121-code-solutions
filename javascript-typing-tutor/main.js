const phraseArray = document.querySelectorAll('span');
let lettersCorrect = 0;

window.addEventListener('keydown', function (e) {
  const typedLetter = String.fromCharCode(e.keyCode).toLowerCase();
  if (phraseArray[lettersCorrect].innerHTML === typedLetter) {
    phraseArray[lettersCorrect].className = 'correct-char';
    lettersCorrect++;
    phraseArray[lettersCorrect].className = 'current-char';
  } else if (phraseArray[lettersCorrect].innerHTML !== typedLetter) {
    phraseArray[lettersCorrect].className = 'incorrect-char';
  }
});
