import React from 'react';
import styled from 'styled-components';

const Icon = styled.img<{$isHovered: boolean}>`
  position: relative;
  bottom: ${(props) => props.$isHovered ? "40px" : 0};
  transition: all .4s;
`

function CategoryIcon({src, invertedSrc,alt, isHovered}: {src: string, invertedSrc: string,alt: string, isHovered: boolean}) {
    const currentIcon = () => {
        if (isHovered){
            return invertedSrc;
        } else {
            return src;
        }
    }
    
    return (
        <Icon src={currentIcon()} alt={alt} $isHovered={isHovered} />
    )
}

export default CategoryIcon;