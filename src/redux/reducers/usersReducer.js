import { 
  SET_AUTHENTICATED, 
  SET_UNAUTHENTICATED, 
  SET_USER, 
 
} from '../types';

const initialState = {
  authenticated: false,
  protected: {},
  likes: [],
  messages: [],
  comments: [],

};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };

    case SET_UNAUTHENTICATED:
      return initialState;
                                                                                
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
