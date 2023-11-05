import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
  position: relative;
  
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${oc.gray[8]};
  margin-bottom: 1rem;
`

interface AuthContentProps {
    title: string;
    children: ReactNode;
}

function AuthContent({title, children}: {title: string, children: ReactNode}) {
    return (
        <Positioner>
            <Title>{title}</Title>
            {children}
        </Positioner>
    )
}

export default AuthContent;