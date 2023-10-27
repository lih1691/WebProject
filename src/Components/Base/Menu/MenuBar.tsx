import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import { useAppSelector } from "@redux/hook";
import { NoneDotUl, LeftLi } from "@lib/styleUtil";

const MenuContents = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  gap: 30px;
`
const MenuUl = styled(NoneDotUl)`
  padding: 0;
`

const MenuLi = styled(LeftLi)`
  padding-left: 30px;
`

function MenuBar() {
    const index = useAppSelector((state) => (state.ui.currentIndex));
    
    return (
        <MenuContents>
            <MenuUl>
                <MenuLi><Menu to={"/News"} $pageIndex={index}>News</Menu></MenuLi>
                <MenuLi><Menu to={"/Review"} $pageIndex={index}>Review</Menu></MenuLi>
                <MenuLi><Menu to={"/Community"} $pageIndex={index}>Community</Menu></MenuLi>
            </MenuUl>
        </MenuContents>
    );
}

export default MenuBar;