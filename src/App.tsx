import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from "@Containers/Base/HeaderContainer";
import { MainPage, Auth, ReviewListPage, NewsListPage } from '@pages/index';

const App: React.FC = () => {
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route path={"/"}  element={<MainPage />} />
                <Route path={"/Auth/*"} element={<Auth />}/>
                <Route path={"/Review/*"} element={<ReviewListPage/> }/>
                <Route path={"/News/*"} element={<NewsListPage/> }/>
            </Routes>
        </div>
    );
}

export default App;
