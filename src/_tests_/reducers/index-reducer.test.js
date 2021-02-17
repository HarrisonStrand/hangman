// import rootReducer from '../../reducers/index';
// import { createStore } from 'redux';
// import formVisibleReducer from '../../reducers/form-visible-reducer';
// import wordListReducer from '../../reducers/word-list-reducer';

// // instantiates a store so we can use Redux's getState() method
// let store = createStore(rootReducer);

// describe("rootReducer", () => {

//   test('Should return default state if no action type is recognized', () => {
//     expect(rootReducer({}, { type: null })).toEqual({
//       masterWordList: {},
//       formVisibleOnPage: false
//     });
//   });

// 	test('Check that initial state of wordListReducer matches root reducer', () => {
// 		expect(store.getState().masterWordList).toEqual(wordListReducer(undefined, { type: null }));
// 	});

// 	test('Check that initial state of formVisibleReducer matches root reducer', () => {
// 		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
// 	});

// 	test('Check that ADD_WORD action works for wordListReducer and root reducer', () => {
// 		const action = {
// 			type: 'ADD_WORD',
// 			wordString: 'elephant',
// 			id: 1
// 		}
// 		store.dispatch(action);
// 		expect(store.getState().masterWordList).toEqual(wordListReducer(undefined, action));
// 	});

// 	test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
// 		const action = {
// 			type: 'TOGGLE_FORM'
// 		}
// 		store.dispatch(action);
// 		expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
// 	})

// });