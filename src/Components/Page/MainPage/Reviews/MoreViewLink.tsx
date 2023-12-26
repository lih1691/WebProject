import React from 'react';
import styled from 'styled-components';
import { CustomFontProps } from "@Interfaces/Style/FontStyleInterface";
import { CustomFontLink } from "@style/Link/NoneDecorationLink";
import { FocusFadeProps } from "@Interfaces/Style/FadeStyleInterface";
import { focusOpacityStyle, focusTransitionStyle } from "@style/CSS/FadeCSS";
import { durationDownUp } from "@style/CSS/DownUpCSS";
import { DownUpProps } from "@Interfaces/Style/Animation/DownUpProps";

export const MoreView = styled(CustomFontLink)<CustomFontProps & FocusFadeProps & DownUpProps>`
  ${focusOpacityStyle};
  margin-top: 60px;
  letter-spacing: .2px;
  ${focusTransitionStyle};
  
  :before {
    content:"";
    display: inline-block;
    position: absolute;
    right: 40px;
    bottom: -2px;
    width: 50px;
    height: 50px;
    border-radius: 23px;
    z-index: -2;
    background: linear-gradient(280deg, rgba(255, 255, 255, 0) 10%, rgba(128, 128, 128, 0.1) 90%);
    ${durationDownUp};
    transition: all .4s .4s;
  }
  
  :after {
    content:"";
    opacity: 0;
    display: inline-block;
    position: absolute;
    right: -30px;
    bottom: -2px;
    width: 80px;
    height: 50px;
    border-radius: 23px;
    z-index: -2;
    background: linear-gradient(280deg, rgba(255, 255, 255, 0) 10%, rgba(128, 128, 128, 0.1) 90%);
    transition: all .4s .4s;
  }
  
  :hover {
    &::before {
      opacity: 0;
      right: -50px;
      transition: all .3s;
    }
    
    &::after {
      right: 20px;
      opacity: 1;
      transition: all .3s;
    }
  }
`

function MoreViewLink({focus}: {focus: boolean}) {
    
    return (
        <MoreView to={"/"}
                  $font={"Oswald"}
                  $fontSize={"15px"}
                  $focus={focus}
                  $fadeInTransition={"all .5s .3s"}
                  $fadeOutTransition={"all .5s"}
                  $translateYValue={"10%"}
                  $duration={"2s"}
        >
            <p>More View</p>
        </MoreView>
    )
}

export default MoreViewLink;