import {
  SET_LOADING_ON,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,
  SET_LIKES,
  SET_USER_MESSAGES,
  CLEAR_USER_MESSAGES,

} from '../types';

import {
  getItemsFromLocalStorage, 
  addItemsToLocalStorage, 
  getAuthToken,
  setAuthToken,

} from '../../components/helperFns';

import axios from 'axios';
// base url
const baseURL = 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api';



// login/signup @comp mounting
export const clearFormErrors = () => (dispatch) => (
  dispatch({ type: CLEAR_ERRORS })
)

// getting user data | avoid extra headers by sticking to axios
export const getUserData = () => (dispatch) => {
  let token = getAuthToken('fbToken');
  fetch(`${baseURL}/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
    'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
  })
  .then(data => data.json())
  .then(res => {
    dispatch({
      type: SET_USER,
      payload: res,
    });
  })
  .catch(err => console.log(err.config));
};

// login page
export const userLogin = (userLogin, history) => (dispatch) => {
  dispatch({ type: SET_LOADING_ON });
  
  axios
    .post(`${baseURL}/login`, userLogin)
    .then((response) => {
      setAuthToken(response.data.token);
      dispatch({type: SET_AUTHENTICATED});
      dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
      history.push('/');
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({type: SET_ERRORS, payload: err.response.data})
    });
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('fbToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
  dispatch({type: CLEAR_USER_MESSAGES});
};

// signup page
export const userSignup = (userSignup, history) => (dispatch) => {
  dispatch({ type: SET_LOADING_ON });
  axios
    .post(`${baseURL}/signup`, userSignup)
    .then((response) => {
      setAuthToken(response.data.token);
      dispatch(getUserData());
      dispatch({type: CLEAR_ERRORS});
      history.push('/repositories/chatapp/');
    })
    .catch((err) => {
      console.log(err.response);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};


// upload user profile image
export const setProfileImage = formData => dispatch => {
  dispatch({ type: SET_LOADING_ON });
  let token = getAuthToken('fbToken');
  fetch(`${baseURL}/user/image`, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Authorization': token,
    },
    body: formData,
    'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
  })
  .then(() => dispatch(getUserData()))
  .catch(err => console.log(err));
}

// update user profile
export const userProfileUpdate = data => dispatch => {
  dispatch({ type: SET_LOADING_ON });
  let tkn = localStorage.getItem('fbToken');
  fetch(`${baseURL}/user`, {
    method: 'POST',
    headers: {
      'Authorization': tkn,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then(() => dispatch(getUserData()))
  .catch(err => console.log(err));
}


const addLikesToLocalStorage = data => {
  let likes = [];
  let passData = [{user:data.user, message:data.messageId}];
  if (passData.length === 1) {
    likes = getItemsFromLocalStorage('likes');
    if (likes === null) {
      addItemsToLocalStorage(passData);
    }
    else {
      let allLikes = likes.concat(passData);
      addItemsToLocalStorage(allLikes);
    }
  } else {//no likes
    if (passData.length === 1) {
      likes.push(passData);
      addItemsToLocalStorage('likes');
    }
  }
}

export const getLikedUser = (messageId) => dispatch => {
	let token = getItemsFromLocalStorage('fbToken');
	fetch(`${baseURL}/message/${messageId}/like`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token,
      'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
		}
	})
	.then((response) => {
		return response.json();
	})
	.then(data => {
    if (data.error === undefined) {
      addLikesToLocalStorage(data);
    } 
		dispatch({
			type: SET_LIKES,
			payload: {messageId: data.messageId, user: data.user}
		})
	})
  .catch(err => console.log(err.json()));
}


export const getUserProfileNMessages = (user) => dispatch => {
  dispatch({type: SET_LOADING_ON});
  fetch(`${baseURL}/users/${user}`, {
    method: 'GET',
    headers: {
			'Content-Type': 'application/json',
      'referrer': '', mode: 'cors', cache: 'reload', redirect: 'follow'
		}
  })
  .then(response => response.json())
  .then(data => {
      //console.log(data);
      dispatch({type:SET_USER_MESSAGES, payload: data.messages});
  })
  .catch(err => {
    console.log(err)
  });
    
}