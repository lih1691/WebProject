import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from "@redux/hook";
import { MainVisualContainer, CategoryContainer, NewsContainer } from '@Containers/MainPage';
import { DotNavigationWrapper} from "@Components/Base/DotNavigation";
import { moveScrollToArticle, handleWheelEvent } from "@lib/mainScrollHelpers";

const ArticleContainer = styled.section`
  position: relative;
  height: 100%;
  overflow-y: auto;
  transition: all .6s;
`;

function MainPage() {
    const articleIndex = useAppSelector((state) => state.ui.currentIndex);
    const dispatch = useAppDispatch();
    const [ windowSize, setWindowSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })
    const articlesRef = useRef<Array<HTMLElement>>([]);
    
    useEffect(() => {
        articlesRef.current = Array.from(document.querySelectorAll('.article'));
        const handleScroll = handleWheelEvent(articlesRef, articleIndex, dispatch);
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            moveScrollToArticle(articlesRef, articleIndex, dispatch);
        }
        
        window.addEventListener('wheel', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('wheel', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [articleIndex]);
    
    return (
        <ArticleContainer >
            <DotNavigationWrapper articlesRef={articlesRef}></DotNavigationWrapper>
            <MainVisualContainer />
            <CategoryContainer />
            <NewsContainer />
        </ArticleContainer>
    );
}

export default MainPage;