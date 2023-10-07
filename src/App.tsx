import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HeaderContainer, FooterContainer } from "@Containers/Base";
import { MainPage, Auth, ReviewListPage, NewsListPage, CommunityPage } from '@pages/index';

function App(){
    return (
        <div>
            <HeaderContainer />
            <Routes>
                <Route path={"/"}  element={<MainPage />} />
                <Route path={"/Auth/*"} element={<Auth />}/>
                <Route path={"/Review/*"} element={<ReviewListPage/> }/>
                <Route path={"/News/*"} element={<NewsListPage/> }/>
                <Route path={"/Community/*"} element={<CommunityPage/>} />
            </Routes>
            <FooterContainer />
        </div>
    );
}

export default App;
