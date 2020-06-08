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


export const scrollListenerHelper = (homeHeadingRef,classes) => {//transform title on evt scroll
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      if (homeHeadingRef.current !== null) {
        homeHeadingRef.current.className = `${classes.refTransform}`;
      }
    } else {
      if (homeHeadingRef.current !== null) {
        homeHeadingRef.current.className = `${classes.refInit}`;
      }
    }
  }

export const formDataHelper = (elem) => {
  const formData = new FormData();
  formData.append('file', elem, elem.name);
  return formData;
}