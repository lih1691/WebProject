import React  from 'react';
import Header from "@Components/Base/Header/Header";
import { NoneDotli } from '@lib/styleUtil';
import { SignUpLink, SignInLink } from '@Components/Base/Header';
import MenuBar from "@Components/Base/Menu";

function HeaderContainer() {
    return (
        <Header>
            <MenuBar>
                <h2>메뉴</h2>
            </MenuBar>
            <ul>
                <NoneDotli><SignUpLink/></NoneDotli>
                <NoneDotli><SignInLink/></NoneDotli>
            </ul>
        </Header>
    )
}

export default HeaderContainer;