import styled from 'styled-components';
import {ColorProps, LengthProps} from "@Interfaces/Style/BaseStyleInterface";
import {CustomFontProps} from "@Interfaces/Style/FontStyleInterface";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`

/*
* @params { string, string } width, height => 너비, 높이
* @params { string } color 버튼 색
* @params { string, string, string } $font, $fontSize, $fontWeight
*/
export const ColorButton = styled(Button)<ColorProps & LengthProps & CustomFontProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border-radius: 0.1rem;
`

export const PageButton = styled(Button)`
  margin: 20px 20px;
`

