import React from 'react';
import { Section } from '@style/Pages/Section';
import { TitleArea } from "@Components/Page/MainPage/News";
import MainNewsList from "@Components/Page/MainPage/News/MainNewsList";

function NewsContainer() {
    return (
        <Section className={"article"}>
            <TitleArea />
            <MainNewsList></MainNewsList>
        </Section>
    )
}

export default NewsContainer;