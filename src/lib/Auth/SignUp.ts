import React, {useEffect, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "@redux/hook";
import {formState, changeInput, initializeForm, runCheckExists, localSignUp, setError} from "@redux/features/authSlice";
import {setLoggedInfo,  setValidated} from "@redux/features/userSlice";
import { runValidation, setExistMessage } from "@lib/InputCheck/ValidationHelpers";
import {encrypt} from "@lib/crypto";
import {useNavigate} from "react-router-dom";
import storage from "@lib/storage";

export const useSignUp = (formInfo : formState) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { result } = useAppSelector((state) => state.auth.result);
    const exists = useAppSelector((state) => state.auth.SignUp.exists);
    const error = useAppSelector((state) => state.auth.SignUp.error);
    const { userID, userNickname, userPWD, userPWDConfirm, userEmail } = formInfo;
    const [ validationError, setValidationError ] = useState('');
    
    const currentFieldNameRef = useRef<string | null>(null);
    
    useEffect(() => {
        return () => {
            dispatch(initializeForm('SignUp'));
        };
    }, [dispatch]);
    
    useEffect(() => {
        const name = currentFieldNameRef.current;
        if (name) {
            const existsMessage = setExistMessage(name, exists[name]);
            dispatch(setError({
                form: 'SignUp',
                message: existsMessage
            }));
        }
    }, [exists, dispatch]);
    
    useEffect(() => {
        const name = currentFieldNameRef.current;
        if (name) {
            dispatch(setError({
                form: "SignUp",
                message: validationError,
            }));
        }
    }, [validationError])
    
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        console.log(value);
        currentFieldNameRef.current = name;
        
        dispatch(changeInput({
            name,
            value,
            form: 'SignUp'
        }));
        
        const newValidationError = runValidation(name, value, formInfo);
        if (newValidationError) {
            setValidationError(newValidationError);
        } else {
            setValidationError('');
        }
        
        await dispatch(runCheckExists({name, value}));
    }
    
    const handleLocalSignUp = async () => {
        const encryptedPWD = encrypt(userPWD);
        const jsonData = JSON.stringify({userID, encryptedPWD, userNickname, userEmail});
        
        if (error) return;
        if (!runValidation('userID', userID, formInfo)
            || !runValidation('userPWD', userPWD, formInfo)
            || !runValidation('userPWDConfirm', userPWDConfirm, formInfo)
            || !runValidation('userEmail', userEmail, formInfo)) {
            return;
        }
        
        try {
            localSignUp(jsonData);
            const loggedInfo = result;
            
            storage.set('loggedInfo', loggedInfo);
            setLoggedInfo(loggedInfo);
            setValidated(true);
            navigate('/', {replace: false});
        } catch (e: any) {
            if (e.response.status === 409) {
                const { key } = e.response.data;
                const message = setExistMessage(key, true);
                return dispatch(setError({
                    form: 'SignUp',
                    message,
                }));
            }
            dispatch(setError({
                form: 'SignUp',
                message: '알 수 없는 에러가 발생했습니다.',
            }));
        }
    }
    
    return { handleChange, handleLocalSignUp };
}