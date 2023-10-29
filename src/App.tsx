import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { HeaderContainer, FooterContainer } from "@Containers/Base";
import { MainPage, Auth, ReviewListPage, NewsListPage, CommunityPage } from '@pages/index';

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
                <Route path={"/Auth/*"} element={<Auth />}/>
                <Route path={"/Review/*"} element={<ReviewListPage/> }/>
                <Route path={"/News/*"} element={<NewsListPage/> }/>
                <Route path={"/Community/*"} element={<CommunityPage/>} />
            </Routes>
        </Wrapper>
    );
}

export default App;
