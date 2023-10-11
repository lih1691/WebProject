import React from 'react';
import { useAppSelector, useAppDispatch } from "@redux/hook";
import styled from 'styled-components';
import { MainImg } from '@Components/Page/MainPage';

const ImgList = styled.ul`
  display: block;
  position: absolute;
  left: 32%;
  bottom: 0;
  z-index: 1;
  width: 1190px;
  height: calc(100vh - 115px);
  transition: all .6s;
`

function MainImgList() {
    const images = useAppSelector((state) => state.ui.MainImages);
    const dispatch = useAppDispatch();
    
    return (
        <ImgList>
            {images.map((image) => (
                <MainImg key={image.id} src={image.imageUrl} />
            ))}
        </ImgList>
    )
}

export default MainImgList;