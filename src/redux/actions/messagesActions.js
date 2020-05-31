import { 
	SET_MESSAGES, 
	CLEAR_MESSAGES,
	SET_LOADING_ON,

}	from '../types';


const baseURL = 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api';


const addMessagesToLocalStorage = data => 
  localStorage.setItem('messages', JSON.stringify(data))


// get messages
export const getMessages = () => dispatch => {
	dispatch({type: SET_LOADING_ON});
	if (localStorage.messages) {
    let msgs = JSON.parse(localStorage.getItem('messages'));
    return dispatch({
			type: SET_MESSAGES,
			payload: msgs
		})
  } 
	fetch(`${baseURL}/messages`)
	.then((res) => {
		return res.json();
	})
	.then((data) => {
		addMessagesToLocalStorage(data);
		return dispatch({
			type: SET_MESSAGES,
			payload: data
		});
	})
	.catch(err => {
		console.log(err)
		dispatch({type: CLEAR_MESSAGES})
	});
};

