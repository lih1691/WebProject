import { Link } from 'react-router-dom';
import styled from 'styled-components';
import oc from 'open-color';

const Sign = styled(Link)`
  font-weight: 600;
  color: ${oc.gray[8]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  transition: .2s all;
  
  &:hover {
    color: ${oc.gray[5]};
  }
`

export default Sign;