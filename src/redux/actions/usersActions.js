import {
  SET_LOADING_ON,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_USER,
  SET_UNAUTHENTICATED,
  SET_AUTHENTICATED,

} from '../types';

import axios from 'axios';
// base url
const baseURL = 'https://europe-west1-chat-app-5c91e.cloudfunctions.net/api';

const setAuthToken = (token) => {
  let fbToken = `Bearer ${token}`;
  localStorage.setItem('fbToken', fbToken);
  axios.defaults.headers.common['Authorization'] = fbToken;
};

// login/signup @comp mounting
export const clearFormErrors = () => (dispatch) => (
  dispatch({ type: CLEAR_ERRORS })
)

// login page
export const userLogin = (userLogin, history) => (dispatch) => {
  dispatch({type: SET_LOADING_ON});
  axios
    .post(`${baseURL}/login`, userLogin)
    .then((response) => {
      setAuthToken(response.data.token);
      dispatch({type: SET_AUTHENTICATED});
      dispatch(getUserData());
      history.push('/');
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({type: SET_ERRORS, payload: err.response.data})
    });
};

export const userLogout = () => (dispatch) => {
  localStorage.removeItem('fbToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

// signup page
export const userSignup = (userSignup, history) => (dispatch) => {
  dispatch({ type: SET_LOADING_ON });
  axios
    .post(`${baseURL}/signup`, userSignup)
    .then((response) => {
      setAuthToken(response.data.token);
      dispatch({ type: SET_AUTHENTICATED });
      dispatch(getUserData());
      history.push('/');
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

// getting user data | avoid extra headers by stiking to axios
export const getUserData = () => (dispatch) => {
  let token = localStorage.getItem('fbToken');
  fetch(`${baseURL}/user`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': token,
    },
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


// upload user profile image
export const setProfileImage = formData => dispatch => {
  dispatch({ type: SET_LOADING_ON });
  let token = localStorage.getItem('fbToken');
  fetch(`${baseURL}/user/image`, {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Authorization': token,
    },
    body: formData
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
    body: JSON.stringify(data)
  })
  .then(() => dispatch(getUserData()))
  .catch(err => console.log(err));
}