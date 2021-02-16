import React from 'react';
import NewItemForm from './NewItemForm';
import WordList from './WordList';
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import Word from './Word';

class WordControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			randomWord: null
		}
	}

	handleAddingNewWordToList = (newWord) => {
		const { dispatch } = this.props;
		const { wordString, id } = newWord;
		const action = {
			type: 'ADD_WORD',
			wordString: wordString,
			id: id
		}
		dispatch(action);
		const action2 = {
			type: 'TOGGLE_FORM'
		}
		dispatch(action2);
	}

	handleClick = () => {
		if (this.state.selectedWord != null) {
			this.setState({
				selectedWord: null,
			});
		} else {
			const { dispatch } = this.props;
			const action = {
				type: 'TOGGLE_FORM'
			}
			dispatch(action);
		}
	}

	render(){
		




	}






}