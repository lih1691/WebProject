import axios from 'axios';

export const checkUserIDExists = (userID) => axios.get('/api/auth/exists/userID/' + userID);
export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);

export const localSignUp = ({userID, userEmail, userPWD}) => axios.post('/api/auth/SignUp/local', {userID, userEmail, userPWD});
export const localSignIn = ({userID, userPWD}) => axios.post('/api/auth/SignIn/local', {userID, userPWD});

export const checkStatus = () => axios.get('/api/auth/check');
export const logOut = () => axios.post('/api/auth/logOut');