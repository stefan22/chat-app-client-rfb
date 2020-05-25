import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import usersReducer from './reducers/usersReducer';
import messagesReducer from './reducers/messagesReducer';
import uiReducer from './reducers/uiReducer';

const initialState = {};

const middlewares = [ thunk ];


const reducers = combineReducers({
	user: usersReducer,
	messages: messagesReducer,
	ui: uiReducer
});


const store = createStore(
	reducers,
	initialState, 
	compose(applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())
);


export default store;