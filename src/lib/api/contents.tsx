import axios from 'axios';

export const loadContents = (pageData: string) => axios.get('api/contents' + pageData);