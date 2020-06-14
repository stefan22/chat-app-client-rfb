import { 
		SET_ERRORS, 
		CLEAR_ERRORS, 
		SET_LOADING_ON, 
		SET_LOADING_OFF,
		SET_WARNING,
		RESET_WARNING,
		DELETE_WARNING,
		RESET_DELETE_WARNING,

} from '../types';

const initialState = {
	loading: false,
	errors: {},
	warning: false,
	open: false,
	deleteMessageWarning: false,
}

const uiReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_LOADING_ON:
			return {
				...state, loading: true
			}
		case SET_LOADING_OFF:
			return initialState;

		case CLEAR_ERRORS:
			return {
				...state,
				loading: false,
				errors: {},
			
			}
		case SET_ERRORS:
			return {
				...state,
				loading: false,
				errors: action.payload
			}

		case SET_WARNING:
			return {
				...state,
				warning: true, open: true,
				deleteMessageWarning: false,
			}

		case DELETE_WARNING:
			return {
				...state,
				deleteMessageWarning: true,
				warning: false,
				open: true,
			}

		case RESET_DELETE_WARNING:
			return {
				...state,
				deleteMessageWarning: false,
				open: false,
				warning: false,
			}

		case RESET_WARNING:
			return {
				...state,
				warning: false, 
				open: false,
				deleteMessageWarning: false,
			}

		default:
			return initialState;
	}
}


export default uiReducer;