import React, {useState} from 'react';
import styled from 'styled-components';
import { MainReviewsLink } from "@Components/Page/MainPage/Reviews/index";
import { HorizontalItem } from "@style/List/HorizontalList";

const Item = styled(HorizontalItem)`
  width: 25%;
  height: 435px;
`

function MainReviewsItem({title, text, date}: {title: string, text: string, date: string}) {
    const [ isHovered, setIsHovered ] = useState(false);
    
    return (
        <Item
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <MainReviewsLink title={title} text={text} date={date} isHovered={isHovered} />
        </Item>
    )
}

export default MainReviewsItem;