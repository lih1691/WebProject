import React, {ReactNode} from 'react';
import styled from 'styled-components';

const CategoryUl = styled.ul`
  overflow: hidden;
  float: right;
  position: relative;
  height: 50vh;
  list-style: none;
  margin: 0;
  padding: 0;
`
function CategoryList({children}: {children: ReactNode}) {
    return (
        <CategoryUl>
            {children}
        </CategoryUl>
    )
}

export default CategoryList;