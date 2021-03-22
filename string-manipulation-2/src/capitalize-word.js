/* exported capitalizeWord */
function capitalizeWord(word) {
  const newWord = word.toLowerCase();
  const capWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
  if (capWord === 'Javascript') {
    const finalCase = capWord.charAt(4).toUpperCase() + capWord.slice(5);
    return capWord.substring(0, 4) + finalCase;
  }
  return capWord;
}
