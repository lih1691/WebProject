import React from 'react';
import { newsContent } from "@redux/features/NewsContentSlice";
import { ContentsWrapper } from "@Components/Contents";
import {NewsContents} from "@Components/Page/NewsPage";
import {ContentsList} from "@style/List/ContentsList";

function NewsPageContainer({contents}: {contents: newsContent[]}) {
    return (
        <ContentsWrapper>
            <ContentsList>
                {contents.map((content, index) => (
                    <NewsContents key={index } content={content} />
                ))}
            </ContentsList>
        </ContentsWrapper>
    )
}

export default NewsPageContainer;