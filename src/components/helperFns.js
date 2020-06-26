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


export const formDataHelper = (elem) => {
  const formData = new FormData();
  formData.append('file', elem, elem.name);
  return formData;
}



export const isMessageFromUser = (user, userMessage) => {
  let isUser = user.protected.user;
  if (isUser.toLowerCase() === userMessage.toLowerCase()) {
    return true;
  } else return false;
}



export const donpioPath = (subfolder = '/repositories/chatapp/') => {
  let pathBe = window.location.pathname === subfolder ? subfolder : '/';

  return pathBe;
};