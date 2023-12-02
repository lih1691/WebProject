import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const TextStyle = styled.p<{$active: boolean}>`
  opacity: ${(props) => props.$active ? 1 : 0};
  overflow: hidden;
  top: ${(props) => props.$active ? 0 : "30%"};
  display: block;
  margin: 25px 0 40px;
  font-size: 52px;
  line-height: 1;
  color: ${oc.gray[4]};
  letter-spacing: -2px;
  transform: translateY(${(props) => props.$active ? 0 : "30px"});
  transition: .6s all;
`

function MainTextTitle({active, children}: {active: boolean,children: ReactNode}) {
    return (
        <TextStyle $active={active}>
            {children}
        </TextStyle>
    )
}

export default MainTextTitle;