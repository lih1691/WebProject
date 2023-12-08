import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from "@Components/Auth";
import { useAppSelector, useAppDispatch} from "@redux/hook";
import { runValidation, runCheckExists } from "@Components/Auth/ValidationHelpers";
import storage from "@lib/storage";
import { setError, initializeForm, changeInput, localSignUp } from "@redux/features/authSlice";
import { setLoggedInfo, setValidated } from "@redux/features/userSlice";
import { encrypt } from "@lib/crypto";

function SignUp() {
    const dispatch = useAppDispatch();
    const { result } = useAppSelector((state) => state.auth.result);
    const { error, form } = useAppSelector((state) => state.auth.SignUp);
    const { userID, userNickName, userPWD, userPWDConfirm, userEmail } = form;

    useEffect(() => {
        return () => {
            dispatch(initializeForm('SignUp'));
        };
    }, [dispatch]);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        console.log(value);

        dispatch(changeInput({
            name,
            value,
            form: 'SignUp'
        }));

        const validationError = runValidation(name, value, form);
        dispatch(setError({
            form: "SignUp",
            message: validationError,
        }));

        // const checkError = runCheckExists({name, value});
        // if (checkError) {
        //     dispatch(setError({
        //         form: 'SignUp',
        //         message: checkError.toString(),
        //     }));
        // } else {
        //     dispatch(setError({
        //         form: 'SignUp',
        //         message: null,
        //     }));
        // }
    }

    const useHandleLocalSignUp = async () => {
        const { error } = useAppSelector((state) => state.auth.SignUp);
        const encryptedPWD = encrypt(userPWD);
        const jsonData = JSON.stringify({userID, encryptedPWD, userNickName, userEmail});
        const navigate = useNavigate();

        if (error) return;
        if (!runValidation('userID', userID, form)
            || !runValidation('userPWD', userPWD, form)
            || !runValidation('userPWDConfirm', userPWDConfirm, form)
            || !runValidation('userEmail', userEmail, form)) {
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
                name={"userNickName"}
                placeholder={"닉네임"}
                value={userNickName}
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
            <AuthButton onClick={useHandleLocalSignUp}>회원가입</AuthButton>
            <RightAlignedLink to={"/Auth/SignIn"}>로그인</RightAlignedLink>
        </AuthContent>
    );
}

export default SignUp;
