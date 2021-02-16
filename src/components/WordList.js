//display lines for word characters and spaces
// will display word by random generation
import React from 'react';
import Word from './Word';
import PropTypes from 'prop-types';

function WordList(props) {
  return (
    <>
      <Word
        wordString={props.wordString}
        id={props.id} />
    </>
  );
}

WordList.propTypes = {
  wordList: PropTypes.array
};

export default WordList;