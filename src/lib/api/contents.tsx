import axios from 'axios';

export const fetchContents = (
    contentType: string,
    category: string,
    searchType?: string,
    keyword?: string
) => {
    const searchQueryParameters = searchType && keyword
        ? `&searchtype=${searchType}&keyword=${keyword}` : '';
    
    return axios.get(`/api/contents/${contentType}?category=${category}${searchQueryParameters}`);
}

