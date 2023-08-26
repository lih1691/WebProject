import React from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from "Components/Auth";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { isEmail, isLength, isAlphanumeric } from 'validator';
import * as authActions from 'redux/modules/auth';

function SignUp(props) {
    const { error } = props;
    const { userID, userPWD, userPWDConfirm, userEmail } = props.form.toJS();

    const setError = (message) => {
        const { AuthActions } = props;
        AuthActions.setError({
            form: 'SignUp',
            message
        });
    }

    const validate = {
        userEmail: (value) => {
            if(!isEmail(value)) {
                setError('잘못된 이메일 형식입니다.');
                return false;
            }

            return true;
        },

        userID: (value) => {
            if(!isAlphanumeric(value) || !isLength(value, {min: 4, max: 15})) {
                console.log(isAlphanumeric(value));
                setError('아이디는 4 ~ 15 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
                return false;
            }

            return true;
        },

        userPWD: (value) => {
            if(!isLength(value, {min: 6})) {
                setError('비밀번호는 6자 이상이어야 합니다.');
                return false;
            }

            return true;
        },

        userPWDConfirm: (value) => {
            if(props.form.get('userPWD') !== value) {
                setError('비밀번호가 일치하지 않습니다.');
                return false;
            }

            setError(null);
            return true;
        }
    }

    const checkEmailExists = async(userEmail) => {
        const { AuthActions } = props;
        try {
            await AuthActions.checkEmailExists(userEmail);

            if ( props.exists.get('userEmail')) {
                setError('이미 존재하는 이메일입니다.');
            } else {
                setError(null);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const checkUserIDExists = async (userID) => {
        const { AuthActions } = props;
        try {
             await AuthActions.checkUserIDExists(userID);
             if (props.exists.get('userID')) {
                 setError('이미 존재하는 아이디입니다.');
             } else {
                 setError(null);
             }
        } catch (e) {
            console.log(e);
        }
    }

    const handleChange = (e) => {
        const { AuthActions } = props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form:'SignUp'
        });

        const validation = validate[name](value);
        if (name.indexOf('userPWD') > -1 || !validation) return;

        const check = name === 'userID' ?  checkUserIDExists: checkEmailExists;
        check(value);
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
                label={"이메일"}
                name={"userEmail"}
                placeholder={"이메일"}
                value={userEmail}
                onChange={handleChange}
            />
            {
                error && <AuthError>{error}</AuthError>
            }
            <AuthButton>회원가입</AuthButton>
            <RightAlignedLink to={"/Auth/SignInLink"}>로그인</RightAlignedLink>
        </AuthContent>
    );
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['SignUp', 'form']),
        error: state.auth.getIn(['SignUp', 'error']),
        exists: state.auth.getIn(['SignUp', 'exists'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(SignUp);

