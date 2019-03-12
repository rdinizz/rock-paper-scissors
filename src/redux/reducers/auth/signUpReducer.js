import { 
    UPDATE_SIGNUP_EMAIL_FIELD,
    UPDATE_SIGNUP_PASSWORD_FIELD,
    SIGN_UP_SUCCESSFUL,
    SIGN_UP_ERROR,
    SIGNING_UP,
    CLEAN_NEW_ACCOUNT_FLAG
} from '../../types/types.js';

const INITIAL_STATE = {
    signUpEmail: '',
    signUpPassword: '',
    signingUp: false,
    hasError: false,
    error: '',
    newAccountCreated: false,
    showSuccessfulMessage: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SIGNUP_EMAIL_FIELD:
            return { 
                ...state, 
                signUpEmail: action.payload 
            };
        case UPDATE_SIGNUP_PASSWORD_FIELD:
            return { 
                ...state, 
                signUpPassword: action.payload 
            };
        case SIGNING_UP:
            return { 
                ...state, 
                signingUp: action.payload, 
                newAccountCreated: true, 
                hasError: false, 
                showSuccessfulMessage: false 
            };
        case CLEAN_NEW_ACCOUNT_FLAG:
            return { 
                ...state, 
                newAccountCreated: false 
            };
        case SIGN_UP_SUCCESSFUL:
            return { 
                ...state,
                signingUp: false,
                signUpEmail: '',
                signUpPassword: '',
                hasError: false,
                error: '',
                showSuccessfulMessage: true
            };
        case SIGN_UP_ERROR:
            return { 
                ...state, 
                hasError: true, 
                error: action.payload, 
                signingUp: false, 
                newAccountCreated: false 
            };
        default:
            return state;
    }
};
