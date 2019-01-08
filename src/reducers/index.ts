import { combineReducers } from 'redux';
import { characterReducer } from './character_reducer';
import { episodeReducer } from './episode_reducer';
import { locationReducer } from './location_reducer';
import { pageReducer, pageCountReducer } from './page_reducer';

const rootReducer = combineReducers({
  characters: characterReducer,
  episodes: episodeReducer,
  locations: locationReducer,
  pageView: pageReducer,
  pageCount: pageCountReducer
});

export default rootReducer;
