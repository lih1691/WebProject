import {useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import {ObjectInterface} from "@Interfaces/Base/ObjectInterface";



export const useURL = (dependency?: ObjectInterface | ObjectInterface[]) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [url, setURL] = useState(location.pathname + location.search);
    const [ queryParams, setQueryParams] = useState(new URLSearchParams(location.search));
    
    const handleResetQueryParams = () => {
        setURL(location.pathname);
    }
    
    const handleSetQueryParams = (params: ObjectInterface | ObjectInterface[]) => {
        const newParamsArray = Array.isArray(params) ? params : [params];
        const newParams = new URLSearchParams(queryParams);
        
        newParamsArray.forEach(({key, value}) => {
            newParams.set(key, value);
        });
        
        setQueryParams(newParams);
    }
    
    useCallback(() => {
        if (dependency !== undefined) {
            handleSetQueryParams(dependency);
        }
    }, [dependency])
    
    useEffect(() => {
        setURL(location.pathname + '?' + queryParams.toString());
    }, [queryParams])
    
    useEffect(() => {
        navigate(url);
    }, [url, navigate]);
    
    return { queryParams, handleSetQueryParams };
};