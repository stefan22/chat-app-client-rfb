import { 
	SET_MESSAGES, 
	CLEAR_MESSAGES, 
	SET_LOADING_ON,
  SET_WARNING,
  ADD_MESSAGE,
  SET_LIKES,
  CLEAR_ERRORS,
  SET_DELETE,


} from '../types';

import {
  addItemsToLocalStorage, 
  isMessageFromUser,
  getAuthToken,

} from '../../components/helperFns';

// base api
const baseURL = 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api';



// get messages
export const getMessages = () => (dispatch) => {
  dispatch({ type: SET_LOADING_ON });
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

// add message
export const addMessage = (message,user,messageId) => dispatch => {
  let addToken = getAuthToken('fbToken');
  let newMessage = {
    user: user.protected.user,
    message
  }
  fetch(`${baseURL}/message`, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-type': 'application/json',
      'Authorization': addToken,
      'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
    },
    body: JSON.stringify(newMessage)
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    dispatch({
      type: ADD_MESSAGE,
      payload: data,
    })
  })
  .then(() => {
    dispatch({type: CLEAR_ERRORS})
  })
  .catch(err => console.log(err));
}

//updating messages/likes => fetch messages/update localStorage
export const handleUpdateLikes = (messageId) => async (dispatch) => {
  let token = getAuthToken('fbToken');
  fetch(`${baseURL}/message/${messageId}/like`, {
     method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-type': 'application/json',
        'Authorization': token,
        'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
      },
    })
    .then((res) => {
      return res.json();
    })
    .then(data => {
      dispatch({
        type: SET_LIKES,
        payload: data
      });
      if (data.error === 'Message already liked') {
        dispatch({type: SET_WARNING, payload: data.error});
      }
    })
    .catch((err) => console.log(err));
  
};

//deleteMessage
export const getDeleteMessage = (messageId,user,userMessage) => async dispatch => {
  console.log('enter')
  console.log('is message id => ', messageId);
  console.log('is user => ', user);
  console.log('is userMessage => ', userMessage);

  let userOwnsMsg = await isMessageFromUser(user,userMessage);
  let delToken = getAuthToken('fbToken');
  if (!userOwnsMsg) {//user does not own message 
    console.log('send warning badge - user does not own this message');
    return true; //- end-of-road
  }

  // message belongs to user & authenticated
  fetch(`${baseURL}/messages/${messageId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization': delToken,
    },
  })
  .then(() => {
    dispatch({type: SET_DELETE, payload: messageId});
    if (localStorage.messages) localStorage.removeItem('messages');
  })
  .catch(err => console.log('error => ',err));

 
};





