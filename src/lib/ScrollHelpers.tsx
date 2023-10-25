import React from 'react';

export function handleScrollEvent(articleIndex: number,setActiveArticle: (index: number) => void, articlesNum: number) {
    return () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const scrollRatio = (scrollY + windowHeight) / document.documentElement.scrollHeight;
        
        
        if (scrollRatio > (articleIndex + 1) / articlesNum) {
            setActiveArticle(articleIndex + 1);
        }
        else if (scrollRatio < articleIndex / articlesNum) {
            setActiveArticle(articleIndex - 1);
        }
    };
}

export function handleWheelEvent(articlesRef: React.MutableRefObject<Array<HTMLElement | null>>, activeArticleIndex: number, setActiveArticle: (index: number) => void) {
    return (event: WheelEvent) => {
        if (event.deltaY > 0) {
            if (articlesRef.current[activeArticleIndex + 1]) {
                const nextArticle = articlesRef.current[activeArticleIndex + 1];
                if (nextArticle) {
                    const topOffset = nextArticle.offsetTop;
                    window.scrollTo({ top: topOffset, behavior: 'smooth' });
                    setActiveArticle(activeArticleIndex + 1);
                }
            }
        } else if (event.deltaY < 0) {
            if (articlesRef.current[activeArticleIndex - 1]) {
                const prevArticle = articlesRef.current[activeArticleIndex - 1];
                
                if (prevArticle) {
                    const topOffset = prevArticle.offsetTop;
                    window.scrollTo({ top: topOffset, behavior: 'smooth'});
                    setActiveArticle(activeArticleIndex - 1);
                }
            }
        }
    };
}