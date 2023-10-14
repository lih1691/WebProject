import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const TextStyle = styled.p`
  overflow: hidden;
  position: relative;
  margin: 25px 0 40px;
  font-size: 52px;
  line-height: 1;
  color: ${oc.gray[4]};
  letter-spacing: -2px;
`

function MainTextTitle({children}: {children: ReactNode}) {
    return (
        <TextStyle>
            {children}
        </TextStyle>
    )
}

export default MainTextTitle;