import {useAppDispatch, useAppSelector} from "@redux/hook";
import React, {useEffect} from "react";
import {changeInput, formState, initializeForm, localSignUp, setError} from "@redux/features/authSlice";
import {runCheckExists, runValidation, setExistMessage} from "@lib/InputCheck/ValidationHelpers";
import {encrypt} from "@lib/crypto";
import {useNavigate} from "react-router-dom";
import storage from "@lib/storage";
import {setLoggedInfo, setValidated} from "@redux/features/userSlice";

export const useSignUp = (formInfo : formState) => {
    const dispatch = useAppDispatch();
    const { result } = useAppSelector((state) => state.auth.result);
    const exists = useAppSelector((state) => state.auth.SignUp.exists);
    const { userID, userNickname, userPWD, userPWDConfirm, userEmail } = formInfo;
    
    useEffect(() => {
        return () => {
            dispatch(initializeForm('SignUp'));
        };
    }, [dispatch]);
    
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        
        dispatch(changeInput({
            name,
            value,
            form: 'SignUp'
        }));
        
        const validationError = runValidation(name, value, formInfo);
        if (validationError) {
            dispatch(setError({
                form: "SignUp",
                message: validationError,
            }));
            return;
        }
        
        const checkExists = runCheckExists({name, value});
        const existsMessage = setExistMessage(name, exists[name]);
        dispatch(setError({
            form: 'SignUp',
            message: existsMessage
        }));
    }
    
    const useHandleLocalSignUp = async () => {
        const { error } = useAppSelector((state) => state.auth.SignUp);
        const encryptedPWD = encrypt(userPWD);
        const jsonData = JSON.stringify({userID, encryptedPWD, userNickname, userEmail});
        const navigate = useNavigate();
        
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
            navigate('/');
        } catch (e: any) {
            if (e.response.status === 409) {
                const { key } = e.response.data;
                const message = key === 'userEmail' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.';
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
    
    return { handleChange: handleChange, useHandleLocalSignUp };
}