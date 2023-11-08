import React from 'react';
import { SearchBar} from "@Components/Contents/SearchBar";
import { NewsContents } from "@Components/Page/NewsPage";
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper, ContentsList } from "@style/List/ContentsList";
import PageNumberList from "@Components/Contents/PageNumberList/PageNumberList";

function NewsPageContents() {
    return (
        <PageContents>
            <SearchBar />
            <ContentsListWrapper>
                <ContentsList>
                    <NewsContents />
                    <NewsContents />
                    <NewsContents />
                    <NewsContents />
                </ContentsList>
                <PageNumberList index={5}></PageNumberList>
            </ContentsListWrapper>
            
        </PageContents>
    )
}

export default NewsPageContents;