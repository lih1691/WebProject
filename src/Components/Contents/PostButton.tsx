import React, {ReactNode} from 'react';
import oc from "open-color";
import {useNavigate} from "react-router-dom";
import { ColorButton } from "@style/Base/Button";
import {useAppSelector} from "@redux/hook";
import {selectCurrentCategory, selectCurrentContentsType} from "@redux/features/UISlice";

function PostButton({to, children}: {to: string, children: ReactNode})
{
    const navigate = useNavigate();
    const category = useAppSelector(selectCurrentCategory);
    const contentsType = useAppSelector(selectCurrentContentsType);
    
    const handleClick = () => {
        const destination = to && to.trim() !== "" ? `/contents/${contentsType}/${to}` : `/contents/${contentsType}/${category}`;
        navigate(destination);
    }
    
    return (
        <ColorButton
            width={"4rem"}
            height={"2.5rem"}
            color={oc.blue[6]}
            onClick={handleClick}
        >
            {children}
        </ColorButton>
    )
}

export default PostButton;