import React from 'react';
import { Section } from '@style/Section';
import { TitleArea } from "@Components/Page/MainPage/News";

function NewsContainer() {
    return (
        <Section className={"article"}>
            <TitleArea />
        </Section>
    )
}

export default NewsContainer;