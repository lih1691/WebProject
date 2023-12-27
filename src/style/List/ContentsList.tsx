import styled from 'styled-components';
import oc from "open-color";

export const ContentsListWrapper =  styled.div`
  width: 100%;
  margin: 0;
`
export const ContentsWrapper = styled.div<{$padding: string}>`
  overflow: hidden;
  display: flex;
  position: relative;
  padding: ${(props) => props.$padding};
  height: 100%;
  border: 1px solid ${oc.gray[5]};
`
export const ContentsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  padding: 0;
  list-style: none;
`
export const ContentsListItem = styled.li<{width: string}>`
  position: relative;
  float: left;
  width: ${(props) => props.width};
  padding: 0 10px;
  margin-bottom: 20px;
`

