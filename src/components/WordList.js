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
      />
    </>
  );
}

WordList.propTypes = {
  wordList: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default WordList;