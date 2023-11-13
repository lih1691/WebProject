import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { Dot } from "@Components/Page/MainPage/DotNavigation/Dot";
import { DotNavigation } from "@Components/Page/MainPage/DotNavigation/DotNavigation";
import { moveScrollToArticle } from "@lib/scroll/mainScrollHelpers";

const Wrapper = styled.div`
  position: fixed;
  right: 65px;
  top: 50vh;
  transition: all .2s;
  z-index: 3;
`

function DotNavigationWrapper({articlesRef}: {articlesRef: React.MutableRefObject<Array<HTMLElement | null>>}) {
    const articleNum = articlesRef.current.length;
    const dotIndices = Array.from({length: articleNum}, (_, index:number) => index);
    const currentIndex = useAppSelector((state) => (state.ui.mainPageState.currentIndex));
    const dispatch = useAppDispatch();
    const onClickHandler = (index: number) => {
        moveScrollToArticle(articlesRef, index, dispatch);
    }
    
    return (
        <Wrapper>
            <DotNavigation>
                {dotIndices.map(index =>
                    <Dot key={index} $index={index} $currentIndex={currentIndex} onClick={() => onClickHandler(index)}></Dot>
                )}
            </DotNavigation>
        </Wrapper>
    )
}

export default DotNavigationWrapper;
