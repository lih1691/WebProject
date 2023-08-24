import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderContainer from "./Containers/Base/HeaderContainer";
import { MainPage, Auth } from 'pages';
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <HeaderContainer />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path={"/Auth/*"} element = {<Auth />} />
                    <Route path={"*"} element = {<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
