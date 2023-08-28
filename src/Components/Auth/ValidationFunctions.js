import { isEmail, isAlphanumeric, isLength } from 'validator';
import { validationErrorMessages } from './ValidationErrorMessages';

export const validateEmail = (value) => {
    return isEmail(value) ? null : validationErrorMessages.invalidEmail;
};

export const validateUserID = (value) => {
    if (isAlphanumeric(value) && isLength(value, { min: 4, max: 15 })) {
        return null;
    }
    return validationErrorMessages.invalidUserID;
};

export const validatePassword = (value) => {
    return isLength(value, { min: 6 }) ? null : validationErrorMessages.shortPassword;
};

export const validatePasswordConfirmation = (value, password) => {
    return value === password ? null : validationErrorMessages.passwordMismatch;
};