import React, {ReactNode} from 'react';
import {CategoryList} from "@Components/Page/MainPage/Category/index";

function CategoryWrapper({children}: {children: ReactNode}) {
    return (
        <CategoryList>
            {children}
        </CategoryList>
    )
}

export default CategoryWrapper;