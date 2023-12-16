import React from 'react';
import { useAppSelector } from "@redux/hook";
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from '@Components/Auth';
import { useSignIn } from "@lib/Auth/SignIn";

function SignIn() {
    const { error, form } = useAppSelector(state => state.auth.SignIn);
    const { userID, userPWD } = form;
    
    const{ handleChange, useHandleLocalSignIn } = useSignIn();
    
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
            <AuthButton onClick={useHandleLocalSignIn}>로그인</AuthButton>
            <RightAlignedLink to={"/Auth/SignUp"}>회원가입</RightAlignedLink>
        </AuthContent>
    );
}

export default SignIn;