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
    $active: boolean;
    color: string;
    $clickedColor: string;
    
    $after: {
        top: string;
        left: string;
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
          (props.$active ? props.$clickedColor : props.color)};
  line-height: 40px;
  font-weight: 700;
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: ${(props) => props.$after.top};
    left: ${(props) => props.$after.left};;
    width: ${(props) =>
            (props.$active ? props.$after.activatedLength
                            : props.$after.deactivatedLength)};;
    height: 1px; /* 줄의 높이 */
    background-color: ${(props) => (props.$active ? props.$clickedColor : props.color)};; /* 줄의 색상 */
    transition: all .6s;
  }
  
  &:hover {
    cursor: pointer;
  }
`