import {
	SET_WARNING, 
	RESET_WARNING,
	DELETE_WARNING,
	RESET_DELETE_WARNING,

} from '../types';

//when user attempts to like a message without first logging in
export const sendWarningMessage = () => dispatch => 
	dispatch({type: SET_WARNING})


// reset when loggin-out/move to another page
export const resetWarningMessage = () => dispatch => 
	dispatch({type: RESET_WARNING})


// set delete warning
export const setDeleteWarning = () => dispatch => {
	dispatch({type: DELETE_WARNING});
}


// reset delete warning
export const resetDeleteWarning = () => dispatch => {
	dispatch({type: RESET_DELETE_WARNING});
}