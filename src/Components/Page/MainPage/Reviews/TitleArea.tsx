import React from 'react';
import styled from 'styled-components';
import { RelativeSectionTitle } from '@style/Pages/SectionTitle';
import {CustomFontLink} from "@style/Link/NoneDecorationLink";
import oc from "open-color";

const Title = styled.p`
  margin-top: 20px;
  font-family: "Oswald";
  font-size: 42px;
  font-weight: 700;
  line-height: 40px;
`

const ReviewTitleArea = styled(RelativeSectionTitle)`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

const MoreView = styled(CustomFontLink)`
  padding-top: 80px;
  letter-spacing: .2px;
  
  &::before {
    content:"";
    display: inline-block;
    position: absolute;
    bottom: -15px;
    width: 50px;
    height: 50px;
    z-index: -2;
    background-color: ${oc.gray[5]};
  }
  
  &::after {
    content:"";
    display: inline-block;
    position: absolute;
    bottom: -15px;
    width: 80px;
    height: 50px;
    z-index: -2;
    background-color: ${oc.gray[5]};
  }
`

function TitleArea({title, currentSectionIndex}: {title: string, currentSectionIndex: number}) {
    return (
        <ReviewTitleArea
            $marginTop={"200px"}
            $marginBottom={"50px"}
            $focus={currentSectionIndex === 2}
            $fadeInTransition={"all .5s .3s"}
            $fadeOutTransition={"all .5s"}
        >
            <Title>{title}</Title>
            <MoreView to={"/"} $font={"Oswald"} $fontsize={"15px"}>
                More View
            </MoreView>
        </ReviewTitleArea>
    )
}

export default TitleArea;