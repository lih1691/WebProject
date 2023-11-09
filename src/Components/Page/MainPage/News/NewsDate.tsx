import styled from 'styled-components';
import oc from 'open-color';

export const NewsDate = styled.p<{$isHovered: boolean}>`
  position: relative;
  padding-top: 40px;
  border-top: 1px solid ${oc.gray[3]};
  font-weight: 700;
  font-size: 13px;
  color: ${(props) => props.$isHovered ? oc.gray[9] : oc.gray[3]};;
  transition: all .4s;
  
  &::before {
    position: absolute;
    content: "";
    top: -1px;
    left: 0;
    width: ${(props) => props.$isHovered ? '100%' : 0};
    height: 1px;
    background-color: ${oc.gray[9]};
    transition: width .2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  &::after {
    float: right;
    content: ">";
    font-weight: 700;
    color: ${(props) => props.$isHovered ? oc.gray[9] : oc.gray[3]};
  }
`