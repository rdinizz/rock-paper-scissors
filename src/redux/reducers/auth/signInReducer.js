import { 
    UPDATE_SIGNIN_EMAIL_FIELD,
    UPDATE_SIGNIN_PASSWORD_FIELD,
    SIGN_IN_SUCCESSFUL,
    SIGN_IN_ERROR,
    SIGNING_IN
} from '../../types/types.js';

const INITIAL_STATE = {
    signInEmail: '',
    signInPassword: '',
    signingIn: false,
    hasError: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_SIGNIN_EMAIL_FIELD:
            return { 
                ...state, 
                signInEmail: action.payload 
            };
        case UPDATE_SIGNIN_PASSWORD_FIELD:
            return { 
                ...state, 
                signInPassword: action.payload 
            };
        case SIGNING_IN:
            return { 
                ...state, 
                signingIn: action.payload 
            };
        case SIGN_IN_SUCCESSFUL:
            return { 
                ...state,
                signingIn: false,
                signInEmail: '',
                signInPassword: '',
                hasError: false,
                error: '',
            };
        case SIGN_IN_ERROR:
            return { 
                ...state, 
                hasError: true, 
                error: action.payload, 
                signingIn: false 
            };
        default:
            return state;
    }
};
