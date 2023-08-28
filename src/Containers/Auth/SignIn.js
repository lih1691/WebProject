import React, { useEffect } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from 'Components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators }  from "redux";
import storage from 'lib/storage'
import * as authActions from 'redux/modules/auth';
import * as userActions from 'redux/modules/auth';

function SignIn(props) {
    const { userID, userPWD } = props.form.toJS();
    const { error } = props;

    const handleChange= (e) => {
        const { AuthActions } = props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'SignIn'
        });
    }

    useEffect(() => {
        const { AuthActions }  = props;
        return () => {
            AuthActions.initializeForm('SignIn');
        };
    }, []);

    const setError = (message) => {
        const { AuthActions } = props;
        AuthActions.setError({
            form: 'SignIn',
            message
        });
        return false;
    }

    const handleLocalSignIn = async () => {
        const { form, AuthActions, UserActions, history } = props;
        const { userID, userPWD } = form.toJS();

        try {
            await AuthActions.localSignIn({userID, userPWD});
            const loggedInfo = props.result.toJS();

            UserActions.setLoggedInfo(loggedInfo);
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
            <RightAlignedLink to={"/Auth/SignUpLink"}>회원가입</RightAlignedLink>
        </AuthContent>
    );
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['SignIn', 'form']),
        error: state.auth.getIn(['SignIn', 'error']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(SignIn);