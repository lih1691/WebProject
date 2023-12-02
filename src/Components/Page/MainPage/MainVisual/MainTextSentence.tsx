import React, {ReactNode} from 'react';
import styled from "styled-components";
import oc from "open-color";

const TextStyle = styled.p<{$active: boolean}>`
  position: relative;
  opacity: ${(props) => props.$active ? 1 : 0};
  top: 40%;
  padding-left: 5px;
  font-size: 16px;
  color: ${oc.gray[6]};
  letter-spacing: -.2px;
  font-weight: 700;
  transition: all .4s;
`

function MainTextSentence({active, children}: {active: boolean, children: ReactNode}) {
    return (
        <TextStyle $active={active}>
            {children}
        </TextStyle>
    )
}

export default MainTextSentence;