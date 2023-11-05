import React, {useState} from 'react';
import styled from 'styled-components';
import { MainNewsLink } from "@Components/Page/MainPage/News/index";
import { HorizontalItem } from "@style/List/HorizontalList";

const Item = styled(HorizontalItem)`
  width: 25%;
  height: 435px;
`

function MainNewsItem({title, text, date}: {title: string, text: string, date: string}) {
    const [ isHovered, setIsHovered ] = useState(false);
    
    return (
        <Item
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <MainNewsLink title={title} text={text} date={date} isHovered={isHovered}></MainNewsLink>
        </Item>
    )
}

export default MainNewsItem;