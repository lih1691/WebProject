import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { HeaderContainer } from "@Containers/Base";
import { MainPage, Auth, ContentsPage } from '@Pages/index';

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
                <Route path={"/contents/*"} element={<ContentsPage/> }/>
            </Routes>
        </Wrapper>
    );
}

export default App;
