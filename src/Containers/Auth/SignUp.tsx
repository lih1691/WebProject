import React from 'react';
import { useAppSelector} from "@redux/hook";
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from "@Components/Auth";
import {useSignUp} from "@lib/Auth/SignUp";
import {setCurrentPageName} from "@redux/features/UISlice";

function SignUp() {
    const {  error, form } = useAppSelector((state) => state.auth.SignUp);
    const { userID, userNickname, userPWD, userPWDConfirm, userEmail } = form;
    
    setCurrentPageName("SignIn");
    const { handleChange, handleLocalSignUp } = useSignUp(form);
    
    return (
        <AuthContent title="회원가입" >
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
            <InputWithLabel
                label={"비밀번호 확인"}
                name={"userPWDConfirm"}
                placeholder={"비밀번호 확인"}
                value={userPWDConfirm}
                onChange={handleChange}
            />
            <InputWithLabel
                label={"닉네임"}
                name={"userNickname"}
                placeholder={"닉네임"}
                value={userNickname}
                onChange={handleChange}
            />
            <InputWithLabel
                label={"이메일"}
                name={"userEmail"}
                placeholder={"이메일"}
                value={userEmail}
                onChange={handleChange}
            />
            {
                error && <AuthError>{error}</AuthError>
            }
            <AuthButton onClick={handleLocalSignUp}>회원가입</AuthButton>
            <RightAlignedLink to={"/Auth/SignIn"}>로그인</RightAlignedLink>
        </AuthContent>
    );
}

export default SignUp;
