import React from 'react';
import styled from "styled-components";
import { MainVisualWrapper } from '@Components/Page/MainPage/MainVisual';
import { CategoryContainer } from '@Components/Page/MainPage/Category';

const MainContainer = styled.div`
  margin: 0;
  overflow-y: hidden;
`

function MainPage() {
    return (
        <MainContainer>
            <CategoryContainer />
        </MainContainer>
    );
}

export default MainPage;