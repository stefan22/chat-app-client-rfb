import { 
	SET_MESSAGES,
  CLEAR_MESSAGES,
  SET_LIKES,

} from '../types';

const initialState = {
  messages: [],
}


const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return [
        ...action.payload,
      ]

    case CLEAR_MESSAGES:
      return initialState;

    case SET_LIKES:
      return [
        ...action.payload
      ]
      
    default:
      return state;
  }
};

export default messagesReducer;
