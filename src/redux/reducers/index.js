import { combineReducers } from 'redux';
import signInReducer from './auth/signInReducer';
import signUpReducer from './auth/signUpReducer';
import authReducer from './auth/authReducer';
import playReducer from './play/playReducer';
import leaderboardReducer from './leaderboard/leaderboardReducer';

export default combineReducers({
    signInReducer,
    signUpReducer,
    authReducer,
    playReducer,
    leaderboardReducer
});
