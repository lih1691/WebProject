import React, { ReactNode } from 'react';
import { SearchBar} from "@Components/Contents";
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper } from "@style/List/ContentsList";

function ContentsWrapper({children}: {children: ReactNode}) {
    return (
        <PageContents>
            <SearchBar />
            <ContentsListWrapper>
                {children}
            </ContentsListWrapper>
        </PageContents>
    )
}

export default ContentsWrapper;