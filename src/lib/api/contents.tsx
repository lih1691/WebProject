import axios from 'axios';
import {reviewContent} from "@redux/features/ReviewContentsSlice";

export const fetchReviewContents = (constents: reviewContent[]) => axios.get('/api/contents/review');
export const fetchNewsContents = () => axios.get('/api/contents/news');
export const fetchCommunityContents = () => axios.get('api/contents/community');