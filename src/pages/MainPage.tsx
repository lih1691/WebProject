import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from "@redux/hook";
import { MainVisualContainer, CategoryContainer, NewsContainer } from '@Containers/MainPage';
import { DotNavigationWrapper} from "@Components/Base/DotNavigation";
import { handleWheelEvent } from "@lib/ScrollHelpers";

const ArticleContainer = styled.section`
  position: relative;
  height: 100%;
  overflow-y: auto;
  transition: all .6s;
`;

function MainPage() {
    const articleIndex = useAppSelector((state) => state.ui.currentIndex);
    const dispatch = useAppDispatch();
    const articlesRef = useRef<Array<HTMLElement>>([]);
    
    useEffect(() => {
        articlesRef.current = Array.from(document.querySelectorAll('.article'));
        const handleScroll = handleWheelEvent(articlesRef, articleIndex, dispatch);
        
        window.addEventListener('wheel', handleScroll);
        
        return () => {
            
            window.removeEventListener('wheel', handleScroll);
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