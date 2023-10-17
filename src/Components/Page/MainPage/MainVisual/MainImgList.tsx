import React from 'react';
import { useAppSelector } from "@redux/hook";
import styled from 'styled-components';
import { MainImg } from '@Components/Page/MainPage/MainVisual/index';

const ImgList = styled.ul`
  display: block;
  position: absolute;
  left: 50%;
  margin-left: -230px;
  bottom: 0;
  z-index: 1;
  width: 1190px;
  height: calc(100vh - 115px);
  transition: all .6s;
`

function MainImgList() {
    const currentIndex = useAppSelector((state) => state.ui.currentIndex);
    const images = useAppSelector((state) => state.ui.MainImages);

    return (
        <ImgList>
            {images.map((image) => (
                <MainImg key={image.id} src={image.imageUrl} active={image.id === currentIndex}/>
            ))}
        </ImgList>
    )
}

export default MainImgList;