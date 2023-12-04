import styled from 'styled-components';

interface BackgroundProps {
    width: string;
    height: string;
}

interface DepthBackgroundProps {
    $zIndex: number;
}

interface MainVisualProps {
    $active: boolean;
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export const MainVisualBackground = styled(Background)<BackgroundProps & DepthBackgroundProps & MainVisualProps>`
  top: 0;
  right: ${(props) => props.$active ? "40%" : "50%"};
  background-color: black;
  z-index: ${(props) => props.$zIndex};
  transition: all .5s;
`

export const SubBannerBackground = styled(Background)<BackgroundProps>`
  overflow: hidden;
`