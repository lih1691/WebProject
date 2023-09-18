import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from '@Components/Auth';
import { storage } from '@lib/storage'
import { setError, initializeForm, changeInput, localSignUp } from "redux/features/authSlice";
import { setLoggedInfo, setValidated } from '@redux/features/userSlice';
import { localSignIn } from "@lib/api/auth";

function SignIn() {
    const dispatch = useDispatch();
    const { error, form, result } = useSelector(state => state.auth.SignIn);
    const { userID, userPWD } = form;

    const handleChange= (e) => {
        const { name, value } = e.target;

        dispatch(changeInput({
            name,
            value,
            form: 'SignIn'
        }));
    }

    useEffect(() => {
        return () => {
            dispatch(initializeForm('SignIn'));
        };
    }, [dispatch]);


    const HandleLocalSignIn = async () => {
        const { history } = useSelector(state => state.auth.SignIn);
        const { userID, userPWD } = form;

        try {
            await localSignIn({userID, userPWD});
            const loggedInfo = result;

            setLoggedInfo(loggedInfo);
            history.push('/');
            storage.set('loggedInfo', loggedInfo);
        } catch (e) {
            console.log('a');
            setError('잘못된 계정 정보입니다.');
        }
    }

    return (
        <AuthContent title="로그인" >
            <InputWithLabel
                label={"아이디"}
                name={"userID"}
                placeholder={"아이디"}
                value={userID}
                onChange={handleChange}
            />
            <InputWithLabel
                label={"비밀번호"}
                name={"userPWD"}
                placeholder={"비밀번호"}
                value={userPWD}
                onChange={handleChange}
            />
            {
                error && <AuthError>{error}</AuthError>
            }
            <AuthButton>로그인</AuthButton>
            <RightAlignedLink to={"/Auth/SignUp"}>회원가입</RightAlignedLink>
        </AuthContent>
    );
}

export default SignIn;