import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Section } from "@style/Pages/Section";
import { MainImgList, MainPagerWrapper, MainTextWrapper } from "@Components/Page/MainPage/MainVisual";
import { MainVisualBackground } from "@style/Base/Background";

const MainVisualSection = styled(Section)`
  width: 100%;
  
  &::after {
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

const MainVisualBackgroundProps = {
    width: "1200px",
    height: "600px",
    $zIndex: -1
}

function MainVisualContainer() {
    return (
        <MainVisualSection className={"article"}>
            <MainVisualBackground {...MainVisualBackgroundProps}/>
            <MainImgList />
            <MainTextWrapper />
            <MainPagerWrapper />
        </MainVisualSection>
    )
}

export default MainVisualContainer;