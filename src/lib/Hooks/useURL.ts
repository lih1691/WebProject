import { useEffect, useState } from "react";
import {useLocation, useNavigate} from 'react-router-dom';

export const useURL = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [url, setURL] = useState(location.pathname + location.search);
    const [ queryParams, setQueryParams] = useState(new URLSearchParams(location.search));
    
    useEffect(() => {
        setURL(location.pathname + '?' + queryParams.toString());
    }, [queryParams])
    
    useEffect(() => {
        navigate(url);
    }, [url, navigate]);
    
    const handleSetQueryParams = (key: string, value: string) => {
        const newParams = new URLSearchParams(queryParams);
        newParams.set(key, value);
        console.log(newParams.toString());
        setQueryParams(newParams);
    }
    
    return { handleSetQueryParams };
};