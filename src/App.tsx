import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { HeaderContainer } from "@Containers/Base";
import { MainPage, Auth, ReviewListPage, NewsListPage, CommunityPage } from './Pages/index';

const Wrapper = styled.div`
  position: relative;
  min-width: 1400px;
  width: 100%;
`
function App(){
    
    return (
        <Wrapper>
            <HeaderContainer />
            <Routes>
                <Route path={"/"}  element={<MainPage />} />
                <Route path={"/auth/*"} element={<Auth />}/>
                <Route path={"/review/*"} element={<ReviewListPage/> }/>
                <Route path={"/news/*"} element={<NewsListPage/> }/>
                <Route path={"/community/*"} element={<CommunityPage/>} />
            </Routes>
        </Wrapper>
    );
}

export default App;
