import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "@redux/hook";
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from '@Components/Auth';
import storage from "@lib/storage";
import { setError, initializeForm, changeInput, localSignIn } from "@redux/features/authSlice";
import { setLoggedInfo, setValidated } from '@redux/features/userSlice';

function SignIn() {
    const dispatch = useAppDispatch();
    const { error, form } = useAppSelector(state => state.auth.SignIn);
    const { result } = useAppSelector((state) => state.auth.result);
    const { userID, userPWD } = form;

    const handleChange= (e: React.ChangeEvent<HTMLInputElement>) => {
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
        const navigate = useNavigate();
        const { userID, userPWD } = form;

        try {
            localSignIn({userID, userPWD});
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