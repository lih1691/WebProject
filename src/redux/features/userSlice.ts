import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
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

export const logOut = createAsyncThunk(
    'user/logOut',
    async () => {
        const response = AuthAPI.logOut();
    }
)

export const checkStatus = createAsyncThunk(
    'user/checkStatus',
    async () => {
        const response = await AuthAPI.checkStatus();
        return response.data;
    }
)

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
    extraReducers: (builder) => {
        builder.addCase(logOut.rejected, (state, action) => {
            console.error('로그아웃 실패');
        })
        builder.addCase(logOut.fulfilled, (state, action) => {
            setLoggedInfo({ thumbnail: null, nickName: null});
        })
        builder.addCase(checkStatus.fulfilled, (state, action) => {
            state.loggedInfo = action.payload;
            state.logged = true;
            state.validated = true;
        })
        builder.addCase(checkStatus.rejected, (state, action) => {
            state.loggedInfo = { thumbnail: null, nickName: null };
            state.logged = false;
            state.validated = false;
        })
    }
});

export const { setLoggedInfo, setValidated } = userSlice.actions;
export default userSlice.reducer;