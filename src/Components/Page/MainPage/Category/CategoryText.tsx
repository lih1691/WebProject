import styled from 'styled-components';
import oc from 'open-color';

const CategoryText = styled.div<{$isHovered: boolean}>`
  opacity: ${(props) => props.$isHovered ? 1 : 0};
  position: absolute;
  left: 60px;
  top: 70%;
  margin-top: ${(props) => props.$isHovered ? "40px" : 0};
  letter-spacing: -.2px;
  color: ${oc.gray[4]};
  transition: all .4s;
`

export default CategoryText;

