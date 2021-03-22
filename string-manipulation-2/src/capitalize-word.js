/* exported capitalizeWord */
function capitalizeWord(word) {
  const newWord = word.toLowerCase();
  const capWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  for (var i = 0; i < capWord.length; i++) {
    if (capWord[i] === 's') {
      const finalCase = capWord.charAt(i).toUpperCase() + capWord.slice(i + 1);
      return capWord.substring(0, 4) + finalCase;
    }
  }
  return capWord;
}
