import { 
	SET_MESSAGES, 
	CLEAR_MESSAGES, 
	SET_LOADING_ON 

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
export const handleUpdateLikes = (messageId) => (dispatch) => {
  let allMessages = [];
  let isMessage = {};
  fetch(`${baseURL}/messages`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      allMessages = data;
      //update likes
      allMessages.forEach((msg) => {
        if (messageId === msg.messageId) {
          msg.likeCount = Number(msg.likeCount) + 1;
          isMessage = msg;
          return allMessages.concat(isMessage);
        }
        allMessages.concat(msg);
      });
      // update localstorage
      addMessagesToLocalStorage(allMessages);
      dispatch({
        type: SET_MESSAGES,
        payload: allMessages,
      });
    })
    .then(() => {
      let token = localStorage.getItem('fbToken');
      fetch(`${baseURL}/message/${messageId}/addliked`, {
        method: 'POST',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(isMessage),
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: CLEAR_MESSAGES });
    });
};
