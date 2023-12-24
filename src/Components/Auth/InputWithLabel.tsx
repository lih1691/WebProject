import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { InputWithLabelProps } from "@Interfaces/Style/Pages/Auth";

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  color: ${oc.gray[6]};
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
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

const InputWithLabel: React.FC<InputWithLabelProps> = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {... rest} />
    </Wrapper>
);

export default InputWithLabel;