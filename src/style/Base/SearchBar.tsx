import styled from 'styled-components';
import oc from "open-color";
import { RelativePositioner } from "@style/Base/Positioner";

export const SearchBarPositioner = styled(RelativePositioner)`
  display: flex;
  justify-content: flex-end;
`

export const SearchBarContainer = styled.div`
  border: 1px solid ${oc.gray[4]};
`

export const SearchBarCategory = styled.select`
  width: 90px;
  height: 40px;
  margin-left: 10px;
  font-size: 14px;
  border: none;
  outline: none;
`
export const SearchInput = styled.input`
  outline: none;
  border: none;
`

export const SearchButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`