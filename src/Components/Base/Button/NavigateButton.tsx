import React, {ReactNode} from 'react';
import {useNavigate} from "react-router-dom";
import {ColorButton} from "@style/Base/Button";
import oc from "open-color";

/*
* 클릭하면 주어진 경로로 이동하는 버튼
* 
* @params {string} to 이동할 경로
* @params {ReactNode} children 자식 요소
*/
function NavigateButton({to, children}: {to: string, children: ReactNode}) {
    const navigate = useNavigate()
    
    const handleClick = () => {
        navigate(to);
        window.scrollTo(0, 0);
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

export default NavigateButton;