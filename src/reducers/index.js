import formVisibleReducer from './form-visible-reducer';
import wordListReducer from './word-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterWordList: wordListReducer,
  masterWordList2: wordListReducer
});

export default rootReducer;