import React  from 'react';
import styled from 'styled-components';
import Header from "@Components/Base/Header";
import { NoneDotUl, LeftLi } from '@lib/styleUtil';
import { SignUpLink, SignInLink } from '@Components/Base/Header';
import MenuBar from "@Components/Base/Menu";
// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

function HeaderContainer() {
    return (
        <Header>
            <MenuBar/>
            <Spacer/>
            <NoneDotUl>
                <LeftLi><SignUpLink/></LeftLi>
                <LeftLi><SignInLink/></LeftLi>
            </NoneDotUl>
        </Header>
    )
}

export default HeaderContainer;