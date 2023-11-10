import styled from 'styled-components';
import oc from "open-color";

export const DescList = styled.dl`
  overflow: hidden;
  position: relative;
  padding: 3px 0;
  margin: 0;
`

export const DescTerm = styled.dt`
  float: left;
  width: 27%;
  margin: 0;
`

export const Desc = styled.dd`
  float: left;
  width: 73%;
  padding-left: 3px;
  margin: 0;
`

export const NewsDesc = styled.p`
  background-color: ${oc.gray[4]};
`