import styled from 'styled-components';
import {ColorProps, LengthProps} from "@Interfaces/Style/BaseStyleInterface";
import {CustomFontProps} from "@Interfaces/Style/FontStyleInterface";

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`
export const ColorButton = styled(Button)<ColorProps & LengthProps & CustomFontProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.color};
  border-radius: 0.1rem;
`

export const PageButton = styled(Button)`
  margin: 20px 20px;
`

