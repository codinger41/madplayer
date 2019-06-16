import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import music from './reducers/music';

const store = createStore(
  music,
  applyMiddleware(thunk));

export default store;

