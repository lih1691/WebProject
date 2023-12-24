import styled from 'styled-components';
import { LengthProps, DepthProps, ActiveProps } from '@Interfaces/Style/Base';

export const Background = styled.div<LengthProps>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

export const MainVisualBackground = styled(Background)<LengthProps & DepthProps & ActiveProps>`
  top: 0;
  right: ${(props) => props.$active ? "40%" : "50%"};
  background-color: black;
  z-index: ${(props) => props.$zIndex};
  transition: all .5s;
`

export const SubBannerBackground = styled(Background)<LengthProps>`
  overflow: hidden;
`