import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Section } from "@style/Section";
import { Background, MainImgList, MainPagerWrapper, MainTextWrapper } from "@Components/Page/MainPage/MainVisual/index";

const Positioner = styled(Section)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  
  &::after {
     display: block;
     content: "";
     position: absolute;
     top: 0;
     bottom: 0;
     left: 0;
     width: 265px;
     z-index: -2;
     background-color: ${oc.gray[3]};
  }
`

function MainVisualWrapper() {
    return (
        <Positioner>
            <Background />
            <MainImgList />
            <MainTextWrapper />
            <MainPagerWrapper />
        </Positioner>
    )
}

export default MainVisualWrapper;