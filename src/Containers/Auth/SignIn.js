import React from 'react';
import { AuthContent } from 'Components/Auth';
import InputWithLabel from "Components/Auth/InputWithLabel";

const SignIn = () => {
    return (
        <AuthContent title="로그인" >
            <InputWithLabel label={"아이디"} name={"userID"} placeholder={"아이디"}/>
            <InputWithLabel label={"비밀번호"} name={"userPWD"} placeholder={"비밀번호"}/>
        </AuthContent>
    );
}

export default SignIn;