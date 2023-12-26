import React from 'react';
import {useNavigate} from "react-router-dom";
import { Button } from "@style/Base/Button";
import {ObjectInterface} from "@Interfaces/Base/ObjectInterface";

function PostButton({contentsType, handleSetQueryParams}:
                        {contentsType: string,
                            handleSetQueryParams: (params: ObjectInterface | ObjectInterface[]) => void
                        })
{
    const navigate = useNavigate();
    
    const handleClick = () => {
    
    }
    
    return (
        <Button onClick={handleClick}>
        
        </Button>
    )
}

