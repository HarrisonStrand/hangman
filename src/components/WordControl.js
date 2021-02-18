import React from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import PlayGame from './PlayGame';
import { connect } from 'react-redux';
import { randomWord } from './WordData';


class WordControl extends React.Component {

		constructor(props) {
		super(props);
		this.state = {
			randomWord: randomWord()
		}
	}

	resetButton = () => {
		this.setState({
			randomWord: randomWord()
		});
	}

	handleClick = () => {
		const { dispatch } = this.props;
		const action = {
		type: 'TOGGLE_PLAY'
		}
		dispatch(action);
	}

	// function visibleWord() {
	// 	let word = randomWord();
	// 	word = word.join('');
	// 	let regex = (/[A-Za-z]/g);
	// 	let editedWord = word.replace(regex, "_");
	// 	return editedWord.split('');
	// }

	handleCreateVisibleWord = () => {
		let word = this.state.randomWord;
		word = word.join('');
		let regex = (/[A-Za-z]/g);
		let editedWord = word.replace(regex, "_");
		return editedWord.split('');
	}

	render(){
		let currentlyVisibleState = null;
		let buttonText = null;
		if (!this.props.playVisibleOnPage) {
			currentlyVisibleState =
			<HomePage />
			buttonText = "Play";
		} else {
			currentlyVisibleState =
			<PlayGame 
				currentRandomWord = {this.state.randomWord}
				currentVisibleWord = {this.handleCreateVisibleWord}
				resetButton = {this.resetButton} />
			buttonText = "Back To Home";
		}
		return (
			<>
			{currentlyVisibleState}
			<button className='btn btn-info' onClick={this.handleClick}>{buttonText}</button>
			</>
		);
	}
}

WordControl.propTypes = {
	masterWordList: PropTypes.object,
	playVisibleOnPage: PropTypes.bool
}

const mapStateToProps = state => {
	return {
		masterWordList: state.masterWordList,
		playVisibleOnPage: state.playVisibleOnPage
	}
}

WordControl = connect(mapStateToProps)(WordControl);

export default WordControl;


















// class WordControl extends React.Component {

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			selectedWord: null,
// 			randomWord: null,
// 			editing: false
// 		}
// 	}

// 	handleAddingNewWordToList = (newWord) => {
// 		const { dispatch } = this.props;
// 		const { wordString, id } = newWord;
// 		const action = {
// 			type: 'ADD_WORD',
// 			wordString: wordString,
// 			id: id
// 		}
// 		dispatch(action);
// 		const action2 = {
// 			type: 'TOGGLE_play'
// 		}
// 		dispatch(action2);
// 	}

//   handleEditingWordInList = (wordToEdit) => {
//     const {dispatch} = this.props;
// 		const {wordString, id} = wordToEdit;
// 		const action = {
// 			type: 'ADD_WORD',
// 			wordString: wordString,
// 			id: id
// 		}
// 		dispatch(action);
// 		const action2 = {
// 			type: 'TOGGLE_play'
// 		}
// 		dispatch(action2);
// 	}

// 	handleClick = () => {
// 		if (this.state.selectedWord != null) {
// 			this.setState({
// 				selectedWord: null,
// 				editing: false
// 			});
// 		} else {
// 			const { dispatch } = this.props;
// 			const action = {
// 				type: 'TOGGLE_play'
// 			}
// 			dispatch(action);
// 		}
// 	}

// 	handleDeletingWord = (id) => {
// 		const { dispatch } = this.props;
// 		const action = {
// 			type: 'DELETE_ITEM',
// 			id: id
// 		}
// 		dispatch(action);
// 		this.setState({selectedWord: null});
// 	}

// 	handleEditClick = () => {
// 		this.setState({editing: true});
// 	}