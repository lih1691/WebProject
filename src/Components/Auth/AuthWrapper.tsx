import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '@lib/styleUtil';
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShadowBox = styled.div`
  width: 500px;
  ${shadow(2)}
`;

const LogoWrapper = styled.div`
  background: ${oc.teal[7]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Link)`
  color: white;
  font-family: 'Rajdhani';
  font-size: 2.4rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

const Contents = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

function AuthWrapper ({children}: {children: ReactNode}) {
    return (
        <Positioner>
            <ShadowBox>
                <LogoWrapper>
                    <Logo to={"/"}>Logo</Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowBox>
        </Positioner>
    );
}

export default AuthWrapper;