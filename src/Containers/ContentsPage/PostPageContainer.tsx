import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PageContents} from "@style/Base/PageContents";
import {Input, TextArea} from "@style/Base/Input";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import { useInputChange} from "@lib/Hooks/useChange";
import { StarRatingWrapper } from "@Components/Contents/Post";
import { ColorButton } from "@style/Base/Button";

const PostForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  
  input {
    margin-bottom: 0.5rem;
  }
  
  textarea {
    margin-bottom: 0.5rem;
  }
`

function PostPageContainer() {
    const navigate = useNavigate();
    const title = useInputChange('');
    const productName = useInputChange('');
    const rating= useInputChange(0);
    const [ files, setFiles ] = useState<File[]>([]);
    const { contentsType, category } = useParams<{contentsType: string, category: string}>();
    
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const appendedFiles = event.target.files;
        if (appendedFiles) {
            setFiles(Array.from(appendedFiles));
        }
    }
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const formData = new FormData();
        
        if (contentsType) {
            formData.append('contentsType', contentsType);
        }
        
        if (category) {
            formData.append('category', category);
        }
        
        formData.append('title', title.value);
        formData.append('productName', productName.value);
        formData.append('rating', rating.value.toString());
        
        files.forEach((file, index) => {
            formData.append(`file${index + 1}`, file);
        });
        
        try {
            const response = await fetch(`/api/contents/post`, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                navigate(`/contents/post/${contentsType}/${category}`);
            } else {
                console.error('업로드 실패했습니다.');
                navigate(`/contents/post/${contentsType}/${category}`);
            }
        } catch (error) {
            console.error('업로드 중 에러가 발생했습니다.', error);
        }
    }
    
    return (
        <PageContents>
            <PostForm onSubmit={handleSubmit}>
                <Input 
                    name={"productName"}
                    placeholder={"상품명"}
                    value={productName.value}
                    width={"50%"}
                    onChange={productName.onChange}
                />
                <StarRatingWrapper determinedRating={rating}/>
                <Input
                    name={"title"}
                    placeholder={"제목"}
                    value={title.value}
                    width={"100%"}
                    onChange={title.onChange}
                />
                <TextArea cols={185} rows={50}/>
                <Input
                    type={"file"}
                    width={"100%"}
                    onChange={handleFileChange}
                    multiple
                />
                <ColorButton
                    type={"submit"}
                >
                    작성
                </ColorButton>
            </PostForm>
        </PageContents>
    )
}

export default PostPageContainer;