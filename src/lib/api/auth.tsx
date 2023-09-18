import axios from 'axios';

export const checkUserIDExists = (ID: string) => axios.get('/api/auth/exists/userID/' + ID);
export const checkEmailExists = (email: string) => axios.get('/api/auth/exists/email/' + email);
export const checkNickNameExists = (nickName: string) => axios.get('/api/auth/exists/nickName/' + nickName);
export const localSignUp = ({userID, userNickName, userEmail, userPWD} : {
    userID: string;
    userNickName: string;
    userEmail: string;
    userPWD: string;
}) => axios.post('/api/auth/SignUp/local', {userID, userNickName, userEmail, userPWD});
export const localSignIn = ({userID, userPWD} : {
    userID: string;
    userPWD: string;
}) => axios.post('/api/auth/SignIn/local', {userID, userPWD});
export const checkStatus = () => axios.get('/api/auth/check');
export const logOut = () => axios.post('/api/auth/logOut');