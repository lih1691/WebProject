import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from "@redux/hook";
import { MainVisualContainer, CategoryContainer, ReviewsContainer } from '@Containers/MainPage';
import { DotNavigationWrapper} from "@Components/Page/MainPage/DotNavigation";
import useMainPageHandler from "@lib/PageHandler/MainPageHandler";

const ArticleContainer = styled.section`
  position: relative;
  height: 100vh;
  transition: all .6s;
`;

function MainPage() {
    const articleIndex = useAppSelector((state) => state.ui.mainPageState.currentIndex);
    const dispatch = useAppDispatch();
    const [ windowSize, setWindowSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [ scrollEventActive, setScrollEventActive ] = useState(false);
    const articlesRef = useRef<Array<HTMLElement>>([]);
    const scrollDuration = 550;
    
    useMainPageHandler({articlesRef, articleIndex, dispatch, scrollEventActive, setScrollEventActive, setWindowSize, scrollDuration});
    
    return (
        <ArticleContainer >
            <DotNavigationWrapper articlesRef={articlesRef}></DotNavigationWrapper>
            <MainVisualContainer />
            <CategoryContainer />
            <ReviewsContainer />
        </ArticleContainer>
    );
}

export default MainPage;