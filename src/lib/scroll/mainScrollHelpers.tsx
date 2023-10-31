import React, {MouseEvent} from 'react';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { changeIndex } from "@redux/features/UISlice";

export function moveScrollToArticle(articlesRef: React.MutableRefObject<Array<HTMLElement | null>>, activeArticleIndex: number, dispatch: ThunkDispatch<any, any, any>) {
    if (articlesRef.current[activeArticleIndex]) {
        const targetArticle = articlesRef.current[activeArticleIndex];
        if (targetArticle) {
            const topOffset = targetArticle.offsetTop;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
            dispatch(changeIndex(activeArticleIndex));
        }
    }
}

export function handleWheelEvent(articlesRef: React.MutableRefObject<Array<HTMLElement | null>>, activeArticleIndex: number, dispatch: ThunkDispatch<any, any, any>) {
    return (event: WheelEvent) => {
        if (event.deltaY > 0) {
            moveScrollToArticle(articlesRef, activeArticleIndex + 1, dispatch);
        } else if (event.deltaY < 0) {
            moveScrollToArticle(articlesRef, activeArticleIndex -1 , dispatch);
        }
    };
}

export function handleKeyEvent(articlesRef: React.MutableRefObject<Array<HTMLElement | null>>, activeArticleIndex: number, dispatch: ThunkDispatch<any, any, any>) {
    return (event: KeyboardEvent) => {
        if (event.key === 'ArrowDown') {
            moveScrollToArticle(articlesRef, activeArticleIndex + 1, dispatch);
            
        } else if (event.key === 'ArrowUp') {
            moveScrollToArticle(articlesRef, activeArticleIndex -1 , dispatch);
        }
    }
}

export function handleWheelClick() {
    return (event: MouseEvent) => {
        console.log(event.button);
    }
}