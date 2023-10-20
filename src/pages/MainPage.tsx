import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { MainVisualWrapper } from '@Components/Page/MainPage/MainVisual';
import { CategoryContainer } from '@Components/Page/MainPage/Category';
import {handleFullPageScroll, handleWheelEvent} from "@lib/ScrollHelpers";

const ArticleContainer = styled.section`
  position: relative;
  height: 100%;
  transition: all .6s;
`;

function MainPage() {
    const articlesRef = useRef<Array<HTMLElement>>([]);
    const [ activeArticleIndex, setActiveArticleIndex ] = useState<number>(0);
    
    useEffect(() => {
        window.addEventListener('scroll', handleFullPageScroll(setActiveArticleIndex));
        articlesRef.current = Array.from(document.querySelectorAll('.article'));
        
        return () => {
            window.removeEventListener('scroll', handleFullPageScroll(setActiveArticleIndex));
        };
    }, []);
    
    useEffect(() => {
        window.addEventListener('wheel', handleWheelEvent(activeArticleIndex, articlesRef, setActiveArticleIndex));
        
        return () => {
            window.removeEventListener('wheel', handleWheelEvent(activeArticleIndex, articlesRef, setActiveArticleIndex));
        }
    }, [activeArticleIndex]);
   
    
    return (
        <ArticleContainer>
            <MainVisualWrapper />
            <CategoryContainer />
        </ArticleContainer>
    );
}

export default MainPage;