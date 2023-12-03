import styled from 'styled-components';
interface ulInterface {
    display: string;
    $leftPosition: string;
    $topPosition: string;
    $marginLeft: string;
    $zIndex: number;
}

interface liInterface {
    width: string;
    $focus: boolean;
    $active: boolean;
    color: string;
    $clickedColor: string;
    
    $after: {
        top: string;
        left: string;
        height: string;
        activatedLength: string;
        deactivatedLength: string;
    }
}

export const PagerUl = styled.ul<ulInterface>`
  display: ${(props) => props.display};
  position: absolute;
  left: ${(props) => props.$leftPosition};
  top: ${(props) => props.$topPosition};
  margin-left: ${(props) => props.$marginLeft};
  text-align: right;
  list-style: none;
  padding: 0;
  z-index: ${(props) => props.$zIndex};
`

export const PagerLi = styled.li<liInterface>`
  position: relative;
  width: ${(props) => props.width};
  color: ${(props) =>
          (props.$focus ? props.$clickedColor : props.color)};
  line-height: 40px;
  font-weight: 700;
  
  &::after {
    content: "";
    position: absolute;
    top: ${(props) => props.$after.top};
    left: ${(props) => props.$after.left};;
    width: ${(props) =>
            (props.$focus ? props.$after.activatedLength
                            : props.$after.deactivatedLength)};;
    height: ${(props) => props.$after.height};
    background-color: ${(props) => (props.$focus ? props.$clickedColor : props.color)};;
    transition: all .6s;
  }
  
  &:hover {
    cursor: pointer;
  }
`