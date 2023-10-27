import React from 'react';
import { useAppSelector } from "@redux/hook";
import styled from 'styled-components';
import { MainImg } from '@Components/Page/MainPage/MainVisual/index';

const ImgList = styled.ul`
  display: block;
  position: absolute;
  left: 50%;
  margin: 0 -230px;
  padding: 0;
  bottom: 0;
  z-index: 1;
  width: 1190px;
  height: calc(100vh - 125px);
  transition: all .6s;
`

function MainImgList() {
    const currentIndex = useAppSelector((state) => state.ui.mainVisual.currentIndex);
    const images = useAppSelector((state) => state.ui.mainVisual.MainImages);
    
    return (
        <ImgList>
            {images.map((image) => (
                <MainImg key={image.id} src={image.imageUrl} $active={(image.id === currentIndex)}/>
            ))}
        </ImgList>
    )
}

export default MainImgList;