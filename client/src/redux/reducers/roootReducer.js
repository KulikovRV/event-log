import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  // news: newsReducer,
});

export default rootReducer;
