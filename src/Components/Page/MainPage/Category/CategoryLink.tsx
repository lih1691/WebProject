import React, {useState} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { HoverCheckLink } from "@style/Link/HoverCheckLink";
import { CategoryText, CategoryTitle, CategoryIcon} from "@Components/Page/MainPage/Category";

const Category = styled(HoverCheckLink)<{ $isHovered: boolean, background: string }>`
  position: relative;
  width: 480px;
  padding: 55% 0 0 60px;
  background-color: ${(props) => props.$isHovered ? oc.gray[9] : props.background};
  transition: all .4s;
`

function CategoryLink({title, text, src, invertedSrc ,alt, background}: {title:string, text: string, src: string, invertedSrc: string,alt: string, background: string}) {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <Category
            to={"/"}
            $isHovered={isHovered}
            background={background}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CategoryIcon src={src} invertedSrc={invertedSrc} alt={alt} isHovered={isHovered}/>
            <CategoryTitle $isHovered={isHovered}>{title}</CategoryTitle>
            <CategoryText $isHovered={isHovered}>{text}</CategoryText>
        </Category>
    )
}

export default CategoryLink;