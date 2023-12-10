import React, { ReactNode } from 'react';
import { SearchBar} from "@Components/Contents";
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper } from "@style/List/ContentsList";
import { SearchInterface } from "@Interfaces/Form/SeachInterface";

function ContentsWrapper({onSearch, children}: {onSearch: (searchInterface: SearchInterface) => void, children: ReactNode })
{
    return (
        <PageContents>
            <SearchBar onSearch={onSearch}/>
            <ContentsListWrapper>
                {children}
            </ContentsListWrapper>
        </PageContents>
    )
}

export default ContentsWrapper;