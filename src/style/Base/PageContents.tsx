import styled from 'styled-components';
import oc from "open-color";

export const PageContents = styled.div`
  position: relative;
  width: 1300px;
  height: 100%;
  min-height: 700px;
  min-width: 1300px;
  margin: 0 auto;
  padding: 70px 0;
  z-index: 5;
`
export const NoContentsBackground = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 700px;
  background-color: ${oc.gray[2]};
`
export const NoContentsText = styled.p<{$left: string}>`
  position: relative;
  top: 50%;
  left: ${props => props.$left};
  width: auto;
  margin: 0 auto;
  font-family: 'Oswald';
`