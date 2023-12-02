import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from "@redux/hook";
import MainTextTitle from './MainTextTitle';
import MainTextSentence from './MainTextSentence';

const Positioner = styled.div`
  position: relative;
  width: 1600px;
  margin: 0 auto;
`

const TextPositioner = styled.div`
  position: absolute;
  top: 305px;
  line-height: 1.8;
`

function MainTextWrapper() {
    const currentIndex = useAppSelector(state => state.ui.mainPageState.mainVisual.currentIndex);
    const mainState = useAppSelector(state => state.ui.mainPageState.mainVisual.MainImages);
    
    return (
        <Positioner>
                {
                    mainState.map((state) => (
                        <TextPositioner key={state.id}>
                            <MainTextTitle active={state.id === currentIndex}>
                                {state.title}
                            </MainTextTitle>
                            <MainTextSentence active={state.id === currentIndex}>
                                {state.sentence}
                            </MainTextSentence>
                        </TextPositioner>
                    ))
                }
        </Positioner>
    )
}

export default MainTextWrapper;