import styled from 'styled-components';
interface ulInterface {
    display: string;
    leftPosition: string;
    topPosition: string;
    marginLeft: string;
    zIndex: number;
}

interface liInterface {
    widthLength: string;
    active: boolean;
    Color: string;
    ClickedColor: string;
    
    after: {
        topPosition: string;
        leftPosition: string;
        activatedLength: string;
        deactivatedLength: string;
    }
}

export const PagerUl = styled.ul<ulInterface>`
  display: ${(props) => props.display};
  position: absolute;
  left: ${(props) => props.leftPosition};
  top: ${(props) => props.topPosition};
  margin-left: ${(props) => props.marginLeft};
  text-align: right;
  list-style: none;
  padding: 0;
  z-index: ${(props) => props.zIndex};
`

export const PagerLi = styled.li<liInterface>`
  position: relative;
  width: ${(props) => props.widthLength};
  color: ${(props) =>
          (props.active ? props.ClickedColor
                        : props.Color)};
  line-height: 40px;
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: ${(props) => props.after.topPosition};
    left: ${(props) => props.after.leftPosition};;
    width: ${(props) =>
            (props.active ? props.after.activatedLength
                            : props.after.deactivatedLength)};;
    height: 1px; /* 줄의 높이 */
    background-color: ${(props) => (props.active ? props.ClickedColor : props.Color)};; /* 줄의 색상 */
    transition: all .6s;
  }
  
  &:hover {
    cursor: pointer;
  }
`