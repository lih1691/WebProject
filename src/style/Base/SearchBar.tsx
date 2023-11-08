import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: right;
`
export const SearchBarCategory = styled.select`
  float: right;
  width: 90px;
  height: 40px;
  margin-left: 10px;
  border: none;
  font-size: 14px;
`
export const SearchInput = styled.input`
  float: right;
  height: 40px;
  border: none;
  outline: none;
`