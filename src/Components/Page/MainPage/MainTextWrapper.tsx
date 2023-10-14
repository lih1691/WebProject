import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from "@redux/hook";
import MainTextTitle from './MainTextTitle';
import MainTextSentence from './MainTextSentence';

const Positioner = styled.div`
  opacity: 1;
  position: absolute;
  top: 305px;
  line-height: 1.8;
  transition: all .6s;
`

function MainTextWrapper() {
    const index = useAppSelector(state => state.ui.currentIndex);
    const mainState = useAppSelector(state => state.ui.MainImages);
    
    const currentText = mainState[index];
    
    return (
        <Positioner>
            <MainTextTitle>{currentText.title}</MainTextTitle>
            <MainTextSentence>{currentText.sentence}</MainTextSentence>
        </Positioner>
    )
}

export default MainTextWrapper;