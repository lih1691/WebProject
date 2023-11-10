import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "@redux/hook";
import { fetchNewsContents, selectNewsContents } from "@redux/features/NewsContentSlice";
import { ContentsWrapper} from "@Components/Contents";
import { NewsContents } from "@Components/Page/NewsPage";
import { ContentsList } from "@style/List/ContentsList";

function NewsPageContents() {
    const dispatch = useAppDispatch();
    const contents = useAppSelector(selectNewsContents);
    
    useEffect(() => {
        dispatch(fetchNewsContents);
    }, [dispatch]);
    
    return (
        <ContentsWrapper>
            <ContentsList>
                {contents.map((content, index) => (
                    <NewsContents key={index} content={content} />
                ))}
            </ContentsList>
        </ContentsWrapper>
    )
}

export default NewsPageContents;
