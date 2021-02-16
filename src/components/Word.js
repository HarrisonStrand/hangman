//props for word and possibly the body???
import React from 'react';
import PropTypes from 'prop-types';

function Word(props) {
	return (
		<>
			<h1>{props.wordString}</h1>
		</>
	);
}

Word.propTypes = {
	wordString: PropTypes.string
};

export default Word;