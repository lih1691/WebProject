import React from 'react';
import { useAppSelector } from "@redux/hook";
import styled from 'styled-components';
import { MainImg } from '@style/Base/Image';

const ImgList = styled.ul<{$active: boolean}>`
  position: absolute;
  opacity: ${(props) => props.$active ? 1 : 0};
  left: ${(props) => props.$active ? "50%" : "51%"};
  margin: 0 -230px;
  padding: 0;
  bottom: 0;
  z-index: 1;
  width: 1190px;
  height: calc(100vh - 125px);
  transition: all .6s;
  
`

function MainImgList({currentSectionIndex}: {currentSectionIndex: number}) {
    const currentVisualIndex = useAppSelector((state) => state.ui.mainPageState.mainVisual.currentIndex);
    const images = useAppSelector((state) => state.ui.mainPageState.mainVisual.MainImages);
    
    return (
        <ImgList $active={currentSectionIndex === 0}>
            {images.map((image) => (
                <MainImg key={image.id} src={image.imageUrl} $active={(image.id === currentVisualIndex)}/>
            ))}
        </ImgList>
    )
}

export default MainImgList;