import firebase from 'react-native-firebase';
import { 
    UPDATE_SIGNIN_EMAIL_FIELD,
    UPDATE_SIGNIN_PASSWORD_FIELD,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_ERROR,
    SIGNING_IN,
    SET_CURRENT_USER,
} from '../../types/types.js';

export const updateEmailField = email => ({
    type: UPDATE_SIGNIN_EMAIL_FIELD,
    payload: email
});

export const updatePasswordField = password => ({
    type: UPDATE_SIGNIN_PASSWORD_FIELD,
    payload: password
});

export const signIn = (email, password, navigation) => dispatch => {
    dispatch({ type: SIGNING_IN, payload: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => signInSuccessful(user, navigation, dispatch))
    .catch((error) => {
        dispatch({ type: SIGN_IN_ERROR, payload: error.message });
    });
};

const signInSuccessful = (user, navigation, dispatch) => {
    dispatch({ type: SIGN_IN_SUCCESSFUL });
    dispatch({ type: SET_CURRENT_USER, payload: user.user.email });
    navigation.navigate('Home');
};
