import { PLAY, PLAY_AGAIN, SET_PLAYER_TROPHIES
} from '../../types/types.js';

const initialState = {
  showResults: false,
  playerChoice: '',
  computerChoice: '',
  winner: '',
  playerTrophies: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
  case PLAY:
    return { 
      ...state, 
      showResults: true,
      playerChoice: action.payload.playerChoice,
      computerChoice: action.payload.computerChoice,
      winner: action.payload.winner
    };
  case PLAY_AGAIN:
    return { 
      ...state, 
      showResults: false,
      playerChoice: '',
      computerChoice: '',
      winner: ''
    };
  case SET_PLAYER_TROPHIES:
    return { ...state, playerTrophies: action.payload.trophies };
  default:
    return state;
  }
};
