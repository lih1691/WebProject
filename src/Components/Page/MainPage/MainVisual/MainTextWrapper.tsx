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
  transition: all .6s;
`

function MainTextWrapper() {
    const index = useAppSelector(state => state.ui.mainVisual.currentIndex);
    const mainState = useAppSelector(state => state.ui.mainVisual.MainImages);
    
    const currentText = mainState[index];
    
    return (
        <Positioner>
            <TextPositioner>
                <MainTextTitle>{currentText.title}</MainTextTitle>
                <MainTextSentence>{currentText.sentence}</MainTextSentence>
            </TextPositioner>
        </Positioner>
    )
}

export default MainTextWrapper;