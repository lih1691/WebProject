import React  from 'react';
import Header from "@Components/Base/Header";
import { SignUpLink, SignInLink } from '@Components/Base/Header';
import MenuBar from "@Components/Base/Menu";
import { HorizontalList, HorizontalItem } from "@style/List/HorizontalList";
import { Spacer } from "@style/Base/Spacer";


function HeaderContainer() {
    return (
        <Header>
            <MenuBar/>
            <Spacer/>
            <HorizontalList>
                <HorizontalItem><SignUpLink/></HorizontalItem>
                <HorizontalItem><SignInLink/></HorizontalItem>
            </HorizontalList>
        </Header>
    )
}

export default HeaderContainer;