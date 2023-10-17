import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';
import { CategoryText, CategoryTitle} from "@Components/Page/MainPage/Category";

const Category = styled(Link)<{isHovered: boolean, background: string}>`
  display: block;
  width: 465px;
  height: 100%;
  padding: 55% 0 0 60px;
  background-color: ${(props) => props.isHovered ? oc.gray[9] : props.background};
  transition: all .4s;
  text-decoration: none;
  cursor: pointer;
  
`

function CategoryLink({title, text, background}: {title:string, text: string, background: string}) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Category
            to={"/"}
            isHovered={isHovered}
            background={background}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CategoryTitle isHovered={isHovered}>{title}</CategoryTitle>
            <CategoryText isHovered={isHovered}>{text}</CategoryText>
        </Category>
    )
}

export default CategoryLink;