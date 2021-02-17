// import wordListReducer from '../../reducers/word-list-reducer';

// describe('wordListReducer', () => {

// 	let action;
// 	const currentState = {
// 		1: {
// 			wordString: 'elephant',
//       id: 1
//     },
//     2: {
// 			wordString: 'hello',
//       id: 2
//     }
//   };

//   const currentState2 = {
//     2: {
// 			wordString: 'potato',
//       randomId: 2
//     }
//   };

//   const wordData = {
//     wordString: 'elephant'
//   };

//   test('Should return default state if there is no action type passed into the reducer', () => {
//     expect(wordListReducer({}, { type: null })).toEqual({});
//   });

//   test('Should successfully add new word data to masterWordList', () => {
//     const { wordString, id } = wordData;
//     action = {
//       type: 'ADD_WORD',
//       wordString: wordString,
//       id: id
//     };

//     expect(wordListReducer({}, action)).toEqual({
//       [id] : {
//         wordString: wordString,
//         id: id
//       }
//     });
//   });

//   test('Should successfully delete a word', () => {
//     action = {
//       type: 'DELETE_WORD',
//       id: 1,
//     };

//     expect(wordListReducer(currentState, action)).toEqual({
//       2: {
//         wordString: 'hello',
//         id: 2
//       }
//     });
//   });
// });