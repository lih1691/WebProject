import React from 'react';
import { MainWrapper } from '@Components/Page/MainPage';
import { Background, MainImgList, MainPagerWrapper, MainTextWrapper } from "@Components/Page/MainPage";

function MainPage() {
    return (
        <MainWrapper>
            <Background />
            <MainImgList />
            <MainTextWrapper />
            <MainPagerWrapper />
        </MainWrapper>
    );
}

export default MainPage;