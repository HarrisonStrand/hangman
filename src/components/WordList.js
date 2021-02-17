//display lines for word characters and spaces
// will display word by random generation
import React from 'react';
// import Word from './Word';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function WordList(props) {

  return (
    <>
    {Object.values(props.wordList).map((word) =>
        <p>{word.wordString} 
        id = {word.id}
        </p>
    )}
    </>
  );
}

WordList.propTypes = {
  wordList: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default WordList;