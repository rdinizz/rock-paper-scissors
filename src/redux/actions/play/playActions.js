import firebase from 'react-native-firebase';
import { PLAY, PLAY_AGAIN, SET_PLAYER_TROPHIES
} from '../../types/types.js';

const choices = ['rock', 'paper', 'scissors'];

export const getTrophies = () => (dispatch, getState) => {
  const currentUser = getState().authReducer.currentUser;
  const trophiesRef = firebase.firestore().collection('trophies');
  
  trophiesRef.where('user', '==', currentUser).get()
  .then(data => {
    if (data.size > 0) {
      data.forEach(d => {
        dispatch({ type: SET_PLAYER_TROPHIES, payload: { trophies: d.data().trophies } });
      });
    } else {
      //player does not have a trophies collection yet, so, we will create a new one
      trophiesRef.add({
        user: currentUser,
        trophies: 0
      })
      .then(() => {
        /*after creating a new trophies collection, call a dispatcher to update the 
        reducer to show the trophies amount*/
        dispatch({ type: SET_PLAYER_TROPHIES, payload: { trophies: 0 } });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }).catch(error => {
    console.log(error);
  });
};

export const play = (playerChoice) => (dispatch, getState) => {
  const computerChoice = generateComputerChoice();
  const winner = calculateWinner(playerChoice, computerChoice);
  //Check if the player won, if yes, 1 trophie will be added
  if (winner === 'player') {
    addTrophies(dispatch, getState);
  }
  dispatch({ 
    type: PLAY,
    payload: {
      playerChoice,
      computerChoice,
      winner
    } 
  });
};

const addTrophies = (dispatch, getState) => {
  const currentUser = getState().authReducer.currentUser;
  const playerTrophies = getState().playReducer.playerTrophies;
  const trophiesRef = firebase.firestore().collection('trophies');
  
  trophiesRef.where('user', '==', currentUser).get()
  .then(data => {
    data.forEach(d => {
      d.ref.update({
        trophies: playerTrophies + 1
      })
      .then(() => {
        //after updating on firebase, call a dispatch to update the reducer with the same value
        dispatch({ type: SET_PLAYER_TROPHIES, payload: { trophies: playerTrophies + 1 } });
      });
    });
  }).catch(error => {
    console.log(error);
  });
};

export const playAgain = () => (dispatch) => {
  dispatch({ type: PLAY_AGAIN });
};

const generateComputerChoice = () => {
  //returns a random number between 0 and 2 to use as the computer choice
  const random = Math.floor(Math.random() * 3);
  return choices[random];
};

const calculateWinner = (playerChoice, computerChoice) => {
  const player = 'player';
  const computer = 'computer';
  const draw = 'draw';
  /*first we check if the choices are equals, this will reduce the number 
  of comparisons */
  if (playerChoice === computerChoice) {
    return draw;
  } 
  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      return computer;
    }
    return player; 
  } else if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        return player;
      }
      return computer;
  } 
  if (computerChoice === 'rock') {
    return computer;
  }
  return player;
};
