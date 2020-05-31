import {
	SET_WARNING, 
	RESET_WARNING
} from '../types';

//when user attempts to like a message without first logging in
export const sendWarningMessage = () => dispatch => {
	dispatch({type: SET_WARNING})
}

// reset when loggin-out/move to another page
export const resetWarningMessage = () => dispatch => {
	dispatch({type: RESET_WARNING})
}