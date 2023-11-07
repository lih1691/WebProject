import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { useAppSelector } from "@redux/hook";
import { HorizontalList, HorizontalItem } from "@style/List/HorizontalList";

const MenuContents = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 30px;
`
const MenuUl = styled(HorizontalList)`
  padding: 0;
`

const MenuLi = styled(HorizontalItem)`
  padding-left: 30px;
`

function MenuBar() {
    const index = useAppSelector((state) => (state.ui.mainPageState.currentIndex));
    
    return (
        <MenuContents>
            <MenuUl>
                <MenuLi><Menu to={"/News"} $mainPageIndex={index}>News</Menu></MenuLi>
                <MenuLi><Menu to={"/Review"} $mainPageIndex={index}>Review</Menu></MenuLi>
                <MenuLi><Menu to={"/Community"} $mainPageIndex={index}>Community</Menu></MenuLi>
            </MenuUl>
        </MenuContents>
    );
}

export default MenuBar;