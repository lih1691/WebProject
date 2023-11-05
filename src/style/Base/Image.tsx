import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

export const MainImg = styled(Image)<{$active: boolean}>`
  transition: .6s all;
  background-size: cover;
  opacity: ${(props) => props.$active ? 1 : 0};
`

export const SubBannerImg = styled(Image)`
  background-color: black;
`