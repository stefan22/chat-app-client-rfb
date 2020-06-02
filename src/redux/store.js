import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import usersReducer from './reducers/usersReducer';
import messagesReducer from './reducers/messagesReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middlewares = [ thunk ];


const rootReducer = combineReducers({
	user: usersReducer,
	messages: messagesReducer,
	ui: uiReducer
});

const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancer(applyMiddleware(...middlewares))


const store = createStore(
	rootReducer,
	initialState, 
	enhancer
);







export default store;