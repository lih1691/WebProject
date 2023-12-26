import React, { useEffect } from 'react';
import {ThunkDispatch} from "@reduxjs/toolkit";
import useScrollHandler from "@lib/scroll/useScrollHandler";
import { setCurrentPageName } from "@redux/features/UISlice";

interface windowSize {
    width: number;
    height: number;
}

export interface mainPageHandlerProps {
    articlesRef: React.MutableRefObject<Array<HTMLElement>>;
    articleIndex: number;
    dispatch: ThunkDispatch<any, any, any>;
    scrollEventActive: boolean;
    setScrollEventActive: React.Dispatch<React.SetStateAction<boolean>>;
    setWindowSize: React.Dispatch<React.SetStateAction<windowSize>>;
    scrollDuration: number;
}

export const checkCurrentSectionIndex = (index: number, sectionNumber: number) => {
    return (index === sectionNumber);
}

export default function useMainPageHandler({
                                               articlesRef,
                                               articleIndex,
                                               dispatch,
                                               scrollEventActive,
                                               setScrollEventActive,
                                               setWindowSize,
                                               scrollDuration
                                           }: mainPageHandlerProps) {
    const { handleWheel, handleKeyDown, handleResize } =
        useScrollHandler(
            {articlesRef, articleIndex, dispatch, scrollEventActive, setScrollEventActive, setWindowSize, scrollDuration});
    
    useEffect(() => {
        articlesRef.current = Array.from(document.querySelectorAll('.article'));
        dispatch(setCurrentPageName("MainPage"));
        
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