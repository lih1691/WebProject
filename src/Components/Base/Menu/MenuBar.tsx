import React, {Dispatch, SetStateAction} from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { useAppSelector } from "@redux/hook";
import { HorizontalList, HorizontalItem } from "@style/List/HorizontalList";
import oc from "open-color";

const MenuContents = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 30px;

  &:hover {
    a {
      color: ${oc.gray[9]};
    }
  }
`

const MenuUl = styled(HorizontalList)`
  padding: 0;
`

const MenuLi = styled(HorizontalItem)`
  padding-left: 30px;
`

function MenuBar({setIsHovered}: {setIsHovered: Dispatch<SetStateAction<boolean>>}) {
    const index = useAppSelector((state) => (state.ui.mainPageState.currentIndex));
    const pageName = useAppSelector((state) => (state.ui.currentPage));
    
    return (
        <MenuContents
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <MenuUl>
                <MenuLi><Menu to={"/Reviews"} $mainPageIndex={index} $currentPage={pageName}>News</Menu></MenuLi>
                <MenuLi><Menu to={"/Review"} $mainPageIndex={index} $currentPage={pageName}>Review</Menu></MenuLi>
                <MenuLi><Menu to={"/Community"} $mainPageIndex={index} $currentPage={pageName}>Community</Menu></MenuLi>
            </MenuUl>
        </MenuContents>
    );
}

export default MenuBar;