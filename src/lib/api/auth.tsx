import axios from 'axios';

export const checkUserIDExists = (ID: string) => axios.get('/api/auth/exists/userid/' + ID);
export const checkEmailExists = (email: string) => axios.get('/api/auth/exists/email/' + email);
export const checkNickNameExists = (nickName: string) => axios.get('/api/auth/exists/nickname/' + nickName);
export const localSignUp = (userData : string) => axios.post('/api/auth/signup/local', userData);
export const localSignIn = (userData: string) => axios.post('/api/auth/signin/local', userData);
export const checkStatus = () => axios.get('/api/auth/check');
export const logOut = () => axios.post('/api/auth/logOut');