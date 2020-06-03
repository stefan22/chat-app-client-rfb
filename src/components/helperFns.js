import axios from 'axios';


export const addItemsToLocalStorage = (data) =>
  localStorage.setItem('messages', JSON.stringify(data));

export const getItemsFromLocalStorage = (name) =>
  JSON.parse(localStorage.getItem(name));

export const setAuthToken = token => {
  let fbToken = `Bearer ${token}`;
  localStorage.setItem('fbToken', fbToken);
  axios.defaults.headers.common['Authorization'] = fbToken;
}

export const getAuthToken = token =>
  localStorage.getItem(token);

