import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const MainImg = styled(Image)<{$active: boolean}>`
  position: absolute;
  top: 0;
  transition: .6s all;
  background-size: cover;
  opacity: ${(props) => props.$active ? 1 : 0};
`
export const SubBannerImg = styled(Image)`
  background-color: black;
`