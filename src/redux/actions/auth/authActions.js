import firebase from 'react-native-firebase';
import { 
    SET_CURRENT_USER,
    LOGOUT
} from '../../types/types.js';

export const authCheck = (navigation) => (dispatch, getState) => {
    /*keep checking if there is any change on auth session, 
    and then redirect to the correct screen accordingly*/
    firebase.auth().onAuthStateChanged((user) => {
        if (user && !getState().signUpReducer.newAccountCreated) {
            dispatch({ type: SET_CURRENT_USER, payload: user.email });
            navigation.navigate('Home');
        } else {
           navigation.navigate('AuthContainer');
        }
    });
};

export const logout = () => (dispatch) => {
    firebase.auth().signOut()
        .then(() => dispatch({ type: LOGOUT }))
        .catch((error) => console.log(error));
};
