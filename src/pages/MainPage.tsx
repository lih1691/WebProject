import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { MainVisualContainer, CategoryContainer, NewsContainer } from '@Containers/MainPage';
import { handleScrollEvent, handleWheelEvent } from "@lib/ScrollHelpers";

const ArticleContainer = styled.section`
  position: relative;
  height: 100%;
  overflow-y: auto;
  transition: all .6s;
`;

function MainPage() {
    const articlesRef = useRef<Array<HTMLElement>>([]);
    const [ articleIndex, setArticleIndex] = useState(0);
    
    useEffect(() => {
        articlesRef.current = Array.from(document.querySelectorAll('.article'));
        const articlesNum = articlesRef.current.length;
        window.addEventListener('scroll', handleScrollEvent(articleIndex, setArticleIndex, articlesNum));
        window.addEventListener('wheel', handleWheelEvent(articlesRef, articleIndex, setArticleIndex));
        
        return () => {
            window.removeEventListener('scroll', handleScrollEvent(articleIndex, setArticleIndex, articlesNum));
            window.removeEventListener('wheel', handleWheelEvent(articlesRef, articleIndex, setArticleIndex));
        };
    }, [articleIndex]);
    
    return (
        <ArticleContainer>
            <MainVisualContainer />
            <CategoryContainer />
            <NewsContainer />
        </ArticleContainer>
    );
}

export default MainPage;