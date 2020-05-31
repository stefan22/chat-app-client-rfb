import { 
	SET_MESSAGES,
  CLEAR_MESSAGES,

} from '../types';

const initialState = {
  messages: [],
}


const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return [
        ...action.payload
      ]

    case CLEAR_MESSAGES:
      return initialState;
      
    default:
      return state;
  }
};

export default messagesReducer;
