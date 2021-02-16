//Create new word for user to guess
import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewWordForm(props) {

	function HandleNewWordFormSubmission(event) {
		event.prevendDefault();
		props.onNewWordCreation({
			wordString: event.target.category.value.toUpperCase(), //change to array with split
			id: v4()
		});
		console.log(event.target.category.value);
	}

	return (
		<>
			<form onSubmit = {HandleNewWordFormSubmission}>
				<input
					type='text'
					name='word'
					placeholder='Word'/>
				<button className='createword' type='submit'>CREATE WORD</button>
			</form>
		</>
	);
}

export default NewWordForm;