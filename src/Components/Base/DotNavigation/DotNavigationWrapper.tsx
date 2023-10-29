import React from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { Dot } from "@Components/Base/DotNavigation/Dot";
import { DotNavigation } from "@Components/Base/DotNavigation/DotNavigation";
import { moveScrollToArticle } from "@lib/mainScrollHelpers";

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
    const currentIndex = useAppSelector((state) => (state.ui.currentIndex));
    const dispatch = useAppDispatch();
    
    const onClickHandler = (index: number) => {
        moveScrollToArticle(articlesRef, index, dispatch);
    }
    
    return (
        <Wrapper>
            <DotNavigation>
                {dotIndices.map(index =>
                    <Dot $index={index} $currentIndex={currentIndex} onClick={() => onClickHandler(index)}></Dot>
                )}
            </DotNavigation>
        </Wrapper>
    )
}

export default DotNavigationWrapper;
