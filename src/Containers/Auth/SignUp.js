import React, {useEffect} from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from "Components/Auth";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { runValidation, runCheckExists } from "Components/Auth/ValidationHelpers";
import storage from "lib/storage";
import * as  userActions from 'redux/modules/user';
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

    useEffect(() => {
        const { AuthActions } = props;
        return () => {
            AuthActions.initializeForm('SignUp');
        };
    }, []);

    const handleChange = async (e) => {
        const { AuthActions } = props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'SignUp'
        });

        const validationError = runValidation(name, value, props.form, props);
        if (validationError) {
            setError(validationError);
            return;
        }

        const checkError = await runCheckExists(name, value, props);
        if (checkError) {
            setError(checkError);
        } else {
            setError(null);
        }
    }

    const handleLocalSignUp = async () => {
        const { form, AuthActions, UserActions, error, history } = props;
        const { userID, userPWD, userPWDConfirm, userEmail } = form.toJS();

        if (error) return;
        if (!runValidation('userID', userID, form, props)
            || !runValidation('userPWD', userPWD, form, props)
            || !runValidation('userPWDConfirm', userPWDConfirm, form, props)
            || !runValidation('userEmail', userEmail, form, props)) {
            return;
        }

        try {
            await AuthActions.localSignUp({
                userID, userPWD, userEmail
            });
            const loggedInfo = props.result.toJS();

            storage.set('loggedInfo', loggedInfo);
            UserActions.setLoggedInfo(loggedInfo);
            UserActions.setValidated(true);
            history.push('/');
        } catch (e) {
            if (e.response.status === 409) {
                const { key } = e.response.data;
                const message = key === 'userEmail' ? '이미 존재하는 이메일입니다.' : '이미 존재하는 아이디입니다.';
                return setError(message);
            }
            setError('알 수 없는 에러가 발생했습니다.');
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

export default connect(
    (state) => ({
        form: state.auth.getIn(['SignUp', 'form']),
        error: state.auth.getIn(['SignUp', 'error']),
        exists: state.auth.getIn(['SignUp', 'exists']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(SignUp);

