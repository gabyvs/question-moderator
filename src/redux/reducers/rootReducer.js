import { combineReducers } from 'redux';
import questions from './questions';
import create from './create';

const rootReducer = combineReducers({
  create,
  questions
});

export default rootReducer;
