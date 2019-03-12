import { UPDATE_LEADERBOARD_LIST
} from '../../types/types.js';

const initialState = {
  leaderboardList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case UPDATE_LEADERBOARD_LIST:
    return { 
      ...state, 
      leaderboardList: action.payload
    };
  default:
    return state;
  }
};
