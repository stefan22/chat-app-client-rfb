import { 
	SET_MESSAGES, 
	CLEAR_MESSAGES, 
	SET_LOADING_ON,
  SET_WARNING,


} from '../types';

import {
  addItemsToLocalStorage, 
  getItemsFromLocalStorage, 
  getAuthToken

} from '../../components/helperFns';

// base api
const baseURL = 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api';




// get messages
export const getMessages = () => async (dispatch) => {
  dispatch({ type: SET_LOADING_ON });
  if (localStorage.messages) {
    let msgs = await getItemsFromLocalStorage('messages');
    return dispatch({
      type: SET_MESSAGES,
      payload: msgs,
    });
  }
  fetch(`${baseURL}/messages`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      addItemsToLocalStorage(data);
      return dispatch({
        type: SET_MESSAGES,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: CLEAR_MESSAGES });
    });
};



//updating messages/likes => fetch messages/update localStorage
export const handleUpdateLikes = (messageId) => async (dispatch) => {
  let messages;
   if (localStorage.messages) {
    messages = await getItemsFromLocalStorage('messages');
   }
  let token = getAuthToken('fbToken');
  fetch(`${baseURL}/message/${messageId}/like`, {
     method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': token,
      },
    })
    .then((res) => {
      return res.json();
    })
    .then(data => {
      messages.forEach(itm => {
        if ( itm.messageId === data.messageId) {
          itm.likeCount = data.likeCount;
        }
      })
      dispatch({
        type: SET_MESSAGES,
        payload: messages
      });
      if (data.error === 'Message already liked') {
        dispatch({type: SET_WARNING, payload: data.error});
      }
      addItemsToLocalStorage(messages);
    })
    .catch((err) => console.log(err));
  
};



