import { SET_CURRENT_USER, LOGOUT 
} from '../../types/types.js';

const initialState = {
  currentUser: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_CURRENT_USER:
    return { ...state, currentUser: action.payload };
  case LOGOUT:
    return { ...state, currentUser: '' };
  default:
    return state;
  }
};
