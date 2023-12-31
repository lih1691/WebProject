import React, {useState} from 'react';
import {PageContents} from "@style/Base/PageContents";
import {Input, TextArea} from "@style/Base/Input";
import {useParams} from "react-router-dom";
import {StarRatingWrapper} from "@Components/Contents/Post";
import styled from "styled-components";
import {useChange, useInputChange} from "@lib/Hooks/useChange";

const PostForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  
  input {
    margin-bottom: 0.5rem;
  }
`

function PostPageContainer() {
    const title = useInputChange('');
    const productName = useInputChange('');
    const rating= useChange(0);
    const { contentsType, category } = useParams();
    
    return (
        <PageContents>
            <PostForm>
                <Input 
                    name={"productName"}
                    placeholder={"상품명"}
                    value={productName.value}
                    width={"50%"}
                    onChange={productName.onChange}
                />
                <StarRatingWrapper />
                <Input
                    name={"title"}
                    placeholder={"제목"}
                    value={title.value}
                    width={"100%"}
                    onChange={title.onChange}
                />
                <TextArea cols={185} rows={50}/>
            </PostForm>
        </PageContents>
    )
}

export default PostPageContainer;