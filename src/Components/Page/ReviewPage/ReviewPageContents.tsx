import React from 'react';
import { SearchBar} from "@Components/Contents";
import { ReviewContents} from "@Components/Page/ReviewPage";
import PageNumberList from "@Components/Contents/PageNumberList";
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper, ContentsList } from "@style/List/ContentsList";

function ReviewPageContents() {
    return (
        <PageContents>
            <SearchBar />
            <ContentsListWrapper>
                <ContentsList>
                    <ReviewContents/>
                    <ReviewContents/>
                    <ReviewContents/>
                    <ReviewContents/>
                </ContentsList>
                <PageNumberList index={5}></PageNumberList>
            </ContentsListWrapper>
        </PageContents>
    )
}

export default ReviewPageContents;