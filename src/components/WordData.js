
const masterWordList2 = ['ELEPHANT', 'HELLO', 'LAVA LAMP', 'Supercalifragilisticexpialidocious', 'GUITAR'];


function randomWord() {
  return masterWordList2[Math.floor(Math.random() * masterWordList2.length)].split('');
}



export { randomWord };