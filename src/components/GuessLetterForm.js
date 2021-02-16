//form for guessing letters
import React from 'react';
import PropTypes from 'prop-types';

function GuessLetterForm(props) {

  function handleGuessLetterFormSubmission(event) {
    event.preventDefault();
    props.onGuessLetter({

    });
  }

  return (
    <>
      <form onSubmit = {handleGuessWordFormSubmission}>
        <input
          type='text'
          name='letter'
          placeholder='Guess letter' />
        <button class='guess-letter' type='submit'>GUESS LETTER</button>
      </form>
    </>
  );
}

export default GuessLetterForm;