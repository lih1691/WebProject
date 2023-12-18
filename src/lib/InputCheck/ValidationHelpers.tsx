import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";
import {
    validateEmail,
    validateUserID,
    validatePassword,
    validatePasswordConfirmation
} from './ValidationFunctions';
import { checkUserIDExists, checkEmailExists, checkNickNameExists} from "@redux/features/authSlice";
import { ExistsErrorMessages } from "@lib/InputCheck/ExistsMessage";
import {useAppSelector} from "@redux/hook";

type formState = {
    userID: string;
    userNickname: string;
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
    async (payload: {name: string; value: string})=> {
            let apiFunction:  AsyncThunk<any, string, any>;
            
            switch (payload.name) {
                case 'userEmail':
                    apiFunction = checkEmailExists;
                    break;
                case 'userID':
                    apiFunction = checkUserIDExists;
                    break;
                case 'userNickName':
                    apiFunction = checkNickNameExists;
                    break;
                default:
                    throw new Error('Invalid name');
            }
            
            console.log(apiFunction(payload.value));
            
            return apiFunction(payload.value);
        }
    );

export const setExistMessage = (name: string, isExists: boolean) => {
    if (isExists) {
        return null;
    }
    
    switch (name) {
        case 'userEmail':
            return ExistsErrorMessages.userEmail;
        case 'userID':
            return ExistsErrorMessages.userID;
        case 'userNickName':
            return ExistsErrorMessages.userNickName;
        default:
            return null;
    }
}