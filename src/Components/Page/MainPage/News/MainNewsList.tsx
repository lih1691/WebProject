import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const NewsList = styled.ul`
  overflow: hidden;
  position: relative;
  width: 100%;
  border: 1px solid ${oc.gray[5]};
  background-color: ${oc.gray[0]};
  margin: 0;
  padding: 0;
  list-style: none;
  float: right;
`

function MainNewsList() {
    return (
        <NewsList>
        
        </NewsList>
    )
}

export default MainNewsList;
