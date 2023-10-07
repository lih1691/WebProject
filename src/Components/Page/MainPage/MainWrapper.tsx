import React, {ReactNode} from 'react';
import styled from 'styled-components';
import Background from './Background';

const Positioner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: -1;
`


function MainWrapper({children}: {children: ReactNode}) {
    return (
        <Positioner>
            <Background />
        </Positioner>
    )
}

export default MainWrapper;