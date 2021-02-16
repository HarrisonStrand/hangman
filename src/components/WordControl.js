import React from 'react';
import NewWordForm from './NewWordForm';
import WordList from './WordList';
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import Word from './Word';

class WordControl extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedWord: null,
			randomWord: null,
			editing: false
			
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

  handleEditingWordInList = (wordToEdit) => {
    const {dispatch} = this.props;
		const {wordString, id} = wordToEdit;
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
				editing: false
			});
		} else {
			const { dispatch } = this.props;
			const action = {
				type: 'TOGGLE_FORM'
			}
			dispatch(action);
		}
	}

	handleDeletingWord = (id) => {
		const { dispatch } = this.props;
		const action = {
			type: 'DELETE_ITEM',
			id: id
		}
		dispatch(action);
		this.setState({selectedWord: null});
	}

	handleEditClick = () => {
		this.setState({editing: true});
	}

	render(){
		let currentlyVisibleState = null;
		if (this.props.formVisibleOnPage) {
			currentlyVisibleState =
			<NewWordForm
				onNewWordCreation = {this.handleAddingNewWordToList}
				onEditWord = {this.handleEditingWordInList}/>
		} else {
			currentlyVisibleState =
			<WordList
				wordList = {this.props.masterWordList}/>
		}
		return (
			<>
			{currentlyVisibleState}
			<button className='btn btn-info' onClick={this.handleClick}>Create</button>
			</>
		)
	}
}

WordControl.propTypes = {
	masterWordList: PropTypes.object,
	masterWordList2: PropTypes.object,
	formVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		masterWordList: state.masterWordList,
		masterWordList2: state.masterWordList2,
		formVisibleOnPage: state.formVisibleOnPage
	}
}

WordControl = connect(mapStateToProps)(WordControl);

export default WordControl;