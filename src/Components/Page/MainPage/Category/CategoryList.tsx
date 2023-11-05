import React, {ReactNode} from 'react';
import styled from 'styled-components';
import { HorizontalCompactList } from "@style/List/HorizontalList";

const CategoryUl = styled(HorizontalCompactList)`
  position: relative;
  height: 50vh;
`

function CategoryList({children}: {children: ReactNode}) {
    return (
        <CategoryUl>
            {children}
        </CategoryUl>
    )
}

export default CategoryList;