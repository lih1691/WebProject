import React, { ReactNode } from 'react';
import { PageContents } from "@style/Base/PageContents";
import { ContentsListWrapper } from "@style/List/ContentsList";

function ContentsWrapper({children}: {children: ReactNode })
{
    return (
        <PageContents>
            <ContentsListWrapper>
                {children}
            </ContentsListWrapper>
        </PageContents>
    )
}

export default ContentsWrapper;