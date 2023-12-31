import React, {ReactNode} from 'react';
import {useAppSelector} from "@redux/hook";
import {selectCurrentCategory, selectCurrentContentsType} from "@redux/features/UISlice";
import { NavigateButton} from "@Components/Base/Button";

function PostButton({to, children}: {to: string, children: ReactNode})
{
    const category = useAppSelector(selectCurrentCategory);
    const contentsType = useAppSelector(selectCurrentContentsType);
    const destination = `/${to}/${contentsType}/${category}`;
    
    return (
        <NavigateButton
            to={destination}
        >
            {children}
        </NavigateButton>
    )
}

export default PostButton;