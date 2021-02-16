//Create new word for user to guess
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewWordForm(props) {

	function HandleNewWordFormSubmission(event) {
		event.preventDefault();
		props.onNewWordCreation({
			wordString: event.target.wordString.value.toUpperCase(), //change to array with split
			id: v4()
		});
		console.log(event.target.wordString.value);
	}

	return (
		<>
			<form onSubmit = {HandleNewWordFormSubmission}>
				<input
					type='text'
					name='wordString'
					placeholder='Word'/>
				<button className='createword' type='submit'>CREATE WORD</button>
			</form>
		</>
	);
}

NewWordForm.propTypes = {
	onNewWordCreation: PropTypes.func
};

export default NewWordForm;