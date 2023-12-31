import React from 'react';
import styled from "styled-components";
import {PostButton} from "@Components/Contents/Post";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

function PostButtonWrapper() {
    return (
        <Wrapper>
            <PostButton to={"contents"}>
                전체 글
            </PostButton>
            <PostButton to={"contents/post"}>
                글쓰기
            </PostButton>
        </Wrapper>
    )
}

export default PostButtonWrapper;