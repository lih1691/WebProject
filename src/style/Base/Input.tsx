import styled from "styled-components";
import oc from "open-color";
import { LengthProps } from "@Interfaces/Style/BaseStyleInterface";

export const Input = styled.input<LengthProps>`
  width: ${props => props.width};
  border: 1px solid ${oc.gray[3]};
  outline: none;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  
  ::placeholder {
    color: ${oc.gray[3]};
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  resize: none;
  border: 1px solid ${oc.gray[3]};
  font-size: 20px;
`