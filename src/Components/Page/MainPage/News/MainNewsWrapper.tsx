import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
  padding: 60px 0 40px;
  letter-spacing: -.2px;
`

function MainNewsWrapper({children}: {children: React.ReactNode}) {
    return (
        <Positioner>
            {children}
        </Positioner>
    )
}

export default MainNewsWrapper;