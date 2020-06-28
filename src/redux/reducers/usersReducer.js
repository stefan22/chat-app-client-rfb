import { 
  SET_AUTHENTICATED, 
  SET_UNAUTHENTICATED, 
  SET_USER, 
  SET_LIKES,
  SET_USER_MESSAGES,
  CLEAR_USER_MESSAGES,
  SET_USER_PROFILE,
  CLEAR_USER_PROFILE,
 
} from '../types';

const initialState = {
  authenticated: false,
  accountHolder: false,
  protected: {},
  likes: [],
  userMessages: [],
  userProfile: {},
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

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      }
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        userProfile: {},
        accountHolder: false,
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
