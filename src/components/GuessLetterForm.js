//form for guessing letters
import React from 'react';
import PropTypes from 'prop-types';

function GuessLetterForm(props) {

  function handleGuessLetterFormSubmission(event) {
    event.preventDefault();
    props.onGuessLetter({
			letterString: event.target.letterString.value.toUpperCase()
    });
  }

  return (
    <>
      <form onSubmit = {handleGuessLetterFormSubmission}>
        <input
          type='text'
          name='letter'
          placeholder='Letter' />
        <button class='guess-letter' type='submit'>GUESS LETTER</button>
      </form>
    </>
  );
}

export default GuessLetterForm;