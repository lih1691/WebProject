import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjectInterface } from "@Interfaces/Base/ObjectInterface";

export const useURL = (dependency?: ObjectInterface) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [ url, setURL ] = useState(location.pathname + location.search);
    
    
    useEffect(() => {
    
    }, [dependency?.value])
    
    
    useEffect(() => {
        navigate(url);
    }, [url, navigate]);
    
    return {  };
};