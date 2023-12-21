import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import * as AuthAPI from '@lib/api/auth';

export interface formState {
    userID: string;
    userNickname: string;
    userPWD: string;
    userPWDConfirm: string;
    userEmail: string;
}

export interface existsState {
    userID: boolean;
    userEmail: boolean;
    userNickname: boolean;
    
    [key: string]: any;
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
            userNickname: '',
            userPWD: '',
            userPWDConfirm: '',
            userEmail: '',
        },
        exists: {
            userID: false,
            userEmail: false,
            userNickname: false,
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


export const runCheckExists = createAsyncThunk(
    'auth/runCheckExists',
    async ({ name, value }: { name: string; value: string }) => {
        try {
            let result: any;
            
            switch (name) {
                case 'userID':
                    result = await AuthAPI.checkUserIDExists(value);
                    break;
                case 'userNickname':
                    result = await AuthAPI.checkNickNameExists(value);
                    break;
                case 'userEmail':
                    result = await AuthAPI.checkEmailExists(value);
                    break;
                default:
                    throw new Error('Invalid name');
            }
            
            return result.data;
        } catch (error) {
            throw new Error('Invalid name');
        }
    }
);

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
            .addCase(runCheckExists.fulfilled, (state, action) => {
                const name = action.meta.arg.name;
                state.SignUp.exists[name] = action.payload.isDuplicated;
            })
    },
});

export const { setError, changeInput, initializeForm } = authSlice.actions;
export default authSlice.reducer;

