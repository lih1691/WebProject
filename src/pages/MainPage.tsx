import React from 'react';
import { MainWrapper } from '@Components/Page/MainPage';
import { Background, MainImgList, MainImgPager } from "@Components/Page/MainPage";

function MainPage() {
    return (
        <MainWrapper>
            <Background />
            <MainImgList />
            <MainImgPager />
        </MainWrapper>
    );
}

export default MainPage;