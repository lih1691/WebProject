import styled from 'styled-components';

interface BackgroundProps {
    width: string;
    height: string;
}

interface DepthBackgroundProps {
    $zIndex: number;
}

export const Background = styled.div<BackgroundProps>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export const MainVisualBackground = styled(Background)<BackgroundProps & DepthBackgroundProps>`
  top: 0;
  right: 55%;
  background-color: black;
  z-index: ${(props) => props.$zIndex}
`

export const SubBannerBackground = styled(Background)<BackgroundProps>`
  overflow: hidden;
`