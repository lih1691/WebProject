import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import SubNavList from "@Components/Base/SubNav/SubNavList";

const Positioner = styled.div`
  position: relative;
  background-color: ${oc.gray[0]};
  color: ${oc.gray[0]};
  width: 1300px;
  height: 70px;
  margin: -70px auto 0;
  z-index: 5;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${oc.gray[3]};
  }
`

function SubNav() {
    return (
        <Positioner>
            <SubNavList />
        </Positioner>
    )
}

export default SubNav;