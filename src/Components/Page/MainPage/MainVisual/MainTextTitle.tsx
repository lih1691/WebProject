import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { FocusProps } from "@Interfaces/Style/ComponentStateInterface";

const TextStyle = styled.p<FocusProps>`
  opacity: ${(props) => props.$focus ? 1 : 0};
  overflow: hidden;
  top: ${(props) => props.$focus ? 0 : "30%"};
  display: block;
  margin: 25px 0 40px;
  font-size: 52px;
  line-height: 1;
  color: ${oc.gray[4]};
  letter-spacing: -2px;
  transform: translateY(${(props) => props.$focus ? 0 : "30px"});
  transition: .6s all;
`

function MainTextTitle({focus, children}: {focus: boolean,children: ReactNode}) {
    return (
        <TextStyle $focus={focus}>
            {children}
        </TextStyle>
    )
}

export default MainTextTitle;