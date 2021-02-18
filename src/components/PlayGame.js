import React from 'react';
import PropTypes from 'prop-types';

function PlayGame(props) {

  function handleGuessLetterFormSubmission(event) {
    event.preventDefault();
    let word = props.currentRandomWord;
    let letter = event.target.letter.value.toUpperCase();
    if (word.includes(letter)) {
      console.log("Hello");
			console.log(word);
      console.log(props.currentVisibleWord);
    }
  }

  return (
    <>
      <h1>Hangman</h1>
      <p>{props.currentVisibleWord}</p>
			<form onSubmit = {handleGuessLetterFormSubmission}>
        <input
          type='text'
          name='letter'
          placeholder='Guess letter' />
        <button className='guess-letter' type='submit'>GUESS LETTER</button>
      </form>

			<button className='btn btn-info' onClick={props.resetButton}>Reset</button>
    </>
  );
}

PlayGame.propTypes = {
	resetButton: PropTypes.func
}

export default PlayGame;

// there are two arrays, one hidden with the full word, one visible with all underscores
// user guesses letter
// we compare that letter to unedited array of chars
// if letter is found, replace underscored array of chars and replace with guessed letter at the index that it should be
// ['h','e','l','l','o']
// ["_","_","_"]
// user guesses H, we know it's at index 0 based on our hidden array, so we replace index 0 in the visible underscored array
// ["H","_","_"]