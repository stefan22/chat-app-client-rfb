import { 
	SET_MESSAGES
 
} from '../types';

const initialState = {
  messages: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return [
        ...action.payload
      ];

    default:
      return state;
  }
};

export default userReducer;
