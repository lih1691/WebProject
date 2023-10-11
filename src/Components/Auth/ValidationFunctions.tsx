import isEmail from "validator/lib/isEmail";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isLength from "validator/lib/isLength";
import { validationErrorMessages } from './ValidationErrorMessages';
export const validateEmail = (value: string) => {
    return isEmail(value) ? null : validationErrorMessages.invalidEmail;
};
export const validateUserID = (value: string) => {
    if (isAlphanumeric(value) && isLength(value, { min: 4, max: 15 })) {
        return null;
    }
    return validationErrorMessages.invalidUserID;
};
export const validatePassword = (value: string) => {
    return isLength(value, { min: 6 }) ? null : validationErrorMessages.shortPassword;
};

export const validatePasswordConfirmation = (value: string, password: string) => {
    return value === password ? null : validationErrorMessages.passwordMismatch;
};