import { validationErrorMessages } from './ValidationErrorMessages';
import {
    validateEmail,
    validateUserID,
    validatePassword,
    validatePasswordConfirmation
} from './ValidationFunctions';

export const runValidation = (name, value, form, props) => {
    switch (name) {
        case 'userEmail':
            return validateEmail(value);
        case 'userID':
            return validateUserID(value);
        case 'userPWD':
            return validatePassword(value);
        case 'userPWDConfirm':
            return validatePasswordConfirmation(value, form.get('userPWD'));
        default:
            return null;
    }
};

export const runCheckExists = async (name, value, props) => {
    const { AuthActions } = props;
    try {
        if (name === 'userEmail') {
            await AuthActions.checkEmailExists(value);
            return props.exists.get('userEmail') ? validationErrorMessages.existingEmail : null;
        } else if (name === 'userID') {
            await AuthActions.checkUserIDExists(value);
            return props.exists.get('userID') ? validationErrorMessages.existingUserID : null;
        }
    } catch (e) {
        console.log(e);
        return null;
    }
};
