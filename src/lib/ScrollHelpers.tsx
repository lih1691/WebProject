import React from 'react';

export function handleFullPageScroll(setActiveArticle: (index: number) => void) {
    return () => {
        const scrollY = window.scrollY;
        const activeIndex = Math.floor(scrollY / window.innerHeight);
        setActiveArticle(activeIndex);
    };
}

export function handleWheelEvent(activeArticleIndex: number, articlesRef: React.MutableRefObject<Array<HTMLElement | null>>,setActiveArticle: (index: number) => void) {
    return (event: WheelEvent) => {
        if (event.deltaY > 0) {
            if (activeArticleIndex < articlesRef.current.length - 1) {
                setActiveArticle(activeArticleIndex + 1);
            }
        } else if (event.deltaY < 0) {
            setActiveArticle(activeArticleIndex - 1);
        }
    };
}