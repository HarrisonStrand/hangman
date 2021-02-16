

const initialState = {
	masterWordList2: {
		1: {
			wordString: 'elephant',
			id: 1
		},
		2: {
			wordString: 'hello',
			id: 2
		},
		3: {
			wordString: 'lava lamp',
			id: 3
		},
		4: {
			wordString: 'Supercalifragilisticexpialidocious',
			id: 4
		},
		5: {
			wordString: 'guitar',
			id: 5
		}
	},
  formVisibleOnPage: false
}

export default initialState;




// // in src/index.js

// //// TEST DATA
// const testId = v4();
// const initialState = {
//   masterTicketList2: {
//     [testId] : {
//       names: "Shawn and Brooke",
//       location: "by the plant",
//       issue: "halp!",
//       quantity: 22,
//       id: testId
//     }
//   },
//   formVisibleOnPage2: false
// }
// //////

// const store = createStore(
//   rootReducer, 
//   initialState, // this is where we pass initialState into the store
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );