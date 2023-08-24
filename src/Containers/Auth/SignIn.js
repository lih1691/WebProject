import React from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink } from 'Components/Auth';
import { connect } from 'react-redux';
import { bindActionCreators }  from "redux";
import * as authActions from 'redux/modules/auth';

const SignIn = () =>  {
    const { userID, userPWD } = this.props.form.toJS();

    const handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form:'SignIn'
        });
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
            <AuthButton>로그인</AuthButton>
            <RightAlignedLink to={"/Auth/SignUp"}>회원가입</RightAlignedLink>
        </AuthContent>
    );
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['SignIn', 'form'])
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(SignIn);