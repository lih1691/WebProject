import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
  position: relative;
  width: 99%;
  height: 99%;
  top: 0;
  z-index: 0;
  
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

function MainWrapper({children}: {children: ReactNode}) {
    return (
        <Positioner>
            {children}
        </Positioner>
    )
}

export default MainWrapper;