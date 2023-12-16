import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as AuthAPI from '@lib/api/auth';

export interface formState {
    userID: string;
    userNickName: string;
    userPWD: string;
    userPWDConfirm: string;
    userEmail: string;
}

interface existsState {
    id: boolean;
    email: boolean;
    nickName: boolean;
}

interface authState {
    SignUp: {
        form: formState;
        exists: existsState;
        error: string | null;
    };
    SignIn: {
        form: {
            userID: string;
            userPWD: string;
        };
        error: string | null;
    };
    result: Record<string, any>;
}

const initialState: authState = {
    SignUp: {
        form: {
            userID: '',
            userNickName: '',
            userPWD: '',
            userPWDConfirm: '',
            userEmail: '',
        },
        exists: {
            id: false,
            email: false,
            nickName: false,
        },
        error: null,
    },
    SignIn: {
        form: {
            userID: '',
            userPWD: '',
        },
        error: null,
    },
    result: {},
};


export const checkUserIDExists = createAsyncThunk(
    'auth/checkUserIDExists',
    async (ID: string) => {
        const response = await AuthAPI.checkUserIDExists(ID);
        return response.data.exists;
    }
)

export const checkEmailExists = createAsyncThunk(
    'auth/checkEmailExists',
    async (email: string) => {
        const response = await AuthAPI.checkEmailExists(email);
        return response.data.exists;
    }
);

export const checkNickNameExists = createAsyncThunk(
    'auth/checkNickNameExists',
    async (nickName: string) => {
        const response = await AuthAPI.checkNickNameExists(nickName);
        return response.data.exists;
    }
)

export const localSignUp = createAsyncThunk(
    'auth/localSignUp',
    async (userdata: string) => {
        const response = await AuthAPI.localSignUp(userdata);
        return response.data;
    }
);

export const localSignIn = createAsyncThunk(
    'auth/localSignIn',
    async (userData: string) => {
        const response = await AuthAPI.localSignIn(userData);
        return response.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<{ form: keyof authState; message: string | null }>) => {
            const { form, message } = action.payload;
           state[form].error = message;
        },
        
        changeInput: (
            state,
            action: PayloadAction<{ form: keyof authState; name: string; value: string }>
        ) => {
            const { form, name, value } = action.payload;
            state[form].form[name] = value;
        },
        
        initializeForm: (state, action: PayloadAction<keyof authState>) => {
            const initialForm = initialState[action.payload];
            state[action.payload].form = { ...initialForm.form }
        },
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkUserIDExists.fulfilled, (state, action) => {
                state.SignUp.exists.id = action.payload;
            })
            .addCase(checkNickNameExists.fulfilled, (state, action) => {
                state.SignUp.exists.nickName = action.payload;
            })
            .addCase(checkEmailExists.fulfilled, (state, action) => {
                state.SignUp.exists.email = action.payload;
            });
    },
});

export const { setError, changeInput, initializeForm } = authSlice.actions;
export default authSlice.reducer;

