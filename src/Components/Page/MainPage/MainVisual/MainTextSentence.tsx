import React, {ReactNode} from 'react';
import styled from "styled-components";
import oc from "open-color";

const TextStyle = styled.p`
  padding-left: 5px;
  font-size: 16px;
  color: ${oc.gray[6]};
  letter-spacing: -.2px;
`

function MainTextSentence({children}: {children: ReactNode}) {
    return (
        <TextStyle>
            {children}
        </TextStyle>
    )
}

export default MainTextSentence;