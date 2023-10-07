import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NonDecorationLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  transition: .2s all;
`

export default NonDecorationLink;