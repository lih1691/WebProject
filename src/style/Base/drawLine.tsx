import styled from 'styled-components';
import oc from 'open-color';

interface VerticalLineInterface {
    $height: string;
}

interface CategoryLineInterface extends VerticalLineInterface {
    $focus: boolean;
}

const VerticalLine = styled.div<VerticalLineInterface>`
  position: absolute;
  opacity: 0.5;
  width: 1px;
  height: ${props => props.$height};
`

export const CategorySectionLine = styled(VerticalLine)<CategoryLineInterface>`
  left: 50%;
  margin-left: -320px;
  height: ${props => (props.$focus ? props.$height : 0)};
  background-color: ${oc.gray[5]};
  transition: height .4s .4s;
`
