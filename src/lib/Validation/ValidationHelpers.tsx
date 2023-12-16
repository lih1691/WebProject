import { createAsyncThunk } from "@reduxjs/toolkit";
import { validationErrorMessages } from './ValidationErrorMessages';
import {
    validateEmail,
    validateUserID,
    validatePassword,
    validatePasswordConfirmation
} from './ValidationFunctions';
import {checkEmailExists, checkNickNameExists, checkUserIDExists} from "@redux/features/authSlice";

type formState = {
    userID: string;
    userNickName: string;
    userPWD: string;
    userPWDConfirm: string;
    userEmail: string;
}

export const runValidation = (name: string, value: string, form: formState) => {
    switch (name) {
        case 'userEmail':
            return validateEmail(value);
        case 'userID':
            return validateUserID(value);
case 'userPWD':
return validatePassword(value);
case 'userPWDConfirm':
return validatePasswordConfirmation(value, form.userPWD);
default:
return null;
}
};

export const runCheckExists =  createAsyncThunk (
    'auth/runCheckExists',
    async (payload: {name: string; value: string}, {dispatch})=> {
        const {name, value} = payload;

        switch(name) {
            case 'userEmail':
            {
                const response = await dispatch(checkEmailExists(value));
                const exists = response.payload;
                return exists ? validationErrorMessages.existingEmail : null;
            }
            case 'userID':
            {
                const response = await dispatch(checkUserIDExists(value));
                const exists = response.payload;
                return exists ? validationErrorMessages.existingEmail : null;
            }
            case 'userNickName':
            {
                const response = await dispatch(checkNickNameExists(value));
                const exists = response.payload;
                return exists ? validationErrorMessages.existingEmail : null;
            }
            default:
                return null;
        }
    }
    );

