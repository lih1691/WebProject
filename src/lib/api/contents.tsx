import axios from 'axios';

export const fetchReviewContents = () => axios.get('/api/contents/review');
export const fetchNewsContents = () => axios.get('/api/contents/news');
export const fetchCommunityContents = () => axios.get('/api/contents/community');

export const fetchContents = (contentType: string) => axios.get(`/api/contents/${contentType}`);