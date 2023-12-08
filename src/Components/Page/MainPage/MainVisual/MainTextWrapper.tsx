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

const TextPositioner = styled.div<{$focus: boolean}>`
  position: absolute;
  top: 305px;
  left: ${(props) => props.$focus ? 0 : "-5%"};
  line-height: 1.8;
  transition: all .8s;
`

function MainTextWrapper({focus}: {focus: boolean}) {
    const currentIndex = useAppSelector(state => state.ui.mainPageState.mainVisual.currentIndex);
    const mainState = useAppSelector(state => state.ui.mainPageState.mainVisual.MainImages);
    
    return (
        <Positioner>
                {
                    mainState.map((state) => (
                        <TextPositioner key={state.id} $focus={focus}>
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