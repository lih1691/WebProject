import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import * as AuthAPI from '@lib/api/auth';

interface LoggedInfo {
    thumbnail: string | null;
    nickName: string | null;
}

interface userState {
    loggedInfo: LoggedInfo;
    logged: boolean;
    validated: boolean;
}

const initialState: userState = {
    loggedInfo: {
        thumbnail: null,
        nickName: null,
    },
    logged: false,
    validated: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoggedInfo: (state, action: PayloadAction<LoggedInfo>) => {
            state.loggedInfo = action.payload;
            state.logged = true;
        },
        setValidated: (state, action: PayloadAction<boolean>) => {
            state.validated = action.payload;
        }
    },
});

export const logout = () => async (dispatch: Dispatch) => {
    try {
        await AuthAPI.logOut();
        dispatch(setLoggedInfo({ thumbnail: null, nickName: null}));
    } catch (error) {
        console.error('로그아웃 실패', error);
    }
};

export const checkStatus = () => async (dispatch : Dispatch) => {
    try {
        const response = await AuthAPI.checkStatus();
        dispatch(setLoggedInfo(response.data));
        dispatch(setValidated(true));
    } catch (error) {
        dispatch(setLoggedInfo({ thumbnail: null, nickName: null}));
        dispatch(setValidated(false));
    }
}


export const { setLoggedInfo, setValidated } = userSlice.actions;
export default userSlice.reducer;