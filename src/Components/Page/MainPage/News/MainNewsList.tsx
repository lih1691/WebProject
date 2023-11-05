import React, {ReactNode} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { HorizontalCompactList } from "@style/List/HorizontalList";
import { MainNewsItem } from "@Components/Page/MainPage/News/index";


const NewsList = styled(HorizontalCompactList)`
  width: 100%;
  border: 1px solid ${oc.gray[5]};
  background-color: ${oc.gray[0]};
`

function MainNewsList() {
    return (
        <NewsList>
            <MainNewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainNewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainNewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
            <MainNewsItem title={"11111111"} text={"2222222222"} date={"2023.10"}/>
        </NewsList>
    )
}

export default MainNewsList;
