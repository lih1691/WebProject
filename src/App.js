import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from "./Containers/Base/HeaderContainer";
import { MainPage, Auth } from 'pages';

const App = () => {
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route exact path={"/"} element={<MainPage />} />
                <Route path={"/Auth/*"} element={<Auth />}/>
            </Routes>
        </div>
    );
}

export default App;
