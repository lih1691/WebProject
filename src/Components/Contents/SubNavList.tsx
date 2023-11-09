import React from 'react';
import styled from 'styled-components';
import { HorizontalItem, HorizontalList } from "@style/List/HorizontalList";
import { SubNavLink } from "@Components/Contents/SubNavLink";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 1100px;
  margin: 0 auto;
  height: 70px;
  display: flex;
  align-items: center; /
  justify-content: center;
`
const NavList = styled(HorizontalList)`
  overflow: hidden;
  margin: 0 auto;
  height: inherit;
`

//TODO: children을 받아서 NavList에 삽입

function SubNavList() {
    return(
        <Wrapper>
            <NavList>
                <HorizontalItem>
                    <SubNavLink to={"/"}>애플</SubNavLink>
                </HorizontalItem>
                <HorizontalItem>
                    <SubNavLink to={"/"}>삼성</SubNavLink>
                </HorizontalItem>
                <HorizontalItem>
                    <SubNavLink to={"/"}>샤오미</SubNavLink>
                </HorizontalItem>
            </NavList>
        </Wrapper>
    )
}

export default SubNavList;