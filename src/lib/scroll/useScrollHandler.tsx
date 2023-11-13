import {MouseEvent} from 'react';
import { moveScrollToArticle, handleWheelEvent, handleKeyEvent } from "@lib/scroll/mainScrollHelpers";
import { mainPageHandlerProps } from "@lib/PageHandler/MainPageHandler";

export default function useScrollHandler({
    articlesRef,
    articleIndex,
    dispatch,
    scrollEventActive,
    setScrollEventActive,
    setWindowSize,
    scrollDuration
}: mainPageHandlerProps) {
    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (scrollEventActive) return;
        handleWheelEvent(articlesRef, articleIndex, dispatch)(e);
        handleArticleTransition();
    };
    const handleKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();
        if (scrollEventActive) return;
        handleKeyEvent(articlesRef, articleIndex, dispatch)(e);
        handleArticleTransition();
    };
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        moveScrollToArticle(articlesRef, articleIndex, dispatch);
    };
    
    const handleArticleTransition = () => {
        setScrollEventActive(true);
        
        setTimeout(() => {
            setScrollEventActive(false);
        }, scrollDuration);
    }
    
    const removeWheelClick = (e: MouseEvent) => {
        if (e.button === 1) {
            e.preventDefault();
            return;
        }
    };
    
   return { handleWheel, handleKeyDown, handleResize, handleArticleTransition, removeWheelClick };
}

