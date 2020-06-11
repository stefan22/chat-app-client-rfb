import { 
	SET_MESSAGES, 
	CLEAR_MESSAGES, 
	SET_LOADING_ON,
  SET_WARNING,
  SET_LIKES,


} from '../types';

import {
  addItemsToLocalStorage, 
  getItemsFromLocalStorage, 
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
export const addMessage = (message,user) => dispatch => {
  let addToken = getAuthToken('fbToken');

  let newMessage = {
    user: user.protected.user,
    message: message
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
    console.log('message id => ',data);
  })


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
export const deleteMessage =  (messageId,user) => async dispatch => {
  let delToken = getAuthToken('fbToken');
  let msgs = await getItemsFromLocalStorage('messages');
  let match = msgs.find(msg => msg.messageId === messageId);
  // message belongs to user & authenticated
  if (user.protected.user === match.user) {
      fetch(`${baseURL}/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Accept': '*/*',
          'Content-type': 'application/json',
          'Authorization': delToken,
          'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
        },
      })
      .then((del) => {
       // dispatch({type: SET_DELETE,})
        console.log('message deleted ',del);
      })
      .then(() => {
          localStorage.removeItem('messages');
          getMessages();
      })
      .catch(err => console.log('error => ',err));
  }
  else {
    console.log(`
      Unauthorized.\n
      You're logged in as ${user.protected.user} and ..\n
      This message belongs to ${match.user} \n
    `)
    return;
  }
};



