import { 
  SET_AUTHENTICATED, 
  SET_UNAUTHENTICATED, 
  SET_USER, 
  SET_LIKES,
  SET_USER_MESSAGES,
  CLEAR_USER_MESSAGES,
 
} from '../types';

const initialState = {
  authenticated: false,
  protected: {},
  likes: [],
  userMessages: [],
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
        authenticated: true,
        loading: false,
        ...action.payload,
      };

    case SET_LIKES:
      return {
        ...state,
        likes: [
          ...state.likes,  
        ]
      }
    case SET_USER_MESSAGES:
      return {
        ...state,
        userMessages: [
          ...action.payload,
        ]
      }

    case CLEAR_USER_MESSAGES:
      return {
        ...state,
        userMessages: []
      }

    default:
      return state;
  }
};

export default userReducer;
