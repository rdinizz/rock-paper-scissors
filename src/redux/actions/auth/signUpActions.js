import firebase from 'react-native-firebase';
import { 
    UPDATE_SIGNUP_EMAIL_FIELD,
    UPDATE_SIGNUP_PASSWORD_FIELD,
    SIGN_UP_SUCCESSFUL,
    SIGN_UP_ERROR,
    SIGNING_UP
} from '../../types/types.js';

export const updateEmailField = email => ({
    type: UPDATE_SIGNUP_EMAIL_FIELD,
    payload: email
});

export const updatePasswordField = password => ({
    type: UPDATE_SIGNUP_PASSWORD_FIELD,
    payload: password
});

export const signUp = (email, password) => (dispatch) => {
    dispatch({ type: SIGNING_UP, payload: true });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => signUpSuccessful(dispatch))
    .catch(error => {
        console.log(error);
        dispatch({ type: SIGN_UP_ERROR, payload: error.message });
    });
};

const signUpSuccessful = (dispatch) => {
    dispatch({ type: SIGN_UP_SUCCESSFUL });
};
