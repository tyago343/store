import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '.reducers/index.js';
import thunkMiddleware from 'redux-thunk';
const composer = window.__REDUX_DEVTOOLS_EXTEMSION_COMPOSE || compose;
export default createStore(reducers, composer(applyMiddleware(thunkMiddleware)));