import React, {MouseEvent, useEffect} from 'react';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { moveScrollToArticle, handleWheelEvent, handleKeyEvent } from "@lib/scroll/mainScrollHelpers";

interface windowSize {
    width: number;
    height: number;
}

interface UseScrollHandlerProps {
    articlesRef: React.MutableRefObject<Array<HTMLElement>>;
    articleIndex: number;
    dispatch: ThunkDispatch<any, any, any>;
    scrollEventActive: boolean;
    setScrollEventActive: React.Dispatch<React.SetStateAction<boolean>>;
    setWindowSize: React.Dispatch<React.SetStateAction<windowSize>>;
    scrollDuration: number;
}

export default function useScrollHandler({
    articlesRef,
    articleIndex,
    dispatch,
    scrollEventActive,
    setScrollEventActive,
    setWindowSize,
    scrollDuration
}: UseScrollHandlerProps) {
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
    
    useEffect(() => {
        articlesRef.current = Array.from(document.querySelectorAll('.article'));
        
        window.addEventListener('wheel', handleWheel, {passive: false});
        window.addEventListener('keydown', handleKeyDown, { passive: false });
        window.addEventListener('resize', handleResize)
        
        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleResize);
        };
        
    }, [articleIndex, scrollEventActive]);
}

