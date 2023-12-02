import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const MainImg = styled(Image)<{$active: boolean}>`
  position: absolute;
  top: 0;
  left: ${(props) => props.$active ? 0 : "5%"};
  background-size: cover;
  opacity: ${(props) => props.$active ? 1 : 0};
  transition: .6s all;
`
export const SubBannerImg = styled(Image)`
  background-color: black;
`