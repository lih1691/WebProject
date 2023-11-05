import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import useInput from '../lib/useInput';
import { encrypt, decrypt } from '@lib/crypto';

const SERVER_URL = 'http://localhost:4000/api/userData';

const SignUpPage = (props) => {
    const [userData, setUserData] = useState([]);
    const [data, onChange, reset] = useInput({
        userID: "",
        userPwd: "",
    });

    const fetchData = () => {
        fetch(SERVER_URL)
            .then((response) => response.json())
            .then((data) => setUserData(data));
        console.log(userData);
    }

    const axiosData = async () => {
        const response = await axios.get(SERVER_URL);
        setUserData(response.data);
    };

    useEffect(() => { fetchData() }, []);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const id = encrypt(e.target.userID.value) ;
        const password = encrypt(e.target.userPwd.value);
        await axios.post(SERVER_URL, {id, password});
        axiosData();
        reset();
    };

    return (
        <div className='App'>
            <form onSubmit={onSubmitHandler}
                  autoComplete= "off"
                  style = {{
                      display: "flex",
                      flexDirection: 'column',
                      width: "500px",
                      margin: "auto",
                  }}
            >
                <h1>로그인</h1>
                <label style = {{ marginTop: "10px" }}>
                    아이디
                </label>
                <input type= "text" name="userID" value={data.userID} onChange={onChange}/>
                <label style = {{ marginTop: "10px" }}>
                    비밀번호
                </label>
                <input type= "password" name="userPwd" value={data.userPwd} onChange={onChange}/>
                <input style = {{ marginTop: "10px" }} type={"submit"}/>
            </form>
            {userData?.map((data) => (
                <div key={data.userIndex} style={{ display: 'flex' }}>
                    <label>id : </label> <div>{(decrypt(data.id))}</div>
                    <label>, password : </label> <div>{(data.password)}</div>
                </div>
            ))}
        </div>
    );
};

export default SignUpPage;