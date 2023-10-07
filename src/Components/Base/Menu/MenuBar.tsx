import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
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
    return (
        <MenuContents>
            <MenuUl>
                <MenuLi><Menu to={"/News"}>News</Menu></MenuLi>
                <MenuLi><Menu to={"/Review"}>Review</Menu></MenuLi>
                <MenuLi><Menu to={"/Community"}>Community</Menu></MenuLi>
            </MenuUl>
        </MenuContents>
    );
}

export default MenuBar;