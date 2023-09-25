import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px; 
  background-color: black;
  gap: 30px;
`

function MenuBar() {
    return (
        <MenuContents>
            <Link to={"/News"}>News</Link>
            <Link to={"/Review"}>Review</Link>
        </MenuContents>
    );
}

export default MenuBar;