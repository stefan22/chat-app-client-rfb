import { 
	SET_MESSAGES,
  CLEAR_MESSAGES,
  SET_LIKES,
  ADD_MESSAGE,

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

    case ADD_MESSAGE:
      let message = action.payload || {};
      return [
        message,...state
      ]

    case SET_LIKES:
      let idx = state.findIndex(msg => msg.messageId === action.payload.messageId);
      state[idx] = action.payload
      return [
        ...state
      ]

    case CLEAR_MESSAGES:
      return initialState;
      
    default:
      return state;
  }
};

export default messagesReducer;
