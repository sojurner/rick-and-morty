import { combineReducers } from 'redux';
import { characterReducer } from './character_reducer';

const rootReducer = combineReducers({
  characters: characterReducer
});

export default rootReducer;
