import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjectInterface } from "@Interfaces/Base/ObjectInterface";

export const useURL = (dependency?: ObjectInterface) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [url, setURL] = useState(location.pathname + location.search);
    const [ queryParams, setQueryParams] = useState(new URLSearchParams(location.search));
    
    const handleSetQueryParams = (params: ObjectInterface | ObjectInterface[]) => {
        const newParamsArray = Array.isArray(params) ? params : [params];
        const newParams = new URLSearchParams(queryParams);
        
        newParamsArray.forEach(({key, value}) => {
            newParams.set(key, value);
        });
        
        setQueryParams(newParams);
    }
    
    useEffect(() => {
        if (dependency !== undefined) {
            setQueryParams(new URLSearchParams([
                [dependency.key, dependency.value]
            ]));
        }
    }, [dependency?.value])
    
    useEffect(() => {
        setURL(location.pathname + '?' + queryParams.toString());
    }, [queryParams])
    
    useEffect(() => {
        navigate(url);
    }, [url, navigate]);
    
    return { queryParams, handleSetQueryParams };
};