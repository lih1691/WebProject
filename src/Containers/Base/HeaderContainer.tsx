import React, {useState} from 'react';
import { useAppSelector } from "@redux/hook";
import Header from "@Components/Base/Header";
import { SignUpLink, SignInLink } from '@Components/Base/Header';
import MenuBar from "@Components/Base/Menu";
import { HorizontalList, HorizontalItem } from "@style/List/HorizontalList";
import { Spacer } from "@style/Base/Spacer";

function HeaderContainer() {
    const currentPageName = useAppSelector((state) => state.ui.currentPage);
    const [ isHovered, setIsHovered ] = useState(false);
    
    return (
        <Header currentPageName={currentPageName} isHovered={isHovered}>
            <MenuBar setIsHovered={setIsHovered}/>
            <Spacer/>
            <HorizontalList>
                <HorizontalItem><SignUpLink currentPageName={currentPageName}/></HorizontalItem>
                <HorizontalItem><SignInLink currentPageName={currentPageName}/></HorizontalItem>
            </HorizontalList>
        </Header>
    )
}

export default HeaderContainer;