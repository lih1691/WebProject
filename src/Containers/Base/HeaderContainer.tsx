import React  from 'react';
import Header from "@Components/Base/Header";
import { NoneDotUl, LeftLi } from '@lib/styleUtil';
import { SignUpLink, SignInLink } from '@Components/Base/Header';

function HeaderContainer() {
    return (
        <Header>
            <NoneDotUl>
                <LeftLi><SignUpLink/></LeftLi>
                <LeftLi><SignInLink/></LeftLi>
            </NoneDotUl>
        </Header>
    )
}

export default HeaderContainer;