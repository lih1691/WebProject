import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthWrapper } from '@Components/Auth';
import { SignIn, SignUp } from '@Containers/Auth';
import {HeaderContainer} from "@Containers/Base";
import {ContentsWrapper} from "@Components/Contents";
import { SubBanner} from "@Components/Contents/Sub";
import {setCurrentPageName} from "@redux/features/UISlice";
import {useAppDispatch} from "@redux/hook";

function Auth() {
    const dispatch = useAppDispatch();
    dispatch(setCurrentPageName("Auth"));
    
    return (
        <>
            <HeaderContainer/>
            <SubBanner />
            <ContentsWrapper>
                <AuthWrapper>
                    <Routes>
                        <Route path={"/SignIn"} element={ <SignIn /> } />
                        <Route path={"/SignUp"} element={ <SignUp /> } />
                    </Routes>
                </AuthWrapper>
            </ContentsWrapper>
        </>
    );
}

export default Auth;