import { 
		SET_ERRORS, 
		CLEAR_ERRORS, 
		SET_LOADING_ON, 
		SET_LOADING_OFF,
		SET_WARNING,
		RESET_WARNING

} from '../types';

const initialState = {
	loading: false,
	errors: {},
	warning: false,
}

const uiReducer = (state=initialState, action) => {
	switch(action.type) {
		case SET_LOADING_ON:
			return {
				...state, loading: true, 
			}
		case SET_LOADING_OFF:
			return initialState;

		case CLEAR_ERRORS:
			return {
				loading: false,
				warning: false,
				errors: {},
			
			}
		case SET_ERRORS:
			return {
				loading: false,
				warning: false,
				errors: action.payload
			}

		case SET_WARNING:
			return {
				...state,
				warning: true
			}

		case RESET_WARNING:
			return {
				...state,
				warning: false
			}

		default:
			return initialState;
	}
}


export default uiReducer;