import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Section } from "@style/Section";
import { Background, MainImgList, MainPagerWrapper, MainTextWrapper } from "@Components/Page/MainPage/MainVisual";

const Positioner = styled(Section)`
  width: 100%;
  
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

function MainVisualContainer() {
    return (
        <Positioner className={"article"}>
            <Background />
            <MainImgList />
            <MainTextWrapper />
            <MainPagerWrapper />
        </Positioner>
    )
}

export default MainVisualContainer;