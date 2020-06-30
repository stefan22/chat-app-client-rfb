import {
	SET_WARNING, 
	RESET_WARNING,
	DELETE_WARNING,

} from '../types';

//when user attempts to like a message without first logging in
export const sendWarningMessage = () => dispatch => 
	dispatch({type: SET_WARNING})


// set delete warning
export const setDeleteWarning = () => dispatch => {
	dispatch({type: DELETE_WARNING});
}


// reset warning
export const resetWarning = () => dispatch => 
	dispatch({type: RESET_WARNING})