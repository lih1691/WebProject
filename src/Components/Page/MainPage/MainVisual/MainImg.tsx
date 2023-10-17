import styled from 'styled-components';

const MainImg = styled.img<{active: boolean}>`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  transition: .6s all;
  background-size: cover;
  opacity: ${(props) => props.active ? 1 : 0};
`

export default MainImg;