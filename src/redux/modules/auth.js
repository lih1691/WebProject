import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from 'lib/api/auth'

import { Map } from 'immutable';

const SET_ERROR = 'auth/SET_ERROR';

const CHANGE_INPUT = 'auth/CHANGE_INPUT';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

const CHECK_USERID_EXISTS = 'auth/CHECK_USERID_EXISTS'; // 아이디 중복 확인
const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS'; // 이메일 중복 확인

const LOCAL_SIGNUP = 'auth/LOCAL_SIGNUP';
const LOCAL_SIGNIN = 'auth/LOCAL_SIGNIN';
const LOGOUT = 'auth/LOGOUT';

export const setError = createAction(SET_ERROR);

export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, AuthAPI.checkEmailExists); // email
export const checkUsernameExists = createAction(CHECK_USERID_EXISTS, AuthAPI.checkUserIDExists); // username

export const localSingUp = createAction(LOCAL_SIGNUP, AuthAPI.localSignUp); // { email, username, password }
export const localSingIn = createAction(LOCAL_SIGNIN, AuthAPI.localSignIn); // { email, password }

export const logOut = createAction(LOGOUT, AuthAPI.logOut);

export const changeInput = createAction(CHANGE_INPUT);
export const initializeForm = createAction(INITIALIZE_FORM);

export const checkUserIDExists = createAction(CHECK_USERID_EXISTS, AuthAPI.checkUserIDExists);

const initialState = Map({
    SignUp: Map({
        form: Map({
            userID:'',
            userPWD:'',
            userPWDConfirm:'',
            userEmail:'',
        }),
        exists: Map(({
            email: false,
            password: false,
        })),
        error:null
    }),

    SignIn: Map({
        form: Map({
            userID:'',
            userPWD:'',
        }),
        error:null
    }),
    result: Map({})
});

// reducer
export default handleActions({
    [CHANGE_INPUT]: (state, action) => {
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);
    },
    [INITIALIZE_FORM]: (state, action) => {
        const initialForm = initialState.get(action.payload);
        return state.get(action.payload, initialForm);
    },
    ...pender({
        type: CHECK_EMAIL_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'email'], action.payload.data.exists)
    }),
    ...pender({
        type: CHECK_USERID_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'username'], action.payload.data.exists)
    }),
    ...pender({
        type: LOCAL_SIGNIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    ...pender({
        type: LOCAL_SIGNUP,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    [SET_ERROR]: (state, action) =>
    {
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    }
}, initialState);