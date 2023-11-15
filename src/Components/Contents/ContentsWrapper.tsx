import React, {Dispatch, ReactNode, SetStateAction, useEffect} from 'react';
import { SearchBar} from "@Components/Contents";
import PageNumberList from "@Components/Contents/PageNumberList";
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper } from "@style/List/ContentsList";
import {current} from "immer";

function ContentsWrapper({total, currentPage, setCurrentPage, children}:
                             {
                                 total: number,
                                 currentPage: number,
                                 setCurrentPage: Dispatch<SetStateAction<number>>,
                                 children: ReactNode
                             })
{
    
    return (
        <PageContents>
            <SearchBar />
            <ContentsListWrapper>
                {children}
                <PageNumberList total={total} currentPage={currentPage} setCurrentPage={setCurrentPage}></PageNumberList>
            </ContentsListWrapper>
        </PageContents>
    )
}

export default ContentsWrapper;