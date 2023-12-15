import axios from 'axios';

export const fetchContents = (
    contentType: string,
    category: string,
    searchOption?: string | null,
    keyword?: string | null
) => {
    const searchQueryParameters = searchOption && keyword
        ? `&search_option=${searchOption}&keyword=${keyword}` : '';
    
    return axios.get(`/api/contents/${contentType}?category=${category}${searchQueryParameters}`);
}

