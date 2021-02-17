import playVisibleReducer from './play-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  playVisibleOnPage: playVisibleReducer,
});

export default rootReducer;