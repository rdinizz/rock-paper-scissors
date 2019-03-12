import firebase from 'react-native-firebase';
import { UPDATE_LEADERBOARD_LIST
} from '../../types/types.js';

export const subscribeLeaderboard = () => dispatch => {
  firebase.firestore().collection('trophies')
  .onSnapshot(() => {
    getLeaderboard(dispatch);
  });
};

const getLeaderboard = dispatch => {
  const trophiesRef = firebase.firestore().collection('trophies');
  const leaderboard = [];
  /* get the leaderboard list from firestore and then populate the reducer */
  trophiesRef.orderBy('trophies', 'desc')
  .get()
  .then(data => {
    data.forEach(score => {
      leaderboard.push(score.data());
    });
    dispatch({ type: UPDATE_LEADERBOARD_LIST, payload: leaderboard });
  }).catch(error => {
    console.log(error);
  });
};

export const unSubscribeLeaderboard = () => dispatch => {
  firebase.firestore().collection('trophies')
  .onSnapshot(() => {});
};
