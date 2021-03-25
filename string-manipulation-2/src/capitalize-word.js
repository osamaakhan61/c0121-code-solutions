/* exported capitalizeWord */
function capitalizeWord(word) {
  const newWord = word.toLowerCase();
  const capWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  if (capWord === 'Javascript') {
    return 'JavaScript';
  }
  return capWord;
}
