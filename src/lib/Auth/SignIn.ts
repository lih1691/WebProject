import React, {useEffect} from "react";
import {changeInput, initializeForm, localSignIn, setError} from "@redux/features/authSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@redux/hook";
import {setLoggedInfo} from "@redux/features/userSlice";
import storage from "@lib/storage";

export const useSignIn = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        return () => {
            dispatch(initializeForm('SignIn'));
        };
    }, [dispatch]);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        
        dispatch(changeInput({
            name,
            value,
            form: 'SignIn'
        }));
    }
    
    const useHandleLocalSignIn = async () => {
        const { result } = useAppSelector((state) => state.auth.result);
        const navigate = useNavigate();
        const userData = useAppSelector(state => state.auth.SignIn.form);
        const jsonData = JSON.stringify(userData);
        
        try {
            localSignIn(jsonData);
            const loggedInfo =  result;
            
            setLoggedInfo(loggedInfo);
            navigate('/');
            storage.set('loggedInfo', loggedInfo);
        } catch (e) {
            console.log('a');
            setError(
                {
                    form: 'SignIn',
                    message: '잘못된 계정 정보 입니다.'
                }
            )
        }
    }
    
    return { handleChange, useHandleLocalSignIn };
}


