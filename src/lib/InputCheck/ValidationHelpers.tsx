import {validateEmail, validatePassword, validatePasswordConfirmation, validateUserID} from './ValidationFunctions';
import {ExistsErrorMessages} from "@lib/InputCheck/ExistsMessage";

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

export const setExistMessage = (name: string, isExists: boolean) => {
    if (!isExists) {
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