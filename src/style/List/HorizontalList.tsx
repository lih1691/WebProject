import styled from 'styled-components';

export const HorizontalList = styled.ul`
  overflow: hidden;
  float: right;
  list-style: none;
`
export const HorizontalCompactList= styled(HorizontalList)`
  padding: 0;
  margin: 0;
`
export const HorizontalItem = styled.li`
  height: inherit;
  float: left;
`
