import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AuthWrapper } from 'Components/Auth';
import { SignIn, SignUp } from 'Containers/Auth';

function Auth() {
    return (
        <AuthWrapper>
            <Routes>
                <Route path={"/SignIn"} element={ <SignIn /> } />
                <Route path={"/SignUp"} element={ <SignUp /> } />
            </Routes>
        </AuthWrapper>
    );
}

export default Auth;