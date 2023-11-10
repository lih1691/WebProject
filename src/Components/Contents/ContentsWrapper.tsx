import React, {ReactNode, useEffect} from 'react';
import { SearchBar} from "@Components/Contents";
import PageNumberList from "@Components/Contents/PageNumberList";
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper } from "@style/List/ContentsList";

function ContentsWrapper({children}: {children: ReactNode}) {
    return (
        <PageContents>
            <SearchBar />
            <ContentsListWrapper>
                {children}
                <PageNumberList index={5}></PageNumberList>
            </ContentsListWrapper>
        </PageContents>
    )
}

export default ContentsWrapper;