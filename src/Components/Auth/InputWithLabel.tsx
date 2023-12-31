import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { Input } from '@style/Base/Input';
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



const InputWithLabel: React.FC<InputWithLabelProps> = ({label, ...rest}) => (
    <Wrapper>
        <Label>{label}</Label>
        <Input {... rest} />
    </Wrapper>
);

export default InputWithLabel;