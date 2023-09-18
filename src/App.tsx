import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from "@Containers/Base/HeaderContainer";
import { MainPage, Auth } from '@pages/index';

const App: React.FC = () => {
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/Auth/*"} element={<Auth />}/>
            </Routes>
        </div>
    );
}

export default App;
