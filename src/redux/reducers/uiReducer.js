import { SET_ERRORS, CLEAR_ERRORS, SET_LOADING_ON, SET_LOADING_OFF } from '../types';

const initialState = {
	loading: false,
	errors: {}
}

const uiReducer = (state=initialState, action) => {//debugger;
	switch(action.type) {
		case SET_LOADING_ON:
			return {
				...state, loading: true
			}
		case SET_LOADING_OFF:
			return initialState;

		case CLEAR_ERRORS:
			return {
				loading: false,
				errors: {}
			}
		case SET_ERRORS:
			return {
				loading: false,
				errors: action.payload
			}
		default:
			return initialState;
	}
}


export default uiReducer;