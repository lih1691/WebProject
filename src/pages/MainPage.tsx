import React from 'react';
import { MainWrapper } from '@Components/Page/MainPage';
import { Background, MainImgList, MainPagerWrapper } from "@Components/Page/MainPage";

function MainPage() {
    return (
        <MainWrapper>
            <Background />
            <MainImgList />
            <MainPagerWrapper />
        </MainWrapper>
    );
}

export default MainPage;