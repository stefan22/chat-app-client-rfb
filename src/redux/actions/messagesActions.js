import { 
	SET_MESSAGES, 
	CLEAR_MESSAGES, 
	SET_LOADING_ON,

} from '../types';

const baseURL = 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api';


const addMessagesToLocalStorage = (data) =>
  localStorage.setItem('messages', JSON.stringify(data));

const getMessagesFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('messages'));

// get messages
export const getMessages = () => async (dispatch) => {
  dispatch({ type: SET_LOADING_ON });
  if (localStorage.messages) {
    let msgs = await getMessagesFromLocalStorage();
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
      addMessagesToLocalStorage(data);
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
export const handleUpdateLikes = (messageId) => async (dispatch, getState) => {
  let messages;
   if (localStorage.messages) {
    messages = await getMessagesFromLocalStorage();
   }

  let token = localStorage.getItem('fbToken');
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
      addMessagesToLocalStorage(messages);
    })
    .catch((err) => {
      console.log(err);
      //dispatch({ type: CLEAR_MESSAGES });
    });
  
};



