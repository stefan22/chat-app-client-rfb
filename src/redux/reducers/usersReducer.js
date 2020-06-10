import { 
  SET_AUTHENTICATED, 
  SET_UNAUTHENTICATED, 
  SET_USER, 
  SET_LIKES
 
} from '../types';

const initialState = {
  authenticated: false,
  protected: {},
  likes: []
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

    default:
      return state;
  }
};

export default userReducer;
