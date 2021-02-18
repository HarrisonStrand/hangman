
const masterWordList2 = ['ELEPHANT', 'HELLO', 'LAVA LAMP', 'Supercalifragilisticexpialidocious', 'GUITAR'];

function randomWord() {
  let word = masterWordList2[Math.floor(Math.random() * masterWordList2.length)].split('')
  return word;
}

// visibleWord(word) {
//   word = word.join('');
//   let regex = (/[A-Za-z]/g);
//   let editedWord = word.replace(regex, "_");
//   return editedWord.split('');
// }

export { randomWord };