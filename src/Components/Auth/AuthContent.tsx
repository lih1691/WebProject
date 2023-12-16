import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { RelativePositioner } from "@style/Base/Positioner";


const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${oc.gray[8]};
  margin-bottom: 1rem;
`

function AuthContent({title, children}: {title: string, children: ReactNode}) {
    return (
        <RelativePositioner>
            <Title>{title}</Title>
            {children}
        </RelativePositioner>
    )
}

export default AuthContent;